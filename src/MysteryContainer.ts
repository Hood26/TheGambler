import { Ammo } from "./containers/Ammo";
import { Armors } from "./containers/Armors";
import { Backpacks } from "./containers/Backpacks";
import { Foods } from "./containers/Foods";
import { Headsets } from "./containers/Headsets";
import { Melees } from "./containers/Melees";
import { Rigs } from "./containers/Rigs";
import { Stims } from "./containers/Stims";
import { Wallet } from "./containers/Wallet";
import { Keys } from "./containers/keys";

export class MysteryContainer{

    private config;
    private logger;
    private container;
    public items;
    public simulation;

    constructor(config, logger){
        this.config     = config;
        this.logger     = logger;
        this.container  = this.setConfig(this.containersData)
        this.simulation = ['wallet', 'armor', 'premium_armor', 'headset', 'rig', 'backpack', 'key', 'melee', 'stim', 'food'];
        this.items      = {
            wallet:   new Wallet(),
            backpack: new Backpacks(),
            armor:    new Armors(),
            rig:      new Rigs(),
            headset:  new Headsets(),
            key:      new Keys(),
            melee:    new Melees(),
            stim:     new Stims(),
            food:     new Foods(),
            ammo:     new Ammo()
        }
        //console.log('CONTAINER INFO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        //console.log(this.container);
    }

    private setConfig(containerData) {
        let data = containerData;
        let override = ['ammo', 'armor'];
        
        for (const name in data){
            data[name]['profit_percentage'] = this.config.odds[name + '_profit_percentage'];

            for(let i = 0; i < data[name]['rarities'].length; i++){
                
                if(i == 0) {
                    data[name]['odds'][i] = this.config.odds[name + data[name]['rarities'][i]];
                } else {
                    data[name]['odds'][i] = this.config.odds[name + data[name]['rarities'][i]] + data[name]['odds'][i-1];
                }
            }

            for(let i = 0; i < override.length; i++){
                const currentName = override[i];
                //console.log(this.config.mystery_container_override_price[currentName])
                data[currentName]['override'] = this.config.mystery_container_override_price[currentName];
            }
            
        }
        return data;
    }

    public getName(name: string): string{
        return this.container[name]['name'];
    }

    public getOdds(name: string): Array<number>{
        return this.container[name]['odds'];
    }

    public getRarities(name: string): Array<string>{
        return this.container[name]['rarities'];
    }

    public getReward(name: string, index: number): any {
        return this.container[name]['rewards'][index];
    }

    public getRarityAverageProfit(name:string): void  {
        return this.container[name]['rarity_average_profit'];
    }

    public getProfitPercentage(name:string): number  {
        return this.container[name]['profit_percentage'];
    }

    public getOverride(name:string, item: any): number  {
        return this.container[name]['override'][item];
    }

    public setRarityAverageProfit(name:string, profit: Array<number>): void  {
        //return this.container[name]['override'][item];
        this.container[name]['rarity_average_profit'] = profit;
    }

    private containersData = {
        'wallet': {
            'name': 'wallet', 
            'rarities': ["_extremely_rare", "_rare", "_kinda_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': [1000000, 500000, 300000, 100000, 50000],
        },
        'keycard': {
            'name': 'keycard', 
            'rarities': ["_red","_green", "_blue", "_violet","_black", "_yellow", "_blue_marking","_21WS", "_11SR", "_access"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': [
                "5c1d0efb86f7744baf2e7b7b", // TerraGroup Labs keycard (Red)
                "5c1d0dc586f7744baf2e7b79", // TerraGroup Labs keycard (Green)
                "5c1d0c5f86f7744bb2683cf0", // TerraGroup Labs keycard (Blue)
                "5c1e495a86f7743109743dfb", // TerraGroup Labs keycard (Violet)
                "5c1d0f4986f7744bb01837fa", // TerraGroup Labs keycard (Black)
                "5c1d0d6d86f7744bb2683e1f", // TerraGroup Labs keycard (Yellow)
                "5efde6b4f5448336730dbd61", // Keycard with a blue marking
                "5e42c83786f7742a021fdf3c", // Object #21WS keycard
                "5e42c81886f7742a01529f57", // Object #11SR keycard
                "5c94bbff86f7747ee735c08f", // TerraGroup Labs access keycard 
            ],
        },
        'key': {
            'name': 'key', 
            'rarities': ["_extremely_rare", "_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
        },
        'stim': {
            'name': 'stim', 
            'rarities': ["_extremely_rare", "_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 110,
        },
        'food': {
            'name': 'food', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 110,
        },
        'melee': {
            'name': 'melee', 
            'rarities': ["_extremely_rare","_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 120,
        },
        'backpack': {
            'name': 'backpack', 
            'rarities': ["_extremely_rare", "_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 110,
        },
        'rig': {
            'name': 'rig', 
            'rarities': ["_boss", "_late_wipe", "_early_wipe", "_scav"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 110,
        },
        'gun': {
            'name': 'gun', 
            'rarities': ["_meta", "_meme", "_decent", "_scav", "_base"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': ["meta", "meme", "decent", "scav", "base"],
        },
        'premium_gun': {
            'name': 'premium_gun', 
            'rarities': ["_meta"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': ["meta"],
        },
        'helmet': {
            'name': 'helmet', 
            'rarities': ["_extremely_rare", "_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': ["extremely_rare", "rare", "uncommon", "common"],
        },
        'headset': {
            'name': 'headset', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
        },
        'armor': {
            'name': 'armor', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': ["rare", "uncommon", "common"],
        },
        'premium_armor': {
            'name': 'armor', 
            'rarities': ["_rare"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 115,
            'rewards': ["rare"],
        },
        'ammo': {
            'name': 'ammo', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '7.62x25': {
            'name': '7.62x25', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '9x18': {
            'name': '9x18', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '9x19': {
            'name': '9x19', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '9x21': {
            'name': '9x21', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '.357': {
            'name': '.357', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '.45': {
            'name': '.45', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '4.6x30': {
            'name': '4.6x30', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '5.7x28': {
            'name': '5.7x28', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '5.45x39': {
            'name': '5.45x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '5.56x45': {
            'name': '5.56x45', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '.300': {
            'name': '.300', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '7.62x39': {
            'name': '7.62x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '7.62x51': {
            'name': '7.62x51', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '7.62x54': {
            'name': '7.62x54', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '.338': {
            'name': '.338', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '9x39': {
            'name': '9x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '.366': {
            'name': '.366', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '12.7x55': {
            'name': '12.7x55', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '12/70': {
            'name': '12/70', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '20/70': {
            'name': '20/70', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
        '23x75': {
            'name': '23x75', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 105,
        },
    }
}