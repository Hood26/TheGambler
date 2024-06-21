import { DependencyContainer } from "tsyringe";
// SPT types
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { IOpenRandomLootContainerRequestData } from "@spt-aki/models/eft/inventory/IOpenRandomLootContainerRequestData";
import { Traders } from "@spt-aki/models/enums/Traders";
import { IItemEventRouterResponse } from "@spt-aki/models/eft/itemEvent/IItemEventRouterResponse";
import { LootGenerator } from "@spt-aki/generators/LootGenerator";
import { InventoryHelper } from "@spt-aki/helpers/InventoryHelper";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { NotifierHelper } from "@spt-aki/helpers/NotifierHelper";
import { NotificationSendHelper } from "@spt-aki/helpers/NotificationSendHelper";
import { EventOutputHolder } from "@spt-aki/routers/EventOutputHolder";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { InventoryController } from "@spt-aki/controllers/InventoryController";
import { IPmcData } from "@spt-aki/models/eft/common/IPmcData";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { IAddItemDirectRequest } from "@spt/models/eft/inventory/IAddItemsDirectRequest";
import { Item } from "../common/tables/IItem";
import { Money } from "@spt-aki/models/enums/Money";
import { Traders } from "@spt-aki/models/enums/Traders";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { Message } from "@spt-aki/models/eft/profile/IAkiProfile";
import { MessageType } from "@spt-aki/models/enums/MessageType";
import { INotification } from "@spt-aki/models/eft/notifier/INotifier";


// New trader classes and config
import * as baseJson from "../db/base.json";
import { TraderHelper } from "./traderHelpers";
import { ItemCreator } from "./itemCreator";
import { Keys } from "./keys";
import { ItemCreateHelper } from "./itemCreateHelper";
import { FluentAssortConstructor as FluentAssortCreator } from "./fluentTraderAssortCreator";
import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";
import { Stims } from "./Stims";
import { Gamble } from "./Gamble";

class SampleTrader implements IPreAkiLoadMod, IPostDBLoadMod
{
    private mod: string
    private logger: ILogger
    private traderHelper: TraderHelper
    private fluentAssortCreator: FluentAssortCreator
    private hashUtil: HashUtil;
    public config: any;

    constructor() {
        this.mod = "TheGambler"; // Logging uses
    }

    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    public preAkiLoad(container: DependencyContainer): void {
        // Get a logger
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);

