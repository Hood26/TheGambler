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
        let ammo: Ammo = new Ammo();
        let mysteryAmmoPrices = {};

        for(let i = 0; i < ammo.ammoNames.length; i++){
            const current = ammo.ammoNames[i];
            const count = ((this.config.odds[current + '_min'] + this.config.odds[current + '_max']) / 2);
            const odds: Array<number> = this.MysteryContainer.getOdds(current);
            const rarities: Array<string> = this.MysteryContainer.getRarities(current);
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];

            let currentPrices: Array<number> = this.getMysteryItemPrices(current, 'ammo',  rarities, this.MysteryContainer.items['ammo'].items[current], count);
            currentContainerPrice = this.runSimulation(current, currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(current));
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
            const current = mysteryContainerNames[i];
            const rarities: Array<string> = this.MysteryContainer.getRarities(current);
            const odds: Array<number> = this.MysteryContainer.getOdds(current);
            if(current == 'wallet'){
                //console.log(current)
                //console.log(rarities)
                //console.log(odds)
                //console.log(this.MysteryContainer.items[current])
                //console.log('\n\n\n')
            }
            
            let currentPrices: Array<number> = this.getMysteryItemPrices(current, current, rarities, this.MysteryContainer.items[current]);
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            
            
            //console.log(current)
            //console.log(currentPrices)
            //console.log(odds)
            //console.log(rarities)
            currentContainerPrice = this.runSimulation(current, currentContainerPrice, odds, currentPrices, -1, this.MysteryContainer.getProfitPercentage(current));
            //console.log('The Price = ' + currentContainerPrice)

            mysteryAmmoPrices[current + "_case_price"] = currentContainerPrice;
        }
        this.logger.info("[TheGambler] Finished Generating Mystery Container Prices!");
        //console.log(mysteryAmmoPrices)
        return mysteryAmmoPrices;
    }


    // Generates the average income for a Mystery Container sorted by rarity
    private getMysteryItemPrices(name: string ,containerType: string, rarities: Array<string>, item: any, amount: number = 1): Array<number> {
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        let prices: Array<number>    = [];
        let sum: number              = 0;

        if(name == 'armor'){
            //console.log("rig - getMysteryItemPrices");
            //console.log(name);
            //console.log(containerType);
            //console.log(rarities);
            //console.log(item);
            //console.log(amount);
            //console.log(containerType);
            //console.log('\n\n\n')
        }

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for (let j = 0; j < item.items[name + rarities[i]].length; j++){
                let currentPrice;
                const override: number = this.MysteryContainer.getOverride(containerType, [item.items[name + rarities[i]][j]]);

                if (override != undefined && this.config['mystery_container_override_enable'] == true){
                    currentPrice = override * amount;
                    //console.log("Override...")
                } else {
                    
                    if(Number.isInteger(item.items[name + rarities[i]][j])){ // Number
                        currentPrice = item.items[name + rarities[i]][j];
                        //console.log('Is Number')
                        //console.log(`The Number = ${item.items[name + rarities[i]][j]}`)
                    } else{ // String

                        // TESTING PURPOSES
                        if ( item.items[name + rarities[i]][j] == '544a5caa4bdc2d1a388b4568' ) {
                            //console.log("Crye Precision AVS plate carrier (Ranger Green)");
                            //console.log('Dynamic Flea Price = ' + itemHelper.getDynamicItemPrice(item.items[name + rarities[i]][j]));
                            //console.log('Static Item Price = ' + itemHelper.getStaticItemPrice(item.items[name + rarities[i]][j]));
                            //console.log('Item Max Price = ' + itemHelper.getItemMaxPrice(item.items[name + rarities[i]][j]));
                            //console.log('Item Price = ' + itemHelper.getItemPrice(item.items[name + rarities[i]][j]));
                            //console.log('Custom Gambler Price = ' + this.expensiveAmmos[item.items[name + rarities[i]][j]]);
                        }
                        
                        const fleaPrice = itemHelper.getDynamicItemPrice(item.items[name + rarities[i]][j]);
                        // Thinking: We always want to use flea price as this is most accurate, but if their is no flea price we must fallback to handbook
                        if (fleaPrice == 0) {
                            currentPrice = itemHelper.getItemMaxPrice(item.items[name + rarities[i]][j]) * amount;

                        } else {
                            currentPrice = fleaPrice * amount;
                        }
                    }
                }

                //const currentPrice = itemHelper.getDynamicItemPrice(item.items[name + rarities[i]][j]); // This can return 0 which is not what we want
                //const currentPrice = itemHelper.getItemMaxPrice(item.items[name + rarities[i]][j]);
                sum = sum + currentPrice;
                count++; 
            }
            sum = sum / count;
            //this.logger.info(`Count = ${count}`)
            prices.push(sum);
            sum = 0;
        }

        //this.logger.info(`${name} PRICES:`)
        //this.logger.info(prices)
        this.MysteryContainer.setRarityAverageProfit(name, prices);
        return prices;
    }

    // Runs a simulation of a Mystery Container that generates the most optimal price for a desired profit percentage
    public runSimulation(name: string, containerPrice: number, odds: Array<number>, prices: Array<number>, basePercentage: number, desiredPercentage: number): number {
        let currentContainerPrice: number = containerPrice;
        let currentPercentage: number     = basePercentage;
        const iterations                  = 50000; // 50,000 Mystery Containers simulated
        let checker: Array<number>        = [];

        //console.log('\nrunSimulation Information...');
        //console.log(`odds = ${odds} currentPercentage = ${currentPercentage}`);
        //console.log(`currentContainerPrice = ${currentContainerPrice} currentPercentage = ${currentPercentage}`);

        while (currentPercentage != desiredPercentage) {
            let spent = 0; 
            let sum = 0;
            let profit = 0;

            for(let j = 0; j < iterations; j++){
                const roll = this.randomUtil.getFloat(0, 100);

                for(let k = 0; k < odds.length; k++){
                    if(roll <= odds[k]){
                        sum += prices[k]; // odds and prices have to be index by rarity order (rarest,... ->, common) or else KABOOM
                        break; // This caused me soo much pain :(
                    }
                }

                profit = sum - spent;
                spent = iterations * currentContainerPrice;
                currentPercentage = Math.floor((sum * 100) / spent);
            }

            if(checker.includes(currentContainerPrice)) {
                break; // The final profit percentage may be a little off doing this... Look into in the future...
            } else {
                checker.push(currentContainerPrice);

                if(currentPercentage < desiredPercentage) {
                    currentContainerPrice -= 50;
                } else if ( currentPercentage > desiredPercentage) {
                    currentContainerPrice += 50;
                }
            }
            if(name == 'rig'){
                //this.logger.info(`Profit = ${profit} Spent = ${spent} Sum = ${sum}`)
                //this.logger.info(`Current Percentage = ${currentPercentage} Desired Percentage = ${desiredPercentage}`)
                //this.logger.info(`Current Container Price = ${currentContainerPrice} Desired Percentage = ${desiredPercentage}`)
            }
        }
        if(name == 'rig'){

            //console.log(`\n${name} Simulation Results: Final Percentage = ${currentPercentage} Desired Percentage = ${desiredPercentage}`)
            //console.log(odds)
        }
        return currentContainerPrice;
    }
}