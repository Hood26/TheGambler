"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderHelper = void 0;
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const baseJson = __importStar(require("../db/base.json"));
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
class TraderHelper {
    // getRandomInt(3) returns 0, 1, or 2
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    /**
    * Add profile picture to our trader
    * @param baseJson json file for trader (db/base.json)
    * @param preAkiModLoader mod loader class - used to get the mods file path
    * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
    * @param traderImageName Filename of the trader icon to use
    */
    registerProfileImage(baseJson, modName, preAkiModLoader, imageRouter, traderImageName) {
        // Reference the mod "res" folder
        const imageFilepath = `./${preAkiModLoader.getModPath(modName)}res`;
        // Register a route to point to the profile picture - remember to remove the .jpg from it
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }
    /**
     * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
     * @param traderConfig trader config to add our trader to
     * @param baseJson json file for trader (db/base.json)
     * @param refreshTimeSecondsMin How many seconds between trader stock refresh min time
     * @param refreshTimeSecondsMax How many seconds between trader stock refresh max time
     */
    setTraderUpdateTime(traderConfig, baseJson, refreshTimeSecondsMin, refreshTimeSecondsMax) {
        // Add refresh time in seconds to config
        const traderRefreshRecord = {
            traderId: baseJson._id,
            seconds: {
                min: refreshTimeSecondsMin,
                max: refreshTimeSecondsMax
            }
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    /**
     * Add our new trader to the database
     * @param traderDetailsToAdd trader details
     * @param tables database
     * @param jsonUtil json utility class
     */
    // rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
    addTraderToDb(traderDetailsToAdd, tables, jsonUtil) {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)), // Deserialise/serialise creates a copy of the json and allows us to cast it as an ITraderBase
            questassort: {
                started: {},
                success: {},
                fail: {}
            } // questassort is empty as trader has no assorts unlocked by quests
        };
    }
    /**
     * Create basic data for trader + add empty assorts table for trader
     * @param tables SPT db
     * @param jsonUtil SPT JSON utility class
     * @returns ITraderAssort
     */
    createAssortTable() {
        // Create a blank assort object, ready to have items added
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
        return assortTable;
    }
    /**
    * Add basic items to trader
    * @param tables SPT db
    * @param traderId Traders id (basejson/_id value)
    */
    addSingleItemsToTrader(tables, traderId, assortCreator, container) {
        const vfs = container.resolve("VFS");
        const config = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config/config.jsonc")));
        const WALLETGAMBLE_ID = "a_gambling_wallet";
        const KEYGAMBLE_ID = "a_key_gamble";
        const STIMGAMBLE_ID = "a_stim_gamble";
        const KEYCARDGAMBLE_ID = "a_keycard_gamble";
        const FIFTYFIFTY_ID = "z_50/50_gamble";
        const MELEEGAMBLE_ID = "a_melee_weapon_gamble";
        const GUNGAMBLE_ID = "w_weapon_gamble";
        const SEALEDWEAPONCASE_ID = "648990314b4d2b31b63a46fc";
        const BACKPACKGAMBLE_ID = "wr_backpack_gamble";
        const HELMETGAMBLE_ID = "x_helmet_gamble";
        const HEADSETGAMBLE_ID = "xy_headset_gamble";
        const ARMORGAMBLE_ID = "w_armor_gamble";
        const PREMIUMARMORGAMBLE_ID = "w_premium_armor_gamble";
        const PREMIUMGUNGAMBLE_ID = "wa_premium_weapon_gamble";
        assortCreator.createSingleAssortItem(WALLETGAMBLE_ID)
            .addStackCount(config.wallet_stock)
            .addBuyRestriction(config.wallet_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.wallet_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(KEYGAMBLE_ID)
            .addStackCount(config.key_stock)
            .addBuyRestriction(config.key_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.key_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(STIMGAMBLE_ID)
            .addStackCount(config.stim_stock)
            .addBuyRestriction(config.stim_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.stim_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(KEYCARDGAMBLE_ID)
            .addStackCount(config.keycard_stock)
            .addBuyRestriction(config.keycard_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.keycard_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(FIFTYFIFTY_ID)
            .addStackCount(config.fiftyfity_stock)
            .addBuyRestriction(config.fiftyfity_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.fiftyfity_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(SEALEDWEAPONCASE_ID)
            .addStackCount(config.sealed_case_stock)
            .addBuyRestriction(config.sealed_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.sealed_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(MELEEGAMBLE_ID)
            .addStackCount(config.melee_stock)
            .addBuyRestriction(config.melee_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.melee_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GUNGAMBLE_ID)
            .addStackCount(config.gun_case_stock)
            .addBuyRestriction(config.gun_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.gun_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(HELMETGAMBLE_ID)
            .addStackCount(config.helmet_case_stock)
            .addBuyRestriction(config.helmet_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.helmet_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(ARMORGAMBLE_ID)
            .addStackCount(config.armor_case_stock)
            .addBuyRestriction(config.armor_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.armor_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(PREMIUMARMORGAMBLE_ID)
            .addStackCount(config.premium_armor_case_stock)
            .addBuyRestriction(config.premium_armor_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.premium_armor_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(PREMIUMGUNGAMBLE_ID)
            .addStackCount(config.premium_gun_case_stock)
            .addBuyRestriction(config.remium_gun_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.premium_gun_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(BACKPACKGAMBLE_ID)
            .addStackCount(config.backpack_case_stock)
            .addBuyRestriction(config.backpack_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.backpack_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(HEADSETGAMBLE_ID)
            .addStackCount(config.headset_case_stock)
            .addBuyRestriction(config.headset_case_stock)
            .addMoneyCost(Money_1.Money.ROUBLES, config.headset_case_price)
            .addLoyaltyLevel(1)
            .export(tables.traders[baseJson._id]);
    }
    /**
    * Add traders name/location/description to the locale table
    * @param baseJson json file for trader (db/base.json)
    * @param tables database tables
    * @param fullName Complete name of trader
    * @param firstName First name of trader
    * @param nickName Nickname of trader
    * @param location Location of trader (e.g. "Here in the cat shop")
    * @param description Description of trader
    */
    addTraderToLocales(baseJson, tables, fullName, firstName, nickName, location, description) {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderHelper = TraderHelper;
//# sourceMappingURL=traderHelpers.js.map