        // Get SPT code/data we need later
        const preAkiModLoader: PreAkiModLoader = container.resolve<PreAkiModLoader>("PreAkiModLoader");
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
        this.traderHelper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, this.config.trader_update_min_time, this.config.trader_update_max_time);

        // Add trader to trader enum
        Traders[baseJson._id] = baseJson._id;

        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;

        // openRandomLootContainer override in InventoryController. Lets us use mod items.
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
        this.traderHelper.addSingleItemsToTrader(tables, baseJson._id, this.fluentAssortCreator, container);

        // Add trader to locale file, ensures trader text shows properly on screen
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Gambler", baseJson.nickname, baseJson.location, "Welcome Traveler! May I indulge you in purchasing some mystery boxes?");

        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }

    // openRandomLootContainer override function. All the gambling happens here
    //
    public newOpenRandomLoot(container: DependencyContainer, pmcData: IPmcData, body: IOpenRandomLootContainerRequestData, sessionID: string): IItemEventRouterResponse {
        // Needed reference methods
        const lootGenerator = container.resolve<LootGenerator>("LootGenerator");
        const itemHelper = container.resolve<ItemHelper>("ItemHelper");
        const inventoryHelper = container.resolve<InventoryHelper>("InventoryHelper");
        const notifierHelper = container.resolve<NotifierHelper>("NotifierHelper");
        const notificationSendHelper = container.resolve<NotificationSendHelper>("NotificationSendHelper");
        const eventOutputHolder = container.resolve<EventOutputHolder>("EventOutputHolder");

        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item); // Get opened item from inventory
        const containerDetails = itemHelper.getItem(openedItem._tpl);
        let foundInRaid = false;
        let isCustomGamble = true;
        let gamble: Gamble;

        const newItemsRequest: IAddItemDirectRequest = { // base tarkov sealed cases
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable : true
        };

        const isSealedWeaponBox = containerDetails[1]._name.includes("event_container_airdrop"); // Default tarkov tagged container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_"); // Gambler items are tagged with "gambling_container" identifier

        if(isSealedWeaponBox) {
            // Sealed Weapon container
            // Get summary of loot from config
            const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
            // This id is bugged and we have to delete it or bad shit will happen. Looks like SPT base bug?
            delete(containerSettings.weaponRewardWeight['5e848cc2988a8701445df1e8']) 

            newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));
            //this.logger.info("SEALED CONTAINER ITEMS...");
            //this.logger.info(newItemsRequest.itemsWithModsToAdd);
            foundInRaid = containerSettings.foundInRaid;
            newItemsRequest.foundInRaid = foundInRaid;
            isCustomGamble = false;

        } else if (isGamblingContainer){
            // All Custom Gambling Happens Here
            const currentContainer = containerDetails[1];
            gamble = new Gamble(container, this.config, this.logger, currentContainer._name);
            gamble.newGamble();

        } else {
            // Other custom gambling containers added by different mods
            this.logger.info(`GET RANDOM LOOT CONTAINER LOOT`);
            // Other random containers
            // Get summary of loot from config
            const rewardContainerDetails = inventoryHelper.getRandomLootContainerRewardDetails(openedItem._tpl);
            this.logger.info("INFO");
            this.logger.info(rewardContainerDetails);
            this.logger.info("OpenedITEM");
            this.logger.info(openedItem);

            
            
            const getLoot = lootGenerator.getRandomLootContainerLoot(rewardContainerDetails);
            this.logger.info(getLoot);

            newItemsRequest.itemsWithModsToAdd.push(...getLoot);
            foundInRaid = rewardContainerDetails.foundInRaid;
            newItemsRequest.foundInRaid = foundInRaid;
            isCustomGamble = false;
            
        }


        /*
        notifierHelper.createNewMessageNotification({ // Not Working
                    "_id": "",
                    "uid": "",
                    "type": 13,
                    "dt": 69,
                    "text": "Inventory Full!",
                    "hasRewards": false, //idk
                    "rewardCollected": false,//idk
                    "items": {},
                    "maxStorageTime": null
                });
        */


        const output = eventOutputHolder.getOutput(sessionID);
        let multipleItems: any;
        /*
        let message: Message = { // Not Working
            _id: String,
            uid: String,
            type: MessageType,
            text: String,
            dt: Number
        };
        message._id = this.hashUtil.generate();
        message.uid = this.hashUtil.generate();
        message.type = 13;
        message.text = "Inventory Full"
        message.dt = 69
        */
        //this.logger.info(multipleItems);

        //this.logger.info(message.type);

        if (isGamblingContainer && gamble.newItemRequest.itemWithModsToAdd.length != 0){
            // Have to store new Item in 2-D array or canPlaceItemsInventory() will bitch
            multipleItems = [[...gamble.newItemRequest.itemWithModsToAdd]];

            if (isCustomGamble && inventoryHelper.canPlaceItemsInInventory(sessionID, multipleItems)) { // Custom Gambles store one item (1-D array)

                inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
                inventoryHelper.addItemToStash(sessionID, gamble.newItemRequest, pmcData, output);
    
            } else {

                // Not Working
                //let notification: INotification = notifierHelper.createNewMessageNotification(message);
                //this.logger.info(notification);
                //notificationSendHelper.sendMessage(sessionID, notification);
                


                this.logger.error(`[${this.mod}] Cannot Open Container, Inventory Is Full!`);



            }
        } else if (newItemsRequest.itemsWithModsToAdd.length != 0) {
            if (!isCustomGamble && inventoryHelper.canPlaceItemsInInventory(sessionID, newItemsRequest.itemsWithModsToAdd)){ //  Tarkov Sealed containers store multiple items (2-D array)

                inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
                inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
            } else {


                // Not Working
                //notifierHelper.createNewMessageNotification(message);



                this.logger.error(`[${this.mod}] Cannot Open Container, Inventory Is Full!`);
            }

        } else {
            // Container returned nothing...
            inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
        }
            


        return output;
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

module.exports = { mod: new SampleTrader() }
