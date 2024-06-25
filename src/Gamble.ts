import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { IAddItemDirectRequest } from "@spt/models/eft/inventory/IAddItemsDirectRequest";
import { Item } from "../common/tables/IItem";


import { ItemCreator } from "./itemCreator";
import { Keys } from "./keys";
import { Stims } from "./Stims";
import { Backpacks } from "./Backpacks";
import { Headsets } from "./Headsets";
import { Ammo } from "./Ammo";
import { Melees } from "./Melees";


export class Gamble {

    public newItemsRequest: IAddItemDirectRequest;
    public name: string;
    private id: string;
    private count: number;
    protected container: DependencyContainer
    protected hashUtil: HashUtil;
    protected logger: ILogger
    protected randomUtil: any
    protected config: any;

    constructor(container: DependencyContainer, config: any, logger: ILogger, name :string){
        this.name       = name;
        this.logger     = logger;
        this.container  = container;
        this.config     = config;
        this.count      = 0;
        this.randomUtil = container.resolve<RandomUtil>("RandomUtil");
        this.hashUtil   = container.resolve<HashUtil>("HashUtil");
        this.newItemsRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable : true
        };

    }

    public newGamble(): []{

        switch(this.name){
            case 'gambling_wallet':
                this.openWallet();
                break;
            case 'gambling_keycard':
                this.openKeycard();
                break;
            case 'gambling_key':
                this.openKey();
                break;    
            case 'gambling_stim':
                this.openStim();
                break;    
            case 'gambling_50/50':
                this.openFiftyFifty();
                break;
            case 'gambling_melee':
                this.openMelee();
                break;
            case 'gambling_weapon':
                this.openWeapon();
                break;
            case 'gambling_premium_weapon':
                this.openPremiumWeapon();
                break;
            case 'gambling_helmet':
                this.openHelmet();
                break;
            case 'gambling_headset':
                this.openHeadset();
                break;
            case 'gambling_backpack':
                this.openBackpack();
                break;
            case 'gambling_armor':
                this.openArmor();
                break;
            case 'gambling_premium_armor':
                this.openPremiumArmor();
                break;
            case 'gambling_7.62x25':
            case 'gambling_9x18':
            case 'gambling_9x19':
            case 'gambling_9x21':
            case 'gambling_.357':
            case 'gambling_.45':
            case 'gambling_4.6x30':
            case 'gambling_5.7x28':
            case 'gambling_5.45x39':
            case 'gambling_5.56x45':
            case 'gambling_.300':
            case 'gambling_7.62x39':
            case 'gambling_7.62x51':
            case 'gambling_7.62x54':
            case 'gambling_.338':
            case 'gambling_9x39':
            case 'gambling_.366':
            case 'gambling_12.7x55':
            case 'gambling_12/70':
            case 'gambling_20/70':
            case 'gambling_23x75':
                this.openAmmo();
                break;
            default:
                this.logger.error(`[TheGambler] This Mystery Container Doesn't exist! Contact Author!`);    
        }
        return this.newItemsRequest;
    }

    private openWallet(){
        let money: number;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler][Wallet] The container roll is: ${roll}!`);
        const extremely_rare_odds = this.config.wallet_extremely_rare;
        const rare_odds = this.config.wallet_rare + extremely_rare_odds;
        const kinda_rare_odds = this.config.wallet_kinda_rare + rare_odds;
        const uncommon_odds = this.config.wallet_uncommon + kinda_rare_odds;
        const common_odds = this.config.wallet_common + uncommon_odds;
                
        if(roll <= extremely_rare_odds) {
            money = 2000000;
        } else if (roll <= rare_odds) {
            money = 1000000;
        } else if (roll <= kinda_rare_odds) {
            money = 500000;
        } else if (roll <= uncommon_odds) { 
            money = 300000;
        } else if (roll <= common_odds) {
            money = 100000;
        } else {
            money = 0;
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if (money > 0) {
            const id = "5449016a4bdc2d6f028b456f"; // Roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openKeycard(){
        let id: string;
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Keycard] The container roll is: ${roll}!`);
        const keycard_red_odds = this.config.keycard_red;
        const keycard_green_odds = this.config.keycard_green + keycard_red_odds;
        const keycard_blue_odds = this.config.keycard_blue + keycard_green_odds;
        const keycard_violet_odds = this.config.keycard_violet + keycard_blue_odds;
        const keycard_black_odds = this.config.keycard_black + keycard_violet_odds;
        const keycard_yellow_odds = this.config.keycard_yellow + keycard_black_odds;
        const keycard_blue_marking_odds = this.config.keycard_blue_marking + keycard_yellow_odds
        const keycard_21WS_odds = this.config.keycard_21WS + keycard_blue_marking_odds;
        const keycard_11SR_odds = this.config.keycard_11SR + keycard_21WS_odds;
        const keycard_access_odds = this.config.keycard_access + keycard_11SR_odds;
        //this.logger.info(`[${this.mod}] The Current Roll is: ${roll}!`);

        if(roll <= keycard_red_odds) {
            id = "5c1d0efb86f7744baf2e7b7b"; // TerraGroup Labs keycard (Red)
        } else if (roll <= keycard_green_odds) {
            id = "5c1d0dc586f7744baf2e7b79"; // TerraGroup Labs keycard (Green)
        } else if (roll <= keycard_blue_odds) {
            id = "5c1d0c5f86f7744bb2683cf0"; // TerraGroup Labs keycard (Blue)
        } else if (roll <= keycard_violet_odds) {
            id = "5c1e495a86f7743109743dfb"; // TerraGroup Labs keycard (Violet)
        } else if (roll <= keycard_black_odds) {
            id = "5c1d0f4986f7744bb01837fa"; // TerraGroup Labs keycard (Black)
        } else if (roll <= keycard_yellow_odds) {
            id = "5c1d0d6d86f7744bb2683e1f"; // TerraGroup Labs keycard (Yellow)
        } else if (roll <= keycard_blue_marking_odds) {
            id = "5efde6b4f5448336730dbd61"; // Keycard with a blue marking
        } else if (roll <= keycard_21WS_odds) {
            id = "5e42c83786f7742a021fdf3c"; // Object #21WS keycard
        } else if (roll <= keycard_11SR_odds) {
            id = "5e42c81886f7742a01529f57"; // Object #11SR keycard
        } else if (roll <= keycard_access_odds) {
            id = "5c94bbff86f7747ee735c08f"; // TerraGroup Labs access keycard
        } else {
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Keycard Mystery Box Information...");
            this.logger.info("[TheGambler] Keycard id = " + id);
        }

        if (id != "NaN" ) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openFiftyFifty(){
        let id: string;
        let money: number;
        const roll = this.randomUtil.getFloat(0,100);

        if (roll <= 50) {
            id = "57347d7224597744596b4e72"; // Can of beef stew (Small)
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        } else {
            id = "5449016a4bdc2d6f028b456f"; // Roubles
            money = 5000000; // 5,000,000 roubles
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, money)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openKey(){
        let id: string;
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Key] The container roll is: ${roll}!`);
        const keys = new Keys(); // stores arrays of keys sorted by rarity
        const extremely_rare_odds = this.config.key_extremely_rare;
        const rare_odds = this.config.key_rare + extremely_rare_odds;
        const uncommon_odds = this.config.key_uncommon + rare_odds;
        const common_odds = this.config.key_common + uncommon_odds;

        if (roll <= extremely_rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.items["keys_extremely_rare"].length - 1)
            id = keys.items["keys_extremely_rare"][secondRoll];

        } else if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.items["keys_rare"].length - 1);
            id = keys.items["keys_rare"][secondRoll];

        } else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.items["keys_uncommon"].length - 1);
            id = keys.items["keys_uncommon"][secondRoll];
            
        } else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, keys.items["keys_common"].length - 1);
            id = keys.items["keys_common"][secondRoll];

        } else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Key Mystery Box Information...");
            this.logger.info("[TheGambler] Key id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        } 
    }

    private openStim(){
        let id: string;
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Stimulant] The container roll is: ${roll}!`);
        const stims = new Stims();
        const rare_odds = this.config.stim_rare;
        const uncommon_odds = this.config.stim_uncommon + rare_odds;
        const common_odds = this.config.stim_common + uncommon_odds;

        if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, stims.items['stims_rare'].length - 1);
            id = stims.items['stims_rare'][secondRoll];

        } else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, stims.items['stims_uncommon'].length - 1);
            id = stims.items['stims_uncommon'][secondRoll];
            
        } else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, stims.items['stims_uncommon'].length - 1);
            id = stims.items['stims_common'][secondRoll];

        } else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Stimulant Mystery Box Information...");
            this.logger.info("[TheGambler] Stimulant id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openWeapon(){

        // ItemCreator.ts stores all gun presets
        let item = new ItemCreator(this.container);
        let createWeapon: Item[] = [];
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Weapon] The container roll is: ${roll}!`);
        const rare_odds = this.config.gun_rare;
        const meme_odds = this.config.gun_meme + rare_odds;
        const uncommon_odds = this.config.gun_uncommon + meme_odds;
        const scav_odds = this.config.gun_scav + uncommon_odds;
        const common_odds = this.config.gun_common + scav_odds;

        if(roll <= rare_odds) {
            createWeapon = item.createGun('meta');
        } else if (roll <= meme_odds) {
            createWeapon = item.createGun('meme');
        } else if (roll <= uncommon_odds) {
            createWeapon = item.createGun('decent');
        } else if (roll <= scav_odds) {
            createWeapon = item.createGun('scav');
        } else if (roll <= common_odds) {
            createWeapon = item.createGun('base');
        } else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(createWeapon);
        }

        if (createWeapon.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createWeapon];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openPremiumWeapon(){
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Premium_Weapon] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createGun: Item[] = [];
        const rare_odds = this.config.premium_gun_rare;
        
        if(roll <= rare_odds){
            createGun = item.createGun('meta');
        } else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Premium Weapon Mystery Box Information...");
            this.logger.info(createGun);
        }

        if (createGun.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createGun];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openHelmet(){
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Helmet] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createHelmet: Item[] = [];
        
        const extremely_rare_odds = this.config.helmet_extremely_rare;
        const rare_odds = this.config.helmet_rare + extremely_rare_odds;
        const uncommon_odds = this.config.helmet_uncommon + rare_odds;
        const common_odds = this.config.helmet_common + uncommon_odds;
        this.logger.info(`[TheGambler] Extremelt Rare Odds ${extremely_rare_odds}`);
        
        if(roll <= extremely_rare_odds) {
            createHelmet = item.createHelmet('extremely_rare');
        } else if (roll <= rare_odds) {
            createHelmet= item.createHelmet('rare');
        } else if (roll <= uncommon_odds) {
            createHelmet = item.createHelmet('uncommon');
        } else if (roll <= common_odds) {
            createHelmet = item.createHelmet('common');
        } else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Helmet Mystery Box Information...");
            this.logger.info(createHelmet);
        }

        
        if (createHelmet.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createHelmet];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openHeadset(){
        let id: string;
        const roll = this.randomUtil.getFloat(0,8);
        this.logger.info(`\n[TheGambler][Headset] The container roll is: ${roll}!`);
        const headsets = new Headsets();
        const headset_odds = this.config.headset_chance;
        id = headsets.headsets[roll];

        if (roll <= headset_odds) {
            const secondRoll = this.randomUtil.getInt(0, headsets.headsets.length - 1);
            id = headsets.headsets[secondRoll];

        } else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Mystery Headset Information...");
            this.logger.info("[TheGambler] Headset id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openBackpack(){
        let id: string;
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Backpack] The container roll is: ${roll}!`);
        const backpacks = new Backpacks();
        const extremely_rare_odds = this.config.backpack_extremely_rare;
        const rare_odds = this.config.backpack_rare + extremely_rare_odds;
        const uncommon_odds = this.config.backpack_uncommon + rare_odds;
        const common_odds = this.config.backpack_common + uncommon_odds;

        if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, backpacks.items["backpacks_rare"].length - 1);
            id = backpacks.items["backpacks_rare"][secondRoll];

        } else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, backpacks.items["backpacks_uncommon"].length - 1);
            id = backpacks.items["backpacks_uncommon"][secondRoll];
            
        } else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, backpacks.items["backpacks_common"].length - 1);
            id = backpacks.items["backpacks_common"][secondRoll];

        } else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openArmor(){
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Armor] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createArmor: Item[] = [];
        const rare_odds = this.config.armor_rare;
        const uncommon_odds = this.config.armor_uncommon + rare_odds;
        const common_odds = this.config.armor_common + uncommon_odds;
        
        if(roll <= rare_odds) {
            createArmor = item.createArmor('rare');
        } else if (roll <= uncommon_odds) {
            createArmor= item.createArmor('uncommon');
        } else if (roll <= common_odds) {
            createArmor = item.createArmor('common');
        } else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if(this.config.debug) {
            this.logger.info("[TheGambler] Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
        }
    }


    private openPremiumArmor(){
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Premium_Armor] The container roll is: ${roll}!`);
        let item = new ItemCreator(this.container);
        let createArmor: Item[] = [];
        const rare_odds = this.config.premium_armor_rare;

        if ( roll <= rare_odds) {
            createArmor = item.createArmor('rare');
        } else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Premium Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        
        if (createArmor.length != 0) {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [...createArmor];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openMelee(){
        let id: string;
        const melees = new Melees();
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Melee] The container roll is: ${roll}!`);
        const extremely_rare_odds = this.config.melee_extremely_rare;
        const rare_odds = this.config.melee_rare + extremely_rare_odds;
        const uncommon_odds = this.config.melee_uncommon + rare_odds;
        const common_odds = this.config.melee_common + uncommon_odds;

        if (roll <= extremely_rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, melees.items['melees_extremely_rare'].length - 1);
            id = melees.items['melees_extremely_rare'][secondRoll];
        } else if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, melees.items['melees_rare'].length - 1);
            id = melees.items['melees_rare'][secondRoll];

        } else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, melees.items['melees_uncommon'].length - 1);
            id = melees.items['melees_uncommon'][secondRoll];

        } else if (roll <= common_odds) {
            const secondRoll = this.randomUtil.getInt(0, melees.items['melees_common'].length - 1);
            id = melees.items['melees_common'][secondRoll];

        } else { // Nothing. Default percentages make this 0% of happening
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Melee Mystery Box Information...");
            this.logger.info("[TheGambler] Melee id = " + id);
        }

        if (id != "NaN") {
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id)];
            this.newItemsRequest.foundInRaid = true;
        }
    }

    private openAmmo(){
        let id: string;
        const ammo = new Ammo();
        const name = this.name.replace("gambling_", "");
        this.logger.info(`\n[TheGambler][Ammo] name: ${name}`);
        const roll = this.randomUtil.getFloat(0,100);
        this.logger.info(`\n[TheGambler][Ammo] The container roll is: ${roll}!`);
        const rare_odds = this.config.ammo_odds[name + "_rare"];
        const uncommon_odds = this.config.ammo_odds[name + "_uncommon"] + rare_odds;
        const common_odds = this.config.ammo_odds[name + "_common"] + uncommon_odds;

        const rareName = name + "_rare";
        const uncommonName = name + "_uncommon";
        const commonName = name + "_common";
        this.logger.info(`\n[TheGambler][Ammo] rare: ${rareName}! uncommon: ${uncommonName}! common: ${commonName}!`);
        this.logger.info(`\n[TheGambler][Ammo] rare: ${rare_odds}! uncommon: ${uncommon_odds}! common: ${common_odds}!`);


        if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, ammo.items[name + "_rare"].length - 1);
            id = ammo.items[name + "_rare"][secondRoll];

        } else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, ammo.items[name + "_uncommon"].length - 1);
            id = ammo.items[name + "_uncommon"][secondRoll];
            
        } else if (roll <= common_odds) {
            const secondRoll = this.randomUtil.getInt(0, ammo.items[name + "_common"].length - 1);
            id = ammo.items[name + "_common"][secondRoll];

        } else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }

        if(this.config.debug) {
            this.logger.info("[TheGambler] Ammo Mystery Box Information...");
            this.logger.info("[TheGambler] Ammo id = " + id);
        }

        if (id != "NaN") {
            let ammoRoll;

            if(name == ".388") {
                ammoRoll = this.randomUtil.getFloat(1,6);
            } else {
                ammoRoll = this.randomUtil.getFloat(10,30);
            }
            this.newItemsRequest.itemsWithModsToAdd[this.count] = [this.newItemFormat(id, ammoRoll)];
            this.newItemsRequest.foundInRaid = true;
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