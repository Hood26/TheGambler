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

    // This is where all Mystery Ammo containers are price generated during postDBLoad
    public generateMysteryAmmoPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Ammo Prices...");
        let ammo: Ammo = this.MysteryContainer.items.ammo;
        let mysteryAmmoPrices = {};

        for(let i = 0; i < ammo.names.length; i++){
            const current = ammo.names[i];
            const amount = ((this.config.odds[current + '_min'] + this.config.odds[current + '_max']) / 2);
            const odds: Array<number> = this.MysteryContainer.getOdds(current);
            const rarities: Array<string> = this.MysteryContainer.getRarities(current);
            const items = this.MysteryContainer.items['ammo'].items[current];
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            let currentPrices: Array<number> = this.getMysteryContainerPrices(current, current,  rarities, items, amount);
            
            currentContainerPrice = this.runSimulation(currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(current));
            mysteryAmmoPrices[current + "_case_price"] = currentContainerPrice;
        }

        this.logger.info("[TheGambler] Finished Generating Mystery Ammo Prices!");
        //console.log("Mystery Ammo Prices")
        //console.log(mysteryAmmoPrices);
        return mysteryAmmoPrices;
    }

    // All Mystery Containers that contain presets are price generated here
    public generateMysteryContainerPresetPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Container Preset Prices...");
        let mysterPresetPrices = {};
        const names = this.MysteryContainer.getPresetNames();

        for (let i = 0; i < names.length; i++) {
            const current = names[i]; // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const name = current; // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const parent: string = this.MysteryContainer.getParent(name);
            const rarities: Array<string> = this.MysteryContainer.getRarities(name);
            const odds: Array<number> = this.MysteryContainer.getOdds(name);
            const items = this.MysteryContainer.items[this.MysteryContainer.getName(name)];
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            let currentPrices: Array<number> = this.getContainerPresetPrices(current, current,  rarities, items);

            currentContainerPrice = this.runSimulation(currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(name));
            mysterPresetPrices[name + "_case_price"] = currentContainerPrice;
        }

        this.logger.info("[TheGambler] Finished Generating Mystery Container Prices!");
        console.log("Mystery Preset Prices")
        console.log(mysterPresetPrices)
        return mysterPresetPrices;

    }

    public generateMysteryContainerPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Container Prices...");
        let mysteryAmmoPrices = {};
        const mysteryContainerNames = this.MysteryContainer.simulation;

        for(let i = 0; i < mysteryContainerNames.length; i++){
            //console.log("Container Name!!")
            //console.log(mysteryContainerNames[i])
            const current = this.MysteryContainer.getName(mysteryContainerNames[i]); // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const name : string = mysteryContainerNames[i]; // we need to remove current and name from this and generateMysterContainerPrices() as this is stupid implementation
            const parent :string = this.MysteryContainer.getParent(name);
            const rarities: Array<string> = this.MysteryContainer.getRarities(name);
            const odds: Array<number> = this.MysteryContainer.getOdds(name);
            const items = this.MysteryContainer.items[this.MysteryContainer.getName(name)];
            let currentPrices: Array<number> = this.getMysteryContainerPrices(current, parent, rarities, items);
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];

            currentContainerPrice = this.runSimulation(currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(name));
            mysteryAmmoPrices[name + "_case_price"] = currentContainerPrice;
        }
        this.logger.info("[TheGambler] Finished Generating Mystery Container Prices!");
        //console.log("Mystery Container Prices")
        //console.log(mysteryAmmoPrices)
        return mysteryAmmoPrices;
    }

    private getItemPrice(name: string, parent: string, rarities: Array<string>, items: any, amount: number = 1, currentRarityIndex: number, currentItemIndex: number): number {
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        //console.log([items.rewards[currentRarityIndex][currentItemIndex]])
        //console.log('Parent!!')
        //console.log(parent)
        const override: number = this.MysteryContainer.getOverride(parent, items.rewards[currentRarityIndex][currentItemIndex]);
        let currentPrice: number = 0;

        if (override && this.config['mystery_container_override_enable']) {
            currentPrice = override * amount;
        } else {
            if(Number.isInteger(items.rewards[currentRarityIndex][currentItemIndex])){ // Override exists for current item
                currentPrice = items.rewards[currentRarityIndex][currentItemIndex];
            } else{ // No override exists for current item
                
                // Thinking: We always want to use flea price as this is most accurate, but if there is no flea price we must fallback to handbook
                const fleaPrice = itemHelper.getDynamicItemPrice(items.rewards[currentRarityIndex][currentItemIndex]);
                if (fleaPrice == 0) {
                    currentPrice = itemHelper.getItemMaxPrice(items.rewards[currentRarityIndex][currentItemIndex]) * amount;

                } else {
                    currentPrice = fleaPrice * amount;
                }
            }
        }
        return currentPrice;
    }

    private getItemPriceNEW(parent: string, currentItem: string, amount: number): number {
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
                const currentPrice = this.getItemPrice(name, parent, rarities, items, amount, i, j);
                sum = sum + currentPrice;
                count++; 
            }
            sum = sum / count;
            prices.push(sum);
            sum = 0;
        }
        this.MysteryContainer.setRarityAverageProfit(name, prices);
        return prices;
    }

    // checks if the current item id is part of a traders assort and returns the price.
    private traderAssortPrice(currentItem: string): any {
        const databaseServer: DatabaseServer = this.container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();
        const traderIDs = ['58330581ace78e27b8b10cee', '54cb50c76803fa8b248b4571', '5c0647fdd443bc2504c2d371', '5a7c2eca46aef81a7ca2145d', '5935c25fb3acc3127c3d8cd9'];
        let price = 0;
        let chosenTrader = '';
        let truth = false

        
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

                    chosenTrader = traderID;
                    truth = true;
                    break;
                }

            }
            if (truth) { 
                break;
            }
        }
            
        //console.log("TEST")
        //console.log(tables.traders['5a7c2eca46aef81a7ca2145d'].assort.barter_scheme['666aa2f9e8e00edadd0d0f52'][0][0].count);



        //console.log(tables.traders['5935c25fb3acc3127c3d8cd9'].assort.items);
        return [price, chosenTrader];
    }

    private getContainerPresetPrices(name: string ,parent: string, rarities: Array<string>, items: any, amount: number = 1): Array<number> {
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        let prices: Array<number>    = [];
        let weaponPricesPerTier: Array<number> = [];
        let tierTotal: number        = 0;
        let sum: number              = 0;
        //let checker: Array<string>   = [];

        //console.log('TESTS')
        //.log(items)

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for(let j = 0; j < items.rewards[i].length; j++) {
                for(let k = 0; k < items.rewards[i][j].Items.length; k++){
                    let currentItem, currentPrice;
                    currentItem = items.rewards[i][j].Items[k]._tpl;
                    if (this.config.skip_base_attachments.includes(currentItem)) {
                        continue;
                    } else {
                        const priceArray = this.traderAssortPrice(currentItem); // get trader price
                        currentPrice = priceArray[0];

                        if (currentPrice == 0) {
                            if(i == 1 && j == 25) {
                                console.log('Flea Price')
                            }


                            //console.log('Current Item')
                            currentPrice = this.getItemPriceNEW(parent, currentItem, amount); // get override or flea price
                        } else {
                            if(i == 1 && j == 25) {
                                console.log('Trader Price and Trader ID = ' + priceArray[1])
                            }
                        }
                        sum = sum + currentPrice;
                    }


                    if(i == 1 && j == 25) {
                        console.log(`"${currentItem}": ${currentPrice}, // ${itemHelper.getItemName(currentItem)}`);
                        //console.log('Current Item')
                        //console.log(currentItem)
                        //console.log('Current Item Price')
                        //console.log(currentPrice)
                    }
                    if (i == 1 && j == 25 && k == items.rewards[i][j].Items.length - 1) {
                        console.log('Sum')
                        console.log(sum)
                    }


                }
                count++
                weaponPricesPerTier.push(Math.floor(sum));
                sum = 0;
            }
            if(i == 1) {
                console.log('Weapon Prices Rarest Tier:')
                console.log(weaponPricesPerTier)
            }
            const tierSum = weaponPricesPerTier.reduce((a, b) => a + b, 0);
            sum = tierSum / count;
            prices.push(Math.floor(sum));
            sum = 0;
            weaponPricesPerTier = [];
        }
        this.MysteryContainer.setRarityAverageProfit(name, prices);
        console.log('Container Weapon Prices:')
        console.log(prices)
        return prices;
    }

    // Runs a simulation of a Mystery Container that generates the most optimal price for a desired profit percentage
    public runSimulation(containerPrice: number, odds: Array<number>, prices: Array<number>, basePercentage: number, desiredPercentage: number): number {
        let currentContainerPrice: number = containerPrice;
        let currentPercentage: number     = basePercentage;
        const iterations                  = 300000; // 50,000 Mystery Containers simulated
        let checker: Array<number>        = [];

        while (currentPercentage != desiredPercentage) {
            let spent = 0; 
            let sum = 0;
            let profit = 0;

            for(let j = 0; j < iterations; j++){
                const roll = this.randomUtil.getFloat(0, 100);

                for(let k = 0; k < odds.length; k++){
                    if(roll <= odds[k]){
                        sum += prices[k]; // odds and prices have to be indexed by rarity order [rarest,... ->, common] or else KABOOM
                        break; // This caused me soo much pain :(
                    }
                }

                profit = sum - spent;
                spent = iterations * currentContainerPrice;
                currentPercentage = Math.floor((sum * 100) / spent);
            }

            if(checker.includes(currentContainerPrice)) {
                break; // The final profit percentage may be a little off by up to 1% by doing this... Look into in the future...
            } else {
                checker.push(currentContainerPrice);

                if(currentPercentage < desiredPercentage) {
                    currentContainerPrice -= 50;
                } else if ( currentPercentage > desiredPercentage) {
                    currentContainerPrice += 50;
                }
            }
            //console.log(`Current Container Price: ${currentContainerPrice} Current Percentage: ${currentPercentage} Desired Percentage: ${desiredPercentage}`);
        }
        return currentContainerPrice;
    }
}

                    //if(i == 4 && k != 0) {
                        //if (!checker.includes(currentItem)) {
                            //checker.push(currentItem);
                            //console.log(`"${currentItem}", // ${itemHelper.getItemName(currentItem)}`);
                        //}
                        //console.log(`"${currentItem}", // ${itemHelper.getItemName(currentItem)}`);
                        //console.log('Current Item')
                        //console.log(currentItem)
                        //console.log('Current Item Price')
                        //console.log(currentPrice)
                    //}
                    //if (i == 4 && j == 0 && k == items.rewards[i][j].Items.length - 1) {
                        //console.log('Sum')
                        //console.log(sum)
                    //}