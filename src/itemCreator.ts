import { DependencyContainer } from "tsyringe";
import { HashUtil } from "@spt/utils/HashUtil";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { Armors } from "./containers/armors";
import { Helmets } from "./containers/helmets";
import { Weapons } from "./containers/weapons";


export class ItemCreator {

    public armors: any;
    public helmets: any;
    public weapons: any;
    public headsetCompatible: boolean;
    public caliber: string;
    public magazine: string;
    public magazineMaxAmmo: number;
    public weaponType: string;
    private hashUtil: HashUtil;
    private itemHelper: ItemHelper;

    constructor(container: DependencyContainer){
        this.armors = new Armors();
        this.helmets = new Helmets();
        this.weapons = new Weapons();
        this.headsetCompatible = true;
        this.hashUtil = container.resolve<HashUtil>("HashUtil");
        this.itemHelper = container.resolve<ItemHelper>("ItemHelper");
    }

    // getRandomInt(3) returns 0, 1, or 2
    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    public createPreset(name: string, rarity: string): Item{
        let itemPreset: Item[] = [];
        //console.log('createPreset ' + name + ' ' + rarity)

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

    // Returns a random helmet from helmets
    private createHelmet(which: string): Item{
        let baseHelmet: Item[];

        for(let i = 0; i <  this.helmets.rarities.length; i++){
            if (which === this.helmets.rarities[i]) {
                baseHelmet = this.helmets.presets[i];
                break;
            }
        }

        const randomHelmet = this.getRandomInt(baseHelmet.length);
        let getItem = baseHelmet[randomHelmet];
        
        return this.generateItem(getItem);
    }

    // Returns a random Armor from armors
    private createArmor(which: string): Item{
        let baseArmor: Item[];

        for(let i = 0; i <  this.armors.rarities.length; i++){
            if (which === this.armors.rarities[i]) {
                baseArmor = this.armors.presets[i];
                break;
            }
        }

        const randomArmor = this.getRandomInt(baseArmor.length);
        let getItem = baseArmor[randomArmor];
        
        return this.generateItem(getItem);
    }

    // Returns a random gun from weapons
    private createGun(which: string): Item{
        let weaponBuilds: Item[];


        for(let i = 0; i <  this.weapons.rarities.length; i++){
            if (which === this.weapons.rarities[i]) {
                weaponBuilds = this.weapons.presets[i];
                break;
            }
        }

        const randomBuild = this.getRandomInt(weaponBuilds.length);
        let getItem = weaponBuilds[randomBuild];
        this.weaponType = which;
        return this.generateItem(getItem);
    }

    private generateItem(build: any): Item[] {
        const item: Item[] = [];
        // We map every build[i]._id to a newly generated _id inside of parenIdMap. We HAVE to do this as if we have two duplicate items they would have the same _id which will brick the player inventory.
        const parentIdMap = {};
        const _randomId = this.hashUtil.generate(); // New Item baseId;
        const weapon_name = build['Name']? build['Name'] : undefined;
        build = build.Items;

        let baseId;
        for(let i = 0; i < build.length; i++){

            if (build[i]._tpl == "5a16b9fffcdbcb0176308b34") { // helmet has a headset
                this.headsetCompatible = false;
            }

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
                        // Save magazine
                        this.magazine = build[i]._tpl;
                        // Maximum rounds in saved magazine
                        const magInfo = this.itemHelper.getItem(this.magazine)
                        this.magazineMaxAmmo = magInfo[1]._props.Cartridges[0]._max_count;
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
