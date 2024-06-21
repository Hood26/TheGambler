"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamble = void 0;
const itemCreator_1 = require("./itemCreator");
const keys_1 = require("./keys");
const Stims_1 = require("./Stims");
const Backpacks_1 = require("./Backpacks");
const Headsets_1 = require("./Headsets");
class Gamble {
    newItemRequest;
    name;
    id;
    container;
    hashUtil;
    logger;
    randomUtil;
    config;
    constructor(container, config, logger, name) {
        this.name = name;
        this.logger = logger;
        this.container = container;
        this.config = config;
        this.randomUtil = container.resolve("RandomUtil");
        this.hashUtil = container.resolve("HashUtil");
        this.newItemRequest = {
            itemWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
    }
    newGamble() {
        switch (this.name) {
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
            default:
                this.logger.error(`[TheGambler] This Container Doesn't exist!`);
        }
        return this.newItemRequest;
    }
    openWallet() {
        let money;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const extremely_rare_odds = this.config.wallet_extremely_rare;
        const rare_odds = this.config.wallet_rare + extremely_rare_odds;
        const kinda_rare_odds = this.config.wallet_kinda_rare + rare_odds;
        const uncommon_odds = this.config.wallet_uncommon + kinda_rare_odds;
        const common_odds = this.config.wallet_common + uncommon_odds;
        if (roll <= extremely_rare_odds) {
            money = 2000000;
        }
        else if (roll <= rare_odds) {
            money = 1000000;
        }
        else if (roll <= kinda_rare_odds) {
            money = 500000;
        }
        else if (roll <= uncommon_odds) {
            money = 300000;
        }
        else if (roll <= common_odds) {
            money = 100000;
        }
        else {
            money = 0;
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (money > 0) {
            const id = "5449016a4bdc2d6f028b456f"; // Roubles
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id, money));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openKeycard() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const keycard_red_odds = this.config.keycard_red;
        const keycard_green_odds = this.config.keycard_green + keycard_red_odds;
        const keycard_blue_odds = this.config.keycard_blue + keycard_green_odds;
        const keycard_violet_odds = this.config.keycard_violet + keycard_blue_odds;
        const keycard_black_odds = this.config.keycard_black + keycard_violet_odds;
        const keycard_yellow_odds = this.config.keycard_yellow + keycard_black_odds;
        const keycard_blue_marking_odds = this.config.keycard_blue_marking + keycard_yellow_odds;
        const keycard_21WS_odds = this.config.keycard_21WS + keycard_blue_marking_odds;
        const keycard_11SR_odds = this.config.keycard_11SR + keycard_21WS_odds;
        const keycard_access_odds = this.config.keycard_access + keycard_11SR_odds;
        //this.logger.info(`[${this.mod}] The Current Roll is: ${roll}!`);
        if (roll <= keycard_red_odds) {
            id = "5c1d0efb86f7744baf2e7b7b"; // TerraGroup Labs keycard (Red)
        }
        else if (roll <= keycard_green_odds) {
            id = "5c1d0dc586f7744baf2e7b79"; // TerraGroup Labs keycard (Green)
        }
        else if (roll <= keycard_blue_odds) {
            id = "5c1d0c5f86f7744bb2683cf0"; // TerraGroup Labs keycard (Blue)
        }
        else if (roll <= keycard_violet_odds) {
            id = "5c1e495a86f7743109743dfb"; // TerraGroup Labs keycard (Violet)
        }
        else if (roll <= keycard_black_odds) {
            id = "5c1d0f4986f7744bb01837fa"; // TerraGroup Labs keycard (Black)
        }
        else if (roll <= keycard_yellow_odds) {
            id = "5c1d0d6d86f7744bb2683e1f"; // TerraGroup Labs keycard (Yellow)
        }
        else if (roll <= keycard_blue_marking_odds) {
            id = "5efde6b4f5448336730dbd61"; // Keycard with a blue marking
        }
        else if (roll <= keycard_21WS_odds) {
            id = "5e42c83786f7742a021fdf3c"; // Object #21WS keycard
        }
        else if (roll <= keycard_11SR_odds) {
            id = "5e42c81886f7742a01529f57"; // Object #11SR keycard
        }
        else if (roll <= keycard_access_odds) {
            id = "5c94bbff86f7747ee735c08f"; // TerraGroup Labs access keycard
        }
        else {
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Keycard Mystery Box Information...");
            this.logger.info("[TheGambler] Keycard id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openFiftyFifty() {
        let id;
        let money;
        const roll = this.randomUtil.getFloat(0, 100);
        if (roll <= 50) {
            id = "57347d7224597744596b4e72"; // Can of beef stew (Small)
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
        else {
            id = "5449016a4bdc2d6f028b456f"; // Roubles
            money = 5000000; // 5,000,000 roubles
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id, money));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openKey() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const keys = new keys_1.Keys(); // stores arrays of keys sorted by rarity
        const extremely_rare_odds = this.config.key_extremely_rare;
        const rare_odds = this.config.key_rare + extremely_rare_odds;
        const uncommon_odds = this.config.key_uncommon + rare_odds;
        const common_odds = this.config.key_common + uncommon_odds;
        if (roll <= extremely_rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.extremelyRareKeys.length - 1);
            id = keys.extremelyRareKeys[secondRoll];
        }
        else if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.rareKeys.length - 1);
            id = keys.rareKeys[secondRoll];
        }
        else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, keys.uncommonKeys.length - 1);
            id = keys.uncommonKeys[secondRoll];
        }
        else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, keys.commonKeys.length - 1);
            id = keys.commonKeys[secondRoll];
        }
        else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Key Mystery Box Information...");
            this.logger.info("[TheGambler] Key id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openStim() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const stims = new Stims_1.Stims();
        const rare_odds = this.config.stim_rare;
        const uncommon_odds = this.config.stim_uncommon + rare_odds;
        const common_odds = this.config.stim_common + uncommon_odds;
        if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, stims.rareStims.length - 1);
            id = stims.rareStims[secondRoll];
        }
        else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, stims.uncommonStims.length - 1);
            id = stims.uncommonStims[secondRoll];
        }
        else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, stims.commonStims.length - 1);
            id = stims.commonStims[secondRoll];
        }
        else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Stimulant Mystery Box Information...");
            this.logger.info("[TheGambler] Stimulant id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openWeapon() {
        // ItemCreator.ts stores all gun presets
        let item = new itemCreator_1.ItemCreator(this.container);
        let createWeapon = [];
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const rare_odds = this.config.gun_rare;
        const meme_odds = this.config.gun_meme + rare_odds;
        const uncommon_odds = this.config.gun_uncommon + meme_odds;
        const scav_odds = this.config.gun_scav + uncommon_odds;
        const common_odds = this.config.gun_common + scav_odds;
        if (roll <= rare_odds) {
            createWeapon = item.createGun('meta');
        }
        else if (roll <= meme_odds) {
            createWeapon = item.createGun('meme');
        }
        else if (roll <= uncommon_odds) {
            createWeapon = item.createGun('decent');
        }
        else if (roll <= scav_odds) {
            createWeapon = item.createGun('scav');
        }
        else if (roll <= common_odds) {
            createWeapon = item.createGun('base');
        }
        else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Weapon Mystery Box Information...");
            this.logger.info(createWeapon);
        }
        if (createWeapon.length != 0) {
            this.newItemRequest.itemWithModsToAdd.push(...createWeapon);
            this.newItemRequest.foundInRaid = true;
        }
    }
    openPremiumWeapon() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createGun = [];
        const rare_odds = this.config.premium_gun_rare;
        if (roll <= rare_odds) {
            createGun = item.createGun('meta');
        }
        else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Premium Weapon Mystery Box Information...");
            this.logger.info(createGun);
        }
        if (createGun.length != 0) {
            this.newItemRequest.itemWithModsToAdd.push(...createGun);
            this.newItemRequest.foundInRaid = true;
        }
        //this.logger.info(this.newItemRequest.itemWithModsToAdd);
    }
    openHelmet() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createHelmet = [];
        const extremely_rare_odds = this.config.helmet_extremely_rare;
        const rare_odds = this.config.helmet_rare + extremely_rare_odds;
        const uncommon_odds = this.config.helmet_uncommon + rare_odds;
        const common_odds = this.config.helmet_common + uncommon_odds;
        this.logger.info(`[TheGambler] Extremelt Rare Odds ${extremely_rare_odds}`);
        if (roll <= extremely_rare_odds) {
            createHelmet = item.createHelmet('extremely_rare');
        }
        else if (roll <= rare_odds) {
            createHelmet = item.createHelmet('rare');
        }
        else if (roll <= uncommon_odds) {
            createHelmet = item.createHelmet('uncommon');
        }
        else if (roll <= common_odds) {
            createHelmet = item.createHelmet('common');
        }
        else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Helmet Mystery Box Information...");
            this.logger.info(createHelmet);
        }
        if (createHelmet.length != 0) {
            this.newItemRequest.itemWithModsToAdd.push(...createHelmet);
            this.newItemRequest.foundInRaid = true;
        }
    }
    openHeadset() {
        let id;
        const roll = this.randomUtil.getFloat(0, 8);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const headsets = new Headsets_1.Headsets();
        const headset_odds = this.config.headset_chance;
        id = headsets.headsets[roll];
        if (roll <= headset_odds) {
            const secondRoll = this.randomUtil.getInt(0, headsets.headsets.length - 1);
            id = headsets.headsets[secondRoll];
        }
        else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Mystery Headset Information...");
            this.logger.info("[TheGambler] Headset id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openBackpack() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const backpacks = new Backpacks_1.Backpacks();
        const extremely_rare_odds = this.config.backpack_extremely_rare;
        const rare_odds = this.config.backpack_rare + extremely_rare_odds;
        const uncommon_odds = this.config.backpack_uncommon + rare_odds;
        const common_odds = this.config.backpack_common + uncommon_odds;
        if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, backpacks.rareBackpacks.length - 1);
            id = backpacks.rareBackpacks[secondRoll];
        }
        else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, backpacks.uncommonBackpacks.length - 1);
            id = backpacks.uncommonBackpacks[secondRoll];
        }
        else if (roll <= common_odds) { // Common Key
            const secondRoll = this.randomUtil.getInt(0, backpacks.commonBackpacks.length - 1);
            id = backpacks.commonBackpacks[secondRoll];
        }
        else { // Nothing
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Backpack Mystery Box Information...");
            this.logger.info("[TheGambler] Backpack id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    openArmor() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createArmor = [];
        const rare_odds = this.config.armor_rare;
        const uncommon_odds = this.config.armor_uncommon + rare_odds;
        const common_odds = this.config.armor_common + uncommon_odds;
        if (roll <= rare_odds) {
            createArmor = item.createArmor('rare');
        }
        else if (roll <= uncommon_odds) {
            createArmor = item.createArmor('uncommon');
        }
        else if (roll <= common_odds) {
            createArmor = item.createArmor('common');
        }
        else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        if (createArmor.length != 0) {
            this.newItemRequest.itemWithModsToAdd.push(...createArmor);
            this.newItemRequest.foundInRaid = true;
        }
    }
    openPremiumArmor() {
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        let item = new itemCreator_1.ItemCreator(this.container);
        let createArmor = [];
        const rare_odds = this.config.premium_armor_rare;
        if (roll <= rare_odds) {
            createArmor = item.createArmor('rare');
        }
        else { // Nothing
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Premium Armor Mystery Box Information...");
            this.logger.info(createArmor);
        }
        if (createArmor.length != 0) {
            this.newItemRequest.itemWithModsToAdd.push(...createArmor);
            this.newItemRequest.foundInRaid = true;
        }
    }
    openMelee() {
        let id;
        const roll = this.randomUtil.getFloat(0, 100);
        this.logger.info(`\n[TheGambler] The container roll is: ${roll}!`);
        const extremely_rare_odds = this.config.melee_extremely_rare;
        const rare_odds = this.config.melee_rare + extremely_rare_odds;
        const uncommon_odds = this.config.melee_uncommon + rare_odds;
        const common_odds = this.config.melee_common + uncommon_odds;
        if (roll <= extremely_rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, 2);
            //this.logger.info(`[TheGambler] The Second Roll is: ${secondRoll}!`);
            if (secondRoll == 0) {
                id = "63920105a83e15700a00f168"; // SOG Voodoo Hawk tactical tomahawk
            }
            else if (secondRoll == 1) {
                id = "5bffe7930db834001b734a39"; // Crash Axe
            }
            else if (secondRoll == 2) {
                id = "601948682627df266209af05"; // UVSR Taiga-1 survival machete
            }
        }
        else if (roll <= rare_odds) {
            const secondRoll = this.randomUtil.getInt(0, 1);
            if (secondRoll == 0) {
                id = "5c0126f40db834002a125382"; // Red Rebel ice pick
            }
            else if (secondRoll == 1) {
                id = "5bffdd7e0db834001b734a1a"; // Miller Bros. Blades M-2 Tactical Sword
            }
        }
        else if (roll <= uncommon_odds) {
            const secondRoll = this.randomUtil.getInt(0, 3);
            if (secondRoll == 0) {
                id = "5fc64ea372b0dd78d51159dc"; // Cultist knife
            }
            else if (secondRoll == 1) {
                id = "5bc9c1e2d4351e00367fbcf0"; // Antique axe
            }
            else if (secondRoll == 2) {
                id = "5c010e350db83400232feec7"; // SP-8 Survival Machete
            }
            else if (secondRoll == 3) {
                id = "5c012ffc0db834001d23f03f"; // Camper axe
            }
        }
        else if (roll <= common_odds) {
            const secondRoll = this.randomUtil.getInt(0, 6);
            if (secondRoll == 0) {
                id = "5bffdc370db834001d23eca8"; // 6Kh5 Bayonet
            }
            else if (secondRoll == 1) {
                id = "57cd379a24597778e7682ecf"; // Kiba Arms Tactical Tomahawk
            }
            else if (secondRoll == 2) {
                id = "6540d2162ae6d96b540afcaf"; // PR-Taran police baton
            }
            else if (secondRoll == 3) {
                id = "54491bb74bdc2d09088b4567"; // ER FULCRUM BAYONET
            }
            else if (secondRoll == 4) {
                id = "5c07df7f0db834001b73588a"; // Freeman crowbar
            }
            else if (secondRoll == 5) {
                id = "57e26ea924597715ca604a09"; // Bars A-2607 Damascus knife
            }
            else if (secondRoll == 6) {
                id = "57e26fc7245977162a14b800"; // Bars A-2607 95Kh18 knife
            }
        }
        else { // Nothing. Default percentages make this 0% of happening
            id = "NaN";
            this.logger.info(`[TheGambler] Case Opened... Received Nothing... Better luck next time :)`);
        }
        if (this.config.debug) {
            this.logger.info("[TheGambler] Melee Mystery Box Information...");
            this.logger.info("[TheGambler] Melee id = " + id);
        }
        if (id != "NaN") {
            this.newItemRequest.itemWithModsToAdd.push(this.newItemFormat(id));
            this.newItemRequest.foundInRaid = true;
        }
    }
    newItemFormat(tpl, count = undefined) {
        const item = {
            _id: this.hashUtil.generate(),
            _tpl: tpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: count ? count : 1 }
        };
        return item;
    }
}
exports.Gamble = Gamble;
//# sourceMappingURL=Gamble.js.map