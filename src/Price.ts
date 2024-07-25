import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { RandomUtil } from "@spt/utils/RandomUtil";
import { Ammo } from "./containers/Ammo";
import { MysteryContainer } from "./MysteryContainer";




export class Price{
    private container: DependencyContainer;
    private config: any;
    private logger: ILogger
    private randomUtil: any
    public MysteryContainer: MysteryContainer

    constructor(container: DependencyContainer, config: any, logger: ILogger){
        this.container        = container;
        this.config           = config;
        this.logger           = logger;
        this.MysteryContainer = new MysteryContainer(config, logger);
        this.randomUtil       = this.container.resolve<RandomUtil>("RandomUtil");
    }

    // This is where all Mystery containers are price generated during server load
    public generateContainerPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Container Prices...");
        let containerPrices = {};
        const mysteryContainerNames = [...this.MysteryContainer.simulation, ...this.MysteryContainer.items.ammo.names];
        console.log(mysteryContainerNames)

        for(let i = 0; i < mysteryContainerNames.length; i++){
            let amount: number = 1;
            const current = this.MysteryContainer.getName(mysteryContainerNames[i]); // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const name : string = current; // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const parent :string = this.MysteryContainer.getParent(name);
            const rarities: Array<string> = this.MysteryContainer.getRarities(name);
            const odds: Array<number> = this.MysteryContainer.getOdds(name);
            let currentPrices: Array<number> = [];
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];

            if (this.MysteryContainer.isAmmo(mysteryContainerNames[i])) {
                //console.log('Ammo')
                const amount = ((this.config.odds[current + '_min'] + this.config.odds[current + '_max']) / 2);
                const items = this.MysteryContainer.items['ammo'].items[current];
                currentPrices = this.getMysteryContainerPrices(current, current,  rarities, items, amount);

            } else if (this.MysteryContainer.isPreset(mysteryContainerNames[i])) {
                //console.log('Preset')
                const items = this.MysteryContainer.items[this.MysteryContainer.getParent(name)];
                currentPrices = this.getContainerPresetPrices(current, parent,  rarities, items);
                
            } else {
                //console.log('Container')
                const items = this.MysteryContainer.items[this.MysteryContainer.getName(name)];
                currentPrices = this.getMysteryContainerPrices(current, parent, rarities, items);
                
            }
            
