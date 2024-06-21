import { DependencyContainer } from "tsyringe";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import { ITraderBase, ITraderAssort } from "@spt-aki/models/eft/common/tables/ITrader";
import { ITraderConfig, UpdateTime } from "@spt-aki/models/spt/config/ITraderConfig";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";

import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { Money } from "@spt-aki/models/enums/Money";
import * as baseJson from "../db/base.json";

import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

export class TraderHelper
{

    // getRandomInt(3) returns 0, 1, or 2
    protected getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

     /**
     * Add profile picture to our trader
     * @param baseJson json file for trader (db/base.json)
     * @param preAkiModLoader mod loader class - used to get the mods file path
     * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
     * @param traderImageName Filename of the trader icon to use
     */
     public registerProfileImage(baseJson: any, modName: string, preAkiModLoader: PreAkiModLoader, imageRouter: ImageRouter, traderImageName: string): void
     {
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
    public setTraderUpdateTime(traderConfig: ITraderConfig, baseJson: any, refreshTimeSecondsMin: number, refreshTimeSecondsMax: number): void
    {
        // Add refresh time in seconds to config
        const traderRefreshRecord: UpdateTime = {
            traderId: baseJson._id,
            seconds: {
                min: refreshTimeSecondsMin,
                max: refreshTimeSecondsMax
            } };

        traderConfig.updateTime.push(traderRefreshRecord);
    }

    /**
     * Add our new trader to the database
     * @param traderDetailsToAdd trader details
     * @param tables database
     * @param jsonUtil json utility class
     */
    // rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
    public addTraderToDb(traderDetailsToAdd: any, tables: IDatabaseTables, jsonUtil: JsonUtil): void
    {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)) as ITraderBase, // Deserialise/serialise creates a copy of the json and allows us to cast it as an ITraderBase
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
    private createAssortTable(): ITraderAssort
    {
        // Create a blank assort object, ready to have items added
        const assortTable: ITraderAssort = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        }

        return assortTable;
    }


     /**
     * Add basic items to trader
     * @param tables SPT db
     * @param traderId Traders id (basejson/_id value)
     */
     public addSingleItemsToTrader(tables: IDatabaseTables, traderId: string, assortCreator: FluentAssortCreator, container: DependencyContainer) : void {

        const vfs = container.resolve<VFS>("VFS")
        const config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))

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
                                .addMoneyCost(Money.ROUBLES, config.wallet_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(KEYGAMBLE_ID)
                                .addStackCount(config.key_stock)
                                .addBuyRestriction(config.key_stock)
                                .addMoneyCost(Money.ROUBLES, config.key_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(STIMGAMBLE_ID)
                                .addStackCount(config.stim_stock)
                                .addBuyRestriction(config.stim_stock)
                                .addMoneyCost(Money.ROUBLES, config.stim_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(KEYCARDGAMBLE_ID)
                                .addStackCount(config.keycard_stock)
                                .addBuyRestriction(config.keycard_stock)
                                .addMoneyCost(Money.ROUBLES, config.keycard_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(FIFTYFIFTY_ID)
                                .addStackCount(config.fiftyfity_stock)
                                .addBuyRestriction(config.fiftyfity_stock)
                                .addMoneyCost(Money.ROUBLES, config.fiftyfity_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(SEALEDWEAPONCASE_ID)
                                .addStackCount(config.sealed_case_stock)
                                .addBuyRestriction(config.sealed_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.sealed_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(MELEEGAMBLE_ID)
                                .addStackCount(config.melee_stock)
                                .addBuyRestriction(config.melee_stock)
                                .addMoneyCost(Money.ROUBLES, config.melee_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GUNGAMBLE_ID)
                                .addStackCount(config.gun_case_stock)
                                .addBuyRestriction(config.gun_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.gun_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(HELMETGAMBLE_ID)
                                .addStackCount(config.helmet_case_stock)
                                .addBuyRestriction(config.helmet_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.helmet_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(ARMORGAMBLE_ID)
                                .addStackCount(config.armor_case_stock)
                                .addBuyRestriction(config.armor_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.armor_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(PREMIUMARMORGAMBLE_ID)
                                .addStackCount(config.premium_armor_case_stock)
                                .addBuyRestriction(config.premium_armor_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.premium_armor_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(PREMIUMGUNGAMBLE_ID)
                                .addStackCount(config.premium_gun_case_stock)
                                .addBuyRestriction(config.remium_gun_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.premium_gun_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(BACKPACKGAMBLE_ID)
                                .addStackCount(config.backpack_case_stock)
                                .addBuyRestriction(config.backpack_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.backpack_case_price)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(HEADSETGAMBLE_ID)
                                .addStackCount(config.headset_case_stock)
                                .addBuyRestriction(config.headset_case_stock)
                                .addMoneyCost(Money.ROUBLES, config.headset_case_price)
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
    public addTraderToLocales(baseJson: any, tables: IDatabaseTables, fullName: string, firstName: string, nickName: string, location: string, description: string)
    {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}