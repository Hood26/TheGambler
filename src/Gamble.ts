import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { IAddItemDirectRequest } from "@spt/models/eft/inventory/IAddItemsDirectRequest";
import { Item } from "../common/tables/IItem";


import { ItemCreator } from "./itemCreator";
import { Keys } from "./containers/keys";
import { Stims } from "./containers/Stims";
import { Backpacks } from "./containers/Backpacks";
import { Rigs } from "./containers/Rigs";
import { Headsets } from "./containers/Headsets";
import { Ammo } from "./containers/Ammo";
import { Melees } from "./containers/Melees";
import { MysteryContainer } from "./MysteryContainer";
import { Foods } from "./containers/Foods";


export class Gamble {

    public newItemsRequest: IAddItemDirectRequest;
    public name: string;
    private count: number;
    private mysteryContainer: MysteryContainer;
    private currentCaliber: string;
    private currentMagazine: string;
    private currentWeaponType: string;
    private container: DependencyContainer;
    private hashUtil: HashUtil;
    private logger: ILogger;
    private randomUtil: RandomUtil;
    private config: any;

    constructor(container: DependencyContainer, config: any, logger: ILogger, name :string){
        this.name             = name.replace('gambling_', '');
        this.logger           = logger;
        this.container        = container;
        this.config           = config;
        this.count            = 0;
        this.randomUtil       = container.resolve<RandomUtil>("RandomUtil");
        this.hashUtil         = container.resolve<HashUtil>("HashUtil");
        this.mysteryContainer = new MysteryContainer(config, logger); 
        this.newItemsRequest  = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable : true
        };

    }

    public newGamble(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)): []{
        //console.log('NEW GAMBLE: Creating ' + name + ' roll = ' + roll)

        switch(name){
            case 'wallet':
            case 'roubles':
            case 'bitcoin':
            case 'gpcoin':
            case 'keycard':
            case 'key':
            case 'stim':
            case 'food':
            case 'melee':
            case 'headset':
            case 'backpack':
            case 'rig':
            case 'loadout':
            case '7.62x25':
            case '9x18':
            case '9x19':
            case '9x21':
            case '.357':
            case '.45':
            case '4.6x30':
            case '5.7x28':
            case '5.45x39':
            case '5.56x45':
            case '.300':
            case '7.62x39':
            case '7.62x51':
            case '7.62x54':
            case '.338':
            case '9x39':
            case '.366':
            case '12.7x55':
            case '12/70':
            case '20/70':
            case '23x75':
                this.openReward(name, roll);
                break;
            case 'weapon':
            case 'premium_weapon':
            case 'helmet':
            case 'armor':
            case 'premium_armor':
                this.openPreset(name, roll);
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);    
        }
        return this.newItemsRequest;
    }

    private calibers = {
        '762x25TT':    '7.62x25', 
        '9x18PM':      '9x18',  
        '9x19PARA':    '9x19', 
        '9x21':        '9x21', 
        '9x33R':       '.357', 
        '1143x23ACP':  '.45',  // ?? why BSG
        '46x30':       '4.6x30', 
        '57x28':       '5.7x28', 
        '545x39':      '5.45x39', 
        '556x45NATO':  '5.56x45', 
        '762x35':      '.300', 
        '762x39':      '7.62x39', 
        '762x51':      '7.62x51', 
        '762x54R':     '7.62x54', 
        '86x70':       '.338', 
        '9x39':        '9x39', 
        '366TKM':      '.366', 
        '127x55':      '12.7x55', 
        '12g':         '12/70', 
        '20g':         '20/70', 
        '23x75':       '23x75', 
    }


    // Opens all rewards from a container (so far only designed for loadout container)
    private openGuaranteedRewards(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)){ 
        //console.log('\nopenGuaranteedRewards');
        const rewards = this.mysteryContainer.getGuaranteedRewards(name);
        const randomness = this.mysteryContainer.getGuaranteedRandomness(name);
        console.log('RANDOMNESS: ' + randomness)
        for(let i = 0; i < rewards.length; i++) {
            const current = rewards[i];
            //console.log('OPEN GUARANTEED REWARDS: Creating ' + name + ' index = ' + i + ' rewards = ' +  current)

            if (this.mysteryContainer.getName(current)) { // Rewards is a container

                if(this.currentWeaponType == 'meme') { // Generated Weapon is meme all rewards are random now
                    this.newGamble(current);
                    
                } else{
                    if (randomness[i]) {
                        this.newGamble(current);
                    } else {
                        this.newGamble(current, roll);
                    }
                }

                if(current === 'weapon' || current === 'premium_weapon') {
                    let currentCaliber = this.currentCaliber;
                    let currentMagazine = this.currentMagazine;
                    console.log('WEAPON INFO')
                    console.log(currentCaliber + ' ' + currentMagazine)
                }

            } else { // Reward  is a item
                // Finish.........
                const reward_amount = this.mysteryContainer.getRewardAmount(name, i);
                const stackable = this.mysteryContainer.getStackable(name, i);

                if(!stackable){
                    //console.log('OPEN GUARANTEED REWARDS: Item exists and NOT stackable... Adding to newItemsRequest...')
                    for(let i = 0; i < reward_amount; i++){
                        this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(current)];
                        this.newItemsRequest.foundInRaid = true;
                        this.count++;
                    }

                } else {
                    //console.log('OPEN GUARANTEED REWARDS: Item exists and is stackable... Adding to newItemsRequest...')
                    //console.log('current id: ' + current)
                    //console.log('Reward Amount: ' + reward_amount)
                    //console.log('stackable: ' + stackable)
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(current, reward_amount)];
                    this.newItemsRequest.foundInRaid = true;
                    this.count++;
                }
            }
        }
    }

    private openReward(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)){ 
        //console.log('\nopenReward()');
        //this.logger.info(`[TheGambler][${name}] The container roll is: ${roll}!`);
        let id: string = 'NaN'
        const odds: Array<number> = this.mysteryContainer.getOdds(name);
        let reward_amount: number;
        let stackable: boolean;
        let guaranteed_rewards = this.mysteryContainer.getGuaranteedRewards(name);

        if (guaranteed_rewards) {
            this.openGuaranteedRewards(name, roll);
            console.log('FINISHEDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
            return;
        }

        //console.log('The Name ' + name);
        //console.log('The Parent ' + this.mysteryContainer.getParent(name));
        //console.log('The Odds');
        //console.log(odds);

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                //console.log('WIN! Creating ' + name + ' index = ' + i + ' rewards = ' +  this.mysteryContainer.getReward(name, i))
                id = this.mysteryContainer.getReward(name, i);
                reward_amount = this.mysteryContainer.getRewardAmount(name, i);
                stackable = this.mysteryContainer.getStackable(name, i);
                break;  
            }
        }
    
        
        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(id);
        }

        if (id !== "NaN") {
            if(!reward_amount){ // ammo has min and max amount instead of a fixed amount
                reward_amount = this.mysteryContainer.getRandomAmount(name); 
            }
            if(!stackable){
                for(let i = 0; i < reward_amount; i++){
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
                    this.newItemsRequest.foundInRaid = true;
                    this.count++;
                }
            } else {
                //console.log('Item exists and is stackable... Adding to newItemsRequest...')
                //console.log('ID: ' + id)
                //console.log('Reward Amount: ' + reward_amount)
                //console.log('stackable: ' + stackable)
                this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, reward_amount)];
                this.newItemsRequest.foundInRaid = true;
                this.count++;
            }
    
        } else {
            this.logger.info(`[TheGambler][${name}] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openPreset(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)){
        //console.log('\nopenPreset()');
        // ItemCreator stores all preset creation functions
        let item = new ItemCreator(this.container);
        let preset: Item[] = [];
        this.logger.info(`\n[TheGambler][${name}] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds(name);

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const parent = this.mysteryContainer.getParent(name);
                preset = item.createPreset(parent, this.mysteryContainer.getPreset(parent, i));

                if (name === 'weapon' || name === 'premium_weapon') {
                    // Store values for possible future use
                    this.currentCaliber = item.caliber;
                    this.currentMagazine = item.magazine;
                    this.currentWeaponType = item.weaponsType;
                }
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(preset);
        }

        if (preset.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...preset];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Weapon] Case Opened... Received Nothing... Better luck next time :)`);
        }

    }


    private newItemFormat(tpl: string, count = undefined) {

        const item = {
            _id: this.hashUtil.generate(),
            _tpl: tpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: {StackObjectsCount: count ? count : 1} 
        }

        return item;
    }
}