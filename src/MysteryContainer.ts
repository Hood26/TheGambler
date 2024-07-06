import { Ammo } from "./containers/Ammo";
import { Armors } from "./containers/Armors";
import { Backpacks } from "./containers/Backpacks";
import { Foods } from "./containers/Foods";
import { Headsets } from "./containers/Headsets";
import { Helmets } from "./containers/Helmets";
import { Keycard } from "./containers/Keycard";
import { Melees } from "./containers/Melees";
import { Rigs } from "./containers/Rigs";
import { Stims } from "./containers/Stims";
import { Wallet } from "./containers/Wallet";
import { Weapons } from "./containers/Weapons";
import { Keys } from "./containers/keys";

class Container {

    public name: string;
    public rarities: Array<string>;
    public odds: Array<number>;
    public override: {};
    public rarity_average_profit: Array<number>;
    public profit_percentage: number;
    public rewards: any;

    constructor(name: string) {
        this.name = name;
    }
}

export class MysteryContainer {

    private config;
    private logger;
    private containers;
    private names;
    public items;
    public simulation;
    public override;

    constructor(config, logger){
        this.config     = config;
        this.logger     = logger;
        //this.container  = this.setData(this.containersData) Old Way
        this.containers  = this.setContainers()
        this.names      = ['wallet', 'keycard', 'key', 'stim', 'food', 'melee', 'backpack', 'rig', 'weapon', 'helmet', 'headset', 'headset', 'armor',]
        this.simulation = ['wallet', 'armor', 'premium_armor', 'headset', 'rig', 'backpack', 'key', 'melee', 'stim', 'food'];
        this.override    = ['ammo', 'armor'];
        this.items      = {
            wallet:   new Wallet(),
            keycard:  new Keycard(),
            key:      new Keys(),
            stim:     new Stims(),
            food:     new Foods(),
            melee:    new Melees(),
            backpack: new Backpacks(),
            rig:      new Rigs(),
            weapon:   new Weapons(),
            helmet:   new Helmets(),
            headset:  new Headsets(),
            armor:    new Armors(),
            ammo:     new Ammo()
        }
    }

    private setContainers() {
        //let data = containerData; Old Way
        let containers = {};

        for(let i = 0; i < this.names.length; i++) {
            const container = new Container(this.names[i]);
            container.rarities = [...this.items[container.name].rarities]; // clone rarities

            for(let j = 0; j < container.rarities.length; j++){
                if(j == 0) {
                    container.odds[j] = this.config.odds[this.names[i] + container.rarities[j]];
                } else {
                    container.odds[j] = this.config.odds[this.names[i] + container.rarities[j]] + container.odds[j-1];
                }
                container.rewards[j] = [...this.items[container.name][container.name + container.rarities[j]]]
            }
            
            if(this.override.includes(container.name)){
                container.override = this.config.mystery_container_override_price[container.name];
            }
            container.profit_percentage = this.config.odds[container.name + '_profit_percentage'];
            containers[container.name] = container;
        }

        // Ammo has a little different format from other mystery containers so we have to sperate from previous
        // Refactor if another container is added like this in the future...
        for(let i = 0; i < this.items.ammo.names.length; i++){
            const container = new Container(this.items.ammo.names[i]);
            container.rarities = [...this.items.ammo.rarities]; // clone rarities

            for(let j = 0; j < container.rarities.length; j++){
                if(j == 0) {
                    container.odds[j] = this.config.odds[this.names[i] + container.rarities[j]];
                } else {
                    container.odds[j] = this.config.odds[this.names[i] + container.rarities[j]] + container.odds[j-1];
                }
                container.rewards[j] = [...this.items.ammo.items[container.name].items[container.name + container.rarities[j]]]
            }
            
            container.override = this.config.mystery_container_override_price['ammo'];
            container.profit_percentage = this.config.odds[container.name + '_profit_percentage'];
            containers[container.name] = container;
        }

        console.log(containers)
        return containers;
    }
    
    // getRandomInt(3) returns 0, 1, or 2
    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    public getName(name: string): string{
        return this.containers[name].name;
    }

    public getOdds(name: string): Array<number>{
        return this.containers[name].odds;
    }

    public getRarities(name: string): Array<string>{
        return this.containers[name].rarities;
    }

    // Returns random Reward from possible Rewards
    public getReward(name: string, index: number): any {
        const rewards: [] = this.containers[name].rewards[index];
        const randomNumber = this.getRandomInt(rewards.length - 1);
        return rewards[randomNumber];
    }

    public getRarityAverageProfit(name:string): number  {
        return this.containers[name].rarity_average_profit;
    }

    public getProfitPercentage(name:string): number  {
        return this.containers[name].profit_percentage;
    }

    public getOverride(name:string, item: any): number  {
        return this.containers[name].override[item];
    }

    public setRarityAverageProfit(name:string, profit: Array<number>): void  {
        //return this.containers[name]['override'][item];
        this.containers[name].rarity_average_profit = profit;
    }

    private containersData = {
        'wallet': {
            'name': 'wallet', 
            'rarities': ["_extremely_rare", "_rare", "_kinda_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': [1000000, 500000, 300000, 100000, 50000],
        },
        'keycard': {
            'name': 'keycard', 
            'rarities': ["_red","_green", "_blue", "_violet","_black", "_yellow", "_blue_marking","_21WS", "_11SR", "_access"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
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
            'profit_percentage': 0,
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
        'weapon': {
            'name': 'weapon', 
            'rarities': ["_meta", "_meme", "_decent", "_scav", "_base"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': ["meta", "meme", "decent", "scav", "base"],
        },
        'premium_gun': {
            'name': 'premium_gun', 
            'rarities': ["_meta"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': ["meta"],
        },
        'helmet': {
            'name': 'helmet', 
            'rarities': ["_extremely_rare", "_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': ["extremely_rare", "rare", "uncommon", "common"],
        },
        'headset': {
            'name': 'headset', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        'armor': {
            'name': 'armor', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': ["rare", "uncommon", "common"],
        },
        'premium_armor': {
            'name': 'armor', 
            'rarities': ["_rare"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
            'rewards': ["rare"],
        },
        'ammo': {
            'name': 'ammo', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '7.62x25': {
            'name': '7.62x25', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '9x18': {
            'name': '9x18', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '9x19': {
            'name': '9x19', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '9x21': {
            'name': '9x21', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '.357': {
            'name': '.357', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '.45': {
            'name': '.45', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '4.6x30': {
            'name': '4.6x30', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '5.7x28': {
            'name': '5.7x28', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '5.45x39': {
            'name': '5.45x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '5.56x45': {
            'name': '5.56x45', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '.300': {
            'name': '.300', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '7.62x39': {
            'name': '7.62x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '7.62x51': {
            'name': '7.62x51', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '7.62x54': {
            'name': '7.62x54', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '.338': {
            'name': '.338', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '9x39': {
            'name': '9x39', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '.366': {
            'name': '.366', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '12.7x55': {
            'name': '12.7x55', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '12/70': {
            'name': '12/70', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '20/70': {
            'name': '20/70', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
        '23x75': {
            'name': '23x75', 
            'rarities': ["_rare", "_uncommon", "_common"],
            'odds': [],
            'override': [],
            'rarity_average_profit' : [],
            'profit_percentage': 0,
        },
    }
}