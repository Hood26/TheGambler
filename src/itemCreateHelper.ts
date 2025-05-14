import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemDetails } from "@spt/models/spt/mod/NewItemDetails";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { MysteryContainerInfo } from "./MysteryContainerInfo";
import { itemProps } from "./MysteryContainerInfo";
import * as fs from 'fs';
import { jsonc } from "jsonc";
import path from "path";

export class ItemCreateHelper {

    public config: any;
    public loot: Array<NewItemFromCloneDetails> = [];

    // builds all mystery containers and pushes to database
    public createItems(container: DependencyContainer) {
        this.config = jsonc.parse(fs.readFileSync(path.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info: Record<string, itemProps> = MysteryContainerInfo(this.config);
        const customItem = container.resolve<CustomItemService>("CustomItemService");

        for (const [_, value] of Object.entries(info)) {
            
            const item: NewItemDetails = {
                newItem: {
                    _id: value._id,
                    _name: value._name,
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
                        "Description": value.desc,
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
                        "Height": value.height,
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
                        "Name": value.name,
                        "NotShownInSlot": false,
                        "Prefab": {
                            "path": value.prefab,
                            "rcid": ""
                        },
                        "QuestItem": false,
                        "QuestStashMaxCount": 0,
                        "RagFairCommissionModifier": 1,
                        "RepairCost": 0,
                        "RepairSpeed": 0,
                        "SearchSound": "drawer_metal_looting",
                        "ShortName": value.shortName,
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
                        "Width": value.width,
                        "ReverbVolume": 0
                    },
                    _proto: "",
                    _type: "Item"
                },
                fleaPriceRoubles: value.fleaPriceRoubles,
                handbookPriceRoubles: value.handbookPriceRoubles,
                handbookParentId: "5b5f6fa186f77409407a7eb7",
                locales: {
                    "en": {
                        name: value.name,
                        shortName: value.shortName,
                        description: value.desc
                    }
                }
            }
            customItem.createItem(item)
        }
    }
}