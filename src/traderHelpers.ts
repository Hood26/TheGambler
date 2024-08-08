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
                success: {
                    "66b15c72b10189169400fb52": "gambler_intro",
                },
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
        const MEDICAL_GAMBLE_ID = "zz_medical_gamble";
        const BITCOIN_GAMBLE_ID = "bg_bitcoin_gamble";
        const GPCOIN_GAMBLE_ID = "bh_gpcoin_gamble";
        const BITCOIN_ID = '59faff1d86f7746c51718c9c';
        const GPCOIN_ID = '5d235b4d86f7742e017bc88a';
        const MEDICAL_TOOLS_MEDS_ID = '619cc01e0a7c3a1a2731940c';
        const PILE_OF_MEDS_ID = '5d1b3a5d86f774252167ba22';
        const BLOODSET_ID = '5b4335ba86f7744d2837a264';

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
        tables.templates.items['59e0bed186f774156f04ce84']._props.Slots[0]._props.filters[0].Filter.push(GOLD_AKM_FOREGRIP_ID);

        const names: Record<string, string> = {
            wallet: "bb_wallet_gamble",
            key: "bc_key_gamble",
            keycard: "bd_keycard_gamble",
            sealed: "az_sealed_weapon_gamble",
            food: "ba_food_gamble",
            melee: "be_melee_weapon_gamble",
            stim: "bf_stim_gamble",
            fiftyfifty: "z_50/50_gamble",
            weapon: "w_weapon_gamble",
            backpack: "wr_backpack_gamble",
            loadout: "ws_loadout_gamble",
            rig: "wr_rig_gamble",
            helmet: "x_helmet_gamble",
            headset: "xy_headset_gamble",
            armor: "w_armor_gamble",
            premium_armor: "w_premium_armor_gamble",
            premium_weapon: "wa_premium_weapon_gamble",
            '9x18': "ab_9x18_gamble",
            '9x19': "ac_9x19_gamble",
            '9x21': "ad_9x21_gamble",
            '.357': "ae_.357_gamble",
            '.45': "af_.45_gamble",
            '4.6x30': "ag_4.6x30_gamble",
            '5.7x28': "ah_5.7x28_gamble",
            '5.45x39': "ai_5.45x39_gamble",
            '5.56x45': "aj_5.56x45_gamble",
            '.300': "ak_.300_gamble",
            '7.62x39': "al_7.62x39_gamble",
            '7.62x51': "am_7.62x51_gamble",
            '7.62x54': "an_7.62x54_gamble",
            '.338': "ao_.338_gamble",
            '9x39': "ap_9x39_gamble",
            '.366': "aq_.366_gamble",
            '12.7x55': "ar_12.7x55_gamble",
            '12/70': "as_12/70_gamble",
            '20/70': "at_20/70_gamble",
            '23x75': "au_23x75_gamble"
        };
        
        const price = new Price(container, config, logger);
        const generatedPrices = price.generateContainerPrices();

        //const loadoutPrice = price.loadoutSimulation();
        //console.log('One Loadout Cost = ' + loadoutPrice);
        
        console.log(generatedPrices);

        const white_chip = 'a_white_chip';
        const pake_white_chips = 'aaa_white_chips_gamble';
        const red_chip = 'b_red_chip';
        const green_chip = 'c_green_chip';
        const blue_chip = 'd_blue_chip';
        const black_chip = 'e_black_chip';

        /*
        assortCreator.createSingleAssortItem(white_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 5000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 5000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(red_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 5000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        */

        
                                   /*
        assortCreator.createSingleAssortItem(white_chip, '66b15c72b10189169400fb52')
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 20000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(pake_white_chips)
                                .addStackCount(999)
                                .addMoneyCost(red_chip, 1)
                                .addStackCount(4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(pake_white_chips)
                                .addStackCount(999)
                                .addMoneyCost(red_chip, 1)
                                .addStackCount(4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(pake_white_chips)
                                .addStackCount(999)
                                .addMoneyCost(red_chip, 1)
                                .addStackCount(4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(pake_white_chips)
                                .addStackCount(999)
                                .addMoneyCost(red_chip, 1)
                                .addStackCount(4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(red_chip)
                                .addStackCount(999)
                                .addMoneyCost(white_chip, 4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(red_chip, 4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(blue_chip)
                                .addStackCount(999)
                                .addMoneyCost(green_chip, 4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(black_chip)
                                .addStackCount(999)
                                .addMoneyCost(blue_chip, 4)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
                                */
                                /*
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 50000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 50000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 50000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 50000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
        assortCreator.createSingleAssortItem(green_chip)
                                .addStackCount(999)
                                .addMoneyCost(Money.ROUBLES, 50000)
                                .addLoyaltyLevel(1)
                                .export(tables.traders[baseJson._id]);
                                */

         //finish this                       
        
        for (let i in Object.keys(names)) {
            const name = Object.keys(names)[i];
            if (config.container_config[name + '_enable']){

                if ((parseInt(name.substring(0,1)) || name.substring(0,1) == '.') && !config.container_config['all_ammo_enable']) { // isAmmo and ammo is disabled: SKIP all ammo
                    continue;
                }

                assortCreator.createSingleAssortItem(names[name])
                                        .addStackCount(config.container_config[name + '_unlimited_stock'] ? 999999 : config.container_config[name + '_stock'], config.container_config[name + '_unlimited_stock'])
                                        .addMoneyCost(Money.ROUBLES, (generatedPrices[name + '_price'] && !config.container_config[name + '_manual_pricing']) ? (generatedPrices[name + '_price'] * config.price_multiplier) : (config.container_config[name + '_price'] * config.price_multiplier))
                                        .addLoyaltyLevel(1)
                                        .export(tables.traders[baseJson._id]);
            }
        }
       
        if (config.container_config['medical_enable']){
            assortCreator.createSingleAssortItem(MEDICAL_GAMBLE_ID)
                                    .addStackCount(config.container_config.medical_unlimited_stock ? 999999 : config.container_config.medical_stock, config.container_config.medical_unlimited_stock)
                                    .addBarterCost(PILE_OF_MEDS_ID, 3)
                                    .addBarterCost(MEDICAL_TOOLS_MEDS_ID, 2)
                                    .addBarterCost(BLOODSET_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }                       
        if (config.container_config['bitcoin_enable']){
            assortCreator.createSingleAssortItem(BITCOIN_GAMBLE_ID)
                                    .addStackCount(config.container_config.bitcoin_unlimited_stock ? 999999 : config.container_config.bitcoin_stock, config.container_config.bitcoin_unlimited_stock)
                                    .addBarterCost(BITCOIN_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
        }
        if (config.container_config['gpcoin_enable']){
            assortCreator.createSingleAssortItem(GPCOIN_GAMBLE_ID)
                                    .addStackCount(config.container_config.gpcoin_unlimited_stock ? 999999 : config.container_config.gpcoin_stock, config.container_config.gpcoin_unlimited_stock)
                                    .addBarterCost(GPCOIN_ID, 1)
                                    .addLoyaltyLevel(1)
                                    .export(tables.traders[baseJson._id]);
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