            currentContainerPrice = this.runPriceGeneration(odds, currentPrices, this.MysteryContainer.getProfitPercentage(name));
            containerPrices[name + "_case_price"] = currentContainerPrice;

        }
        this.logger.info("[TheGambler] Finished Generating Mystery Container Prices!");
        //console.log("Mystery Container Prices")
        //console.log(containerPrices)
        return containerPrices;
    }

    private getItemPrice(parent: string, currentItem: string, amount: number): number {
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        //console.log([items.rewards[currentRarityIndex][currentItemIndex]])
        //console.log('Parent!!')
        //console.log(parent)
        const override: number = this.MysteryContainer.getOverride(parent, currentItem);
        let currentPrice: number = 0;

        if (override && this.config['mystery_container_override_enable']) {
            currentPrice = override * amount;
            //console.log('Override Price!!!!!!!!!')
        } else {
    
            // Thinking: We always want to use flea price as this is most accurate, but if there is no flea price we must fallback to handbook
            const fleaPrice = itemHelper.getDynamicItemPrice(currentItem);
            if (fleaPrice == 0) {
                currentPrice = itemHelper.getItemMaxPrice(currentItem) * amount;
            } else {
                currentPrice = fleaPrice * amount;
            }
        }
        return currentPrice;
    }

    // Generates the average income for a Mystery Container sorted by rarity
    private getMysteryContainerPrices(name: string ,parent: string, rarities: Array<string>, items: any, amount: number = 1): Array<number> {
        let prices: Array<number>    = [];
        let sum: number              = 0;

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for (let j = 0; j < items.rewards[i].length; j++){
                const currentItem = items.rewards[i][j]
                const currentPrice =  this.getItemPrice(parent, currentItem, amount);
                sum = sum + currentPrice;
                count++; 
            }
            sum = sum / count;
            prices.push(sum);
            sum = 0;
        }
        this.MysteryContainer.setRarityAverageProfit(name, prices);

        //console.log('getMysteryContainerPrices() Container Prices...:')
        //console.log(prices)
        return prices;
    }

    // checks if the current item id is part of a traders assort and returns the price.
    private traderAssortPrice(currentItem: string): any {
        const databaseServer: DatabaseServer = this.container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();
        const traderIDs = ['58330581ace78e27b8b10cee', '54cb50c76803fa8b248b4571', '5c0647fdd443bc2504c2d371', '5a7c2eca46aef81a7ca2145d', '5935c25fb3acc3127c3d8cd9'];
        let price = 0;
        
        for (const traderID of traderIDs) {
            const traderAssort = tables.traders[traderID].assort
            for (let i = 0; i < traderAssort.items.length; i++) {
                if (traderAssort.items[i]._tpl == currentItem && traderAssort.items[i].slotId == 'hideout') {
                    const _id = traderAssort.items[i]._id; 
                    //console.log('Trader ID = ' + traderID + 'item TPL = ' + traderAssort.items[i]._tpl + ' Item ID = ' + _id)
                    price = traderAssort.barter_scheme[_id][0][0].count;

                    if (price < 10) { // price is most likely a barter. This is a bad way of doing this, but fuck it.
                        continue;
                    }

                    if (traderID == '5935c25fb3acc3127c3d8cd9'){
                        price *= 142; // peacekeeper sells in dollars, must convert to roubles
                    }
                    return price;
                }
            }
        }
        return price; // No trader sells the item
    }

    private getContainerPresetPrices(name: string ,parent: string, rarities: Array<string>, items: any, amount: number = 1): Array<number> {
        console.log('getContainerPresetPrices()...')
        let prices: Array<number>    = [];
        let weaponPricesPerTier: Array<number> = [];
        let tierTotal: number        = 0;
        let sum: number              = 0;

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for(let j = 0; j < items.rewards[i].length; j++) {
                for(let k = 0; k < items.rewards[i][j].Items.length; k++){

                    let currentPrice: number = 0;
                    let currentItem = items.rewards[i][j].Items[k]._tpl;
                    if (this.config.skip_base_attachments.includes(currentItem)) { // attachment is a base attachment, skip...
                        continue;

                    } else {
                        if (name == 'weapon' || name == 'premium_weapon') { // If weapon, we check if a trader sells the attachment
                            currentPrice = this.traderAssortPrice(currentItem);
                        }

                        if (currentPrice == 0) { // No traders sell the attachment, we get the flea price
                            currentPrice = this.getItemPrice(parent, currentItem, amount); // get override or flea price
                        }

                        sum = sum + currentPrice;
                    }
                }
                count++
                weaponPricesPerTier.push(Math.floor(sum));
                sum = 0;
            }
            const tierSum = weaponPricesPerTier.reduce((a, b) => a + b, 0);
            sum = tierSum / count;
            prices.push(Math.floor(sum));
            sum = 0;
            weaponPricesPerTier = [];
        }
        this.MysteryContainer.setRarityAverageProfit(name, prices);
        //console.log('Container Weapon Prices:')
        //console.log(prices)
        return prices;
    }

    private runPriceGeneration = (odds: Array<number>, prices: Array<number>, profitability: number) => {
        //console.log('Running Price Generation...')
        let sum: number = 0;
        let trackOdds = 0;

        for(let i = 0; i < odds.length; i++){
            const currentOdds = odds[i] - trackOdds;
            trackOdds = odds[i]
            sum += prices[i] * (currentOdds / 100);
        }
        sum *= profitability;
        return Math.floor(sum);
    }
}