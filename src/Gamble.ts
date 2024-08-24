import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { RandomUtil } from "@spt/utils/RandomUtil";
import { HashUtil } from "@spt/utils/HashUtil";
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
    private currentID: string;
    private currentCaliber: string;
    private currentMagazine: string;
    private currentMagazineMaxAmmo: number;
    private currentWeaponType: string;
    private currentHeadsetCompatible: boolean;
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
            case 'medical':
            case 'food':
            case 'loadout_grenade':
            case 'loadout_facecovers':
            case 'loadout_food':
            case 'loadout_drink':
            case 'loadout_light_bleed':
            case 'loadout_heavy_bleed':
            case 'loadout_stim':
            case 'loadout_splint':
            case 'loadout_healing':
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
                this.openReward(name, roll);
                break;
            case 'weapon':
            case 'premium_weapon':
            case 'helmet':
            case 'armor':
            case 'premium_armor':
                this.openPreset(name, roll);
                break;
            case 'loadout':
                this.openLoadoutContainer(name);
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);    
        }

        if (this.mysteryContainer.isAmmo(this.name)) {
            this.newItemsRequest.foundInRaid = this.config.container_config["all_ammo_rewards_found_in_raid_status"];
        } else {
            this.newItemsRequest.foundInRaid = this.config.container_config[this.name + "_rewards_found_in_raid_status"];
        }
        return this.newItemsRequest;
    }

    // Opens all rewards from the loadout container
    private openLoadoutContainer(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)){  // 74.3 - 82 is meme // 82 MAX
        this.logger.info(`[TheGambler][${name}] The container roll is: ${roll}!`);
        const rewards = this.mysteryContainer.getGuaranteedRewards(name);
        const randomness = this.mysteryContainer.getGuaranteedRandomness(name);
        let curerntID: string;
        let currentCaliber: string, currentMagazine: string, currentMagazineMaxAmmo: number, currentWeaponType : string;

        if (roll > 90) { // _scav
            roll = this.randomUtil.getFloat(44.3, 74.3);
            roll = 65;
        } else if (roll > 82) { // _decent
            roll = this.randomUtil.getFloat(19.3, 44.3);
            roll = 38;
        }

        for(let i = 0; i < rewards.length; i++) {
            const current = rewards[i];

            if (this.mysteryContainer.getName(current)) { // Rewards is a container

                if(currentWeaponType == '_meme') { 
                    this.newGamble(current, this.randomUtil.getFloat(5,65));
                    
                } else if (this.currentWeaponType == '_meta') {

                    this.newGamble(current, this.randomUtil.getFloat(5,28));

                } else if (this.currentWeaponType == '_decent') {

                    this.newGamble(current, this.randomUtil.getFloat(18,45));

                }else if (this.currentWeaponType == '_scav') {

                    this.newGamble(current, this.randomUtil.getFloat(48,70));

                }else{
                    if (randomness[i]) {
                        this.newGamble(current);
                    } else {
                        this.newGamble(current, roll);
                    }
                }

                if(current === 'helmet') {
                    if (!this.currentHeadsetCompatible) {
                        i++; // Skip the headset reward
                    } else if (this.mysteryContainer.items['helmet'].headset_incompatible_helmets.includes(this.currentID)) {
                        i++; // Skip the headset reward
                    }
                }

                if (current === 'armor'){
                    const currentID = this.currentID;
                    let truth = false;
                    if (currentID) {
                        truth = true;
                    }
                    if (currentID && this.mysteryContainer.items['armor'].armor_rigs.includes(currentID)) {
                        i++; // Skip the rig reward
                    }
                }

                if(current === 'weapon' || current === 'premium_weapon') { // Ammo and Magazine generation
                    currentCaliber = this.currentCaliber;
                    currentMagazine = this.currentMagazine;
                    currentMagazineMaxAmmo = this.currentMagazineMaxAmmo
                    currentWeaponType = this.currentWeaponType;
                    let magazineCount = 3;

                    const badMagazines = [
                        '633ec6ee025b096d320a3b15', // RSh-12 12.7x55 5-round cylinder
                        '5ae0973a5acfc4001562206c'  // Mosin Rifle 7.62x54R 5-round magazine
                    ]

                    //push magazines and ammo
                    const caliber = this.mysteryContainer.items['ammo'].BSGCalibers[currentCaliber];
                    if (caliber != '20x70' && caliber != '23x75' && caliber != '12/70' && caliber != '.357' && !badMagazines.includes(currentMagazine)) {
                        this.openReward(caliber, roll, this.currentMagazine, false, 1);
                        this.openReward(caliber, roll, this.currentMagazine, false, 1);
                    }

                    let tempRoll: number;
                    let min, max = 0;
                    // Depending on the ammo type, we want to generate a different rarity of ammo from the temproll
                    switch(currentWeaponType) {
                        case '_meme':
                            min = 5;
                            max = 30;
                            break;
                        case '_decent':
                            min = 10;
                            max = 45;
                            break;
                        case '_meta':
                            min = 2;
                            max = 26;
                            break;
                        default:
                            min = 10;
                            max = 90
                            tempRoll = roll;
                            break;
                    }

                    for(let i = 0; i < magazineCount; i++){
                        
                        tempRoll = this.randomUtil.getFloat(min, max); // random roll for each ammo reward
                        this.openReward(caliber, tempRoll, 'NaN', true, currentMagazineMaxAmmo);
                    }
                }

            } else { // Reward is an item
                const reward_amount = this.mysteryContainer.getRewardAmount(name, i);
                const stackable = this.mysteryContainer.getStackable(name, i);

                if(!stackable){
                    //console.log('OPEN GUARANTEED REWARDS: Item exists and NOT stackable... Adding to newItemsRequest...')
                    for(let i = 0; i < reward_amount; i++){
                        this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(current)];
                        this.count++;
                    }

                } else {
                    //console.log('OPEN GUARANTEED REWARDS: Item exists and is stackable... Adding to newItemsRequest...')
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(current, reward_amount)];
                    this.count++;
                }
            }
        }
    }

    private openReward(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100), id: string = 'NaN', stackable: boolean = false, reward_amount: number = undefined) { 
        this.logger.info(`[TheGambler][${name}] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds(name);
        let guaranteed_rewards = this.mysteryContainer.getGuaranteedRewards(name);
        let reward_rolls: Array<number> = this.mysteryContainer.getRewardRolls(name);
        let generatedRewards = [];
        
        /* // Not Implemented Yet...
        if (guaranteed_rewards) {
            this.openGuaranteedRewards(name, roll);
            return;
            }
            */

        // If the ID is NaN, we need to generate a random item with a determined amound of rolls for each rarity (i.e. Medical container)
        if (id === "NaN" && reward_rolls) {
            const rewards = this.mysteryContainer.getRewards(name);
            for(let i = 0; i < rewards.length; i++) {
                for(let j = 0; j < reward_rolls[i]; j++) {
                    const item = this.mysteryContainer.getReward(name, i);
                    if (item == "NaN") { // Nothing
                        continue;
                    }
                    this.currentID = item;
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(item)];
                    this.count++;
                }
            }
        }

        // If the ID is NaN, we need to generate random reward(s) based off property (rolls)
        if (id === "NaN" && !reward_rolls) {
            for(let i = 0; i < odds.length; i++) {
                if(roll <= odds[i]) {
                    //console.log('WIN! Creating ' + name + ' index = ' + i + ' rewards = ' +  this.mysteryContainer.getReward(name, i))
                    id = this.mysteryContainer.getReward(name, i);
                    this.currentID = id;
                    if(!reward_amount){ // determined amount to receive
                        reward_amount = this.mysteryContainer.getRewardAmount(name, i);
                    }
                    if(!stackable){ // Item is not stackable
                        stackable = this.mysteryContainer.getStackable(name, i);
                    }
                    break;  
                }
            }
        }
    
        
        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(id);
        }

        if (id !== "NaN" && !reward_rolls) {
            if(!reward_amount){ // ammo has min and max amount instead of a fixed amount
                reward_amount = this.mysteryContainer.getRandomAmount(name); 
            }
            if(!stackable){
                for(let i = 0; i < reward_amount; i++){
                    this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
                    this.count++;
                }
            } else {
                this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, reward_amount)];
                this.count++;
            }
    
        } else {
            this.logger.info(`[TheGambler][${name}] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openPreset(name: string = this.name, roll: number = this.randomUtil.getFloat(0,100)){
        this.logger.info(`[TheGambler][${name}] The container roll is: ${roll}!`);
        //console.log('\nopenPreset()');
        // ItemCreator stores all preset creation functions
        let item = new ItemCreator(this.container);
        let preset: Item[] = [];
        const odds: Array<number> = this.mysteryContainer.getOdds(name);

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const parent = this.mysteryContainer.getParent(name);
                preset = item.createPreset(parent, this.mysteryContainer.getRarity(parent, i));
                this.currentID = preset[0]._tpl;

                if (name === 'weapon' || name === 'premium_weapon') {
                    // Store values for possible future use
                    this.currentCaliber = item.caliber;
                    this.currentMagazine = item.magazine;
                    this.currentWeaponType = item.weaponType;
                    this.currentMagazineMaxAmmo = item.magazineMaxAmmo;
                }
                if (name === 'helmet') {
                    this.currentHeadsetCompatible = item.headsetCompatible;
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