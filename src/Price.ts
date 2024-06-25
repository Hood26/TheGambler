import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { Ammo } from "./Ammo";
import { Melees } from "./Melees";




export class Price{
    private container: DependencyContainer;
    private config: any;
    private logger: ILogger
    private randomUtil: any

    constructor(container: DependencyContainer, config: any, logger: ILogger){
        this.container = container;
        this.config    = config;
        this.logger    = logger;
        this.randomUtil = this.container.resolve<RandomUtil>("RandomUtil");
    }

    // This is where all Mystery Ammo containers are price generated during postDBLoad
    public generateMysteryAmmoPrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Ammo Prices...");
        let ammo: Ammo = new Ammo();
        let mysteryAmmoPrices = {};

        for(let i = 0; i < ammo.ammoNames.length; i++){
            const current = ammo.ammoNames[i];
            let currentPrices: Array<number> = this.getAmmoPrices(current, ammo);
            let currentContainerPrice = this.config.ammo_cases_price_and_odds[current + "_case_price"];
            const rare_odds = this.config.ammo_odds[current + "_rare"];
            const uncommon_odds = this.config.ammo_odds[current + "_uncommon"] + rare_odds;
            const common_odds = this.config.ammo_odds[current + "_common"] + uncommon_odds;
            const iterations = 50000;
            const desiredPercentage = 115; // 115% profit
            let currentPercentage = -1;

            //this.logger.info(`\n[TheGambler][Generate] rare: ${rare_odds}! uncommon: ${uncommon_odds}! common: ${common_odds}!`);

            while (currentPercentage != desiredPercentage){
                let spent = 0; 
                let sum = 0;

                for(let j = 0; j < iterations; j++){
                    const roll = this.randomUtil.getFloat(0, 100);
    
                    if (roll <= rare_odds){
                        sum = sum + currentPrices[0]
                    } else if (roll <= uncommon_odds) {
                        sum = sum + currentPrices[1]
                    } else if (roll <= common_odds) {
                        sum = sum + currentPrices[2]
                    } else {
                        sum = sum + 0
                    }
    
                    spent = iterations * currentContainerPrice;
                    currentPercentage = Math.floor((sum * 100) / spent) 
                }

                //this.logger.info(`Profit = ${profit} Spent = ${spent} Sum = ${sum}`)
                //this.logger.info(`Ammo Mystery Container = ${current} Current Percentage = ${currentPercentage} Desired Percentage = ${desiredPercentage}`)

                if(currentPercentage < desiredPercentage) {
                    currentContainerPrice -= 50;
                } else if ( currentPercentage > desiredPercentage) {
                    currentContainerPrice += 50;
                }
            }
            mysteryAmmoPrices[current + "_case_price"] = currentContainerPrice;
        }
        this.logger.info("[TheGambler] Finished Generating Mystery Ammo Prices!");
        return mysteryAmmoPrices;
    }

    private getAmmoPrices(name: string, ammo: Ammo): Array<number> {
        const databaseServer = this.container.resolve<DatabaseServer>("DatabaseServer")
        //const tables: IDatabaseTables = databaseServer.getTables();
        //const priceTable = databaseServer.getTables().templates.prices;
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        //let items = itemHelper.getItems();
        let rarities: Array<string> = ["_rare", "_uncommon", "_common"]
        let prices: Array<number> = [];
        let sum: number = 0;

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for (let j = 0; j < ammo.items[name + rarities[i]].length; j++){
                const currentPrice = itemHelper.getDynamicItemPrice(ammo.items[name + rarities[i]][j]) * 22.5;
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
        return prices;
    }


    // This is where all Mystery Ammo containers are price generated during postDBLoad
    public generateMysteryMeleePrices(): {} {
        this.logger.info("[TheGambler] Generating Mystery Melee Prices...");
        let melees: Melees = new Melees();
        let mysteryAmmoPrices = {};
        const current = "melees";
        let rarities: Array<string> = ["_extremely_rare","_rare", "_uncommon", "_common"]
        let currentPrices: Array<number> = this.getMysteryItemPrices(current, rarities, melees);
        let currentContainerPrice = this.config.ammo_cases_price_and_odds[current + "_case_price"];
        let odds: Array<number> = [];
        odds.push(this.config.ammo_odds[current + "_extremely_rare"])
        odds.push(this.config.ammo_odds[current + "_extremely_rare"] + odds[0]);
        odds.push(this.config.ammo_odds[current + "_extremely_rare"] + odds[1]);
        odds.push(this.config.ammo_odds[current + "_extremely_rare"] + odds[2])

        let currentPercentage = -1;
        const desiredPercentage = 115; // 115% profit

        this.logger.info(`\n[TheGambler][GenerateMeleePrice] extremelyRare: ${odds[0]} rare: ${odds[1]}! uncommon: ${odds[2]}! common: ${odds[3]}!`);

        this.runSimulation(currentContainerPrice, odds, currentPrices, currentPercentage, desiredPercentage)
        mysteryAmmoPrices[current + "_case_price"] = currentContainerPrice;
        this.logger.info("[TheGambler] Finished Generating Mystery Melee Prices!");
        return mysteryAmmoPrices;
    }

    // Runs a simulation of a Mystery Container that generates the most optimal price for a given Mystery Container
    public runSimulation(containerPrice: number, odds: Array<number>, prices: Array<number>, basePercentage: number, desiredPercentage: number) {
        let currentContainerPrice = containerPrice;
        let currentPercentage     = basePercentage;
        const iterations          = 50000; // Needs more testing...

        while (currentPercentage != desiredPercentage) {
            let spent = 0; 
            let sum = 0;

            for(let j = 0; j < iterations; j++){
                const roll = this.randomUtil.getFloat(0, 100);

                for(let k = 0; k < odds.length; k++){
                    if(roll <= odds[k]){
                        sum += prices[k]; // odds and prices have to be index by rarity order (rarest,... ->, common) or else KABOOM
                    }
                }

                spent = iterations * currentContainerPrice;
                currentPercentage = Math.floor((sum * 100) / spent) 
            }

            //this.logger.info(`Profit = ${profit} Spent = ${spent} Sum = ${sum}`)
            //this.logger.info(`Ammo Mystery Container = ${current} Current Percentage = ${currentPercentage} Desired Percentage = ${desiredPercentage}`)

            if(currentPercentage < desiredPercentage) {
                currentContainerPrice -= 50;
            } else {
                currentContainerPrice += 50;
            }
        }
    }

    // Generates the average income for a Mystery Container by rarity
    private getMysteryItemPrices(name: string, rarities: Array<string>, item: any): Array<number> {
        const databaseServer = this.container.resolve<DatabaseServer>("DatabaseServer")
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        let prices: Array<number> = [];
        let sum: number = 0;

        for(let i = 0; i < rarities.length; i++){
            let count = 0;
            for (let j = 0; j < item.items[name + rarities[i]].length; j++){
                const currentPrice = itemHelper.getDynamicItemPrice(item.items[name + rarities[i]][j]);
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
        return prices;
    }
}