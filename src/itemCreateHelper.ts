import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt-aki/services/mod/CustomItemService";
import { NewItemDetails } from "@spt-aki/models/spt/mod/NewItemDetails";
import { NewItemFromCloneDetails } from "@spt-aki/models/spt/mod/NewItemDetails";

import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

export class ItemCreateHelper {

    public config: any;

    // Create customs Items and store them in the database
    public createItems(container: DependencyContainer) {
        const vfs = container.resolve<VFS>("VFS")
        this.config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))

        // Resolve the CustomItemService container
        const customItem = container.resolve<CustomItemService>("CustomItemService");

        const sealedWeaponGamble: NewItemFromCloneDetails = {
            itemTplToClone: "648990314b4d2b31b63a46fc",
            //overrideProperties: {},
            parentId: "62f109593b54472778797866",
            newId: "az_sealed_weapon_gamble", 
            fleaPriceRoubles: 450000,
            handbookPriceRoubles: 450000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Sealed Weapon Case",
                    shortName: "Sealed Weapon Case",
                    description: "Looking for a weapon with some attachments that are left for you to attach yourself? Well do we have the perfect container for you. This is the same Sealed Weapon Case you would find in an airdrop and is not custom in any way."
                }
            }

        }

        const walletGamble: NewItemDetails = {
            newItem: {
                _id: "bb_wallet_gamble",
                _name: "gambling_wallet",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Wallet",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_barter_walletwz/item_barter_walletwz.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Wallet",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 130000,
            handbookPriceRoubles: 130000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Wallet",
                    shortName: "Mystery Wallet",
                    description: `Wager your Roubles to win more, or lose it all!\n==============================\n0 Roubles - 40.0%\n50k Roubles - ${this.config.odds['wallet_common']}%\n100k Roubles - ${this.config.odds['wallet_uncommon']}%\n300k Roubles - ${this.config.odds['wallet_kinda_rare']}%\n500k Roubles - ${this.config.odds['wallet_rare']}%\n1 Million Roubles - ${this.config.odds['wallet_extremely_rare']}%`
                }
            } 
        }
        const keyGamble: NewItemDetails = {
            newItem: {
                _id: "bc_key_gamble",
                _name: "gambling_key",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Key",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Key",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/keys/item_key_14.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Key",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 90000,
            handbookPriceRoubles: 90000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Key",
                    shortName: "Mystery Key",
                    description: `So you want a brand-new key to your favorite looting spot? Or maybe you're looking for that pesky quest key. We have it all! Try your luck!\n==============================\nCommon Key - ${this.config.odds['key_common']}%\nUncommon Key - ${this.config.odds['key_uncommon']}%\nRare Key - ${this.config.odds['key_rare']}%\nExtremely Rare Key - ${this.config.odds['key_extremely_rare']}%`
                }
            } 
        }
        const stimGamble: NewItemDetails = {
            newItem: {
                _id: "bf_stim_gamble",
                _name: "gambling_stim",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Stimulant",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Stimulant",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_container_injectorcase/item_container_injectorcase.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Stimulant",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 70000,
            handbookPriceRoubles: 70000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Stimulant",
                    shortName: "Mystery Stimulant",
                    description: `Looking for your next pick me up? We have all the drugs you could ask for!\n==============================\nCommon Stimulant - ${this.config.odds['stim_common']}%\nUncommon Stimulant - ${this.config.odds['stim_uncommon']}%\nRare Stimulant - ${this.config.odds['stim_rare']}%`
                }
            } 
        }
        const bitcoinGamble: NewItemDetails = {
            newItem: {
                _id: "bg_bitcoin_gamble",
                _name: "gambling_bitcoin",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Bitcoin",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Bitcoin",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_barter_valuable_bitcoin/item_barter_valuable_bitcoin.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Bitcoin",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 1100000,
            handbookPriceRoubles: 1100000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Bitcoin 50/50",
                    shortName: "Mystery Bitcoin 50/50",
                    description: `Feeling lucky? Looking to double up your spoils? Try your luck at double or nothing!\n==============================\nTwo Bitcoins - ${this.config.odds['bitcoin_success']}%\nNothing - ${this.config.odds['bitcoin_failure']}`
                }
            } 
        }
        const gpcoinGamble: NewItemDetails = {
            newItem: {
                _id: "bh_gpcoin_gamble",
                _name: "gambling_gpcoin",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Bitcoin",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Bitcoin",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_barter_valuable_gp/item_barter_valuable_gp.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Bitcoin",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 125000,
            handbookPriceRoubles: 125000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery GP Coin 50/50",
                    shortName: "Mystery GP Coin 50/50",
                    description: `Feeling lucky? Looking to double up your spoils? Try your luck at double or nothing!\n==============================\nTwo GP Coin - ${this.config.odds['gpcoin_success']}%\nNothing - ${this.config.odds['gpcoin_failure']}`
                }
            } 
        }
        
        const keycardGamble: NewItemDetails = {
            newItem: {
                _id: "bd_keycard_gamble",
                _name: "gambling_keycard",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Keycard",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Gambling Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_container_cardholder/item_container_cardholder.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Keycard",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 325000,
            handbookPriceRoubles: 325000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Keycard",
                    shortName: "Mystery Keycard",
                    description: `So you want to get into labs? Try your luck. Maybe you get, maybe you don't!\n==============================\nNothing - 25.0%\nAccess Keycard - ${this.config.odds['keycard_access']}%\n21WS Keycard - ${this.config.odds['keycard_21WS']}%\n11SR Keycard - ${this.config.odds['keycard_11SR']}%\nKeycard with a blue marking - ${this.config.odds['keycard_blue_marking']}%\nYellow Keycard - ${this.config.odds['keycard_yellow']}%\nBlack Keycard - ${this.config.odds['keycard_black']}%\nViolet Keycard - ${this.config.odds['keycard_violet']}%\nBlue Keycard - ${this.config.odds['keycard_blue']}%\nGreen Keycard - ${this.config.odds['keycard_green']}%\nRed Keycard - ${this.config.odds['keycard_red']}%`
                }
            }                
        }

        const fiftyFiftyGamble: NewItemDetails = {
            newItem: {
                _id: "z_50/50_gamble",
                _name: "gambling_50/50",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "50/50 Case",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "50/50 Case",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/containers/item_container_money/item_container_money.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "50/50 Case",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 5,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 2750000,
            handbookPriceRoubles: 2750000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "50/50 Case",
                    shortName: "50/50 Case",
                    description: "The true all in, ALL OR NOTHING!\n==============================\nDelicious Can of Beef Stew - 50.0%\n5 Million Roubles - 50.0%"
                }
            }                
        }

        const foodGamble: NewItemDetails = {
            newItem: {
                _id: "ba_food_gamble",
                _name: "gambling_food",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Food",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 2,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Food",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/weapons/usable_items/item_mre/item_mre_loot.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Food",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 35000,
            handbookPriceRoubles: 35000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Food",
                    shortName: "Mystery Food",
                    description: `Come along friend, you look a little peckish. Try your luck at scoring a delicious snack!\n==============================\nCommon Food - ${this.config.odds['food_common']}%\nUncommon Food - ${this.config.odds['food_uncommon']}%\nRare Food - ${this.config.odds['food_rare']}%\n`
                }
            } 
        }


        const meleeWeaponGamble: NewItemDetails = {
            newItem: {
                _id: "be_melee_weapon_gamble",
                _name: "gambling_melee",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Melee",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 3,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Gambling Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/weapons/taiga/weapon_usvr_taiga_container.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Melee",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 82500,
            handbookPriceRoubles: 82500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Melee",
                    shortName: "Mystery Melee",
                    description: `Looking for a shiny new melee weapon? Well do we have you covered!\n==============================\nCommon Melee - ${this.config.odds['melee_common']}%\nUncommon Melee - ${this.config.odds['melee_uncommon']}%\nRare Melee - ${this.config.odds['melee_rare']}%\nExtremely Rare Melee - ${this.config.odds['melee_extremely_rare']}%`
                }
            }                
        }


        const weaponGamble = {
            newItem: {
                _id: "w_weapon_gamble",
                _name: "gambling_weapon",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Weapon Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Weapon Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_weaprepair/item_spec_weaprepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Weapon Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 130000,
            handbookPriceRoubles: 130000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Weapon Mystery Box",
                    shortName: "Weapon Mystery Box",
                    description: `Weapon Mystery Box, contains over 230 different guns ranging from Meta Chad weapons, early wipe weapons, and cursed weapons \n==============================\nFully Modded Weapon - ${this.config.odds['gun_meta']}%\nMeme Weapon - ${this.config.odds['gun_meme']}%\nSemi-modded Weapon - ${this.config.odds['gun_decent']}%\nScav Weapon - ${this.config.odds['gun_scav']}%\nDefault Weapon - ${this.config.odds['gun_base']}%`
                }
            }
        };
        
        const premiumWeaponGamble = {
            newItem: {
                _id: "wa_premium_weapon_gamble",
                _name: "gambling_premium_weapon",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Premium Weapon Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_weaprepair/item_spec_weaprepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Premium Weapon Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 300000,
            handbookPriceRoubles: 300000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Premium Weapon Mystery Box",
                    shortName: "Premium Weapon Mystery Box",
                    description: `The Premium Weapon Mystery Box contains a guaranteed heavily modded weappon\n==============================\nRare Weapon - ${this.config.odds['premium_armor_rare']}%`
                }
            }
        };

        const helmetGamble = {
            newItem: {
                _id: "x_helmet_gamble",
                _name: "gambling_helmet",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Helmet Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 2,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Helmet Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/equipment/helmet_altyn/item_equipment_helmet_altyn.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Helmet Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 2,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 100000,
            handbookPriceRoubles: 100000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Helmet",
                    shortName: "Mystery Helmet",
                    description: `Are you tired of Chad PMCs one tapping your dome? Well I can offer protection for you! Purchase a Helmet Mystery Box today!\n==============================\nCommon Helmet - ${this.config.odds['helmet_common']}%\nUncommon Helmet - ${this.config.odds['helmet_uncommon']}%\nRare Helmet - ${this.config.odds['helmet_rare']}%\nExtremely Rare T-7 Thermal Helmet - ${this.config.odds['helmet_extremely_rare']}%`
                }
            }
        };


        const headsetGamble = {
            newItem: {
                _id: "xy_headset_gamble",
                _name: "gambling_headset",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Headset",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 2,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Headset",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/equipment/headset_comtaciv/item_equipment_headset_comtaciv.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Headset",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 2,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Headset",
                    shortName: "Mystery Headset",
                    description: `You can't expect to hear that sneaky USEC with those flimsy pair of headphones. Buy a Mystery Headset today!\n==============================\nRandom Headset - ${this.config.odds['headset_chance']}%`
                }
            }
        };


        const backpackGamble = {
            newItem: {
                _id: "wr_backpack_gamble",
                _name: "gambling_backpack",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Backpack Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 7,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Backpack Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/equipment/backpack_pilgrim/item_equipment_backpack_pilgrim_christmas.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Backpack Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 5,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Backpack Mystery Bag",
                    shortName: "Backpack Mystery Bag",
                    description: `Need a new bag for your next loot run? We got you covered!\n==============================\nCommon Backpack - ${this.config.odds['backpack_common']}%\nUncommon Backpack - ${this.config.odds['backpack_uncommon']}%\nRare Backpack - ${this.config.odds['backpack_rare']}%\nExtremely Rare Backpack - ${this.config.odds['backpack_extremely_rare']}%`
                }
            }
        };

        const rigGamble = {
            newItem: {
                _id: "wr_rig_gamble",
                _name: "gambling_rig",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Tactical Rig Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 2,
                                "cellsV": 2,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 2,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Tactical Rig Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/equipment/rig_boss_birdeye/item_equipment_rig_boss_birdeye.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Tactical Rig Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 2,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Tactical Rig Mystery Box",
                    shortName: "Tactical Rig Mystery Box",
                    description: `Looking for a brand new Tactical Rig? From Scav rigs to Boss Rigs We've got you covered!\n==============================\nScav Rig - ${this.config.odds['rig_scav']}%\nEarly Wipe Rig - ${this.config.odds['rig_early_wipe']}%\nLate Wipe Rig - ${this.config.odds['rig_late_wipe']}%\nBoss Rig - ${this.config.odds['rig_boss']}%`
                }
            }
        };
  

        const armorGamble = {
            newItem: {
                _id: "w_armor_gamble",
                _name: "gambling_armor",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Armor Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_armorrepair/item_spec_armorrepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Armor Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 100000,
            handbookPriceRoubles: 100000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Armor Mystery Box",
                    shortName: "Armor Mystery Box",
                    description: `Armor Mystery Box contains most armors that can appear in throughout Tarkov\n==============================\nCommon Armor - ${this.config.odds['armor_common']}%\nUncommon Armor - ${this.config.odds['armor_uncommon']}%\nRare Armor - ${this.config.odds['armor_rare']}%`
                }
            }
        };
        const premiumArmorGamble = {
            newItem: {
                _id: "w_premium_armor_gamble",
                _name: "gambling_premium_armor",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Premium Armor Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_armorrepair/item_spec_armorrepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Premium Armor Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 340000,
            handbookPriceRoubles: 340000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Premium Armor Mystery Box",
                    shortName: "Premium Armor Mystery Box",
                    description: `The Premium Armor Mystery Box contains some of the highest tiers of armor found throughout Tarkov\n==============================\nRare Armor - ${this.config.odds['premium_armor_rare']}%`
                }
            }
        };

        const seven_six_two_by_two_five_Gamble: NewItemDetails = {
            newItem: {
                _id: "aa_7.62x25_gamble",
                _name: "gambling_7.62x25",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 7.62x25",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 7.62x25",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_762x25tt_pst_gzh.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 7.62x25",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 7.62x25mm",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Or maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nUnboxes ${this.config.odds['7.62x25_min']}%-${this.config.odds['7.62x25_max']}% Rounds\nCommon Rounds - ${this.config.odds["7.62x25_common"]}%\nUncommon Rounds - ${this.config.odds["7.62x25_uncommon"]}%\nRare Rounds - ${this.config.odds["7.62x25_rare"]}%`
                }
            } 
        }

        const nine_by_one_eight_Gamble: NewItemDetails = {
            newItem: {
                _id: "ab_9x18_gamble",
                _name: "gambling_9x18",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 9x18",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 9x18",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_9x18pm_pbm.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 9x18",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 9x18mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['9x18_min']}-${this.config.odds['9x18_max']} Rounds\nCommon Rounds - ${this.config.odds["9x18_common"]}%\nUncommon Rounds - ${this.config.odds["9x18_uncommon"]}%\nRare Rounds - ${this.config.odds["9x18_rare"]}%`
                }
            } 
        }

        const nine_by_one_nine_Gamble: NewItemDetails = {
            newItem: {
                _id: "ac_9x19_gamble",
                _name: "gambling_9x19",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 9x19",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 9x19",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_9x19_7n31.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 9x19",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 9x19mm Parabellum Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['9x19_min']}-${this.config.odds['9x19_max']} Rounds\nCommon Rounds - ${this.config.odds["9x19_common"]}%\nUncommon Rounds - ${this.config.odds["9x19_uncommon"]}%\nRare Rounds - ${this.config.odds["9x19_rare"]}%`
                }
            } 
        }

        const nine_by_two_one_Gamble: NewItemDetails = {
            newItem: {
                _id: "ad_9x21_gamble",
                _name: "gambling_9x21",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 9x21",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 9x21",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_9x21_7n42.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 9x21",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 9x21mm Gyurza Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['9x21_min']}-${this.config.odds['9x21_max']} Rounds\nCommon Rounds - ${this.config.odds["9x21_common"]}%\nUncommon Rounds - ${this.config.odds["9x21_uncommon"]}%\nRare Rounds - ${this.config.odds["9x21_rare"]}%`
                }
            } 
        }

        const three_five_seven_Gamble: NewItemDetails = {
            newItem: {
                _id: "ae_.357_gamble",
                _name: "gambling_.357",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery .357",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery .357",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_9x33r_fmj.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery .357",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery .357 Magnum Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['.357_min']}-${this.config.odds['.357_max']} Rounds\nCommon Rounds - ${this.config.odds[".357_common"]}%\nUncommon Rounds - ${this.config.odds[".357_uncommon"]}%\nRare Rounds - ${this.config.odds[".357_rare"]}%`
                }
            } 
        }

        const four_five_Gamble: NewItemDetails = {
            newItem: {
                _id: "af_.45_gamble",
                _name: "gambling_.45",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery .45",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery .45",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_1143x23_acp_ap.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery .45",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery .45 ACP Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['.45_min']}-${this.config.odds['.45_max']} Rounds\nCommon Rounds - ${this.config.odds[".45_common"]}%\nUncommon Rounds - ${this.config.odds[".45_uncommon"]}%\nRare Rounds - ${this.config.odds[".45_rare"]}%`
                }
            } 
        }

        const four_six_Gamble: NewItemDetails = {
            newItem: {
                _id: "ag_4.6x30_gamble",
                _name: "gambling_4.6x30",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 4.6x30",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 4.6x30",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_46x30_ap_sx.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 4.6x30",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 4.6x30mm HK Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['4.6x30_min']}-${this.config.odds['4.6x30_max']} Rounds\nCommon Rounds - ${this.config.odds["4.6x30_common"]}%\nUncommon Rounds - ${this.config.odds["4.6x30_uncommon"]}%\nRare Rounds - ${this.config.odds["4.6x30_rare"]}%`
                }
            } 
        }

        const five_seven_Gamble: NewItemDetails = {
            newItem: {
                _id: "ah_5.7x28_gamble",
                _name: "gambling_5.7x28",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 5.7x28",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 5.7x28",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_57x28_ss190.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 5.7x28",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 5.7x28mm FN Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['5.7x28_min']}-${this.config.odds['5.7x28_max']} Rounds\nCommon Rounds - ${this.config.odds["5.7x28_common"]}%\nUncommon Rounds - ${this.config.odds["5.7x28_uncommon"]}%\nRare Rounds - ${this.config.odds["5.7x28_rare"]}%`
                }
            } 
        }

        const five_four_five_Gamble: NewItemDetails = {
            newItem: {
                _id: "ai_5.45x39_gamble",
                _name: "gambling_5.45x39",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 5.45x39",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 5.45x39",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_545x39_bs.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 5.45x39",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 12500,
            handbookPriceRoubles: 12500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 5.45x39mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['5.45x39_min']}-${this.config.odds['5.45x39_max']} Rounds\nCommon Rounds - ${this.config.odds["5.45x39_common"]}%\nUncommon Rounds - ${this.config.odds["5.45x39_uncommon"]}%\nRare Rounds - ${this.config.odds["5.45x39_rare"]}%`
                }
            } 
        }

        const fivefivesix_Gamble: NewItemDetails = {
            newItem: {
                _id: "aj_5.56x45_gamble",
                _name: "gambling_5.56x45",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 5.56x45",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 5.56x45",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_556x45_m995.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 5.56x45",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 14500,
            handbookPriceRoubles: 14500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 5.56x45mm NATO Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['5.56x45_min']}-${this.config.odds['5.56x45_max']} Rounds\nCommon Rounds - ${this.config.odds["5.56x45_common"]}%\nUncommon Rounds - ${this.config.odds["5.56x45_uncommon"]}%\nRare Rounds - ${this.config.odds["5.56x45_rare"]}%`
                }
            } 
        }

        const blackout_Gamble: NewItemDetails = {
            newItem: {
                _id: "ak_.300_gamble",
                _name: "gambling_.300",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery .300",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery .300",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_762x35_ap.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery .300",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 15000,
            handbookPriceRoubles: 15000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery .300 Blackout Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['.300_min']}-${this.config.odds['.300_max']} Rounds\nCommon Rounds - ${this.config.odds[".300_common"]}%\nUncommon Rounds - ${this.config.odds[".300_uncommon"]}%\nRare Rounds - ${this.config.odds[".300_rare"]}%`
                }
            } 
        }

        const seven_six_two_by_three_nine_Gamble: NewItemDetails = {
            newItem: {
                _id: "al_7.62x39_gamble",
                _name: "gambling_7.62x39",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 7.62x39",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 7.62x39",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_762x39_bp.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 7.62x39",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 15000,
            handbookPriceRoubles: 15000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 7.62x39mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['7.62x39_min']}-${this.config.odds['7.62x39_max']} Rounds\nCommon Rounds - ${this.config.odds["7.62x39_common"]}%\nUncommon Rounds - ${this.config.odds["7.62x39_uncommon"]}%\nRare Rounds - ${this.config.odds["7.62x39_rare"]}%`
                }
            } 
        }

        const seven_six_two_by_five_one_Gamble: NewItemDetails = {
            newItem: {
                _id: "am_7.62x51_gamble",
                _name: "gambling_7.62x51",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 7.62x51",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 7.62x51",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_762x51.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 7.62x51",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 17500,
            handbookPriceRoubles: 17500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 7.62x51mm NATO Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['7.62x51_min']}-${this.config.odds['7.62x51_max']} Rounds\nCommon Rounds - ${this.config.odds["7.62x51_common"]}%\nUncommon Rounds - ${this.config.odds["7.62x51_uncommon"]}%\nRare Rounds - ${this.config.odds["7.62x51_rare"]}%`
                }
            } 
        }

        const seven_six_two_by_five_four_Gamble: NewItemDetails = {
            newItem: {
                _id: "an_7.62x54_gamble",
                _name: "gambling_7.62x54",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 7.62x54",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 7.62x54",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_762x54r_7n14.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 7.62x54",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 16500,
            handbookPriceRoubles: 16500,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 7.62x54mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['7.62x54_min']}-${this.config.odds['7.62x54_max']} Rounds\nCommon Rounds - ${this.config.odds["7.62x54_common"]}%\nUncommon Rounds - ${this.config.odds["7.62x54_uncommon"]}%\nRare Rounds - ${this.config.odds["7.62x54_rare"]}%`
                }
            } 
        }

        const three_three_eight_Gamble: NewItemDetails = {
            newItem: {
                _id: "ao_.338_gamble",
                _name: "gambling_.338",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery .338",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery .338",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_86x70_lapua_ap.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery .338",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 65000,
            handbookPriceRoubles: 65000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery .338 Lapua Magnum Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['.338_min']}-${this.config.odds['.338_max']} Rounds\nCommon Rounds - ${this.config.odds[".338_common"]}%\nUncommon Rounds - ${this.config.odds[".338_uncommon"]}%\nRare Rounds - ${this.config.odds[".338_rare"]}%`
                }
            } 
        }

        const nine_by_three_nine_Gamble: NewItemDetails = {
            newItem: {
                _id: "ap_9x39_gamble",
                _name: "gambling_9x39",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 9x39",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 9x39",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_9x39_sp6.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 9x39",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 15000,
            handbookPriceRoubles: 15000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 9x39mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['9x39_min']}-${this.config.odds['9x39_max']} Rounds\nCommon Rounds - ${this.config.odds["9x39_common"]}%\nUncommon Rounds - ${this.config.odds["9x39_uncommon"]}%\nRare Rounds - ${this.config.odds["9x39_rare"]}%`
                }
            } 
        }
        const three_six_six_Gamble: NewItemDetails = {
            newItem: {
                _id: "aq_.366_gamble",
                _name: "gambling_.366",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery .366",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery .366",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_366_custom_ap.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery .366",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 15000,
            handbookPriceRoubles: 15000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery .366 TKM Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['.366_min']}-${this.config.odds['.366_max']} Rounds\nCommon Rounds - ${this.config.odds[".366_common"]}%\nUncommon Rounds - ${this.config.odds[".366_uncommon"]}%\nRare Rounds - ${this.config.odds[".366_rare"]}%`
                }
            } 
        }
        const one_two_seven_Gamble: NewItemDetails = {
            newItem: {
                _id: "ar_12.7x55_gamble",
                _name: "gambling_12.7x55",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 12.7x55",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 12.7x55",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_12,7x55_ps12b.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 12.7x55",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 16000,
            handbookPriceRoubles: 16000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 12.7x55mm Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['12.7x55_min']}-${this.config.odds['12.7x55_max']} Rounds\nCommon Rounds - ${this.config.odds["12.7x55_common"]}%\nUncommon Rounds - ${this.config.odds["12.7x55_uncommon"]}%\nRare Rounds - ${this.config.odds["12.7x55_rare"]}%`
                }
            } 
        }
        const one_two_by_seven_zero_Gamble: NewItemDetails = {
            newItem: {
                _id: "as_12/70_gamble",
                _name: "gambling_12/70",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 12/70",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 12/70",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_12x70.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 12/70",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 12/70 Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['12/70_min']}-${this.config.odds['12/70_max']} Rounds\nCommon Rounds - ${this.config.odds["12/70_common"]}%\nUncommon Rounds - ${this.config.odds["12/70_uncommon"]}%\nRare Rounds - ${this.config.odds["12/70_rare"]}%`
                }
            } 
        }
        const two_zero_by_seven_zero_Gamble: NewItemDetails = {
            newItem: {
                _id: "at_20/70_gamble",
                _name: "gambling_20/70",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 20/70",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 20/70",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_20x70.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 20/70",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 20/70 Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['20/70_min']}-${this.config.odds['20/70_max']} Rounds\nCommon Rounds - ${this.config.odds["20/70_common"]}%\nUncommon Rounds - ${this.config.odds["20/70_uncommon"]}%\nRare Rounds - ${this.config.odds["20/70_rare"]}%`
                }
            } 
        }
        const two_three_by_seven_five_Gamble: NewItemDetails = {
            newItem: {
                _id: "au_23x75_gamble",
                _name: "gambling_23x75",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery 23x75",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery 23x75",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/ammo/patrons/patron_23x75_shrapnel_10.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery 23x75",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 10000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery 23x75 Rounds",
                    shortName: "Mystery",
                    description: `Are you tired of packing your magazines full of BBs? Maybe your Looking for that extra punch in your weapon to help put down that juicy PMC in The Lab. We have all the ammunition you could ask for!\n==============================\nRandomly Unboxes ${this.config.odds['23x75_min']}-${this.config.odds['23x75_max']} Rounds\nCommon Rounds - ${this.config.odds["23x75_common"]}%\nUncommon Rounds - ${this.config.odds["23x75_uncommon"]}%\nRare Rounds - ${this.config.odds["23x75_rare"]}%`
                }
            } 
        }

        customItem.createItemFromClone(sealedWeaponGamble);
        customItem.createItem(walletGamble);
        customItem.createItem(keyGamble);
        customItem.createItem(stimGamble);
        customItem.createItem(foodGamble);
        customItem.createItem(bitcoinGamble);
        customItem.createItem(gpcoinGamble);
        customItem.createItem(keycardGamble);
        customItem.createItem(fiftyFiftyGamble);
        customItem.createItem(meleeWeaponGamble);
        customItem.createItem(weaponGamble);
        customItem.createItem(helmetGamble);
        customItem.createItem(headsetGamble);
        customItem.createItem(backpackGamble);
        customItem.createItem(rigGamble);
        customItem.createItem(armorGamble);
        customItem.createItem(premiumArmorGamble);
        customItem.createItem(premiumWeaponGamble);
        customItem.createItem(blackout_Gamble);
        customItem.createItem(four_six_Gamble);
        customItem.createItem(four_five_Gamble);
        customItem.createItem(five_seven_Gamble);
        customItem.createItem(fivefivesix_Gamble);
        customItem.createItem(one_two_seven_Gamble);
        customItem.createItem(three_six_six_Gamble);
        customItem.createItem(five_four_five_Gamble);
        customItem.createItem(nine_by_two_one_Gamble);
        customItem.createItem(nine_by_one_nine_Gamble);
        customItem.createItem(three_five_seven_Gamble);
        customItem.createItem(nine_by_one_eight_Gamble);
        customItem.createItem(three_three_eight_Gamble);
        customItem.createItem(nine_by_three_nine_Gamble);
        customItem.createItem(one_two_by_seven_zero_Gamble);
        customItem.createItem(two_zero_by_seven_zero_Gamble);
        customItem.createItem(two_three_by_seven_five_Gamble);
        customItem.createItem(seven_six_two_by_five_one_Gamble);
        customItem.createItem(seven_six_two_by_two_five_Gamble);
        customItem.createItem(seven_six_two_by_five_four_Gamble);
        customItem.createItem(seven_six_two_by_three_nine_Gamble);
        
    }
}