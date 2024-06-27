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
            let currentContainerPrice = this.config.price_stock[current + "_case_price"];
            const rare_odds = this.config.odds[current + "_rare"];
            const uncommon_odds = this.config.odds[current + "_uncommon"] + rare_odds;
            const common_odds = this.config.odds[current + "_common"] + uncommon_odds;
            const iterations = 50000;
            const desiredPercentage = 115; // 115% profit
            let currentPercentage = -1;
            let count = 0;

            //this.logger.info(`\n[TheGambler][Generate] rare: ${rare_odds}! uncommon: ${uncommon_odds}! common: ${common_odds}!`);

            while (currentPercentage != desiredPercentage){
                count++;
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
                //this.logger.info(`Spent = ${spent} Sum = ${sum}`)
                //this.logger.info(`Ammo Mystery Container = ${current} Current Percentage = ${currentPercentage} Desired Percentage = ${desiredPercentage}`)

                if(currentPercentage < desiredPercentage) {
                    currentContainerPrice -= 10;
                } else if ( currentPercentage > desiredPercentage) {
                    currentContainerPrice += 10;
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

            for (let j = 0; j < ammo.items[name + rarities[i]].length; j++){ //5efb0fc6aeb21837e749c801
                let currentPrice: number;

                if (this.expensiveAmmos[ammo.items[name + rarities[i]][j]] != undefined){ // Have to adjust expensive ammos as they are on the cheaper side in the handbook
                    if ( ammo.items[name + rarities[i]][j] == '59e0d99486f7744a32234762' ) {
                        //console.log('Dynamic Flea Price = ' + itemHelper.getDynamicItemPrice(ammo.items[name + rarities[i]][j]));
                        //console.log('Static Item Price = ' + itemHelper.getStaticItemPrice(ammo.items[name + rarities[i]][j]));
                        //console.log('Item Max Price = ' + itemHelper.getItemMaxPrice(ammo.items[name + rarities[i]][j]));
                        //console.log('Item Price = ' + itemHelper.getItemPrice(ammo.items[name + rarities[i]][j]));
                        //console.log('Custom Gambler Price = ' + this.expensiveAmmos[ammo.items[name + rarities[i]][j]]);
                        console.log('Ammo Count...')
                        console.log(((this.config.odds[name + '_min'] + this.config.odds[name + '_max']) / 2));
                    }
                    currentPrice = this.expensiveAmmos[ammo.items[name + rarities[i]][j]] * ((this.config.odds[name + '_min'] + this.config.odds[name + '_max']) / 2);
                } else {
                    currentPrice = itemHelper.getItemPrice(ammo.items[name + rarities[i]][j]) * ((this.config.odds[name + '_min'] + this.config.odds[name + '_max']) / 2);
                }
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
        odds.push(this.config.odds[current + "_extremely_rare"])
        odds.push(this.config.odds[current + "_extremely_rare"] + odds[0]);
        odds.push(this.config.odds[current + "_extremely_rare"] + odds[1]);
        odds.push(this.config.odds[current + "_extremely_rare"] + odds[2])

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


    private expensiveAmmos = {
        '57371aab2459775a77142f22': 200,  // 9x18mm PMM PstM gzh
        '573719df2459775a626ccbc2': 300,  // 9x18mm PM PBM gzh
        '5c0d56a986f774449d5de529': 700, // 9x19mm RIP
        '5c925fa22e221601da359b7b': 850, // 9x19mm AP 6.3
        '5efb0da7a29a85116f6ea05f': 1500, // 9x19mm PBP gzh
        '6576f93989f0062e741ba952': 300,  // 9x21mm 7U4
        '5a26ac0ec4a28200741e1e18': 800,  // 9x21mm BT gzh
        '6576f4708ca9c4381d16cd9d': 1100, // 9x21mm 7N42 "Zubilo"
        '62330c18744e5e31df12f516': 260,  // .357 Magnum JHP
        '62330b3ed4dc74626d570b95': 300,  // .357 Magnum FMJ
        '5e81f423763d9f754677bf2e': 165,  // .45 ACP Match FMJ
        '5ea2a8e200685063ec28c05a': 830,  // .45 ACP RIP
        '5efb0cabfb3e451d70735af5': 900,  // .45 ACP AP 
        '64b6979341772715af0f9c39': 420,  // 4.6x30mm JSP SX
        '5ba2678ad4351e44f824b344': 1140, // 4.6x30mm FMJ SX
        '5ba26835d4351e0035628ff5': 950,  // 4.6x30mm AP SX
        '5cc80f67e4a949035e43bbba': 325,  // 5.7x28mm SB193
        '5cc80f53e4a949000e1ea4f8': 590,  // 5.7x28mm L191
        '5cc80f38e4a949001152b560': 700,  // 5.7x28mm SS190
        '56dff3afd2720bba668b4567': 200,  // 5.45x39mm PS gs
        '56dff2ced2720bb4668b4567': 750,  // 5.45x39mm PP gs
        '56dfef82d2720bbd668b4567': 1350, // 5.45x39mm BP gs
        '56dff061d2720bb5668b4567': 1050, // 5.45x39mm BT gs
        '61962b617c6c7b169525f168': 1150, // 5.45x39mm 7N40
        '56dff026d2720bb8668b4567': 1850, // 5.45x39mm BS gs
        '5c0d5e4486f77478390952fe': 1900, // 5.45x39mm PPBS gs "Igolnik"
        '60194943740c5d77f6705eea': 900,  // 5.56x45mm MK 318 Mod 0 (SOST)
        '59e6906286f7746c9f75e847': 1050, // 5.56x45mm M856A1
        '54527ac44bdc2d36668b4567': 1550, // 5.56x45mm M855A1
        '59e690b686f7746c9f75e848': 2000, // 5.56x45mm M995
        '601949593ae8f707c4608daa': 2250, // 5.56x45mm SSA AP
        '5fbe3ffdf8b6a877a729ea82': 440,  // .300 Blackout BCP FMJ
        '619636be6db0f2477964e710': 1100, // .300 Blackout M62 Tracer
        '64b8725c4b75259c590fa899': 1200, // .300 Blackout CBJ
        '5fd20ff893a8961fc660a954': 1500, // .300 Blackout AP
        '5656d7c34bdc2d9d198b4587': 315,  // 7.62x39mm PS gzh
        '64b7af434b75259c590fa893': 1100, // 7.62x39mm PP gzh
        '59e0d99486f7744a32234762': 1850, // 7.62x39mm BP gzh
        '601aa3d2b2bcb34913271e6d': 2300, // 7.62x39mm MAI AP
        '58dd3ad986f77403051cba8f': 600,  // 7.62x51mm M80
        '5a608bf24f39f98ffc77720e': 800,  // 7.62x51mm M62 Tracer
        '5a6086ea4f39f99cd479502f': 2000, // 7.62x51mm M61
        '5efb0c1bd79ff02a1f5e68d9': 2500, // 7.62x51mm M993
        '57a0dfb82459774d3078b56c': 240,  // 9x39mm SP-5 gs
        '5c0d668f86f7747ccb7f13b2': 1000,  // 9x39mm SPP gs
        '61962d879bb3d20b0946d385': 1100, // 9x39mm PAB-9 gs
        '57a0e5022459774d1673f889': 1250, // 9x39mm SP-6 gs
        '5c0d688c86f77413ae3407b2': 1500, // 9x39mm BP gs
        '59e655cb86f77411dc52a77b': 150,  // .366 TKM EKO
        '5f0596629e22f464da6bbdd9': 1400, // .366 TKM AP-M
        '5cadf6e5ae921500113bb973': 1500, // 12.7x55mm PS12A  // LOOK INTO THIS Prapor LL2
        '5cadf6ddae9215051e1c23b2': 420,  // 12.7x55mm PS12
        '5cadf6eeae921500134b2799': 2500, // 12.7x55mm PS12B
        '5d6e6806a4b936088465b17e': 670,  // 12/70 8.5mm Magnum buckshot 
        '64b8ee384b75259c590fa89b': 403,  // 12/70 Piranha
        '5d6e6911a4b9361bd5780d52': 3394, // 12/70 flechette
        '5c0d591486f7744c505b416f': 1200, // 12/70 RIP
        '5d6e68c4a4b9361b93413f79': 600,  // 12/70 makeshift .50 BMG slug
        '5d6e68a8a4b9360b6c0d54e2': 2500, // 12/70 AP-20 armor-piercing slug
        '5d6e6a5fa4b93614ec501745': 250,  // 20/70 Devastator slug
        '5d6e6a05a4b93618084f58d0': 120,  // 20/70 Star slug
        '5d6e6a42a4b9364f07165f52': 95,   // 20/70 "Poleva-6u" slug
        '5e85a9f4add9fe03027d9bf1': 4000, // 23x75mm Zvezda flashbang round 
        '5f647f31b6238e5dd066e196': 240,  // 23x75mm Shrapnel-25 buckshot
        '5e85a9a6eacf8c039e4e2ac1': 400,  // 23x75mm Shrapnel-10 buckshot
    }
}