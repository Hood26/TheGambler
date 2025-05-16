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

import * as fs from 'fs';
import { jsonc } from "jsonc";
import path from "path";
import { Price } from "./Price";
import type { itemProps } from "./MysteryContainerInfo";
import { MysteryContainerInfo } from "./MysteryContainerInfo";


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
                    /*
                    "66b15c72b10189169400fb52": "gambler_intro",
                    "66b59e1cfcf263f4d70af422": "gambler_ammo_part_1",
                    "66b59e1cfcf263f4d70af432": "gambler_ammo_part_2",
                    "66b59e1cfcf263f4d70af433": "gambler_ammo_part_3",
                    "66b59e1cfcf263f4d70af423": "gambler_ammo_part_4",
                    "66b59e1cfcf263f4d70af430": "gambler_ammo_part_5",
                    "66b59e1cfcf263f4d70af425": "gambler_ammo_part_6",
                    "66b59e1cfcf263f4d70af428": "gambler_ammo_part_7",
                    "66b59e1cfcf263f4d70af427": "gambler_ammo_part_8",
                    "66b59e1cfcf263f4d70af42a": "gambler_ammo_part_9",
                    "66b59e1cfcf263f4d70af429": "gambler_ammo_part_10",
                    "66b59e1cfcf263f4d70af434": "gambler_ammo_part_11",
                    "66b59e1cfcf263f4d70af42b": "gambler_ammo_part_12",
                    "66b59e1cfcf263f4d70af42f": "gambler_ammo_part_13",
                    "66b59e1cfcf263f4d70af431": "gambler_ammo_part_14",
                    "66b59e1cfcf263f4d70af42d": "gambler_ammo_part_15",
                    "66b59e1cfcf263f4d70af42c": "gambler_ammo_part_16",
                    "66b59e1cfcf263f4d70af42e": "gambler_ammo_part_17"
                    */
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
     * Add container to trader PostDBLoad.
     * @param tables SPT db
     * @param traderId Traders id (basejson/_id value)
     */
     public addSingleItemsToTrader(tables: IDatabaseTables, traderId: string, assortCreator: FluentAssortCreator, container: DependencyContainer, logger: ILogger) : void {
        const config = jsonc.parse(fs.readFileSync(path.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info: Record<string, itemProps> = MysteryContainerInfo(config);  

        for (const [key, value] of Object.entries(info)) {

            // store containers to trader assort
            if (config.container_config[key + '_enable']){

                // isAmmo and ammo is disabled: SKIP all ammo
                if ((parseInt(key.substring(0,1)) || key.substring(0,1) == '.') && !config.container_config['all_ammo_enable']) {
                    continue;
                }

                const newTrade = assortCreator.createSingleAssortItem(value._id, value.quest_id)

                    if (value.barter) {

                        for (const [barter, amount] of Object.entries(value.barter)) {
                            newTrade.addBarterCost(barter, amount);
                        }

                    } else {
                        newTrade.addMoneyCost(Money.ROUBLES, config.container_config[key + '_price'] * config.price_multiplier)
                    }

                    newTrade.addStackCount(config.container_config[key + '_unlimited_stock'] ? 999999 : config.container_config[key + '_stock'], config.container_config[key + '_unlimited_stock'])
                    newTrade.addLoyaltyLevel(1)
                    newTrade.export(tables.traders[baseJson._id]);
            }
        }
     }

     // find container info based on its quest_id
     private findItem(quest_id: string, info: Record<string, itemProps>): string {

        for (const [key, value] of Object.entries(info)){

            if (quest_id == value.quest_id) {
                return key; 
            }
        }
        return undefined;
     }

     /**
     * Updated container prices PostSPTLoad
     * @param tables SPT db
     * @param traderId Traders id (basejson/_id value)
     */
     public updateContainerPrices(tables: IDatabaseTables, traderId: string, assortCreator: FluentAssortCreator, container: DependencyContainer, logger: ILogger) : void {
        const config = jsonc.parse(fs.readFileSync(path.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info: Record<string, itemProps> = MysteryContainerInfo(config);  
        const price = new Price(container, config, logger);
        const fleaPrices = tables.templates.prices;
        const generatedPrices = price.generateContainerPrices();
        const gamblerAssort = tables.traders[traderId].assort;

        //update trader assort prices 
        for (const [key, _] of Object.entries(gamblerAssort.barter_scheme)) {
            const currentItem = this.findItem(key, info);
            
            if (generatedPrices[currentItem + '_price']) {
                gamblerAssort.barter_scheme[key][0][0].count = generatedPrices[currentItem + '_price'];
            }
        }

        // updated container flea prices
        for (const [key, value] of Object.entries(info)) {

            if (generatedPrices[key + '_price'] > 250000) {
                if (generatedPrices[key + '_price']){
                    fleaPrices[value._id] = generatedPrices[key + '_price'] * 1.20;
                }
            } else {
                if (generatedPrices[key + '_price']){
                    fleaPrices[value._id] = generatedPrices[key + '_price'] * 1.35;
                }
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