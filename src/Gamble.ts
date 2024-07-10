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

    public newGamble(name: string = this.name, roll: number = undefined): []{

        switch(name){
            case 'wallet':
            case 'keycard':
            case 'key':
            case 'stim':
            case 'food':
            case 'melee':
            case 'headset':
            case 'backpack':
            case 'rig':
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
            case 'roubles':
            case 'bitcoin':
            case 'gpcoin':
                this.openReward();
                break;
            case 'weapon':
            case 'premium_weapon':
            case 'helmet':
            case 'armor':
            case 'premium_armor':
                this.openPreset();
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);    
        }
        return this.newItemsRequest;
    }

    /*
    id = this.mysteryContainer.getReward(this.name, i);

    if(this.mysteryContainer.getName(id)) { // Current reward is a mystery container
        this.name = this.mysteryContainer.getName(id);
        this.newGamble(this.name, roll);
        id = "NaN";
    */

    private openReward(roll: number = this.randomUtil.getFloat(0,100)){ 
        this.logger.info(`\n[TheGambler][${this.name}] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds(this.name);
        let id: string = "NaN";
        let reward_amount: number;
        let stackable: boolean

        console.log('The Name ' + this.name);
        console.log('The Parent ' + this.mysteryContainer.getParent(this.name));
        console.log('The Odds');
        console.log(odds);


        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                console.log('WIN! Creating ' + this.name + ' index = ' + i + ' rewards = ' +  this.mysteryContainer.getReward(this.name, i))
                id = this.mysteryContainer.getReward(this.name, i);
                reward_amount = this.mysteryContainer.getRewardAmount(this.name, i);
                stackable = this.mysteryContainer.getStackable(this.name, i);
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(id);
        }

        if (id !== "NaN") {
            if(!reward_amount){ // ammo has min and max amount instead of a fixed amount
                reward_amount = this.mysteryContainer.getRandomAmount(this.name); 
            }
            if(!stackable){
                for(let i = 0; i < reward_amount; i++){
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
                    this.newItemsRequest.foundInRaid = true;
                    this.count++;
                }
            } else {
                console.log('Item exists and is stackable... Adding to newItemsRequest...')
                console.log('ID: ' + id)
                console.log('Reward Amount: ' + reward_amount)
                console.log('stackable: ' + stackable)
                this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, reward_amount)];
                this.newItemsRequest.foundInRaid = true;
                this.count++;
            }

        } else {
            this.logger.info(`[TheGambler][${this.name}] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openPreset( roll: number = this.randomUtil.getFloat(0,100)){
        // ItemCreator stores all preset creation functions
        let item = new ItemCreator(this.container);
        let preset: Item[] = [];
        this.logger.info(`\n[TheGambler][${this.name}] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds(this.name);

        console.log('The Name ' + this.name);
        console.log('The Parent ' + this.mysteryContainer.getParent(this.name))
        console.log('The Odds')
        console.log(odds);
        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const parent = this.mysteryContainer.getParent(this.name);
                console.log('WIN! Creating ' + parent + ' ' + this.mysteryContainer.getPreset(parent, i))
                preset = item.createPreset(parent, this.mysteryContainer.getPreset(parent, i));
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