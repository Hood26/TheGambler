"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreator = void 0;
const Weapons_1 = require("./Weapons");
const Armors_1 = require("./Armors");
const Helmets_1 = require("./Helmets");
class ItemCreator {
    Weapons;
    Helmets;
    armor;
    hashUtil;
    constructor(container) {
        this.Weapons = new Weapons_1.Weapons();
        this.Helmets = new Helmets_1.Helmets();
        this.armor = new Armors_1.Armors();
        this.hashUtil = container.resolve("HashUtil");
    }
    // getRandomInt(3) returns 0, 1, or 2
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    // Returns a random helmet from Helmets
    createHelmet(which) {
        let baseHelmet;
        if (which == "common") {
            baseHelmet = this.Helmets.commonHelmet;
        }
        else if (which == "uncommon") {
            baseHelmet = this.Helmets.uncommonHelmet;
        }
        else if (which == "rare") {
            baseHelmet = this.Helmets.rareHelmet;
        }
        else if (which == "extremely_rare") {
            baseHelmet = this.Helmets.thermalHelmet;
        }
        const randomHelmet = this.getRandomInt(baseHelmet.length);
        let getItem = baseHelmet[randomHelmet].Items;
        return this.generateItem(getItem);
    }
    // Returns a random armor from Armors
    createArmor(which) {
        let baseArmor;
        if (which == "common") {
            baseArmor = this.armor.commonArmor;
        }
        else if (which == "uncommon") {
            baseArmor = this.armor.uncommonArmor;
        }
        else if (which == "rare") {
            baseArmor = this.armor.rareArmor;
        }
        const randomArmor = this.getRandomInt(baseArmor.length);
        let getItem = baseArmor[randomArmor].Items;
        return this.generateItem(getItem);
    }
    // Returns a random gun from Weapons
    createGun(which) {
        let weaponBuilds;
        if (which == "base") {
            weaponBuilds = this.Weapons.weaponBaseBuilds;
        }
        else if (which == "scav") {
            weaponBuilds = this.Weapons.weaponScavBuilds;
        }
        else if (which == "decent") {
            weaponBuilds = this.Weapons.weaponDecentBuilds;
        }
        else if (which == "meme") {
            weaponBuilds = this.Weapons.weaponMemeBuilds;
        }
        else if (which == "meta") {
            weaponBuilds = this.Weapons.weaponMetaBuilds;
        }
        const randomBuild = this.getRandomInt(weaponBuilds.length);
        let getItem = weaponBuilds[randomBuild].Items;
        return this.generateItem(getItem);
    }
    generateItem(build) {
        const item = [];
        // We map every build[i]._id to a newly generated _id inside of parenIdMap. We HAVE to do this as if we have two duplicate items they would have the same _id which will brick the player inventory.
        const parentIdMap = {};
        const _randomId = this.hashUtil.generate(); // New Item baseId;
        let baseId;
        for (let i = 0; i < build.length; i++) {
            if (i == 0) { // item base
                baseId = build[i]._id; // Need the base to reference in attachments
                parentIdMap[baseId] = _randomId; // base id = _randomId
                item.push({
                    _id: _randomId,
                    _tpl: build[i]._tpl
                });
            }
            else { // Children Attachments  
                const newId = this.hashUtil.generate();
                // Every _id is mapped to a newly generated _id, so every item is unique and doesn"t _id collide
                if (parentIdMap[build[i]._id] == undefined) {
                    parentIdMap[build[i]._id] = newId;
                }
                if (build[i].parentId != baseId) { // Attachments with parents that are not the base Item
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: parentIdMap[build[i].parentId],
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable ? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });
                }
                else {
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: _randomId,
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable ? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });
                }
            }
        }
        return item;
    }
}
exports.ItemCreator = ItemCreator;
//# sourceMappingURL=itemCreator.js.map