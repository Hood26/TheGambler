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
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
// New trader classes and config
const baseJson = __importStar(require("../db/base.json"));
const traderHelpers_1 = require("./traderHelpers");
const itemCreateHelper_1 = require("./itemCreateHelper");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
const Gamble_1 = require("./Gamble");
class SampleTrader {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    hashUtil;
    config;
    constructor() {
        this.mod = "TheGambler"; // Logging uses
    }
    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param container Dependency container
     */
    preAkiLoad(container) {
        // Get a logger
        this.logger = container.resolve("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);
        // Get SPT code/data we need later
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        const imageRouter = container.resolve("ImageRouter");
        const hashUtil = container.resolve("HashUtil");
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const vfs = container.resolve("VFS");
        // Create helper class and use it to register our traders image/icon + set its stock refresh time
        this.config = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../config/config.jsonc")));
        this.hashUtil = hashUtil;
        this.traderHelper = new traderHelpers_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, this.mod, preAkiModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, this.config.trader_update_min_time, this.config.trader_update_max_time);
        // Add trader to trader enum
        Traders_1.Traders[baseJson._id] = baseJson._id;
        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;
        // openRandomLootContainer override in InventoryController. Lets us use mod items.
        container.afterResolution("InventoryController", (_t, result) => {
            result.openRandomLootContainer = (pmcData, body, sessionID) => {
                return this.newOpenRandomLoot(container, pmcData, body, sessionID);
            };
        });
        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     * @param container Dependency container
     */
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        // Resolve SPT classes we'll use
        const databaseServer = container.resolve("DatabaseServer");
        //const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const jsonUtil = container.resolve("JsonUtil");
        // Creates and stores new gambling items in database
        const itemCreate = new itemCreateHelper_1.ItemCreateHelper();
        itemCreate.createItems(container);
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
    newOpenRandomLoot(container, pmcData, body, sessionID) {
        // Needed reference methods
        const lootGenerator = container.resolve("LootGenerator");
        const itemHelper = container.resolve("ItemHelper");
        const inventoryHelper = container.resolve("InventoryHelper");
        const notifierHelper = container.resolve("NotifierHelper");
        const notificationSendHelper = container.resolve("NotificationSendHelper");
        const eventOutputHolder = container.resolve("EventOutputHolder");
        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item); // Get opened item from inventory
        const containerDetails = itemHelper.getItem(openedItem._tpl);
        let foundInRaid = false;
        let isCustomGamble = true;
        let gamble;
        const newItemsRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
        const isSealedWeaponBox = containerDetails[1]._name.includes("event_container_airdrop"); // Default tarkov tagged container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_"); // Gambler items are tagged with "gambling_container" identifier
        if (isSealedWeaponBox) {
            // Sealed Weapon container
            // Get summary of loot from config
            const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
            // This id is bugged and we have to delete it or bad shit will happen. Looks like SPT base bug?
            delete (containerSettings.weaponRewardWeight['5e848cc2988a8701445df1e8']);
            newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));
            //this.logger.info("SEALED CONTAINER ITEMS...");
            //this.logger.info(newItemsRequest.itemsWithModsToAdd);
            foundInRaid = containerSettings.foundInRaid;
            newItemsRequest.foundInRaid = foundInRaid;
            isCustomGamble = false;
        }
        else if (isGamblingContainer) {
            // All Custom Gambling Happens Here
            const currentContainer = containerDetails[1];
            gamble = new Gamble_1.Gamble(container, this.config, this.logger, currentContainer._name);
            gamble.newGamble();
        }
        else {
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
        let multipleItems;
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
        if (isGamblingContainer && gamble.newItemRequest.itemWithModsToAdd.length != 0) {
            // Have to store new Item in 2-D array or canPlaceItemsInventory() will bitch
            multipleItems = [[...gamble.newItemRequest.itemWithModsToAdd]];
            if (isCustomGamble && inventoryHelper.canPlaceItemsInInventory(sessionID, multipleItems)) { // Custom Gambles store one item (1-D array)
                inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
                inventoryHelper.addItemToStash(sessionID, gamble.newItemRequest, pmcData, output);
            }
            else {
                // Not Working
                //let notification: INotification = notifierHelper.createNewMessageNotification(message);
                //this.logger.info(notification);
                //notificationSendHelper.sendMessage(sessionID, notification);
                this.logger.error(`[${this.mod}] Cannot Open Container, Inventory Is Full!`);
            }
        }
        else if (newItemsRequest.itemsWithModsToAdd.length != 0) {
            if (!isCustomGamble && inventoryHelper.canPlaceItemsInInventory(sessionID, newItemsRequest.itemsWithModsToAdd)) { //  Tarkov Sealed containers store multiple items (2-D array)
                inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
                inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
            }
            else {
                // Not Working
                //notifierHelper.createNewMessageNotification(message);
                this.logger.error(`[${this.mod}] Cannot Open Container, Inventory Is Full!`);
            }
        }
        else {
            // Container returned nothing...
            inventoryHelper.removeItem(pmcData, body.item, sessionID, output); // Delete the opened random loot container
        }
        return output;
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
module.exports = { mod: new SampleTrader() };
//# sourceMappingURL=mod.js.map