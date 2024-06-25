import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { Ammo } from "./Ammo";




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

    // This is where all Mystery Ammo containers are price generated upon trader postDBLoad
    public generateMysteryAmmoPrices(){
        let ammo: Ammo = new Ammo();
        let mysteryAmmoPrices = {};

        for(let i = 0; i < ammo.ammoNames.length; i++){
            const current = ammo.ammoNames[i];
            let currentPrices: Array<number> = this.getPrices(current, ammo);
            let currentContainerPrice = this.config.ammo_cases_price_and_odds[current + "_case_price"];
            const rare_odds = this.config.ammo_odds[current + "_rare"];
            const uncommon_odds = this.config.ammo_odds[current + "_uncommon"] + rare_odds;
            const common_odds = this.config.ammo_odds[current + "_common"] + uncommon_odds;
            const desiredProfit = 1.20;
            const iterations = 50000;
            
            for(let j = 0; j < iterations j++){
                let sum = 0;
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

                const spent = iterations * currentContainerPrice;
                const profit = sum - spent;
                const profitPercentage = sum * 100 
            }

        }

        
    }

    private getPrices(name: string, ammo: Ammo): Array<number> {
        const databaseServer = this.container.resolve<DatabaseServer>("DatabaseServer")
        const tables: IDatabaseTables = databaseServer.getTables();
        const priceTable = databaseServer.getTables().templates.prices;
        const itemHelper: ItemHelper = this.container.resolve<ItemHelper>("ItemHelper");
        let items = itemHelper.getItems();
        let rarities: Array<string> = ["_rare", "_uncommon", "_common"]
        let prices: Array<number> = [];
        let sum: number = 0;

        for(let i = 0; i < rarities.length; i++){
            for (let j = 0; j < ammo.ammo[name + rarities[i]].length; j++){
                const currentPrice = itemHelper.getDynamicPrice(ammo.ammo[name + rarities[i]][j]) * 22.5;
                sum = sum + currentPrice; 
            }
            prices.push(sum);
            sum = 0;
        }

        return prices;
    }
}