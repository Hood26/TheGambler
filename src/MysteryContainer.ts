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
import { FlipRouble } from "./containers/FlipRouble";
import { FlipGPCoin } from "./containers/FlipGPCoin";
import { FlipBitcoin } from "./containers/FlipBitcoin";
import { Loadouts } from "./containers/Loadouts";
import { Medical } from "./containers/Medical";
import { LoadoutFood } from "./containers/LoadoutFood";
import { Loadoutdrink } from "./containers/LoadoutDrink";
import { LoadoutLightBleed } from "./containers/LoadoutLightBleed";
import { LoadoutHeavyBleed } from "./containers/LoadoutHeavyBleed";
import { LoadoutHealing } from "./containers/LoadoutHealing";

class Container {

    public name: string;
    public parent: string
    public rarities: Array<string>;
    public odds: Array<number>;
    public stackable: Array<boolean>;
    public min: number;
    public max: number;
    public override: {};
    public rarity_average_profit: Array<number>;
    public profit_percentage: number;
    public guaranteed_rewards: Array<string>;
    public guaranteed_stackable: Array<boolean>;
    public guaranteed_reward_amount: Array<number>;
    public guaranteed_randomness: Array<boolean>;
    public reward_amount: Array<number>;
    public reward_rolls: Array<number>;
    public rewards: any;
    public presets_invalid_tpls: Array<string>;
    public calculate_preset_prices: boolean;
    public presets: Array<string>;

    constructor(name: string) {
        this.name                  = name;
        this.parent                = '';
        this.rarities              = [];
        this.odds                  = [];
        this.stackable             = [];
        this.override              = {};
        this.rarity_average_profit = [];
        this.profit_percentage     = 0;
        this.reward_amount         = [];
        this.rewards               = [];
        this.presets_invalid_tpls  = [];
        this.presets               = [];
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
            'wallet', 'keycard', 'key', 'stim', 'medical', 'food', 'melee', 
            'backpack', 'rig', 'weapon', 'premium_weapon', 'helmet', 
            'headset', 'armor', 'premium_armor', 'roubles', 'bitcoin', 'gpcoin',
             'loadout', 'loadout_food', 'loadout_drink', 'loadout_light_bleed', 'loadout_heavy_bleed', 'loadout_healing', 'ammo'
        ];
        this.simulation = ['armor', 'premium_armor', 'headset', 'rig', 'backpack', 'key', 'melee', 'stim', 'food'];
        this.override    = ['ammo', 'armor', 'weapon'];
        this.items      = {
            wallet:              new Wallet(),
            keycard:             new Keycard(),
            key:                 new Keys(),
            stim:                new Stims(),
            medical:             new Medical(),
            food:                new Foods(),
            melee:               new Melees(),
            backpack:            new Backpacks(),
            rig:                 new Rigs(),
            helmet:              new Helmets(),
            headset:             new Headsets(),
            weapon:              new Weapons(),
            premium_weapon:      new PremiumWeapons(),
            armor:               new Armors(),
            premium_armor:       new PremiumArmors(),
            ammo:                new Ammo(),
            roubles:             new FlipRouble(),
            bitcoin:             new FlipBitcoin(),
            gpcoin:              new FlipGPCoin(),
            loadout:             new Loadouts(),
            loadout_food:        new LoadoutFood(),
            loadout_drink:       new Loadoutdrink(),
            loadout_light_bleed: new LoadoutLightBleed(),
            loadout_heavy_bleed: new LoadoutHeavyBleed(),
            loadout_healing:     new LoadoutHealing()
        }
        this.containers  = this.setContainers()
    }

    private setContainers(): { [key: string]: Container } {
        const containers: { [key: string]: Container } = {};
    
        const generateAmount = (length: number, value: boolean | number) => new Array(length).fill(value);
    
        const calculateOddsAndRewards = (container: Container, item: any) => {
            for(let j = 0; j < container.rarities.length; j++){
                const key = `${container.name}${container.rarities[j]}`;
                
                if(j == 0) {
                    container.odds[j] = this.config.odds[key];
                } else {
                    container.odds[j] = this.config.odds[key] + container.odds[j-1];
                }
                container.rewards[j] = item.rewards? [...item.rewards[j]] : []
            }
        };
    
        const applyOverrides = (container: Container, item: any, isAmmo: boolean) => {
            if (this.override.includes(container.name) || isAmmo) {
                container.override = this.config.mystery_container_override_price[container.parent];
                container.stackable = item.stackable || generateAmount(container.rarities.length, true);
            }
            if (!isAmmo) {
                container.reward_amount = item.reward_amount || generateAmount(container.rarities.length, 1);
                container.stackable = item.stackable || generateAmount(container.rarities.length, false);
            }
        };
    
        const setContainerProperties = (container: Container, name: string, item: any) => {
            container.min = this.config.odds[`${name}_min`] || 1;
            container.max = this.config.odds[`${name}_max`] || 1;
            container.profit_percentage = this.config.odds[`${name}_profit_percentage`];
            container.presets = item.presets? [...item.presets] : [];
            container.guaranteed_stackable = item.guaranteed_stackable? item.guaranteed_stackable : undefined;
            container.guaranteed_reward_amount = item.guaranteed_reward_amount? item.guaranteed_reward_amount : undefined;
            container.guaranteed_rewards = item.guaranteed_rewards? item.guaranteed_rewards : undefined;
            container.guaranteed_randomness = item.guaranteed_randomness? item.guaranteed_randomness : undefined;
            container.reward_rolls = item.reward_rolls? item.reward_rolls : undefined;
            container.calculate_preset_prices = item.calculate_preset_prices? item.calculate_preset_prices : false;
            container.presets_invalid_tpls = item.presets_invalid_tpls? item.presets_invalid_tpls : undefined;
            
        };
    
        const createAndConfigureContainer = (name: string, item: any, isAmmo: boolean) => {
            const container = new Container(name);
            container.rarities = [...item.rarities];
            container.parent = item.parent;
            
            calculateOddsAndRewards(container, item);
            applyOverrides(container, item, isAmmo);
            setContainerProperties(container, name, item);
    
            containers[name] = container;
        };
    
        this.names.forEach(name => createAndConfigureContainer(name, this.items[name], false));
        this.items.ammo.names.forEach(name => createAndConfigureContainer(name, this.items.ammo.items[name], true));
    
        //console.log('THE CONTAINER!!!');
        //console.log(containers);

        return containers;
    }
    
    // getRandomInt(3) returns 0, 1, or 2
    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    public getName(name: string): string{
        return this.containers[name].name;
    }

    // Returns all containers that have presets to price calculate in the simulation
    public getPresetNames(): Array<string>{
        let names: Array<string> = [];
        for(const container in this.containers){
            if(this.containers[container].calculate_preset_prices){
                names.push(container);
            }
        }
        return names;
    }

    public getParent(name: string): string{
        return this.containers[name].parent;
    }

    public getOdds(name: string): Array<number>{
        return this.containers[name].odds;
    }

    public getRarity(name: string, index: number): string{
        return this.containers[name].rarities[index];
    }
    public getRarities(name: string): Array<string>{
        return this.containers[name].rarities;
    }
