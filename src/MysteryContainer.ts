import { Ammo } from "./containers/Ammo";
import { Armors } from "./containers/Armors";
import { Backpacks } from "./containers/Backpacks";
import { Foods } from "./containers/Foods";
import { Headsets } from "./containers/Headsets";
import { Helmets } from "./containers/Helmets";
import { Keycard } from "./containers/Keycard";
import { Melees } from "./containers/Melees";
import { PremiumArmors } from "./containers/PremiumArmors";
import { PremiumWeapons } from "./containers/PremiumWeapons";
import { Rigs } from "./containers/Rigs";
import { Stims } from "./containers/Stims";
import { Wallet } from "./containers/Wallet";
import { Weapons } from "./containers/Weapons";
import { Keys } from "./containers/keys";

class Container {

    public name: string;
    public parent: string
    public rarities: Array<string>;
    public odds: Array<number>;
    public override: {};
    public rarity_average_profit: Array<number>;
    public profit_percentage: number;
    public rewards: any;

    constructor(name: string) {
        this.name                  = name;
        this.parent                = '';
        this.rarities              = [];
        this.odds                  = [];
        this.override              = {};
        this.rarity_average_profit = [];
        this.profit_percentage     = 0;
        this.rewards               = [];
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
        this.names = [
            'wallet', 'keycard', 'key', 'stim', 'food', 'melee', 
            'backpack', 'rig', 'weapon', 'premium_weapon', 'helmet', 
            'headset', 'armor', 'premium_armor'
        ];
        this.simulation = ['wallet', 'armor', 'premium_armor', 'headset', 'rig', 'backpack', 'key', 'melee', 'stim', 'food'];
        this.override    = ['ammo', 'armor'];
        this.items      = {
            wallet:          new Wallet(),
            keycard:         new Keycard(),
            key:             new Keys(),
            stim:            new Stims(),
            food:            new Foods(),
            melee:           new Melees(),
            backpack:        new Backpacks(),
            rig:             new Rigs(),
            helmet:          new Helmets(),
            headset:         new Headsets(),
            weapon:          new Weapons(),
            premium_weapon:  new PremiumWeapons(),
            armor:           new Armors(),
            premium_armor:   new PremiumArmors(),
            ammo:            new Ammo()
        }
        //console.log(this.items)
        this.containers  = this.setContainers()
    }

    private setContainers(): { [key: string]: Container } {
        const containers: { [key: string]: Container } = {};
    
        const createAndConfigureContainer = (name: string, item: any, index: number, isAmmo: boolean = false) => {
            const container = new Container(name);
            container.rarities = [...item.rarities];
            container.parent = item.parent;
    
            for(let j = 0; j < container.rarities.length; j++){
                const key = `${container.name}${container.rarities[j]}`;
                
                if(j == 0) {
                    container.odds[j] = this.config.odds[key];
                } else {
                    container.odds[j] = this.config.odds[key] + container.odds[j-1];
                }
                container.rewards[j] = [...item.rewards[j]]
            }
    
            if (this.override.includes(name) || isAmmo) {
                container.override = this.config.mystery_container_override_price[container.parent];
            }
    
            container.profit_percentage = this.config.odds[name + '_profit_percentage'];
            containers[name] = container;
        };
    
        this.names.forEach((name, index) => createAndConfigureContainer(name, this.items[name], index, false));
        this.items.ammo.names.forEach((name, index) => createAndConfigureContainer(name, this.items.ammo.items[name], index, true));
    
        console.log('THE CONTAINER!!!')
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

    public getParent(name: string): string{
        return this.containers[name].parent;
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
}