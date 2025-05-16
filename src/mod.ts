// SPT types
import { DependencyContainer } from "tsyringe";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt/models/spt/config/IRagfairConfig";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { IOpenRandomLootContainerRequestData } from "@spt/models/eft/inventory/IOpenRandomLootContainerRequestData";
import { Traders } from "@spt/models/enums/Traders";
import { IItemEventRouterResponse } from "@spt/models/eft/itemEvent/IItemEventRouterResponse";
import { LootGenerator } from "@spt/generators/LootGenerator";
import { InventoryHelper } from "@spt/helpers/InventoryHelper";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { EventOutputHolder } from "@spt/routers/EventOutputHolder";
import { InventoryController } from "@spt/controllers/InventoryController";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { HashUtil } from "@spt/utils/HashUtil";
import { IAddItemDirectRequest } from "@spt/models/eft/inventory/IAddItemsDirectRequest";
import * as fs from 'fs';
import * as baseJson from "../db/base.json";
import { TraderHelper } from "./traderHelpers";
import { ItemCreateHelper } from "./itemCreateHelper";
import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { jsonc } from "jsonc";
import path from "path";
import { Gamble } from "./Gamble";

class SampleTrader implements IPreSptLoadMod, IPostDBLoadMod, IPostSptLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHelper: TraderHelper
    private fluentAssortCreator: FluentAssortCreator
    private hashUtil: HashUtil;
    public config: any;

    constructor() {
        this.mod = "GamblerTrader";
    }

    /**
     * I'm just here so I won't get fined.
     * @param container Dependency container
     */
    public preSptLoad(container: DependencyContainer): void {
        this.logger = container.resolve<ILogger>("WinstonLogger");

        container.afterResolution("InventoryController", (_t, result: InventoryController) => 
            {
                result.openRandomLootContainer = (pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID : string) =>
                {
                    return this.newOpenRandomLoot(container, pmcData, body, sessionID);
                }
            });

        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    
    /**
     * I'm just 'bout that gambler action boss.
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void {
        
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        const preSptModLoader: PreSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig<IRagfairConfig>(ConfigTypes.RAGFAIR);
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");
        const itemCreate = new ItemCreateHelper();
        this.config = jsonc.parse(fs.readFileSync(path.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        this.hashUtil = hashUtil;
        this.traderHelper = new TraderHelper();
        this.fluentAssortCreator = new FluentAssortCreator(this.hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, 'GamblerTrader', preSptModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, this.config.trader_update_min_time, this.config.trader_update_max_time);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;
        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;
        // Creates and stores new gambling items in database
        itemCreate.createItems(container)

        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil);

        // Add gambling containers to trader
        this.traderHelper.addSingleItemsToTrader(tables, baseJson._id, this.fluentAssortCreator, container, this.logger);

        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Gambler", baseJson.nickname, baseJson.location, "Welcome Traveler! May I indulge you in purchasing some mystery boxes?");

        /*
        const maps = [
            "bigmap",     // customs
            "factory4_day",
            "factory4_night",
            "woods",
            "rezervbase",
            "shoreline",
            "interchange",
            "tarkovstreets",
            "lighthouse",
            "laboratory",
            "sandbox",    // groundzero
            "sandbox_high"// groundzero20
        ];
        
        //console.log(tables.locations["bigmap"].staticLoot["578f87a3245977356274f2cb"].itemDistribution) // Drawer
        //
        // adds poker chips to static loot containers on all maps
        for (const item of itemCreate.loot){
            for(const map of maps){
                const mapStaticLoot = tables.locations[map].staticLoot;
                const staticLootProbabilities = item.addToStaticLoot;
                for(const [lootContainer, probability] of Object.entries(staticLootProbabilities)){

                    try{
                        mapStaticLoot[lootContainer].itemDistribution.push({
                            "tpl": item.newId,
                            "relativeProbability": probability
                        });
                    } catch (e){
                        this.logger.debug("Could not add " + item.newId + " to container " + lootContainer + " on map " + map)
                    }

                }
            }
        }
        */
        
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }

    // Update container prices after all mods have loaded
    public postSptLoad(container: DependencyContainer): void {\
        this.logger.success("[Gambler Trader] Generating Mystery Container Prices...");
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();
        this.traderHelper.updateContainerPrices(tables, baseJson._id, this.fluentAssortCreator, container, this.logger);
        this.logger.success("[Gambler Trader] Finished Loading! Ready To Launch.");

    }

    public newOpenRandomLoot(container: DependencyContainer, pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID: string): IItemEventRouterResponse {
        // Needed reference methods
        const lootGenerator = container.resolve<LootGenerator>("LootGenerator");
        const itemHelper = container.resolve<ItemHelper>("ItemHelper");
        const inventoryHelper = container.resolve<InventoryHelper>("InventoryHelper");
        const eventOutputHolder = container.resolve<EventOutputHolder>("EventOutputHolder");
        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item);
        const output = eventOutputHolder.getOutput(sessionID);

        if (itemHelper.getItem(openedItem._tpl) == undefined){
            this.logger.error("[GamblerTrader] Cannot find unboxed mystery container in Inventory... Best option is to restart game.. I am not fully sure why this happens...")
            return output;
        }

        const containerDetails = itemHelper.getItem(openedItem._tpl);
        let gamble: Gamble;

        const newItemsRequest: IAddItemDirectRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable : true
        };

        const isSealedWeaponBox = containerDetails[1]._name.includes("event_container_airdrop"); // default airdrop container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_"); // Gambler items are tagged with `gambling_${container}` identifier
        const unlockedWeaponCrates = [
            "665829424de4820934746ce6",
            "665732e7ac60f009f270d1ef",
            "665888282c4a1b73af576b77",
        ];

        if (isGamblingContainer) {
            // All Gambler containers
            const currentContainer = containerDetails[1];
            gamble = new Gamble(container, this.config, this.logger, currentContainer._name);
            gamble.newGamble();
            
            if(gamble.newItemsRequest.itemsWithModsToAdd.length != 0) {
                newItemsRequest.itemsWithModsToAdd = [...gamble.newItemsRequest.itemsWithModsToAdd]
                newItemsRequest.foundInRaid  = gamble.newItemsRequest.foundInRaid;
            }
        } else {
            // All other sealed containers
            if (isSealedWeaponBox || unlockedWeaponCrates.includes(containerDetails[1]._id)) {
                const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
                newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));

                if (containerSettings.foundInRaid) {
                    newItemsRequest.foundInRaid = containerSettings.foundInRaid;
                }
            } else {
                const rewardContainerDetails = inventoryHelper.getRandomLootContainerRewardDetails(openedItem._tpl);
                if (!rewardContainerDetails || !rewardContainerDetails.rewardCount) {
                    this.logger.error(`Unable to add loot to container: ${openedItem._tpl}, no rewards found`);
                } else {
                    newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getRandomLootContainerLoot(rewardContainerDetails));

                    if (rewardContainerDetails.foundInRaid) {
                        newItemsRequest.foundInRaid = rewardContainerDetails.foundInRaid;
                    }
                }
            }
        }
        
        let multipleItems: any;

        if (newItemsRequest.itemsWithModsToAdd.length != 0) {

            if (inventoryHelper.canPlaceItemsInInventory(sessionID, newItemsRequest.itemsWithModsToAdd)){
                inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
                inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
            } else {
            // notifierHelper.createNewMessageNotification(message); // Notifier Not Working
            this.logger.error(`[${this.mod}] Cannot Open Container! Inventory Is Full!`);
            }
        } else {
            // Container returned nothing...
            inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
        }
            
        return output;
    }
}

module.exports = { mod: new SampleTrader() }