/*
    public getOpenAll(name: string): boolean{
        return this.containers[name].openAll? this.containers[name].openAll : false;
    }
*/
    public getGuaranteedRewards(name: string): Array<string>{
        return this.containers[name].guaranteed_rewards? this.containers[name].guaranteed_rewards : undefined;
    }

    public getGuaranteedRewardAmount(name: string, rarityIndex: number): any {
        return this.containers[name].guaranteed_reward_amount[rarityIndex];
    }

    public getGuaranteedStackable(name: string, rarityIndex: number): boolean {
        return this.containers[name].guaranteed_stackable[rarityIndex];
    }

    public getGuaranteedRandomness(name: string): Array<boolean> {
        return this.containers[name].guaranteed_randomness;
    }


    public getPreset(name: string, rarityIndex: number): any {
        return this.containers[name].presets[rarityIndex];
    }

    // Returns random Reward from possible Rewards
    public getReward(name: string, rarityIndex: number): any {
        const rewards: [] = this.containers[name].rewards[rarityIndex];
        const randomNumber = this.getRandomInt(rewards.length);
        return rewards[randomNumber];
    }

    // Returns the amount of rolls for each set of items in rewards
    public getRewardRolls(name: string): Array<number>{
        return this.containers[name].reward_rolls? this.containers[name].reward_rolls : undefined;
    }

    // Returns all rewards from possible rewards
    public getRewards(name: string): Array<string> {
        return this.containers[name].rewards;
  
    }

    public getRewardAmount(name: string, rarityIndex: number): any {
        return this.containers[name].reward_amount[rarityIndex];
    }
    
    public getStackable(name: string, rarityIndex: number): boolean {
        return this.containers[name].stackable[rarityIndex];
    }

    public getRandomAmount(name: string): number {
        const min = this.containers[name].min;
        const max = this.containers[name].max;
        return Math.floor(Math.random() * (max - min + 1)) + min;
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