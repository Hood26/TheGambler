import { DependencyContainer } from "tsyringe";
import { PreAkiModLoader } from "@spt/loaders/PreAkiModLoader";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { ITraderBase, ITraderAssort } from "@spt/models/eft/common/tables/ITrader";
import { ITraderConfig, UpdateTime } from "@spt/models/spt/config/ITraderConfig";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { ILogger } from "@spt/models/spt/utils/ILogger";

import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { Money } from "@spt/models/enums/Money";
import * as baseJson from "../db/base.json";

import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";
import { Price } from "./Price";
import { MysteryContainer } from "./MysteryContainer";


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
     public addSingleItemsToTrader(tables: IDatabaseTables, traderId: string, assortCreator: FluentAssortCreator, container: DependencyContainer, logger: ILogger) : void {

        const vfs = container.resolve<VFS>("VFS")
        const config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))

        const SEALED_WEAPON_CASE_ID = "az_sealed_weapon_gamble";
        const FOOD_GAMBLE_ID = "ba_food_gamble";
        const WALLET_GAMBLE_ID = "bb_wallet_gamble";
        const KEY_GAMBLE_ID = "bc_key_gamble";
        const KEYCARD_GAMBLE_ID = "bd_keycard_gamble";
        const MELEE_GAMBLE_ID = "be_melee_weapon_gamble";
        const STIM_GAMBLE_ID = "bf_stim_gamble";
        const MEDICAL_GAMBLE_ID = "zz_medical_gamble";
        const BITCOIN_GAMBLE_ID = "bg_bitcoin_gamble";
        const GPCOIN_GAMBLE_ID = "bh_gpcoin_gamble";
        const FIFTY_FIFTY_GAMBLE_ID = "z_50/50_gamble";
        const WEAPON_GAMBLE_ID = "w_weapon_gamble";
        const BACKPACK_GAMBLE_ID = "wr_backpack_gamble";
        const LOADOUT_GAMBLE_ID = "ws_loadout_gamble";
        const RIG_GAMBLE_ID = "wr_rig_gamble";
        const HELMET_GAMBLE_ID = "x_helmet_gamble";
        const HEADSET_GAMBLE_ID = "xy_headset_gamble";
        const ARMOR_GAMBLE_ID = "w_armor_gamble";
        const PREMIUM_ARMOR_GAMBLE_ID = "w_premium_armor_gamble";
        const PREMIUM_WEAPON_GAMBLE_ID = "wa_premium_weapon_gamble";
        const SEVEN_SIX_TWO_BY_TWO_FIVE_GAMBLE_ID = "aa_7.62x25_gamble";
        const NINE_BY_ONE_EIGHT_GAMBLE_ID = "ab_9x18_gamble";
        const NINE_BY_ONE_NINE_GAMBLE_ID = "ac_9x19_gamble";
        const NINE_BY_TWO_ONE_GAMBLE_ID = "ad_9x21_gamble";
        const THREE_FIVE_SEVEN_GAMBLE_ID = "ae_.357_gamble";
        const FOUR_FIVE_GAMBLE_ID = "af_.45_gamble";
        const FOUR_SIX_BY_THREE_ZERO_GAMBLE_ID = "ag_4.6x30_gamble";
        const FIVE_SEVEN_BY_TWO_EIGHT_GAMBLE_ID = "ah_5.7x28_gamble";
        const FIVE_FOUR_FIVE_BY_THREE_NINE_GAMBLE_ID = "ai_5.45x39_gamble";
        const FIVE_FIVE_SIX_BY_FOUR_FIVE_GAMBLE_ID = "aj_5.56x45_gamble";
        const THREE_ZERO_ZERO_GAMBLE_ID = "ak_.300_gamble";
        const SEVEN_SIX_TWO_BY_THREE_NINE_GAMBLE_ID = "al_7.62x39_gamble";
        const SEVEN_SIX_TWO_BY_FIVE_ONE_GAMBLE_ID = "am_7.62x51_gamble";
        const SEVEN_SIX_TWO_BY_FIVE_FOUR_GAMBLE_ID = "an_7.62x54_gamble";
        const THREE_THREE_EIGHT_GAMBLE_ID = "ao_.338_gamble";
        const NINE_BY_THREE_NINE_GAMBLE_ID = "ap_9x39_gamble";
        const THREE_SIX_SIX_GAMBLE_ID = "aq_.366_gamble";
        const ONE_TWO_SEVEN_BY_FIVE_FIVE_GAMBLE_ID = "ar_12.7x55_gamble";
        const ONE_TWO_BY_SEVEN_ZERO_GAMBLE_ID = "as_12/70_gamble";
        const TWO_ZERO_BY_SEVEN_ZERO_GAMBLE_ID = "at_20/70_gamble";
        const TWO_THREE_BY_SEVEN_FIVE_GAMBLE_ID = "au_23x75_gamble";
        const BITCOIN_ID = '59faff1d86f7746c51718c9c';
        const GPCOIN_ID = '5d235b4d86f7742e017bc88a';
        const MEDICAL_TOOLS_MEDS_ID = '619cc01e0a7c3a1a2731940c';
        const PILE_OF_MEDS_ID = '5d1b3a5d86f774252167ba22';
        const BLOODSET_ID = '5b4335ba86f7744d2837a264';
        
        const price = new Price(container, config, logger);
        const generatedPrices = price.generateContainerPrices();
        console.log(generatedPrices)

        const GOLD_AKM_HANDGUARD_ID = 'gold_akm_handguard';
        const GOLD_AKM_FOREGRIP_ID = 'gold_akm_foregrip';
        const GOLD_AKM_STOCK_ID = 'gold_akm_stock';
        const GOLD_AKM_MAGAZINE_ID = 'gold_akm_magazine';
        const GOLD_AKM_RECEIVER_ID = 'gold_akm_receiver';
        const GOLD_AKM_REAR_SIGHT_ID = 'gold_akm_rearsight';
        const GOLD_AKM_CHARGE_HANDLE_ID = 'gold_akm_chargehandle';
        const GOLD_AKM_SILENCER_ID = 'gold_akm_silencer';
        const GOLD_AKM_PISTOLGRIP_ID = 'gold_akm_pistolgrip';
        // FOR AK-74 gas tube (6P20 Sb.1-2)
        //console.log(tables.templates.items['59c6633186f7740cf0493bb9'])
        tables.templates.items['59d64ec286f774171d1e0a42']._props.Slots[0]._props.filters[0].Filter.push(GOLD_AKM_HANDGUARD_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[6]._props.filters[0].Filter.push(GOLD_AKM_STOCK_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[7]._props.filters[0].Filter.push(GOLD_AKM_MAGAZINE_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[4]._props.filters[0].Filter.push(GOLD_AKM_RECEIVER_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[2]._props.filters[0].Filter.push(GOLD_AKM_SILENCER_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[5]._props.filters[0].Filter.push(GOLD_AKM_REAR_SIGHT_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[8]._props.filters[0].Filter.push(GOLD_AKM_CHARGE_HANDLE_ID);
        tables.templates.items['59d6088586f774275f37482f']._props.Slots[3]._props.filters[0].Filter.push(GOLD_AKM_PISTOLGRIP_ID);
        // foregrip
        tables.templates.items['59e0bed186f774156f04ce84']._props.Slots[0]._props.filters[0].Filter.push(GOLD_AKM_FOREGRIP_ID);



        /*
        assortCreator.createSingleAssortItem(GOLD_AKM_HANDGUARD_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_FOREGRIP_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_STOCK_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_MAGAZINE_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_RECEIVER_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_REAR_SIGHT_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_CHARGE_HANDLE_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_SILENCER_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(GOLD_AKM_PISTOLGRIP_ID)
                                    .addStackCount(999)
                                    .addMoneyCost(Money.ROUBLES, 5000)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);

        */  


        
        if (config.price_stock['wallet_case_enable']){
            assortCreator.createSingleAssortItem(WALLET_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (config.price_stock['wallet_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['key_case_enable']){
            assortCreator.createSingleAssortItem(KEY_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['key_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['stim_case_enable']){
            assortCreator.createSingleAssortItem(STIM_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['stim_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }  
        if (config.price_stock['medical_case_enable']){
            assortCreator.createSingleAssortItem(MEDICAL_GAMBLE_ID)
                                    .addStackCount(config.price_stock['medical_case_stock'])
                                    .addBarterCost(PILE_OF_MEDS_ID, 3)
                                    .addBarterCost(MEDICAL_TOOLS_MEDS_ID, 2)
                                    .addBarterCost(BLOODSET_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }                       
        if (config.price_stock['food_case_enable']){
            assortCreator.createSingleAssortItem(FOOD_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['food_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }                        
        if (config.price_stock['bitcoin_case_enable']){
            assortCreator.createSingleAssortItem(BITCOIN_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addBarterCost(BITCOIN_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['gpcoin_case_enable']){
            assortCreator.createSingleAssortItem(GPCOIN_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addBarterCost(GPCOIN_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['keycard_case_enable']){
            assortCreator.createSingleAssortItem(KEYCARD_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['keycard_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['fiftyfifty_case_enable']){
            assortCreator.createSingleAssortItem(FIFTY_FIFTY_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (config.price_stock['fiftyfifty_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['sealed_case_enable']){
            assortCreator.createSingleAssortItem(SEALED_WEAPON_CASE_ID)
                                    .addStackCount(config.price_stock['sealed_case_stock'])
                                    .addMoneyCost(Money.ROUBLES, (config.price_stock['sealed_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['melee_case_enable']){
            assortCreator.createSingleAssortItem(MELEE_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['melee_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['weapon_case_enable']){
            assortCreator.createSingleAssortItem(WEAPON_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['weapon_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['helmet_case_enable']){
            assortCreator.createSingleAssortItem(HELMET_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['helmet_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['armor_case_enable']){
            assortCreator.createSingleAssortItem(ARMOR_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['armor_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['premium_armor_case_enable']){
            assortCreator.createSingleAssortItem(PREMIUM_ARMOR_GAMBLE_ID)
                                    .addStackCount(config.price_stock['premium_armor_case_stock'])
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['premium_armor_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['premium_weapon_case_enable']){
            assortCreator.createSingleAssortItem(PREMIUM_WEAPON_GAMBLE_ID)
                                    .addStackCount(config.price_stock['premium_weapon_case_stock'])
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['premium_weapon_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['backpack_case_enable']){
            assortCreator.createSingleAssortItem(BACKPACK_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['backpack_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['loadout_case_enable']){
            assortCreator.createSingleAssortItem(LOADOUT_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (config.price_stock['loadout_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['rig_case_enable']){
            assortCreator.createSingleAssortItem(RIG_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['rig_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.price_stock['headset_case_enable']){
            assortCreator.createSingleAssortItem(HEADSET_GAMBLE_ID)
                                    .addUnlimitedStackCount()
                                    .addMoneyCost(Money.ROUBLES, (generatedPrices['headset_case_price'] * config.price_multiplier))
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);                    
        }
        if (config.price_stock['all_ammo_enable']){
           if (config.price_stock['9x18_case_enable']){
               assortCreator.createSingleAssortItem(NINE_BY_ONE_EIGHT_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                       .addMoneyCost(Money.ROUBLES, (generatedPrices["9x18_case_price"] * config.price_multiplier))
                                       .addLoyaltyLevel(1)
                                       .export(tables.traders[baseJson._id]);
           }
           if (config.price_stock['9x19_case_enable']){
               assortCreator.createSingleAssortItem(NINE_BY_ONE_NINE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                       .addMoneyCost(Money.ROUBLES, (generatedPrices["9x19_case_price"] * config.price_multiplier))
                                       .addLoyaltyLevel(1)
                                       .export(tables.traders[baseJson._id]);
           }
           if (config.price_stock['9x21_case_enable']){
               assortCreator.createSingleAssortItem(NINE_BY_TWO_ONE_GAMBLE_ID)
                                       .addUnlimitedStackCount()
                                       .addMoneyCost(Money.ROUBLES, (generatedPrices["9x21_case_price"] * config.price_multiplier))
                                       .addLoyaltyLevel(1)
                                       .export(tables.traders[baseJson._id]);
           }
           if (config.price_stock['.357_case_enable']){
               assortCreator.createSingleAssortItem(THREE_FIVE_SEVEN_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                       .addMoneyCost(Money.ROUBLES, (generatedPrices[".357_case_price"] * config.price_multiplier))
                                       .addLoyaltyLevel(1)
                                       .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['.45_case_enable']){
                assortCreator.createSingleAssortItem(FOUR_FIVE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices[".45_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['4.6x30_case_enable']){
                assortCreator.createSingleAssortItem(FOUR_SIX_BY_THREE_ZERO_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices["4.6x30_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['5.7x28_case_enable']){
                assortCreator.createSingleAssortItem(FIVE_SEVEN_BY_TWO_EIGHT_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices["5.7x28_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['5.45x39_case_enable']){
                assortCreator.createSingleAssortItem(FIVE_FOUR_FIVE_BY_THREE_NINE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices["5.45x39_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['5.56x45_case_enable']){
                assortCreator.createSingleAssortItem(FIVE_FIVE_SIX_BY_FOUR_FIVE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices["5.56x45_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['.300_case_enable']){
                assortCreator.createSingleAssortItem(THREE_ZERO_ZERO_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices[".300_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
            if (config.price_stock['7.62x39_case_enable']){
                assortCreator.createSingleAssortItem(SEVEN_SIX_TWO_BY_THREE_NINE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices["7.62x39_case_price"] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['7.62x51_case_enable']){
                 assortCreator.createSingleAssortItem(SEVEN_SIX_TWO_BY_FIVE_ONE_GAMBLE_ID)
                                        .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["7.62x51_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['7.62x54_case_enable']){
                 assortCreator.createSingleAssortItem(SEVEN_SIX_TWO_BY_FIVE_FOUR_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["7.62x54_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['.338_case_enable']){
                 assortCreator.createSingleAssortItem(THREE_THREE_EIGHT_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices[".338_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['9x39_case_enable']){
                 assortCreator.createSingleAssortItem(NINE_BY_THREE_NINE_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["9x39_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['.366_case_enable']){
                 assortCreator.createSingleAssortItem(THREE_SIX_SIX_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices[".366_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['12.7x55_case_enable']){
                 assortCreator.createSingleAssortItem(ONE_TWO_SEVEN_BY_FIVE_FIVE_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["12.7x55_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['12/70_case_enable']){
                 assortCreator.createSingleAssortItem(ONE_TWO_BY_SEVEN_ZERO_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["12/70_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['20/70_case_enable']){
                 assortCreator.createSingleAssortItem(TWO_ZERO_BY_SEVEN_ZERO_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["20/70_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
             if (config.price_stock['23x75_case_enable']){
                 assortCreator.createSingleAssortItem(TWO_THREE_BY_SEVEN_FIVE_GAMBLE_ID)
                                         .addUnlimitedStackCount()
                                         .addMoneyCost(Money.ROUBLES, (generatedPrices["23x75_case_price"] * config.price_multiplier))
                                         .addLoyaltyLevel(1)
                                         .export(tables.traders[baseJson._id]);
           }
        }
        
        
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