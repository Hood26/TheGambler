import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
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
        return mysteryAmmoPrices;
    }

    public generateMysteryContainerPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Container Prices...");
        let mysteryAmmoPrices = {};
        const mysteryContainerNames = this.MysteryContainer.simulation;

        for(let i = 0; i < mysteryContainerNames.length; i++){
            console.log("Container Name!!")
            console.log(mysteryContainerNames[i])
            const current = this.MysteryContainer.getName(mysteryContainerNames[i]);
            const name : string = mysteryContainerNames[i];
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

    // Runs a simulation of a Mystery Container that generates the most optimal price for a desired profit percentage
    public runSimulation(containerPrice: number, odds: Array<number>, prices: Array<number>, basePercentage: number, desiredPercentage: number): number {
        let currentContainerPrice: number = containerPrice;
        let currentPercentage: number     = basePercentage;
        const iterations                  = 50000; // 50,000 Mystery Containers simulated
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
        }
        return currentContainerPrice;
    }
}