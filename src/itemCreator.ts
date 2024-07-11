import { DependencyContainer } from "tsyringe";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";

import { WeaponPresets } from './presets/WeaponPresets';
import { ArmorPresets } from './presets/ArmorPresets';
import { HelmetPresets } from './presets/HelmetPresets';


export class ItemCreator {

    public Weapons: any;
    public Helmets: any;
    public Armors: any;
    public caliber: string;
    public magazine: string;
    public weaponType: string;
    private hashUtil: HashUtil;
    private itemHelper: ItemHelper;

    constructor(container: DependencyContainer){
        this.Weapons = new WeaponPresets();
        this.Helmets = new HelmetPresets();
        this.Armors = new ArmorPresets();
        this.hashUtil = container.resolve<HashUtil>("HashUtil");
        this.itemHelper = container.resolve<ItemHelper>("ItemHelper");
    }

    // getRandomInt(3) returns 0, 1, or 2
    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    public createPreset(name: string, rarity: string): Item{
        let itemPreset: Item[] = [];
        console.log('createPreset ' + name + ' ' + rarity)

        switch(name){
            case 'helmet':
                itemPreset = this.createHelmet(rarity);
                break;
            case 'armor':
                itemPreset = this.createArmor(rarity);
                break;
            case 'weapon':
                itemPreset = this.createGun(rarity);
                break;
        }
        return itemPreset
    }

    // Returns a random helmet from Helmets
    private createHelmet(which: string): Item{
        let baseHelmet: Item[];

        if(which == "common") {
            baseHelmet = this.Helmets.helmet_common;
        } else if (which == "uncommon") {
            baseHelmet = this.Helmets.helmet_uncommon;
        } else if (which == "rare") {
            baseHelmet = this.Helmets.helmet_rare;
        } else if (which == "extremely_rare") {
            baseHelmet = this.Helmets.helmet_extremely_rare;
        }

        const randomHelmet = this.getRandomInt(baseHelmet.length);
        let getItem = baseHelmet[randomHelmet].Items;
        
        return this.generateItem(getItem);
    }

    // Returns a random Armor from Armors
    private createArmor(which: string): Item{
        let baseArmor: Item[];

        if(which == "common") {
            baseArmor = this.Armors.commonArmor;
        } else if (which == "uncommon") {
            baseArmor = this.Armors.uncommonArmor;
        } else if (which == "rare") {
            baseArmor = this.Armors.rareArmor;
        }

        const randomArmor = this.getRandomInt(baseArmor.length);
        let getItem = baseArmor[randomArmor].Items;
        
        return this.generateItem(getItem);
    }

    // Returns a random gun from Weapons
    private createGun(which: string): Item{
        let weaponBuilds: Item[];

        //console.log('WHICH = ' + which)

        if(which == "base") {
            weaponBuilds = this.Weapons.weaponBaseBuilds;
        } else if (which == "scav") {
            weaponBuilds = this.Weapons.weaponScavBuilds;
        } else if (which == "decent") {
            weaponBuilds = this.Weapons.weaponDecentBuilds;
        } else if (which == "meme") {
            weaponBuilds = this.Weapons.weaponMemeBuilds;
        } else if (which == "meta") {
            weaponBuilds = this.Weapons.weaponMetaBuilds;
        }

        const randomBuild = this.getRandomInt(weaponBuilds.length);
        let getItem = weaponBuilds[randomBuild].Items;
        this.weaponType = which;
        return this.generateItem(getItem);
    }

    private generateItem(build: Item[]): Item[] {
        const item: Item[] = [];
        // We map every build[i]._id to a newly generated _id inside of parenIdMap. We HAVE to do this as if we have two duplicate items they would have the same _id which will brick the player inventory.
        const parentIdMap = {};
        const _randomId = this.hashUtil.generate(); // New Item baseId;

        let baseId;
        for(let i = 0; i < build.length; i++){

            if(i == 0) { // item base
                baseId = build[i]._id; // Need the base to reference in attachments
                parentIdMap[baseId] = _randomId; // base id = _randomId
                
                item.push({
                    _id: _randomId,
                    _tpl: build[i]._tpl
                });
            } else { // Children Attachments  
            
                const newId = this.hashUtil.generate();

                // Every _id is mapped to a newly generated _id, so every item is unique and doesn"t _id collide
                if(parentIdMap[build[i]._id] == undefined)  {
                    parentIdMap[build[i]._id] = newId;
                }
                
                if(build[i].parentId != baseId) { // Attachments with parents that are not the base Item

                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: parentIdMap[build[i].parentId],
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });

                } else {
                    if(build[i].slotId == "mod_magazine") {
                        this.magazine = build[i]._tpl;
                    }
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: _randomId,
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });
                    
                }
            }
        }
        const itemInfo = this.itemHelper.getItem(item[0]._tpl)
        this.caliber = itemInfo[1]._props.ammoCaliber; // save caliber
        return item;
    }


    
}
