// SPT types
import { DependencyContainer } from "tsyringe";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
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
import { RandomUtil } from "@spt/utils/RandomUtil";
import { InventoryController } from "@spt/controllers/InventoryController";
import { IPmcData } from "@spt/models/eft/common/IPmcData";
import { HashUtil } from "@spt/utils/HashUtil";
import { IAddItemDirectRequest } from "@spt/models/eft/inventory/IAddItemsDirectRequest";
import { Item } from "../common/tables/IItem";
import { Money } from "@spt/models/enums/Money";


// New trader classes and config
import * as baseJson from "../db/base.json";
import { TraderHelper } from "./traderHelpers";
import { ItemCreateHelper } from "./itemCreateHelper";
import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { VFS } from "@spt/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";
import { Gamble } from "./Gamble";

class SampleTrader implements IPreSptLoadMod, IPostDBLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHelper: TraderHelper
    private fluentAssortCreator: FluentAssortCreator
    private hashUtil: HashUtil;
    public config: any;

    constructor() {
        this.mod = "TheGambler";
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preSptLoad(container: DependencyContainer): void {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        // Get SPT code/data we need later
        const preSptModLoader: PreSptModLoader = container.resolve<PreSptModLoader>("PreSptModLoader");
        const imageRouter: ImageRouter = container.resolve<ImageRouter>("ImageRouter");
        const hashUtil: HashUtil = container.resolve<HashUtil>("HashUtil");
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const traderConfig: ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig<IRagfairConfig>(ConfigTypes.RAGFAIR);
        const vfs = container.resolve<VFS>("VFS")

        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))
        this.hashUtil = hashUtil;
        this.traderHelper = new TraderHelper();
        this.fluentAssortCreator = new FluentAssortCreator(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, preSptModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, this.config.trader_update_min_time, this.config.trader_update_max_time);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;

        // openRandomLootContainer override in InventoryController. Adds gambler mystery boxes.
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
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    public postDBLoad(container: DependencyContainer): void {
        this.logger.debug(`[${this.mod}] postDb Loading... `);

        // Resolve SPT classes we'll use
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        //const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil: JsonUtil = container.resolve<JsonUtil>("JsonUtil");
        // Creates and stores new gambling items in database
        const itemCreate = new ItemCreateHelper();

        itemCreate.createItems(container)

        // Get a reference to the database tables
        const tables = databaseServer.getTables();

        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil);

        // Add gambling containers to trader
        this.traderHelper.addSingleItemsToTrader(tables, baseJson._id, this.fluentAssortCreator, container, this.logger);

        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Gambler", baseJson.nickname, baseJson.location, "Welcome Traveler! May I indulge you in purchasing some mystery boxes?");

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
        // Currently this adds poker chips to many static loot containers on all maps
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
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }

    public newOpenRandomLoot(container: DependencyContainer, pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID: string): IItemEventRouterResponse {
        // Needed reference methods
        const lootGenerator = container.resolve<LootGenerator>("LootGenerator");
        const itemHelper = container.resolve<ItemHelper>("ItemHelper");
        const inventoryHelper = container.resolve<InventoryHelper>("InventoryHelper");
        const eventOutputHolder = container.resolve<EventOutputHolder>("EventOutputHolder");
        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item);

        if (itemHelper.getItem(openedItem._tpl) == undefined){
            this.logger.error("[TheGambler] Cannot find unboxed mystery container in Inventory... Best option is to restart game.. I am not fully sure why this happens...")
            const output = eventOutputHolder.getOutput(sessionID);
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
        const isRefSealedWeaponBox = containerDetails[1]._name.includes("Arena_weaponcrate_blue_open"); // Ref Unlocked Weapons Container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_"); // Gambler items are tagged with "gambling_container" identifier

        if(isSealedWeaponBox || isRefSealedWeaponBox) { // currently iseRefSealedWeaponBox uses the same exact loot generation as isSealedWeaponBox in spt 3.9.1
            // Sealed Weapon container
            // Get summary of loot from config
            const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
            // This id is bugged and we have to delete it or bad shit will happen. Looks like SPT base bug?
            delete(containerSettings.weaponRewardWeight['5e848cc2988a8701445df1e8']) 
            newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));
            newItemsRequest.foundInRaid = containerSettings.foundInRaid;

        } else if (isGamblingContainer){
            // All TheGambler Custom Gambling Happens Here
            const currentContainer = containerDetails[1];
            gamble = new Gamble(container, this.config, this.logger, currentContainer._name);
            gamble.newGamble();
            
            if(gamble.newItemsRequest.itemsWithModsToAdd.length != 0) {
                newItemsRequest.itemsWithModsToAdd = [...gamble.newItemsRequest.itemsWithModsToAdd]
                newItemsRequest.foundInRaid  = gamble.newItemsRequest.foundInRaid;
            }

        } else {
            // Other containers
            //this.logger.info(`GET RANDOM LOOT CONTAINER LOOT`);
            // Get summary of loot from config
            const rewardContainerDetails = inventoryHelper.getRandomLootContainerRewardDetails(openedItem._tpl);
            const getLoot = lootGenerator.getRandomLootContainerLoot(rewardContainerDetails);
            newItemsRequest.itemsWithModsToAdd.push(...getLoot);
            newItemsRequest.foundInRaid = rewardContainerDetails.foundInRaid; 
        }

        const output = eventOutputHolder.getOutput(sessionID);
        let multipleItems: any;

        if (newItemsRequest.itemsWithModsToAdd.length != 0) {

            if (inventoryHelper.canPlaceItemsInInventory(sessionID, newItemsRequest.itemsWithModsToAdd)){
                inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
                inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
            } else {
            // notifierHelper.createNewMessageNotification(message); // Notifier Not Working
            this.logger.error(`[${this.mod}] Cannot Open Container, Inventory Is Full!`);
            }
        } else {
            // Container returned nothing...
            inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
        }
            
        return output;
    }
}

module.exports = { mod: new SampleTrader() }
