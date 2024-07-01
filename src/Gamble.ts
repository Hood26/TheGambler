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

    public newGamble(): []{

        switch(this.name){
            case 'wallet':
                this.openWallet();
                break;
            case 'keycard':
                this.openKeycard();
                break;
            case 'key':
                this.openKey();
                break;    
            case 'stim':
                this.openStim();
                break;    
            case 'food':
                this.openFood();
                break;    
            case 'bitcoin':
                this.openBitcoin();
                break;    
            case 'gpcoin':
                this.openGPCoin();
                break;    
            case '50/50':
                this.openFiftyFifty();
                break;
            case 'melee':
                this.openMelee();
                break;
            case 'weapon':
                this.openWeapon();
                break;
            case 'premium_weapon':
                this.openPremiumWeapon();
                break;
            case 'helmet':
                this.openHelmet();
                break;
            case 'headset':
                this.openHeadset();
                break;
            case 'backpack':
                this.openBackpack();
                break;
            case 'rig':
                this.openRig();
                break;
            case 'armor':
                this.openArmor();
                break;
            case 'premium_armor':
                this.openPremiumArmor();
                break;
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
                this.openAmmo();
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);    
        }
        return this.newItemsRequest;
    }

    private openWallet(){
        const roll: number = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Wallet] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds('wallet');
        //console.log('The Odds!')
        //console.log(odds)
        let money: number = -1;

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                money = this.mysteryContainer.getReward('wallet', i);
                break;  
            }
        }

        if (money > 0) {
            const id = "5449016a4bdc2d6f028b456f"; // Roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][wallet] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openKeycard(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds('keycard');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                id = this.mysteryContainer.getReward('keycard', i);
                break;  
            } 
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Keycard Mystery Box Information...");
            this.logger.info("[TheGambler] Keycard id = " + id);
        }

        if (id != "NaN" ) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][keycard] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openFiftyFifty(){
        let id: string;
        let money: number;
        const roll: number = this.randomUtil.getFloat(0,100);

        if (roll <= 50) {
            id = "57347d7224597744596b4e72"; // Can of beef stew (Small)
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            id = "5449016a4bdc2d6f028b456f"; // Roubles
            money = 5000000; // 5,000,000 roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        }
    }
    private openBitcoin(){
        let id: string;
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        if (roll <= this.config.odds['bitcoin_success']) {
            this.logger.info(`[TheGambler][Bitcoin] Case Opened... Received Nothing... Better luck next time :)`);
        } else {
            id = "59faff1d86f7746c51718c9c"; // Bitcoin
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.count++;
        }
    }
    private openGPCoin(){
        let id: string;
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        if (roll <= this.config.odds['gpcoin_success']) {
            this.logger.info(`[TheGambler][GPcoin] Case Opened... Received Nothing... Better luck next time :)`);
        } else {
            id = "5d235b4d86f7742e017bc88a"; // Bitcoin
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, 1)];
            this.count++;
        }
    }

    private openKey(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Key] The container roll is: ${roll}!`);
        const keys = new Keys(); // stores arrays of keys sorted by rarity
        const odds: Array<number> = this.mysteryContainer.getOdds('key');
        const rarities = this.mysteryContainer.getRarities('key');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, keys.items['key' + rarities[i]].length - 1);
                id = keys.items['key' + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Key Mystery Box Information...");
            this.logger.info("[TheGambler] Key id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openStim(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Stim] The container roll is: ${roll}!`);
        const stims = new Stims();
        const odds: Array<number> = this.mysteryContainer.getOdds('stim');
        const rarities = this.mysteryContainer.getRarities('stim');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, stims.items['stim' + rarities[i]].length - 1);
                id = stims.items['stim' + rarities[i]][secondRoll];
                break;  
            } 
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Stimulant Mystery Box Information...");
            this.logger.info("[TheGambler] Stimulant id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Stim] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openFood(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Food] The container roll is: ${roll}!`);
        const foods = new Foods();
        const odds: Array<number> = this.mysteryContainer.getOdds('food');
        const rarities = this.mysteryContainer.getRarities('food');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, foods.items['food' + rarities[i]].length - 1);
                id = foods.items['food' + rarities[i]][secondRoll];
                break;  
            } 
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Mystery Food Information...");
            this.logger.info("[TheGambler] Food id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Stim] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openWeapon(){

        // ItemCreator.ts stores all gun presets
        let item = new ItemCreator(this.container);
        let createWeapon: Item[] = [];
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Weapon] The container roll is: ${roll}!`);
        const odds: Array<number> = this.mysteryContainer.getOdds('gun');
        //console.log("OpenWeapon");
        //console.log(odds);


        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                createWeapon = item.createGun(this.mysteryContainer.getReward('gun', i));
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(createWeapon);
        }

        if (createWeapon.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createWeapon];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Weapon] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openPremiumWeapon(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Premium_Weapon] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createGun: Item[] = [];
        const odds: Array<number> = this.mysteryContainer.getOdds('premium_gun');

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                createGun = item.createGun(this.mysteryContainer.getReward('premium_gun', i));
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Premium Weapon Mystery Box Information...");
            this.logger.info(createGun);
        }

        if (createGun.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createGun];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else { // Nothing
            this.logger.info(`[TheGambler][Premium_Weapon] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openHelmet(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Helmet] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createHelmet: Item[] = [];
        const odds: Array<number> = this.mysteryContainer.getOdds('helmet');

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                createHelmet = item.createHelmet(this.mysteryContainer.getReward('helmet', i));
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Helmet Mystery Box Information...");
            this.logger.info(createHelmet);
        }
        
        if (createHelmet.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createHelmet];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else { // Nothing
            this.logger.info(`[TheGambler][Helmet] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openHeadset(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Headset] The container roll is: ${roll}!`);
        const headsets = new Headsets();
        const rarities = this.mysteryContainer.getRarities('headset');
        const odds: Array<number> = this.mysteryContainer.getOdds('headset');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, headsets.items['headset' + rarities[i]].length - 1);
                id = headsets.items['headset' + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Mystery Headset Information...");
            this.logger.info("[TheGambler] Headset id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Headset] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openBackpack(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Backpack] The container roll is: ${roll}!`);
        const backpacks = new Backpacks();
        const rarities = this.mysteryContainer.getRarities('backpack');
        const odds: Array<number> = this.mysteryContainer.getOdds('backpack');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, backpacks.items['backpack' + rarities[i]].length - 1);
                id = backpacks.items['backpack' + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Backpack] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openRig(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Rig] The container roll is: ${roll}!`);
        const rigs = new Rigs();
        const rarities = this.mysteryContainer.getRarities('rig');
        const odds: Array<number> = this.mysteryContainer.getOdds('rig');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, rigs.items['rig' + rarities[i]].length - 1);
                id = rigs.items['rig' + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Rig] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openArmor(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Armor] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createArmor: Item[] = [];
        const odds: Array<number> = this.mysteryContainer.getOdds('armor');

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                createArmor = item.createArmor(this.mysteryContainer.getReward('armor', i));
                break;  
            }
        }
        
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Armor] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }


    private openPremiumArmor(){
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Premium_Armor] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createArmor: Item[] = [];
        const odds: Array<number> = this.mysteryContainer.getOdds('premium_armor');

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                createArmor = item.createArmor(this.mysteryContainer.getReward('premium_armor', i));
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Premium Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Premium_Armor] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openMelee(){
        const melees = new Melees();
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Melee] The container roll is: ${roll}!`);
        const rarities = this.mysteryContainer.getRarities('melee');
        const odds: Array<number> = this.mysteryContainer.getOdds('melee');
        let id: string = "NaN";

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, melees.items['melee' + rarities[i]].length - 1);
                id = melees.items['melee' + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Melee Mystery Box Information...");
            this.logger.info("[TheGambler] Melee id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
            this.count++;
        } else {
            this.logger.info(`[TheGambler][Melee] Case Opened... Received Nothing... Better luck next time :)`);
        }
    }

    private openAmmo(){
        const ammo = new Ammo();
        const name = this.name;
        const roll: number = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Ammo] The container roll is: ${roll}!`);
        let id: string = "NaN";
        const rarities = this.mysteryContainer.getRarities(name);
        const odds: Array<number> = this.mysteryContainer.getOdds(name);

        for(let i = 0; i < odds.length; i++) {
            if(roll <= odds[i]) {
                const secondRoll = this.randomUtil.getInt(0, ammo.items[name].items[name + rarities[i]].length - 1);
                id = ammo.items[name].items[name + rarities[i]][secondRoll];
                break;  
            }
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Ammo Mystery Box Information...");
            this.logger.info("[TheGambler] Ammo id = " + id);
        }

        if (id != "NaN") {
            let ammoRoll;
            ammoRoll = this.randomUtil.getFloat(this.config.odds[name + '_min'], this.config.odds[name + '_max']);
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, ammoRoll)];
            this.newItemsRequest.foundInRaid = false;
            this.count++;

        } else {
            this.logger.info(`[TheGambler][Ammo] Case Opened... Received Nothing... Better luck next time :)`);
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