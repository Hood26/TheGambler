import { Weapons } from "src/containers/Weapons";

export class WeaponPresets {

  public weapons = new Weapons();

  public weaponMetaBuilds = [
    {
      "Id": "666663d10100180d03b06409",
      "Name": "mp7",
      "Root": "352ea3519a631527c9e8b3e4",
      "Items": [
        {
          "_id": "352ea3519a631527c9e8b3e4",
          "_tpl": "5bd70322209c4d00d7167b8f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "c480b890a02675c2b3f0f912",
          "_tpl": "5ba26586d4351e44f824b340",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9bcdedc7068b3f26f2a4b833",
          "_tpl": "5ba26acdd4351e003562908e",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0786c4cb06e3fca7eb879666",
          "_tpl": "5ba26b01d4351e0085325a51",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5d4c0d81a3398b2ce2966626",
          "_tpl": "5ba26b17d4351e00367f9bdd",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5e8a95185c0d23c60ce97aca",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_scope"
        },
        {
          "_id": "58393017017c936485443b5c",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "2838664261e22f1183332389",
          "_tpl": "5bd704e7209c4d00d7167c31",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_stock"
        },
        {
          "_id": "872dfae825e9041588a9cdd0",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "352ea3519a631527c9e8b3e4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "6c471e9a4ed4e0f3469fd62b",
          "_tpl": "5ba26ae8d4351e00367f9bdb",
          "parentId": "9bcdedc7068b3f26f2a4b833",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c8aea9d698efc002cb45a127",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "5e8a95185c0d23c60ce97aca",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905a8c0100180d032594af",
      "Name": "Deathmarch",
      "Root": "afce5071bab0aa98def15770",
      "Items": [
        {
          "_id": "afce5071bab0aa98def15770",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ab45adbe3c14dab8b82e74e4",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "144b04462288462ca9ad320c",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e182e7c9364971291ab6890c",
          "_tpl": "628a664bccaab13006640e47",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f963514eb332bae45b23ae60",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_reciever"
        },
        {
          "_id": "4af2dc22e45eb678fce04f4d",
          "_tpl": "628a7b23b0f75035732dd565",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4d9d786eeb84586ecf695d65",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "c2f959055025009fee78914f",
          "_tpl": "5c6175362e221600133e3b94",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_magazine"
        },
        {
          "_id": "08ed3a1ce2cc66a5938d1173",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "afce5071bab0aa98def15770",
          "slotId": "mod_charge"
        },
        {
          "_id": "f3d4b08c825b2a8f2de6ed41",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "ab45adbe3c14dab8b82e74e4",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "48d1ed3c9c83e09b24d71496",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "ab45adbe3c14dab8b82e74e4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "76ff164f7e3632d84b078e4e",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "144b04462288462ca9ad320c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "15ec29dec439beadbfe0d700",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "f963514eb332bae45b23ae60",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "edf8bfbf16510378f89ee21e",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "f3d4b08c825b2a8f2de6ed41",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "d7e7ba20025584c1f9f69ca8",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "48d1ed3c9c83e09b24d71496",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66905ae50100180d0327d52c",
      "Name": "The Chief",
      "Root": "6de8d2eab9f2f9d77d6801d4",
      "Items": [
        {
          "_id": "6de8d2eab9f2f9d77d6801d4",
          "_tpl": "57c44b372459772d2b39b8ce",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "fd1c6dfdc6e895908aad4812",
          "_tpl": "57c44dd02459772d2e0ae249",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c93835eb5c73819e6dbe327b",
          "_tpl": "57c44f4f2459772d2c627113",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_reciever"
        },
        {
          "_id": "807cc94b979e1093fc66decc",
          "_tpl": "5a9e81fba2750c00164f6b11",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3113f3681d35ae6fc559cc8f",
          "_tpl": "5a69a2ed8dc32e000d46d1f1",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c8ab1dda0187ee0cc7ec1496",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_charge"
        },
        {
          "_id": "91a75d487388d80a7cbb7f84",
          "_tpl": "5dff8db859400025ea5150d4",
          "parentId": "6de8d2eab9f2f9d77d6801d4",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "7e0d5db8ffe9260ac8e763e9",
          "_tpl": "57c44e7b2459772d28133248",
          "parentId": "fd1c6dfdc6e895908aad4812",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9cfac8bda19505fe9324b4db",
          "_tpl": "59eb7ebe86f7740b373438ce",
          "parentId": "fd1c6dfdc6e895908aad4812",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "d6ac2767807ec519a1205981",
          "_tpl": "58d2947686f774485c6a1ee5",
          "parentId": "3113f3681d35ae6fc559cc8f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "8fbb23b18e2218192527aed8",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "91a75d487388d80a7cbb7f84",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "be62fa38e0ad74009137f56f",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "9cfac8bda19505fe9324b4db",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "c9d9e8c5060dfadd53be18f4",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "9cfac8bda19505fe9324b4db",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "f874446efd6f14d147bff71c",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "d6ac2767807ec519a1205981",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66905b590100180d039b46e1",
      "Name": "Death",
      "Root": "44bea75d17bf762ca158316b",
      "Items": [
        {
          "_id": "44bea75d17bf762ca158316b",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "aaa2521d01a1326b44e6b682",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "44bea75d17bf762ca158316b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "fed35407db69e0b3bcb73403",
          "_tpl": "5aaa5dfee5b5b000140293d3",
          "parentId": "44bea75d17bf762ca158316b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "56ac3ce4d85d481b445a191e",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "44bea75d17bf762ca158316b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "78c8f4eb7cf7b47b2ebea0c1",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "44bea75d17bf762ca158316b",
          "slotId": "mod_stock"
        },
        {
          "_id": "cbdf76661735182ce8e31261",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "44bea75d17bf762ca158316b",
          "slotId": "mod_charge"
        },
        {
          "_id": "f4020d959b3f132b81128489",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "56ac3ce4d85d481b445a191e",
          "slotId": "mod_scope"
        },
        {
          "_id": "b8582b54a85b04f0734669ea",
          "_tpl": "55d3632e4bdc2d972f8b4569",
          "parentId": "56ac3ce4d85d481b445a191e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ed1574a630e7b9997b19d742",
          "_tpl": "6087e0336d0bd7580617bb7a",
          "parentId": "56ac3ce4d85d481b445a191e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "7c40694825edc6143a6c8026",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "78c8f4eb7cf7b47b2ebea0c1",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "f28a84fb3b2fb71d78bbd22a",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "f4020d959b3f132b81128489",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "be62ccfa4a0e77342d925d63",
          "_tpl": "609269c3b0e443224b421cc1",
          "parentId": "b8582b54a85b04f0734669ea",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8402d6d7ac6ed906290441a6",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "b8582b54a85b04f0734669ea",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "18488d5cc74107e8f5138fbe",
          "_tpl": "60926df0132d4d12c81fd9df",
          "parentId": "be62ccfa4a0e77342d925d63",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1e64bd572d6a17f82c9a587b",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "7c40694825edc6143a6c8026",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66905bfe0100180d03280c6c",
      "Name": "Treachery",
      "Root": "be59e643db66055fe0322a0a",
      "Items": [
        {
          "_id": "be59e643db66055fe0322a0a",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b0ba4c3498f01013c3065333",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "be59e643db66055fe0322a0a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "8549989e29e2988fea1fc345",
          "_tpl": "59fafc5086f7740dbe19f6c3",
          "parentId": "be59e643db66055fe0322a0a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1def46110b8841e1517257db",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "be59e643db66055fe0322a0a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "ea266096a5587b88ac59359d",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "be59e643db66055fe0322a0a",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "7403884790dafb659952457e",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "be59e643db66055fe0322a0a",
          "slotId": "mod_charge"
        },
        {
          "_id": "95306e7fd445a0cf9a2aef5c",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "1def46110b8841e1517257db",
          "slotId": "mod_scope"
        },
        {
          "_id": "26178b22235c50426a950730",
          "_tpl": "6065878ac9cf8012264142fd",
          "parentId": "1def46110b8841e1517257db",
          "slotId": "mod_barrel"
        },
        {
          "_id": "11da51b66fb8abe4d1386c47",
          "_tpl": "6065881d1246154cad35d637",
          "parentId": "1def46110b8841e1517257db",
          "slotId": "mod_handguard"
        },
        {
          "_id": "449e1df92abe2cd748414bfc",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "ea266096a5587b88ac59359d",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "1eb55269f3360d1d83e008d3",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "95306e7fd445a0cf9a2aef5c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4a93739dedaf831a573f7c09",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "26178b22235c50426a950730",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "075d9bdadc54cdb51a150ad7",
          "_tpl": "5dfa3d45dfc58d14537c20b0",
          "parentId": "26178b22235c50426a950730",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "45eda62fb45d1376c22fe94c",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "11da51b66fb8abe4d1386c47",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "2777e194dc98fc1c840c30d1",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "11da51b66fb8abe4d1386c47",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "f483d49d09a76ba889cfa2f9",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "4a93739dedaf831a573f7c09",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d6ebf64db89228e007d6f69a",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "45eda62fb45d1376c22fe94c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b5991f01c4d5db63d992bf79",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "2777e194dc98fc1c840c30d1",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c66a974c208ddd2d8af51111",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "449e1df92abe2cd748414bfc",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66905c6e0100180d035f59a6",
      "Name": "AWP",
      "Root": "c4374b7d4d19ddaecb1161d9",
      "Items": [
        {
          "_id": "c4374b7d4d19ddaecb1161d9",
          "_tpl": "5bfea6e90db834001b7347f3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "370cd14acd795df525a67fa2",
          "_tpl": "5d25a6538abbc306c62e630d",
          "parentId": "c4374b7d4d19ddaecb1161d9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8a0ba2d95bec64da6a65c979",
          "_tpl": "5d25d0ac8abbc3054f3e61f7",
          "parentId": "c4374b7d4d19ddaecb1161d9",
          "slotId": "mod_stock"
        },
        {
          "_id": "e5e04166edc67193eb76acb2",
          "_tpl": "5bfebc320db8340019668d79",
          "parentId": "c4374b7d4d19ddaecb1161d9",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a9123679d5014c7cafaea793",
          "_tpl": "5bfebc5e0db834001a6694e5",
          "parentId": "c4374b7d4d19ddaecb1161d9",
          "slotId": "mod_mount"
        },
        {
          "_id": "5db103d407da2b07ba897c0b",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "8a0ba2d95bec64da6a65c979",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "794713d4baf8861bc6db6ede",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "e5e04166edc67193eb76acb2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "97153fbc36b2566a3faf5934",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "a9123679d5014c7cafaea793",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f12df578bdf36cdcb0d4a38f",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "5db103d407da2b07ba897c0b",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "c30251b3886de86296ddd278",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "794713d4baf8861bc6db6ede",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66905cf90100180d03ce153e",
      "Name": "Enigma",
      "Root": "776575a4d4d991a1a30440e2",
      "Items": [
        {
          "_id": "776575a4d4d991a1a30440e2",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d0870a16579782e29224f896",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "63d3fae0d82fd7202cf12e63",
          "_tpl": "615d8e9867085e45ef1409c6",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "56c4aaf46901e6ff5d490dd3",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6ff74e46e0504ad82d6c450b",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_reciever"
        },
        {
          "_id": "8186adc085cd945afeaf3fe4",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8be5a96f11ba0d43c04300fe",
          "_tpl": "6087e2a5232e5a31c233d552",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_stock"
        },
        {
          "_id": "28cdf8f359d2674fa24e1915",
          "_tpl": "6272874a6c47bd74f92e2087",
          "parentId": "776575a4d4d991a1a30440e2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0e93a62cf3df8381e888047e",
          "_tpl": "5c17664f2e2216398b5a7e3c",
          "parentId": "d0870a16579782e29224f896",
          "slotId": "mod_handguard"
        },
        {
          "_id": "c4a0f849aaa32314450e7a8d",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "63d3fae0d82fd7202cf12e63",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "04f39beaad01818aea9fccce",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "6ff74e46e0504ad82d6c450b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e223b41c3f7241dce82ef018",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "0e93a62cf3df8381e888047e",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "37a49d8fccbefaee47a765a4",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "0e93a62cf3df8381e888047e",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "9d8b1c2621489e860cec9d14",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "e223b41c3f7241dce82ef018",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "1561c8f5ed3b1df6d41e2a8c",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "37a49d8fccbefaee47a765a4",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "31c63b401266fb12a2c49e91",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "c4a0f849aaa32314450e7a8d",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66905e6d0100180d039dad8f",
      "Name": "Chad Slayer",
      "Root": "750bd2b427db2dd074278626",
      "Items": [
        {
          "_id": "750bd2b427db2dd074278626",
          "_tpl": "5bb2475ed4351e00853264e3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7c2f2c7ae4db309f7a41299b",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "750bd2b427db2dd074278626",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f09287feff57e973c81803cd",
          "_tpl": "59c1383d86f774290a37e0ca",
          "parentId": "750bd2b427db2dd074278626",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7dcbbbce4bdb68206de478a1",
          "_tpl": "5bb20d53d4351e4502010a69",
          "parentId": "750bd2b427db2dd074278626",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9b86b466d0c7fff2d8a5f0c8",
          "_tpl": "5bb20e58d4351e00320205d7",
          "parentId": "750bd2b427db2dd074278626",
          "slotId": "mod_stock"
        },
        {
          "_id": "136b5b05ca7a5c80aab6fd88",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "750bd2b427db2dd074278626",
          "slotId": "mod_charge"
        },
        {
          "_id": "02707b6c1e247ee8c723ba12",
          "_tpl": "618bab21526131765025ab3f",
          "parentId": "7dcbbbce4bdb68206de478a1",
          "slotId": "mod_scope"
        },
        {
          "_id": "1c37fbfc3d2b648e1a28a0d4",
          "_tpl": "5bb20dadd4351e00367faeff",
          "parentId": "7dcbbbce4bdb68206de478a1",
          "slotId": "mod_barrel"
        },
        {
          "_id": "75a57b96c54cbfedf510213a",
          "_tpl": "5c6d11152e2216000f2003e7",
          "parentId": "7dcbbbce4bdb68206de478a1",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e98e383b8fc84da3e7f61587",
          "_tpl": "5bb20e49d4351e3bac1212de",
          "parentId": "7dcbbbce4bdb68206de478a1",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "63279199ff1f3291d582e560",
          "_tpl": "6516e91f609aaf354b34b3e2",
          "parentId": "9b86b466d0c7fff2d8a5f0c8",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "463107e9a31d4f7ff2b61816",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "02707b6c1e247ee8c723ba12",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7932b734242b04986315bb5a",
          "_tpl": "618ba91477b82356f91ae0e8",
          "parentId": "02707b6c1e247ee8c723ba12",
          "slotId": "mod_mount"
        },
        {
          "_id": "84f4a3a860a236217a34d717",
          "_tpl": "6386120cd6baa055ad1e201c",
          "parentId": "1c37fbfc3d2b648e1a28a0d4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "131ffee7ed6543ae5aca9881",
          "_tpl": "5bb20dcad4351e3bac1212da",
          "parentId": "1c37fbfc3d2b648e1a28a0d4",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "625d200a4607e3a2f3d91033",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "75a57b96c54cbfedf510213a",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "7bacc93a692011c9acaea8a3",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "75a57b96c54cbfedf510213a",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "5251ccbc33865c1717fd6e82",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "84f4a3a860a236217a34d717",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "76a87dfa0e019e21eeea34d6",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "625d200a4607e3a2f3d91033",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "c4b11444730eea797a13ffa8",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "7bacc93a692011c9acaea8a3",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "6d958c83ebc4048b21ec78b8",
          "_tpl": "6516e9bc5901745209404287",
          "parentId": "63279199ff1f3291d582e560",
          "slotId": "mod_stock_000"
        }
      ]
    },
    {
      "Id": "66905f030100180d031c3c2d",
      "Name": "Vengence",
      "Root": "1ec10fe6b465b59aa757b20e",
      "Items": [
        {
          "_id": "1ec10fe6b465b59aa757b20e",
          "_tpl": "5dcbd56fdbd3d91b3e5468d5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "53504ef395346432cc915701",
          "_tpl": "5dcbd6dddbd3d91b3e5468de",
          "parentId": "1ec10fe6b465b59aa757b20e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "4d123597d37fd3186956ac13",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "1ec10fe6b465b59aa757b20e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "82dbabd08ab743699914995c",
          "_tpl": "5dcbd6b46ec07c0c4347a564",
          "parentId": "1ec10fe6b465b59aa757b20e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "219f12d2e0a4a563a11b5d71",
          "_tpl": "5dcbe9431e1f4616d354987e",
          "parentId": "1ec10fe6b465b59aa757b20e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "48e8bd9bc93d3aecc76c2905",
          "_tpl": "5c07dd120db834001c39092d",
          "parentId": "1ec10fe6b465b59aa757b20e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bb0bc3941d89ba2fb7f7624b",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "82dbabd08ab743699914995c",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "7799ef8fa84ae01bbc4daad0",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "82dbabd08ab743699914995c",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "50c7bf63317cc184cdb3c456",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "219f12d2e0a4a563a11b5d71",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5ce0cc5a6258681870354ade",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "bb0bc3941d89ba2fb7f7624b",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c66e77179c57e7366496cc3f",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "7799ef8fa84ae01bbc4daad0",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a3b6d3c9b1b16be31b0c8cf8",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "50c7bf63317cc184cdb3c456",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669070690100180d0371c6b6",
      "Name": "Streets Defender",
      "Root": "53ce6d32fc81cbd09bb35f73",
      "Items": [
        {
          "_id": "53ce6d32fc81cbd09bb35f73",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "894f58c7862e85d700a5fb6c",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "53ce6d32fc81cbd09bb35f73",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "74c0dcb4d9729a03ba2c7fa9",
          "_tpl": "5aaa5dfee5b5b000140293d3",
          "parentId": "53ce6d32fc81cbd09bb35f73",
          "slotId": "mod_magazine"
        },
        {
          "_id": "14b3d1d1d3d5f229067654c7",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "53ce6d32fc81cbd09bb35f73",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f7bc3004db0a6ff6889a007f",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "53ce6d32fc81cbd09bb35f73",
          "slotId": "mod_stock"
        },
        {
          "_id": "d2671e5559e713216346074b",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "53ce6d32fc81cbd09bb35f73",
          "slotId": "mod_charge"
        },
        {
          "_id": "1592d81fe9636bc110804327",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "14b3d1d1d3d5f229067654c7",
          "slotId": "mod_scope"
        },
        {
          "_id": "4f029281d17695c94354eaba",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "14b3d1d1d3d5f229067654c7",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a65bfbb7f1a7fd54b1193573",
          "_tpl": "63888bbd28e5cc32cc09d2b6",
          "parentId": "14b3d1d1d3d5f229067654c7",
          "slotId": "mod_handguard"
        },
        {
          "_id": "7a805d871ea7b1bd9945d3b2",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "f7bc3004db0a6ff6889a007f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "f8778b58eac6f7e303c0988b",
          "_tpl": "618ba27d9008e4636a67f61d",
          "parentId": "1592d81fe9636bc110804327",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3c3c3d4ce974044e3e58fb15",
          "_tpl": "626667e87379c44d557b7550",
          "parentId": "4f029281d17695c94354eaba",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2cdc4cc511755a66cb804803",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "4f029281d17695c94354eaba",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "148dcf2c98579ec04b09810d",
          "_tpl": "6388c4ac8d895f557a0c6515",
          "parentId": "a65bfbb7f1a7fd54b1193573",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "bfde91df943ae9e60d4d68d8",
          "_tpl": "626673016f1edc06f30cf6d5",
          "parentId": "3c3c3d4ce974044e3e58fb15",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "df41e8ebffd672f487cb4eac",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "148dcf2c98579ec04b09810d",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "fb5e3e5dff4b6c3aed374e12",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "7a805d871ea7b1bd9945d3b2",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6690707a0100180d037c7fdd",
      "Name": "Equalizer",
      "Root": "1d0a43d0d13b48e951eb06a0",
      "Items": [
        {
          "_id": "1d0a43d0d13b48e951eb06a0",
          "_tpl": "6499849fc93611967b034949",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5220f56959efc9d35aa5ffad",
          "_tpl": "649ec107961514b22506b10c",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9e7cf2837d67ab224fc735c4",
          "_tpl": "649ec2af961514b22506b10f",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "cc74fd0e0cb2ca5b9cbc879f",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "980afb905cc51d6ddf7825cf",
          "_tpl": "649ec2f3961514b22506b111",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f0a42859591305832cc73b23",
          "_tpl": "649ec87d8007560a9001ab36",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "f6c322ee47f9fffa41ccb2ef",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4f1aaab5d39242f004657e07",
          "_tpl": "649ec127c93611967b034957",
          "parentId": "1d0a43d0d13b48e951eb06a0",
          "slotId": "mod_handguard"
        },
        {
          "_id": "b7accafd4244f321f6f5651d",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "980afb905cc51d6ddf7825cf",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d7eae8cb6d652fd962eca4c8",
          "_tpl": "649ec2da59cbb3c813042dca",
          "parentId": "980afb905cc51d6ddf7825cf",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d73843f94e8053b4f3e22d05",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "f0a42859591305832cc73b23",
          "slotId": "mod_stock"
        },
        {
          "_id": "8a7170d98ef7919c5c5fee8d",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "4f1aaab5d39242f004657e07",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "dcb0763502f08de922d867ff",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "4f1aaab5d39242f004657e07",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "fa01510c41bc921aa9d3bed4",
          "_tpl": "649ec2cec93611967b03495e",
          "parentId": "d7eae8cb6d652fd962eca4c8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9e9fed13eef71dc1187ca1ca",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "d73843f94e8053b4f3e22d05",
          "slotId": "mod_stock"
        },
        {
          "_id": "7985f87ade4e2bedbd4528dd",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "8a7170d98ef7919c5c5fee8d",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690708a0100180d03a8ffa7",
      "Name": "Baby Equalizer",
      "Root": "43bea7ce22bf7ebac4d009d3",
      "Items": [
        {
          "_id": "43bea7ce22bf7ebac4d009d3",
          "_tpl": "628b9c37a733087d0d7fe84b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b1a52c7b974e7f9588bf72c3",
          "_tpl": "628b8d83717774443b15e248",
          "parentId": "43bea7ce22bf7ebac4d009d3",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "977b28f8848e97bcf19659e5",
          "_tpl": "5cc9a96cd7f00c011c04e04a",
          "parentId": "43bea7ce22bf7ebac4d009d3",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8c74564f90bbb44bb45757e5",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "43bea7ce22bf7ebac4d009d3",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f2bae3d115fecbac7c22815c",
          "_tpl": "628b9a40717774443b15e9f2",
          "parentId": "43bea7ce22bf7ebac4d009d3",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "5ff3f33faae48d491a964cc1",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "43bea7ce22bf7ebac4d009d3",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b7e758ef26e929f3993caa3e",
          "_tpl": "628b916469015a4e1711ed8d",
          "parentId": "b1a52c7b974e7f9588bf72c3",
          "slotId": "mod_handguard"
        },
        {
          "_id": "72879a848c7accc862b80da4",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "f2bae3d115fecbac7c22815c",
          "slotId": "mod_stock"
        },
        {
          "_id": "df25545ad695bb5240a0f199",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "b7e758ef26e929f3993caa3e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "db574ce1e1209bddd7d26678",
          "_tpl": "6269220d70b6c02e665f2635",
          "parentId": "b7e758ef26e929f3993caa3e",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e7bfb6ad7eebd22338085133",
          "_tpl": "628b9be6cff66b70c002b14c",
          "parentId": "b7e758ef26e929f3993caa3e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9f6b516fe90f759ef5f83f57",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "df25545ad695bb5240a0f199",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "594b7d728f05ddc648b5f190",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "db574ce1e1209bddd7d26678",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "58e66464618a1f77c67b19e6",
          "_tpl": "628b9471078f94059a4b9bfb",
          "parentId": "e7bfb6ad7eebd22338085133",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7231baf1b1c0a0a53700b3ff",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "e7bfb6ad7eebd22338085133",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f6f305dab8190bdaaf6aae1c",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "72879a848c7accc862b80da4",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669070d10100180d03f56be4",
      "Name": "Defiance",
      "Root": "9a3d9477d220d9e2f25f9553",
      "Items": [
        {
          "_id": "9a3d9477d220d9e2f25f9553",
          "_tpl": "628b9c37a733087d0d7fe84b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3ca086f80c7f88e38b767855",
          "_tpl": "628b8d83717774443b15e248",
          "parentId": "9a3d9477d220d9e2f25f9553",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "793fe2458575260cb675e5ed",
          "_tpl": "5cc9a96cd7f00c011c04e04a",
          "parentId": "9a3d9477d220d9e2f25f9553",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "261d2352ff1a25c6c96a946d",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "9a3d9477d220d9e2f25f9553",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "be7a3859279108475c41c72e",
          "_tpl": "628b9a40717774443b15e9f2",
          "parentId": "9a3d9477d220d9e2f25f9553",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "66200f3ecdfc734a02b46f9a",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "9a3d9477d220d9e2f25f9553",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e22b191e9aeab90a3fa3ab41",
          "_tpl": "628b916469015a4e1711ed8d",
          "parentId": "3ca086f80c7f88e38b767855",
          "slotId": "mod_handguard"
        },
        {
          "_id": "9dbbb99480ce61429abec8a4",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "be7a3859279108475c41c72e",
          "slotId": "mod_stock"
        },
        {
          "_id": "4798dac726230e8ca882673f",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "e22b191e9aeab90a3fa3ab41",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "842fce215f15fa205fa6bbaf",
          "_tpl": "6269220d70b6c02e665f2635",
          "parentId": "e22b191e9aeab90a3fa3ab41",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "a097eb45842d8a0b8a91abc3",
          "_tpl": "628b9be6cff66b70c002b14c",
          "parentId": "e22b191e9aeab90a3fa3ab41",
          "slotId": "mod_reciever"
        },
        {
          "_id": "5b78d36aa2a9a039fa66bf27",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "4798dac726230e8ca882673f",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "669637117aa1b5c6a77202e7",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "842fce215f15fa205fa6bbaf",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f948b3c4c9869c1d3d713ad0",
          "_tpl": "628b9471078f94059a4b9bfb",
          "parentId": "a097eb45842d8a0b8a91abc3",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bae93460303b39d3f287fa81",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "a097eb45842d8a0b8a91abc3",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "94c89818f57f586ceeb2e97a",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "9dbbb99480ce61429abec8a4",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669070de0100180d03d19097",
      "Name": "Dispatcher Of Broken Families",
      "Root": "e7a1e375f365d399fbccc979",
      "Items": [
        {
          "_id": "e7a1e375f365d399fbccc979",
          "_tpl": "627e14b21713922ded6f2c15",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "c656426ca74b9006bf935dc9",
          "_tpl": "628120fd5631d45211793c9f",
          "parentId": "e7a1e375f365d399fbccc979",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1e42e0bafcceddf406fd343f",
          "_tpl": "62811e2510e26c1f344e6554",
          "parentId": "e7a1e375f365d399fbccc979",
          "slotId": "mod_pistol_grip",
          "upd": {
            "Foldable": {
              "Folded": false
            }
          }
        },
        {
          "_id": "ed1e29dcc7987c2fc384ff4a",
          "_tpl": "62811cd7308cb521f87a8f99",
          "parentId": "e7a1e375f365d399fbccc979",
          "slotId": "mod_charge"
        },
        {
          "_id": "e36444b0ab7d49f23bf29d22",
          "_tpl": "62811f828193841aca4a45c3",
          "parentId": "1e42e0bafcceddf406fd343f",
          "slotId": "mod_stock"
        },
        {
          "_id": "c8529ba7e7a1bc3e50a3255a",
          "_tpl": "6281204f308cb521f87a8f9b",
          "parentId": "1e42e0bafcceddf406fd343f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d5d82eaf1ef4cde087db2c43",
          "_tpl": "6281209662cba23f6c4d7a19",
          "parentId": "c8529ba7e7a1bc3e50a3255a",
          "slotId": "mod_handguard"
        },
        {
          "_id": "32db1de787190879db23ff23",
          "_tpl": "6281212a09427b40ab14e770",
          "parentId": "c8529ba7e7a1bc3e50a3255a",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "62015b0a9b4cbae3e2fa1b82",
          "_tpl": "62811fbf09427b40ab14e767",
          "parentId": "c8529ba7e7a1bc3e50a3255a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d463e57d88f2860818024d64",
          "_tpl": "628120c21d5df4475f46a337",
          "parentId": "d5d82eaf1ef4cde087db2c43",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "3ed1f901ee7f0f8a66baccfc",
          "_tpl": "628120d309427b40ab14e76d",
          "parentId": "d5d82eaf1ef4cde087db2c43",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "622d2cf0af47ccd0b1db93f8",
          "_tpl": "628120d309427b40ab14e76d",
          "parentId": "d5d82eaf1ef4cde087db2c43",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "22d2f8cdfb9ab66e1b45c178",
          "_tpl": "628120dd308cb521f87a8fa1",
          "parentId": "d5d82eaf1ef4cde087db2c43",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "14c90ae9e38367ef8b5b1a94",
          "_tpl": "5d1b5e94d7ad1a2b865a96b0",
          "parentId": "62015b0a9b4cbae3e2fa1b82",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9717f749c695fd6717a5ae35",
          "_tpl": "628121434fa03b6b6c35dc6a",
          "parentId": "62015b0a9b4cbae3e2fa1b82",
          "slotId": "mod_barrel"
        },
        {
          "_id": "647c50d7f46fa8d64e94b957",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "22d2f8cdfb9ab66e1b45c178",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "865194dd3d3e831efa96635f",
          "_tpl": "612e0d81290d254f5e6b291a",
          "parentId": "9717f749c695fd6717a5ae35",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "de7bc8ebc84938b9ad16ebbe",
          "_tpl": "63877c99e785640d436458ea",
          "parentId": "865194dd3d3e831efa96635f",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669071050100180d032b6b70",
      "Name": "Knights Slayer Of Insanity",
      "Root": "33c3973438d8958beec98890",
      "Items": [
        {
          "_id": "33c3973438d8958beec98890",
          "_tpl": "5df8ce05b11454561e39243b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2857c8e5ee228a7db596d117",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "33c3973438d8958beec98890",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "1625177ae95502c087a8bab2",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "33c3973438d8958beec98890",
          "slotId": "mod_magazine"
        },
        {
          "_id": "94a4da50af523e9b472d4702",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "33c3973438d8958beec98890",
          "slotId": "mod_stock"
        },
        {
          "_id": "7ffb6b98e9b501684984af29",
          "_tpl": "5df8e4080b92095fd441e594",
          "parentId": "33c3973438d8958beec98890",
          "slotId": "mod_reciever"
        },
        {
          "_id": "ee00b61f1aca46449353c609",
          "_tpl": "5df8e053bb49d91fb446d6a6",
          "parentId": "33c3973438d8958beec98890",
          "slotId": "mod_charge"
        },
        {
          "_id": "c0b86922f726a71e4e85856a",
          "_tpl": "5d4406a8a4b9361e4f6eb8b7",
          "parentId": "94a4da50af523e9b472d4702",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "6699992c94ab0a847514edda",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "7ffb6b98e9b501684984af29",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "edf2e98b03c5364ec787717e",
          "_tpl": "5df917564a9f347bc92edca3",
          "parentId": "7ffb6b98e9b501684984af29",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a931fb4cdf00cfff53245b55",
          "_tpl": "5f6336bbda967c74a42e9932",
          "parentId": "7ffb6b98e9b501684984af29",
          "slotId": "mod_handguard"
        },
        {
          "_id": "9972aa3777281c2051945d29",
          "_tpl": "5dfa3d7ac41b2312ea33362a",
          "parentId": "7ffb6b98e9b501684984af29",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4c34b917d7b7c95a1acf66d0",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "edf2e98b03c5364ec787717e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0ae901f55501ab32de0798e5",
          "_tpl": "5dfa3d45dfc58d14537c20b0",
          "parentId": "edf2e98b03c5364ec787717e",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "4157d919a99d5c16856c2dc0",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "a931fb4cdf00cfff53245b55",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "fa58527c2e8effc188533576",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "4c34b917d7b7c95a1acf66d0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "75be5ee8db4257172f33d1c0",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "4157d919a99d5c16856c2dc0",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669071210100180d03786a67",
      "Name": "Remorse",
      "Root": "c0b97501da201c79dd81afde",
      "Items": [
        {
          "_id": "c0b97501da201c79dd81afde",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "04fb6feb0be8dfe39bb77e23",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "260339c8ae426d437ff7a6da",
          "_tpl": "5f633f791b231926f2329f13",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8b34655e76dc7e7ca3798d20",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "297dbe6990d95a7b12e57e26",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_reciever"
        },
        {
          "_id": "33df08052abfa53884b0b797",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e903720246b3f58025b09c2a",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_stock"
        },
        {
          "_id": "04f83bba93490ff74063094d",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9b973e1608521d55da81357b",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "c0b97501da201c79dd81afde",
          "slotId": "mod_charge"
        },
        {
          "_id": "e5cb220269e64b6b52937759",
          "_tpl": "5c17664f2e2216398b5a7e3c",
          "parentId": "04fb6feb0be8dfe39bb77e23",
          "slotId": "mod_handguard"
        },
        {
          "_id": "19a91ce68a0ab4cf9b5b609b",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "297dbe6990d95a7b12e57e26",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "98af05112669ea56bd5ef1fd",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "e5cb220269e64b6b52937759",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "486e4c087cc56f383e94c7a2",
          "_tpl": "5a9d6d00a2750c5c985b5305",
          "parentId": "e5cb220269e64b6b52937759",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "f18bc21b12e5e3cf3c8097bc",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "98af05112669ea56bd5ef1fd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2815ef0bf78048ea69ee3384",
          "_tpl": "5b07dd285acfc4001754240d",
          "parentId": "486e4c087cc56f383e94c7a2",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690712c0100180d0312e71f",
      "Name": "Shockwave",
      "Root": "bd9c8f785de8f9a4e6d3ff09",
      "Items": [
        {
          "_id": "bd9c8f785de8f9a4e6d3ff09",
          "_tpl": "5a0ec13bfcdbcb00165aa685",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ea84e3428baf53c8987a584e",
          "_tpl": "5d4aab30a4b9365435358c55",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "d9276331e6eae618c2f9208c",
          "_tpl": "5f633f68f5750b524b45f112",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f73c2b12c93c23913430a2e3",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "51310503d22cd0fcde23b8c2",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_reciever"
        },
        {
          "_id": "42f72ae8b9b66ad4457e4812",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7c1f2084c52847a7667b17f7",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_stock"
        },
        {
          "_id": "605e93e88d272363fc42c72b",
          "_tpl": "5cfe8010d7ad1a59283b14c6",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_magazine"
        },
        {
          "_id": "89bfab44baa0cef8451e6e0c",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "bd9c8f785de8f9a4e6d3ff09",
          "slotId": "mod_charge"
        },
        {
          "_id": "96b40cca1daf59834b740b0f",
          "_tpl": "5a9d6d00a2750c5c985b5305",
          "parentId": "ea84e3428baf53c8987a584e",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "f0168faf9c2e59979eed359d",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "ea84e3428baf53c8987a584e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "dce41f6061951be577ba1257",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "51310503d22cd0fcde23b8c2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "848b26b1c6571885f825005e",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "96b40cca1daf59834b740b0f",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "6532b25a9a2850fc4e7897f6",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "f0168faf9c2e59979eed359d",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6690713a0100180d03ad5fcc",
      "Name": "Danger Close",
      "Root": "9e0683b1c84dfa7437e46e62",
      "Items": [
        {
          "_id": "9e0683b1c84dfa7437e46e62",
          "_tpl": "5dcbd56fdbd3d91b3e5468d5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "03df026e30e9b2f31739a871",
          "_tpl": "5dcbd6dddbd3d91b3e5468de",
          "parentId": "9e0683b1c84dfa7437e46e62",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "58dc7a541de14517e46596c1",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "9e0683b1c84dfa7437e46e62",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4286b5f74bc32c0a318a57dc",
          "_tpl": "5dcbd6b46ec07c0c4347a564",
          "parentId": "9e0683b1c84dfa7437e46e62",
          "slotId": "mod_handguard"
        },
        {
          "_id": "19b39bdc3b3463c0a6c994ad",
          "_tpl": "5dcbe9431e1f4616d354987e",
          "parentId": "9e0683b1c84dfa7437e46e62",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fc12d98c2e836d39223c2e93",
          "_tpl": "5a37ca54c4a282000d72296a",
          "parentId": "9e0683b1c84dfa7437e46e62",
          "slotId": "mod_scope"
        },
        {
          "_id": "05da1df744124893243959c6",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "4286b5f74bc32c0a318a57dc",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "a5f7ce1dfe0454a9dce6602f",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "4286b5f74bc32c0a318a57dc",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "64c86372230283d3688d2b23",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "19b39bdc3b3463c0a6c994ad",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2f2f56afb9727fb0b8063165",
          "_tpl": "6567e7681265c8a131069b0f",
          "parentId": "fc12d98c2e836d39223c2e93",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d8ff89c9e1e4ee893fe347a1",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "05da1df744124893243959c6",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4276b18b53e0fd85c98875ac",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "a5f7ce1dfe0454a9dce6602f",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "74a918fb4523a697fa600dbf",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "64c86372230283d3688d2b23",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669071490100180d037fb453",
      "Name": "Annihilation Of Regret",
      "Root": "eaa3d09a2c664595950eab74",
      "Items": [
        {
          "_id": "eaa3d09a2c664595950eab74",
          "_tpl": "64ca3d3954fc657e230529cc",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "fullauto"
            }
          }
        },
        {
          "_id": "f805fe4643fbb781c005bb99",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "d80bbfa7b1eadda019429644",
          "_tpl": "646372518610c40fc20204e8",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_magazine"
        },
        {
          "_id": "5b871caa8a6cda9bce12b103",
          "_tpl": "6492d7847363b8a52206bc52",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_stock"
        },
        {
          "_id": "161243b61533b123dd2a2723",
          "_tpl": "64639a9aab86f8fd4300146c",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fe0f2f0950c06d4ead77f27e",
          "_tpl": "6491c6f6ef312a876705191b",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e3bdb1a9b9f71db96ff86a04",
          "_tpl": "6492fb8253acae0af00a29b6",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d1195196ae9e50ab7fc4f830",
          "_tpl": "638db77630c4240f9e06f8b6",
          "parentId": "eaa3d09a2c664595950eab74",
          "slotId": "mod_scope"
        },
        {
          "_id": "be3291ca9e6f158763b91f9c",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "5b871caa8a6cda9bce12b103",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "8c6eb020d848936867813722",
          "_tpl": "5649ade84bdc2d1b2b8b4587",
          "parentId": "5b871caa8a6cda9bce12b103",
          "slotId": "mod_pistolgrip_000"
        },
        {
          "_id": "c9dae70fb9445b4211156877",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "fe0f2f0950c06d4ead77f27e",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "de5f22c8943aa98b21c344ae",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "fe0f2f0950c06d4ead77f27e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "071a4bc956c63ec81455bf52",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "d1195196ae9e50ab7fc4f830",
          "slotId": "mod_scope"
        },
        {
          "_id": "528017d2da83ba0e046299ad",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "071a4bc956c63ec81455bf52",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669071740100180d03724ac0",
      "Name": "Peacemaker",
      "Root": "8392d7148fd7cb29ae7e8e92",
      "Items": [
        {
          "_id": "8392d7148fd7cb29ae7e8e92",
          "_tpl": "5a367e5dc4a282000e49738f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7c3701ffa63e941ecd5d1600",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "2876946acfb6ccf718f5db05",
          "_tpl": "65293c7a17e14363030ad308",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8708f925017bac0c57e5746f",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_stock"
        },
        {
          "_id": "e1ae86d79af1bc3963653c1f",
          "_tpl": "5a329052c4a28200741e22d3",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_handguard"
        },
        {
          "_id": "00eda871d3b14a34d29fb97f",
          "_tpl": "5a34fae7c4a2826c6e06d760",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_barrel"
        },
        {
          "_id": "37bb722b34b2d403ab925af8",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "8392d7148fd7cb29ae7e8e92",
          "slotId": "mod_scope"
        },
        {
          "_id": "e89df07b8231da5c0b7d8cc5",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "8708f925017bac0c57e5746f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "6c3532e6ff71b4cc71eb12e5",
          "_tpl": "5c0102b20db834001d23eebc",
          "parentId": "e1ae86d79af1bc3963653c1f",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c144aa1dbc307599b74309a7",
          "_tpl": "5c0102aa0db834001b734ba1",
          "parentId": "e1ae86d79af1bc3963653c1f",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "8b814cf35176357232dcd12f",
          "_tpl": "5a34fd2bc4a282329a73b4c5",
          "parentId": "00eda871d3b14a34d29fb97f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "078c2ceb126d2388af5df3e0",
          "_tpl": "5a34fbadc4a28200741e230a",
          "parentId": "00eda871d3b14a34d29fb97f",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "0e84ea5619c9262c5a69d76e",
          "_tpl": "618ba27d9008e4636a67f61d",
          "parentId": "37bb722b34b2d403ab925af8",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "869908c412471382d73a53b5",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "e89df07b8231da5c0b7d8cc5",
          "slotId": "mod_stock"
        },
        {
          "_id": "a304fbaa41ba838b2d8de1f2",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "6c3532e6ff71b4cc71eb12e5",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "849ba6028073b89975dad4e7",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "c144aa1dbc307599b74309a7",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b56eea10f169e72d8c4e3109",
          "_tpl": "5a34fe59c4a282000b1521a2",
          "parentId": "8b814cf35176357232dcd12f",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669071820100180d0395aef9",
      "Name": "Crier Of Grace",
      "Root": "aa41a1a279f36bed53b6c0cf",
      "Items": [
        {
          "_id": "aa41a1a279f36bed53b6c0cf",
          "_tpl": "5aafa857e5b5b00018480968",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1a0e9ef844fca01acdad5657",
          "_tpl": "5addccf45acfc400185c2989",
          "parentId": "aa41a1a279f36bed53b6c0cf",
          "slotId": "mod_magazine"
        },
        {
          "_id": "dd88cecb26ae19373462b7df",
          "_tpl": "5ab372a310e891001717f0d8",
          "parentId": "aa41a1a279f36bed53b6c0cf",
          "slotId": "mod_stock"
        },
        {
          "_id": "006b307dba1b2cb81a39c628",
          "_tpl": "5aaf9d53e5b5b00015042a52",
          "parentId": "aa41a1a279f36bed53b6c0cf",
          "slotId": "mod_barrel"
        },
        {
          "_id": "aa6f9f3a675734850aae04ad",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "dd88cecb26ae19373462b7df",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "254082187a36a17bf2ba2396",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "dd88cecb26ae19373462b7df",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3f1a4233bd22888017a565b8",
          "_tpl": "57fd23e32459772d0805bcf1",
          "parentId": "dd88cecb26ae19373462b7df",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "c0d87302088e4072ca0132bf",
          "_tpl": "6113cce3d92c473c770200c7",
          "parentId": "dd88cecb26ae19373462b7df",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "fdd962983e70737586b4f146",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "dd88cecb26ae19373462b7df",
          "slotId": "mod_stock"
        },
        {
          "_id": "ae937b13b4bb1c533a981fe7",
          "_tpl": "5ab3afb2d8ce87001660304d",
          "parentId": "006b307dba1b2cb81a39c628",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "97a5160e2545998ad251f428",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "254082187a36a17bf2ba2396",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7624c530192e8bcb9aa8fedc",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "fdd962983e70737586b4f146",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "eb703049bbde08b22e2da7ab",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "7624c530192e8bcb9aa8fedc",
          "slotId": "mod_stock"
        },
        {
          "_id": "9db2ca01a6c0f2eeef2e3111",
          "_tpl": "59bffc1f86f77435b128b872",
          "parentId": "ae937b13b4bb1c533a981fe7",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ac8acf7515fcd5035fa3d07f",
          "_tpl": "59bffbb386f77435b379b9c2",
          "parentId": "9db2ca01a6c0f2eeef2e3111",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669071940100180d03245d85",
      "Name": "TANGO SUCKA",
      "Root": "9052c8de26f3ba693bcc19cc",
      "Items": [
        {
          "_id": "9052c8de26f3ba693bcc19cc",
          "_tpl": "6513ef33e06849f06c0957ca",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "fullauto"
            }
          }
        },
        {
          "_id": "94073b760a0fe0e57e3a7f95",
          "_tpl": "6513f0a194c72326990a3868",
          "parentId": "9052c8de26f3ba693bcc19cc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "776982f11c915e46414afcb1",
          "_tpl": "6513f1798cb24472490ee331",
          "parentId": "9052c8de26f3ba693bcc19cc",
          "slotId": "mod_stock"
        },
        {
          "_id": "460e8efe8304ddf3119bc5f5",
          "_tpl": "6513eff1e06849f06c0957d4",
          "parentId": "9052c8de26f3ba693bcc19cc",
          "slotId": "mod_barrel"
        },
        {
          "_id": "34b997eeb59921ba54e67c82",
          "_tpl": "6513f05a94c72326990a3866",
          "parentId": "9052c8de26f3ba693bcc19cc",
          "slotId": "mod_handguard"
        },
        {
          "_id": "bd9adbfabb2f621a740bc317",
          "_tpl": "6513f153e63f29908d0ffaba",
          "parentId": "9052c8de26f3ba693bcc19cc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "200b64397269a2ba28aae3c1",
          "_tpl": "6513f13a8cb24472490ee32f",
          "parentId": "776982f11c915e46414afcb1",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "12adc0303c09e5414578b92f",
          "_tpl": "6513f037e06849f06c0957d7",
          "parentId": "460e8efe8304ddf3119bc5f5",
          "slotId": "mod_bipod"
        },
        {
          "_id": "31acf8471e033a5be60bec65",
          "_tpl": "6513f0f5e63f29908d0ffab8",
          "parentId": "460e8efe8304ddf3119bc5f5",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669071a20100180d03a855e4",
      "Name": "Damnation",
      "Root": "5a6473b956b4013bd332ceca",
      "Items": [
        {
          "_id": "5a6473b956b4013bd332ceca",
          "_tpl": "5c46fbd72e2216398b5a8c9c",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0aac0d5e8d70a18b4e07acf1",
          "_tpl": "6516b129609aaf354b34b3a8",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7d76b034b34bb53c297da7ff",
          "_tpl": "5c88f24b2e22160bc12c69a6",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_magazine"
        },
        {
          "_id": "34b7fb479daa5950455fb1c8",
          "_tpl": "6197b229af1f5202c57a9bea",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_stock"
        },
        {
          "_id": "88962a7f8aaf9dff88b924ae",
          "_tpl": "5c471cb32e221602b177afaa",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_barrel"
        },
        {
          "_id": "4aaffa38f22dbe3f4c91eae9",
          "_tpl": "5dfcd0e547101c39625f66f9",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e9e2ca3ae9e9d352166476db",
          "_tpl": "5dfce88fe9dc277128008b2e",
          "parentId": "5a6473b956b4013bd332ceca",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d320aa28f9823b7841e90f14",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "0aac0d5e8d70a18b4e07acf1",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "42fb0db0fd03075c6a08b84a",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "34b7fb479daa5950455fb1c8",
          "slotId": "mod_stock"
        },
        {
          "_id": "baba8bb069bcaf108f1b15a2",
          "_tpl": "5c471bfc2e221602b21d4e17",
          "parentId": "88962a7f8aaf9dff88b924ae",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ec8d724fc4697ed9e6e321ec",
          "_tpl": "5c471c842e221615214259b5",
          "parentId": "88962a7f8aaf9dff88b924ae",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "b822b529391971932fd439c1",
          "_tpl": "5e569a132642e66b0b68015c",
          "parentId": "88962a7f8aaf9dff88b924ae",
          "slotId": "mod_mount"
        },
        {
          "_id": "165a08bd568a9b0bd4852b38",
          "_tpl": "5a9d6d00a2750c5c985b5305",
          "parentId": "4aaffa38f22dbe3f4c91eae9",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "3132274764a3974199853f1c",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "4aaffa38f22dbe3f4c91eae9",
          "slotId": "mod_scope"
        },
        {
          "_id": "6662a9ffc103c8806a3e4c18",
          "_tpl": "59e0bed186f774156f04ce84",
          "parentId": "4aaffa38f22dbe3f4c91eae9",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "199d11201e11e9b416ff6be8",
          "_tpl": "5d44069ca4b9361ebd26fc37",
          "parentId": "42fb0db0fd03075c6a08b84a",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "d05e2998bb170c568326d133",
          "_tpl": "5c471ba12e221602b3137d76",
          "parentId": "baba8bb069bcaf108f1b15a2",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "80b491e8ded8f576d97f662d",
          "_tpl": "5e01e9e273d8eb11426f5bc3",
          "parentId": "baba8bb069bcaf108f1b15a2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "582002b671286f316862da54",
          "_tpl": "5e01ea19e9dc277128008c0b",
          "parentId": "80b491e8ded8f576d97f662d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "fee014979bd66dd2b8a8e9e3",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "165a08bd568a9b0bd4852b38",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f5ff4a43ef0cacabc66f6216",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "3132274764a3974199853f1c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8a7ea790ac942e601cb145ca",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "6662a9ffc103c8806a3e4c18",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669071bf0100180d03539444",
      "Name": "Echoes Of The Past",
      "Root": "34c1d14a5773da3008f7962c",
      "Items": [
        {
          "_id": "34c1d14a5773da3008f7962c",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9a5f3e07e81729eaafcf4d78",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "19a5ee2e285fa7c00559e6e0",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e66cf12a3a7e6bd9427849e1",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "9d825de738682df1900972d8",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7f17b0db416a50e53eab47ef",
          "_tpl": "628a7b23b0f75035732dd565",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c2c2111dd98ed49e23371dc6",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "2dffb49b2c452e27aec782af",
          "_tpl": "59fafc5086f7740dbe19f6c3",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8ad768976cfec4f60b8c75f7",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "34c1d14a5773da3008f7962c",
          "slotId": "mod_charge"
        },
        {
          "_id": "3828424b6a4a663853f3ace5",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "9a5f3e07e81729eaafcf4d78",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "d9f57bd636e53a72842e7085",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "9a5f3e07e81729eaafcf4d78",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "a57352f5aaf708fba1d0fa65",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "19a5ee2e285fa7c00559e6e0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "6135e898688274e9d0e3e430",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "9d825de738682df1900972d8",
          "slotId": "mod_scope"
        },
        {
          "_id": "0136514eee49d10699075779",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "3828424b6a4a663853f3ace5",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "8a5f9c82e81ce3a499fea7af",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "d9f57bd636e53a72842e7085",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d378553e5ef1b52f4099ff53",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "6135e898688274e9d0e3e430",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669071d00100180d03cb7251",
      "Name": "Labs Annihilator",
      "Root": "63973ba9561ef91fa6b75805",
      "Items": [
        {
          "_id": "63973ba9561ef91fa6b75805",
          "_tpl": "5fc3f2d5900b1d5091531e57",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "755fc8555b96791958e57e5d",
          "_tpl": "5a718f958dc32e00094b97e7",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_magazine"
        },
        {
          "_id": "361774ee9f6a5555398b4954",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c5d52e515443c24bf0860103",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4bf27c5c45d330f52f90fe37",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_scope"
        },
        {
          "_id": "81f1146f5329a1f20735418d",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_stock"
        },
        {
          "_id": "c4c41e77505a15906db26096",
          "_tpl": "5fbbc366ca32ed67276c1557",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fe1ba4ee34d88ddbe50d4ab3",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_mount"
        },
        {
          "_id": "f1dc890ec2730d7a9b7b1e2d",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "8e692aafcc2f93acb46e00d2",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "63973ba9561ef91fa6b75805",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "7b391120e483111c1652afc0",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "4bf27c5c45d330f52f90fe37",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "662cd7e084946f0cc6c36d6e",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "81f1146f5329a1f20735418d",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "208fdae3b7b1538e010e3eee",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "c4c41e77505a15906db26096",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "cfc68f85b8e12c9026c16794",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "fe1ba4ee34d88ddbe50d4ab3",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "a4395908edf4d14484be0ee0",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "8e692aafcc2f93acb46e00d2",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a31957a379a724a697881de6",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "662cd7e084946f0cc6c36d6e",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "1021f8ad0ab58f88fb5a7d1d",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "a31957a379a724a697881de6",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669071e90100180d03cae8ec",
      "Name": "The Storm",
      "Root": "b83f07fedd1c602bd38c9988",
      "Items": [
        {
          "_id": "b83f07fedd1c602bd38c9988",
          "_tpl": "6499849fc93611967b034949",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f6c39d6d3c225a571edb15cd",
          "_tpl": "649ec107961514b22506b10c",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "92daf758aa1dfcd1fca83be4",
          "_tpl": "64c196ad26a15b84aa07132f",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0387f63d1a9c0ea14c0398fc",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "eba013db8ae6a13ba1e7baa5",
          "_tpl": "649ec2f3961514b22506b111",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_reciever"
        },
        {
          "_id": "cbecf6c46bec900591805bf8",
          "_tpl": "649ec87d8007560a9001ab36",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "2afcc5dda4d9a85ed012dad0",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0b6dedcda830274d9a394303",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_charge"
        },
        {
          "_id": "795f269ff86951e61852cf58",
          "_tpl": "649ec127c93611967b034957",
          "parentId": "b83f07fedd1c602bd38c9988",
          "slotId": "mod_handguard"
        },
        {
          "_id": "21093891f3e3d879903b0d94",
          "_tpl": "57adff4f24597737f373b6e6",
          "parentId": "eba013db8ae6a13ba1e7baa5",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "edcb274446a86f3860628a33",
          "_tpl": "649ec2da59cbb3c813042dca",
          "parentId": "eba013db8ae6a13ba1e7baa5",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5895f8dc3d894b92516fcd40",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "cbecf6c46bec900591805bf8",
          "slotId": "mod_stock"
        },
        {
          "_id": "09b624be5567c09b5a95725c",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "795f269ff86951e61852cf58",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "98267492897ff6cf33ea05a1",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "795f269ff86951e61852cf58",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d5e82de70d2350bcfac4a7f2",
          "_tpl": "649ec2cec93611967b03495e",
          "parentId": "edcb274446a86f3860628a33",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f43f0e9eda61132a1ebf2f1d",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "5895f8dc3d894b92516fcd40",
          "slotId": "mod_stock"
        },
        {
          "_id": "5824d2cf9af44f20abf05a8b",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "09b624be5567c09b5a95725c",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669072010100180d039efff2",
      "Name": "God Save The King",
      "Root": "de46f9e29266dfd9573f6d9e",
      "Items": [
        {
          "_id": "de46f9e29266dfd9573f6d9e",
          "_tpl": "5beed0f50db834001c062b12",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2b63c64e71692f7074690a21",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c28409a65b6c7eb00ae032dd",
          "_tpl": "5beec91a0db834001961942d",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b8c22a84519c40445268557a",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "63234d02b39a6a9b54cc6321",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_charge"
        },
        {
          "_id": "6ac34d61b8e577079915d8ee",
          "_tpl": "649ec87d8007560a9001ab36",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "7dcc3ad6789fc7d8cf8db9d9",
          "_tpl": "5beec3e30db8340019619424",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "8d9e86e65ee8bf4a97871d02",
          "_tpl": "5beec2820db834001b095426",
          "parentId": "de46f9e29266dfd9573f6d9e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "9e7950ab42bb2674d4026610",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "c28409a65b6c7eb00ae032dd",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "623af2ca4dee9e2f4138fbb9",
          "_tpl": "5beec9450db83400970084fd",
          "parentId": "c28409a65b6c7eb00ae032dd",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8f461b238df97b4dee842086",
          "_tpl": "5d44069ca4b9361ebd26fc37",
          "parentId": "6ac34d61b8e577079915d8ee",
          "slotId": "mod_stock"
        },
        {
          "_id": "af550667d565c70c2776ba92",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "7dcc3ad6789fc7d8cf8db9d9",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "014f27c864392f48ad5b6da6",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "7dcc3ad6789fc7d8cf8db9d9",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "8e840daad31f6712328ceaeb",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "7dcc3ad6789fc7d8cf8db9d9",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "ce76f96c680beeba90e4891d",
          "_tpl": "5cc9a96cd7f00c011c04e04a",
          "parentId": "8d9e86e65ee8bf4a97871d02",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "77cbe5cc878d3a40c5d91a83",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "9e7950ab42bb2674d4026610",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e44efc45a40af2724357a438",
          "_tpl": "5bf3f59f0db834001a6fa060",
          "parentId": "623af2ca4dee9e2f4138fbb9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "788b5b5e8e3c6f0b8231f9dd",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "014f27c864392f48ad5b6da6",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690720e0100180d0344fb9d",
      "Name": "Peak Brutality",
      "Root": "026f8ac1760036a2c8c8b893",
      "Items": [
        {
          "_id": "026f8ac1760036a2c8c8b893",
          "_tpl": "65290f395ae2ae97b80fdf2d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "29f6c454f9e85a48d2963018",
          "_tpl": "652911675ae2ae97b80fdf3c",
          "parentId": "026f8ac1760036a2c8c8b893",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "baacca9d595f9b9bfe61f2af",
          "_tpl": "65293c38fc460e50a509cb25",
          "parentId": "026f8ac1760036a2c8c8b893",
          "slotId": "mod_magazine"
        },
        {
          "_id": "53329781e45a449111ceb9e4",
          "_tpl": "6529119424cbe3c74a05e5bb",
          "parentId": "026f8ac1760036a2c8c8b893",
          "slotId": "mod_reciever"
        },
        {
          "_id": "609eada0e2e8fb83917dd854",
          "_tpl": "6529348224cbe3c74a05e5c4",
          "parentId": "026f8ac1760036a2c8c8b893",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "89a366c3ff09f9af97c83d59",
          "_tpl": "6529109524cbe3c74a05e5b7",
          "parentId": "026f8ac1760036a2c8c8b893",
          "slotId": "mod_charge"
        },
        {
          "_id": "7d0ffd32644fe4bd88dc94a4",
          "_tpl": "6567e751a715f85433025998",
          "parentId": "53329781e45a449111ceb9e4",
          "slotId": "mod_scope"
        },
        {
          "_id": "0ef3c19ad1fb9eaf751638af",
          "_tpl": "652910565ae2ae97b80fdf35",
          "parentId": "53329781e45a449111ceb9e4",
          "slotId": "mod_barrel"
        },
        {
          "_id": "80853d613f99996e415c9479",
          "_tpl": "652910ef50dc782999054b97",
          "parentId": "53329781e45a449111ceb9e4",
          "slotId": "mod_handguard"
        },
        {
          "_id": "c4423d9db413764ed9396e1f",
          "_tpl": "6529366450dc782999054ba0",
          "parentId": "609eada0e2e8fb83917dd854",
          "slotId": "mod_stock"
        },
        {
          "_id": "48b61eb359d9b59632cc935d",
          "_tpl": "6567e7681265c8a131069b0f",
          "parentId": "7d0ffd32644fe4bd88dc94a4",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4ec2eb9378857e1ae5b28a98",
          "_tpl": "6529113b5ae2ae97b80fdf39",
          "parentId": "0ef3c19ad1fb9eaf751638af",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c50bc822f70f671537d6ff97",
          "_tpl": "652910bc24cbe3c74a05e5b9",
          "parentId": "0ef3c19ad1fb9eaf751638af",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "c18b205d60e5ef23a6d8e98e",
          "_tpl": "652911e650dc782999054b9d",
          "parentId": "4ec2eb9378857e1ae5b28a98",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "100cad6bbba6433933e34d04",
          "_tpl": "6529370c405a5f51dd023db8",
          "parentId": "c4423d9db413764ed9396e1f",
          "slotId": "mod_stock_000"
        }
      ]
    },
    {
      "Id": "669072220100180d035aabcb",
      "Name": "Factory Chaos",
      "Root": "f48d45106a687c6872a98af1",
      "Items": [
        {
          "_id": "f48d45106a687c6872a98af1",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "bf35b3aba7c2aef6c1a23222",
          "_tpl": "5b237e425acfc4771e1be0b6",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "410565803da6f6cb580e3a70",
          "_tpl": "5f633f68f5750b524b45f112",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1a73374c12a896e1e16f9203",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "17223710512fa5b1cea3a1d2",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_reciever"
        },
        {
          "_id": "62f405d10e86c4dba32fd830",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7e4500f11fa4887bbebf3175",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_stock"
        },
        {
          "_id": "49c106726ef2aa1eb5f5bceb",
          "_tpl": "5c6175362e221600133e3b94",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "ba48cffd416d95277f5e34ed",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "f48d45106a687c6872a98af1",
          "slotId": "mod_charge"
        },
        {
          "_id": "24debb06f7ce6cf6f23b0297",
          "_tpl": "5b4736a986f774040571e998",
          "parentId": "bf35b3aba7c2aef6c1a23222",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "e2a6bff0eb7097fde32c36c5",
          "_tpl": "5b4736b986f77405cb415c10",
          "parentId": "bf35b3aba7c2aef6c1a23222",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "7d4a23d0a66ac6f322b173a5",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "17223710512fa5b1cea3a1d2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9a62836f02bd5ad2474e5cd5",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "24debb06f7ce6cf6f23b0297",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "342aa4f5a689019081442fe0",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "e2a6bff0eb7097fde32c36c5",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669072300100180d0398bdf9",
      "Name": "Hopes End",
      "Root": "aba10ba12ca3599984c81442",
      "Items": [
        {
          "_id": "aba10ba12ca3599984c81442",
          "_tpl": "5ac66cb05acfc40198510a10",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0ebefcce61a2b37fe9eb7a4c",
          "_tpl": "5b237e425acfc4771e1be0b6",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a1f8c4e1f5df4f6d80cd5e69",
          "_tpl": "5f633f791b231926f2329f13",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "359844bf1e4309f4801a3327",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "5dce56775bd7647bd95ce1fd",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7508fd7201e182b3a76dfd9f",
          "_tpl": "5ac72e475acfc400180ae6fe",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "24f83343fb867944222a9352",
          "_tpl": "649ec87d8007560a9001ab36",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_stock"
        },
        {
          "_id": "954616096fe1a3bfb74424ff",
          "_tpl": "5c0548ae0db834001966a3c2",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d0d547e25e6b38fce75f6a6d",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "aba10ba12ca3599984c81442",
          "slotId": "mod_charge"
        },
        {
          "_id": "ee839d7b6f6bca354b0d7b81",
          "_tpl": "5b4736a986f774040571e998",
          "parentId": "0ebefcce61a2b37fe9eb7a4c",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "506850abffbee622ec768f65",
          "_tpl": "5b4736b986f77405cb415c10",
          "parentId": "0ebefcce61a2b37fe9eb7a4c",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "2a419928258e9d8571651384",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "5dce56775bd7647bd95ce1fd",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "32fd51e139697de7922a4df5",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "24f83343fb867944222a9352",
          "slotId": "mod_stock"
        },
        {
          "_id": "5066722636e3e7681b8552be",
          "_tpl": "6272379924e29f06af4d5ecb",
          "parentId": "ee839d7b6f6bca354b0d7b81",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "065c9003c047c169b7111ca2",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "506850abffbee622ec768f65",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "00e6784024203dc697699814",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "2a419928258e9d8571651384",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a25fc544cb1162524682fdc4",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "32fd51e139697de7922a4df5",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669072460100180d03d3efe4",
      "Name": "The Chancellor",
      "Root": "2676ed563dcb01041b2830a0",
      "Items": [
        {
          "_id": "2676ed563dcb01041b2830a0",
          "_tpl": "628b9c37a733087d0d7fe84b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b21b143815ce7356e1511e24",
          "_tpl": "628b8d83717774443b15e248",
          "parentId": "2676ed563dcb01041b2830a0",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "58d644797e9dbc5938026085",
          "_tpl": "5f633f791b231926f2329f13",
          "parentId": "2676ed563dcb01041b2830a0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "dcc36d99897bf56bb694f6a9",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "2676ed563dcb01041b2830a0",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "a6fa5b1340ac222a3dc8c301",
          "_tpl": "628b9a40717774443b15e9f2",
          "parentId": "2676ed563dcb01041b2830a0",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "758157f48202a70f0590ff41",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "2676ed563dcb01041b2830a0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8b51895d0addcff3cbde708d",
          "_tpl": "628b916469015a4e1711ed8d",
          "parentId": "b21b143815ce7356e1511e24",
          "slotId": "mod_handguard"
        },
        {
          "_id": "65d4944e90d215c972058bff",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "a6fa5b1340ac222a3dc8c301",
          "slotId": "mod_stock"
        },
        {
          "_id": "b7ffeb137a13d800e09e17e6",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "8b51895d0addcff3cbde708d",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "136b514bec049e7fdbb92e8d",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "8b51895d0addcff3cbde708d",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "9329413dcb0e7a69583af074",
          "_tpl": "628b9be6cff66b70c002b14c",
          "parentId": "8b51895d0addcff3cbde708d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "96541c872e3d4d2cb3fe2b7a",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "b7ffeb137a13d800e09e17e6",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "321bc5e52fc25ca2ce58a6dc",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "136b514bec049e7fdbb92e8d",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f2fa0020a70c15b8c68ce665",
          "_tpl": "628b9471078f94059a4b9bfb",
          "parentId": "9329413dcb0e7a69583af074",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "659000bf320e9b4d37f9169c",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "9329413dcb0e7a69583af074",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6b2d825b8a9942a1fd5174e7",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "65d4944e90d215c972058bff",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669072600100180d03430fc5",
      "Name": "Do You Like Waffles",
      "Root": "6e9f25a900c2f0c4410e8e36",
      "Items": [
        {
          "_id": "6e9f25a900c2f0c4410e8e36",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "58d01ac2966c624cd4aee908",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "243674cf0adc553675ba306d",
          "_tpl": "615d8f5dd92c473c770212ef",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "07fee3089a5c86c40582ca60",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "3c9ca59bdb8ec8b270cc7831",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_reciever"
        },
        {
          "_id": "4fa63123a5d9634ea7bc715e",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "03d48420f5d75f9ec7d140d6",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_stock"
        },
        {
          "_id": "c487ebd21c66fb87ddac6a1b",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0ef05df2e70f468b2ba94f42",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "6e9f25a900c2f0c4410e8e36",
          "slotId": "mod_charge"
        },
        {
          "_id": "4d6011af5b5f18fd7a2b50c2",
          "_tpl": "5cf4e3f3d7f00c06595bc7f0",
          "parentId": "58d01ac2966c624cd4aee908",
          "slotId": "mod_handguard"
        },
        {
          "_id": "567621c27678997de1f67669",
          "_tpl": "615d8f8567085e45ef1409ca",
          "parentId": "243674cf0adc553675ba306d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "de582ca71b5c285d4966e607",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "3c9ca59bdb8ec8b270cc7831",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7b887e294de2353d8c60a6d0",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "4d6011af5b5f18fd7a2b50c2",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "5d777bc7691d6604e31da148",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "4d6011af5b5f18fd7a2b50c2",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690727e0100180d033adc03",
      "Name": "Let Them Run",
      "Root": "1afbe6855fc03e65c8d6a1c6",
      "Items": [
        {
          "_id": "1afbe6855fc03e65c8d6a1c6",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5f26e2b38b84cd4cd5566a27",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "1afbe6855fc03e65c8d6a1c6",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "42bef4d6f00313c14f961759",
          "_tpl": "544a37c44bdc2d25388b4567",
          "parentId": "1afbe6855fc03e65c8d6a1c6",
          "slotId": "mod_magazine"
        },
        {
          "_id": "485b901e81aa64c3590f3c08",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "1afbe6855fc03e65c8d6a1c6",
          "slotId": "mod_reciever"
        },
        {
          "_id": "891947cde664142b3b16cfd7",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "1afbe6855fc03e65c8d6a1c6",
          "slotId": "mod_stock"
        },
        {
          "_id": "ace99c0a9340e8a7bc4e0079",
          "_tpl": "55d44fd14bdc2d962f8b456e",
          "parentId": "1afbe6855fc03e65c8d6a1c6",
          "slotId": "mod_charge"
        },
        {
          "_id": "4383f81ca6fb5b6e37309b2c",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "485b901e81aa64c3590f3c08",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "df9c92cbce46d8871782e4bc",
          "_tpl": "5d440b93a4b9364276578d4b",
          "parentId": "485b901e81aa64c3590f3c08",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a9829194de07d9297ce21468",
          "_tpl": "5c78f2492e221600114c9f04",
          "parentId": "485b901e81aa64c3590f3c08",
          "slotId": "mod_handguard"
        },
        {
          "_id": "2f0ec99b81f21398c360fd4f",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "891947cde664142b3b16cfd7",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "e06c966e160d7786f128090d",
          "_tpl": "609269c3b0e443224b421cc1",
          "parentId": "df9c92cbce46d8871782e4bc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "268b4ba8f38df75d5b5ca236",
          "_tpl": "5d00ec68d7ad1a04a067e5be",
          "parentId": "df9c92cbce46d8871782e4bc",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "6e80ab84a095b9d3d45a1ee7",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "a9829194de07d9297ce21468",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "72ef845807d4f902a2e98374",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "a9829194de07d9297ce21468",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "672aecf625d6dc0cf6d395d6",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "a9829194de07d9297ce21468",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "6e12740ee951ca5ef99424a1",
          "_tpl": "60926df0132d4d12c81fd9df",
          "parentId": "e06c966e160d7786f128090d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "69a0e2e58c7cc677713a7895",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "72ef845807d4f902a2e98374",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "26807cd07270e3283610b491",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "2f0ec99b81f21398c360fd4f",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669072900100180d039f42d0",
      "Name": "Mortality",
      "Root": "b5cb3bb90453920ce6562fca",
      "Items": [
        {
          "_id": "b5cb3bb90453920ce6562fca",
          "_tpl": "5b0bbe4e5acfc40dc528a72d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "525ec406c3718c113d38d239",
          "_tpl": "5b7d679f5acfc4001a5c4024",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6236a71ac2a2fef8a0193cba",
          "_tpl": "5b7bef9c5acfc43d102852ec",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_magazine"
        },
        {
          "_id": "ac52cafbd38267db844b99ae",
          "_tpl": "5b7bedd75acfc43d825283f9",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_handguard"
        },
        {
          "_id": "cd452c5ee8c1d322bc73e6e5",
          "_tpl": "5b7be1265acfc400161d0798",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_barrel"
        },
        {
          "_id": "4744b91ede9d358956afda8d",
          "_tpl": "5b0bc22d5acfc47a8607f085",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ad64d22467bd27d60e99b1b8",
          "_tpl": "5b099bb25acfc400186331e8",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_reciever"
        },
        {
          "_id": "baffea007cfde1d0789a0c22",
          "_tpl": "5b099bf25acfc4001637e683",
          "parentId": "b5cb3bb90453920ce6562fca",
          "slotId": "mod_stock"
        },
        {
          "_id": "39754b33cdae96b36091e2ec",
          "_tpl": "5b7be46e5acfc400170e2dcf",
          "parentId": "ac52cafbd38267db844b99ae",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "c8c00ed86e3d6582ef6d2ca2",
          "_tpl": "5b7be4575acfc400161d0832",
          "parentId": "ac52cafbd38267db844b99ae",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "4a899b8440729fa42fd62984",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "cd452c5ee8c1d322bc73e6e5",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "52e16653b6de6406d150b4a8",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "ad64d22467bd27d60e99b1b8",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "117c52234b9aa0d98caceaf9",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "baffea007cfde1d0789a0c22",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "e393b394d10a6b04dc9e14f9",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "39754b33cdae96b36091e2ec",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "6c1a8fcf8a64853b5c0d5d9a",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "c8c00ed86e3d6582ef6d2ca2",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "60ec1b55bf255d178c4d29cc",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "4a899b8440729fa42fd62984",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9a7a1a24505219435e3c1a2f",
          "_tpl": "5d44069ca4b9361ebd26fc37",
          "parentId": "117c52234b9aa0d98caceaf9",
          "slotId": "mod_stock_000"
        }
      ]
    },
    {
      "Id": "669072ba0100180d03ae4d7b",
      "Name": "Resorts Vindication",
      "Root": "776aa782e21272fb1572eeba",
      "Items": [
        {
          "_id": "776aa782e21272fb1572eeba",
          "_tpl": "55801eed4bdc2d89578b4588",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "418e66074e6d2ef929eaa766",
          "_tpl": "559ba5b34bdc2d1f1a8b4582",
          "parentId": "776aa782e21272fb1572eeba",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e29c4a5f6307e72768bf5ac0",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "776aa782e21272fb1572eeba",
          "slotId": "mod_scope"
        },
        {
          "_id": "1e81ec9e5ce664cbf87a5ecf",
          "_tpl": "56083e1b4bdc2dc8488b4572",
          "parentId": "776aa782e21272fb1572eeba",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b9e1f377406edb077ba9e117",
          "_tpl": "5c4eec9b2e2216398b5aaba2",
          "parentId": "776aa782e21272fb1572eeba",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e199bab90a9407d09d63361c",
          "_tpl": "623b2e9d11c3296b440d1638",
          "parentId": "776aa782e21272fb1572eeba",
          "slotId": "mod_stock",
          "upd": {
            "Foldable": {
              "Folded": false
            }
          }
        },
        {
          "_id": "22ab280a77e6cbfed9112007",
          "_tpl": "617151c1d92c473c770214ab",
          "parentId": "e29c4a5f6307e72768bf5ac0",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e6a719344f04ef4076c934ac",
          "_tpl": "5c4eecc32e221602b412b440",
          "parentId": "b9e1f377406edb077ba9e117",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5c6e0c65a1b2a88ac5189209",
          "_tpl": "623c3c1f37b4b31470357737",
          "parentId": "e199bab90a9407d09d63361c",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1152b6dcaa53631a65230fb3",
          "_tpl": "5947fa2486f77425b47c1a9b",
          "parentId": "e199bab90a9407d09d63361c",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "4ce7397b6c617b96a4831234",
          "_tpl": "624c29ce09cd027dff2f8cd7",
          "parentId": "e199bab90a9407d09d63361c",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "37dde18b91ef35b487ccf7bc",
          "_tpl": "5c4eecde2e221602b3140418",
          "parentId": "e6a719344f04ef4076c934ac",
          "slotId": "mod_tactical"
        },
        {
          "_id": "288a110825e66946f6cbd3d3",
          "_tpl": "623c2f4242aee3103f1c44b7",
          "parentId": "5c6e0c65a1b2a88ac5189209",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "2f9ec07bef55fdf3978e6d70",
          "_tpl": "623c2f652febb22c2777d8d7",
          "parentId": "5c6e0c65a1b2a88ac5189209",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "6402c38e8b523a01b1d74757",
          "_tpl": "61605d88ffa6e502ac5e7eeb",
          "parentId": "2f9ec07bef55fdf3978e6d70",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669072d00100180d03ac19f7",
      "Name": "The President",
      "Root": "36da5731294db0baf5a2676b",
      "Items": [
        {
          "_id": "36da5731294db0baf5a2676b",
          "_tpl": "588892092459774ac91d4b11",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0a8f185b1b6affe96b94f2bc",
          "_tpl": "5888988e24597752fe43a6fa",
          "parentId": "36da5731294db0baf5a2676b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "012fef04256530eb8b08bd69",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "36da5731294db0baf5a2676b",
          "slotId": "mod_scope"
        },
        {
          "_id": "eda38ee59826a5b600a82619",
          "_tpl": "5888945a2459774bf43ba385",
          "parentId": "36da5731294db0baf5a2676b",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a7a7d4dd4fcdb5ff9aeea17b",
          "_tpl": "6113cc78d3a39d50044c065a",
          "parentId": "36da5731294db0baf5a2676b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b8620bae32c983ce96ef90bc",
          "_tpl": "58889d0c2459775bc215d981",
          "parentId": "36da5731294db0baf5a2676b",
          "slotId": "mod_stock"
        },
        {
          "_id": "c905215d2b30aaa932f0042e",
          "_tpl": "618ba27d9008e4636a67f61d",
          "parentId": "012fef04256530eb8b08bd69",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "77ce568a2e1c67ac016db69a",
          "_tpl": "58889c7324597754281f9439",
          "parentId": "eda38ee59826a5b600a82619",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c7360e7a3b67e746b85089cf",
          "_tpl": "5888961624597754281f93f3",
          "parentId": "eda38ee59826a5b600a82619",
          "slotId": "mod_bipod"
        }
      ]
    },
    {
      "Id": "669072fd0100180d03762301",
      "Name": "The Arbiter",
      "Root": "ac1144ecaa91db77da6b48b5",
      "Items": [
        {
          "_id": "ac1144ecaa91db77da6b48b5",
          "_tpl": "5df8ce05b11454561e39243b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "462d525e0a13dc0ccb63f1ae",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "ac1144ecaa91db77da6b48b5",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "523f9b1e15e5a719bc5691be",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "ac1144ecaa91db77da6b48b5",
          "slotId": "mod_magazine"
        },
        {
          "_id": "ef8f6031e1c2d16ed2207bab",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "ac1144ecaa91db77da6b48b5",
          "slotId": "mod_stock"
        },
        {
          "_id": "61b2665c29100486ed402d93",
          "_tpl": "5df8e4080b92095fd441e594",
          "parentId": "ac1144ecaa91db77da6b48b5",
          "slotId": "mod_reciever"
        },
        {
          "_id": "80a43006d2fe265de7df4f31",
          "_tpl": "5df8e053bb49d91fb446d6a6",
          "parentId": "ac1144ecaa91db77da6b48b5",
          "slotId": "mod_charge"
        },
        {
          "_id": "a1c8de991c30fdb14307af25",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "ef8f6031e1c2d16ed2207bab",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "5405922cab5ae7ba3012ed9a",
          "_tpl": "5b2389515acfc4771e1be0c0",
          "parentId": "61b2665c29100486ed402d93",
          "slotId": "mod_scope"
        },
        {
          "_id": "58d9ac9b1af466c3f861c087",
          "_tpl": "5dfa397fb11454561e39246c",
          "parentId": "61b2665c29100486ed402d93",
          "slotId": "mod_barrel"
        },
        {
          "_id": "111a11cd84c54c2ddc27c1b5",
          "_tpl": "5df916dfbb49d91fb446d6b9",
          "parentId": "61b2665c29100486ed402d93",
          "slotId": "mod_handguard"
        },
        {
          "_id": "7bc0d367f36bafc79f54d1f3",
          "_tpl": "5dfa3d7ac41b2312ea33362a",
          "parentId": "61b2665c29100486ed402d93",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ede6513e0708a036ca4c2428",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "a1c8de991c30fdb14307af25",
          "slotId": "mod_stock"
        },
        {
          "_id": "3caa6a26081c137569bb6098",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "5405922cab5ae7ba3012ed9a",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ba0f6a1e9bc44854829ae147",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "58d9ac9b1af466c3f861c087",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f6e836c65cba83d22c3e2295",
          "_tpl": "6065dc8a132d4d12c81fd8e3",
          "parentId": "58d9ac9b1af466c3f861c087",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9800ecbcc749c093c09fc640",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "111a11cd84c54c2ddc27c1b5",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "09d76ba5ddcc65da359ad3b2",
          "_tpl": "5dfa3d950dee1b22f862eae0",
          "parentId": "111a11cd84c54c2ddc27c1b5",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2101aaf671555ddb53215642",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "111a11cd84c54c2ddc27c1b5",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "eedbbfac63b34d6025527912",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "ba0f6a1e9bc44854829ae147",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c7d224742de5eb7e492a6753",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "9800ecbcc749c093c09fc640",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "9b33469455f380f6bfe35e7f",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "2101aaf671555ddb53215642",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669073390100180d030269bd",
      "Name": "The Demon",
      "Root": "0c1cf888a1a02ba2c940221a",
      "Items": [
        {
          "_id": "0c1cf888a1a02ba2c940221a",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "df6bd2f6147a8951190780a9",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "0c1cf888a1a02ba2c940221a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b7b10828237fa65728d79da8",
          "_tpl": "5c6175362e221600133e3b94",
          "parentId": "0c1cf888a1a02ba2c940221a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0124108d5bb67bd4b0d75d3f",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "0c1cf888a1a02ba2c940221a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f0d2083dc328a35157843048",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "0c1cf888a1a02ba2c940221a",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "07ddecf5faece8307ba38d62",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "0c1cf888a1a02ba2c940221a",
          "slotId": "mod_charge"
        },
        {
          "_id": "7570bf2edbe80454ae124cda",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "0124108d5bb67bd4b0d75d3f",
          "slotId": "mod_scope"
        },
        {
          "_id": "5bf9ac0f74a6b2ca3da0506b",
          "_tpl": "6065878ac9cf8012264142fd",
          "parentId": "0124108d5bb67bd4b0d75d3f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "3952a0d3352a837aaa2443aa",
          "_tpl": "6065881d1246154cad35d637",
          "parentId": "0124108d5bb67bd4b0d75d3f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "5df985b46ba593aa1ef7aaca",
          "_tpl": "5bc09a18d4351e003562b68e",
          "parentId": "0124108d5bb67bd4b0d75d3f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6d48b5bce569c18fa5ef3546",
          "_tpl": "5d44069ca4b9361ebd26fc37",
          "parentId": "f0d2083dc328a35157843048",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "4af2b90076f1f976a07041c5",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "7570bf2edbe80454ae124cda",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a8e58cc5389468385f87cbd5",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "5bf9ac0f74a6b2ca3da0506b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8d39737b413a940f702db1c9",
          "_tpl": "5dfa3d45dfc58d14537c20b0",
          "parentId": "5bf9ac0f74a6b2ca3da0506b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "4b261a764a0508bf5e190098",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "3952a0d3352a837aaa2443aa",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "596e35c9a181182ad19185b0",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "3952a0d3352a837aaa2443aa",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "14f648400b164fd73b5439c2",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "a8e58cc5389468385f87cbd5",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "516f319d15b4ae428f514a64",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "4b261a764a0508bf5e190098",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "6b5fc3b98c38efe4b6248baa",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "596e35c9a181182ad19185b0",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6690735e0100180d0309e033",
      "Name": "Am I Right Marines",
      "Root": "c187b8025586f9231afbcf6c",
      "Items": [
        {
          "_id": "c187b8025586f9231afbcf6c",
          "_tpl": "5fb64bc92b1b027b1f50bcf2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "bb8d74396ab068c617eaec6a",
          "_tpl": "5fb651dc85f90547f674b6f4",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4f5dbe3120650eff90dc3308",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b0336d531b41012dc6476c50",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "46aa079cb215188e89c77458",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e76cfc3f1eab5c8be5ba69fc",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_stock"
        },
        {
          "_id": "73ee5cbe51add8955a5a1aca",
          "_tpl": "5fb65363d1409e5ca04b54f5",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "754ef2a943d60a6533f4d7f4",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_mount"
        },
        {
          "_id": "ed397623102d5b648cd68ffe",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "b7a705d8e8b7fff8e3e8ea4a",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c187b8025586f9231afbcf6c",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "72790411f8331f162f2b4b7f",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "e76cfc3f1eab5c8be5ba69fc",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "fbe885e585141b0a77981e0a",
          "_tpl": "5fc4b992187fea44d52edaa9",
          "parentId": "73ee5cbe51add8955a5a1aca",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "17f753c92a23087b4e160e8d",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "754ef2a943d60a6533f4d7f4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "3a7f2db61df874cadd0ea83e",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "b7a705d8e8b7fff8e3e8ea4a",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "43a3ca37535012857af381df",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "72790411f8331f162f2b4b7f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "6c188f7286f3c8ea79e1ecb9",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "43a3ca37535012857af381df",
          "slotId": "mod_stock"
        },
        {
          "_id": "192ccaa99a40ba132c7a8e1a",
          "_tpl": "5fc4b9b17283c4046c5814d7",
          "parentId": "fbe885e585141b0a77981e0a",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6690737f0100180d03bf31b7",
      "Name": "Head Blaster",
      "Root": "1f3f101ddbffe7919dbdb258",
      "Items": [
        {
          "_id": "1f3f101ddbffe7919dbdb258",
          "_tpl": "6183afd850224f204c1da514",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "797f00f1d08230fb71e4c633",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "1f3f101ddbffe7919dbdb258",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "ee0730306acaca704e4f9c9e",
          "_tpl": "618168dc8004cc50514c34fc",
          "parentId": "1f3f101ddbffe7919dbdb258",
          "slotId": "mod_magazine"
        },
        {
          "_id": "38e68b0a34d8a74369c93711",
          "_tpl": "6165adcdd3a39d50044c120f",
          "parentId": "1f3f101ddbffe7919dbdb258",
          "slotId": "mod_reciever"
        },
        {
          "_id": "dcc81eb802ee350c63a4e110",
          "_tpl": "61816734d8e3106d9806c1f3",
          "parentId": "1f3f101ddbffe7919dbdb258",
          "slotId": "mod_stock"
        },
        {
          "_id": "2d506074c8acfb91f6a8d48e",
          "_tpl": "6181688c6c780c1e710c9b04",
          "parentId": "1f3f101ddbffe7919dbdb258",
          "slotId": "mod_charge"
        },
        {
          "_id": "490762239cc0ec546198041b",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "38e68b0a34d8a74369c93711",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e0ffd6ec4b24b80ff02b26e5",
          "_tpl": "6183b084a112697a4b3a6e6c",
          "parentId": "38e68b0a34d8a74369c93711",
          "slotId": "mod_barrel"
        },
        {
          "_id": "4e6d516e5b37cef5fad9c034",
          "_tpl": "61816df1d3a39d50044c139e",
          "parentId": "38e68b0a34d8a74369c93711",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "a8842dbb3e6152766fdcce15",
          "_tpl": "61816dfa6ef05c2ce828f1ad",
          "parentId": "38e68b0a34d8a74369c93711",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "a446a37d0bf5cab864c80661",
          "_tpl": "618167528004cc50514c34f9",
          "parentId": "dcc81eb802ee350c63a4e110",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "5a8bc6f503d68975c0983c67",
          "_tpl": "618167441cb55961fa0fdc71",
          "parentId": "dcc81eb802ee350c63a4e110",
          "slotId": "mod_stock_002"
        },
        {
          "_id": "becf0917c9d6a6c08bdab4b4",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "e0ffd6ec4b24b80ff02b26e5",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2b1f552f70d7d4189722b22e",
          "_tpl": "61816fcad92c473c770215cc",
          "parentId": "e0ffd6ec4b24b80ff02b26e5",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bf8439066cb95450db625f62",
          "_tpl": "5c1bc5af2e221602b412949b",
          "parentId": "4e6d516e5b37cef5fad9c034",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "406780d4377f2103420bee07",
          "_tpl": "61965d9058ef8c428c287e0d",
          "parentId": "4e6d516e5b37cef5fad9c034",
          "slotId": "mod_mount"
        },
        {
          "_id": "d43ae86ff55bffc61d2b4c8f",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "becf0917c9d6a6c08bdab4b4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1a3da03b49409a8f63debd8d",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "406780d4377f2103420bee07",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "accdce93525fa7d4426b4b38",
          "_tpl": "5d10b49bd7ad1a1a560708b0",
          "parentId": "406780d4377f2103420bee07",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b646dc1b2154acbc71b276ab",
          "_tpl": "618167616ef05c2ce828f1a8",
          "parentId": "a446a37d0bf5cab864c80661",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669073be0100180d0313c508",
      "Name": "Bowery King",
      "Root": "90f912aebc4e6bccead90f61",
      "Items": [
        {
          "_id": "90f912aebc4e6bccead90f61",
          "_tpl": "5d43021ca4b9362eab4b5e25",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0ec5c4c703bbedd1553b1937",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "90f912aebc4e6bccead90f61",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "fe12ebff2833450caa8ca91e",
          "_tpl": "55802d5f4bdc2dac148b458e",
          "parentId": "90f912aebc4e6bccead90f61",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0362bd53c81321b2ce9af26d",
          "_tpl": "5d4405aaa4b9361e6a4e6bd3",
          "parentId": "90f912aebc4e6bccead90f61",
          "slotId": "mod_reciever"
        },
        {
          "_id": "ef0ff35fa3a7280327de146b",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "90f912aebc4e6bccead90f61",
          "slotId": "mod_stock"
        },
        {
          "_id": "b6908157df33e12b6b964097",
          "_tpl": "5d44334ba4b9362b346d1948",
          "parentId": "90f912aebc4e6bccead90f61",
          "slotId": "mod_charge"
        },
        {
          "_id": "bad686a60701ccc57016ff21",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "0362bd53c81321b2ce9af26d",
          "slotId": "mod_scope"
        },
        {
          "_id": "3b78dba1444161ace97e7efa",
          "_tpl": "5d440b93a4b9364276578d4b",
          "parentId": "0362bd53c81321b2ce9af26d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fa2f4e3037f83349ecb6bf0c",
          "_tpl": "5d4405f0a4b9361e6a4e6bd9",
          "parentId": "0362bd53c81321b2ce9af26d",
          "slotId": "mod_handguard"
        },
        {
          "_id": "533bd165a7eb5a94ec126ed5",
          "_tpl": "5d4406a8a4b9361e4f6eb8b7",
          "parentId": "ef0ff35fa3a7280327de146b",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "013244a755f877e8914691eb",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "bad686a60701ccc57016ff21",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7de5ea0a016c30719485b3e9",
          "_tpl": "609269c3b0e443224b421cc1",
          "parentId": "3b78dba1444161ace97e7efa",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "84310a5c0992406f69a70996",
          "_tpl": "56eabcd4d2720b66698b4574",
          "parentId": "3b78dba1444161ace97e7efa",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "57270dd635387eefd62ac40c",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "fa2f4e3037f83349ecb6bf0c",
          "slotId": "mod_mount_004"
        },
        {
          "_id": "a17e39f7e11315a942d12100",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "fa2f4e3037f83349ecb6bf0c",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "b4a4ded141126ca682d1a39d",
          "_tpl": "60926df0132d4d12c81fd9df",
          "parentId": "7de5ea0a016c30719485b3e9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "024918111d353166864af2d4",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "57270dd635387eefd62ac40c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a35ac234fbd3469f1cf08925",
          "_tpl": "5c1bc5612e221602b5429350",
          "parentId": "a17e39f7e11315a942d12100",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669073f00100180d03829c5c",
      "Name": "Winters Howl",
      "Root": "7668efa20ffdf96c92c02c5e",
      "Items": [
        {
          "_id": "7668efa20ffdf96c92c02c5e",
          "_tpl": "57c44b372459772d2b39b8ce",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ec9e7e28dd138c05563be3b2",
          "_tpl": "57c44dd02459772d2e0ae249",
          "parentId": "7668efa20ffdf96c92c02c5e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ad7a8c6f00cb1c3950494cb5",
          "_tpl": "57c44f4f2459772d2c627113",
          "parentId": "7668efa20ffdf96c92c02c5e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "25f910420dc7cb8fdaadf449",
          "_tpl": "5a9e81fba2750c00164f6b11",
          "parentId": "7668efa20ffdf96c92c02c5e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0e8efb1301a53d1200f5f3c1",
          "_tpl": "5a69a2ed8dc32e000d46d1f1",
          "parentId": "7668efa20ffdf96c92c02c5e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "583cbe78e553ec82f9516d2e",
          "_tpl": "5dff8db859400025ea5150d4",
          "parentId": "7668efa20ffdf96c92c02c5e",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "ab2f83c84d826d7e8cef7ee2",
          "_tpl": "57c44e7b2459772d28133248",
          "parentId": "ec9e7e28dd138c05563be3b2",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "89088e7ae75cb80d14a4f9e1",
          "_tpl": "57a3459f245977764a01f703",
          "parentId": "ec9e7e28dd138c05563be3b2",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "cd8d70010556debcdbdd270c",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "0e8efb1301a53d1200f5f3c1",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "17cce1fbe5b48f10d70e2207",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "583cbe78e553ec82f9516d2e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fa2a2848b49f5e10f23387c2",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "89088e7ae75cb80d14a4f9e1",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "038c538cfa836cc4e79ed027",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "cd8d70010556debcdbdd270c",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669074130100180d03ec396f",
      "Name": "The Entangler",
      "Root": "39ee6f5e217e8db35089be70",
      "Items": [
        {
          "_id": "39ee6f5e217e8db35089be70",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f4676eb1b316287107c0df43",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "fe982846aaac851378ccaad9",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d800fa147e22d1ec812035e7",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6125726fd64d6129b2b3db95",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_reciever"
        },
        {
          "_id": "e98524cee3a49bdba0cf6bbb",
          "_tpl": "628a7b23b0f75035732dd565",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "cf5a9b18f7f616685416b3e5",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "d2629487a52609bdd9b95c4f",
          "_tpl": "5cfe8010d7ad1a59283b14c6",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_magazine"
        },
        {
          "_id": "392c2a9d9ac42219e1b0e82d",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "39ee6f5e217e8db35089be70",
          "slotId": "mod_charge"
        },
        {
          "_id": "9f249d8b2f9c926a0c6ad7f1",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "f4676eb1b316287107c0df43",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e4c4001be126356fcc33d0a9",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "6125726fd64d6129b2b3db95",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "1b3423d8a780aeb713e407cf",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "9f249d8b2f9c926a0c6ad7f1",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6690742c0100180d0320ef72",
      "Name": "Reshalas Damnation",
      "Root": "71705a7d41d866e5ac73635a",
      "Items": [
        {
          "_id": "71705a7d41d866e5ac73635a",
          "_tpl": "5b0bbe4e5acfc40dc528a72d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "046ab5714534c8c6384c74b6",
          "_tpl": "5b7d679f5acfc4001a5c4024",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "9c17b90617513027c266503b",
          "_tpl": "5b7bef9c5acfc43d102852ec",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "f7e3e37fdb461ba11f4eee39",
          "_tpl": "5b7bedd75acfc43d825283f9",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e03610d39ba5dbbfd28b5424",
          "_tpl": "5b7be1265acfc400161d0798",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_barrel"
        },
        {
          "_id": "eac908c9d73d6e3686a81b67",
          "_tpl": "5b0bc22d5acfc47a8607f085",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a6e558ca44c677a8c57e2e38",
          "_tpl": "5b099bb25acfc400186331e8",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "be19eee66e9ae901deadd76a",
          "_tpl": "5b7d63b75acfc400170e2f8a",
          "parentId": "71705a7d41d866e5ac73635a",
          "slotId": "mod_stock"
        },
        {
          "_id": "62b37295746893a132f30b11",
          "_tpl": "5b7be46e5acfc400170e2dcf",
          "parentId": "f7e3e37fdb461ba11f4eee39",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "990bef29e533a42c5cb97405",
          "_tpl": "5b7be4575acfc400161d0832",
          "parentId": "f7e3e37fdb461ba11f4eee39",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e13930c1841594de0b4ffd82",
          "_tpl": "5cf78496d7f00c065703d6ca",
          "parentId": "e03610d39ba5dbbfd28b5424",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ce1b21036d1a683075b25f0f",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "a6e558ca44c677a8c57e2e38",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9cd9cd10b105c520f623cea3",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "62b37295746893a132f30b11",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "56afadb6390b1c6181d2f281",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "990bef29e533a42c5cb97405",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5c182be758b4b736ca1f799e",
          "_tpl": "5c878e9d2e2216000f201903",
          "parentId": "e13930c1841594de0b4ffd82",
          "slotId": "mod_muzzle_000"
        },
        {
          "_id": "2d28925980577d2081a0371d",
          "_tpl": "5cf78720d7f00c06595bc93e",
          "parentId": "e13930c1841594de0b4ffd82",
          "slotId": "mod_muzzle_001"
        }
      ]
    },
    {
      "Id": "6690743f0100180d03ed8102",
      "Name": "Ray Of Extinction",
      "Root": "a3537bd116bcfd609aaaa84e",
      "Items": [
        {
          "_id": "a3537bd116bcfd609aaaa84e",
          "_tpl": "5839a40f24597726f856b511",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "30e5675582291e0c1c33bd71",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "3f10be4153efc30f2cf1fa64",
          "_tpl": "59ecc28286f7746d7a68aa8c",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_stock"
        },
        {
          "_id": "5c7f7d3857ab38e0cd342b29",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_charge"
        },
        {
          "_id": "83e0591afd52a99bc0ca5221",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e51179fc43956bf7af0aa521",
          "_tpl": "615d8f5dd92c473c770212ef",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "27f0141f6c10758e3122a3ee",
          "_tpl": "57dc334d245977597164366f",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "e4049c6f9b9332c0c3da757c",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "a3537bd116bcfd609aaaa84e",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "25947f276d33a37d604b6c23",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "3f10be4153efc30f2cf1fa64",
          "slotId": "mod_stock"
        },
        {
          "_id": "2f39ebc5657c50d820e49019",
          "_tpl": "615d8f8567085e45ef1409ca",
          "parentId": "e51179fc43956bf7af0aa521",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "65eda9a5122d3adb2975b650",
          "_tpl": "5a957c3fa2750c00137fa5f7",
          "parentId": "e4049c6f9b9332c0c3da757c",
          "slotId": "mod_handguard"
        },
        {
          "_id": "5a09d5029fa870bdfe09c327",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "25947f276d33a37d604b6c23",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "9d6595bbe9262c59ef77a1aa",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "65eda9a5122d3adb2975b650",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "b962aada09dbf43ee7666ee8",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "65eda9a5122d3adb2975b650",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ad2f1fc8b24326fddc5c06db",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "65eda9a5122d3adb2975b650",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669074620100180d035d5b53",
      "Name": "Call Me Daddy",
      "Root": "c1952bf6a3b6172125d7e687",
      "Items": [
        {
          "_id": "c1952bf6a3b6172125d7e687",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2a2ec81bf14d33cb3cb0b00f",
          "_tpl": "55802f5d4bdc2dac148b458f",
          "parentId": "c1952bf6a3b6172125d7e687",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "60f75873f09e4f3e97d08330",
          "_tpl": "59fafc5086f7740dbe19f6c3",
          "parentId": "c1952bf6a3b6172125d7e687",
          "slotId": "mod_magazine"
        },
        {
          "_id": "212979b0935ff3fa900ccbc7",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "c1952bf6a3b6172125d7e687",
          "slotId": "mod_reciever"
        },
        {
          "_id": "594f0915f19cbeda6de05da4",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "c1952bf6a3b6172125d7e687",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "308ae5dbd0c75aaf6579bccf",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "c1952bf6a3b6172125d7e687",
          "slotId": "mod_charge"
        },
        {
          "_id": "ebb254b54f766dd4dadffa8d",
          "_tpl": "57adff4f24597737f373b6e6",
          "parentId": "212979b0935ff3fa900ccbc7",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "01faa6530a4892f7f3a60442",
          "_tpl": "60658776f2cb2e02a42ace2b",
          "parentId": "212979b0935ff3fa900ccbc7",
          "slotId": "mod_barrel"
        },
        {
          "_id": "91b36b0a30b9b2f7c76402d3",
          "_tpl": "6065880c132d4d12c81fd8da",
          "parentId": "212979b0935ff3fa900ccbc7",
          "slotId": "mod_handguard"
        },
        {
          "_id": "a16921d03be66481f7af70b8",
          "_tpl": "5bc09a18d4351e003562b68e",
          "parentId": "212979b0935ff3fa900ccbc7",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3b6109f850c4d500f0ad1079",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "594f0915f19cbeda6de05da4",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "6e62cd4aeafc5a696284f031",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "01faa6530a4892f7f3a60442",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9d462256bb0976209ca88877",
          "_tpl": "5dfa3d45dfc58d14537c20b0",
          "parentId": "01faa6530a4892f7f3a60442",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "16af0abe613382286b048e26",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "91b36b0a30b9b2f7c76402d3",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "6119d789dad6cfbf3dd99b05",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "91b36b0a30b9b2f7c76402d3",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c4f389b553938fd9f33b0c84",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "6e62cd4aeafc5a696284f031",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "212919f3469013b4d7c8c918",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "16af0abe613382286b048e26",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "334e3eabdc549fbdadbe19a4",
          "_tpl": "5c1bc5612e221602b5429350",
          "parentId": "6119d789dad6cfbf3dd99b05",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e845c14ae2e0db1ab591af72",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "3b6109f850c4d500f0ad1079",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669074740100180d03c56213",
      "Name": "May Be Chunky But Shes Fast",
      "Root": "983d7b3090882f581610c63e",
      "Items": [
        {
          "_id": "983d7b3090882f581610c63e",
          "_tpl": "5fbcc1d9016cce60e8341ab3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "314416f91822b876f528cb9c",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "983d7b3090882f581610c63e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "9901a86e7f9c0fab05018900",
          "_tpl": "5c6592372e221600133e47d7",
          "parentId": "983d7b3090882f581610c63e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "89c832f2054eabcc5c4dfde5",
          "_tpl": "5fbcc3e4d6fa9c00c571bb58",
          "parentId": "983d7b3090882f581610c63e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "e384dbb830cca0c3e31c8bbb",
          "_tpl": "58ac1bf086f77420ed183f9f",
          "parentId": "983d7b3090882f581610c63e",
          "slotId": "mod_stock"
        },
        {
          "_id": "0f322ddea01ae914a54ad0a8",
          "_tpl": "5fbcc640016cce60e8341acc",
          "parentId": "983d7b3090882f581610c63e",
          "slotId": "mod_charge"
        },
        {
          "_id": "29faba054f0474b9ba8b0714",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "89c832f2054eabcc5c4dfde5",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "974789ba2128e5678f11300a",
          "_tpl": "5fbbfacda56d053a3543f799",
          "parentId": "89c832f2054eabcc5c4dfde5",
          "slotId": "mod_barrel"
        },
        {
          "_id": "cee74d41b3aeffdbf90c1505",
          "_tpl": "5fbc226eca32ed67276c155d",
          "parentId": "89c832f2054eabcc5c4dfde5",
          "slotId": "mod_handguard"
        },
        {
          "_id": "0db05212486fe3b040ee5474",
          "_tpl": "5fc0fa957283c4046c58147e",
          "parentId": "89c832f2054eabcc5c4dfde5",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bad594138e536e17cbd4741f",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "e384dbb830cca0c3e31c8bbb",
          "slotId": "mod_stock"
        },
        {
          "_id": "55c35bcdf9532e1f954a7085",
          "_tpl": "5dfa3cd1b33c0951220c079b",
          "parentId": "974789ba2128e5678f11300a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "dc637d4e22767695a0283358",
          "_tpl": "5fbc210bf24b94483f726481",
          "parentId": "974789ba2128e5678f11300a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a9aed44f06a071028632c6d4",
          "_tpl": "59e0be5d86f7742d48765bd2",
          "parentId": "cee74d41b3aeffdbf90c1505",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "fc10578d2cce1bbcc1cc44be",
          "_tpl": "5fc0fa362770a0045c59c677",
          "parentId": "cee74d41b3aeffdbf90c1505",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "74f198da47c036ccc55331d7",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "cee74d41b3aeffdbf90c1505",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d8246b387909df2b9168b994",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "55c35bcdf9532e1f954a7085",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f8d8e6ad0d78cbbb6f74089c",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "a9aed44f06a071028632c6d4",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f5009a419c4e2b74ab9c5d3b",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "74f198da47c036ccc55331d7",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "25e9cd984a5096189bfe673b",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "bad594138e536e17cbd4741f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "cdea6680a3d80c01c20ae111",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "25e9cd984a5096189bfe673b",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6691aae10100180d0368bece",
      "Name": "Chad Destroyer",
      "Root": "07c0deba5b0fd19389c1d576",
      "Items": [
        {
          "_id": "07c0deba5b0fd19389c1d576",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5fb5172eab2c6e26cff038e7",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "07c0deba5b0fd19389c1d576",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "5285d3084a9d5d412d755c3f",
          "_tpl": "59c1383d86f774290a37e0ca",
          "parentId": "07c0deba5b0fd19389c1d576",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9b5abcfd820d45b955b46c47",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "07c0deba5b0fd19389c1d576",
          "slotId": "mod_reciever"
        },
        {
          "_id": "854d597367f5a5a8528e6342",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "07c0deba5b0fd19389c1d576",
          "slotId": "mod_stock"
        },
        {
          "_id": "6ee00e0db515aa47c7f46c6e",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "07c0deba5b0fd19389c1d576",
          "slotId": "mod_charge"
        },
        {
          "_id": "5c44629d00870be3b25be491",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "9b5abcfd820d45b955b46c47",
          "slotId": "mod_scope"
        },
        {
          "_id": "aa2f050d3296c82e608b7a8d",
          "_tpl": "55d35ee94bdc2d61338b4568",
          "parentId": "9b5abcfd820d45b955b46c47",
          "slotId": "mod_barrel"
        },
        {
          "_id": "19734e9c9be5661132b5567e",
          "_tpl": "5c78f2612e221600114c9f0d",
          "parentId": "9b5abcfd820d45b955b46c47",
          "slotId": "mod_handguard"
        },
        {
          "_id": "4f6319cb6a5dff63b7b2eecc",
          "_tpl": "6516e971a3d4c6497930b450",
          "parentId": "854d597367f5a5a8528e6342",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "03a5b1b8eab62ea89da63eb5",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "5c44629d00870be3b25be491",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "92a8d0679ed9bf8560a5ffe4",
          "_tpl": "5cf6937cd7f00c056c53fb39",
          "parentId": "aa2f050d3296c82e608b7a8d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9451843e9eb8070327bf3cfd",
          "_tpl": "5d00ec68d7ad1a04a067e5be",
          "parentId": "aa2f050d3296c82e608b7a8d",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a5161264621a94c71a4537ae",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "19734e9c9be5661132b5567e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "1046b8a5f29d128a9470ee58",
          "_tpl": "5c78f2882e22165df16b832e",
          "parentId": "19734e9c9be5661132b5567e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0c0e0eee43cfcaa4b9797f1f",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "a5161264621a94c71a4537ae",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d0ff759420dac6c343c0e221",
          "_tpl": "6516e9d7e239bd0c487e3766",
          "parentId": "4f6319cb6a5dff63b7b2eecc",
          "slotId": "mod_stock_000"
        }
      ]
    },
    {
      "Id": "6691ab960100180d03e2ae5d",
      "Name": "The Empress",
      "Root": "1c97e293370c2d4cc69b9684",
      "Items": [
        {
          "_id": "1c97e293370c2d4cc69b9684",
          "_tpl": "5bb2475ed4351e00853264e3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e9c933c6a841619b71d51918",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "1c97e293370c2d4cc69b9684",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f014acad35a1ad5e64a318cb",
          "_tpl": "544a37c44bdc2d25388b4567",
          "parentId": "1c97e293370c2d4cc69b9684",
          "slotId": "mod_magazine"
        },
        {
          "_id": "48db5f9c955ec4968dfc8eca",
          "_tpl": "5bb20d53d4351e4502010a69",
          "parentId": "1c97e293370c2d4cc69b9684",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b076e199c46d354b7d4fb073",
          "_tpl": "5bb20e58d4351e00320205d7",
          "parentId": "1c97e293370c2d4cc69b9684",
          "slotId": "mod_stock"
        },
        {
          "_id": "0361d754684e6172aec6767c",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "1c97e293370c2d4cc69b9684",
          "slotId": "mod_charge"
        },
        {
          "_id": "3c27daa8f87b5f6829c117a7",
          "_tpl": "60a23797a37c940de7062d02",
          "parentId": "48db5f9c955ec4968dfc8eca",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2aff1b58e396322ada477764",
          "_tpl": "5bb20dadd4351e00367faeff",
          "parentId": "48db5f9c955ec4968dfc8eca",
          "slotId": "mod_barrel"
        },
        {
          "_id": "031047be22ee192e8294c6c4",
          "_tpl": "5c6d11152e2216000f2003e7",
          "parentId": "48db5f9c955ec4968dfc8eca",
          "slotId": "mod_handguard"
        },
        {
          "_id": "aad083ba1c68752d2c34fe8f",
          "_tpl": "5bb20e49d4351e3bac1212de",
          "parentId": "48db5f9c955ec4968dfc8eca",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c7c1199dc931dadccf1cc046",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "b076e199c46d354b7d4fb073",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "339b5e9f2fa950e7cfcc51b9",
          "_tpl": "6386120cd6baa055ad1e201c",
          "parentId": "2aff1b58e396322ada477764",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3da58b1eadec44e529bb8511",
          "_tpl": "5bb20dcad4351e3bac1212da",
          "parentId": "2aff1b58e396322ada477764",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "75fc93a382948fb44375c238",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "031047be22ee192e8294c6c4",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "8b29cfff1f3560bcdbd14986",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "031047be22ee192e8294c6c4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "3fa1f55e6495e3c694ac3f8a",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "339b5e9f2fa950e7cfcc51b9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "daaa046914e62560b2b5c88d",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "75fc93a382948fb44375c238",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b8a8a2ff31aa40d43e9f4c97",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "8b29cfff1f3560bcdbd14986",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "b99bd315800a71ea5adba84d",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "c7c1199dc931dadccf1cc046",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6691abe40100180d03ccddcf",
      "Name": "The Danger",
      "Root": "d57ca8292c58a1293a30f435",
      "Items": [
        {
          "_id": "d57ca8292c58a1293a30f435",
          "_tpl": "5dcbd56fdbd3d91b3e5468d5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "922e7900832fe0bcb5273b91",
          "_tpl": "5dcbd6dddbd3d91b3e5468de",
          "parentId": "d57ca8292c58a1293a30f435",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "735c31b2f7c0725d34b2b2d8",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "d57ca8292c58a1293a30f435",
          "slotId": "mod_magazine"
        },
        {
          "_id": "528f7cc63f0539daf0e20627",
          "_tpl": "5dcbd6b46ec07c0c4347a564",
          "parentId": "d57ca8292c58a1293a30f435",
          "slotId": "mod_handguard"
        },
        {
          "_id": "a269063aea6939af380cd9cc",
          "_tpl": "5dcbe9431e1f4616d354987e",
          "parentId": "d57ca8292c58a1293a30f435",
          "slotId": "mod_barrel"
        },
        {
          "_id": "bcff667e673031985149e270",
          "_tpl": "5a37ca54c4a282000d72296a",
          "parentId": "d57ca8292c58a1293a30f435",
          "slotId": "mod_scope"
        },
        {
          "_id": "9c63158f072393392dccf93a",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "528f7cc63f0539daf0e20627",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "918f55f3871bdf8525e55e1e",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "528f7cc63f0539daf0e20627",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "d5fb565d9e58e4d4da0e5d19",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "a269063aea6939af380cd9cc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "065b735dd0996d1171b2faa8",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "bcff667e673031985149e270",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "86404f89439a46bb0be56ed0",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "9c63158f072393392dccf93a",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "cf7c740ef03be948f30299c5",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "918f55f3871bdf8525e55e1e",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "2763ed4864f61dc0261f2077",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "d5fb565d9e58e4d4da0e5d19",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6691ac720100180d03ee657c",
      "Name": "The Peace",
      "Root": "e713811f79ae52ecef2d9e85",
      "Items": [
        {
          "_id": "e713811f79ae52ecef2d9e85",
          "_tpl": "5a367e5dc4a282000e49738f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "446e5cfa39afc1c3361b8bcf",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "96e67f486f44df5343c4062f",
          "_tpl": "65293c7a17e14363030ad308",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e3e3b08a4caf38df8930951b",
          "_tpl": "5c793fc42e221600114ca25d",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_stock"
        },
        {
          "_id": "8f3a7ee9e178640127eb1844",
          "_tpl": "5a329052c4a28200741e22d3",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_handguard"
        },
        {
          "_id": "b673094d8cb81b098a04d046",
          "_tpl": "5a34fae7c4a2826c6e06d760",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_barrel"
        },
        {
          "_id": "3c9873d7a8fe73084d7521b0",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "e713811f79ae52ecef2d9e85",
          "slotId": "mod_scope"
        },
        {
          "_id": "f7c41b22329afd98df574c7e",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "e3e3b08a4caf38df8930951b",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "edac216b7b9740073362b72a",
          "_tpl": "5c0102b20db834001d23eebc",
          "parentId": "8f3a7ee9e178640127eb1844",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "cb3a752ac3acaf4307c5c7e7",
          "_tpl": "5c0102aa0db834001b734ba1",
          "parentId": "8f3a7ee9e178640127eb1844",
          "slotId": "mod_mount_004"
        },
        {
          "_id": "457f28d76889ed3d3a170e51",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "b673094d8cb81b098a04d046",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "65cea59648490164c15cedc9",
          "_tpl": "5a34fbadc4a28200741e230a",
          "parentId": "b673094d8cb81b098a04d046",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "3ca97382bd92f24f5c2f017a",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "3c9873d7a8fe73084d7521b0",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "76f1f0f274168b96ad2ef49b",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "f7c41b22329afd98df574c7e",
          "slotId": "mod_stock"
        },
        {
          "_id": "00873a99a563fe7335d2fbff",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "edac216b7b9740073362b72a",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4f2b501d6f6159dfbefcc302",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "cb3a752ac3acaf4307c5c7e7",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "14ff18a7b4e5b2d86b58828c",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "457f28d76889ed3d3a170e51",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6691acf50100180d03748c35",
      "Name": "Bringer Of Death",
      "Root": "693e55c2238e0fc126da9dc9",
      "Items": [
        {
          "_id": "693e55c2238e0fc126da9dc9",
          "_tpl": "5ac66cb05acfc40198510a10",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "62000a8515d64c1531d3e773",
          "_tpl": "5b237e425acfc4771e1be0b6",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "e66075c9cbb9deeceb4571e7",
          "_tpl": "5e21ca18e4d47f0da15e77dd",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "18df7439efe48843675e8b1c",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e9800c01a09a188f856603c0",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_reciever"
        },
        {
          "_id": "011fbd7107a666a79eb300fa",
          "_tpl": "5ac72e475acfc400180ae6fe",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c3369233e405fbf3595d2491",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_stock"
        },
        {
          "_id": "2a7025af28e82ff1d9ac4963",
          "_tpl": "5c0548ae0db834001966a3c2",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8628ede2722caf10c769d221",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "693e55c2238e0fc126da9dc9",
          "slotId": "mod_charge"
        },
        {
          "_id": "1fc9fca21b463830fb7c0516",
          "_tpl": "5b4736a986f774040571e998",
          "parentId": "62000a8515d64c1531d3e773",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "5e2db81a1e47d48becd5eb1c",
          "_tpl": "5b4736a986f774040571e998",
          "parentId": "62000a8515d64c1531d3e773",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "c0e155271244d6bdedef1e17",
          "_tpl": "5b4736b986f77405cb415c10",
          "parentId": "62000a8515d64c1531d3e773",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "07b5eed6301d4dff16dd2fa1",
          "_tpl": "6386120cd6baa055ad1e201c",
          "parentId": "e66075c9cbb9deeceb4571e7",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c3fa63a3681814330e8fabd5",
          "_tpl": "655f13e0a246670fb0373245",
          "parentId": "e9800c01a09a188f856603c0",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0,
                0
              ],
              "ScopesSelectedModes": [
                0,
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ef316ae81e9f79b6ae2dd26d",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "c3369233e405fbf3595d2491",
          "slotId": "mod_stock"
        },
        {
          "_id": "0d1cc5ad3d1d2bf858dd6aea",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "1fc9fca21b463830fb7c0516",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a042d1b1fa9b233c5d326ba3",
          "_tpl": "6272379924e29f06af4d5ecb",
          "parentId": "5e2db81a1e47d48becd5eb1c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a832ec74c5b369d1be18007b",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "c0e155271244d6bdedef1e17",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d482e9d911f9d2ec7b279bb1",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "07b5eed6301d4dff16dd2fa1",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6691af960100180d03a17e0b",
      "Name": "Mad Max",
      "Root": "ef803bbfa9030b2a64f2cc60",
      "Items": [
        {
          "_id": "ef803bbfa9030b2a64f2cc60",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "519d1b8fe8cf277ab6fae1b1",
          "_tpl": "5d025cc1d7ad1a53845279ef",
          "parentId": "ef803bbfa9030b2a64f2cc60",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "684fe937d3b6af7b42b81b82",
          "_tpl": "59fafc9386f774067d462453",
          "parentId": "ef803bbfa9030b2a64f2cc60",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0745640c48e1c115c7a5870d",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "ef803bbfa9030b2a64f2cc60",
          "slotId": "mod_reciever"
        },
        {
          "_id": "16f7dddc771dcc47a15df267",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "ef803bbfa9030b2a64f2cc60",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "daea3d412110b55d8809498c",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "ef803bbfa9030b2a64f2cc60",
          "slotId": "mod_charge"
        },
        {
          "_id": "256052c0e3328a3c32ee5898",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "0745640c48e1c115c7a5870d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "38a03ad0e879131a0761dc34",
          "_tpl": "6065878ac9cf8012264142fd",
          "parentId": "0745640c48e1c115c7a5870d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "e45566b8954ddb63111ae5c7",
          "_tpl": "5a329052c4a28200741e22d3",
          "parentId": "0745640c48e1c115c7a5870d",
          "slotId": "mod_handguard"
        },
        {
          "_id": "bdef705f5b5683589c4fc202",
          "_tpl": "5bc09a18d4351e003562b68e",
          "parentId": "0745640c48e1c115c7a5870d",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e0bfd06c088a74f6106abc5d",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "16f7dddc771dcc47a15df267",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "220bbb69f7289f7f8a208f1c",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "38a03ad0e879131a0761dc34",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a82f231921aec89f9cd761a3",
          "_tpl": "6065dc8a132d4d12c81fd8e3",
          "parentId": "38a03ad0e879131a0761dc34",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "d04ebae315b274fa7a8539cd",
          "_tpl": "5c0102b20db834001d23eebc",
          "parentId": "e45566b8954ddb63111ae5c7",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "3b7709371af5f513187c129b",
          "_tpl": "5c0102aa0db834001b734ba1",
          "parentId": "e45566b8954ddb63111ae5c7",
          "slotId": "mod_mount_004"
        },
        {
          "_id": "eebef0154a978890a73e29c1",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "220bbb69f7289f7f8a208f1c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3f811078358a521e8903c518",
          "_tpl": "655df24fdf80b12750626d0a",
          "parentId": "d04ebae315b274fa7a8539cd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c906e95556f6e28d61557095",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "3b7709371af5f513187c129b",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "753e864f7662ff1eb7442396",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "e0bfd06c088a74f6106abc5d",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6691b0110100180d0373f0b6",
      "Name": "Greatness",
      "Root": "42b3e3d544a4fce90085f0b2",
      "Items": [
        {
          "_id": "42b3e3d544a4fce90085f0b2",
          "_tpl": "57838ad32459774a17445cd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "29218f008e48b5c41f98f672",
          "_tpl": "5a9e81fba2750c00164f6b11",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e613356d72185e836202c2ac",
          "_tpl": "57838c962459774a1651ec63",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "b45b4e240f2e30a2f5f446b3",
          "_tpl": "578395402459774a256959b5",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_reciever"
        },
        {
          "_id": "cbc221658ec7846b371f4dc9",
          "_tpl": "578395e82459774a0e553c7b",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_stock"
        },
        {
          "_id": "fd23baf0089fddd95e77d36a",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_charge"
        },
        {
          "_id": "95149c1421b1fb74a1acb83a",
          "_tpl": "5e569a2e56edd02abe09f280",
          "parentId": "42b3e3d544a4fce90085f0b2",
          "slotId": "mod_mount_004"
        },
        {
          "_id": "28e45d45ec7ef40cd3494186",
          "_tpl": "57838e1b2459774a256959b1",
          "parentId": "e613356d72185e836202c2ac",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f09629a8edd95fe344cf2dfe",
          "_tpl": "59eb7ebe86f7740b373438ce",
          "parentId": "e613356d72185e836202c2ac",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "b96d1c79aa7a3bc13d9688b6",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "95149c1421b1fb74a1acb83a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "405ddfcdadb0b00a4c60158a",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "f09629a8edd95fe344cf2dfe",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "6b754d2b6237978172936301",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "f09629a8edd95fe344cf2dfe",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b0530100180d0323c5a2",
      "Name": "The Lab Runner",
      "Root": "037788606dbad4793e906773",
      "Items": [
        {
          "_id": "037788606dbad4793e906773",
          "_tpl": "57838ad32459774a17445cd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "57a7ac936603b26824374195",
          "_tpl": "5a9e81fba2750c00164f6b11",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_magazine"
        },
        {
          "_id": "33b455668efee1a73791c3df",
          "_tpl": "57838c962459774a1651ec63",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "657f596a6390e7a787cdf1bc",
          "_tpl": "578395402459774a256959b5",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_reciever"
        },
        {
          "_id": "fb60b76823e60d54d6732ada",
          "_tpl": "578395e82459774a0e553c7b",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_stock"
        },
        {
          "_id": "33f508fe5763e7913d95334a",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_charge"
        },
        {
          "_id": "262dfe5c52f14ec251d1e71d",
          "_tpl": "5e569a2e56edd02abe09f280",
          "parentId": "037788606dbad4793e906773",
          "slotId": "mod_mount_004"
        },
        {
          "_id": "56fa1f35690c2d0030be884c",
          "_tpl": "57838e1b2459774a256959b1",
          "parentId": "33b455668efee1a73791c3df",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "77f17fc0a120814acfa8313d",
          "_tpl": "59eb7ebe86f7740b373438ce",
          "parentId": "33b455668efee1a73791c3df",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "881b0a842e7aded64b52fc8b",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "262dfe5c52f14ec251d1e71d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "96d1d49a3152314b4ef08d2e",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "77f17fc0a120814acfa8313d",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "c7f0d58576ae94bc8f648a70",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "77f17fc0a120814acfa8313d",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b0bb0100180d0323fad6",
      "Name": "Waffle Muncher",
      "Root": "ae51dab51f83e08aaf47f83b",
      "Items": [
        {
          "_id": "ae51dab51f83e08aaf47f83b",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "abb6cf112e77079b40e75173",
          "_tpl": "5b237e425acfc4771e1be0b6",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "47c40707ab7b3e2fb22c7d5d",
          "_tpl": "615d8f5dd92c473c770212ef",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4d47356ce78a1cb4fe5835bc",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "961245a75b5f177a578dc251",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "80cce8460fabbd75030475ba",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "71e41209f56f7945fb673ed0",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_stock"
        },
        {
          "_id": "6a5067db8f60f177ac8bc596",
          "_tpl": "55d482194bdc2d1d4e8b456b",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3d58d6a99cd9b4060963bd83",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "ae51dab51f83e08aaf47f83b",
          "slotId": "mod_charge"
        },
        {
          "_id": "4dfcf31b23d9652d02f491f1",
          "_tpl": "5b4736a986f774040571e998",
          "parentId": "abb6cf112e77079b40e75173",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "952cb8498648149ae26c4105",
          "_tpl": "5b4736b986f77405cb415c10",
          "parentId": "abb6cf112e77079b40e75173",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "fcf1072f1e2bbec68c443ed9",
          "_tpl": "615d8f8567085e45ef1409ca",
          "parentId": "47c40707ab7b3e2fb22c7d5d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2d964321b6cd7280eed799a1",
          "_tpl": "558022b54bdc2dac148b458d",
          "parentId": "961245a75b5f177a578dc251",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e8c5ddc9f2feb48430738d95",
          "_tpl": "6272379924e29f06af4d5ecb",
          "parentId": "4dfcf31b23d9652d02f491f1",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "76eb0988da85762197adff24",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "952cb8498648149ae26c4105",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b1280100180d03125a3d",
      "Name": "The Chain Breaker",
      "Root": "3af82455ba133cfca7311968",
      "Items": [
        {
          "_id": "3af82455ba133cfca7311968",
          "_tpl": "5a0ec13bfcdbcb00165aa685",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0991eb7c1e578a11b0786cf5",
          "_tpl": "5cf656f2d7f00c06585fb6eb",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "bc4f7a578d222495ca874bcf",
          "_tpl": "5f633f68f5750b524b45f112",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5e4154aa3f716ce3c17844d2",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6352c7d667a26462b6bdc283",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_reciever"
        },
        {
          "_id": "a83d82ad0cc59ea95a52bd52",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9890ba57e6e3cc87dbc17de9",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_stock"
        },
        {
          "_id": "7c15f182f0fe3082342ec89e",
          "_tpl": "5cfe8010d7ad1a59283b14c6",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c2d300ccf7b4e464353e3e3e",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "3af82455ba133cfca7311968",
          "slotId": "mod_charge"
        },
        {
          "_id": "243f0e0a89f2221bb266874c",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "0991eb7c1e578a11b0786cf5",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "c44390b407d579048a263915",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "0991eb7c1e578a11b0786cf5",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2769993f4ff7c058ea74c51e",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "6352c7d667a26462b6bdc283",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fdbeab8a87bb0cd5ef48c480",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "243f0e0a89f2221bb266874c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "07d1126f161290b35b6e7417",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "c44390b407d579048a263915",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "33178af20a9cc3f5304ad52b",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "2769993f4ff7c058ea74c51e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6691b20e0100180d0382195d",
      "Name": "The Boxer",
      "Root": "3cf01d685fde8b47c07be59e",
      "Items": [
        {
          "_id": "3cf01d685fde8b47c07be59e",
          "_tpl": "5cadfbf7ae92152ac412eeef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "14494b7259436fcd9383e2a9",
          "_tpl": "5caf187cae92157c28402e43",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9cd1cddf1bf29cb7ca3b635e",
          "_tpl": "5caf1109ae9215753c44119f",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "ce6f9d65c48df9d509e74b34",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2d54ed5efb6ceb5e6a9a8eb7",
          "_tpl": "5cdaa99dd7f00c002412d0b2",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "362dee4efbf9ae4eff2b6a05",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e838bdb15000367bd4a7ac51",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "3cf01d685fde8b47c07be59e",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "bfa10da87ba699c447c6b6d0",
          "_tpl": "5a7dbfc1159bd40016548fde",
          "parentId": "2d54ed5efb6ceb5e6a9a8eb7",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b2480100180d03d0ec0d",
      "Name": "Rush Long",
      "Root": "bc3f1cfebe0e02704ab6f318",
      "Items": [
        {
          "_id": "bc3f1cfebe0e02704ab6f318",
          "_tpl": "5cadfbf7ae92152ac412eeef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "477ee11e15a27cc4f7a96eef",
          "_tpl": "5caf187cae92157c28402e43",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9077005cb4eb22c41f10e12d",
          "_tpl": "5caf1109ae9215753c44119f",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_magazine"
        },
        {
          "_id": "972d28f75c06c4892b5037a2",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "46f1e1a5679bf1026a1427b1",
          "_tpl": "5cdaa99dd7f00c002412d0b2",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_handguard"
        },
        {
          "_id": "45d47975625e44c78cfa6de3",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c2dc302bc234bb5e2715af70",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "bc3f1cfebe0e02704ab6f318",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f351fdb18db5ee90d932c37a",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "46f1e1a5679bf1026a1427b1",
          "slotId": "mod_foregrip"
        }
      ]
    }
  ];

  public weaponDecentBuilds = [
    {
      "Id": "66666eb0010013bd2d5428de",
      "Name": "mdr556",
      "Root": "925efc625dd47fb8c48fede4",
      "Items": [
        {
          "_id": "925efc625dd47fb8c48fede4",
          "_tpl": "5c488a752e221602b412af63",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "80169aa0ebf3c173d5a8ad5c",
          "_tpl": "5c48a2c22e221602b313fb6c",
          "parentId": "925efc625dd47fb8c48fede4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "d2f532fb7c4c20213fe42578",
          "_tpl": "55802d5f4bdc2dac148b458e",
          "parentId": "925efc625dd47fb8c48fede4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d6c0bf8bf47c8a3e66fe21af",
          "_tpl": "5c48a14f2e2216152006edd7",
          "parentId": "925efc625dd47fb8c48fede4",
          "slotId": "mod_handguard"
        },
        {
          "_id": "fece71beb60b77be3fa3db26",
          "_tpl": "5c48a2852e221602b21d5923",
          "parentId": "925efc625dd47fb8c48fede4",
          "slotId": "mod_barrel"
        },
        {
          "_id": "9294c2db4dd7fcfb9bad27d7",
          "_tpl": "558022b54bdc2dac148b458d",
          "parentId": "925efc625dd47fb8c48fede4",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7f2c252b8ce2b0519c9a408f",
          "_tpl": "57cffcd624597763133760c5",
          "parentId": "d6c0bf8bf47c8a3e66fe21af",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "502f169ef443e92c2a7daf05",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "d6c0bf8bf47c8a3e66fe21af",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e45dbbd113a1626e0dd9d3a1",
          "_tpl": "5cf6937cd7f00c056c53fb39",
          "parentId": "fece71beb60b77be3fa3db26",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ff390abbf9db76ed56016aea",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "502f169ef443e92c2a7daf05",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6669046c010013bd2d8cf346",
      "Name": "glock171",
      "Root": "5d12aa09c3d2abf622a4d7ba",
      "Items": [
        {
          "_id": "5d12aa09c3d2abf622a4d7ba",
          "_tpl": "5a7ae0c351dfba0017554310",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "26bea46bcbbe00ea867c62ff",
          "_tpl": "5a6b5f868dc32e000a311389",
          "parentId": "5d12aa09c3d2abf622a4d7ba",
          "slotId": "mod_barrel"
        },
        {
          "_id": "26c25093590327756ef43473",
          "_tpl": "5a71e22f8dc32e00094b97f4",
          "parentId": "5d12aa09c3d2abf622a4d7ba",
          "slotId": "mod_reciever"
        },
        {
          "_id": "592eccc868632846768cdd0e",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "5d12aa09c3d2abf622a4d7ba",
          "slotId": "mod_magazine"
        },
        {
          "_id": "613f1d430e5ed49e76c883a8",
          "_tpl": "5d1c702ad7ad1a632267f429",
          "parentId": "5d12aa09c3d2abf622a4d7ba",
          "slotId": "mod_stock"
        },
        {
          "_id": "fafd8575b87f4650d729d1a1",
          "_tpl": "5a7d9122159bd4001438dbf4",
          "parentId": "26c25093590327756ef43473",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "691ffebb7fa2a7816f343f74",
          "_tpl": "5a6f58f68dc32e000a311390",
          "parentId": "26c25093590327756ef43473",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "90b5bc6194dee052a213adb2",
          "_tpl": "5a7b32a2e899ef00135e345a",
          "parentId": "26c25093590327756ef43473",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669033ab010013bd2d5866e9",
      "Name": "Corpesmaker",
      "Root": "9445171f03f3752b67b717ec",
      "Items": [
        {
          "_id": "9445171f03f3752b67b717ec",
          "_tpl": "583990e32459771419544dd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "a26498218403f161571c6288",
          "_tpl": "5649ade84bdc2d1b2b8b4587",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c7d6fb38183d01468bcd022b",
          "_tpl": "59ecc28286f7746d7a68aa8c",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_stock"
        },
        {
          "_id": "27d3f630b23d4a3c19be3219",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_charge"
        },
        {
          "_id": "95067574c48e1a38d9394fbb",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b1365676eb571adfc87cb820",
          "_tpl": "57ffb0e42459777d047111c5",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e5e6dd004db1100b1e7064a6",
          "_tpl": "57dc334d245977597164366f",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_reciever"
        },
        {
          "_id": "afce04ff3985f4614fe2c892",
          "_tpl": "638db77630c4240f9e06f8b6",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "d6abc37fb92ef66586874bd5",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "9445171f03f3752b67b717ec",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "1583dee28cf66181cb67c339",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "c7d6fb38183d01468bcd022b",
          "slotId": "mod_stock"
        },
        {
          "_id": "ad3f0b6a1abadb6acb1ee351",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "afce04ff3985f4614fe2c892",
          "slotId": "mod_scope"
        },
        {
          "_id": "c40d4a42fc634e06c092fa25",
          "_tpl": "57ffa9f4245977728561e844",
          "parentId": "d6abc37fb92ef66586874bd5",
          "slotId": "mod_handguard"
        },
        {
          "_id": "759f461d38e57b0265d82f19",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "ad3f0b6a1abadb6acb1ee351",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690347d010013bd2da62af7",
      "Name": "Knightfall",
      "Root": "127a6320f03b8afccfd4f01c",
      "Items": [
        {
          "_id": "127a6320f03b8afccfd4f01c",
          "_tpl": "5a7ae0c351dfba0017554310",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b769b879a851016fb9c5c04f",
          "_tpl": "5a6b5e468dc32e001207faf5",
          "parentId": "127a6320f03b8afccfd4f01c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a546c6cba44d8447e11d5548",
          "_tpl": "5a7b4960e899ef197b331a2d",
          "parentId": "127a6320f03b8afccfd4f01c",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f0268740a9b2eb0b41c57f5a",
          "_tpl": "5a7033908dc32e000a311392",
          "parentId": "127a6320f03b8afccfd4f01c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "4c185b6d876f7e410afbf5bd",
          "_tpl": "5a718f958dc32e00094b97e7",
          "parentId": "127a6320f03b8afccfd4f01c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d3d249ac59a2ba64462c0dbc",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "127a6320f03b8afccfd4f01c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f93b73adfd23cb06fc79417f",
          "_tpl": "5a7ad0c451dfba0013379712",
          "parentId": "b769b879a851016fb9c5c04f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d5c17ca8556ad3e96b0052f9",
          "_tpl": "5a7d912f159bd400165484f3",
          "parentId": "f0268740a9b2eb0b41c57f5a",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "07ab5cba3db65b6068a0bc46",
          "_tpl": "5a7d9104159bd400134c8c21",
          "parentId": "f0268740a9b2eb0b41c57f5a",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66903553010013bd2d5f2561",
      "Name": "Legacy",
      "Root": "ecf6196095e36a346e1120f6",
      "Items": [
        {
          "_id": "ecf6196095e36a346e1120f6",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7a23c70fa3902c4b6a612dc4",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f6758045aaad7512b1fcee87",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_stock"
        },
        {
          "_id": "fa1c13d2e61702ba4359e3c6",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_charge"
        },
        {
          "_id": "65b7d78ace69c0b9358051cd",
          "_tpl": "599860ac86f77436b225ed1a",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_magazine"
        },
        {
          "_id": "56826a4d6f0e1ad05064c48b",
          "_tpl": "5a9fb739a2750c003215717f",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ebc8e32d457dbc192b0b02e1",
          "_tpl": "59985a8086f77414ec448d1a",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b2445aec58e9a1885b38376d",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "617c5e2eb34cd704ff1058e5",
          "_tpl": "5c90c3622e221601da359851",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_scope"
        },
        {
          "_id": "dd278c75ff71767ddaa08343",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "ecf6196095e36a346e1120f6",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "e35906e12f99cf75d1e74c1f",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "f6758045aaad7512b1fcee87",
          "slotId": "mod_stock"
        },
        {
          "_id": "85a1695099748b93333868ee",
          "_tpl": "5d2da1e948f035477b1ce2ba",
          "parentId": "617c5e2eb34cd704ff1058e5",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6297ba8667b83900e61cdf9e",
          "_tpl": "5648b4534bdc2d3d1c8b4580",
          "parentId": "dd278c75ff71767ddaa08343",
          "slotId": "mod_handguard"
        },
        {
          "_id": "0b2fba2c4a922bff2a032d5a",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "e35906e12f99cf75d1e74c1f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "a003831dbecb0b0a37daf6f9",
          "_tpl": "5c1bc7752e221602b1779b34",
          "parentId": "6297ba8667b83900e61cdf9e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "53e250d22d6aba3ebac29358",
          "_tpl": "5b07dd285acfc4001754240d",
          "parentId": "6297ba8667b83900e61cdf9e",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669035fb010013bd2d1a2536",
      "Name": "Disturbance",
      "Root": "6a1df5e21df00eed8fbf9446",
      "Items": [
        {
          "_id": "6a1df5e21df00eed8fbf9446",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0447acf26ac00b2d4a3003cd",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "8189354fe0f371de8e4259ac",
          "_tpl": "5c878ebb2e2216001219d48a",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3f2e09b3441af26ab334893c",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "fd7ea601cf8dfc2e8ab617b6",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0da44ae1ecedb49a3b7afeb1",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "602f29a13a66015d4777f1f2",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_stock"
        },
        {
          "_id": "d16ccc8f4cf0c5aa5674e25e",
          "_tpl": "5ac66bea5acfc43b321d4aec",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_magazine"
        },
        {
          "_id": "392c13367f06d641b8755cc9",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "6a1df5e21df00eed8fbf9446",
          "slotId": "mod_charge"
        },
        {
          "_id": "eb49ca941359a5c7672c8aa9",
          "_tpl": "5a9d56c8a2750c0032157146",
          "parentId": "0447acf26ac00b2d4a3003cd",
          "slotId": "mod_handguard"
        },
        {
          "_id": "8b301a94573c870ab69c0ef1",
          "_tpl": "57adff4f24597737f373b6e6",
          "parentId": "fd7ea601cf8dfc2e8ab617b6",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "91fe69fd52c458530ef5e37b",
          "_tpl": "5fc0f9b5d724d907e2077d82",
          "parentId": "eb49ca941359a5c7672c8aa9",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "d3db538645db817ebf75c6bc",
          "_tpl": "59e0be5d86f7742d48765bd2",
          "parentId": "eb49ca941359a5c7672c8aa9",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "13f571c06478c2fbae373bf9",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "d3db538645db817ebf75c6bc",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669036f4010013bd2da16c4d",
      "Name": "Mercy",
      "Root": "903fe58c5fa7ba7abc9b5f4e",
      "Items": [
        {
          "_id": "903fe58c5fa7ba7abc9b5f4e",
          "_tpl": "6183afd850224f204c1da514",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f833e4a0f2864a176d23d7b8",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "903fe58c5fa7ba7abc9b5f4e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c8304ff7f62c3f25e1e148aa",
          "_tpl": "618168dc8004cc50514c34fc",
          "parentId": "903fe58c5fa7ba7abc9b5f4e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "333abbc844910866e9c45843",
          "_tpl": "6165adcdd3a39d50044c120f",
          "parentId": "903fe58c5fa7ba7abc9b5f4e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "915c833dd9c5f49ac592a7c8",
          "_tpl": "61816734d8e3106d9806c1f3",
          "parentId": "903fe58c5fa7ba7abc9b5f4e",
          "slotId": "mod_stock"
        },
        {
          "_id": "947c564145175964e69f4873",
          "_tpl": "6181688c6c780c1e710c9b04",
          "parentId": "903fe58c5fa7ba7abc9b5f4e",
          "slotId": "mod_charge"
        },
        {
          "_id": "80f12c71ba26b3cf01c399b3",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "333abbc844910866e9c45843",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "195e956f41614be0d05f03e8",
          "_tpl": "6183b084a112697a4b3a6e6c",
          "parentId": "333abbc844910866e9c45843",
          "slotId": "mod_barrel"
        },
        {
          "_id": "190a72b1179e9d44d5dc0cbe",
          "_tpl": "619666f4af1f5202c57a952d",
          "parentId": "333abbc844910866e9c45843",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "24c1830d90a87ceee82ae22b",
          "_tpl": "618167528004cc50514c34f9",
          "parentId": "915c833dd9c5f49ac592a7c8",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "fb66566db29f7ad9848efed6",
          "_tpl": "618167441cb55961fa0fdc71",
          "parentId": "915c833dd9c5f49ac592a7c8",
          "slotId": "mod_stock_002"
        },
        {
          "_id": "ea0f1bb3386587cddadef0ee",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "195e956f41614be0d05f03e8",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "97c7175208f13f467aa247cf",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "190a72b1179e9d44d5dc0cbe",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "f46459997065ed702e016e81",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "190a72b1179e9d44d5dc0cbe",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "6efc2849191d561da8427c9d",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "ea0f1bb3386587cddadef0ee",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ac0f5e53d1b35bfd8e3a2308",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "97c7175208f13f467aa247cf",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "aa7f6404256cd5e5d36eec4e",
          "_tpl": "618167616ef05c2ce828f1a8",
          "parentId": "24c1830d90a87ceee82ae22b",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6690377c010013bd2d39f13e",
      "Name": "Dealbreaker",
      "Root": "c82841d94d1e92370005c3e6",
      "Items": [
        {
          "_id": "c82841d94d1e92370005c3e6",
          "_tpl": "5fbcc1d9016cce60e8341ab3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "c4f3dde2278432d077c1cfe2",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "c82841d94d1e92370005c3e6",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "1a04f98e120b080ea8ad9b8b",
          "_tpl": "5c6d450c2e221600114c997d",
          "parentId": "c82841d94d1e92370005c3e6",
          "slotId": "mod_magazine"
        },
        {
          "_id": "651f8e0fe9b2168cecd3827d",
          "_tpl": "5fbcc3e4d6fa9c00c571bb58",
          "parentId": "c82841d94d1e92370005c3e6",
          "slotId": "mod_reciever"
        },
        {
          "_id": "3d75ecf230fd8dc51cd90ec7",
          "_tpl": "58ac1bf086f77420ed183f9f",
          "parentId": "c82841d94d1e92370005c3e6",
          "slotId": "mod_stock"
        },
        {
          "_id": "e638dc044760adc17fdce61b",
          "_tpl": "5fbcc640016cce60e8341acc",
          "parentId": "c82841d94d1e92370005c3e6",
          "slotId": "mod_charge"
        },
        {
          "_id": "088ded043f1ca7cfd2f83d81",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "651f8e0fe9b2168cecd3827d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3f41732519b896638eb6dfc8",
          "_tpl": "5fbbfacda56d053a3543f799",
          "parentId": "651f8e0fe9b2168cecd3827d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fa464718b23da769b48e36be",
          "_tpl": "5fbc226eca32ed67276c155d",
          "parentId": "651f8e0fe9b2168cecd3827d",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1ec13774adafbe41c04218d3",
          "_tpl": "5fc0fa957283c4046c58147e",
          "parentId": "651f8e0fe9b2168cecd3827d",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bb48ac43acb075da8d044535",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "3d75ecf230fd8dc51cd90ec7",
          "slotId": "mod_stock"
        },
        {
          "_id": "1541baa46534a9708a3f6db3",
          "_tpl": "5fbe7618d6fa9c00c571bb6c",
          "parentId": "3f41732519b896638eb6dfc8",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "29f1fa56b56aeb70ebbd7683",
          "_tpl": "5fbc210bf24b94483f726481",
          "parentId": "3f41732519b896638eb6dfc8",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "605a8be64ddcb4b190396e8b",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "fa464718b23da769b48e36be",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "5ff930bebf8c5109ffe642a2",
          "_tpl": "5fc0fa362770a0045c59c677",
          "parentId": "fa464718b23da769b48e36be",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "73e56c942f3a24859f7e32ba",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "fa464718b23da769b48e36be",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "436a41f44ee418a7a533d7d1",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "605a8be64ddcb4b190396e8b",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "74c2fd79e54682ec4ffc777b",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "73e56c942f3a24859f7e32ba",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e82978b1e37d9bfd9c2a3c78",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "bb48ac43acb075da8d044535",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "32a531f07ef8b67679a84727",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "e82978b1e37d9bfd9c2a3c78",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66903815010013bd2d871821",
      "Name": "Oathbreaker",
      "Root": "c05de819c69b0132326b968d",
      "Items": [
        {
          "_id": "c05de819c69b0132326b968d",
          "_tpl": "5fb64bc92b1b027b1f50bcf2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "789f181b8340dceaf25a8093",
          "_tpl": "5fb651dc85f90547f674b6f4",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "067eadf43c4e11ff95e3b1a4",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "69c347503757c4d6c84df5d3",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ec7548ca72d39952f66110ac",
          "_tpl": "655f13e0a246670fb0373245",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0,
                0
              ],
              "ScopesSelectedModes": [
                0,
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8bffdb8ebd37ee8e9644ae7a",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_stock"
        },
        {
          "_id": "e4f304ab878211df5df6d79e",
          "_tpl": "5fb65363d1409e5ca04b54f5",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "48fe86f834bc7b711239a421",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_mount"
        },
        {
          "_id": "f2dafe048a551deb9dcf7403",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "8cc5af20c9e04a9efe6a7f29",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c05de819c69b0132326b968d",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "3b5d3757a5f8f988cc2f1400",
          "_tpl": "5d120a10d7ad1a4e1026ba85",
          "parentId": "8bffdb8ebd37ee8e9644ae7a",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "aa189712e90c4b0a36d51c47",
          "_tpl": "5fc4b992187fea44d52edaa9",
          "parentId": "e4f304ab878211df5df6d79e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "13e1b22dc48c06ba2849c6d1",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "48fe86f834bc7b711239a421",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "7394fc66ee1b8047792ce77d",
          "_tpl": "5fc4b9b17283c4046c5814d7",
          "parentId": "aa189712e90c4b0a36d51c47",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669038d0010013bd2d7d3a25",
      "Name": "Red Army",
      "Root": "aa00a33f181286e4f00a67bc",
      "Items": [
        {
          "_id": "aa00a33f181286e4f00a67bc",
          "_tpl": "5a0ec13bfcdbcb00165aa685",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "4a2a5703de29403f99c620f2",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "8d5cc87d13a0cdf42ae9b373",
          "_tpl": "593d489686f7745c6255d58a",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ebef7dbc3b7167b3caee20b5",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "a81cfcbfe51bbd0021689d00",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_reciever"
        },
        {
          "_id": "2a98573764d971b061352f76",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a5d3009d39b3144f0a9190c2",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_stock"
        },
        {
          "_id": "4b74b922241db13d9fbea8ca",
          "_tpl": "5cfe8010d7ad1a59283b14c6",
          "parentId": "aa00a33f181286e4f00a67bc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0857332357b2943962076940",
          "_tpl": "5b80242286f77429445e0b47",
          "parentId": "4a2a5703de29403f99c620f2",
          "slotId": "mod_handguard"
        },
        {
          "_id": "be72a7b1d704e545acdb26a6",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "a81cfcbfe51bbd0021689d00",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "df40e26418470cb72522cf63",
          "_tpl": "5b8403a086f7747ff856f4e2",
          "parentId": "0857332357b2943962076940",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "5faed3eadf6f6023990e6f48",
          "_tpl": "65169d5b30425317755f8e25",
          "parentId": "df40e26418470cb72522cf63",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66903938010013bd2d74a5c5",
      "Name": "Burnished Sniper",
      "Root": "f2de17023c2b800ad066f2f1",
      "Items": [
        {
          "_id": "f2de17023c2b800ad066f2f1",
          "_tpl": "5f2a9575926fd9352339381f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1fd92d97240f6583bcc520b7",
          "_tpl": "5b099ac65acfc400186331e1",
          "parentId": "f2de17023c2b800ad066f2f1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "ca29642c6f09f7c498278b5b",
          "_tpl": "5f2aa46b878ef416f538b567",
          "parentId": "f2de17023c2b800ad066f2f1",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ce86feb8b66b5495d05def03",
          "_tpl": "5f2aa47a200e2c0ee46efa71",
          "parentId": "f2de17023c2b800ad066f2f1",
          "slotId": "mod_handguard"
        },
        {
          "_id": "7835aa5aa2508ef758a59d04",
          "_tpl": "5f2aa49f9b44de6b1b4e68d4",
          "parentId": "f2de17023c2b800ad066f2f1",
          "slotId": "mod_mount"
        },
        {
          "_id": "041ffd724030e75dd300cbb3",
          "_tpl": "5f2aa43ba9b91d26f20ae6d2",
          "parentId": "ca29642c6f09f7c498278b5b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5e8d24531ea2ec776a441608",
          "_tpl": "5f2aa493cd375f14e15eea72",
          "parentId": "ce86feb8b66b5495d05def03",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "052a8887bd6ab06980f8cbc0",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "7835aa5aa2508ef758a59d04",
          "slotId": "mod_scope"
        },
        {
          "_id": "23ec856955d6f26f5b352da1",
          "_tpl": "5a34fd2bc4a282329a73b4c5",
          "parentId": "041ffd724030e75dd300cbb3",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9362945a2d41fda0c4b836a0",
          "_tpl": "5a34fe59c4a282000b1521a2",
          "parentId": "23ec856955d6f26f5b352da1",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "902613e60fded3c033805fd9",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "052a8887bd6ab06980f8cbc0",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669039ae010013bd2d9b395a",
      "Name": "Scar",
      "Root": "86fa8d0ad1653105c5641fe2",
      "Items": [
        {
          "_id": "86fa8d0ad1653105c5641fe2",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "64bad83dceef9f52067dc614",
          "_tpl": "55d4b9964bdc2d1d4e8b456e",
          "parentId": "86fa8d0ad1653105c5641fe2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "539d1fb4f2f215fdea999e3c",
          "_tpl": "5d1340b3d7ad1a0b52682ed7",
          "parentId": "86fa8d0ad1653105c5641fe2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "dcd948f5ef9b498f9fce03fa",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "86fa8d0ad1653105c5641fe2",
          "slotId": "mod_reciever"
        },
        {
          "_id": "fb533f16d2022a279d9be575",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "86fa8d0ad1653105c5641fe2",
          "slotId": "mod_stock"
        },
        {
          "_id": "eb35d72a63a514a0bd40fea7",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "86fa8d0ad1653105c5641fe2",
          "slotId": "mod_charge"
        },
        {
          "_id": "066f727c76b27b7221245982",
          "_tpl": "558022b54bdc2dac148b458d",
          "parentId": "dcd948f5ef9b498f9fce03fa",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "20e83c857af0480b534f3d69",
          "_tpl": "55d3632e4bdc2d972f8b4569",
          "parentId": "dcd948f5ef9b498f9fce03fa",
          "slotId": "mod_barrel"
        },
        {
          "_id": "c84cf5b91118b194497e9331",
          "_tpl": "5c9a26332e2216001219ea70",
          "parentId": "dcd948f5ef9b498f9fce03fa",
          "slotId": "mod_handguard"
        },
        {
          "_id": "69142e57218f846848d7ffef",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "fb533f16d2022a279d9be575",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "7b68e52dad9b24b0abd13a48",
          "_tpl": "56ea8180d2720bf2698b456a",
          "parentId": "20e83c857af0480b534f3d69",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3a63dab909657eb8c4a69696",
          "_tpl": "5ae30e795acfc408fb139a0b",
          "parentId": "20e83c857af0480b534f3d69",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "0d0fdd1e0cb2a53926196d38",
          "_tpl": "5fce0cf655375d18a253eff0",
          "parentId": "c84cf5b91118b194497e9331",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "a242b970eac7f545bd93daa2",
          "_tpl": "57dbb57e2459774673234890",
          "parentId": "7b68e52dad9b24b0abd13a48",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "558827a5ca21e4b834662e3e",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "69142e57218f846848d7ffef",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66903a73010013bd2de62a63",
      "Name": "Agent Of Silence",
      "Root": "57e1bc94dc169772f551d36c",
      "Items": [
        {
          "_id": "57e1bc94dc169772f551d36c",
          "_tpl": "5bfea6e90db834001b7347f3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1dc994f3bd04d9b168cebb3e",
          "_tpl": "5d25d0ac8abbc3054f3e61f7",
          "parentId": "57e1bc94dc169772f551d36c",
          "slotId": "mod_stock"
        },
        {
          "_id": "ddde862d68aaf78656360596",
          "_tpl": "5bfebc320db8340019668d79",
          "parentId": "57e1bc94dc169772f551d36c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "648a45fbd06482283e34da50",
          "_tpl": "5bfebc530db834001d23eb65",
          "parentId": "57e1bc94dc169772f551d36c",
          "slotId": "mod_mount"
        },
        {
          "_id": "a36149cd226f9b6076891321",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "1dc994f3bd04d9b168cebb3e",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "230c3ddd517a9c981443737c",
          "_tpl": "59bffc1f86f77435b128b872",
          "parentId": "ddde862d68aaf78656360596",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "aa6f085e7c8132e5d8ec06e3",
          "_tpl": "5a37ca54c4a282000d72296a",
          "parentId": "648a45fbd06482283e34da50",
          "slotId": "mod_scope"
        },
        {
          "_id": "1300134325f162b1dec0448a",
          "_tpl": "57d17e212459775a1179a0f5",
          "parentId": "a36149cd226f9b6076891321",
          "slotId": "mod_tactical"
        },
        {
          "_id": "4a0bceed6130ddf0dcf1fcb2",
          "_tpl": "57d17c5e2459775a5c57d17d",
          "parentId": "1300134325f162b1dec0448a",
          "slotId": "mod_flashlight",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ea22d2620d6683471304338f",
          "_tpl": "59bffbb386f77435b379b9c2",
          "parentId": "230c3ddd517a9c981443737c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1283c4e8019a991717bb330c",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "aa6f085e7c8132e5d8ec06e3",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "184c7d707106b114a8ca329e",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "aa6f085e7c8132e5d8ec06e3",
          "slotId": "mod_scope_001",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66903b84010013bd2dd05398",
      "Name": "Judged",
      "Root": "eaf0b758679a3d279b58b5ac",
      "Items": [
        {
          "_id": "eaf0b758679a3d279b58b5ac",
          "_tpl": "6165ac306ef05c2ce828ef74",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0c5b865f7081e2fe7fa66b66",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "eaf0b758679a3d279b58b5ac",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c0ff91478eff05ef5f35f84a",
          "_tpl": "618168dc8004cc50514c34fc",
          "parentId": "eaf0b758679a3d279b58b5ac",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4a2c9d06529c036f3e792d08",
          "_tpl": "6165aeedfaa1272e431521e3",
          "parentId": "eaf0b758679a3d279b58b5ac",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b0581e160fe044f4370cac7b",
          "_tpl": "61825d06d92c473c770215de",
          "parentId": "eaf0b758679a3d279b58b5ac",
          "slotId": "mod_stock"
        },
        {
          "_id": "36339d8f114e8f86062bacb5",
          "_tpl": "6181688c6c780c1e710c9b04",
          "parentId": "eaf0b758679a3d279b58b5ac",
          "slotId": "mod_charge"
        },
        {
          "_id": "9e1d80fab0a23e228859fe6a",
          "_tpl": "6183b0711cb55961fa0fdcad",
          "parentId": "4a2c9d06529c036f3e792d08",
          "slotId": "mod_barrel"
        },
        {
          "_id": "033c506c4cd13ff675064bc4",
          "_tpl": "619666f4af1f5202c57a952d",
          "parentId": "4a2c9d06529c036f3e792d08",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "c3bcf6c4e7a6e5afb746e99b",
          "_tpl": "5649a2464bdc2d91118b45a8",
          "parentId": "4a2c9d06529c036f3e792d08",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "1904bb323193769cac5201e4",
          "_tpl": "618167528004cc50514c34f9",
          "parentId": "b0581e160fe044f4370cac7b",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "a0cca2d938ccfa47843ccafa",
          "_tpl": "61825d24d3a39d50044c13af",
          "parentId": "b0581e160fe044f4370cac7b",
          "slotId": "mod_stock_002"
        },
        {
          "_id": "6232ab3a20d1c920063c51ec",
          "_tpl": "5d1f819086f7744b355c219b",
          "parentId": "9e1d80fab0a23e228859fe6a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "baa2c98e2dbf80d52458f99d",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "033c506c4cd13ff675064bc4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "a0ce98f4ebbb305b50463d9c",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "033c506c4cd13ff675064bc4",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "3d80de4318c2c78df2cec993",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "c3bcf6c4e7a6e5afb746e99b",
          "slotId": "mod_scope"
        },
        {
          "_id": "25a8395311fcf227337f8c2c",
          "_tpl": "5cff9e84d7ad1a049e54ed55",
          "parentId": "6232ab3a20d1c920063c51ec",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d425c3efa9b3cf8837a473cc",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "baa2c98e2dbf80d52458f99d",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e6bcd9dbda7cc4d73555831b",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "a0ce98f4ebbb305b50463d9c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a133b388656fc6abbcc8420b",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "3d80de4318c2c78df2cec993",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e88c132ecc1fc01cd028d52f",
          "_tpl": "618167616ef05c2ce828f1a8",
          "parentId": "1904bb323193769cac5201e4",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66904a1c010013bd2d234501",
      "Name": "Bloodrage",
      "Root": "bbf7dbf1d8803b84bcbe0456",
      "Items": [
        {
          "_id": "bbf7dbf1d8803b84bcbe0456",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9060474c4b53c4e574f99876",
          "_tpl": "59ccfdba86f7747f2109a587",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "c56544254b3039fb09037f87",
          "_tpl": "5c878ebb2e2216001219d48a",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "905dd0c507fc8073f3dc4b1e",
          "_tpl": "651580dc71a4f10aec4b6056",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "93fce38df4d6a55d09ab85f7",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_reciever"
        },
        {
          "_id": "efc0a4467d9d5093d6051034",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6ca974ad8099daf9decaefa3",
          "_tpl": "5649b0fc4bdc2d17108b4588",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_stock"
        },
        {
          "_id": "aafadf9bcddeb0f4ba5c9b55",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9cdd2990ccdf417aa9dc893c",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "bbf7dbf1d8803b84bcbe0456",
          "slotId": "mod_charge"
        },
        {
          "_id": "8457e4c0485f53cf0574c1d0",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "93fce38df4d6a55d09ab85f7",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "07d1ce9796d6d9e64d7fe4fb",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "6ca974ad8099daf9decaefa3",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66904a65010013bd2df5ab41",
      "Name": "Direwind",
      "Root": "bc95fdf2ccda1edcebcb1d6b",
      "Items": [
        {
          "_id": "bc95fdf2ccda1edcebcb1d6b",
          "_tpl": "5ba26383d4351e00334c93d9",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3d9118664e39ceac621398a3",
          "_tpl": "5ba26586d4351e44f824b340",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "66b029478775a4a54355c283",
          "_tpl": "5ba26acdd4351e003562908e",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3dc185a2ff71f43a0489ff46",
          "_tpl": "5ba26b01d4351e0085325a51",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "44038b3dceb53b9bba6df9e7",
          "_tpl": "5ba26b17d4351e00367f9bdd",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "adcacac9b3c5ab8c614a9663",
          "_tpl": "60a23797a37c940de7062d02",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "30ebadcf864150eb71bffb95",
          "_tpl": "5bcf0213d4351e0085327c17",
          "parentId": "bc95fdf2ccda1edcebcb1d6b",
          "slotId": "mod_stock"
        },
        {
          "_id": "89640c4d83be382e7d96e92a",
          "_tpl": "5ba26ae8d4351e00367f9bdb",
          "parentId": "66b029478775a4a54355c283",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66904cb9010013bd2d0481d2",
      "Name": "King Killer",
      "Root": "40577ae4089b5b5273067c04",
      "Items": [
        {
          "_id": "40577ae4089b5b5273067c04",
          "_tpl": "5df8ce05b11454561e39243b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "72d54abc07a62204282f6a82",
          "_tpl": "57af48872459771f0b2ebf11",
          "parentId": "40577ae4089b5b5273067c04",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "2204c475bba8d3d071dd3c1d",
          "_tpl": "65293c38fc460e50a509cb25",
          "parentId": "40577ae4089b5b5273067c04",
          "slotId": "mod_magazine"
        },
        {
          "_id": "5628c36a9e3716705cf8b32c",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "40577ae4089b5b5273067c04",
          "slotId": "mod_stock"
        },
        {
          "_id": "71b8809f461e52b0d0b7bdf8",
          "_tpl": "5df8e4080b92095fd441e594",
          "parentId": "40577ae4089b5b5273067c04",
          "slotId": "mod_reciever"
        },
        {
          "_id": "08261576f9fb3c911625c1cc",
          "_tpl": "5df8e053bb49d91fb446d6a6",
          "parentId": "40577ae4089b5b5273067c04",
          "slotId": "mod_charge"
        },
        {
          "_id": "0f0fde90339d92f804a07503",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "5628c36a9e3716705cf8b32c",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "3a31ddfda20099367e29595f",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "71b8809f461e52b0d0b7bdf8",
          "slotId": "mod_scope"
        },
        {
          "_id": "bb61bab5963a95d8078a7036",
          "_tpl": "5df917564a9f347bc92edca3",
          "parentId": "71b8809f461e52b0d0b7bdf8",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ae05c20948e2460370a44cba",
          "_tpl": "5a329052c4a28200741e22d3",
          "parentId": "71b8809f461e52b0d0b7bdf8",
          "slotId": "mod_handguard"
        },
        {
          "_id": "429be27d15bce36735b1fc9a",
          "_tpl": "5dfa3d7ac41b2312ea33362a",
          "parentId": "71b8809f461e52b0d0b7bdf8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "1b3d58b677f4e8157c57f019",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "0f0fde90339d92f804a07503",
          "slotId": "mod_stock"
        },
        {
          "_id": "8bf1530bf433c181015f1ae2",
          "_tpl": "617151c1d92c473c770214ab",
          "parentId": "3a31ddfda20099367e29595f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "11b3752613ea83cbb70751e3",
          "_tpl": "6130c43c67085e45ef1405a1",
          "parentId": "bb61bab5963a95d8078a7036",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "98304d620d24e728368b9f51",
          "_tpl": "6065dc8a132d4d12c81fd8e3",
          "parentId": "bb61bab5963a95d8078a7036",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "10c0523069fe6fb2620f6be4",
          "_tpl": "57cffcd624597763133760c5",
          "parentId": "ae05c20948e2460370a44cba",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2fc76c82d4e1d234b875aa65",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "11b3752613ea83cbb70751e3",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66904d85010013bd2d734fc7",
      "Name": "Vudu",
      "Root": "0629f8effb412ba87068f01a",
      "Items": [
        {
          "_id": "0629f8effb412ba87068f01a",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2fa5144bbfd0b1406c0362d2",
          "_tpl": "55802f5d4bdc2dac148b458f",
          "parentId": "0629f8effb412ba87068f01a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6276fa2139a6f62623fea06b",
          "_tpl": "5c6175362e221600133e3b94",
          "parentId": "0629f8effb412ba87068f01a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8df29dfff5f693a8ccdb124f",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "0629f8effb412ba87068f01a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "cfec09fd2ef350f3ea6d0cbf",
          "_tpl": "606587e18900dc2d9a55b65f",
          "parentId": "0629f8effb412ba87068f01a",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "02898f8b749d86701ae4b1da",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "0629f8effb412ba87068f01a",
          "slotId": "mod_charge"
        },
        {
          "_id": "b4b3d290432756d4a05ca9ad",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "8df29dfff5f693a8ccdb124f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "205e6078ef24a54919f5b161",
          "_tpl": "60658776f2cb2e02a42ace2b",
          "parentId": "8df29dfff5f693a8ccdb124f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "133e089d4c04fbac1ce991d8",
          "_tpl": "6065880c132d4d12c81fd8da",
          "parentId": "8df29dfff5f693a8ccdb124f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "99f82c9f16f17631dc873876",
          "_tpl": "5bc09a18d4351e003562b68e",
          "parentId": "8df29dfff5f693a8ccdb124f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "68759754adf9a4a6885b59cd",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "cfec09fd2ef350f3ea6d0cbf",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "3c11e6e4297341d0b7153247",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "205e6078ef24a54919f5b161",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "78d3574b4101548821944b22",
          "_tpl": "6065dc8a132d4d12c81fd8e3",
          "parentId": "205e6078ef24a54919f5b161",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "6b4861f5844e56fc3c3cd0d8",
          "_tpl": "651a8bf3a8520e48047bf708",
          "parentId": "133e089d4c04fbac1ce991d8",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "fe1626fc7f0a8982aba9ebd8",
          "_tpl": "5bc09a30d4351e00367fb7c8",
          "parentId": "133e089d4c04fbac1ce991d8",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d2337e40aac200f16755b402",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "68759754adf9a4a6885b59cd",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66904e28010013bd2dd65076",
      "Name": "Chad Pincher",
      "Root": "68d8e3c8722180796bc54a2f",
      "Items": [
        {
          "_id": "68d8e3c8722180796bc54a2f",
          "_tpl": "5fc3f2d5900b1d5091531e57",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ddfc2a276dd63e619435b0e0",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a22f9432ed732c9287cfbd74",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d22e22381dcdd568ca5df2dc",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c22750ad986894f924288664",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e2c7712e3f959552dfcc51e9",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_stock"
        },
        {
          "_id": "fdeaf2689963f6199b0a6b4b",
          "_tpl": "5fbbc366ca32ed67276c1557",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "cd3538a8d4f0bc6be876384e",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_mount"
        },
        {
          "_id": "c98f668789cce8fc9ddd75ac",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "da34812790473d78da826e2c",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "68d8e3c8722180796bc54a2f",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "9016e6b07291c92553cc5d51",
          "_tpl": "591c4e1186f77410354b316e",
          "parentId": "c22750ad986894f924288664",
          "slotId": "mod_tactical"
        },
        {
          "_id": "5dde7dd026236657e1d1253d",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "e2c7712e3f959552dfcc51e9",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "104e019b889e71b71b919504",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "fdeaf2689963f6199b0a6b4b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "b763c3df39be6ee0479fc98e",
          "_tpl": "5f6340d3ca442212f4047eb2",
          "parentId": "cd3538a8d4f0bc6be876384e",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4862c3e2d339e524b452e9a5",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "c98f668789cce8fc9ddd75ac",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5f5d0c24f53ed080ef60a199",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "5dde7dd026236657e1d1253d",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "dcec07823a7e5a8d8d324789",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "5f5d0c24f53ed080ef60a199",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66904eee010013bd2d9e23b1",
      "Name": "CS2 Aug",
      "Root": "7898853ab5350c9330d84ffc",
      "Items": [
        {
          "_id": "7898853ab5350c9330d84ffc",
          "_tpl": "63171672192e68c5460cebc5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "cb6af33e3b19de44f7d6b548",
          "_tpl": "630e295c984633f1fb0e7c30",
          "parentId": "7898853ab5350c9330d84ffc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "2f73c8a177e18fed9178edb0",
          "_tpl": "62ebbc53e3c1e1ec7c02c44f",
          "parentId": "7898853ab5350c9330d84ffc",
          "slotId": "mod_charge"
        },
        {
          "_id": "b826078b049b74fe720a9cfd",
          "_tpl": "62e7c72df68e7a0676050c77",
          "parentId": "7898853ab5350c9330d84ffc",
          "slotId": "mod_reciever"
        },
        {
          "_id": "19611b19c45d833a20a242d1",
          "_tpl": "62e7c7f3c34ea971710c32fc",
          "parentId": "b826078b049b74fe720a9cfd",
          "slotId": "mod_barrel"
        },
        {
          "_id": "c95067d9e719d232ea952214",
          "_tpl": "62ebba1fb658e07ef9082b5a",
          "parentId": "b826078b049b74fe720a9cfd",
          "slotId": "mod_mount"
        },
        {
          "_id": "a27e229b27c388319624c346",
          "_tpl": "630f28f0cadb1fe05e06f004",
          "parentId": "19611b19c45d833a20a242d1",
          "slotId": "mod_muzzle_000"
        },
        {
          "_id": "1c4102235652f61c5da61903",
          "_tpl": "634e61b0767cb15c4601a877",
          "parentId": "19611b19c45d833a20a242d1",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2256686f3df64d822045cc94",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "c95067d9e719d232ea952214",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690657b010013bd2d4ca175",
      "Name": "Sanghelios",
      "Root": "38b87f04bf42716ce1869b78",
      "Items": [
        {
          "_id": "38b87f04bf42716ce1869b78",
          "_tpl": "5fc3f2d5900b1d5091531e57",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0641a43dbacc33dcf2dc426b",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a2853cce37ed89edabddb924",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "1d4d9bdf3d81a40608f81581",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f5a5fadbc357d204ed1b8778",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "427c31a1e9e1369ea76618e0",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_stock"
        },
        {
          "_id": "a511e6f8dda7b3f963e021da",
          "_tpl": "5fbbc366ca32ed67276c1557",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_barrel"
        },
        {
          "_id": "d4ec164e1eceb92dbd1f78b5",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_mount"
        },
        {
          "_id": "ce9e9ca95c626081da845533",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "96b06e2e36466510cf5d544c",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "38b87f04bf42716ce1869b78",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "86ea663495d2fb8113516b2d",
          "_tpl": "591c4e1186f77410354b316e",
          "parentId": "f5a5fadbc357d204ed1b8778",
          "slotId": "mod_tactical"
        },
        {
          "_id": "f7db4c29a625e1b97a3a1f88",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "427c31a1e9e1369ea76618e0",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "c6cb4fc0a3d82c30a68287e8",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "a511e6f8dda7b3f963e021da",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f7953dcf8787d3f4052c0c3a",
          "_tpl": "5f6340d3ca442212f4047eb2",
          "parentId": "d4ec164e1eceb92dbd1f78b5",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "6b1b2032b9187077a1a8d823",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "96b06e2e36466510cf5d544c",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "97d60d1c8a00066c8072ec6d",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "f7db4c29a625e1b97a3a1f88",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "af590f8e6f991f91d2a7f52b",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "97d60d1c8a00066c8072ec6d",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6690659f010013bd2d434738",
      "Name": "Die Scav Die",
      "Root": "8fb4357bdca36cc172de1566",
      "Items": [
        {
          "_id": "8fb4357bdca36cc172de1566",
          "_tpl": "56dee2bdd2720bc8328b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "108152b80a9a9964b04f6ee8",
          "_tpl": "56deec93d2720bec348b4568",
          "parentId": "8fb4357bdca36cc172de1566",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ec44319776964d700c53158d",
          "_tpl": "56deed6ed2720b4c698b4583",
          "parentId": "8fb4357bdca36cc172de1566",
          "slotId": "mod_handguard"
        },
        {
          "_id": "975d114ee38288b8be07da02",
          "_tpl": "5882163224597757561aa920",
          "parentId": "8fb4357bdca36cc172de1566",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8afc839ed853488d04d04f8a",
          "_tpl": "56083be64bdc2d20478b456f",
          "parentId": "8fb4357bdca36cc172de1566",
          "slotId": "mod_stock"
        },
        {
          "_id": "d2cb6090e79f5e23dcc05b43",
          "_tpl": "55d48ebc4bdc2d8c2f8b456c",
          "parentId": "8fb4357bdca36cc172de1566",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "7320d806802ec6789eb711bc",
          "_tpl": "609b9e31506cf869cf3eaf41",
          "parentId": "108152b80a9a9964b04f6ee8",
          "slotId": "mod_mount",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ba4cae84cf596d55ad4ca622",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "d2cb6090e79f5e23dcc05b43",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "e5df8ac6a795e739548cc2c8",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "d2cb6090e79f5e23dcc05b43",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "57df1e0414e744accec4ec1c",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "d2cb6090e79f5e23dcc05b43",
          "slotId": "mod_tactical_003",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669065b7010013bd2d3eb8c8",
      "Name": "Light Work",
      "Root": "dd06438fd596ae2fea4b2123",
      "Items": [
        {
          "_id": "dd06438fd596ae2fea4b2123",
          "_tpl": "56dee2bdd2720bc8328b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "def273bc6b2a0ff6a1c07149",
          "_tpl": "56deec93d2720bec348b4568",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_barrel"
        },
        {
          "_id": "66384f0e90a30d134fd9b170",
          "_tpl": "56deed6ed2720b4c698b4583",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_handguard"
        },
        {
          "_id": "8d2539e9700a9fc93d6f7f61",
          "_tpl": "56deeefcd2720bc8328b4568",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_magazine"
        },
        {
          "_id": "019db730e69f6bb8a106e4c9",
          "_tpl": "56083be64bdc2d20478b456f",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_stock"
        },
        {
          "_id": "2502db16d9e17308c543887f",
          "_tpl": "55d48a634bdc2d8b2f8b456a",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_mount"
        },
        {
          "_id": "377e16c9bc80745466c7895c",
          "_tpl": "55d48ebc4bdc2d8c2f8b456c",
          "parentId": "dd06438fd596ae2fea4b2123",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "0176d4ba839bd7fb7c301e7b",
          "_tpl": "560838c94bdc2d77798b4569",
          "parentId": "def273bc6b2a0ff6a1c07149",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3f5f91a3caaeb4496d1cf038",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "2502db16d9e17308c543887f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "21b06e062aa26b1bb779d8ef",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "377e16c9bc80745466c7895c",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669065c6010013bd2d9629ed",
      "Name": "Body Full Of Lead",
      "Root": "8d431e8311ba6d88f3338166",
      "Items": [
        {
          "_id": "8d431e8311ba6d88f3338166",
          "_tpl": "576165642459773c7a400233",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "eb6ce53777d5d68834bd1ddd",
          "_tpl": "5827272a24597748c74bdeea",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_handguard"
        },
        {
          "_id": "f002411029c2c1c0d67ce880",
          "_tpl": "59c0ec5b86f77435b128bfca",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "71a9f60373d60b060d4755b3",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "93f3853f01b862a20f727e64",
          "_tpl": "57616c112459773cce774d66",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b14247a5f1bcfaac80bc3d91",
          "_tpl": "57a9b9ce2459770ee926038d",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "540db784aac39b9232a513b9",
          "_tpl": "57616ca52459773c69055192",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_stock"
        },
        {
          "_id": "acbb80103b8460f6a6777071",
          "_tpl": "5a966f51a2750c00156aacf6",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_magazine"
        },
        {
          "_id": "17030f7b13782bbb7ad462a3",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "8d431e8311ba6d88f3338166",
          "slotId": "mod_charge"
        },
        {
          "_id": "3d615fd6faf66ca67d8c776f",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "eb6ce53777d5d68834bd1ddd",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e16cfe3545272dbaf3b991bc",
          "_tpl": "5c7fc87d2e221644f31c0298",
          "parentId": "eb6ce53777d5d68834bd1ddd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "75378957ad21b42c33b84163",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "eb6ce53777d5d68834bd1ddd",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ec1de394a62b4ba9b3606c73",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "540db784aac39b9232a513b9",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669065f8010013bd2d9709dd",
      "Name": "John Wicks Benelli M4",
      "Root": "08b89c4200f7ed8cc89b1c0f",
      "Items": [
        {
          "_id": "08b89c4200f7ed8cc89b1c0f",
          "_tpl": "6259b864ebedf17603599e88",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "fa99369695f0ad6c541b69a4",
          "_tpl": "6259c2c1d714855d182bad85",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fa6ac094153e8be5460e0078",
          "_tpl": "6259c4347d6aab70bc23a190",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "a1402a286a97fcceb0c96c3f",
          "_tpl": "6259bdcabd28e4721447a2aa",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "fe2118a1311de063c2d44df9",
          "_tpl": "625eb0faa6e3a82193267ad9",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_stock"
        },
        {
          "_id": "8a24e296a73fc58ccdd8b092",
          "_tpl": "625ed7c64d9b6612df732146",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_mount"
        },
        {
          "_id": "22f125d45a68777ffd05cc8d",
          "_tpl": "625ebcef6f53af4aa66b44dc",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "833424d807c65798ec20d063",
          "_tpl": "625ec45bb14d7326ac20f572",
          "parentId": "08b89c4200f7ed8cc89b1c0f",
          "slotId": "mod_charge"
        },
        {
          "_id": "ebef7a3d6bf9cf137ba37b89",
          "_tpl": "560838c94bdc2d77798b4569",
          "parentId": "fa99369695f0ad6c541b69a4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f244bde7a2ce532afbaacc0e",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "8a24e296a73fc58ccdd8b092",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906618010013bd2dffa725",
      "Name": "Chad Shredder",
      "Root": "6f400a89df117ac13f454463",
      "Items": [
        {
          "_id": "6f400a89df117ac13f454463",
          "_tpl": "576165642459773c7a400233",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d371bea67b46791a84b124e9",
          "_tpl": "63d114019e35b334d82302f7",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "b999dc7d2f152a2ae712a2cb",
          "_tpl": "6086b5731246154cad35d6c7",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_handguard"
        },
        {
          "_id": "2ade9af24e0775a6b36deade",
          "_tpl": "59fb137a86f7740adb646af1",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2f5252896a2b75081081f5cc",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "8db93533c724d9684a381d69",
          "_tpl": "57616c112459773cce774d66",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9d697c006e61064a2c74381d",
          "_tpl": "57a9b9ce2459770ee926038d",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ab031abe74b4ebdf681c326d",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_stock"
        },
        {
          "_id": "b420c5f3bc2026484b4a8e16",
          "_tpl": "5cf8f3b0d7f00c00217872ef",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4029fdbbd56a5b6513efe519",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "6f400a89df117ac13f454463",
          "slotId": "mod_charge"
        },
        {
          "_id": "15e125f64e259d9867009436",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "d371bea67b46791a84b124e9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3725e543be5ddf6beb164e94",
          "_tpl": "6086b5392535c57a13424d70",
          "parentId": "b999dc7d2f152a2ae712a2cb",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "a07e1876319309c76ebca4b4",
          "_tpl": "59ecc3dd86f7746dc827481c",
          "parentId": "ab031abe74b4ebdf681c326d",
          "slotId": "mod_stock"
        },
        {
          "_id": "485088b450186bee01fa081c",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "3725e543be5ddf6beb164e94",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906628010013bd2da61056",
      "Name": "Pridefull Sniper",
      "Root": "00f4a7ab39d2e22fc09d561b",
      "Items": [
        {
          "_id": "00f4a7ab39d2e22fc09d561b",
          "_tpl": "5bfea6e90db834001b7347f3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "59760db5df617021cecdcc1b",
          "_tpl": "5bfea7ad0db834001c38f1ee",
          "parentId": "00f4a7ab39d2e22fc09d561b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7451c8df696a163d9dcae3e8",
          "_tpl": "5bfeb32b0db834001a6694d9",
          "parentId": "00f4a7ab39d2e22fc09d561b",
          "slotId": "mod_stock"
        },
        {
          "_id": "41bb30d9d43b9178ce6a68a9",
          "_tpl": "5bfebc320db8340019668d79",
          "parentId": "00f4a7ab39d2e22fc09d561b",
          "slotId": "mod_barrel"
        },
        {
          "_id": "9a6c904ba1a88aad185dfcde",
          "_tpl": "5bfebc5e0db834001a6694e5",
          "parentId": "00f4a7ab39d2e22fc09d561b",
          "slotId": "mod_mount"
        },
        {
          "_id": "bc9e31cec63fc07422b8dfee",
          "_tpl": "57d17e212459775a1179a0f5",
          "parentId": "7451c8df696a163d9dcae3e8",
          "slotId": "mod_tactical"
        },
        {
          "_id": "e92c66d783760f3d1ca973b2",
          "_tpl": "5c878e9d2e2216000f201903",
          "parentId": "41bb30d9d43b9178ce6a68a9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e4b1bef74fede60a8f617234",
          "_tpl": "618ba27d9008e4636a67f61d",
          "parentId": "9a6c904ba1a88aad185dfcde",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d15210659900756a2530ef77",
          "_tpl": "57d17c5e2459775a5c57d17d",
          "parentId": "bc9e31cec63fc07422b8dfee",
          "slotId": "mod_flashlight",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906644010013bd2db3870f",
      "Name": "Snake",
      "Root": "31e5b740e706ec7b328da99f",
      "Items": [
        {
          "_id": "31e5b740e706ec7b328da99f",
          "_tpl": "5ae08f0a5acfc408fb1398a1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5ddd8ba248d859c3f57ef18d",
          "_tpl": "5ae0973a5acfc4001562206c",
          "parentId": "31e5b740e706ec7b328da99f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "279670ad7c0284875d53ee5f",
          "_tpl": "5ae096d95acfc400185c2c81",
          "parentId": "31e5b740e706ec7b328da99f",
          "slotId": "mod_stock"
        },
        {
          "_id": "42f656b808dda3bb68e47cc9",
          "_tpl": "5ae09bff5acfc4001562219d",
          "parentId": "31e5b740e706ec7b328da99f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a37fe9befb2022a4442b1034",
          "_tpl": "5b3f7bf05acfc433000ecf6b",
          "parentId": "31e5b740e706ec7b328da99f",
          "slotId": "mod_mount"
        },
        {
          "_id": "0f3894a1fa2123f03f5167e4",
          "_tpl": "5bbde409d4351e003562b036",
          "parentId": "279670ad7c0284875d53ee5f",
          "slotId": "mod_stock"
        },
        {
          "_id": "8c2342d316c0d43bce427277",
          "_tpl": "5bbde41ed4351e003562b038",
          "parentId": "279670ad7c0284875d53ee5f",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f45433db4e9c24397db56bb4",
          "_tpl": "5ae099875acfc4001714e593",
          "parentId": "42f656b808dda3bb68e47cc9",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6c69350d703e6b9ebb6f388c",
          "_tpl": "5ae099925acfc4001a5fc7b3",
          "parentId": "42f656b808dda3bb68e47cc9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2ec1e17a06e5b7d361d75259",
          "_tpl": "5bc5a35cd4351e450201232f",
          "parentId": "42f656b808dda3bb68e47cc9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f328011a8efc36d69ec47a1e",
          "_tpl": "5b3f7c005acfc4704b4a1de8",
          "parentId": "a37fe9befb2022a4442b1034",
          "slotId": "mod_mount"
        },
        {
          "_id": "c74866a311faa5ea66f49a4d",
          "_tpl": "5b3f7c1c5acfc40dc5296b1d",
          "parentId": "f328011a8efc36d69ec47a1e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906656010013bd2d4547af",
      "Name": "Lethal Repeater",
      "Root": "0067d1a6ab890fd2ce9bddaf",
      "Items": [
        {
          "_id": "0067d1a6ab890fd2ce9bddaf",
          "_tpl": "5df24cf80dee1b22f862e9bc",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f826d7790e45d4b833980e16",
          "_tpl": "5df25b6c0b92095fd441e4cf",
          "parentId": "0067d1a6ab890fd2ce9bddaf",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b3d82c6e9408de32793177e4",
          "_tpl": "5df256570dee1b22f862e9c4",
          "parentId": "0067d1a6ab890fd2ce9bddaf",
          "slotId": "mod_barrel"
        },
        {
          "_id": "be90def80af6a2bf1cec9259",
          "_tpl": "5df35e59c41b2312ea3334d5",
          "parentId": "0067d1a6ab890fd2ce9bddaf",
          "slotId": "mod_stock",
          "upd": {
            "Foldable": {
              "Folded": false
            }
          }
        },
        {
          "_id": "7bed4ae08598eb8cff2e18ea",
          "_tpl": "5df35e970b92095fd441e4d2",
          "parentId": "0067d1a6ab890fd2ce9bddaf",
          "slotId": "mod_mount"
        },
        {
          "_id": "756534faba16ee7c65e6ae36",
          "_tpl": "5df35e7f2a78646d96665dd4",
          "parentId": "b3d82c6e9408de32793177e4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9d689d892aa127cb2c1696fc",
          "_tpl": "5df25d3bfd6b4e6e2276dc9a",
          "parentId": "be90def80af6a2bf1cec9259",
          "slotId": "mod_handguard"
        },
        {
          "_id": "56a6bd4ecc437db0ed7cefb7",
          "_tpl": "5df38a5fb74cd90030650cb6",
          "parentId": "be90def80af6a2bf1cec9259",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f1e477e5e4a82569549a4610",
          "_tpl": "5df35ddddfc58d14537c2036",
          "parentId": "be90def80af6a2bf1cec9259",
          "slotId": "mod_stock_axis"
        },
        {
          "_id": "aab6b91aa5384d9739341f55",
          "_tpl": "5a37ca54c4a282000d72296a",
          "parentId": "7bed4ae08598eb8cff2e18ea",
          "slotId": "mod_scope"
        },
        {
          "_id": "cf668922ff177fef82321558",
          "_tpl": "5df35eb2b11454561e3923e2",
          "parentId": "9d689d892aa127cb2c1696fc",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "aca66f72317cb46af938aea6",
          "_tpl": "5df35eb2b11454561e3923e2",
          "parentId": "9d689d892aa127cb2c1696fc",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "6c3d0215861051e3b4830a89",
          "_tpl": "5df35ea9c41b2312ea3334d8",
          "parentId": "9d689d892aa127cb2c1696fc",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "1a6090299c6ced97d673f5ef",
          "_tpl": "5df35eb2b11454561e3923e2",
          "parentId": "9d689d892aa127cb2c1696fc",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "5f1fdcf3dafef9378edbb476",
          "_tpl": "5df36948bb49d91fb446d5ad",
          "parentId": "9d689d892aa127cb2c1696fc",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "3f49100d95302b1d5a5da509",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "aab6b91aa5384d9739341f55",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906681010013bd2d452eef",
      "Name": "A Hero Need Not Speak",
      "Root": "43d624791ef9c14a4910f865",
      "Items": [
        {
          "_id": "43d624791ef9c14a4910f865",
          "_tpl": "5ae08f0a5acfc408fb1398a1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "026d449fee8051e0f5de3910",
          "_tpl": "5ae0973a5acfc4001562206c",
          "parentId": "43d624791ef9c14a4910f865",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c26d89e084ab36df4c23c3ee",
          "_tpl": "5ae096d95acfc400185c2c81",
          "parentId": "43d624791ef9c14a4910f865",
          "slotId": "mod_stock"
        },
        {
          "_id": "a407a8e3ade698bda457ea53",
          "_tpl": "5ae09bff5acfc4001562219d",
          "parentId": "43d624791ef9c14a4910f865",
          "slotId": "mod_barrel"
        },
        {
          "_id": "2f5ec785ae58b1e71f88d344",
          "_tpl": "5b3f7bf05acfc433000ecf6b",
          "parentId": "43d624791ef9c14a4910f865",
          "slotId": "mod_mount"
        },
        {
          "_id": "95f8f94f7e2cac281d788a5f",
          "_tpl": "5bbde409d4351e003562b036",
          "parentId": "c26d89e084ab36df4c23c3ee",
          "slotId": "mod_stock"
        },
        {
          "_id": "c0265b0a01eacae6787d57fe",
          "_tpl": "5bbde41ed4351e003562b038",
          "parentId": "c26d89e084ab36df4c23c3ee",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e1e6346275c2f9b77748707d",
          "_tpl": "5ae099875acfc4001714e593",
          "parentId": "a407a8e3ade698bda457ea53",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d4e837bef4dd0a29c97a2611",
          "_tpl": "5ae099925acfc4001a5fc7b3",
          "parentId": "a407a8e3ade698bda457ea53",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "020a6536e79584448f613f54",
          "_tpl": "5b86a0e586f7745b600ccb23",
          "parentId": "a407a8e3ade698bda457ea53",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c88428cbced945de4175b87c",
          "_tpl": "5b3f7c005acfc4704b4a1de8",
          "parentId": "2f5ec785ae58b1e71f88d344",
          "slotId": "mod_mount"
        },
        {
          "_id": "9286c4288958dec08fea2587",
          "_tpl": "5b3f7c1c5acfc40dc5296b1d",
          "parentId": "c88428cbced945de4175b87c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906693010013bd2d3f3bbc",
      "Name": "Stank Rat Special",
      "Root": "a06063c11cf36bf668f06442",
      "Items": [
        {
          "_id": "a06063c11cf36bf668f06442",
          "_tpl": "62e14904c2699c0ec93adc47",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5911191ecf77fa792ee3b92e",
          "_tpl": "62e153bcdb1a5c41971c1b5b",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_magazine"
        },
        {
          "_id": "f57a2207151ad276ef65c804",
          "_tpl": "62e2a7138e1ac9380579c122",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "cec645fd45286e0863abebf4",
          "_tpl": "62e2969582ebf260c20539c2",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_stock"
        },
        {
          "_id": "31f70331d305dbc1dc309eda",
          "_tpl": "62e27a7865f0b1592a49e17b",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_reciever"
        },
        {
          "_id": "62d687e2d54ae09af2971ada",
          "_tpl": "637ba19df7ca6372bf2613d7",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_handguard"
        },
        {
          "_id": "d615f2bc6133582e57e63312",
          "_tpl": "637ba29bf7ca6372bf2613db",
          "parentId": "a06063c11cf36bf668f06442",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "b536da7974b5355f68392b51",
          "_tpl": "62e281349ecd3f493f6df954",
          "parentId": "31f70331d305dbc1dc309eda",
          "slotId": "mod_mount"
        },
        {
          "_id": "0b8d4ed0014de63f553b4c8b",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "b536da7974b5355f68392b51",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669066a8010013bd2d357b85",
      "Name": "Rat Muncher",
      "Root": "086e66c76197722208729b1f",
      "Items": [
        {
          "_id": "086e66c76197722208729b1f",
          "_tpl": "62e14904c2699c0ec93adc47",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9a10b8a96d7c5f57388bb2a9",
          "_tpl": "62e153bcdb1a5c41971c1b5b",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3305a549f033798ed3fadfe0",
          "_tpl": "62e2a7138e1ac9380579c122",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a90657821bbb15ca2958a07e",
          "_tpl": "62e292e7b6c0ee2f230cee00",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_stock"
        },
        {
          "_id": "3e9a160fe0c3261ab17b04e8",
          "_tpl": "62e27a7865f0b1592a49e17b",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "33af5f6556a1b12313c98981",
          "_tpl": "637ba19df7ca6372bf2613d7",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "3f672cb8fb2c7d86b99941be",
          "_tpl": "637b9c37b7e3bc41b21ce71a",
          "parentId": "086e66c76197722208729b1f",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "4134a07b60a75f63926b0f3c",
          "_tpl": "62ff9920fe938a24c90c10d2",
          "parentId": "3e9a160fe0c3261ab17b04e8",
          "slotId": "mod_mount",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "78d650050593db43b57499d2",
          "_tpl": "62ed1921b3608410ef5a2c04",
          "parentId": "33af5f6556a1b12313c98981",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "f5dda313b41eb74d79f8a644",
          "_tpl": "57d17e212459775a1179a0f5",
          "parentId": "78d650050593db43b57499d2",
          "slotId": "mod_tactical"
        },
        {
          "_id": "749d3552c3bff05478782da7",
          "_tpl": "59d790f486f77403cb06aec6",
          "parentId": "f5dda313b41eb74d79f8a644",
          "slotId": "mod_flashlight",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669066bb010013bd2d57eb55",
      "Name": "Legion",
      "Root": "acb0c53059d1871baf162229",
      "Items": [
        {
          "_id": "acb0c53059d1871baf162229",
          "_tpl": "606587252535c57a13424cfd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "6923413f5f810ecb18b1e5c7",
          "_tpl": "55802f5d4bdc2dac148b458f",
          "parentId": "acb0c53059d1871baf162229",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "55c91ccee1dd79b03038d864",
          "_tpl": "59fafc5086f7740dbe19f6c3",
          "parentId": "acb0c53059d1871baf162229",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3a0c676647253b922a1da10f",
          "_tpl": "606587a88900dc2d9a55b659",
          "parentId": "acb0c53059d1871baf162229",
          "slotId": "mod_reciever"
        },
        {
          "_id": "1c5dc0cff9e894c0cdd75a5a",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "acb0c53059d1871baf162229",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "b9cea9ddefc8d346e83b2570",
          "_tpl": "606587bd6d0bd7580617bacc",
          "parentId": "acb0c53059d1871baf162229",
          "slotId": "mod_charge"
        },
        {
          "_id": "c7ebc223ec0708e266daad79",
          "_tpl": "6165ac8c290d254f5e6b2f6c",
          "parentId": "3a0c676647253b922a1da10f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7724532f80f6ad6310a5906c",
          "_tpl": "60658776f2cb2e02a42ace2b",
          "parentId": "3a0c676647253b922a1da10f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ce67b1fcea051df37ad7f6c4",
          "_tpl": "6065880c132d4d12c81fd8da",
          "parentId": "3a0c676647253b922a1da10f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1e97bf06d103d92453cd1fd3",
          "_tpl": "5bc09a18d4351e003562b68e",
          "parentId": "3a0c676647253b922a1da10f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fa09110091f3a51fbd9ab88f",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "1c5dc0cff9e894c0cdd75a5a",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "58e0986a542e3f252aeecab9",
          "_tpl": "5fbe7618d6fa9c00c571bb6c",
          "parentId": "7724532f80f6ad6310a5906c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3f2ba4c324bab9f8482205ea",
          "_tpl": "6065dc8a132d4d12c81fd8e3",
          "parentId": "7724532f80f6ad6310a5906c",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f6c565bc96f7b8f40381e56c",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "ce67b1fcea051df37ad7f6c4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e8c4ed61223335d92ed0b4b7",
          "_tpl": "5bc09a30d4351e00367fb7c8",
          "parentId": "ce67b1fcea051df37ad7f6c4",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "47fbc38d39146f8cde9f0151",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "fa09110091f3a51fbd9ab88f",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "669066ca010013bd2de2df79",
      "Name": "Big Stepper",
      "Root": "49064a049b0af42ab67a888b",
      "Items": [
        {
          "_id": "49064a049b0af42ab67a888b",
          "_tpl": "5b0bbe4e5acfc40dc528a72d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9c398209fd2970f2182aaf55",
          "_tpl": "5b099b965acfc400186331e6",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "cac3250d1c076c57470dc0ca",
          "_tpl": "5b099ac65acfc400186331e1",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9658b7ac8e58f75624ffd011",
          "_tpl": "5b7bedd75acfc43d825283f9",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_handguard"
        },
        {
          "_id": "6f5ffbac54bf5f401258a229",
          "_tpl": "5b7be1265acfc400161d0798",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_barrel"
        },
        {
          "_id": "0d663af03aaa2b32a18d7ded",
          "_tpl": "5b0bc22d5acfc47a8607f085",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "361451c74e063e3182a86de3",
          "_tpl": "5b099bb25acfc400186331e8",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "1ddc43960100e7c6b3283079",
          "_tpl": "5b7d64555acfc4001876c8e2",
          "parentId": "49064a049b0af42ab67a888b",
          "slotId": "mod_stock"
        },
        {
          "_id": "e78e97a2396ea82a194294cf",
          "_tpl": "5b7be46e5acfc400170e2dcf",
          "parentId": "9658b7ac8e58f75624ffd011",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "014985a8c47d31d1f7232299",
          "_tpl": "5b7be4575acfc400161d0832",
          "parentId": "9658b7ac8e58f75624ffd011",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e84ba793ecc5f145addca0eb",
          "_tpl": "5b7d68af5acfc400170e30c3",
          "parentId": "6f5ffbac54bf5f401258a229",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8197360f98997313b2298492",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "361451c74e063e3182a86de3",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "851f54a5ba9063a2205bd534",
          "_tpl": "5c87ca002e221600114cb150",
          "parentId": "e78e97a2396ea82a194294cf",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "d532b8bbec75f421bd002307",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "014985a8c47d31d1f7232299",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669066da010013bd2d275d8b",
      "Name": "Baby Packs A Punch",
      "Root": "7e14d271f48b402763fb62c1",
      "Items": [
        {
          "_id": "7e14d271f48b402763fb62c1",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "90363980b9c17cd0e8704a82",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f122457175bf1a3d328fa714",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0d930addeee9a417f7bc8f70",
          "_tpl": "628a664bccaab13006640e47",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7238085951372b70aa812f20",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_reciever"
        },
        {
          "_id": "4271fba73ed4dd2a5d072408",
          "_tpl": "628a7b23b0f75035732dd565",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "590256f240dbf16e0f12179b",
          "_tpl": "5649b2314bdc2d79388b4576",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "2969c6547058bf05e49a6648",
          "_tpl": "6272874a6c47bd74f92e2087",
          "parentId": "7e14d271f48b402763fb62c1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1d26436c17ba3612280f0591",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "90363980b9c17cd0e8704a82",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c1ae8e7687cda8c547f06753",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "7238085951372b70aa812f20",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5cdbce8023013e49d29dfea8",
          "_tpl": "638de3603a1a4031d8260b8c",
          "parentId": "590256f240dbf16e0f12179b",
          "slotId": "mod_stock"
        },
        {
          "_id": "7a8ff37ac5a2926e55031128",
          "_tpl": "5beec8c20db834001d2c465c",
          "parentId": "5cdbce8023013e49d29dfea8",
          "slotId": "mod_stock_000"
        }
      ]
    },
    {
      "Id": "669066ec010013bd2d991a1c",
      "Name": "Hail Stalin",
      "Root": "0c21a5968e3dbe50b63c19aa",
      "Items": [
        {
          "_id": "0c21a5968e3dbe50b63c19aa",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "757a4edb31d25903c9a2553a",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "750128999c46ed633a86fd6d",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "79741da3c84840cb17214bec",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c4c786cd0b60b8e8a21ae639",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_reciever"
        },
        {
          "_id": "42879d92c05682d6100a996c",
          "_tpl": "628a7b23b0f75035732dd565",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b673011890bca6142a3f28a7",
          "_tpl": "5e217ba4c1434648c13568cd",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "d471200f62711ec6d6a9fb96",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a058462049664f04b893124c",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "0c21a5968e3dbe50b63c19aa",
          "slotId": "mod_charge"
        },
        {
          "_id": "6599817fa8be012700aa7700",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "757a4edb31d25903c9a2553a",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "51b66bed22fc5aedc3cb508e",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "c4c786cd0b60b8e8a21ae639",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0101f90557778dfb6e60d941",
          "_tpl": "5cda9bcfd7f00c0c0b53e900",
          "parentId": "6599817fa8be012700aa7700",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6690670c010013bd2dc08f7e",
      "Name": "Slayer",
      "Root": "56eff2b6f3392b0b85b1431d",
      "Items": [
        {
          "_id": "56eff2b6f3392b0b85b1431d",
          "_tpl": "5dcbd56fdbd3d91b3e5468d5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3a597a873d7c3a5c07179cde",
          "_tpl": "5dcbd6dddbd3d91b3e5468de",
          "parentId": "56eff2b6f3392b0b85b1431d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "0c76087bfdfe3f03dbc8289d",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "56eff2b6f3392b0b85b1431d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d6e8cd2dedfec8c9c3a8044a",
          "_tpl": "5dcbd6b46ec07c0c4347a564",
          "parentId": "56eff2b6f3392b0b85b1431d",
          "slotId": "mod_handguard"
        },
        {
          "_id": "fd8f66a5f884449ffd361b02",
          "_tpl": "5dcbe9431e1f4616d354987e",
          "parentId": "56eff2b6f3392b0b85b1431d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ce1d38ab8e0101c5bef6d910",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "56eff2b6f3392b0b85b1431d",
          "slotId": "mod_scope"
        },
        {
          "_id": "2f075a5a133e96c0205ae63e",
          "_tpl": "5dcbe965e4ed22586443a79d",
          "parentId": "fd8f66a5f884449ffd361b02",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "96c9cd5d2691e5d588f37142",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "ce1d38ab8e0101c5bef6d910",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906724010013bd2d1cd556",
      "Name": "Frenzy",
      "Root": "dd4677632c6dd34f00d50ead",
      "Items": [
        {
          "_id": "dd4677632c6dd34f00d50ead",
          "_tpl": "5b0bbe4e5acfc40dc528a72d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3f151101d00cf07e13367c1c",
          "_tpl": "5b7d679f5acfc4001a5c4024",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "d195b1e8082072bf7195f832",
          "_tpl": "5b099ac65acfc400186331e1",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6ef27d4d19cbd5f281e25525",
          "_tpl": "5b099a9d5acfc47a8607efe7",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_handguard"
        },
        {
          "_id": "cb19b079cd924b9bad85d552",
          "_tpl": "5b099a765acfc47a8607efe3",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f6c062b5a26d3c065e54b46f",
          "_tpl": "5b0bc22d5acfc47a8607f085",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b483048e0ccc281d099d80c2",
          "_tpl": "5b099bb25acfc400186331e8",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f6c84fbc768d1d9d49e79f82",
          "_tpl": "5b099bf25acfc4001637e683",
          "parentId": "dd4677632c6dd34f00d50ead",
          "slotId": "mod_stock"
        },
        {
          "_id": "da4fa366e395f2cdbdc4fe32",
          "_tpl": "5c1bc7432e221602b412949d",
          "parentId": "6ef27d4d19cbd5f281e25525",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "dbc7ba6252f4e9b2a71dcf7d",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "6ef27d4d19cbd5f281e25525",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "2783f01eb8dcc5174559e640",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "cb19b079cd924b9bad85d552",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c5347ba181322c91c5c8c562",
          "_tpl": "5d2da1e948f035477b1ce2ba",
          "parentId": "b483048e0ccc281d099d80c2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6e5b50d6c08bc27eca2a1227",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "f6c84fbc768d1d9d49e79f82",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "9baac11ef25591d069bda591",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "6e5b50d6c08bc27eca2a1227",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "5495f8ecd715f4b30c143df4",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "9baac11ef25591d069bda591",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66906741010013bd2d81d757",
      "Name": "Im That Guy Pal",
      "Root": "f9142e42b89b87e0367f3dbc",
      "Items": [
        {
          "_id": "f9142e42b89b87e0367f3dbc",
          "_tpl": "59ff346386f77477562ff5e2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "c11ddb14f82216b011f8bb52",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "68dc33e30d73cc38d2d2f805",
          "_tpl": "5c7951452e221644f31bfd5c",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a2d2253142171e0c839d05fb",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_pistol_grip_akms"
        },
        {
          "_id": "2bce14afe5c5da7935fdd088",
          "_tpl": "59e6449086f7746c9f75e822",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7a074827ae035878b4b2e7c9",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "56d345a73f012d8c38e7f952",
          "_tpl": "5abcd472d8ce8700166032ae",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_stock_akms"
        },
        {
          "_id": "2e7ef8ff858a5cedb711ca8a",
          "_tpl": "64b9cf0ac12b9c38db26923a",
          "parentId": "f9142e42b89b87e0367f3dbc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a8a9a13a15c0b6133ab78f2c",
          "_tpl": "5cf4e3f3d7f00c06595bc7f0",
          "parentId": "c11ddb14f82216b011f8bb52",
          "slotId": "mod_handguard"
        },
        {
          "_id": "07ecf69afb720bf05eacf824",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "56d345a73f012d8c38e7f952",
          "slotId": "mod_stock"
        },
        {
          "_id": "71f129e2766cbf484cf00525",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "a8a9a13a15c0b6133ab78f2c",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "c2465a59e7bdea58563bf02f",
          "_tpl": "5c0505e00db834001b735073",
          "parentId": "a8a9a13a15c0b6133ab78f2c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690675d010013bd2d3ca196",
      "Name": "Headhunter",
      "Root": "3db37a73897d5595e2d82b41",
      "Items": [
        {
          "_id": "3db37a73897d5595e2d82b41",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d0498d65a5848a81e50a80f8",
          "_tpl": "5c0e2ff6d174af02a1659d4a",
          "parentId": "3db37a73897d5595e2d82b41",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "2e3c17d5e85ec964ad69296b",
          "_tpl": "55802d5f4bdc2dac148b458e",
          "parentId": "3db37a73897d5595e2d82b41",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6c464494905fd5efc778f3c1",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "3db37a73897d5595e2d82b41",
          "slotId": "mod_reciever"
        },
        {
          "_id": "4d3d05d25b540d970b1c5f58",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "3db37a73897d5595e2d82b41",
          "slotId": "mod_stock"
        },
        {
          "_id": "6998ff3669d148218e217753",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "3db37a73897d5595e2d82b41",
          "slotId": "mod_charge"
        },
        {
          "_id": "7341e3332d6b525295f84217",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "6c464494905fd5efc778f3c1",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "774b9b63c64ea0c685c81720",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "6c464494905fd5efc778f3c1",
          "slotId": "mod_barrel"
        },
        {
          "_id": "c9ac588977fdf193c8c0aed2",
          "_tpl": "5c0e2f5cd174af02a012cfc9",
          "parentId": "6c464494905fd5efc778f3c1",
          "slotId": "mod_handguard"
        },
        {
          "_id": "ec7fb52b185988ccd37f18fa",
          "_tpl": "5c0fafb6d174af02a96260ba",
          "parentId": "774b9b63c64ea0c685c81720",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c04eaf5bd9fa9604d83c21e3",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "774b9b63c64ea0c685c81720",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f9d3302b1a3c7e4fd91b37db",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "ec7fb52b185988ccd37f18fa",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906781010013bd2dbb8d7e",
      "Name": "Alpha Tarkov Enthusiast",
      "Root": "95c6ad2242a8c544c5c9f866",
      "Items": [
        {
          "_id": "95c6ad2242a8c544c5c9f866",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "898226255d974f9b7d41ec8d",
          "_tpl": "5a33e75ac4a2826c6e06d759",
          "parentId": "95c6ad2242a8c544c5c9f866",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "a6553d4dab2a07abbe587f6a",
          "_tpl": "5c6d450c2e221600114c997d",
          "parentId": "95c6ad2242a8c544c5c9f866",
          "slotId": "mod_magazine"
        },
        {
          "_id": "476ff01e6dec2108c8b86299",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "95c6ad2242a8c544c5c9f866",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7c077103de1fc4851668ba3b",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "95c6ad2242a8c544c5c9f866",
          "slotId": "mod_stock"
        },
        {
          "_id": "7703fae7b150e4600b9e59bc",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "95c6ad2242a8c544c5c9f866",
          "slotId": "mod_charge"
        },
        {
          "_id": "5ee153f226e397d67377ad33",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "476ff01e6dec2108c8b86299",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3e5a7a738f1e35ed55439753",
          "_tpl": "5d440b93a4b9364276578d4b",
          "parentId": "476ff01e6dec2108c8b86299",
          "slotId": "mod_barrel"
        },
        {
          "_id": "dd217b9867f4e3d7257032b5",
          "_tpl": "5c78f2492e221600114c9f04",
          "parentId": "476ff01e6dec2108c8b86299",
          "slotId": "mod_handguard"
        },
        {
          "_id": "da708743a3a86777c846648b",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "5ee153f226e397d67377ad33",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e445914412e95ee2df4c113b",
          "_tpl": "63ac5c9658d0485fc039f0b8",
          "parentId": "3e5a7a738f1e35ed55439753",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "fbced5134078835778e90305",
          "_tpl": "56eabcd4d2720b66698b4574",
          "parentId": "3e5a7a738f1e35ed55439753",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "2c075052fb90252277813de0",
          "_tpl": "651a8bf3a8520e48047bf708",
          "parentId": "dd217b9867f4e3d7257032b5",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "8066fce9a0fd34619332191c",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "dd217b9867f4e3d7257032b5",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669067a6010013bd2de7b2c1",
      "Name": "Cheap Wonder",
      "Root": "b359c81e5b921e4da71d4822",
      "Items": [
        {
          "_id": "b359c81e5b921e4da71d4822",
          "_tpl": "5de652c31b7e3716273428be",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "23b2d40c70eccc39853c7321",
          "_tpl": "5de653abf76fdc1ce94a5a2a",
          "parentId": "b359c81e5b921e4da71d4822",
          "slotId": "mod_magazine"
        },
        {
          "_id": "bc53472c3a263ee4ded7483d",
          "_tpl": "5de655be4a9f347bc92edb88",
          "parentId": "b359c81e5b921e4da71d4822",
          "slotId": "mod_stock"
        },
        {
          "_id": "47c55c8b2859d5b1fa41fbac",
          "_tpl": "5de65547883dde217541644b",
          "parentId": "b359c81e5b921e4da71d4822",
          "slotId": "mod_barrel"
        },
        {
          "_id": "83b4dafa66685b426b193896",
          "_tpl": "5de6558e9f98ac2bc65950fc",
          "parentId": "b359c81e5b921e4da71d4822",
          "slotId": "mod_mount"
        },
        {
          "_id": "ea0975cba17d2061df04bf50",
          "_tpl": "5de6556a205ddc616a6bc4f7",
          "parentId": "47c55c8b2859d5b1fa41fbac",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8669f1ad86209543e21722bb",
          "_tpl": "5c0517910db83400232ffee5",
          "parentId": "83b4dafa66685b426b193896",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669067bd010013bd2d8ac03e",
      "Name": "Reshalas Favorite",
      "Root": "06d070f28543ddd32debb783",
      "Items": [
        {
          "_id": "06d070f28543ddd32debb783",
          "_tpl": "583990e32459771419544dd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ec44ae076c28e345009ce433",
          "_tpl": "5649ad3f4bdc2df8348b4585",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "a6fbf751da1896f362be93fe",
          "_tpl": "59ecc28286f7746d7a68aa8c",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_stock"
        },
        {
          "_id": "5bda02ac13ab47c5ae5ab927",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_charge"
        },
        {
          "_id": "f1b62a90a00c01dd59fd4d48",
          "_tpl": "5bed61680db834001d2c45ab",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3dac286096f9e1321a799788",
          "_tpl": "5943eeeb86f77412d6384f6b",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "df602da76664fdbf92bd46a2",
          "_tpl": "57dc334d245977597164366f",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_reciever"
        },
        {
          "_id": "cf9596ff187e282b59f2f8f6",
          "_tpl": "63d114019e35b334d82302f7",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "14683a0546412a9f41b6a472",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "06d070f28543ddd32debb783",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9460ba3949c49ce5f25380e6",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "a6fbf751da1896f362be93fe",
          "slotId": "mod_stock"
        },
        {
          "_id": "b525d71a926f1ba822a87392",
          "_tpl": "609a63b6e2ff132951242d09",
          "parentId": "cf9596ff187e282b59f2f8f6",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "759b5dfa156664bdc49f05c5",
          "_tpl": "57ffa9f4245977728561e844",
          "parentId": "14683a0546412a9f41b6a472",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "669067dd010013bd2d0d754a",
      "Name": "Tan Man Enthusiast",
      "Root": "3ff821e193e092790c34f604",
      "Items": [
        {
          "_id": "3ff821e193e092790c34f604",
          "_tpl": "5aafa857e5b5b00018480968",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0e3b3c93cc4a9cb5db75bdbb",
          "_tpl": "64b9e2037fdfb81df81e3c25",
          "parentId": "3ff821e193e092790c34f604",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6c8b157958fdbf4137a9813a",
          "_tpl": "5addbf175acfc408fb13965b",
          "parentId": "3ff821e193e092790c34f604",
          "slotId": "mod_stock"
        },
        {
          "_id": "fdad93972c13d298e37e18e4",
          "_tpl": "5aaf9d53e5b5b00015042a52",
          "parentId": "3ff821e193e092790c34f604",
          "slotId": "mod_barrel"
        },
        {
          "_id": "7d1f05806581ee31eb256443",
          "_tpl": "5abcbb20d8ce87001773e258",
          "parentId": "3ff821e193e092790c34f604",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fe8fbd83fdc8c2b9a5898c18",
          "_tpl": "5addbfef5acfc400185c2857",
          "parentId": "3ff821e193e092790c34f604",
          "slotId": "mod_mount"
        },
        {
          "_id": "18df05055c6e38b405528630",
          "_tpl": "626becf9582c3e319310b837",
          "parentId": "6c8b157958fdbf4137a9813a",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b21251c9d0bd3399d8083c99",
          "_tpl": "5aafa1c2e5b5b00015042a56",
          "parentId": "fdad93972c13d298e37e18e4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "7384f314270f1504895a8827",
          "_tpl": "5c0a2cec0db834001b7ce47d",
          "parentId": "fe8fbd83fdc8c2b9a5898c18",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "93876ec0f5820c92e8ccae49",
          "_tpl": "5aafa49ae5b5b00015042a58",
          "parentId": "b21251c9d0bd3399d8083c99",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669067fa010013bd2d451ce8",
      "Name": "Piccolo",
      "Root": "3004dae913c6b610228f56e5",
      "Items": [
        {
          "_id": "3004dae913c6b610228f56e5",
          "_tpl": "59f98b4986f7746f546d2cef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d55c580100c2a430b0b7ee04",
          "_tpl": "5a27bad7c4a282000b15184b",
          "parentId": "3004dae913c6b610228f56e5",
          "slotId": "mod_mount"
        },
        {
          "_id": "bbd5f7857d8e4e3d5811b42f",
          "_tpl": "59f99a7d86f7745b134aa97b",
          "parentId": "3004dae913c6b610228f56e5",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b4694881b9b27c8679a33974",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "d55c580100c2a430b0b7ee04",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5e49861ce5045710d142d976",
          "_tpl": "5a27b3d0c4a282000d721ec1",
          "parentId": "d55c580100c2a430b0b7ee04",
          "slotId": "mod_mount"
        },
        {
          "_id": "f7057a5e9f9bd83535843bb8",
          "_tpl": "5a33b2c9c4a282000c5a9511",
          "parentId": "d55c580100c2a430b0b7ee04",
          "slotId": "mod_scope"
        },
        {
          "_id": "df398e759b4b5d2b999dfd2e",
          "_tpl": "5a27b6bec4a282000e496f78",
          "parentId": "5e49861ce5045710d142d976",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a56e9cfdeefadecccff692e5",
          "_tpl": "5a32aa8bc4a2826c6e06d737",
          "parentId": "f7057a5e9f9bd83535843bb8",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906813010013bd2dbc628d",
      "Name": "YOU CAN RUN BUT U CANT HIDE",
      "Root": "89505d32c8358d25365f21c9",
      "Items": [
        {
          "_id": "89505d32c8358d25365f21c9",
          "_tpl": "5b1fa9b25acfc40018633c01",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5ab2fedc300c159b6282060d",
          "_tpl": "5b1fa9ea5acfc40018633c0a",
          "parentId": "89505d32c8358d25365f21c9",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f3e95ac7bf36c3fe5bdc09b6",
          "_tpl": "5a7b4960e899ef197b331a2d",
          "parentId": "89505d32c8358d25365f21c9",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "729c8424f9951a7975840192",
          "_tpl": "5b1faa0f5acfc40dc528aeb5",
          "parentId": "89505d32c8358d25365f21c9",
          "slotId": "mod_reciever"
        },
        {
          "_id": "1624012196a5137a04d9f032",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "89505d32c8358d25365f21c9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "91f1569af10c929e1ed7ee96",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "89505d32c8358d25365f21c9",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "496d3d005603d8e6f30f67d8",
          "_tpl": "5a7d9122159bd4001438dbf4",
          "parentId": "729c8424f9951a7975840192",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5777c8cd2d8fc390b96f3107",
          "_tpl": "630765777d50ff5e8a1ea718",
          "parentId": "729c8424f9951a7975840192",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906832010013bd2d468c1c",
      "Name": "Silent Cartographer MK 2",
      "Root": "ef79048973942173b4e54dc7",
      "Items": [
        {
          "_id": "ef79048973942173b4e54dc7",
          "_tpl": "5a7ae0c351dfba0017554310",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d856f279507ee2f22b7e39ef",
          "_tpl": "5a6b5f868dc32e000a311389",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_barrel"
        },
        {
          "_id": "55bc2b4792c26bd1a502e0e3",
          "_tpl": "5a7b4960e899ef197b331a2d",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "1df8b868c33a9718acf678cc",
          "_tpl": "5a9685b1a2750c0032157104",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_reciever"
        },
        {
          "_id": "6d28b22c9c3061c48a735315",
          "_tpl": "5a718da68dc32e000d46d264",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_magazine"
        },
        {
          "_id": "43fbaec0b31ceba2dd6c4d96",
          "_tpl": "5a7ad74e51dfba0015068f45",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_tactical"
        },
        {
          "_id": "dd52209fc68295750c45c0dd",
          "_tpl": "5d1c702ad7ad1a632267f429",
          "parentId": "ef79048973942173b4e54dc7",
          "slotId": "mod_stock"
        },
        {
          "_id": "e814c60973f64db6f50c18e9",
          "_tpl": "5a7d9122159bd4001438dbf4",
          "parentId": "1df8b868c33a9718acf678cc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690684e010013bd2d3e2a9d",
      "Name": "I Know What The Ladies Like",
      "Root": "9863e5ace7fce348070cfd74",
      "Items": [
        {
          "_id": "9863e5ace7fce348070cfd74",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "0ba55eee23f02efb1cf2b4e3",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "4a7abffe0ec8511b5e6563ac",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_stock"
        },
        {
          "_id": "8db7515931405c0c8010c78b",
          "_tpl": "5998529a86f774647f44f421",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_magazine"
        },
        {
          "_id": "436c4ff53e2aef22395a33b8",
          "_tpl": "5998598e86f7740b3f498a86",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "624baed0f05afd0f2ed249e2",
          "_tpl": "59985a6c86f77414ec448d17",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0560abf6ee59afb495b4dd70",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c9daa0f34643ab7af356d759",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "9863e5ace7fce348070cfd74",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "61c45aabfb76687b4a95cb61",
          "_tpl": "6494094948796d891603e59f",
          "parentId": "4a7abffe0ec8511b5e6563ac",
          "slotId": "mod_stock"
        },
        {
          "_id": "a540dcf28e6eca8a93c64829",
          "_tpl": "570fd721d2720bc5458b4596",
          "parentId": "624baed0f05afd0f2ed249e2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "496612d1471a7e8b8c109c9b",
          "_tpl": "5648b4534bdc2d3d1c8b4580",
          "parentId": "c9daa0f34643ab7af356d759",
          "slotId": "mod_handguard"
        },
        {
          "_id": "5a87f561d887b918e5236d96",
          "_tpl": "5f6340d3ca442212f4047eb2",
          "parentId": "496612d1471a7e8b8c109c9b",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6690686b010013bd2dea5297",
      "Name": "The Grower Not A Shower",
      "Root": "1f978299383c3bfbd239f978",
      "Items": [
        {
          "_id": "1f978299383c3bfbd239f978",
          "_tpl": "5cadc190ae921500103bb3b6",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "469474c3647f41124afbdafa",
          "_tpl": "5cadc1c6ae9215000f2775a4",
          "parentId": "1f978299383c3bfbd239f978",
          "slotId": "mod_barrel"
        },
        {
          "_id": "e9ee1bd20046014cfacca112",
          "_tpl": "5cadc431ae921500113bb8d5",
          "parentId": "1f978299383c3bfbd239f978",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "fd7e0de4eb0bf9fbe6fec5f6",
          "_tpl": "5cadc55cae921500103bb3be",
          "parentId": "1f978299383c3bfbd239f978",
          "slotId": "mod_reciever"
        },
        {
          "_id": "ef0669113c0ebc5dd69d8006",
          "_tpl": "5cadc2e0ae9215051e1c21e7",
          "parentId": "1f978299383c3bfbd239f978",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3de8890f8a86f651ac37b32e",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "1f978299383c3bfbd239f978",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f7f89336238f0bdf50cf920c",
          "_tpl": "5cadc390ae921500126a77f1",
          "parentId": "469474c3647f41124afbdafa",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3e1ef9fac16e8224e25a83f8",
          "_tpl": "5cadd954ae921500103bb3c2",
          "parentId": "fd7e0de4eb0bf9fbe6fec5f6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8e3912fce5f0750b2be5d39f",
          "_tpl": "5cadd919ae921500126a77f3",
          "parentId": "fd7e0de4eb0bf9fbe6fec5f6",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a0aa312189b6b69ad9029ae4",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "3e1ef9fac16e8224e25a83f8",
          "slotId": "mod_scope"
        },
        {
          "_id": "9a5f131f3c9fba54141a7e00",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "a0aa312189b6b69ad9029ae4",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690688e010013bd2da84c55",
      "Name": "Scav Pleaser",
      "Root": "a92b0c556203bd3ee4f4f95a",
      "Items": [
        {
          "_id": "a92b0c556203bd3ee4f4f95a",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "bb58b35ec27d9546941552f9",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "d1912dfa23c08824f99e9222",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_stock"
        },
        {
          "_id": "23f7553000240494f80d10d8",
          "_tpl": "5c0672ed0db834001b7353f3",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d33a0ee37c9dd28ad7d85234",
          "_tpl": "5998598e86f7740b3f498a86",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f77542d273d2ddf7cea8b1f7",
          "_tpl": "59985a8086f77414ec448d1a",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f95feac83f14a0d06b62d603",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ac1030e39931c5789bb2b3c2",
          "_tpl": "5947db3f86f77447880cf76f",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "341a51151e00cbee0d841010",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "a92b0c556203bd3ee4f4f95a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f590d40a5571e479aa709d43",
          "_tpl": "59ecc3dd86f7746dc827481c",
          "parentId": "d1912dfa23c08824f99e9222",
          "slotId": "mod_stock"
        },
        {
          "_id": "be7c2ad20b0d0cf6a363922f",
          "_tpl": "5d2c829448f0353a5c7d6674",
          "parentId": "341a51151e00cbee0d841010",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "669068a2010013bd2d30fb46",
      "Name": "Freelo",
      "Root": "acde829176874c6967e96931",
      "Items": [
        {
          "_id": "acde829176874c6967e96931",
          "_tpl": "60339954d62c9b14ed777c06",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e8ad404de04ec96416d3883c",
          "_tpl": "55802f5d4bdc2dac148b458f",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e76d57a5b5d5e635987e9c12",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_magazine"
        },
        {
          "_id": "45a430c989ccda0c59cd4a61",
          "_tpl": "602e63fb6335467b0c5ac94d",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d612ac718c9b8a5fac9569fe",
          "_tpl": "602e3f1254072b51b239f713",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "de61c75c654bb7dd35192aeb",
          "_tpl": "6033749e88382f4fab3fd2c5",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_charge"
        },
        {
          "_id": "f5244ebb06e165f1002c6b4f",
          "_tpl": "602f85fd9b513876d4338d9c",
          "parentId": "acde829176874c6967e96931",
          "slotId": "mod_tactical_000"
        },
        {
          "_id": "41dc2fd32e9a64c86cd1a3a0",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "45a430c989ccda0c59cd4a61",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f480e7d63a894410f6661be5",
          "_tpl": "603372d154072b51b239f9e1",
          "parentId": "45a430c989ccda0c59cd4a61",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b4532e2d09838d22b1d13f40",
          "_tpl": "5c78f2612e221600114c9f0d",
          "parentId": "45a430c989ccda0c59cd4a61",
          "slotId": "mod_handguard"
        },
        {
          "_id": "6751764b9a7bde17c79805a8",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "d612ac718c9b8a5fac9569fe",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "b5b7ac961447d79c2f00e6c9",
          "_tpl": "60337f5dce399e10262255d1",
          "parentId": "f480e7d63a894410f6661be5",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4b26e762c930bbd5cc080823",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "b4532e2d09838d22b1d13f40",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669068cb010013bd2d954707",
      "Name": "Best Girl",
      "Root": "c2bfc5e2295366670e49065b",
      "Items": [
        {
          "_id": "c2bfc5e2295366670e49065b",
          "_tpl": "5fc3f2d5900b1d5091531e57",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e0f6212fa58e7c86d53b1403",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e2ac34c7492635468915cefd",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7b695981a0d4987c354864aa",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6221f2cd505c20c54d27a9ed",
          "_tpl": "570fd6c2d2720bc6458b457f",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "53eb65f453d8fa8fb6dab697",
          "_tpl": "5fb6558ad6f0b2136f2d7eb7",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_stock"
        },
        {
          "_id": "31fd3044a0550b3be8b370d4",
          "_tpl": "5fbbc366ca32ed67276c1557",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_barrel"
        },
        {
          "_id": "7b26f98790e3ece396b57601",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_mount"
        },
        {
          "_id": "a2674bb32fa9ab855b8eb3e5",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "fa58f45cb1bf8fade00f58ee",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c2bfc5e2295366670e49065b",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "aa96be363a388311cbbdd1ae",
          "_tpl": "5cf6935bd7f00c06585fb791",
          "parentId": "31fd3044a0550b3be8b370d4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a1ad7e0a781fe3a35c87da00",
          "_tpl": "558032614bdc2de7118b4585",
          "parentId": "7b26f98790e3ece396b57601",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669068dd010013bd2de98dee",
      "Name": "Deathraze",
      "Root": "88df5e06d7e2815b3ca116c9",
      "Items": [
        {
          "_id": "88df5e06d7e2815b3ca116c9",
          "_tpl": "5fb64bc92b1b027b1f50bcf2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5a099b91ffc0f403418d4ccc",
          "_tpl": "5fb651dc85f90547f674b6f4",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "da0ca71c8415301075201b47",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "98e361b3bfeae21d367776e0",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f4d7904cfff68a983613ff08",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0dfc93b1ef21a5fbd8650a5c",
          "_tpl": "5fb6558ad6f0b2136f2d7eb7",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_stock"
        },
        {
          "_id": "39c49525a8deff367eb2bba2",
          "_tpl": "5fb65363d1409e5ca04b54f5",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_barrel"
        },
        {
          "_id": "8ab177db2915ccf468763b86",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_mount"
        },
        {
          "_id": "407b06d3f7f309abdfa6198a",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "eaea9965f3c3e2eb4749849d",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "88df5e06d7e2815b3ca116c9",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "b81583758d33d8988f60e12c",
          "_tpl": "5fb65424956329274326f316",
          "parentId": "39c49525a8deff367eb2bba2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "fde8ab2f229ed1643c16dd57",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "8ab177db2915ccf468763b86",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "b9672d55ad0552580f7950bf",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "eaea9965f3c3e2eb4749849d",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669068fa010013bd2d60c1e1",
      "Name": "Wicked Early Retirement",
      "Root": "f8e7aca9efb862d192bf79ca",
      "Items": [
        {
          "_id": "f8e7aca9efb862d192bf79ca",
          "_tpl": "58948c8e86f77409493f7266",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "87f225db983bd7bb9833658a",
          "_tpl": "63f5feead259b42f0b4d6d0f",
          "parentId": "f8e7aca9efb862d192bf79ca",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "df6402ca951ffa9a6c4d4bd6",
          "_tpl": "5c5db6652e221600113fba51",
          "parentId": "f8e7aca9efb862d192bf79ca",
          "slotId": "mod_magazine"
        },
        {
          "_id": "2af933479b0c5640e29fc079",
          "_tpl": "5894a5b586f77426d2590767",
          "parentId": "f8e7aca9efb862d192bf79ca",
          "slotId": "mod_reciever"
        },
        {
          "_id": "aa1bb1ff44b71fc03940ca6f",
          "_tpl": "5c5db6f82e2216003a0fe914",
          "parentId": "f8e7aca9efb862d192bf79ca",
          "slotId": "mod_stock"
        },
        {
          "_id": "8f343897b90a3c1d1865dc2e",
          "_tpl": "58949edd86f77409483e16a9",
          "parentId": "f8e7aca9efb862d192bf79ca",
          "slotId": "mod_charge"
        },
        {
          "_id": "361e4e003c6aea153e5bf903",
          "_tpl": "57adff4f24597737f373b6e6",
          "parentId": "2af933479b0c5640e29fc079",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fc3ecde7ff8b78edd4e2827f",
          "_tpl": "5c5db5c62e22160012542255",
          "parentId": "2af933479b0c5640e29fc079",
          "slotId": "mod_barrel"
        },
        {
          "_id": "4916e0b5b23f26b7592f54e1",
          "_tpl": "5c5db6302e2216000e5e47f0",
          "parentId": "2af933479b0c5640e29fc079",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e32e3ba83b50a3dc5af29a90",
          "_tpl": "5894a81786f77427140b8347",
          "parentId": "2af933479b0c5640e29fc079",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fdc898068d57d8cfaf83505f",
          "_tpl": "5cf6935bd7f00c06585fb791",
          "parentId": "fc3ecde7ff8b78edd4e2827f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "7c34a434d5100072f2a299fd",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "4916e0b5b23f26b7592f54e1",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906916010013bd2d74108e",
      "Name": "Kabans Baby",
      "Root": "63a9f18e0c5d4d240134ef35",
      "Items": [
        {
          "_id": "63a9f18e0c5d4d240134ef35",
          "_tpl": "5e00903ae9dc277128008b87",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ea5e8a76c2baa75d6cbef154",
          "_tpl": "5de8eac42a78646d96665d91",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6cb9eb0022297ef96724fd12",
          "_tpl": "5de8f237bbaf010b10528a70",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8d9ce37deef308763f4b6e7b",
          "_tpl": "5de910da8b6c4240ba2651b5",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_stock"
        },
        {
          "_id": "7593d595cf1c694387c352ee",
          "_tpl": "5e0090f7e9dc277128008b93",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_reciever"
        },
        {
          "_id": "72f237d14dd1ba7a1593938a",
          "_tpl": "5de922d4b11454561e39239f",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_charge"
        },
        {
          "_id": "870ce3dec07418fa735e835e",
          "_tpl": "5de8fbf2b74cd90030650c79",
          "parentId": "63a9f18e0c5d4d240134ef35",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "b7dfc710ec5a25d8cb405c64",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "6cb9eb0022297ef96724fd12",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "881a664ec249ca48156d3b25",
          "_tpl": "5b30b0dc5acfc400153b7124",
          "parentId": "7593d595cf1c694387c352ee",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "82c19451fc6914d41f5550ae",
          "_tpl": "5de8fb539f98ac2bc659513a",
          "parentId": "7593d595cf1c694387c352ee",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6afdd53d53780d335b1e58ac",
          "_tpl": "5c87ca002e221600114cb150",
          "parentId": "870ce3dec07418fa735e835e",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906929010013bd2d7ff32b",
      "Name": "Basic But Lethal",
      "Root": "a0c854e6211adce3ed879812",
      "Items": [
        {
          "_id": "a0c854e6211adce3ed879812",
          "_tpl": "5926bb2186f7744b1c6c6e60",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e5fbaa1c870e0b1238fb1de5",
          "_tpl": "5926c3b286f774640d189b6b",
          "parentId": "a0c854e6211adce3ed879812",
          "slotId": "mod_magazine"
        },
        {
          "_id": "082d3013b8558de179b68486",
          "_tpl": "5926c0df86f77462f647f764",
          "parentId": "a0c854e6211adce3ed879812",
          "slotId": "mod_reciever"
        },
        {
          "_id": "2d8dfb473631a6b3de2e1bac",
          "_tpl": "5926c32286f774616e42de99",
          "parentId": "a0c854e6211adce3ed879812",
          "slotId": "mod_charge"
        },
        {
          "_id": "74b6c016bf7007e096cfc085",
          "_tpl": "5d19cd96d7ad1a4a992c9f52",
          "parentId": "082d3013b8558de179b68486",
          "slotId": "mod_handguard"
        },
        {
          "_id": "d94dfb6792330036e5e3e9de",
          "_tpl": "5926d2be86f774134d668e4e",
          "parentId": "082d3013b8558de179b68486",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a7cc056767a60020531679ff",
          "_tpl": "5926d3c686f77410de68ebc8",
          "parentId": "082d3013b8558de179b68486",
          "slotId": "mod_stock"
        },
        {
          "_id": "505235e2464c7caf112c335b",
          "_tpl": "5c0000c00db834001a6697fc",
          "parentId": "082d3013b8558de179b68486",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4d17adb9071caf49d04cfc70",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "74b6c016bf7007e096cfc085",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "9d5c5b98da15b5ba437fd024",
          "_tpl": "5c07c5ed0db834001b73571c",
          "parentId": "505235e2464c7caf112c335b",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6690693c010013bd2d2b7d3f",
      "Name": "Annihilator",
      "Root": "f4379759c98ebde91c5f2419",
      "Items": [
        {
          "_id": "f4379759c98ebde91c5f2419",
          "_tpl": "633ec7c2a6918cb895019c6c",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "902ce57e6ae19652f95322bb",
          "_tpl": "633ec6ee025b096d320a3b15",
          "parentId": "f4379759c98ebde91c5f2419",
          "slotId": "mod_magazine"
        },
        {
          "_id": "747fd99b49bb09fc342af900",
          "_tpl": "633ec8e4025b096d320a3b1e",
          "parentId": "f4379759c98ebde91c5f2419",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "aa90d6f7d6b1dc2660a2540a",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "f4379759c98ebde91c5f2419",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "9ccb68676c606947b29c4d2d",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "f4379759c98ebde91c5f2419",
          "slotId": "mod_scope"
        },
        {
          "_id": "2512c51410d720284da6767d",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "9ccb68676c606947b29c4d2d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906977010013bd2d81b4bd",
      "Name": "The Captain",
      "Root": "92e6b8f23b41493f490c9089",
      "Items": [
        {
          "_id": "92e6b8f23b41493f490c9089",
          "_tpl": "5bb2475ed4351e00853264e3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9a5d90440dc971fda7731a5d",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "92e6b8f23b41493f490c9089",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "56103eb7ef86b28ebf98dabb",
          "_tpl": "5448c1d04bdc2dff2f8b4569",
          "parentId": "92e6b8f23b41493f490c9089",
          "slotId": "mod_magazine"
        },
        {
          "_id": "bc30d2c69615c12e4e254740",
          "_tpl": "5bb20d53d4351e4502010a69",
          "parentId": "92e6b8f23b41493f490c9089",
          "slotId": "mod_reciever"
        },
        {
          "_id": "5096758e2cbc3904229ac753",
          "_tpl": "5bb20e58d4351e00320205d7",
          "parentId": "92e6b8f23b41493f490c9089",
          "slotId": "mod_stock"
        },
        {
          "_id": "1a7c1ca5865736eafa5182df",
          "_tpl": "5bb20dbcd4351e44f824c04e",
          "parentId": "92e6b8f23b41493f490c9089",
          "slotId": "mod_charge"
        },
        {
          "_id": "62294ad99a29b03265f1a81a",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "bc30d2c69615c12e4e254740",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d614886162f6cb0624872959",
          "_tpl": "5bb20dadd4351e00367faeff",
          "parentId": "bc30d2c69615c12e4e254740",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f202f68c1f6873a4f77654a9",
          "_tpl": "5c6d11072e2216000e69d2e4",
          "parentId": "bc30d2c69615c12e4e254740",
          "slotId": "mod_handguard"
        },
        {
          "_id": "099807740d3c1a59b4a2c0f4",
          "_tpl": "5bb20e49d4351e3bac1212de",
          "parentId": "bc30d2c69615c12e4e254740",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2829f2078686f5e600cb8485",
          "_tpl": "56eabf3bd2720b75698b4569",
          "parentId": "5096758e2cbc3904229ac753",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "8658ab395f0f3daa944b4a13",
          "_tpl": "56ea8180d2720bf2698b456a",
          "parentId": "d614886162f6cb0624872959",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2d5c733a3d5b20c47dc3d661",
          "_tpl": "5bb20dcad4351e3bac1212da",
          "parentId": "d614886162f6cb0624872959",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f2f5c0fbe8a160a5960bd582",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "f202f68c1f6873a4f77654a9",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "59bd1a9b164d84dcafb19940",
          "_tpl": "57da93632459771cb65bf83f",
          "parentId": "8658ab395f0f3daa944b4a13",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "94d37cc66beff7a6fb02f165",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "f2f5c0fbe8a160a5960bd582",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "27c2ea6bf612a885d4fcd08a",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "2829f2078686f5e600cb8485",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66906985010013bd2d3a6161",
      "Name": "The Technology",
      "Root": "0428247832def45954185038",
      "Items": [
        {
          "_id": "0428247832def45954185038",
          "_tpl": "5de652c31b7e3716273428be",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ebc5025889af76bc0127ac83",
          "_tpl": "5de653abf76fdc1ce94a5a2a",
          "parentId": "0428247832def45954185038",
          "slotId": "mod_magazine"
        },
        {
          "_id": "261b2d6de5e2b49f7c326491",
          "_tpl": "5de655be4a9f347bc92edb88",
          "parentId": "0428247832def45954185038",
          "slotId": "mod_stock"
        },
        {
          "_id": "a4765bdf962e105adc250ed7",
          "_tpl": "5de65547883dde217541644b",
          "parentId": "0428247832def45954185038",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f63a92ae4656a100c41c711d",
          "_tpl": "5de6558e9f98ac2bc65950fc",
          "parentId": "0428247832def45954185038",
          "slotId": "mod_mount"
        },
        {
          "_id": "d0a312f4490179da1eeb23a2",
          "_tpl": "5a9fbb74a2750c0032157181",
          "parentId": "a4765bdf962e105adc250ed7",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f55f87e7cc0ceca38d262d58",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "f63a92ae4656a100c41c711d",
          "slotId": "mod_scope"
        },
        {
          "_id": "0c6d97a6242b6fc4da816e4b",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "f55f87e7cc0ceca38d262d58",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690699d010013bd2daa204d",
      "Name": "Wunderwaffe DG-2",
      "Root": "a7e4158c4b589a098f0ed78e",
      "Items": [
        {
          "_id": "a7e4158c4b589a098f0ed78e",
          "_tpl": "587e02ff24597743df3deaeb",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e956b5d7a4d66e66ee698eda",
          "_tpl": "587e0531245977466077a0f7",
          "parentId": "a7e4158c4b589a098f0ed78e",
          "slotId": "mod_stock"
        },
        {
          "_id": "fd3d5006f8204d490fab85d2",
          "_tpl": "634eff66517ccc8a960fc735",
          "parentId": "a7e4158c4b589a098f0ed78e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "c52ef1ef1beda2431e542d9a",
          "_tpl": "587df3a12459772c28142567",
          "parentId": "a7e4158c4b589a098f0ed78e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0754f05dcb78401eae63f5c9",
          "_tpl": "587e08ee245977446b4410cf",
          "parentId": "a7e4158c4b589a098f0ed78e",
          "slotId": "mod_mount"
        },
        {
          "_id": "3cd4028d780e2182de029b0c",
          "_tpl": "634f06262e5def262d0b30ca",
          "parentId": "a7e4158c4b589a098f0ed78e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "6703135a90cdd96f6bec91a1",
          "_tpl": "634f05a21f9f536910079b56",
          "parentId": "fd3d5006f8204d490fab85d2",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "59495954ebb0182aca40a97a",
          "_tpl": "593d490386f7745ee97a1555",
          "parentId": "fd3d5006f8204d490fab85d2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "235e95da9d6f4f76e27ad2ad",
          "_tpl": "5c82343a2e221644f31c0611",
          "parentId": "0754f05dcb78401eae63f5c9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "279cd0299efb3bd758ded1eb",
          "_tpl": "634f036a517ccc8a960fc746",
          "parentId": "6703135a90cdd96f6bec91a1",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "b07198923c45d1e451370145",
          "_tpl": "574db213245977459a2f3f5d",
          "parentId": "6703135a90cdd96f6bec91a1",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0c48e4bcd3d72cd2b9fdb319",
          "_tpl": "634f03d40384a3ba4f06f874",
          "parentId": "279cd0299efb3bd758ded1eb",
          "slotId": "mod_mount_000"
        }
      ]
    },
    {
      "Id": "669069bf010013bd2db497c5",
      "Name": "Glory To Mother Russia",
      "Root": "dcd4125e721164c738ed848c",
      "Items": [
        {
          "_id": "dcd4125e721164c738ed848c",
          "_tpl": "643ea5b23db6f9f57107d9fd",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b29f661f55aba10a72e51986",
          "_tpl": "6410745d5dd49d77bd078485",
          "parentId": "dcd4125e721164c738ed848c",
          "slotId": "mod_stock"
        },
        {
          "_id": "b8e3fb01d9703fbbdd9a3734",
          "_tpl": "6410758c857473525b08bb77",
          "parentId": "dcd4125e721164c738ed848c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b9385646d471573c450034d2",
          "_tpl": "6422e1ea3c0f06190302161a",
          "parentId": "dcd4125e721164c738ed848c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "aa45b5a8dcfbb6230c5a33a5",
          "_tpl": "64119cdbdcf48d656f0aa272",
          "parentId": "dcd4125e721164c738ed848c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "35836ff0dc825fdb462aa0d9",
          "_tpl": "641dc35e19604f20c800be18",
          "parentId": "dcd4125e721164c738ed848c",
          "slotId": "mod_scope"
        },
        {
          "_id": "056861b087f7ad09ac572a1b",
          "_tpl": "64119d1f2c6d6f921a0929f8",
          "parentId": "b8e3fb01d9703fbbdd9a3734",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "51798d6c57740e5aa7d3c3f6",
          "_tpl": "64119d90dcf48d656f0aa275",
          "parentId": "b8e3fb01d9703fbbdd9a3734",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "302db2de81867d3ef14367eb",
          "_tpl": "5b3f7c1c5acfc40dc5296b1d",
          "parentId": "35836ff0dc825fdb462aa0d9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "86b70ec4f7d200a39e974f63",
          "_tpl": "64119d672c6d6f921a0929fb",
          "parentId": "056861b087f7ad09ac572a1b",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669069da010013bd2d735a40",
      "Name": "Ribcage Pecker",
      "Root": "5aa97620b2d467235eb064fc",
      "Items": [
        {
          "_id": "5aa97620b2d467235eb064fc",
          "_tpl": "5f2a9575926fd9352339381f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2f95ce3786d2788671c8d9f1",
          "_tpl": "5b099ac65acfc400186331e1",
          "parentId": "5aa97620b2d467235eb064fc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9f2f6ae279fd60df5f1ae2dc",
          "_tpl": "5f2aa46b878ef416f538b567",
          "parentId": "5aa97620b2d467235eb064fc",
          "slotId": "mod_barrel"
        },
        {
          "_id": "183c244fbc4a71f163b01d73",
          "_tpl": "5f2aa47a200e2c0ee46efa71",
          "parentId": "5aa97620b2d467235eb064fc",
          "slotId": "mod_handguard"
        },
        {
          "_id": "4d8f7a7c9652037807e379ac",
          "_tpl": "5f2aa49f9b44de6b1b4e68d4",
          "parentId": "5aa97620b2d467235eb064fc",
          "slotId": "mod_mount"
        },
        {
          "_id": "1cc10a4f8d87614cc08a4dd2",
          "_tpl": "5f2aa43ba9b91d26f20ae6d2",
          "parentId": "9f2f6ae279fd60df5f1ae2dc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0613dd176cb4b4df102545ca",
          "_tpl": "5f2aa493cd375f14e15eea72",
          "parentId": "183c244fbc4a71f163b01d73",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "1089f400e0300cc2bca2fe87",
          "_tpl": "5c0517910db83400232ffee5",
          "parentId": "4d8f7a7c9652037807e379ac",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "cccfe60cd1cad597a5ef3e68",
          "_tpl": "5d026791d7ad1a04a067ea63",
          "parentId": "1cc10a4f8d87614cc08a4dd2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "06a06cd3797677db2cdd533b",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "0613dd176cb4b4df102545ca",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906a00010013bd2d029d87",
      "Name": "Glory To Arstotzka",
      "Root": "2683b6e14bac70729fe33fff",
      "Items": [
        {
          "_id": "2683b6e14bac70729fe33fff",
          "_tpl": "5c501a4d2e221602b412b540",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "60a3c143d6714e8ae3e57d40",
          "_tpl": "5c5039be2e221602b177c9ff",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "fcad4eafb6849df4dd2227bf",
          "_tpl": "5c503d0a2e221602b542b7ef",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_reciever"
        },
        {
          "_id": "dd3bab72ae0c0b36b6606b5c",
          "_tpl": "5c503b1c2e221602b21d6e9d",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "40931ecdf90b212c1212b841",
          "_tpl": "5f63405df5750b524b45f114",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_stock"
        },
        {
          "_id": "7ddde39004a691fea453c5b4",
          "_tpl": "5c503ad32e2216398b5aada2",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_magazine"
        },
        {
          "_id": "18731cd1881105f5e5df6863",
          "_tpl": "576fd4ec2459777f0b518431",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_mount",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "03258a7d79410ca90215483d",
          "_tpl": "5f63407e1b231926f2329f15",
          "parentId": "2683b6e14bac70729fe33fff",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906a13010013bd2d843a18",
      "Name": "Captain Price",
      "Root": "eb6658ee904ec58d240538ce",
      "Items": [
        {
          "_id": "eb6658ee904ec58d240538ce",
          "_tpl": "5aafa857e5b5b00018480968",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d422f2b79e40a57ad2c99403",
          "_tpl": "5aaf8a0be5b5b00015693243",
          "parentId": "eb6658ee904ec58d240538ce",
          "slotId": "mod_magazine"
        },
        {
          "_id": "780a21d754da0629faf77c06",
          "_tpl": "5aaf8e43e5b5b00015693246",
          "parentId": "eb6658ee904ec58d240538ce",
          "slotId": "mod_stock"
        },
        {
          "_id": "db7af5b2876c0e6392a3a819",
          "_tpl": "5aaf9d53e5b5b00015042a52",
          "parentId": "eb6658ee904ec58d240538ce",
          "slotId": "mod_barrel"
        },
        {
          "_id": "d594c52c8478ba487ccf9a0f",
          "_tpl": "5abcbb20d8ce87001773e258",
          "parentId": "eb6658ee904ec58d240538ce",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c0a808ba2c4a8a14f608f589",
          "_tpl": "5addbfef5acfc400185c2857",
          "parentId": "eb6658ee904ec58d240538ce",
          "slotId": "mod_mount"
        },
        {
          "_id": "fca7261febc8a33f76850a05",
          "_tpl": "5ab24ef9e5b5b00fe93c9209",
          "parentId": "780a21d754da0629faf77c06",
          "slotId": "mod_mount"
        },
        {
          "_id": "1ad0cdabc346286b94568f7b",
          "_tpl": "5ab3afb2d8ce87001660304d",
          "parentId": "db7af5b2876c0e6392a3a819",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5f3e282fe1cdfffa9d4bce69",
          "_tpl": "5c0517910db83400232ffee5",
          "parentId": "c0a808ba2c4a8a14f608f589",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0bc2d08991543302f6d21c6d",
          "_tpl": "5c878e9d2e2216000f201903",
          "parentId": "1ad0cdabc346286b94568f7b",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906a23010013bd2dee8f7e",
      "Name": "Stormguard",
      "Root": "c63141c9bfa0983bec5f701a",
      "Items": [
        {
          "_id": "c63141c9bfa0983bec5f701a",
          "_tpl": "5df8ce05b11454561e39243b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7eba1cb3041f9a1316c1de3d",
          "_tpl": "55d4b9964bdc2d1d4e8b456e",
          "parentId": "c63141c9bfa0983bec5f701a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e86fb549bde43ce2416965b2",
          "_tpl": "5a3501acc4a282000d72293a",
          "parentId": "c63141c9bfa0983bec5f701a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1644a141a5412cdc7cacba4b",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "c63141c9bfa0983bec5f701a",
          "slotId": "mod_stock"
        },
        {
          "_id": "7a21f4bcd2f4f0b15bd49429",
          "_tpl": "5df8e4080b92095fd441e594",
          "parentId": "c63141c9bfa0983bec5f701a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0ccb98f8d5e4020b17318a86",
          "_tpl": "5df8e053bb49d91fb446d6a6",
          "parentId": "c63141c9bfa0983bec5f701a",
          "slotId": "mod_charge"
        },
        {
          "_id": "e9a2c298e5c1480ecda50697",
          "_tpl": "5ae30c9a5acfc408fb139a03",
          "parentId": "1644a141a5412cdc7cacba4b",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "713a7a4344c983e6155b9f93",
          "_tpl": "5c07dd120db834001c39092d",
          "parentId": "7a21f4bcd2f4f0b15bd49429",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e262cccb5fba68ba02ef731a",
          "_tpl": "5df917564a9f347bc92edca3",
          "parentId": "7a21f4bcd2f4f0b15bd49429",
          "slotId": "mod_barrel"
        },
        {
          "_id": "7f0f858fb676f97837801d9c",
          "_tpl": "5df916dfbb49d91fb446d6b9",
          "parentId": "7a21f4bcd2f4f0b15bd49429",
          "slotId": "mod_handguard"
        },
        {
          "_id": "df57159bd8e62fedc10635ad",
          "_tpl": "5dfa3d7ac41b2312ea33362a",
          "parentId": "7a21f4bcd2f4f0b15bd49429",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "da6f5a9b69fcd1d8e53d954a",
          "_tpl": "5dfa3cd1b33c0951220c079b",
          "parentId": "e262cccb5fba68ba02ef731a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e23f440a6468591983299886",
          "_tpl": "5dfa3d45dfc58d14537c20b0",
          "parentId": "e262cccb5fba68ba02ef731a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "7978f5f70f149389a48ba68d",
          "_tpl": "5dfa3d950dee1b22f862eae0",
          "parentId": "7f0f858fb676f97837801d9c",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8a4988ab22244bb1ae73619e",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "7f0f858fb676f97837801d9c",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "ff59440fb30bdf99d1e2dd0d",
          "_tpl": "5dfa3d2b0dee1b22f862eade",
          "parentId": "da6f5a9b69fcd1d8e53d954a",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906a3c010013bd2d0d344a",
      "Name": "The Oculus",
      "Root": "5ffac96c782360464d10bebf",
      "Items": [
        {
          "_id": "5ffac96c782360464d10bebf",
          "_tpl": "6193a720f8ee7e52e42109ed",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "677ae84170c705058d5fc739",
          "_tpl": "6194efe07c6c7b169525f11b",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_barrel"
        },
        {
          "_id": "65c6a6541b029d89d94bb24b",
          "_tpl": "6194f5a318a3974e5e7421eb",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_reciever"
        },
        {
          "_id": "407ebc8807e00408c43e6c1a",
          "_tpl": "6193d3149fb0c665d5490e32",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_magazine"
        },
        {
          "_id": "d17ec0a28325dbc4aedf5f84",
          "_tpl": "6193d3cded0429009f543e6a",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_trigger"
        },
        {
          "_id": "a89615e805c8cb4e20a617db",
          "_tpl": "6193d3be7c6c7b169525f0da",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_hammer"
        },
        {
          "_id": "a54b3f82a9ece6fa621d11a4",
          "_tpl": "6193d5d4f8ee7e52e4210a1b",
          "parentId": "5ffac96c782360464d10bebf",
          "slotId": "mod_catch"
        },
        {
          "_id": "6fe325497089fe109c3a4243",
          "_tpl": "5fc4b97bab884124df0cd5e3",
          "parentId": "677ae84170c705058d5fc739",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4ce7b8ae5765176923c04274",
          "_tpl": "61963a852d2c397d660036ad",
          "parentId": "65c6a6541b029d89d94bb24b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "77e2cfbaeed84063ca9b1a50",
          "_tpl": "5fc4b9b17283c4046c5814d7",
          "parentId": "6fe325497089fe109c3a4243",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e092060e55a72d6e2b9b83e7",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "4ce7b8ae5765176923c04274",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906a53010013bd2d9d8dc7",
      "Name": "Glukhars Side Piece",
      "Root": "7460564807b7ea73774d4a87",
      "Items": [
        {
          "_id": "7460564807b7ea73774d4a87",
          "_tpl": "602a9740da11d6478d5a06dc",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "a720cf5a123e2e4267edacde",
          "_tpl": "602a95fe4e02ce1eaa358729",
          "parentId": "7460564807b7ea73774d4a87",
          "slotId": "mod_barrel"
        },
        {
          "_id": "eefcdcd03567c8de05dcc9f7",
          "_tpl": "60228924961b8d75ee233c32",
          "parentId": "7460564807b7ea73774d4a87",
          "slotId": "mod_reciever"
        },
        {
          "_id": "c31a58e0003a4e3e451c39c6",
          "_tpl": "602286df23506e50807090c6",
          "parentId": "7460564807b7ea73774d4a87",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8a050582f65822da8b7b2a91",
          "_tpl": "5a7b4900e899ef197b331a2a",
          "parentId": "7460564807b7ea73774d4a87",
          "slotId": "mod_tactical"
        },
        {
          "_id": "51273e8ab14756105c9800de",
          "_tpl": "5c7e8fab2e22165df16b889b",
          "parentId": "a720cf5a123e2e4267edacde",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4db18ee9f6dc895f79cd8de4",
          "_tpl": "60229948cacb6b0506369e27",
          "parentId": "eefcdcd03567c8de05dcc9f7",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "53ce29a97471261fed77eaf1",
          "_tpl": "60228a76d62c9b14ed777a66",
          "parentId": "eefcdcd03567c8de05dcc9f7",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9365412c7e2c6ffeafdab8af",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "8a050582f65822da8b7b2a91",
          "slotId": "mod_scope"
        },
        {
          "_id": "359e974332edf6b4b24dde3b",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "8a050582f65822da8b7b2a91",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "cd86c7ae2e9c0c4fa92e7f1c",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "9365412c7e2c6ffeafdab8af",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906a68010013bd2d8dc69e",
      "Name": "The Resort Menace",
      "Root": "30515cd33c0082fb0fde542d",
      "Items": [
        {
          "_id": "30515cd33c0082fb0fde542d",
          "_tpl": "5d3eb3b0a4b93615055e84d2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "53a4298607e2576bec2899be",
          "_tpl": "5d3eb59ea4b9361c284bb4b2",
          "parentId": "30515cd33c0082fb0fde542d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "e222741eaf8415e594eee157",
          "_tpl": "5d3eb44aa4b93650d64e4979",
          "parentId": "30515cd33c0082fb0fde542d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "50a7b866c19abb17aa9ecd68",
          "_tpl": "5d3eb5eca4b9363b1f22f8e4",
          "parentId": "30515cd33c0082fb0fde542d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "431958c3229323d6ce96a725",
          "_tpl": "5a800961159bd4315e3a1657",
          "parentId": "30515cd33c0082fb0fde542d",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "e15711ab220c50168d69743b",
          "_tpl": "5d3ef698a4b9361182109872",
          "parentId": "53a4298607e2576bec2899be",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "b2d5f49946a867579651fa28",
          "_tpl": "5d7b6bafa4b93652786f4c76",
          "parentId": "e222741eaf8415e594eee157",
          "slotId": "mod_sight_rear"
        },
        {
          "_id": "577bebecdc9fe94d933a63d1",
          "_tpl": "5d3eb536a4b9363b1f22f8e2",
          "parentId": "e222741eaf8415e594eee157",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8a2c81777563df2bd943d39f",
          "_tpl": "5a32aa8bc4a2826c6e06d737",
          "parentId": "b2d5f49946a867579651fa28",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906a86010013bd2dbb8f3a",
      "Name": "Factory Clapper",
      "Root": "fb90e5f838a84ea40ee34b43",
      "Items": [
        {
          "_id": "fb90e5f838a84ea40ee34b43",
          "_tpl": "5d3eb3b0a4b93615055e84d2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2d59fcfd8dc8fc78c5798e6c",
          "_tpl": "5d3eb59ea4b9361c284bb4b2",
          "parentId": "fb90e5f838a84ea40ee34b43",
          "slotId": "mod_barrel"
        },
        {
          "_id": "25b0211d2d5d0c57fba1ddf8",
          "_tpl": "5d3eb44aa4b93650d64e4979",
          "parentId": "fb90e5f838a84ea40ee34b43",
          "slotId": "mod_reciever"
        },
        {
          "_id": "c5497033227ebe6a80d50a2c",
          "_tpl": "5d3eb5eca4b9363b1f22f8e4",
          "parentId": "fb90e5f838a84ea40ee34b43",
          "slotId": "mod_magazine"
        },
        {
          "_id": "423cc09abb6bfe0fa5641caa",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "fb90e5f838a84ea40ee34b43",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "1fdf671c30d41a0229b56d48",
          "_tpl": "5d3ef698a4b9361182109872",
          "parentId": "2d59fcfd8dc8fc78c5798e6c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0ce435817c6710c8428947bc",
          "_tpl": "5d3eb4aba4b93650d64e497d",
          "parentId": "25b0211d2d5d0c57fba1ddf8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6c8ce0d299bb58ede552171a",
          "_tpl": "5d3eb536a4b9363b1f22f8e2",
          "parentId": "25b0211d2d5d0c57fba1ddf8",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906a97010013bd2d1607b2",
      "Name": "UNLIMITED POWWER",
      "Root": "8a0551fd0133f89e86070bc5",
      "Items": [
        {
          "_id": "8a0551fd0133f89e86070bc5",
          "_tpl": "60339954d62c9b14ed777c06",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f3122828c9f4c0cad27e5f44",
          "_tpl": "602e71bd53a60014f9705bfa",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "ac8384ce11d3df96d70b7ea6",
          "_tpl": "5a718f958dc32e00094b97e7",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9d84cf1697c7115e08f45169",
          "_tpl": "602e63fb6335467b0c5ac94d",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_reciever"
        },
        {
          "_id": "46306d6bff6db73ff2f2c14f",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "bb338a43c6477f913c6711dd",
          "_tpl": "6033749e88382f4fab3fd2c5",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_charge"
        },
        {
          "_id": "7824ec9a0acd8d5222e9d323",
          "_tpl": "602f85fd9b513876d4338d9c",
          "parentId": "8a0551fd0133f89e86070bc5",
          "slotId": "mod_tactical_000"
        },
        {
          "_id": "b8f619845a7e39fc74e21b09",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "9d84cf1697c7115e08f45169",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "64558d26d267611d6cd10447",
          "_tpl": "603372b4da11d6478d5a07ff",
          "parentId": "9d84cf1697c7115e08f45169",
          "slotId": "mod_barrel"
        },
        {
          "_id": "88911aa140516ecc6cc97774",
          "_tpl": "6034e3cb0ddce744014cb870",
          "parentId": "9d84cf1697c7115e08f45169",
          "slotId": "mod_handguard"
        },
        {
          "_id": "8bc223d1ef559900b4c83672",
          "_tpl": "5d135e83d7ad1a21b83f42d8",
          "parentId": "46306d6bff6db73ff2f2c14f",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "fc92ece1e3a4353232b5b8de",
          "_tpl": "5c6165902e22160010261b28",
          "parentId": "64558d26d267611d6cd10447",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "03926c304ba1d362a5203957",
          "_tpl": "651a8bf3a8520e48047bf708",
          "parentId": "88911aa140516ecc6cc97774",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906aab010013bd2da2c61f",
      "Name": "Long Boi",
      "Root": "d1bff924674e311627948faf",
      "Items": [
        {
          "_id": "d1bff924674e311627948faf",
          "_tpl": "60339954d62c9b14ed777c06",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "51d5b99255d434dcbd7dd331",
          "_tpl": "602e71bd53a60014f9705bfa",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "0f1aadb30b3a2c11eec2cbff",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e58a55694091d03782e20fe6",
          "_tpl": "602e63fb6335467b0c5ac94d",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_reciever"
        },
        {
          "_id": "82b3de61b8138f37e1d479b0",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "ff805dd3e1c96d7ce5509cc3",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_charge"
        },
        {
          "_id": "ddbced3280c2aafe85fd96c9",
          "_tpl": "602f85fd9b513876d4338d9c",
          "parentId": "d1bff924674e311627948faf",
          "slotId": "mod_tactical_000"
        },
        {
          "_id": "c8db46226df6d8be39868967",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "e58a55694091d03782e20fe6",
          "slotId": "mod_scope"
        },
        {
          "_id": "4338148df1ff5282b707bd81",
          "_tpl": "603372b4da11d6478d5a07ff",
          "parentId": "e58a55694091d03782e20fe6",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fed6d8c2f6918c3a8502c0df",
          "_tpl": "6034e3cb0ddce744014cb870",
          "parentId": "e58a55694091d03782e20fe6",
          "slotId": "mod_handguard"
        },
        {
          "_id": "d730a5bea241837d85c16ace",
          "_tpl": "5d4406a8a4b9361e4f6eb8b7",
          "parentId": "82b3de61b8138f37e1d479b0",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "04b4157c49bd0af632b2739d",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "c8db46226df6d8be39868967",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2cf87d7142249b3f74337e70",
          "_tpl": "5c6165902e22160010261b28",
          "parentId": "4338148df1ff5282b707bd81",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "f20ab1b53c7f046acb835769",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "fed6d8c2f6918c3a8502c0df",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "4f21c0b1c33e57da6dd939f8",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "fed6d8c2f6918c3a8502c0df",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "3443af460e85b198407e7bb7",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "f20ab1b53c7f046acb835769",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906ab9010013bd2dc95189",
      "Name": "Early Wipe Enjoyer",
      "Root": "df736658a5390215f9a76abd",
      "Items": [
        {
          "_id": "df736658a5390215f9a76abd",
          "_tpl": "5fc3e272f8b6a877a729eac5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "4b2329a7d197958169654c81",
          "_tpl": "5fc3e466187fea44d52eda90",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0d176e2f544add13f3ff6e60",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bfa71f746126b93808265b57",
          "_tpl": "5fc3e4ee7283c4046c5814af",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_stock"
        },
        {
          "_id": "1af27f6d482f7450f53fea49",
          "_tpl": "5fc3e4a27283c4046c5814ab",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b0b6fb4a131155f6e5656551",
          "_tpl": "5fc53954f8b6a877a729eaeb",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "82c091ffef1612679c1e4b7d",
          "_tpl": "5fc5396e900b1d5091531e72",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "3e83a9bf92453e784b38ea4e",
          "_tpl": "5fc5396e900b1d5091531e72",
          "parentId": "df736658a5390215f9a76abd",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "ff7761411b0d32a918c1919a",
          "_tpl": "6130c4d51cb55961fa0fd49f",
          "parentId": "1af27f6d482f7450f53fea49",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ec4e7c82764c0b001d1a6a23",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "b0b6fb4a131155f6e5656551",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4bbf5a642fbd2637af9c41cc",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "3e83a9bf92453e784b38ea4e",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906ac9010013bd2dc53052",
      "Name": "Lab Rat",
      "Root": "38217ac6361c7b0ca78e62ea",
      "Items": [
        {
          "_id": "38217ac6361c7b0ca78e62ea",
          "_tpl": "5de7bd7bfd6b4e6e2276dc25",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e6f0467a7f648cba4f92454e",
          "_tpl": "5de8eac42a78646d96665d91",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_magazine"
        },
        {
          "_id": "068120ee41915f61b92dc409",
          "_tpl": "5de8f237bbaf010b10528a70",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c1e1eaad8d5e5390ea22ee40",
          "_tpl": "5de910da8b6c4240ba2651b5",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_stock"
        },
        {
          "_id": "727b603be070a22797634a6c",
          "_tpl": "5de8fbad2fbe23140d3ee9c4",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "cd968ff290ab63b1bfd87f78",
          "_tpl": "5de8e67c4a9f347bc92edbd7",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0c99fbfe3efcd7d98513fe63",
          "_tpl": "5de922d4b11454561e39239f",
          "parentId": "38217ac6361c7b0ca78e62ea",
          "slotId": "mod_charge"
        },
        {
          "_id": "d8aa6031eb02cc1ca6451015",
          "_tpl": "5de8f2d5b74cd90030650c72",
          "parentId": "068120ee41915f61b92dc409",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e73eec41fc4c5bffc6410088",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "cd968ff290ab63b1bfd87f78",
          "slotId": "mod_scope"
        },
        {
          "_id": "4e40c50c937383fd5140907f",
          "_tpl": "5de8fb539f98ac2bc659513a",
          "parentId": "cd968ff290ab63b1bfd87f78",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b0f8192783d8661db06ab93d",
          "_tpl": "5de8fc0b205ddc616a6bc51b",
          "parentId": "cd968ff290ab63b1bfd87f78",
          "slotId": "mod_mount"
        },
        {
          "_id": "0b6cd699367ec7d80bbf6c01",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "e73eec41fc4c5bffc6410088",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906ad6010013bd2d4480f6",
      "Name": "Streets Looter",
      "Root": "52a886ee78cebf22d8ffdf34",
      "Items": [
        {
          "_id": "52a886ee78cebf22d8ffdf34",
          "_tpl": "58948c8e86f77409493f7266",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e56256c1150c07b947092881",
          "_tpl": "59db3a1d86f77429e05b4e92",
          "parentId": "52a886ee78cebf22d8ffdf34",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "52062f266285e5de9f5958fc",
          "_tpl": "5c5db6742e2216000f1b2852",
          "parentId": "52a886ee78cebf22d8ffdf34",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e5263b1512a2c31472fd5cd5",
          "_tpl": "5894a5b586f77426d2590767",
          "parentId": "52a886ee78cebf22d8ffdf34",
          "slotId": "mod_reciever"
        },
        {
          "_id": "578ee20bdfdeccd7eadc83d8",
          "_tpl": "5fbcc437d724d907e2077d5c",
          "parentId": "52a886ee78cebf22d8ffdf34",
          "slotId": "mod_stock"
        },
        {
          "_id": "484060d697dd47fb5b1e4f19",
          "_tpl": "58949edd86f77409483e16a9",
          "parentId": "52a886ee78cebf22d8ffdf34",
          "slotId": "mod_charge"
        },
        {
          "_id": "c0165b857e4c60073f986077",
          "_tpl": "570fd721d2720bc5458b4596",
          "parentId": "e5263b1512a2c31472fd5cd5",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "68dc21b5b170684e172202f9",
          "_tpl": "5894a2c386f77427140b8342",
          "parentId": "e5263b1512a2c31472fd5cd5",
          "slotId": "mod_barrel"
        },
        {
          "_id": "2043fba00d6667a6d301c352",
          "_tpl": "5894a42086f77426d2590762",
          "parentId": "e5263b1512a2c31472fd5cd5",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1a7985b34cf2528ef2407a1f",
          "_tpl": "5894a81786f77427140b8347",
          "parentId": "e5263b1512a2c31472fd5cd5",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ce68e190fc88f4067de61424",
          "_tpl": "5c6165902e22160010261b28",
          "parentId": "68dc21b5b170684e172202f9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "90215bc446266b561ed68ef7",
          "_tpl": "5894a73486f77426d259076c",
          "parentId": "2043fba00d6667a6d301c352",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "da7d8b2cc2077c1ed546e165",
          "_tpl": "58a56f8d86f774651579314c",
          "parentId": "2043fba00d6667a6d301c352",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "581782cd47075caf26e0748f",
          "_tpl": "58a5c12e86f7745d585a2b9e",
          "parentId": "2043fba00d6667a6d301c352",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "e3f4b491a3a7636f3b12a902",
          "_tpl": "58a56f8d86f774651579314c",
          "parentId": "2043fba00d6667a6d301c352",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "9daf45e8cc11cd82c415c9c6",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "581782cd47075caf26e0748f",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "8eae12cab4a28a2f058bfe35",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "e3f4b491a3a7636f3b12a902",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906ae4010013bd2dabf563",
      "Name": "Rush Banana",
      "Root": "4798d45da9a6a8a3b2b9d4e1",
      "Items": [
        {
          "_id": "4798d45da9a6a8a3b2b9d4e1",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1f3eec360fa17b24711f99a1",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c0ce66def3532952bbdc7b98",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_stock"
        },
        {
          "_id": "e477a4de6781c3cc29789739",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_charge"
        },
        {
          "_id": "ce4fbd420e9bbce7fb1b65ea",
          "_tpl": "5c0672ed0db834001b7353f3",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "5bb86d2592ac57101b62f2e0",
          "_tpl": "59bfc5c886f7743bf6794e62",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "66170e5ffe5ccda345c3e3cd",
          "_tpl": "59985a6c86f77414ec448d17",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7ad89a6e528f22e29944696e",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c899d9bb4c0ff07bc1354156",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "4798d45da9a6a8a3b2b9d4e1",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "d00e79a9942b95993b0aed8b",
          "_tpl": "59ecc3dd86f7746dc827481c",
          "parentId": "c0ce66def3532952bbdc7b98",
          "slotId": "mod_stock"
        },
        {
          "_id": "8e95779871bf6277f7fa17db",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "66170e5ffe5ccda345c3e3cd",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9b2043e840668b84c74bb2bc",
          "_tpl": "5c617a5f2e2216000f1e81b3",
          "parentId": "c899d9bb4c0ff07bc1354156",
          "slotId": "mod_handguard"
        },
        {
          "_id": "4bc355d0ecae490c1712346d",
          "_tpl": "5f6340d3ca442212f4047eb2",
          "parentId": "9b2043e840668b84c74bb2bc",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906b06010013bd2d12e6e5",
      "Name": "Fate",
      "Root": "c511ae1c739d0e6d084799b0",
      "Items": [
        {
          "_id": "c511ae1c739d0e6d084799b0",
          "_tpl": "583990e32459771419544dd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2e23e2925ec64bed10f0729f",
          "_tpl": "5649ad3f4bdc2df8348b4585",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "8672f0df0587a24da96806b2",
          "_tpl": "57dc347d245977596754e7a1",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_stock"
        },
        {
          "_id": "03f48197274602b83058f0a7",
          "_tpl": "564ca99c4bdc2d16268b4589",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a88d944d5ebbc26c5730f0b5",
          "_tpl": "57dc324a24597759501edc20",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "20a6c40fcfe07298d1bd063b",
          "_tpl": "57dc334d245977597164366f",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0065da658b42083b018cd6d6",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "c511ae1c739d0e6d084799b0",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "fad13d7a47f43539443ee15e",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "8672f0df0587a24da96806b2",
          "slotId": "mod_stock"
        },
        {
          "_id": "0583f71538f197d909e38868",
          "_tpl": "57ffb0062459777a045af529",
          "parentId": "20a6c40fcfe07298d1bd063b",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "7047a90429f095326920a2eb",
          "_tpl": "57ffa9f4245977728561e844",
          "parentId": "0065da658b42083b018cd6d6",
          "slotId": "mod_handguard"
        },
        {
          "_id": "c528ea0e18eb31fbcef379ae",
          "_tpl": "64785e7c19d732620e045e15",
          "parentId": "0583f71538f197d909e38868",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4caf74b32f3c578731681f30",
          "_tpl": "5c7fc87d2e221644f31c0298",
          "parentId": "7047a90429f095326920a2eb",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906b18010013bd2d013b61",
      "Name": "The Warrior",
      "Root": "a64c0cd37976e107f65d3e8b",
      "Items": [
        {
          "_id": "a64c0cd37976e107f65d3e8b",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "92d8d75a9c2cecb84b99e438",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "dc9f8aed61324e90b8b3569a",
          "_tpl": "5943eeeb86f77412d6384f6b",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "cd783a9320e6968f6aa652e0",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "9fb915de8075366910c8817b",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d9a78f5e61bf57f6e4cf74ea",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "144159307f5f983c6150b484",
          "_tpl": "5e217ba4c1434648c13568cd",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_stock"
        },
        {
          "_id": "9442d361d02d9262af3f25fe",
          "_tpl": "5aaa4194e5b5b055d06310a5",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "61fbdd607d1a7324c0897ed7",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "a64c0cd37976e107f65d3e8b",
          "slotId": "mod_charge"
        },
        {
          "_id": "255cb18577ec6f37e19a0f25",
          "_tpl": "647dba3142c479dde701b654",
          "parentId": "92d8d75a9c2cecb84b99e438",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e54e0e4ab2bab6decec40cb3",
          "_tpl": "626bb8532c923541184624b4",
          "parentId": "9fb915de8075366910c8817b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "27961156d53bd222d4b8942f",
          "_tpl": "5c1bc7752e221602b1779b34",
          "parentId": "255cb18577ec6f37e19a0f25",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906b47010013bd2dbd2781",
      "Name": "Prapors Pride And Joy",
      "Root": "46e4d8f95e8943403def2f10",
      "Items": [
        {
          "_id": "46e4d8f95e8943403def2f10",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9905f24df778abe1abff1b2b",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "d087afc61d0ee282f7cdca98",
          "_tpl": "5649ab884bdc2ded0b8b457f",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9c13179077efbe50e9618920",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f0ee5ab54502cc037cb1b0ff",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_reciever"
        },
        {
          "_id": "2e2b7749eba090a69c24f077",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6e153c5496fabf7c6bb2b6f8",
          "_tpl": "5649b1c04bdc2d16268b457c",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_stock"
        },
        {
          "_id": "a8fe6c2b94b90dedc1a348be",
          "_tpl": "564ca99c4bdc2d16268b4589",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c728038eefd9c26b86cf289e",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "46e4d8f95e8943403def2f10",
          "slotId": "mod_charge"
        },
        {
          "_id": "b520466a6dd38a3fe6ee4310",
          "_tpl": "5d4aaa73a4b9365392071175",
          "parentId": "9905f24df778abe1abff1b2b",
          "slotId": "mod_handguard"
        },
        {
          "_id": "ff90071f7a5d6b4009417a39",
          "_tpl": "5d2da1e948f035477b1ce2ba",
          "parentId": "f0ee5ab54502cc037cb1b0ff",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e8ea470d58450eda6f38bd67",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "6e153c5496fabf7c6bb2b6f8",
          "slotId": "mod_stock"
        },
        {
          "_id": "3ffe84ccc199d12d549c2a6b",
          "_tpl": "57cffb66245977632f391a99",
          "parentId": "b520466a6dd38a3fe6ee4310",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906b5e010013bd2d0396b7",
      "Name": "Amnesia",
      "Root": "89a384788440ac5baccd4894",
      "Items": [
        {
          "_id": "89a384788440ac5baccd4894",
          "_tpl": "5ab8e9fcd8ce870019439434",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "6dd16ba4a776c3b788f27964",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "4bac9defa3e9d24a120bd1c9",
          "_tpl": "5943eeeb86f77412d6384f6b",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "14c2f3f67f6fa3f7c2c586fa",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7dc5b5dc9062d2d43ffb3e90",
          "_tpl": "5649af094bdc2df8348b4586",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_reciever"
        },
        {
          "_id": "cfdc56174781a66a0c728dd0",
          "_tpl": "5649b0544bdc2d1b2b8b458a",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d6005d0fa463b8052ea3a27c",
          "_tpl": "5ab626e4d8ce87272e4c6e43",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_stock"
        },
        {
          "_id": "db90eef8b5f4a903bdbb0b8e",
          "_tpl": "5aaa4194e5b5b055d06310a5",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_magazine"
        },
        {
          "_id": "077138e1f92a9d6da02de26d",
          "_tpl": "5c82343a2e221644f31c0611",
          "parentId": "89a384788440ac5baccd4894",
          "slotId": "mod_mount_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d00c9d7c53f36567d9fa8855",
          "_tpl": "5a9d56c8a2750c0032157146",
          "parentId": "6dd16ba4a776c3b788f27964",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e4d1c6115454c0095290213e",
          "_tpl": "6494094948796d891603e59f",
          "parentId": "d6005d0fa463b8052ea3a27c",
          "slotId": "mod_stock"
        },
        {
          "_id": "3f2ec9e580b6654556720305",
          "_tpl": "5fc0f9b5d724d907e2077d82",
          "parentId": "d00c9d7c53f36567d9fa8855",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "a9df073d0d868022c9b3f7f5",
          "_tpl": "59e0be5d86f7742d48765bd2",
          "parentId": "d00c9d7c53f36567d9fa8855",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "78ddaf66c9c90488fec48b8f",
          "_tpl": "5d2369418abbc306c62e0c80",
          "parentId": "a9df073d0d868022c9b3f7f5",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906b70010013bd2d0c29e7",
      "Name": "Silent Bomber",
      "Root": "4523b92304423da317c43d9f",
      "Items": [
        {
          "_id": "4523b92304423da317c43d9f",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "081528d2a1eac4a842e6f980",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "ed98724523a04d4d2b2c2b4c",
          "_tpl": "593d489686f7745c6255d58a",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "483060cdd16ab77dde20099b",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "dbb6cb32c21a8d3e88d9f261",
          "_tpl": "628a665a86cbd9750d2ff5e5",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "022bc110c0eb6079ad1c81b3",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e6cad39e3948b1a8cdb75e39",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_stock"
        },
        {
          "_id": "17fa8cc43141d0c79a0abf5f",
          "_tpl": "6272874a6c47bd74f92e2087",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6f0ef3f535eac9391b0b0268",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "4523b92304423da317c43d9f",
          "slotId": "mod_charge"
        },
        {
          "_id": "1190aa79b0a51a11fa43af69",
          "_tpl": "5d4aaa54a4b9365392071170",
          "parentId": "081528d2a1eac4a842e6f980",
          "slotId": "mod_handguard"
        },
        {
          "_id": "c799f3cb81f97b4e82fb35d2",
          "_tpl": "651a8bf3a8520e48047bf708",
          "parentId": "1190aa79b0a51a11fa43af69",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906b8a010013bd2da2a0bc",
      "Name": "Crapshoot",
      "Root": "392e9d348a42887d04ce8bb0",
      "Items": [
        {
          "_id": "392e9d348a42887d04ce8bb0",
          "_tpl": "59ff346386f77477562ff5e2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7cc8917e458616e49e04cbed",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "8c7f3af71c31e782ce691cde",
          "_tpl": "593d489686f7745c6255d58a",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "2cee48ee475a722694484780",
          "_tpl": "5f6341043ada5942720e2dc5",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_pistol_grip_akms"
        },
        {
          "_id": "87f1dab13e3d8dddeb9076b8",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "741c820ea3bf8e7d5cb2be88",
          "_tpl": "59ff3b6a86f77477562ff5ed",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_stock_akms"
        },
        {
          "_id": "37519e0406eaf5cf0a3b2d6c",
          "_tpl": "59d625f086f774661516605d",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "760f5276c62dd494c1f181cf",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "392e9d348a42887d04ce8bb0",
          "slotId": "mod_charge"
        },
        {
          "_id": "829b0339a158ec7790d0c90b",
          "_tpl": "647dd2b8a12ebf96c3031655",
          "parentId": "7cc8917e458616e49e04cbed",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e6bf500ef4fe34ec3f95b48d",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "741c820ea3bf8e7d5cb2be88",
          "slotId": "mod_stock"
        },
        {
          "_id": "bc12b6ad37da456746a6e7fa",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "829b0339a158ec7790d0c90b",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "ab7b68048f27d894671d31de",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "829b0339a158ec7790d0c90b",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906b9c010013bd2dd63d7e",
      "Name": "Rush B",
      "Root": "f70eaf327d306d10621ad11c",
      "Items": [
        {
          "_id": "f70eaf327d306d10621ad11c",
          "_tpl": "5ac66d2e5acfc43b321d4b53",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "47eb0930dc80f176d75b2fb0",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "b8c9414a00afd1b767da6c82",
          "_tpl": "5cc9ad73d7f00c000e2579d4",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5260954d9e7d14bf9b41256d",
          "_tpl": "5c6bf4aa2e2216001219b0ae",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "4d21b9e7442a1a7f5965504f",
          "_tpl": "5ac50da15acfc4001718d287",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "1f42ee89024494c4055f3250",
          "_tpl": "5ac72e475acfc400180ae6fe",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d9bb348da07ea4dd9372b406",
          "_tpl": "5ac50c185acfc400163398d4",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_stock"
        },
        {
          "_id": "e226ece46e1ed892e9301296",
          "_tpl": "6272874a6c47bd74f92e2087",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4f196fbe02976d8897d10f6b",
          "_tpl": "63d114019e35b334d82302f7",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "fc8e1e9c2db6e807ebfecedd",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "f70eaf327d306d10621ad11c",
          "slotId": "mod_charge"
        },
        {
          "_id": "183810c7e7c284719bbc60d5",
          "_tpl": "5c17664f2e2216398b5a7e3c",
          "parentId": "47eb0930dc80f176d75b2fb0",
          "slotId": "mod_handguard"
        },
        {
          "_id": "2b6114ef1357ed12ae6c92f9",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "d9bb348da07ea4dd9372b406",
          "slotId": "mod_stock"
        },
        {
          "_id": "57314f786c0176155f3484ed",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "4f196fbe02976d8897d10f6b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d0bb45f769f10ad6c0dcb627",
          "_tpl": "5fc0f9b5d724d907e2077d82",
          "parentId": "183810c7e7c284719bbc60d5",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "7a7d137bcd2cfd26a476eeda",
          "_tpl": "59e0bdb186f774156f04ce82",
          "parentId": "183810c7e7c284719bbc60d5",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "2881a760393133ae0f43f628",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "7a7d137bcd2cfd26a476eeda",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906bb0010013bd2da50d7f",
      "Name": "Killas Mercy",
      "Root": "62cda8e6fe8e8feabf4d3d12",
      "Items": [
        {
          "_id": "62cda8e6fe8e8feabf4d3d12",
          "_tpl": "6499849fc93611967b034949",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "24850a09ed788e1f448a145b",
          "_tpl": "649ec107961514b22506b10c",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a46f17330909e4fdf3008ec5",
          "_tpl": "649ec2af961514b22506b10f",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "eee401e1ab8086ffe5a784ff",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6c87f8f499a70a163760085b",
          "_tpl": "649ec2f3961514b22506b111",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_reciever"
        },
        {
          "_id": "95ba30b8cbca628376f07758",
          "_tpl": "649ec87d8007560a9001ab36",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "b2a6633bee8d723c8fda8dbc",
          "_tpl": "5bed61680db834001d2c45ab",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_magazine"
        },
        {
          "_id": "00d3b4423ba524c8a43ab9dd",
          "_tpl": "649ec127c93611967b034957",
          "parentId": "62cda8e6fe8e8feabf4d3d12",
          "slotId": "mod_handguard"
        },
        {
          "_id": "849e10cc03d71ae490260316",
          "_tpl": "5c0505e00db834001b735073",
          "parentId": "6c87f8f499a70a163760085b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d2961760704b7d26661a0ec3",
          "_tpl": "649ec2da59cbb3c813042dca",
          "parentId": "6c87f8f499a70a163760085b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fdf9ac280e319408d14db5dc",
          "_tpl": "5bb20e70d4351e0035629f8f",
          "parentId": "95ba30b8cbca628376f07758",
          "slotId": "mod_stock"
        },
        {
          "_id": "560f5c362f77c0af23d184f9",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "00d3b4423ba524c8a43ab9dd",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "6b0613d526ea86b4979f510d",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "00d3b4423ba524c8a43ab9dd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2feadfb4ed3a0b0a53f19baf",
          "_tpl": "649ec2cec93611967b03495e",
          "parentId": "d2961760704b7d26661a0ec3",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906bc6010013bd2d4325e9",
      "Name": "Cold Watch",
      "Root": "7dc74b00bd9c50408c383f0f",
      "Items": [
        {
          "_id": "7dc74b00bd9c50408c383f0f",
          "_tpl": "6499849fc93611967b034949",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d18e7f041539a3881c0f51d8",
          "_tpl": "649ec107961514b22506b10c",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "0180174d3d0f02cae5bb9835",
          "_tpl": "64c196ad26a15b84aa07132f",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "cd92845bf4789f8b6b3e8650",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "37e63d756f796876ed1cf95b",
          "_tpl": "649ec2f3961514b22506b111",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7416d8f0eaea9a0e0e176c7f",
          "_tpl": "5ac50c185acfc400163398d4",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_stock_001"
        },
        {
          "_id": "e0d0238500644bd0ec3f3c1b",
          "_tpl": "649ec30cb013f04a700e60fb",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a88a21efef070291dcdb7d0d",
          "_tpl": "649ec127c93611967b034957",
          "parentId": "7dc74b00bd9c50408c383f0f",
          "slotId": "mod_handguard"
        },
        {
          "_id": "f2da502fb856907b19dda2e4",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "37e63d756f796876ed1cf95b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5675adb21664510c1db5b68c",
          "_tpl": "649ec2da59cbb3c813042dca",
          "parentId": "37e63d756f796876ed1cf95b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "20654731efa1c79942287333",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "7416d8f0eaea9a0e0e176c7f",
          "slotId": "mod_stock"
        },
        {
          "_id": "f67f076b961bb5495598cba8",
          "_tpl": "5beecbb80db834001d2c465e",
          "parentId": "a88a21efef070291dcdb7d0d",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "5d8fa3bcec78dcf6ee322bc2",
          "_tpl": "5c87ca002e221600114cb150",
          "parentId": "a88a21efef070291dcdb7d0d",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4fa277f1321ae8eb2b8986ed",
          "_tpl": "649ec2cec93611967b03495e",
          "parentId": "5675adb21664510c1db5b68c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906bd5010013bd2d652036",
      "Name": "Tango Down",
      "Root": "d55e2610a137ec15bd164e21",
      "Items": [
        {
          "_id": "d55e2610a137ec15bd164e21",
          "_tpl": "57c44b372459772d2b39b8ce",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5e4cbebbd0290f97e42af18d",
          "_tpl": "57c44dd02459772d2e0ae249",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e8fa8effb2c0a26f1138c16a",
          "_tpl": "57c44f4f2459772d2c627113",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f5ba47f61e8e5b170011d750",
          "_tpl": "57838f9f2459774a150289a0",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_magazine"
        },
        {
          "_id": "78d9322696b1a4a44fee2599",
          "_tpl": "57c44fa82459772d2d75e415",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "8492a0bae19dc2357a8a9eab",
          "_tpl": "57c450252459772d28133253",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_stock"
        },
        {
          "_id": "13ed633666213288936d12e2",
          "_tpl": "57486e672459770abd687134",
          "parentId": "d55e2610a137ec15bd164e21",
          "slotId": "mod_mount_004",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "425b76667c67cb33da4393a6",
          "_tpl": "57c44e7b2459772d28133248",
          "parentId": "5e4cbebbd0290f97e42af18d",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "78981a5959e5acd93ee8d5db",
          "_tpl": "57a3459f245977764a01f703",
          "parentId": "5e4cbebbd0290f97e42af18d",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "8c2968e3be8a4c2ba337a1a6",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "78981a5959e5acd93ee8d5db",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906be7010013bd2d772438",
      "Name": "Gluhkars Death Wish",
      "Root": "b3fa797777c863a7670c8460",
      "Items": [
        {
          "_id": "b3fa797777c863a7670c8460",
          "_tpl": "5cadfbf7ae92152ac412eeef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "95bb39c1cf4e3cbbf26717dd",
          "_tpl": "5caf17c9ae92150b30006be1",
          "parentId": "b3fa797777c863a7670c8460",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3a9dfafbc760ebf995da91d8",
          "_tpl": "5caf1109ae9215753c44119f",
          "parentId": "b3fa797777c863a7670c8460",
          "slotId": "mod_magazine"
        },
        {
          "_id": "09d1789516df255d5a1cc3a0",
          "_tpl": "5caf16a2ae92152ac412efbc",
          "parentId": "b3fa797777c863a7670c8460",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "35f1784c3c4c629aaffaa24d",
          "_tpl": "5cdaa99dd7f00c002412d0b2",
          "parentId": "b3fa797777c863a7670c8460",
          "slotId": "mod_handguard"
        },
        {
          "_id": "3a98964c1ba71b887debae9a",
          "_tpl": "5caf1691ae92152ac412efb9",
          "parentId": "b3fa797777c863a7670c8460",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a181375ac8ed33f467369251",
          "_tpl": "5c1bc5612e221602b5429350",
          "parentId": "35f1784c3c4c629aaffaa24d",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "794f5d0f136bd1d5681fd7f6",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "3a98964c1ba71b887debae9a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906c0c010013bd2d39d035",
      "Name": "Lazarus",
      "Root": "849e9b23dfb26a43d4ba1ff1",
      "Items": [
        {
          "_id": "849e9b23dfb26a43d4ba1ff1",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5d2b930e4afde621ea45f9b8",
          "_tpl": "6193dcd0f8ee7e52e4210a28",
          "parentId": "849e9b23dfb26a43d4ba1ff1",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7ef5484d8af5275213e232b2",
          "_tpl": "5d1340b3d7ad1a0b52682ed7",
          "parentId": "849e9b23dfb26a43d4ba1ff1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e47a8a871cb51c28e43aa832",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "849e9b23dfb26a43d4ba1ff1",
          "slotId": "mod_reciever"
        },
        {
          "_id": "dacff8e24db35752dbd57e94",
          "_tpl": "5947eab886f77475961d96c5",
          "parentId": "849e9b23dfb26a43d4ba1ff1",
          "slotId": "mod_stock"
        },
        {
          "_id": "2f603884dcd5e87f851b7916",
          "_tpl": "5ea16d4d5aad6446a939753d",
          "parentId": "849e9b23dfb26a43d4ba1ff1",
          "slotId": "mod_charge"
        },
        {
          "_id": "b661379da7588be6fe14bdf1",
          "_tpl": "558022b54bdc2dac148b458d",
          "parentId": "e47a8a871cb51c28e43aa832",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c932b43252240c71afd470cc",
          "_tpl": "55d35ee94bdc2d61338b4568",
          "parentId": "e47a8a871cb51c28e43aa832",
          "slotId": "mod_barrel"
        },
        {
          "_id": "900642ef5606b289ac94275c",
          "_tpl": "5ea16acdfadf1d18c87b0784",
          "parentId": "e47a8a871cb51c28e43aa832",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1a7422f567c86b8ebe8ad648",
          "_tpl": "5cf6937cd7f00c056c53fb39",
          "parentId": "c932b43252240c71afd470cc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "28d9be1712c8a7aa613b8f0d",
          "_tpl": "5d00ec68d7ad1a04a067e5be",
          "parentId": "c932b43252240c71afd470cc",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "4022412115442ca09760868f",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "900642ef5606b289ac94275c",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "13eb77a4de2bb904fbe297b7",
          "_tpl": "57cffcd624597763133760c5",
          "parentId": "900642ef5606b289ac94275c",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "b0664e441cb039f0bc06f1b9",
          "_tpl": "6272379924e29f06af4d5ecb",
          "parentId": "4022412115442ca09760868f",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66906c36010013bd2ddb284e",
      "Name": "I Need A Weapon",
      "Root": "a6877c0c13442ee4d698efb4",
      "Items": [
        {
          "_id": "a6877c0c13442ee4d698efb4",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e74f68c9812b7e9e1c42643a",
          "_tpl": "55d4b9964bdc2d1d4e8b456e",
          "parentId": "a6877c0c13442ee4d698efb4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "3f882d90fd8bd74a8811c9e6",
          "_tpl": "55d4887d4bdc2d962f8b4570",
          "parentId": "a6877c0c13442ee4d698efb4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "eaa87414462ad33925ba7643",
          "_tpl": "59bfe68886f7746004266202",
          "parentId": "a6877c0c13442ee4d698efb4",
          "slotId": "mod_reciever"
        },
        {
          "_id": "6662fbda014e400dc3f64c78",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "a6877c0c13442ee4d698efb4",
          "slotId": "mod_stock"
        },
        {
          "_id": "bc7ee00543cc43851191b70c",
          "_tpl": "55d44fd14bdc2d962f8b456e",
          "parentId": "a6877c0c13442ee4d698efb4",
          "slotId": "mod_charge"
        },
        {
          "_id": "c67fb0d8146ffb49547a1481",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "eaa87414462ad33925ba7643",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "f9b5c2bb04310a918cba219e",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "eaa87414462ad33925ba7643",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fbc290dca61cdb033e027cb7",
          "_tpl": "595cfa8b86f77427437e845b",
          "parentId": "eaa87414462ad33925ba7643",
          "slotId": "mod_handguard"
        },
        {
          "_id": "4add27368b550ca3724f41d2",
          "_tpl": "55d4ae6c4bdc2d8b2f8b456e",
          "parentId": "6662fbda014e400dc3f64c78",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "0a637069b5f641372c7af40f",
          "_tpl": "609269c3b0e443224b421cc1",
          "parentId": "f9b5c2bb04310a918cba219e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "7ced6eddae4d7f9f4b796253",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "f9b5c2bb04310a918cba219e",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "268365acb60eac0c97689dd2",
          "_tpl": "60926df0132d4d12c81fd9df",
          "parentId": "0a637069b5f641372c7af40f",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906c58010013bd2d07e426",
      "Name": "Bad Medicine",
      "Root": "15510614a16aef0f5b7b92a4",
      "Items": [
        {
          "_id": "15510614a16aef0f5b7b92a4",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "2f1c6dd108f60e7d869e8e5a",
          "_tpl": "57af48872459771f0b2ebf11",
          "parentId": "15510614a16aef0f5b7b92a4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c9ce6b2ddb541896425b58ab",
          "_tpl": "5d1340b3d7ad1a0b52682ed7",
          "parentId": "15510614a16aef0f5b7b92a4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c672baa795d7a90f6e9bd383",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "15510614a16aef0f5b7b92a4",
          "slotId": "mod_reciever"
        },
        {
          "_id": "c6403e464932e773d5080cc9",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "15510614a16aef0f5b7b92a4",
          "slotId": "mod_stock"
        },
        {
          "_id": "bd56913c6221d605070f39b5",
          "_tpl": "55d44fd14bdc2d962f8b456e",
          "parentId": "15510614a16aef0f5b7b92a4",
          "slotId": "mod_charge"
        },
        {
          "_id": "8e1fe31cbc28022847034f90",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "c672baa795d7a90f6e9bd383",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "397a3428db92b0cd04439c63",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "c672baa795d7a90f6e9bd383",
          "slotId": "mod_barrel"
        },
        {
          "_id": "8daef24d7700048acc134a29",
          "_tpl": "63888bbd28e5cc32cc09d2b6",
          "parentId": "c672baa795d7a90f6e9bd383",
          "slotId": "mod_handguard"
        },
        {
          "_id": "782401c0e843d87230f2c20f",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "c6403e464932e773d5080cc9",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "5488b6a7cf037045a23fdabf",
          "_tpl": "56ea8180d2720bf2698b456a",
          "parentId": "397a3428db92b0cd04439c63",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0648c1b5e6b511a993b25f65",
          "_tpl": "5d00ec68d7ad1a04a067e5be",
          "parentId": "397a3428db92b0cd04439c63",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a5598ec9cf25aec0a6baad31",
          "_tpl": "6388c4478d895f557a0c6512",
          "parentId": "8daef24d7700048acc134a29",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "d5069b56047f2ba65412d779",
          "_tpl": "6388c4ac8d895f557a0c6515",
          "parentId": "8daef24d7700048acc134a29",
          "slotId": "mod_mount_003"
        },
        {
          "_id": "7e78dc4b0e6c278d1e9342e9",
          "_tpl": "57dbb57e2459774673234890",
          "parentId": "5488b6a7cf037045a23fdabf",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "b009cd45d02219f6a4ba033e",
          "_tpl": "57fd23e32459772d0805bcf1",
          "parentId": "a5598ec9cf25aec0a6baad31",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ebe641248e35de19e74ee5fa",
          "_tpl": "5fce0cf655375d18a253eff0",
          "parentId": "d5069b56047f2ba65412d779",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "f108f071cb73ee7816319cc2",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "782401c0e843d87230f2c20f",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66906c8e010013bd2d047bf3",
      "Name": "The Pig",
      "Root": "f642bbc041da083e2250814b",
      "Items": [
        {
          "_id": "f642bbc041da083e2250814b",
          "_tpl": "5c488a752e221602b412af63",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e5b6d79d3bf4475837094d2f",
          "_tpl": "5c48a2c22e221602b313fb6c",
          "parentId": "f642bbc041da083e2250814b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f1b2f0e1dfd49943640ae38e",
          "_tpl": "55802d5f4bdc2dac148b458e",
          "parentId": "f642bbc041da083e2250814b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "19797a97f89718c0284b843e",
          "_tpl": "5c48a14f2e2216152006edd7",
          "parentId": "f642bbc041da083e2250814b",
          "slotId": "mod_handguard"
        },
        {
          "_id": "a673147c7838362b7239741f",
          "_tpl": "5c48a2852e221602b21d5923",
          "parentId": "f642bbc041da083e2250814b",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f98835c79be55eea45964d7d",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "f642bbc041da083e2250814b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6f2496f24e44fab1d203cb57",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "19797a97f89718c0284b843e",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "a7b64402c74eb38fa2708f51",
          "_tpl": "5c7e5f112e221600106f4ede",
          "parentId": "a673147c7838362b7239741f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4e1ce32f093453932a876d1c",
          "_tpl": "5a34fe59c4a282000b1521a2",
          "parentId": "a7b64402c74eb38fa2708f51",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66906ca2010013bd2df538a7",
      "Name": "Grieving Mistake",
      "Root": "d422750a02300b5b965a5d5d",
      "Items": [
        {
          "_id": "d422750a02300b5b965a5d5d",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "13afaf6ba80149211ad27b69",
          "_tpl": "57af48872459771f0b2ebf11",
          "parentId": "d422750a02300b5b965a5d5d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "c2557d5e9c60e437f526fbb8",
          "_tpl": "5d1340b3d7ad1a0b52682ed7",
          "parentId": "d422750a02300b5b965a5d5d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7af84dfeeed81e517e2c3fe3",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "d422750a02300b5b965a5d5d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d27b637e2de380f77aa94c4d",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "d422750a02300b5b965a5d5d",
          "slotId": "mod_stock"
        },
        {
          "_id": "a8090d35d96ce61378112353",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "d422750a02300b5b965a5d5d",
          "slotId": "mod_charge"
        },
        {
          "_id": "a2bd33f7f1bacb10b2205667",
          "_tpl": "57aca93d2459771f2c7e26db",
          "parentId": "7af84dfeeed81e517e2c3fe3",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0,
                0
              ],
              "ScopesSelectedModes": [
                0,
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c42030ab12f66bebc501befd",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "7af84dfeeed81e517e2c3fe3",
          "slotId": "mod_barrel"
        },
        {
          "_id": "71e338b2bec3c49953d33742",
          "_tpl": "5ea16acdfadf1d18c87b0784",
          "parentId": "7af84dfeeed81e517e2c3fe3",
          "slotId": "mod_handguard"
        },
        {
          "_id": "916dd59966b07ff20de0e5bc",
          "_tpl": "58d2946386f774496974c37e",
          "parentId": "d27b637e2de380f77aa94c4d",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "1c1e36d64c36dcb98a51eda1",
          "_tpl": "5cf6937cd7f00c056c53fb39",
          "parentId": "c42030ab12f66bebc501befd",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "704927bbeb03bb3c62a0494a",
          "_tpl": "56eabcd4d2720b66698b4574",
          "parentId": "c42030ab12f66bebc501befd",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "884d76b972b2b918665a3a6c",
          "_tpl": "57cffcd624597763133760c5",
          "parentId": "71e338b2bec3c49953d33742",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e6a87694cc13210726455585",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "916dd59966b07ff20de0e5bc",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66906cc6010013bd2d2c133e",
      "Name": "Nightbane",
      "Root": "6e3bcacb8ae4fe8eefd2f186",
      "Items": [
        {
          "_id": "6e3bcacb8ae4fe8eefd2f186",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "54ef4b48ae7651c647d7a2c8",
          "_tpl": "5a33e75ac4a2826c6e06d759",
          "parentId": "6e3bcacb8ae4fe8eefd2f186",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "65a2e095bfb10aff9a3140de",
          "_tpl": "5c6d46132e221601da357d56",
          "parentId": "6e3bcacb8ae4fe8eefd2f186",
          "slotId": "mod_magazine"
        },
        {
          "_id": "dde6e5c4b59f52dd2dd29017",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "6e3bcacb8ae4fe8eefd2f186",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9014b8b8e7d7b817695bbc92",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "6e3bcacb8ae4fe8eefd2f186",
          "slotId": "mod_stock"
        },
        {
          "_id": "8a1cc2e1f083d3e2f3e9b5ca",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "6e3bcacb8ae4fe8eefd2f186",
          "slotId": "mod_charge"
        },
        {
          "_id": "5b2643206cf17e0384d8b8ac",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "dde6e5c4b59f52dd2dd29017",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6716e10788395507674ed5a4",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "dde6e5c4b59f52dd2dd29017",
          "slotId": "mod_barrel"
        },
        {
          "_id": "2582f92213cba71887956ab8",
          "_tpl": "5c78f26f2e221601da3581d1",
          "parentId": "dde6e5c4b59f52dd2dd29017",
          "slotId": "mod_handguard"
        },
        {
          "_id": "8be5d5d8a6eaff92999a3b8a",
          "_tpl": "5b3a16655acfc40016387a2a",
          "parentId": "6716e10788395507674ed5a4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "0b0757e2c3cade4dea29d816",
          "_tpl": "5ae30e795acfc408fb139a0b",
          "parentId": "6716e10788395507674ed5a4",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "c8917ae3d0f4fc784d830e79",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "2582f92213cba71887956ab8",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906cda010013bd2df4b019",
      "Name": "Legionnaires Blaster",
      "Root": "81fa552617c7b85e442a96f4",
      "Items": [
        {
          "_id": "81fa552617c7b85e442a96f4",
          "_tpl": "5fbcc1d9016cce60e8341ab3",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "96df177bc42c8beb9260cd88",
          "_tpl": "59db3acc86f7742a2c4ab912",
          "parentId": "81fa552617c7b85e442a96f4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "fcf146a8ec540b9b4b572c11",
          "_tpl": "55d4887d4bdc2d962f8b4570",
          "parentId": "81fa552617c7b85e442a96f4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1f7e91447a017dcfa7126152",
          "_tpl": "5fbcc3e4d6fa9c00c571bb58",
          "parentId": "81fa552617c7b85e442a96f4",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b958d04325a87d6c741549c3",
          "_tpl": "5fbcc437d724d907e2077d5c",
          "parentId": "81fa552617c7b85e442a96f4",
          "slotId": "mod_stock"
        },
        {
          "_id": "be4695a0e3ae572240450925",
          "_tpl": "5fbcc640016cce60e8341acc",
          "parentId": "81fa552617c7b85e442a96f4",
          "slotId": "mod_charge"
        },
        {
          "_id": "717d376fcbf0c0b8c482c287",
          "_tpl": "5b30b0dc5acfc400153b7124",
          "parentId": "1f7e91447a017dcfa7126152",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2ac03e6211aa2583746c8825",
          "_tpl": "5fbbfacda56d053a3543f799",
          "parentId": "1f7e91447a017dcfa7126152",
          "slotId": "mod_barrel"
        },
        {
          "_id": "88d73191072b09d336d7ea4f",
          "_tpl": "5fbc226eca32ed67276c155d",
          "parentId": "1f7e91447a017dcfa7126152",
          "slotId": "mod_handguard"
        },
        {
          "_id": "79ccfedbc4cf4c7755e625f4",
          "_tpl": "5fc0fa957283c4046c58147e",
          "parentId": "1f7e91447a017dcfa7126152",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e16fb3d7ef4963b00bf96dcc",
          "_tpl": "5fbe7618d6fa9c00c571bb6c",
          "parentId": "2ac03e6211aa2583746c8825",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "bcdcf591b6897bc2dfe169c6",
          "_tpl": "5fbc210bf24b94483f726481",
          "parentId": "2ac03e6211aa2583746c8825",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f05a22655e86053619fda4dd",
          "_tpl": "5a9d6d00a2750c5c985b5305",
          "parentId": "88d73191072b09d336d7ea4f",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "0334daa723616ddd3665fb65",
          "_tpl": "5a9d6d13a2750c00164f6b03",
          "parentId": "88d73191072b09d336d7ea4f",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "2a8c6e0037ca29f1d7eb1262",
          "_tpl": "56def37dd2720bec348b456a",
          "parentId": "f05a22655e86053619fda4dd",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "da2c98e2db9a4ed9465a52ed",
          "_tpl": "591af28e86f77414a27a9e1d",
          "parentId": "0334daa723616ddd3665fb65",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906cf3010013bd2d68afe6",
      "Name": "Toots",
      "Root": "6b1a06a0f7f83c24ee39d258",
      "Items": [
        {
          "_id": "6b1a06a0f7f83c24ee39d258",
          "_tpl": "623063e994fc3f7b302a9696",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "6a745b499debd4e49f26e0af",
          "_tpl": "62307b7b10d2321fa8741921",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8cfcdedfeb69fd78f76906ee",
          "_tpl": "622f14e899892a7f9e08f6c5",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_stock"
        },
        {
          "_id": "882c1fe55dd05e5d262aa742",
          "_tpl": "622b3858034a3e17ad0b81f5",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_barrel"
        },
        {
          "_id": "8cf8a358ea2f39abac20ddec",
          "_tpl": "62386b7153757417e93a4e9f",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_handguard"
        },
        {
          "_id": "61592240afb5b494c7523793",
          "_tpl": "622f02437762f55aaa68ac85",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_mount"
        },
        {
          "_id": "d1adf2340e35aa5877743a7d",
          "_tpl": "622b3d5cf9cfc87d675d2de9",
          "parentId": "6b1a06a0f7f83c24ee39d258",
          "slotId": "mod_scope"
        },
        {
          "_id": "52451ff6416ba26984796570",
          "_tpl": "56ea8180d2720bf2698b456a",
          "parentId": "882c1fe55dd05e5d262aa742",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "adb1fdd1313ec7ea55f7e9fe",
          "_tpl": "622b327b267a1b13a44abea3",
          "parentId": "882c1fe55dd05e5d262aa742",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "260c4c8ad7fc9b2f2b21d4d8",
          "_tpl": "62444cb99f47004c781903eb",
          "parentId": "8cf8a358ea2f39abac20ddec",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "fee7721007e5e265d55b62be",
          "_tpl": "622f16a1a5958f63c67f1737",
          "parentId": "8cf8a358ea2f39abac20ddec",
          "slotId": "mod_tactical"
        },
        {
          "_id": "e2febd1356563c8eaff1f2fa",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "d1adf2340e35aa5877743a7d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "23c3d55491a6d8dca96dc2de",
          "_tpl": "57da93632459771cb65bf83f",
          "parentId": "52451ff6416ba26984796570",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "da707aacc5d402b261e2509b",
          "_tpl": "64806bdd26c80811d408d37a",
          "parentId": "260c4c8ad7fc9b2f2b21d4d8",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "66906d02010013bd2de52398",
      "Name": "Armageddon",
      "Root": "2b385d9babb528c47d77ff8d",
      "Items": [
        {
          "_id": "2b385d9babb528c47d77ff8d",
          "_tpl": "645e0c6b3b381ede770e1cc9",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1b13e95d62747bd835d1edfb",
          "_tpl": "6450ec2e7da7133e5a09ca96",
          "parentId": "2b385d9babb528c47d77ff8d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "050fe7ff2fcf088539382114",
          "_tpl": "6452519e3d52156624001fd5",
          "parentId": "2b385d9babb528c47d77ff8d",
          "slotId": "mod_stock"
        },
        {
          "_id": "56a428b7162a28d56d49bff1",
          "_tpl": "5c90c3622e221601da359851",
          "parentId": "2b385d9babb528c47d77ff8d",
          "slotId": "mod_scope"
        },
        {
          "_id": "36559cf893ffd99c2b658e2e",
          "_tpl": "645123013d52156624001fd1",
          "parentId": "2b385d9babb528c47d77ff8d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "32d2424d2d82937ab69f8e12",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "56a428b7162a28d56d49bff1",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c85d13bba070820c21fc787c",
          "_tpl": "64527a3a7da7133e5a09ca99",
          "parentId": "36559cf893ffd99c2b658e2e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "111c8d746a558c833ded7197",
          "_tpl": "6448f2f6d4928d46d30be3f6",
          "parentId": "36559cf893ffd99c2b658e2e",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "669076ae010013bd2daa26b4",
      "Name": "The Whisper Of Death",
      "Root": "96b5aeb5a2889e76585d89f0",
      "Items": [
        {
          "_id": "96b5aeb5a2889e76585d89f0",
          "_tpl": "5926bb2186f7744b1c6c6e60",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d7882b9ab8a84ddc0c00d70d",
          "_tpl": "5926c3b286f774640d189b6b",
          "parentId": "96b5aeb5a2889e76585d89f0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "822c5dca95a738149db70148",
          "_tpl": "5926f2e086f7745aae644231",
          "parentId": "96b5aeb5a2889e76585d89f0",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9700bd7a85b3d4c9eb14ea96",
          "_tpl": "5926c32286f774616e42de99",
          "parentId": "96b5aeb5a2889e76585d89f0",
          "slotId": "mod_charge"
        },
        {
          "_id": "db3f0060a9eda0eaca5089f1",
          "_tpl": "5926f34786f77469195bfe92",
          "parentId": "822c5dca95a738149db70148",
          "slotId": "mod_handguard"
        },
        {
          "_id": "478aabdec09f8d880f3702bc",
          "_tpl": "5926d3c686f77410de68ebc8",
          "parentId": "822c5dca95a738149db70148",
          "slotId": "mod_stock"
        },
        {
          "_id": "b5f1ad6a2b58f6730266b52d",
          "_tpl": "5926d33d86f77410de68ebc0",
          "parentId": "822c5dca95a738149db70148",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a67c16011e8bacd0981dce24",
          "_tpl": "5926dad986f7741f82604363",
          "parentId": "822c5dca95a738149db70148",
          "slotId": "mod_mount"
        },
        {
          "_id": "653696fecf6139c7ba8a8032",
          "_tpl": "570fd6c2d2720bc6458b457f",
          "parentId": "a67c16011e8bacd0981dce24",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66907702010013bd2dcd9cce",
      "Name": "The Prophecy",
      "Root": "fb3c274050b836ab55efed07",
      "Items": [
        {
          "_id": "fb3c274050b836ab55efed07",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "40e2ed114b16e579ef7a001b",
          "_tpl": "59ccfdba86f7747f2109a587",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "b46c04332bef4428b4470e23",
          "_tpl": "5c878ebb2e2216001219d48a",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4532a9db139fa95d35c8f231",
          "_tpl": "651580dc71a4f10aec4b6056",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7885c2d7b552fea168371880",
          "_tpl": "59d6507c86f7741b846413a2",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_reciever"
        },
        {
          "_id": "5347b94d5034f4f63cbdb2fb",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d18e52f3aed019be49756bc3",
          "_tpl": "5649b0fc4bdc2d17108b4588",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_stock"
        },
        {
          "_id": "903857e44889b78cef3a6643",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_magazine"
        },
        {
          "_id": "803061749a11ba5df522e05f",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "fb3c274050b836ab55efed07",
          "slotId": "mod_charge"
        },
        {
          "_id": "712f10b249ddb9bc08c9eb2c",
          "_tpl": "58491f3324597764bc48fa02",
          "parentId": "40e2ed114b16e579ef7a001b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4e503844a9c4302dd53267aa",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "d18e52f3aed019be49756bc3",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "66907742010013bd2d45e684",
      "Name": "Rigormortis",
      "Root": "aa61d269f11f588a19fcd0a0",
      "Items": [
        {
          "_id": "aa61d269f11f588a19fcd0a0",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d16712273c70b6ee85b21e69",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "e2d07f0e3968d76172452699",
          "_tpl": "5f633f68f5750b524b45f112",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "991a08d333f803cd28f7613f",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "7b3461611590897c6cc2e965",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_reciever"
        },
        {
          "_id": "9995da6833883ebe92783d8d",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "95636581dd9217126d9c379a",
          "_tpl": "5b04473a5acfc40018632f70",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_stock"
        },
        {
          "_id": "9a7d19a704a1311c34fbe7f3",
          "_tpl": "5ac66bea5acfc43b321d4aec",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e31b248ebdcc599edd9682b3",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "aa61d269f11f588a19fcd0a0",
          "slotId": "mod_charge"
        },
        {
          "_id": "760456567d4071ae12c9c490",
          "_tpl": "5c9a07572e221644f31c4b32",
          "parentId": "d16712273c70b6ee85b21e69",
          "slotId": "mod_handguard"
        },
        {
          "_id": "cf063261432ec40409a4c359",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "7b3461611590897c6cc2e965",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d51557cc657d8858dc66535a",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "760456567d4071ae12c9c490",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "6ae5d62fb5d94f6c0f15ea7c",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "d51557cc657d8858dc66535a",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b347010013bd2da1577b",
      "Name": "The Dart",
      "Root": "9aaaf324bb9968a664dddea2",
      "Items": [
        {
          "_id": "9aaaf324bb9968a664dddea2",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "82987dfd330d404ff8a4a230",
          "_tpl": "59db3acc86f7742a2c4ab912",
          "parentId": "9aaaf324bb9968a664dddea2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "8e6c2acd674f90836a84e332",
          "_tpl": "55802d5f4bdc2dac148b458e",
          "parentId": "9aaaf324bb9968a664dddea2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3275f209a8a944432e019976",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "9aaaf324bb9968a664dddea2",
          "slotId": "mod_reciever"
        },
        {
          "_id": "df4543f869c93b8d91bb8903",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "9aaaf324bb9968a664dddea2",
          "slotId": "mod_stock"
        },
        {
          "_id": "4850604947a78502ac5bb8ec",
          "_tpl": "5f633ff5c444ce7e3c30a006",
          "parentId": "9aaaf324bb9968a664dddea2",
          "slotId": "mod_charge"
        },
        {
          "_id": "f5fe8c051a4e76f3b8a1da4a",
          "_tpl": "58d2664f86f7747fec5834f6",
          "parentId": "3275f209a8a944432e019976",
          "slotId": "mod_scope"
        },
        {
          "_id": "9141b647d7a8d81b2f61783a",
          "_tpl": "63d3ce0446bd475bcb50f55f",
          "parentId": "3275f209a8a944432e019976",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a3d1c50c5de2f334dec0e9e7",
          "_tpl": "6087e0336d0bd7580617bb7a",
          "parentId": "3275f209a8a944432e019976",
          "slotId": "mod_handguard"
        },
        {
          "_id": "334ca7647bfcb7680edf300e",
          "_tpl": "58d2947e86f77447aa070d53",
          "parentId": "df4543f869c93b8d91bb8903",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "378458167c8baced9f60d59c",
          "_tpl": "58d268fc86f774111273f8c2",
          "parentId": "f5fe8c051a4e76f3b8a1da4a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a03cb0af518cc4075f37c32e",
          "_tpl": "5c0fafb6d174af02a96260ba",
          "parentId": "9141b647d7a8d81b2f61783a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ab05d5b6d45d0950b9e949d0",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "9141b647d7a8d81b2f61783a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "c357e55a120bb357f6baecc8",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "a03cb0af518cc4075f37c32e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "fb23e115585378188715f7cb",
          "_tpl": "58d2912286f7744e27117493",
          "parentId": "334ca7647bfcb7680edf300e",
          "slotId": "mod_stock"
        }
      ]
    },
    {
      "Id": "6691b3bc010013bd2d23f984",
      "Name": "Glory To Arstotzka MK 2",
      "Root": "e2fff55e9b053802dcfacf3c",
      "Items": [
        {
          "_id": "e2fff55e9b053802dcfacf3c",
          "_tpl": "5c501a4d2e221602b412b540",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "de3334fa7b2602310ece3518",
          "_tpl": "5c5039be2e221602b177c9ff",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "4199900b15f748b1ca9228e3",
          "_tpl": "5c503d0a2e221602b542b7ef",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "575455510c3c8b68f113831c",
          "_tpl": "5c503b1c2e221602b21d6e9d",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bf65475006bc2505722c1683",
          "_tpl": "5f63405df5750b524b45f114",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_stock"
        },
        {
          "_id": "efd64f260a9a99e762021485",
          "_tpl": "5c503ad32e2216398b5aada2",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0deb3d15a026a17c04fd6e74",
          "_tpl": "63d114019e35b334d82302f7",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_mount"
        },
        {
          "_id": "0db7119694224001b826d72d",
          "_tpl": "5f63407e1b231926f2329f15",
          "parentId": "e2fff55e9b053802dcfacf3c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "62a40b6077ef6dc2b0525bee",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "0deb3d15a026a17c04fd6e74",
          "slotId": "mod_scope"
        },
        {
          "_id": "133dda72dece3a28f3d94a35",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "62a40b6077ef6dc2b0525bee",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6691b406010013bd2d16ae42",
      "Name": "Hector Salamanca",
      "Root": "f65b70b18d53e99283cf9a35",
      "Items": [
        {
          "_id": "f65b70b18d53e99283cf9a35",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "536805bd8756c8c45c3100bf",
          "_tpl": "5c0e2ff6d174af02a1659d4a",
          "parentId": "f65b70b18d53e99283cf9a35",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b14f5cf9cd1d74fbdc6f7c70",
          "_tpl": "59c1383d86f774290a37e0ca",
          "parentId": "f65b70b18d53e99283cf9a35",
          "slotId": "mod_magazine"
        },
        {
          "_id": "eaaff050a54b7882ac412166",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "f65b70b18d53e99283cf9a35",
          "slotId": "mod_reciever"
        },
        {
          "_id": "7ce3007514191b03202f3116",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "f65b70b18d53e99283cf9a35",
          "slotId": "mod_stock"
        },
        {
          "_id": "aca9c9529704c42df27799e2",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "f65b70b18d53e99283cf9a35",
          "slotId": "mod_charge"
        },
        {
          "_id": "c1272b31ea4f156f63621326",
          "_tpl": "60a23797a37c940de7062d02",
          "parentId": "eaaff050a54b7882ac412166",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fd3e36a11aadbbf83b349f14",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "eaaff050a54b7882ac412166",
          "slotId": "mod_barrel"
        },
        {
          "_id": "451eedb17a179d739bac26a1",
          "_tpl": "5c0e2f5cd174af02a012cfc9",
          "parentId": "eaaff050a54b7882ac412166",
          "slotId": "mod_handguard"
        },
        {
          "_id": "857cc74c654d8e870c058a45",
          "_tpl": "5c0fafb6d174af02a96260ba",
          "parentId": "fd3e36a11aadbbf83b349f14",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9d6e635cb824e8b819a13155",
          "_tpl": "63d3ce281fe77d0f2801859e",
          "parentId": "fd3e36a11aadbbf83b349f14",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "67757dae4fca8ef0b81d0bc5",
          "_tpl": "638612b607dfed1ccb7206ba",
          "parentId": "857cc74c654d8e870c058a45",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6691b473010013bd2daeb776",
      "Name": "The Pretender",
      "Root": "607306c866846cc2c1e4a5c9",
      "Items": [
        {
          "_id": "607306c866846cc2c1e4a5c9",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3c167a4a016f92429c004c1f",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "95283c8304c3e54efbc12543",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_stock"
        },
        {
          "_id": "72324140f50aa1bc34eaff6f",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_charge"
        },
        {
          "_id": "bd2ec2a7388b56a53acc8c12",
          "_tpl": "599860ac86f77436b225ed1a",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "959c271bf223026738671abf",
          "_tpl": "5a9fb739a2750c003215717f",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "45cba2cc479ebaa9d31940a6",
          "_tpl": "59985a8086f77414ec448d1a",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_reciever"
        },
        {
          "_id": "6a4d7cbb60d3a4087916a03a",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c9ba3ee04b09b6825925e760",
          "_tpl": "5c90c3622e221601da359851",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_scope"
        },
        {
          "_id": "e4cde44c7b3f68e24393cf22",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "607306c866846cc2c1e4a5c9",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "5853e076442e53f4d3f90d68",
          "_tpl": "5b31163c5acfc400153b71cb",
          "parentId": "c9ba3ee04b09b6825925e760",
          "slotId": "mod_scope"
        },
        {
          "_id": "7510e98387e09e5e62e3e897",
          "_tpl": "5648b4534bdc2d3d1c8b4580",
          "parentId": "e4cde44c7b3f68e24393cf22",
          "slotId": "mod_handguard"
        },
        {
          "_id": "f418b0d755c948e7a2ecfe47",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "5853e076442e53f4d3f90d68",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c3d8edabf4a01a1b9ddede4d",
          "_tpl": "59fc48e086f77463b1118392",
          "parentId": "7510e98387e09e5e62e3e897",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b4bd010013bd2d53daaa",
      "Name": "Thanos",
      "Root": "296c95b5bcfa72782955a7c4",
      "Items": [
        {
          "_id": "296c95b5bcfa72782955a7c4",
          "_tpl": "59f9cabd86f7743a10721f46",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f3c531681db69d5a9c39a9fe",
          "_tpl": "5649ae4a4bdc2d1b2b8b4588",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e6fef2a3151069bcdfff8410",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_stock"
        },
        {
          "_id": "d33516667a135d874b54992a",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_charge"
        },
        {
          "_id": "c19469940bea1f388f123fa8",
          "_tpl": "5c0672ed0db834001b7353f3",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_magazine"
        },
        {
          "_id": "734e0703e0909ca57dcdad75",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9cf7a8ce28e62b2c74de0dfb",
          "_tpl": "59985a6c86f77414ec448d17",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_reciever"
        },
        {
          "_id": "61dc8e8cdfc614b12a3dae4d",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "19644c8b72ca6f22a1f346b0",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "296c95b5bcfa72782955a7c4",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "6b528b9c9b9002b9b95e70a3",
          "_tpl": "59ecc3dd86f7746dc827481c",
          "parentId": "e6fef2a3151069bcdfff8410",
          "slotId": "mod_stock"
        },
        {
          "_id": "1444dfddc8abfaa956ba4118",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "9cf7a8ce28e62b2c74de0dfb",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a92d5f38a03a816453f9e771",
          "_tpl": "5648b1504bdc2d9d488b4584",
          "parentId": "19644c8b72ca6f22a1f346b0",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6691b4fb010013bd2dd8ce49",
      "Name": "The Dancer",
      "Root": "188e732b9433897e3ecbc8c9",
      "Items": [
        {
          "_id": "188e732b9433897e3ecbc8c9",
          "_tpl": "59f9cabd86f7743a10721f46",
          "upd": {
            "Repairable": {
              "MaxDurability": 95,
              "Durability": 95
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7b5d436faa19bd403cba31e1",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "0862eb88a4f53bfa28b063ed",
          "_tpl": "5ac78eaf5acfc4001926317a",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_stock"
        },
        {
          "_id": "14f9c8184b367e47fdf16dea",
          "_tpl": "5998529a86f774647f44f421",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9c2dcde6399609fafefc6855",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5be2bbb1f4070c6ce910da0f",
          "_tpl": "59985a6c86f77414ec448d17",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_reciever"
        },
        {
          "_id": "48a59b5349c9b5c6859230bc",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ed444c1f2c4652141b0592e6",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "188e732b9433897e3ecbc8c9",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9a3b2204b04fbf9e260d1114",
          "_tpl": "59ecc3dd86f7746dc827481c",
          "parentId": "0862eb88a4f53bfa28b063ed",
          "slotId": "mod_stock"
        },
        {
          "_id": "64e7e0f69578df3f2cb57f5b",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "5be2bbb1f4070c6ce910da0f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "858d4f118c2c66961d08ae79",
          "_tpl": "5d4aaa54a4b9365392071170",
          "parentId": "ed444c1f2c4652141b0592e6",
          "slotId": "mod_handguard"
        },
        {
          "_id": "b32ab068be989fc1a38a9251",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "858d4f118c2c66961d08ae79",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "095fed945f9993e8a967748e",
          "_tpl": "65169d5b30425317755f8e25",
          "parentId": "b32ab068be989fc1a38a9251",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "6691b54d010013bd2d87d660",
      "Name": "The Surprise",
      "Root": "8c44c42782f2ac959a17bdad",
      "Items": [
        {
          "_id": "8c44c42782f2ac959a17bdad",
          "_tpl": "59e6152586f77473dc057aa1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3cd8b990074c249ad02a0b6d",
          "_tpl": "59e649f986f77411d949b246",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "fe121e377c30260c8e0befb3",
          "_tpl": "593d489686f7745c6255d58a",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "47820f41d0817f8437bd8749",
          "_tpl": "5947f92f86f77427344a76b1",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "842af9c7d16dc996858f769d",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_reciever"
        },
        {
          "_id": "59180f22977a7732f81e5999",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e51ce7f87f4fc1d5857660a4",
          "_tpl": "5649b0fc4bdc2d17108b4588",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_stock"
        },
        {
          "_id": "6bf5324b04a5c570211aa692",
          "_tpl": "59d6272486f77466146386ff",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_magazine"
        },
        {
          "_id": "13443d33ab6195d6ded03955",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "8c44c42782f2ac959a17bdad",
          "slotId": "mod_charge"
        },
        {
          "_id": "fc7a8d64b08106f7401ca3c1",
          "_tpl": "5a9d56c8a2750c0032157146",
          "parentId": "3cd8b990074c249ad02a0b6d",
          "slotId": "mod_handguard"
        },
        {
          "_id": "dd6b503dd12c4a36e2331809",
          "_tpl": "5c0505e00db834001b735073",
          "parentId": "842af9c7d16dc996858f769d",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9176ce683fab9d766a85fa06",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "e51ce7f87f4fc1d5857660a4",
          "slotId": "mod_stock"
        },
        {
          "_id": "fb606a62d4c8597b6d8c6af0",
          "_tpl": "615d8fd3290d254f5e6b2edc",
          "parentId": "fc7a8d64b08106f7401ca3c1",
          "slotId": "mod_mount_000"
        }
      ]
    },
    {
      "Id": "6691b57d010013bd2daf6442",
      "Name": "Matilda",
      "Root": "b6a603696e1303d14ce20988",
      "Items": [
        {
          "_id": "b6a603696e1303d14ce20988",
          "_tpl": "59e6152586f77473dc057aa1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3ec090192c3c922ac4b56f61",
          "_tpl": "59ccfdba86f7747f2109a587",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "dba1db5ec9facf5ea68319e2",
          "_tpl": "5f633f68f5750b524b45f112",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "7c488ef18303312a212f8a39",
          "_tpl": "5f6341043ada5942720e2dc5",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b0eb39377bb4087ad968e211",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_reciever"
        },
        {
          "_id": "a08834ed3922ce4d390b85a0",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2e171546a06f3e6924f9b334",
          "_tpl": "5b04473a5acfc40018632f70",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_stock"
        },
        {
          "_id": "386cf6473fc8d863cbbe3ff7",
          "_tpl": "59fafc5086f7740dbe19f6c3",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b9f032a5af4de78665a27e7b",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "b6a603696e1303d14ce20988",
          "slotId": "mod_charge"
        },
        {
          "_id": "4f3354a814f6d5c2dd54f6de",
          "_tpl": "5b30b0dc5acfc400153b7124",
          "parentId": "b0eb39377bb4087ad968e211",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6691b5fb010013bd2db16e01",
      "Name": "MacMilan",
      "Root": "e1b4bac786bebc3c20a70d8e",
      "Items": [
        {
          "_id": "e1b4bac786bebc3c20a70d8e",
          "_tpl": "587e02ff24597743df3deaeb",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "cd92e11f5490653da4987913",
          "_tpl": "653ecef836fae5a82f02b869",
          "parentId": "e1b4bac786bebc3c20a70d8e",
          "slotId": "mod_stock"
        },
        {
          "_id": "a2c74a5395ed12c87cb790c5",
          "_tpl": "634eff66517ccc8a960fc735",
          "parentId": "e1b4bac786bebc3c20a70d8e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f12e6bc9dd310723d589a063",
          "_tpl": "587df3a12459772c28142567",
          "parentId": "e1b4bac786bebc3c20a70d8e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7fe0b9121527ad53aac26bc2",
          "_tpl": "6415c694da439c6a97048b56",
          "parentId": "e1b4bac786bebc3c20a70d8e",
          "slotId": "mod_reciever"
        },
        {
          "_id": "6e3d8fc17a46e565d7c4d043",
          "_tpl": "634f05a21f9f536910079b56",
          "parentId": "a2c74a5395ed12c87cb790c5",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "4f3ce0187733e21598c74b6d",
          "_tpl": "593d490386f7745ee97a1555",
          "parentId": "a2c74a5395ed12c87cb790c5",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ae66855dfab0befa1bda7874",
          "_tpl": "5c0517910db83400232ffee5",
          "parentId": "7fe0b9121527ad53aac26bc2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "012c31b5d3764d95724d7904",
          "_tpl": "634f036a517ccc8a960fc746",
          "parentId": "6e3d8fc17a46e565d7c4d043",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "3825e2fa16217962cf58ce9a",
          "_tpl": "574db213245977459a2f3f5d",
          "parentId": "6e3d8fc17a46e565d7c4d043",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "45a16013a99fab7f5d4f5346",
          "_tpl": "653ecc425a1690d9d90491e4",
          "parentId": "012c31b5d3764d95724d7904",
          "slotId": "mod_mount_000"
        }
      ]
    },
    {
      "Id": "6691b634010013bd2da4513a",
      "Name": "MacMilan MK 2",
      "Root": "5ffd87d970db0792f5c07d6c",
      "Items": [
        {
          "_id": "5ffd87d970db0792f5c07d6c",
          "_tpl": "587e02ff24597743df3deaeb",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "551fd619d9a062c57af0d8b7",
          "_tpl": "653ecef836fae5a82f02b869",
          "parentId": "5ffd87d970db0792f5c07d6c",
          "slotId": "mod_stock"
        },
        {
          "_id": "d229f478ccb0523b06a68b88",
          "_tpl": "634eff66517ccc8a960fc735",
          "parentId": "5ffd87d970db0792f5c07d6c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b72382a1509f00b50868eca4",
          "_tpl": "5c5970672e221602b21d7855",
          "parentId": "5ffd87d970db0792f5c07d6c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "9f05fc2c8c5673cb1845b565",
          "_tpl": "6415c694da439c6a97048b56",
          "parentId": "5ffd87d970db0792f5c07d6c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "bdea6441f61270cceab12ab6",
          "_tpl": "634f05a21f9f536910079b56",
          "parentId": "d229f478ccb0523b06a68b88",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "a057f51ec1a0a96eb57b0134",
          "_tpl": "5cf67cadd7f00c065a5abab7",
          "parentId": "d229f478ccb0523b06a68b88",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e373da854e11153c544734b4",
          "_tpl": "6165ac8c290d254f5e6b2f6c",
          "parentId": "9f05fc2c8c5673cb1845b565",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "cd74a3b84e6625984f5f10e7",
          "_tpl": "634f036a517ccc8a960fc746",
          "parentId": "bdea6441f61270cceab12ab6",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "06b83fc201c816dd2cf0b468",
          "_tpl": "574db213245977459a2f3f5d",
          "parentId": "bdea6441f61270cceab12ab6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0856d4333e00b10573dcbbb5",
          "_tpl": "59fb257e86f7742981561852",
          "parentId": "a057f51ec1a0a96eb57b0134",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "27bb8192bd9e03dc57f57984",
          "_tpl": "653ecc425a1690d9d90491e4",
          "parentId": "cd74a3b84e6625984f5f10e7",
          "slotId": "mod_mount_000"
        }
      ]
    }
  ];

  public weaponScavBuilds = [
    {
      "Id": "6690507c0100152820b5b011",
      "Name": "Bambi Punisher",
      "Root": "9cdec051ec16623c41d3582b",
      "Items": [
        {
          "_id": "9cdec051ec16623c41d3582b",
          "_tpl": "59e6152586f77473dc057aa1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "860001afde794c4209a73bcf",
          "_tpl": "59e649f986f77411d949b246",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "8fb65584f9b1f5e8215dcc04",
          "_tpl": "5a0d63621526d8dba31fe3bf",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c1106cf9296f73ab4ee2c5b4",
          "_tpl": "59e6318286f77444dd62c4cc",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b6b39aa9f0e7ae8e86b333a9",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f6826d5c63adf416d4948750",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7ddc85756621d285354fad1c",
          "_tpl": "59e6227d86f77440d64f5dc2",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_stock"
        },
        {
          "_id": "36f65728eec7ce13edc8a2f0",
          "_tpl": "5b1fd4e35acfc40018633c39",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e5bc80a76f7c7e87e1a8454d",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "9cdec051ec16623c41d3582b",
          "slotId": "mod_charge"
        },
        {
          "_id": "2dba96f073f68b0c797944a1",
          "_tpl": "5a9d56c8a2750c0032157146",
          "parentId": "860001afde794c4209a73bcf",
          "slotId": "mod_handguard"
        },
        {
          "_id": "71c644eb9e1bc65eb3151721",
          "_tpl": "5b30b0dc5acfc400153b7124",
          "parentId": "b6b39aa9f0e7ae8e86b333a9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669050e00100152820f1e63e",
      "Name": "Little Squeker",
      "Root": "4d963396445620161bd9e555",
      "Items": [
        {
          "_id": "4d963396445620161bd9e555",
          "_tpl": "59f9cabd86f7743a10721f46",
          "upd": {
            "Repairable": {
              "MaxDurability": 95,
              "Durability": 95
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "4b5c04694c863881c068163d",
          "_tpl": "651580dc71a4f10aec4b6056",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "636f4c86e3d5a463d0828494",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_stock"
        },
        {
          "_id": "984568a49477547c7032addc",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_charge"
        },
        {
          "_id": "0cd92468b781b9aced4b5eaf",
          "_tpl": "599860ac86f77436b225ed1a",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_magazine"
        },
        {
          "_id": "625717c13040bb699fc09878",
          "_tpl": "59bfc5c886f7743bf6794e62",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "889c7bc8024f96fb91ae7b12",
          "_tpl": "59985a6c86f77414ec448d17",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_reciever"
        },
        {
          "_id": "c01ca6bb5396d2c4e10cc28e",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ff49fa2aa32a509e7ed0d1dc",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "4d963396445620161bd9e555",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "3d67519ce6e40e0f52b52956",
          "_tpl": "6494094948796d891603e59f",
          "parentId": "636f4c86e3d5a463d0828494",
          "slotId": "mod_stock"
        },
        {
          "_id": "c2d1e283f3d03eb217bb5b31",
          "_tpl": "570fd6c2d2720bc6458b457f",
          "parentId": "889c7bc8024f96fb91ae7b12",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "10a098c88c748a73c7ceceb1",
          "_tpl": "5648b1504bdc2d9d488b4584",
          "parentId": "ff49fa2aa32a509e7ed0d1dc",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6690514201001528208ca9b5",
      "Name": "Pickle Muncher",
      "Root": "2f0246d6e225496577368ffc",
      "Items": [
        {
          "_id": "2f0246d6e225496577368ffc",
          "_tpl": "59f9cabd86f7743a10721f46",
          "upd": {
            "Repairable": {
              "MaxDurability": 95,
              "Durability": 95
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "9e6312ba3fa198488a1cf41b",
          "_tpl": "5998517986f7746017232f7e",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "e6ca7a38ccf8c78da5d8ebd7",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_stock"
        },
        {
          "_id": "257f54892a74a58db7310d9e",
          "_tpl": "5c0672ed0db834001b7353f3",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8a7cd4134b947ef307fca79e",
          "_tpl": "5998597786f77414ea6da093",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d1a478dfecaa4c822767528a",
          "_tpl": "59985a8086f77414ec448d1a",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_reciever"
        },
        {
          "_id": "b5fe2698891e002bf3e4e044",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c9a0af2b561d750a152438cc",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "2f0246d6e225496577368ffc",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "bbf42e4a4a7dc239491ac30c",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "e6ca7a38ccf8c78da5d8ebd7",
          "slotId": "mod_stock"
        },
        {
          "_id": "68908378fd98d3585d449c7f",
          "_tpl": "5648b4534bdc2d3d1c8b4580",
          "parentId": "c9a0af2b561d750a152438cc",
          "slotId": "mod_handguard"
        },
        {
          "_id": "f9c8051ed05f0d3157bb5757",
          "_tpl": "5c87ca002e221600114cb150",
          "parentId": "68908378fd98d3585d449c7f",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "7cfb2b7cba761040e6b24f71",
          "_tpl": "570fd6c2d2720bc6458b457f",
          "parentId": "68908378fd98d3585d449c7f",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "52790b79dc116876a4076a1f",
          "_tpl": "5a5f1ce64f39f90b401987bc",
          "parentId": "68908378fd98d3585d449c7f",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690520b01001528206b67cf",
      "Name": "Scav Harvest",
      "Root": "15807decdddd05c8ae848ca6",
      "Items": [
        {
          "_id": "15807decdddd05c8ae848ca6",
          "_tpl": "59ff346386f77477562ff5e2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1d0036be99b01ff7479fb700",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "0c7beb94ab5ddfe72740f08a",
          "_tpl": "5a0d63621526d8dba31fe3bf",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "adc6c93e76c73c347ebb8460",
          "_tpl": "5a0071d486f77404e23a12b2",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_pistol_grip_akms"
        },
        {
          "_id": "fe6ed2e0f1d40c7ac10b7056",
          "_tpl": "59d6507c86f7741b846413a2",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_reciever"
        },
        {
          "_id": "225d7597412c9025ab7405ca",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "df0dc78b78fced3fc836f2c3",
          "_tpl": "59ff3b6a86f77477562ff5ed",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_stock_akms"
        },
        {
          "_id": "2006456b6c9ad743102f064b",
          "_tpl": "5a0060fc86f7745793204432",
          "parentId": "15807decdddd05c8ae848ca6",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8a1de003d4695e21bbe4d9a5",
          "_tpl": "5d4aaa73a4b9365392071175",
          "parentId": "1d0036be99b01ff7479fb700",
          "slotId": "mod_handguard"
        },
        {
          "_id": "abc9006bc4dc3087dc0ef4c7",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "df0dc78b78fced3fc836f2c3",
          "slotId": "mod_stock"
        },
        {
          "_id": "2cf7852e88d548c5f8d1684b",
          "_tpl": "651a8bf3a8520e48047bf708",
          "parentId": "8a1de003d4695e21bbe4d9a5",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669052470100152820692a61",
      "Name": "Scav Muncher",
      "Root": "1b4da91fafd1c59e7213c97f",
      "Items": [
        {
          "_id": "1b4da91fafd1c59e7213c97f",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5b457e42958a98818d73ba1a",
          "_tpl": "5c0e2ff6d174af02a1659d4a",
          "parentId": "1b4da91fafd1c59e7213c97f",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "2d18cc3c976a7ec5018141ac",
          "_tpl": "5d1340b3d7ad1a0b52682ed7",
          "parentId": "1b4da91fafd1c59e7213c97f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6f7c8e7d51584d47aa924b5c",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "1b4da91fafd1c59e7213c97f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "5424be3b02905d3926512aa0",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "1b4da91fafd1c59e7213c97f",
          "slotId": "mod_stock"
        },
        {
          "_id": "253f91cdc77b2eb459fd0b59",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "1b4da91fafd1c59e7213c97f",
          "slotId": "mod_charge"
        },
        {
          "_id": "30a7d68edb46a71de7ca9e43",
          "_tpl": "5c0a2cec0db834001b7ce47d",
          "parentId": "6f7c8e7d51584d47aa924b5c",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "31a06b61fc19c7c606b3bc45",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "6f7c8e7d51584d47aa924b5c",
          "slotId": "mod_barrel"
        },
        {
          "_id": "5c1773ff6ada81325068b6d3",
          "_tpl": "5c0e2f5cd174af02a012cfc9",
          "parentId": "6f7c8e7d51584d47aa924b5c",
          "slotId": "mod_handguard"
        },
        {
          "_id": "688418608d765ddcb56522b9",
          "_tpl": "5c0fafb6d174af02a96260ba",
          "parentId": "31a06b61fc19c7c606b3bc45",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "6b903e1e9f5594d45cb39148",
          "_tpl": "56eabcd4d2720b66698b4574",
          "parentId": "31a06b61fc19c7c606b3bc45",
          "slotId": "mod_gas_block"
        }
      ]
    },
    {
      "Id": "669052760100152820b351c2",
      "Name": "Secret Scav Punisher",
      "Root": "e5d997742285ee82236ed5c8",
      "Items": [
        {
          "_id": "e5d997742285ee82236ed5c8",
          "_tpl": "5a7ae0c351dfba0017554310",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "8d47fb535b45f0bf7c35f8f3",
          "_tpl": "5a6b5f868dc32e000a311389",
          "parentId": "e5d997742285ee82236ed5c8",
          "slotId": "mod_barrel"
        },
        {
          "_id": "75fb8b80c61c01db2999dcf9",
          "_tpl": "5a7afa25e899ef00135e31b0",
          "parentId": "e5d997742285ee82236ed5c8",
          "slotId": "mod_reciever"
        },
        {
          "_id": "87619d40648f87fc5d0e832d",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "e5d997742285ee82236ed5c8",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a0cb9a7412c369f06372bc44",
          "_tpl": "5a7d9122159bd4001438dbf4",
          "parentId": "75fb8b80c61c01db2999dcf9",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "07e5ee93111aa8e94e5052cd",
          "_tpl": "5a6f58f68dc32e000a311390",
          "parentId": "75fb8b80c61c01db2999dcf9",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "dd42a7f969a02c4527afb08c",
          "_tpl": "5a7b32a2e899ef00135e345a",
          "parentId": "75fb8b80c61c01db2999dcf9",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669053180100152820021947",
      "Name": "Silent Murder",
      "Root": "567158f6c1887bc1e6754b5f",
      "Items": [
        {
          "_id": "567158f6c1887bc1e6754b5f",
          "_tpl": "5bfd297f0db834001a669119",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "a0d8d42b9f9fff8f58dd567b",
          "_tpl": "5ae0973a5acfc4001562206c",
          "parentId": "567158f6c1887bc1e6754b5f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e9ac54be6c0b5003b81b2013",
          "_tpl": "5bfd35380db83400232fe5cc",
          "parentId": "567158f6c1887bc1e6754b5f",
          "slotId": "mod_stock"
        },
        {
          "_id": "8c3cedccf364cd07c5e54acc",
          "_tpl": "5ae09bff5acfc4001562219d",
          "parentId": "567158f6c1887bc1e6754b5f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "d5001c6f64fa52cd5a4c854a",
          "_tpl": "5bbde409d4351e003562b036",
          "parentId": "e9ac54be6c0b5003b81b2013",
          "slotId": "mod_stock"
        },
        {
          "_id": "68587af5c6b6cd3f383b65d7",
          "_tpl": "5ae099875acfc4001714e593",
          "parentId": "8c3cedccf364cd07c5e54acc",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "0093545c5303185f149a755b",
          "_tpl": "5ae099925acfc4001a5fc7b3",
          "parentId": "8c3cedccf364cd07c5e54acc",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "909927df98203b484415e966",
          "_tpl": "5b86a0e586f7745b600ccb23",
          "parentId": "8c3cedccf364cd07c5e54acc",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6690534801001528200ee0bc",
      "Name": "Long Boi",
      "Root": "6688a2ba2d49028f0b9a7278",
      "Items": [
        {
          "_id": "6688a2ba2d49028f0b9a7278",
          "_tpl": "5bfd297f0db834001a669119",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "25f29cd58557d19b4a8f0a24",
          "_tpl": "5ae0973a5acfc4001562206c",
          "parentId": "6688a2ba2d49028f0b9a7278",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c99fc0e3c9d6ea3945e21113",
          "_tpl": "5bfd36ad0db834001c38ef66",
          "parentId": "6688a2ba2d49028f0b9a7278",
          "slotId": "mod_stock"
        },
        {
          "_id": "0d217f43c4d13934d492b700",
          "_tpl": "5bfd4cbe0db834001b73449f",
          "parentId": "6688a2ba2d49028f0b9a7278",
          "slotId": "mod_barrel"
        },
        {
          "_id": "fec51a55a2c68a1fa1000192",
          "_tpl": "5ae099875acfc4001714e593",
          "parentId": "0d217f43c4d13934d492b700",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "43d3b4a902dc8b0e9600adbb",
          "_tpl": "5bfd4c980db834001b73449d",
          "parentId": "0d217f43c4d13934d492b700",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d423c3e17c4ae32fa3275485",
          "_tpl": "5bbdb83fd4351e44f824c44b",
          "parentId": "0d217f43c4d13934d492b700",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669053c30100152820288faf",
      "Name": "Baby Killer",
      "Root": "faec78e1552dd23a84e0fafe",
      "Items": [
        {
          "_id": "faec78e1552dd23a84e0fafe",
          "_tpl": "5de7bd7bfd6b4e6e2276dc25",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d439a2d7efd7c2d07fdb9573",
          "_tpl": "5de8eac42a78646d96665d91",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_magazine"
        },
        {
          "_id": "aa19b3c69c9a711e71c14a41",
          "_tpl": "5de8f237bbaf010b10528a70",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "8d42f4d077649acc022265c7",
          "_tpl": "5de910da8b6c4240ba2651b5",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_stock"
        },
        {
          "_id": "aed8d04bf9cabc6dd08e2f93",
          "_tpl": "5de8fbad2fbe23140d3ee9c4",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "ae30c0bf7ea8c63893753d30",
          "_tpl": "5de8e67c4a9f347bc92edbd7",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_reciever"
        },
        {
          "_id": "ae875b0c72a72c9e8a6648bc",
          "_tpl": "5de922d4b11454561e39239f",
          "parentId": "faec78e1552dd23a84e0fafe",
          "slotId": "mod_charge"
        },
        {
          "_id": "9441545100c74cc5b48f146c",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "aa19b3c69c9a711e71c14a41",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "2e97d8488305c9a3e2686ec1",
          "_tpl": "591c4efa86f7741030027726",
          "parentId": "ae30c0bf7ea8c63893753d30",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "150bf19e47b04f4f14e46479",
          "_tpl": "5de8fb539f98ac2bc659513a",
          "parentId": "ae30c0bf7ea8c63893753d30",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7409023bda9c0d004e436d8c",
          "_tpl": "5de8fc0b205ddc616a6bc51b",
          "parentId": "ae30c0bf7ea8c63893753d30",
          "slotId": "mod_mount"
        }
      ]
    },
    {
      "Id": "669053e30100152820c53ad6",
      "Name": "Low Tier God",
      "Root": "e1c70a29e685b71f11df7948",
      "Items": [
        {
          "_id": "e1c70a29e685b71f11df7948",
          "_tpl": "5fc3e272f8b6a877a729eac5",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "5fc6ad7069ca736bf97ade08",
          "_tpl": "5fc3e466187fea44d52eda90",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7e12f935c34531a2ea5c7c4f",
          "_tpl": "5c0505e00db834001b735073",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e493ae312da59431d92204fb",
          "_tpl": "5fc3e4ee7283c4046c5814af",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_stock"
        },
        {
          "_id": "406ce931568e9949f7ccae08",
          "_tpl": "5fc3e4a27283c4046c5814ab",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_barrel"
        },
        {
          "_id": "da5289a161679be06c18c5ab",
          "_tpl": "5fc53954f8b6a877a729eaeb",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "b79fc5030985a0f678093b69",
          "_tpl": "5fc5396e900b1d5091531e72",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "b114c2689eae365229fd1bc9",
          "_tpl": "5fc5396e900b1d5091531e72",
          "parentId": "e1c70a29e685b71f11df7948",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "0ce2265431901a1758bd97f9",
          "_tpl": "5c791e872e2216001219c40a",
          "parentId": "da5289a161679be06c18c5ab",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669053f80100152820372f54",
      "Name": "Silent Cartographer",
      "Root": "6a0257c5559fea2e5a61d82e",
      "Items": [
        {
          "_id": "6a0257c5559fea2e5a61d82e",
          "_tpl": "57f3c6bd24597738e730fa2f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "413bea450e98350e48fddd76",
          "_tpl": "57d152ec245977144076ccdf",
          "parentId": "6a0257c5559fea2e5a61d82e",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f9b7824b9680a7b8ac8174cd",
          "_tpl": "57f3c7e024597738ea4ba286",
          "parentId": "6a0257c5559fea2e5a61d82e",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d6964742991cd69d6e0da457",
          "_tpl": "57d1519e24597714373db79d",
          "parentId": "6a0257c5559fea2e5a61d82e",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1ecc7e50b8cfc0206e65fee9",
          "_tpl": "57f3c8cc2459773ec4480328",
          "parentId": "f9b7824b9680a7b8ac8174cd",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66905426010015282033c562",
      "Name": "Elo Generator",
      "Root": "30bd2e90ca1c4ade821d5c6d",
      "Items": [
        {
          "_id": "30bd2e90ca1c4ade821d5c6d",
          "_tpl": "5cadc190ae921500103bb3b6",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "dc832698d8979ba3044a3222",
          "_tpl": "5cadc1c6ae9215000f2775a4",
          "parentId": "30bd2e90ca1c4ade821d5c6d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a1081b5b8e1b26fdbfd98bc6",
          "_tpl": "5cadc431ae921500113bb8d5",
          "parentId": "30bd2e90ca1c4ade821d5c6d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "261ea0d9869d6fcf170a95c8",
          "_tpl": "5cadc55cae921500103bb3be",
          "parentId": "30bd2e90ca1c4ade821d5c6d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "641939dca4e99aa0246404b4",
          "_tpl": "5cadc2e0ae9215051e1c21e7",
          "parentId": "30bd2e90ca1c4ade821d5c6d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "f2737a3d65f7c274e130cd06",
          "_tpl": "5c6165902e22160010261b28",
          "parentId": "dc832698d8979ba3044a3222",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3f1b42b997a4f3c17d006ac3",
          "_tpl": "5cadd954ae921500103bb3c2",
          "parentId": "261ea0d9869d6fcf170a95c8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "5289783ded80754c9ecdeef6",
          "_tpl": "5cadd919ae921500126a77f3",
          "parentId": "261ea0d9869d6fcf170a95c8",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "e221abbef1b5a05995e05255",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "3f1b42b997a4f3c17d006ac3",
          "slotId": "mod_scope"
        },
        {
          "_id": "79a50adb38cbc3e04921373e",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "e221abbef1b5a05995e05255",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905446010015282012b556",
      "Name": "Low Tier John Wick",
      "Root": "486ee86a3e555ba1414e5963",
      "Items": [
        {
          "_id": "486ee86a3e555ba1414e5963",
          "_tpl": "5abccb7dd8ce87001773e277",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "db78f56ea041da9bc8e7cd68",
          "_tpl": "5a17fb03fcdbcbcae668728f",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_magazine"
        },
        {
          "_id": "7282cc8c114dd1d22c72ea1d",
          "_tpl": "5a17fb9dfcdbcbcae6687291",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_stock"
        },
        {
          "_id": "da819c1056e27ed59130e646",
          "_tpl": "5a17fc70fcdbcb0176308b3d",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "440d1e1572927653f0ab9793",
          "_tpl": "5aba62f8d8ce87001943946b",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "20306e9465179d9f46ba6bfb",
          "_tpl": "5aba639ed8ce8700182ece67",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "91b0dca376e1bc8d033dad8d",
          "_tpl": "5abcc328d8ce8700194394f3",
          "parentId": "486ee86a3e555ba1414e5963",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669054660100152820c44ff8",
      "Name": "Golden Shower",
      "Root": "d066ea59fc2ee78829084515",
      "Items": [
        {
          "_id": "d066ea59fc2ee78829084515",
          "_tpl": "5b3b713c5acfc4330140bd8d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "86b6e8ec4e7c55e60b939fee",
          "_tpl": "5b3baf8f5acfc40dc5296692",
          "parentId": "d066ea59fc2ee78829084515",
          "slotId": "mod_barrel"
        },
        {
          "_id": "34ce30d7a7cb213009486f5e",
          "_tpl": "5b3cadf35acfc400194776a0",
          "parentId": "d066ea59fc2ee78829084515",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "35d3408d8dca96ce5190a880",
          "_tpl": "571a29dc2459771fb2755a6a",
          "parentId": "d066ea59fc2ee78829084515",
          "slotId": "mod_magazine"
        },
        {
          "_id": "0a1e9242a70a3073990ead13",
          "_tpl": "5bffd7ed0db834001d23ebf9",
          "parentId": "d066ea59fc2ee78829084515",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c784ce11f29528a20faa35b0",
          "_tpl": "5c079ed60db834001a66b372",
          "parentId": "d066ea59fc2ee78829084515",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669061ea010015282042759f",
      "Name": "Scav Scrammer",
      "Root": "5dc43929927f7164b1914d71",
      "Items": [
        {
          "_id": "5dc43929927f7164b1914d71",
          "_tpl": "62e14904c2699c0ec93adc47",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "8cc33068de18001601f1f12f",
          "_tpl": "62e153bcdb1a5c41971c1b5b",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_magazine"
        },
        {
          "_id": "5324b37ccf465fe1249c21d8",
          "_tpl": "62e2a754b6c0ee2f230cee0f",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "24bdbb69ff88396da3c791f7",
          "_tpl": "62e292e7b6c0ee2f230cee00",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_stock"
        },
        {
          "_id": "c3bd174c89271f82e29e8195",
          "_tpl": "62e27a7865f0b1592a49e17b",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_reciever"
        },
        {
          "_id": "43574f54eb47cafd8bda6677",
          "_tpl": "62e15547db1a5c41971c1b5e",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1c85b4aa4aa4370599f2c69f",
          "_tpl": "637b9c37b7e3bc41b21ce71a",
          "parentId": "5dc43929927f7164b1914d71",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "6e27d8101568b42089eb7449",
          "_tpl": "62ff9920fe938a24c90c10d2",
          "parentId": "c3bd174c89271f82e29e8195",
          "slotId": "mod_mount",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ddadebbede178cefde824228",
          "_tpl": "62ed189fb3608410ef5a2bfc",
          "parentId": "43574f54eb47cafd8bda6677",
          "slotId": "mod_mount_001"
        }
      ]
    },
    {
      "Id": "6690620e010015282057fcfb",
      "Name": "Money Moves",
      "Root": "23c9190d5a21d3846be3087c",
      "Items": [
        {
          "_id": "23c9190d5a21d3846be3087c",
          "_tpl": "59f9cabd86f7743a10721f46",
          "upd": {
            "Repairable": {
              "MaxDurability": 95,
              "Durability": 95
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "46de5892b53ea0bb505cb84a",
          "_tpl": "59e62cc886f77440d40b52a1",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "f48be902467ac878d63304dd",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_stock"
        },
        {
          "_id": "14a01fd36dd2cdf789df98a1",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_charge"
        },
        {
          "_id": "16ad3bc50a2cd117b3886991",
          "_tpl": "5998529a86f774647f44f421",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6cf1025b1f0e54d8c04a608a",
          "_tpl": "5998598e86f7740b3f498a86",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c549af5e03b215ea14e305b9",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2368e6455eb8f274cfa69739",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "23c9190d5a21d3846be3087c",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "e391a74f1d3f7b34d12d0b06",
          "_tpl": "647dba3142c479dde701b654",
          "parentId": "2368e6455eb8f274cfa69739",
          "slotId": "mod_handguard"
        },
        {
          "_id": "334a2a7730b9ce1ec5bdd496",
          "_tpl": "570fd6c2d2720bc6458b457f",
          "parentId": "e391a74f1d3f7b34d12d0b06",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ac1be12b08e34cd1ef1b8ac0",
          "_tpl": "5cda9bcfd7f00c0c0b53e900",
          "parentId": "e391a74f1d3f7b34d12d0b06",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "669062340100152820d75345",
      "Name": "Pocket Money Moves",
      "Root": "62efa2d23a3c88392f7a87cf",
      "Items": [
        {
          "_id": "62efa2d23a3c88392f7a87cf",
          "_tpl": "56dee2bdd2720bc8328b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "dc5e44feed79776bfe5f781a",
          "_tpl": "588200af24597742fa221dfb",
          "parentId": "62efa2d23a3c88392f7a87cf",
          "slotId": "mod_barrel"
        },
        {
          "_id": "9da6d4637da1fcae94c81178",
          "_tpl": "56deed6ed2720b4c698b4583",
          "parentId": "62efa2d23a3c88392f7a87cf",
          "slotId": "mod_handguard"
        },
        {
          "_id": "87160a25f77634f825c0e186",
          "_tpl": "55d484b44bdc2d1d4e8b456d",
          "parentId": "62efa2d23a3c88392f7a87cf",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a21cb9afc78d9deba4abbbf5",
          "_tpl": "56083a334bdc2dc8488b4571",
          "parentId": "62efa2d23a3c88392f7a87cf",
          "slotId": "mod_stock"
        },
        {
          "_id": "66e338a80a1b1f6e53df8261",
          "_tpl": "55d48ebc4bdc2d8c2f8b456c",
          "parentId": "62efa2d23a3c88392f7a87cf",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "af11f48ca5aaf4ba5d155e48",
          "_tpl": "560838c94bdc2d77798b4569",
          "parentId": "dc5e44feed79776bfe5f781a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "83bc3901e43a064b210be645",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "a21cb9afc78d9deba4abbbf5",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6c71fc799a43aa8954321617",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "66e338a80a1b1f6e53df8261",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690625801001528206f7b30",
      "Name": "Scav Juicer",
      "Root": "78dbb50ade8b723e0a1d2e68",
      "Items": [
        {
          "_id": "78dbb50ade8b723e0a1d2e68",
          "_tpl": "59984ab886f7743e98271174",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "eabb2e70ad0e75313abb8f72",
          "_tpl": "5998517986f7746017232f7e",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "9c572ba5b4cde27f581c10c7",
          "_tpl": "599851db86f77467372f0a18",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_stock"
        },
        {
          "_id": "e5319ccd2d59902efdea72e7",
          "_tpl": "599860ac86f77436b225ed1a",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_magazine"
        },
        {
          "_id": "904df8cf2718bd7277baffed",
          "_tpl": "5998597786f77414ea6da093",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "50697d3044ff23b51928438c",
          "_tpl": "599860e986f7743bb57573a6",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "704d55ee322ea4a86f75d1b8",
          "_tpl": "5947db3f86f77447880cf76f",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b1528423df65dfe60703659c",
          "_tpl": "59ccd11386f77428f24a488f",
          "parentId": "78dbb50ade8b723e0a1d2e68",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "7b48769498b215f29492f142",
          "_tpl": "5d2c829448f0353a5c7d6674",
          "parentId": "b1528423df65dfe60703659c",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6690627701001528200a6ed8",
      "Name": "Ol Reliable",
      "Root": "3ad3de3b233994a744fe7ff2",
      "Items": [
        {
          "_id": "3ad3de3b233994a744fe7ff2",
          "_tpl": "57f4c844245977379d5c14d1",
          "upd": {
            "Repairable": {
              "MaxDurability": 95,
              "Durability": 95
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "ac65172ed8960f508d43cd63",
          "_tpl": "57d152ec245977144076ccdf",
          "parentId": "3ad3de3b233994a744fe7ff2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "48e0bdae2d850f7dcb6f8f53",
          "_tpl": "57d1519e24597714373db79d",
          "parentId": "3ad3de3b233994a744fe7ff2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "824aedbb2786d5a333ba0544",
          "_tpl": "57ee59b42459771c7b045da5",
          "parentId": "3ad3de3b233994a744fe7ff2",
          "slotId": "mod_mount"
        },
        {
          "_id": "0560ef1dd70d5d6b4d30cfa6",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "824aedbb2786d5a333ba0544",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669062950100152820458d8f",
      "Name": "Lucky Dragger",
      "Root": "5b4ab2fba5f30ce4bd11f5c2",
      "Items": [
        {
          "_id": "5b4ab2fba5f30ce4bd11f5c2",
          "_tpl": "5c07c60e0db834002330051f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1e2fae7c99090fd55a8b6380",
          "_tpl": "5c0e2ff6d174af02a1659d4a",
          "parentId": "5b4ab2fba5f30ce4bd11f5c2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "009ee29fe136cbb7bf00970f",
          "_tpl": "55d4887d4bdc2d962f8b4570",
          "parentId": "5b4ab2fba5f30ce4bd11f5c2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "4d51070a8470a2ec10ff1653",
          "_tpl": "5c0e2f26d174af02a9625114",
          "parentId": "5b4ab2fba5f30ce4bd11f5c2",
          "slotId": "mod_reciever"
        },
        {
          "_id": "257e771f1796ec468540edcc",
          "_tpl": "5c0faeddd174af02a962601f",
          "parentId": "5b4ab2fba5f30ce4bd11f5c2",
          "slotId": "mod_stock"
        },
        {
          "_id": "78dc7ade7fde2034663b0ae3",
          "_tpl": "5c0faf68d174af02a96260b8",
          "parentId": "5b4ab2fba5f30ce4bd11f5c2",
          "slotId": "mod_charge"
        },
        {
          "_id": "54fee8f7278327c400b2ca4c",
          "_tpl": "57aca93d2459771f2c7e26db",
          "parentId": "4d51070a8470a2ec10ff1653",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0,
                0
              ],
              "ScopesSelectedModes": [
                0,
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d489e76005bfcf83a57a51d4",
          "_tpl": "5c0e2f94d174af029f650d56",
          "parentId": "4d51070a8470a2ec10ff1653",
          "slotId": "mod_barrel"
        },
        {
          "_id": "0a081d7d8b58e5869d73ccc9",
          "_tpl": "5c0e2f5cd174af02a012cfc9",
          "parentId": "4d51070a8470a2ec10ff1653",
          "slotId": "mod_handguard"
        },
        {
          "_id": "cf535ed24717c1186a1a3255",
          "_tpl": "5c0fafb6d174af02a96260ba",
          "parentId": "d489e76005bfcf83a57a51d4",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "a2aa47d27ed4d6a26d805767",
          "_tpl": "5ae30e795acfc408fb139a0b",
          "parentId": "d489e76005bfcf83a57a51d4",
          "slotId": "mod_gas_block"
        }
      ]
    },
    {
      "Id": "669062ad01001528209976a7",
      "Name": "The Telescope",
      "Root": "cccc12aeef154b397ac44354",
      "Items": [
        {
          "_id": "cccc12aeef154b397ac44354",
          "_tpl": "5a0ec13bfcdbcb00165aa685",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "7e3aa43cee19d60c62b4361f",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "39edd6f1bd9c8922a2057e3a",
          "_tpl": "59e61eb386f77440d64f5daf",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5d6f32562c304dfb445f748c",
          "_tpl": "59e62cc886f77440d40b52a1",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b33d078c0789563c6e7572ed",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d27c2f065e68618079b0e8ef",
          "_tpl": "59e89d0986f77427600d226e",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_stock"
        },
        {
          "_id": "910ba4756f48b23286207229",
          "_tpl": "59e5f5a486f7746c530b3ce2",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c7308747ee381c60d8e6bf33",
          "_tpl": "5a7c74b3e899ef0014332c29",
          "parentId": "cccc12aeef154b397ac44354",
          "slotId": "mod_mount_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c44446ab24287ed6e7c63010",
          "_tpl": "5d2c829448f0353a5c7d6674",
          "parentId": "7e3aa43cee19d60c62b4361f",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "669062c40100152820206486",
      "Name": "RUN THEM POCKETS BOI",
      "Root": "b13c19ecdbbc5d85fb5d000f",
      "Items": [
        {
          "_id": "b13c19ecdbbc5d85fb5d000f",
          "_tpl": "5a7ae0c351dfba0017554310",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "48cdd1b27a2c103ce9737f55",
          "_tpl": "5a6b5f868dc32e000a311389",
          "parentId": "b13c19ecdbbc5d85fb5d000f",
          "slotId": "mod_barrel"
        },
        {
          "_id": "870d875636fef452f74162e6",
          "_tpl": "5a6f5e048dc32e00094b97da",
          "parentId": "b13c19ecdbbc5d85fb5d000f",
          "slotId": "mod_reciever"
        },
        {
          "_id": "f1302e1355109922e5fc034b",
          "_tpl": "5a7ad2e851dfba0016153692",
          "parentId": "b13c19ecdbbc5d85fb5d000f",
          "slotId": "mod_magazine"
        },
        {
          "_id": "60ef15ca5071413f32ec3cfe",
          "_tpl": "5a7d912f159bd400165484f3",
          "parentId": "870d875636fef452f74162e6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8ada760c4c9c8d025e4914a0",
          "_tpl": "5a7d90eb159bd400165484f1",
          "parentId": "870d875636fef452f74162e6",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669062da01001528208f48c5",
      "Name": "Unlimited Power",
      "Root": "7a9880827813f64ed4572cc2",
      "Items": [
        {
          "_id": "7a9880827813f64ed4572cc2",
          "_tpl": "56e0598dd2720bb5668b45a6",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "6b105d3aa73385148c527e3b",
          "_tpl": "55d485be4bdc2d962f8b456f",
          "parentId": "7a9880827813f64ed4572cc2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "71f556a50512a89963c94e5d",
          "_tpl": "56e05b06d2720bb2668b4586",
          "parentId": "7a9880827813f64ed4572cc2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "661a1bba6356529cbc54754d",
          "_tpl": "56e05a6ed2720bd0748b4567",
          "parentId": "7a9880827813f64ed4572cc2",
          "slotId": "mod_pistolgrip"
        }
      ]
    },
    {
      "Id": "669062f10100152820c8eee3",
      "Name": "Ancient Technology",
      "Root": "87713df8cbeb800e687b0975",
      "Items": [
        {
          "_id": "87713df8cbeb800e687b0975",
          "_tpl": "59ff346386f77477562ff5e2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "6bc8cf9b775897d31c5e61a5",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "0f3fe044f169eedbb89320c2",
          "_tpl": "5a0d63621526d8dba31fe3bf",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c653a1b09f791d06541a0a05",
          "_tpl": "5a0071d486f77404e23a12b2",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_pistol_grip_akms"
        },
        {
          "_id": "cd22dd1081e02bc953731e15",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "497d363c035fe2d8f29baec9",
          "_tpl": "59ff3b6a86f77477562ff5ed",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_stock_akms"
        },
        {
          "_id": "ca0d562fa5ad8c1786b6bfa4",
          "_tpl": "5a0060fc86f7745793204432",
          "parentId": "87713df8cbeb800e687b0975",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e13c17a41a60858982cbc40f",
          "_tpl": "59d64f2f86f77417193ef8b3",
          "parentId": "6bc8cf9b775897d31c5e61a5",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6690630d01001528208e22d9",
      "Name": "She Bites",
      "Root": "6449a95ee8fdedbb1489bdce",
      "Items": [
        {
          "_id": "6449a95ee8fdedbb1489bdce",
          "_tpl": "5abcbc27d8ce8700182eceeb",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "254b42bc277700a80a79601b",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "076d18558b21a78987a57957",
          "_tpl": "59d64fc686f774171b243fe2",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "b336cdaf281821eeb2d506fd",
          "_tpl": "59e62cc886f77440d40b52a1",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_pistol_grip_akms"
        },
        {
          "_id": "deac7bf0c3f8af3fda5054ed",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "34d378efea76b05120adc860",
          "_tpl": "5abcd472d8ce8700166032ae",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_stock_akms"
        },
        {
          "_id": "2f24a101191cf7c540c04c48",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "6449a95ee8fdedbb1489bdce",
          "slotId": "mod_magazine"
        },
        {
          "_id": "404081b1312701753754fe6a",
          "_tpl": "59e898ee86f77427614bd225",
          "parentId": "254b42bc277700a80a79601b",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6690632401001528202725db",
      "Name": "Madness",
      "Root": "ddf3079bdb9e403db14ac386",
      "Items": [
        {
          "_id": "ddf3079bdb9e403db14ac386",
          "_tpl": "59e6687d86f77411d949b251",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e41508a6175bd6663ce04afd",
          "_tpl": "59e649f986f77411d949b246",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "7a0c299fe22ddf2e233d37fa",
          "_tpl": "59e8a00d86f7742ad93b569c",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "fd31a39f59895ebd918ff0f4",
          "_tpl": "59e6318286f77444dd62c4cc",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b0d6a1d1f9a27f625f678ca8",
          "_tpl": "59e8977386f77415a553c453",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "66fcd3ee66e230c0d45da930",
          "_tpl": "59e89d0986f77427600d226e",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_stock"
        },
        {
          "_id": "e205616faf1d85df113e4116",
          "_tpl": "5b1fd4e35acfc40018633c39",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_magazine"
        },
        {
          "_id": "aea194a9c31e9b4301205071",
          "_tpl": "5a0f096dfcdbcb0176308b15",
          "parentId": "ddf3079bdb9e403db14ac386",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "523fc506bb61358c1d626fb6",
          "_tpl": "5d2c829448f0353a5c7d6674",
          "parentId": "e41508a6175bd6663ce04afd",
          "slotId": "mod_handguard"
        },
        {
          "_id": "46996b3479997ef043ca46bd",
          "_tpl": "5a0ed824fcdbcb0176308b0d",
          "parentId": "b0d6a1d1f9a27f625f678ca8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669063470100152820daedd3",
      "Name": "Prideful Killer",
      "Root": "a534dbc2b211a83dbf7b0ec6",
      "Items": [
        {
          "_id": "a534dbc2b211a83dbf7b0ec6",
          "_tpl": "59e6152586f77473dc057aa1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f81839a522f9745c1ab4d0a6",
          "_tpl": "59e649f986f77411d949b246",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "29a299f0fecdb5ea6beeda5e",
          "_tpl": "5a9fbacda2750c00141e080f",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d0247efa5af273563f7e8f17",
          "_tpl": "59e6318286f77444dd62c4cc",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "994da21e396d2f4cec695230",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "02208f446fa8635a692bb89e",
          "_tpl": "59e6227d86f77440d64f5dc2",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_stock"
        },
        {
          "_id": "9e1d8e43e73ac3820625880c",
          "_tpl": "5b1fd4e35acfc40018633c39",
          "parentId": "a534dbc2b211a83dbf7b0ec6",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6c56af794aeeff3d2d953c11",
          "_tpl": "59e6284f86f77440d569536f",
          "parentId": "f81839a522f9745c1ab4d0a6",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "6690635c0100152820a35b0c",
      "Name": "Give Em The Business",
      "Root": "c9f14c01785d052987e8f62a",
      "Items": [
        {
          "_id": "c9f14c01785d052987e8f62a",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d41077d27d792090becf6604",
          "_tpl": "55d4b9964bdc2d1d4e8b456e",
          "parentId": "c9f14c01785d052987e8f62a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b577b2116b88d0cfcb8ef13f",
          "_tpl": "55d4887d4bdc2d962f8b4570",
          "parentId": "c9f14c01785d052987e8f62a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a7768e46afc328a571d7f24e",
          "_tpl": "55d355e64bdc2d962f8b4569",
          "parentId": "c9f14c01785d052987e8f62a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "2509f030af7983a2f868edee",
          "_tpl": "5649be884bdc2d79388b4577",
          "parentId": "c9f14c01785d052987e8f62a",
          "slotId": "mod_stock"
        },
        {
          "_id": "f2c38b8e9bfe410c606e6591",
          "_tpl": "55d44fd14bdc2d962f8b456e",
          "parentId": "c9f14c01785d052987e8f62a",
          "slotId": "mod_charge"
        },
        {
          "_id": "a2502032af18c1d648ef381b",
          "_tpl": "55d3632e4bdc2d972f8b4569",
          "parentId": "a7768e46afc328a571d7f24e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "9e0768fb413c93da1fd53ee0",
          "_tpl": "5ae30db85acfc408fb139a05",
          "parentId": "a7768e46afc328a571d7f24e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "b9460643ca7098af5739b237",
          "_tpl": "5ae30bad5acfc400185c2dc4",
          "parentId": "a7768e46afc328a571d7f24e",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3171b32712970860e09a40a6",
          "_tpl": "55d4ae6c4bdc2d8b2f8b456e",
          "parentId": "2509f030af7983a2f868edee",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "b71d2f86e65ab2d97646d67b",
          "_tpl": "544a38634bdc2d58388b4568",
          "parentId": "a2502032af18c1d648ef381b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "5659626bdc469c09cb2fc158",
          "_tpl": "5ae30e795acfc408fb139a0b",
          "parentId": "a2502032af18c1d648ef381b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "6810c6758cbd9ad84624639a",
          "_tpl": "637f57a68d137b27f70c4968",
          "parentId": "9e0768fb413c93da1fd53ee0",
          "slotId": "mod_handguard"
        },
        {
          "_id": "09692fbe425b5ad9541f10d4",
          "_tpl": "5c05293e0db83400232fff80",
          "parentId": "b9460643ca7098af5739b237",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "6690638c01001528208f0e62",
      "Name": "Scav Lover",
      "Root": "aec2943a16dffa92186217c8",
      "Items": [
        {
          "_id": "aec2943a16dffa92186217c8",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b8d6c184054a342977305a85",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9b288bd3c44f54319bfdb537",
          "_tpl": "59d64fc686f774171b243fe2",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "e6755b6c0a894e320cbd6cb2",
          "_tpl": "59e62cc886f77440d40b52a1",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "40318896cf7997a5ff05e766",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9cf067cc9413458881ae4998",
          "_tpl": "59d6514b86f774171a068a08",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_stock"
        },
        {
          "_id": "cdcf81a5dcc05dcf5adf831b",
          "_tpl": "5a01c29586f77474660c694c",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_magazine"
        },
        {
          "_id": "30a9d9eaf6e87cd901fe9f05",
          "_tpl": "5a0f096dfcdbcb0176308b15",
          "parentId": "aec2943a16dffa92186217c8",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "6715e5a035b4fa3657ce12a3",
          "_tpl": "59d64f2f86f77417193ef8b3",
          "parentId": "b8d6c184054a342977305a85",
          "slotId": "mod_handguard"
        }
      ]
    },
    {
      "Id": "669063a30100152820a8174c",
      "Name": "It Was Just A Puppy",
      "Root": "000036a27801de8763d5e3f1",
      "Items": [
        {
          "_id": "000036a27801de8763d5e3f1",
          "_tpl": "571a12c42459771f627b58a0",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "3c78d9b8dd56468b2e2ade37",
          "_tpl": "571a279b24597720b4066566",
          "parentId": "000036a27801de8763d5e3f1",
          "slotId": "mod_barrel"
        },
        {
          "_id": "3a9bb3def2ef2f92424eed46",
          "_tpl": "5b3cadf35acfc400194776a0",
          "parentId": "000036a27801de8763d5e3f1",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "ed83a0788678e293df5db0ed",
          "_tpl": "571a29dc2459771fb2755a6a",
          "parentId": "000036a27801de8763d5e3f1",
          "slotId": "mod_magazine"
        },
        {
          "_id": "1efd23f20039f3fb9723d650",
          "_tpl": "571a28e524597720b4066567",
          "parentId": "3c78d9b8dd56468b2e2ade37",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "669063ce01001528206583f4",
      "Name": "Everythings Got A Price",
      "Root": "20b27b9644fc8f073218925d",
      "Items": [
        {
          "_id": "20b27b9644fc8f073218925d",
          "_tpl": "56d59856d2720bd8418b456a",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "014bf5fcadc1fadeb10fdf36",
          "_tpl": "587de4282459771bca0ec90b",
          "parentId": "20b27b9644fc8f073218925d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "a6fc26dc5e14c179c9bbae7f",
          "_tpl": "57c9a89124597704ee6faec1",
          "parentId": "20b27b9644fc8f073218925d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "2a837758b5aabac3ef64ca42",
          "_tpl": "56d5a407d2720bb3418b456b",
          "parentId": "20b27b9644fc8f073218925d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "afd6413a0d6d31a71fde6a83",
          "_tpl": "5c920e902e221644f31c3c99",
          "parentId": "20b27b9644fc8f073218925d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "372c9952cde923cfcda70fa8",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "20b27b9644fc8f073218925d",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "dced612b2d0adfe8979d3784",
          "_tpl": "5c6beec32e221601da3578f2",
          "parentId": "014bf5fcadc1fadeb10fdf36",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "177ece3bb7e7734f366ba037",
          "_tpl": "56d5a77ed2720b90418b4568",
          "parentId": "2a837758b5aabac3ef64ca42",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8141da700892a2646df9767e",
          "_tpl": "56d5a661d2720bd8418b456b",
          "parentId": "2a837758b5aabac3ef64ca42",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "669064f7010015282047f472",
      "Name": "Cheap Headshots",
      "Root": "4c48599e56fe58bf1599f280",
      "Items": [
        {
          "_id": "4c48599e56fe58bf1599f280",
          "_tpl": "5de652c31b7e3716273428be",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "b39afbb7ce5084e24277f17f",
          "_tpl": "5de653abf76fdc1ce94a5a2a",
          "parentId": "4c48599e56fe58bf1599f280",
          "slotId": "mod_magazine"
        },
        {
          "_id": "58a7ee8268ed3f6270b5e191",
          "_tpl": "5de655be4a9f347bc92edb88",
          "parentId": "4c48599e56fe58bf1599f280",
          "slotId": "mod_stock"
        },
        {
          "_id": "a7821a1fec658aa03158718f",
          "_tpl": "5de65547883dde217541644b",
          "parentId": "4c48599e56fe58bf1599f280",
          "slotId": "mod_barrel"
        },
        {
          "_id": "8d18cf4b90e680059f6a8f7f",
          "_tpl": "5de6558e9f98ac2bc65950fc",
          "parentId": "4c48599e56fe58bf1599f280",
          "slotId": "mod_mount"
        },
        {
          "_id": "b1eb8bc60d91cbf1aed848ce",
          "_tpl": "5de6556a205ddc616a6bc4f7",
          "parentId": "a7821a1fec658aa03158718f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "078ea19f716dbc77b9262801",
          "_tpl": "5dff77c759400025ea5150cf",
          "parentId": "8d18cf4b90e680059f6a8f7f",
          "slotId": "mod_scope"
        },
        {
          "_id": "5b9944104461bd8dc0781c32",
          "_tpl": "5dff772da3651922b360bf91",
          "parentId": "078ea19f716dbc77b9262801",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    }	
  ];

  public weaponBaseBuilds = [
    {
      Id: "666040240100111a389e2500",
      Name: "val",
      Root: "a8467bf7892cc102d3c728c6",
      Items: [
        {
          _id: "a8467bf7892cc102d3c728c6",
          _tpl: "57c44b372459772d2b39b8ce",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "5ce2520b2863e7807f753f21",
          _tpl: "57c44dd02459772d2e0ae249",
          parentId: "a8467bf7892cc102d3c728c6",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "4b8db5daaecca836c37e76d0",
          _tpl: "57c44f4f2459772d2c627113",
          parentId: "a8467bf7892cc102d3c728c6",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7ef00dfc606874c0f76cb8d3",
          _tpl: "57838f9f2459774a150289a0",
          parentId: "a8467bf7892cc102d3c728c6",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d3f449fb49770fbef0f2eb51",
          _tpl: "57c44fa82459772d2d75e415",
          parentId: "a8467bf7892cc102d3c728c6",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b4c9937021b677e0bfb6f37c",
          _tpl: "57c450252459772d28133253",
          parentId: "a8467bf7892cc102d3c728c6",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7a7338ad6061fa25963309ce",
          _tpl: "57c44e7b2459772d28133248",
          parentId: "5ce2520b2863e7807f753f21",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666040290100111a388dc2c4",
      Name: "sks",
      Root: "16707de86097d409afb8d761",
      Items: [
        {
          _id: "16707de86097d409afb8d761",
          _tpl: "587e02ff24597743df3deaeb",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "297ddc64f61074ae16ef11ea",
          _tpl: "587e0531245977466077a0f7",
          parentId: "16707de86097d409afb8d761",
          slotId: "mod_stock",
        },
        {
          _id: "4e4c86efa606fe1e422c1199",
          _tpl: "634eff66517ccc8a960fc735",
          parentId: "16707de86097d409afb8d761",
          slotId: "mod_barrel",
        },
        {
          _id: "da950059a5917f3b5ddbc6c0",
          _tpl: "587df3a12459772c28142567",
          parentId: "16707de86097d409afb8d761",
          slotId: "mod_magazine",
        },
        {
          _id: "699818b77c721f3c46194db8",
          _tpl: "634f06262e5def262d0b30ca",
          parentId: "16707de86097d409afb8d761",
          slotId: "mod_reciever",
        },
        {
          _id: "c6a6dc7e9526008a4a2f57c9",
          _tpl: "634f05a21f9f536910079b56",
          parentId: "4e4c86efa606fe1e422c1199",
          slotId: "mod_mount_000",
        },
        {
          _id: "118f792305736f6db7e82c0d",
          _tpl: "634f036a517ccc8a960fc746",
          parentId: "c6a6dc7e9526008a4a2f57c9",
          slotId: "mod_gas_block",
        },
        {
          _id: "16c968a9afc88458539fd31f",
          _tpl: "574db213245977459a2f3f5d",
          parentId: "c6a6dc7e9526008a4a2f57c9",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "aaef8829b16283d3c042ac37",
          _tpl: "634f03d40384a3ba4f06f874",
          parentId: "118f792305736f6db7e82c0d",
          slotId: "mod_mount_000",
        },
      ],
    },
    {
      Id: "6660402f0100111a38b0e975",
      Name: "vepr",
      Root: "34b5b377826b549d6c78444a",
      Items: [
        {
          _id: "34b5b377826b549d6c78444a",
          _tpl: "5c501a4d2e221602b412b540",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "46ba9e63d8e406149004d823",
          _tpl: "5c5039be2e221602b177c9ff",
          parentId: "34b5b377826b549d6c78444a",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "947a90678606a0e5b481fa29",
          _tpl: "5c503d0a2e221602b542b7ef",
          parentId: "34b5b377826b549d6c78444a",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "dd237cb25c2b317c4f5b14f6",
          _tpl: "5c503b1c2e221602b21d6e9d",
          parentId: "34b5b377826b549d6c78444a",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "df5f30188107252a24e31169",
          _tpl: "5c503af12e221602b177ca02",
          parentId: "34b5b377826b549d6c78444a",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "185bb6e226edc1a08e6d79ee",
          _tpl: "5c503ac82e221602b21d6e9a",
          parentId: "34b5b377826b549d6c78444a",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040350100111a38c624db",
      Name: "tt33",
      Root: "292e4e3e405978619d762b5d",
      Items: [
        {
          _id: "292e4e3e405978619d762b5d",
          _tpl: "571a12c42459771f627b58a0",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "2f40818535663bf67517dec3",
          _tpl: "571a26d524597720680fbe8a",
          parentId: "292e4e3e405978619d762b5d",
          slotId: "mod_barrel",
        },
        {
          _id: "b5908f17c13777ecc6781519",
          _tpl: "571a282c2459771fb2755a69",
          parentId: "292e4e3e405978619d762b5d",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "6cfb0e9cd3b63687558d180a",
          _tpl: "571a29dc2459771fb2755a6a",
          parentId: "292e4e3e405978619d762b5d",
          slotId: "mod_magazine",
        },
      ],
    },
    {
      Id: "666040410100111a384bd66f",
      Name: "pb pistol",
      Root: "eeb9b71e43fe5ed8eb8ffd2e",
      Items: [
        {
          _id: "eeb9b71e43fe5ed8eb8ffd2e",
          _tpl: "56e0598dd2720bb5668b45a6",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "298f13959bc239109b066eef",
          _tpl: "5448c12b4bdc2d02308b456f",
          parentId: "eeb9b71e43fe5ed8eb8ffd2e",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "99094eaa2a9ce076821e2d10",
          _tpl: "56e05b06d2720bb2668b4586",
          parentId: "eeb9b71e43fe5ed8eb8ffd2e",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5e4057c6bbf2a74b63b5ed8a",
          _tpl: "56e05a6ed2720bd0748b4567",
          parentId: "eeb9b71e43fe5ed8eb8ffd2e",
          slotId: "mod_pistolgrip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040500100111a38de5f9e",
      Name: "svt",
      Root: "c021abc02914d04cfa94a1a2",
      Items: [
        {
          _id: "c021abc02914d04cfa94a1a2",
          _tpl: "643ea5b23db6f9f57107d9fd",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "090feb21ee0f2e9f928aeb75",
          _tpl: "6410745d5dd49d77bd078485",
          parentId: "c021abc02914d04cfa94a1a2",
          slotId: "mod_stock",
        },
        {
          _id: "9d172bac0c910a011900e4cd",
          _tpl: "6410758c857473525b08bb77",
          parentId: "c021abc02914d04cfa94a1a2",
          slotId: "mod_barrel",
        },
        {
          _id: "61c8d215c4c0e99b11df47f0",
          _tpl: "6422e1ea3c0f06190302161a",
          parentId: "c021abc02914d04cfa94a1a2",
          slotId: "mod_magazine",
        },
        {
          _id: "fd145811f8c12e3855fe310f",
          _tpl: "64119cdbdcf48d656f0aa272",
          parentId: "c021abc02914d04cfa94a1a2",
          slotId: "mod_reciever",
        },
        {
          _id: "1754049f9e8199c8a04c0d30",
          _tpl: "64119d1f2c6d6f921a0929f8",
          parentId: "9d172bac0c910a011900e4cd",
          slotId: "mod_muzzle",
        },
        {
          _id: "dfdf656e6a84bdbf0db96dad",
          _tpl: "64119d90dcf48d656f0aa275",
          parentId: "9d172bac0c910a011900e4cd",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f569d3cf413087246ea23fe2",
          _tpl: "64119d672c6d6f921a0929fb",
          parentId: "1754049f9e8199c8a04c0d30",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666040550100111a38c4c664",
      Name: "9a91",
      Root: "d715374f4403d633ac8176be",
      Items: [
        {
          _id: "d715374f4403d633ac8176be",
          _tpl: "644674a13d52156624001fbc",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "ea0e50bf7ee1ba75493a55d3",
          _tpl: "6450ec2e7da7133e5a09ca96",
          parentId: "d715374f4403d633ac8176be",
          slotId: "mod_magazine",
        },
        {
          _id: "eb4d0ee9041381dc61e04c6b",
          _tpl: "6450f21a3d52156624001fcf",
          parentId: "d715374f4403d633ac8176be",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "a359a892b759ae1d7928ba7c",
          _tpl: "6451167ad4928d46d30be3fd",
          parentId: "d715374f4403d633ac8176be",
          slotId: "mod_stock_000",
        },
        {
          _id: "1392b5f710e8ca6678afc986",
          _tpl: "645122f6d4928d46d30be3ff",
          parentId: "d715374f4403d633ac8176be",
          slotId: "mod_barrel",
        },
        {
          _id: "fa25fe449d349c5ba71bccc8",
          _tpl: "64527a263d52156624001fd7",
          parentId: "1392b5f710e8ca6678afc986",
          slotId: "mod_muzzle",
        },
        {
          _id: "5e7d5f62ad515ec81d952155",
          _tpl: "644675573d52156624001fc9",
          parentId: "1392b5f710e8ca6678afc986",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "6660405c0100111a3858c24e",
      Name: "m4a1",
      Root: "f837000044aae3246cff1f37",
      Items: [
        {
          _id: "f837000044aae3246cff1f37",
          _tpl: "5447a9cd4bdc2dbd208b4567",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "2e19c6ce7fc3ef6dffabbe60",
          _tpl: "55d4b9964bdc2d1d4e8b456e",
          parentId: "f837000044aae3246cff1f37",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "c08fe1fec397b5ffee7ac4ad",
          _tpl: "55d4887d4bdc2d962f8b4570",
          parentId: "f837000044aae3246cff1f37",
          slotId: "mod_magazine",
        },
        {
          _id: "c3155e7d28b9385ea2684685",
          _tpl: "55d355e64bdc2d962f8b4569",
          parentId: "f837000044aae3246cff1f37",
          slotId: "mod_reciever",
        },
        {
          _id: "f6eb695f46fe0aab0456195f",
          _tpl: "5649be884bdc2d79388b4577",
          parentId: "f837000044aae3246cff1f37",
          slotId: "mod_stock",
        },
        {
          _id: "8b133d6cca7b6c4c6e59e1e6",
          _tpl: "55d44fd14bdc2d962f8b456e",
          parentId: "f837000044aae3246cff1f37",
          slotId: "mod_charge",
        },
        {
          _id: "7d07fdb26fa6daab877cb554",
          _tpl: "55d3632e4bdc2d972f8b4569",
          parentId: "c3155e7d28b9385ea2684685",
          slotId: "mod_barrel",
        },
        {
          _id: "f5e4885c62bba00efb8984ca",
          _tpl: "5ae30db85acfc408fb139a05",
          parentId: "c3155e7d28b9385ea2684685",
          slotId: "mod_handguard",
        },
        {
          _id: "84bf74b0349a0d224e265063",
          _tpl: "5ae30bad5acfc400185c2dc4",
          parentId: "c3155e7d28b9385ea2684685",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "647022ac00bf4d73993149d7",
          _tpl: "55d4ae6c4bdc2d8b2f8b456e",
          parentId: "f6eb695f46fe0aab0456195f",
          slotId: "mod_stock_000",
        },
        {
          _id: "d7fb0f69828fe2ceb103de8e",
          _tpl: "544a38634bdc2d58388b4568",
          parentId: "7d07fdb26fa6daab877cb554",
          slotId: "mod_muzzle",
        },
        {
          _id: "e225f98adc8399eabadfa203",
          _tpl: "5ae30e795acfc408fb139a0b",
          parentId: "7d07fdb26fa6daab877cb554",
          slotId: "mod_gas_block",
        },
        {
          _id: "799d63b9f3b68e1c7798b90d",
          _tpl: "637f57a68d137b27f70c4968",
          parentId: "f5e4885c62bba00efb8984ca",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040660100111a38dda574",
      Name: "aks74u",
      Root: "47b289083cd3054e6614d747",
      Items: [
        {
          _id: "47b289083cd3054e6614d747",
          _tpl: "57dc2fa62459775949412633",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "16c4d9ec6336a8e3cd0cc442",
          _tpl: "57e3dba62459770f0c32322b",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "591ea07795f40515b191a210",
          _tpl: "57dc347d245977596754e7a1",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_stock",
        },
        {
          _id: "99cfe5bf47199faa060a5e0e",
          _tpl: "564ca99c4bdc2d16268b4589",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_magazine",
        },
        {
          _id: "dac68dd4db68718c3b6f0d2e",
          _tpl: "57dc324a24597759501edc20",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_muzzle",
        },
        {
          _id: "d4abebc67f7df1a8231d1cb9",
          _tpl: "57dc334d245977597164366f",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_reciever",
        },
        {
          _id: "87976758cfb216e9fabdaee8",
          _tpl: "59d36a0086f7747e673f3946",
          parentId: "47b289083cd3054e6614d747",
          slotId: "mod_gas_block",
        },
        {
          _id: "37b689f369f8c5a0d1249187",
          _tpl: "57dc32dc245977596d4ef3d3",
          parentId: "87976758cfb216e9fabdaee8",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "6660406e0100111a380a971d",
      Name: "aks74un",
      Root: "b659166ef5222973e74c7118",
      Items: [
        {
          _id: "b659166ef5222973e74c7118",
          _tpl: "583990e32459771419544dd2",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "c85513d3557e8052dcb611b2",
          _tpl: "5649ad3f4bdc2df8348b4585",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "04f40ebabf9a53efaebdeb33",
          _tpl: "57dc347d245977596754e7a1",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_stock",
        },
        {
          _id: "301d3efa453e58a6c3597970",
          _tpl: "564ca99c4bdc2d16268b4589",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_magazine",
        },
        {
          _id: "7c4befdf69f8f2d8a111d4a9",
          _tpl: "57dc324a24597759501edc20",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_muzzle",
        },
        {
          _id: "cac3b1978f9947f2f9156e92",
          _tpl: "57dc334d245977597164366f",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_reciever",
        },
        {
          _id: "4519724bb329a19aa9cc9463",
          _tpl: "59d36a0086f7747e673f3946",
          parentId: "b659166ef5222973e74c7118",
          slotId: "mod_gas_block",
        },
        {
          _id: "76f278cbce5ec656d9a621de",
          _tpl: "57dc32dc245977596d4ef3d3",
          parentId: "4519724bb329a19aa9cc9463",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040760100111a38993151",
      Name: "aks74ub",
      Root: "cc2c8265a09085d30211f692",
      Items: [
        {
          _id: "cc2c8265a09085d30211f692",
          _tpl: "5839a40f24597726f856b511",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 95,
              Durability: 95,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "3a1faf0072d57323eb623d90",
          _tpl: "5649ad3f4bdc2df8348b4585",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1be844f7e01b8be364497858",
          _tpl: "57dc347d245977596754e7a1",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7b45ca540e887710317a9314",
          _tpl: "564ca99c4bdc2d16268b4589",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "af5a2e004af4a7f774cbd7c1",
          _tpl: "57ffb0e42459777d047111c5",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "06e0742fa1504d8df1c6047f",
          _tpl: "5839a7742459773cf9693481",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0881d2f097bfe27f0fda6cc8",
          _tpl: "59d36a0086f7747e673f3946",
          parentId: "cc2c8265a09085d30211f692",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "52ef839dcdf4c8abbd3997fb",
          _tpl: "57dc32dc245977596d4ef3d3",
          parentId: "0881d2f097bfe27f0fda6cc8",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040880100111a38f4513b",
      Name: "grach",
      Root: "230c8bf3f9fb61d59b9a0c95",
      Items: [
        {
          _id: "230c8bf3f9fb61d59b9a0c95",
          _tpl: "576a581d2459771e7b1bc4f1",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a8ad56531a1ae2e2852144f3",
          _tpl: "576a5ed62459771e9c2096cb",
          parentId: "230c8bf3f9fb61d59b9a0c95",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9b9d1e5d7947697addd5232d",
          _tpl: "576a63cd2459771e796e0e11",
          parentId: "230c8bf3f9fb61d59b9a0c95",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040910100111a3838854f",
      Name: "vpo",
      Root: "6db93d07d301550b23ae4464",
      Items: [
        {
          _id: "6db93d07d301550b23ae4464",
          _tpl: "59e6152586f77473dc057aa1",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "f0df4878def459c8eec63218",
          _tpl: "59e649f986f77411d949b246",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_gas_block",
        },
        {
          _id: "a69811b3f3886bf6031ea398",
          _tpl: "59e61eb386f77440d64f5daf",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_muzzle",
        },
        {
          _id: "4e690be789083da99c46fa0e",
          _tpl: "59e6318286f77444dd62c4cc",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "3797ac22858b7d91bd3998f9",
          _tpl: "59e6449086f7746c9f75e822",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_reciever",
        },
        {
          _id: "fb2dae473a4d9bab007c57e4",
          _tpl: "59d650cf86f7741b846413a4",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "c58dad84080e9bf0534733c8",
          _tpl: "59e6227d86f77440d64f5dc2",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_stock",
        },
        {
          _id: "0fdae9ea149c662a7e0a67b1",
          _tpl: "5b1fd4e35acfc40018633c39",
          parentId: "6db93d07d301550b23ae4464",
          slotId: "mod_magazine",
        },
        {
          _id: "0598b4d49e436324d223b54a",
          _tpl: "59e6284f86f77440d569536f",
          parentId: "f0df4878def459c8eec63218",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040960100111a387f3480",
      Name: "vpo209",
      Root: "5b3d3ddac387b377994acf02",
      Items: [
        {
          _id: "5b3d3ddac387b377994acf02",
          _tpl: "59e6687d86f77411d949b251",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "8b3042beafa27729b9671314",
          _tpl: "59e649f986f77411d949b246",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_gas_block",
        },
        {
          _id: "b0fcff594d36c65125fa3aea",
          _tpl: "59e8a00d86f7742ad93b569c",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_muzzle",
        },
        {
          _id: "862a2285e9368ccb757fd7f4",
          _tpl: "59e6318286f77444dd62c4cc",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "6fbd6be64ec4c913c65d5c97",
          _tpl: "59e6449086f7746c9f75e822",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_reciever",
        },
        {
          _id: "e3818eb8d608fe29a15aaa97",
          _tpl: "59e8977386f77415a553c453",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f909f6c053f5a0be2e1d96ba",
          _tpl: "59e89d0986f77427600d226e",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_stock",
        },
        {
          _id: "aa472d6ef74ddbf3ad1a344c",
          _tpl: "5b1fd4e35acfc40018633c39",
          parentId: "5b3d3ddac387b377994acf02",
          slotId: "mod_magazine",
        },
        {
          _id: "d20f5bd3ff9efffe6d60d50c",
          _tpl: "59e898ee86f77427614bd225",
          parentId: "8b3042beafa27729b9671314",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040a00100111a387f0e80",
      Name: "aks74n",
      Root: "0854ff5fbc406f140c7f75e3",
      Items: [
        {
          _id: "0854ff5fbc406f140c7f75e3",
          _tpl: "5ab8e9fcd8ce870019439434",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "6901f7e0e291e11aec0d9a9d",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_gas_block",
        },
        {
          _id: "311b385dd69780383c3d4859",
          _tpl: "5649aa744bdc2ded0b8b457e",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_muzzle",
        },
        {
          _id: "213791b5660eb510b4e78c0e",
          _tpl: "57e3dba62459770f0c32322b",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "e3c8b3e79da68b080cb0696f",
          _tpl: "5649af094bdc2df8348b4586",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_reciever",
        },
        {
          _id: "7ddb0e1b60868c133a570a79",
          _tpl: "5649b0544bdc2d1b2b8b458a",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "220db72147b471eba78e7ee2",
          _tpl: "5ab626e4d8ce87272e4c6e43",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_stock",
        },
        {
          _id: "aecc78bfa7cb4eee1f3bd57b",
          _tpl: "564ca99c4bdc2d16268b4589",
          parentId: "0854ff5fbc406f140c7f75e3",
          slotId: "mod_magazine",
        },
        {
          _id: "8cbfc0eb905782adfc28a26d",
          _tpl: "5648b0744bdc2d363b8b4578",
          parentId: "6901f7e0e291e11aec0d9a9d",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040a70100111a3859c276",
      Name: "akmsn",
      Root: "349ed69fa8ea012b1709f9aa",
      Items: [
        {
          _id: "349ed69fa8ea012b1709f9aa",
          _tpl: "5abcbc27d8ce8700182eceeb",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "c9aa4df19f59fa386649a7cc",
          _tpl: "59d64ec286f774171d1e0a42",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "bb6c3ff3ebc951004ace280c",
          _tpl: "59e61eb386f77440d64f5daf",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "876f040481e65ba3fe1f0e37",
          _tpl: "5a0071d486f77404e23a12b2",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_pistol_grip_akms",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "32fa732cb68cd22e9c072a83",
          _tpl: "59d6507c86f7741b846413a2",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0df970e0dd2101758e286f60",
          _tpl: "59d650cf86f7741b846413a4",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "849dbdd8dfef4292471b02e9",
          _tpl: "5abcd472d8ce8700166032ae",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_stock_akms",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "27220d988aa451c888eab5e6",
          _tpl: "5a0060fc86f7745793204432",
          parentId: "349ed69fa8ea012b1709f9aa",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "22e6f6f0e3d9fcbb13e90671",
          _tpl: "59d64f2f86f77417193ef8b3",
          parentId: "c9aa4df19f59fa386649a7cc",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040b70100111a389fb88f",
      Name: "ak74m",
      Root: "3e553fa9318e3905a60fcb60",
      Items: [
        {
          _id: "3e553fa9318e3905a60fcb60",
          _tpl: "5ac4cd105acfc40016339859",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "358f3e67538d7912830b4697",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_gas_block",
        },
        {
          _id: "b381ac4d560c9b5d9bb55b08",
          _tpl: "5ac7655e5acfc40016339a19",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_muzzle",
        },
        {
          _id: "52dd3f6cfd9ff5c46f0081de",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "59a2b68ba27ef20c4d4e789b",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_reciever",
        },
        {
          _id: "365b51a660af24f323ac3fc5",
          _tpl: "5ac72e475acfc400180ae6fe",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "89a56d164f368d288bbc79a4",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_stock",
        },
        {
          _id: "cf71faf8d1d4d31579a8875a",
          _tpl: "55d480c04bdc2d1d4e8b456a",
          parentId: "3e553fa9318e3905a60fcb60",
          slotId: "mod_magazine",
        },
        {
          _id: "8acfcdbd23796c205ee51f75",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "358f3e67538d7912830b4697",
          slotId: "mod_handguard",
        },
      ],
    },
    {
      Id: "666040be0100111a38fae358",
      Name: "ak101",
      Root: "cc778fbb3e1e4704603ec0af",
      Items: [
        {
          _id: "cc778fbb3e1e4704603ec0af",
          _tpl: "5ac66cb05acfc40198510a10",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "eb06ea5a5e33960f5a73e4ac",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5f636906a694db03b3478e0f",
          _tpl: "5ac72e615acfc43f67248aa0",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d8c2c2bd805abed80a558f53",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5dfe8440148db77c6b7f4e21",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "093f1daffc7a1a2094706c8e",
          _tpl: "5ac72e475acfc400180ae6fe",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "3849a834c14fdce9411fbc38",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2f739eaae0bc8faeee59f795",
          _tpl: "5ac66c5d5acfc4001718d314",
          parentId: "cc778fbb3e1e4704603ec0af",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1156457bd61b451095b5ab99",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "eb06ea5a5e33960f5a73e4ac",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040c50100111a385f5be7",
      Name: "ak102",
      Root: "33eb5ea1c42bd47e15e99bc3",
      Items: [
        {
          _id: "33eb5ea1c42bd47e15e99bc3",
          _tpl: "5ac66d015acfc400180ae6e4",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a09e817636db17a47b5953a5",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1c8299dda410b2a20562c19e",
          _tpl: "5ac72e725acfc400180ae701",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "55eacdd41bdf1192ea4045d5",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d74c0ad503c0f585f10ca60e",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "911a8aec35ba8cb672a657ef",
          _tpl: "5ac733a45acfc400192630e2",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "011cdb61601d6773c5718d9c",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1cb0d76ae4195f52df8a9076",
          _tpl: "5ac66c5d5acfc4001718d314",
          parentId: "33eb5ea1c42bd47e15e99bc3",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "255a275e99fca8c4efe654bf",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "a09e817636db17a47b5953a5",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040cd0100111a38642226",
      Name: "ak103",
      Root: "17e2c62fe0ac4e959c539757",
      Items: [
        {
          _id: "17e2c62fe0ac4e959c539757",
          _tpl: "5ac66d2e5acfc43b321d4b53",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "b100d20fc86b4b5aaacd32d4",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "eb63bc2751eca2fb43c11ad1",
          _tpl: "5ac72e7d5acfc40016339a02",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f8b1a6d628e5b07c9d2d1198",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "102b2a49c838c2feba4eefca",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f30dca44435fbe804326ce52",
          _tpl: "5ac72e475acfc400180ae6fe",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "b8774d34caa2ff709464efc1",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "72778ff5fa4cc1a5371c07b1",
          _tpl: "5ac66bea5acfc43b321d4aec",
          parentId: "17e2c62fe0ac4e959c539757",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8c72eab9532f0e4cf164ade0",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "b100d20fc86b4b5aaacd32d4",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040d40100111a385dcbe7",
      Name: "ak104",
      Root: "7c87b157585b257d543ea3d3",
      Items: [
        {
          _id: "7c87b157585b257d543ea3d3",
          _tpl: "5ac66d725acfc43b321d4b60",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "3dc492d738d98732bbc42d2f",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "13900f12e36a3d1e2ad2f935",
          _tpl: "5ac72e895acfc43b321d4bd5",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "699c95b2f317d46ed3196891",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5ab8eee40b7c627dddedb329",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c9dd98c8e633e2cd8fe07ce4",
          _tpl: "5ac733a45acfc400192630e2",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "6dc0263a34cc1786cd454437",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "af855852db9bc1e942148d2a",
          _tpl: "5ac66bea5acfc43b321d4aec",
          parentId: "7c87b157585b257d543ea3d3",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a7e702fa8f2f66a4ddd6ccaa",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "3dc492d738d98732bbc42d2f",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040da0100111a38c1a092",
      Name: "ak105",
      Root: "c0b7e5b2388e36cf8f4415af",
      Items: [
        {
          _id: "c0b7e5b2388e36cf8f4415af",
          _tpl: "5ac66d9b5acfc4001633997a",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "ec10952a371d180bc8a469f0",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e349526e1aeeaadd14acfcc2",
          _tpl: "5ac72e945acfc43f3b691116",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a5a9b1422c381e565956ebcd",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "770b8a90a55c97231af0b38b",
          _tpl: "5ac50da15acfc4001718d287",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6ed8defa18acbdf86f4b8825",
          _tpl: "5ac733a45acfc400192630e2",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f546c98ecb43bdb5b0c8fbd2",
          _tpl: "5ac50c185acfc400163398d4",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "60aeaf3110a385a5a80cca8a",
          _tpl: "55d480c04bdc2d1d4e8b456a",
          parentId: "c0b7e5b2388e36cf8f4415af",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5e8a458c60ea83b893b98eab",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "ec10952a371d180bc8a469f0",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040e00100111a38d5bf5f",
      Name: "pmt",
      Root: "4b48ec05a6f8b0e66cfcac53",
      Items: [
        {
          _id: "4b48ec05a6f8b0e66cfcac53",
          _tpl: "579204f224597773d619e051",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "9baf8480a19776b64ccf8660",
          _tpl: "5448c12b4bdc2d02308b456f",
          parentId: "4b48ec05a6f8b0e66cfcac53",
          slotId: "mod_magazine",
        },
        {
          _id: "92a8b0ae61d3ff2ed539cc6f",
          _tpl: "6374a822e629013b9c0645c8",
          parentId: "4b48ec05a6f8b0e66cfcac53",
          slotId: "mod_reciever",
        },
        {
          _id: "9ed4adf74d57802e797ca6dd",
          _tpl: "6374a7e7417239a7bf00f042",
          parentId: "4b48ec05a6f8b0e66cfcac53",
          slotId: "mod_pistolgrip",
        },
        {
          _id: "fc4e81b7bb3404010b735532",
          _tpl: "63c6adcfb4ba094317063742",
          parentId: "92a8b0ae61d3ff2ed539cc6f",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666040ea0100111a3815754f",
      Name: "glock17",
      Root: "207917a255e07786de63ec07",
      Items: [
        {
          _id: "207917a255e07786de63ec07",
          _tpl: "5a7ae0c351dfba0017554310",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "02187a4350d9e14a611c4246",
          _tpl: "5a6b5f868dc32e000a311389",
          parentId: "207917a255e07786de63ec07",
          slotId: "mod_barrel",
        },
        {
          _id: "3939c3262f87111d1b30fc0d",
          _tpl: "5a6f5e048dc32e00094b97da",
          parentId: "207917a255e07786de63ec07",
          slotId: "mod_reciever",
        },
        {
          _id: "90d801f50cb7423eb7205969",
          _tpl: "5a718b548dc32e000d46d262",
          parentId: "207917a255e07786de63ec07",
          slotId: "mod_magazine",
        },
        {
          _id: "8a4151c9a8100d7e8ff00918",
          _tpl: "5a6f5d528dc32e00094b97d9",
          parentId: "3939c3262f87111d1b30fc0d",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "d77b91287ae0f2ac9fa8fa68",
          _tpl: "5a6f58f68dc32e000a311390",
          parentId: "3939c3262f87111d1b30fc0d",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666040f10100111a3840a6a4",
      Name: "sa58",
      Root: "4639e38ca398a725dd4ab9cf",
      Items: [
        {
          _id: "4639e38ca398a725dd4ab9cf",
          _tpl: "5b0bbe4e5acfc40dc528a72d",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "dd67613eebc316ced458d8cd",
          _tpl: "5b099b965acfc400186331e6",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "bbc909f18ef221cc08957b9d",
          _tpl: "5b099ac65acfc400186331e1",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_magazine",
        },
        {
          _id: "1c6f55e729ea4023f849303e",
          _tpl: "5b099a9d5acfc47a8607efe7",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_handguard",
        },
        {
          _id: "13be1d4e3581e633784d59b1",
          _tpl: "5b099a765acfc47a8607efe3",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_barrel",
        },
        {
          _id: "d3ae21dea685524793c1a059",
          _tpl: "5b0bc22d5acfc47a8607f085",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "e2706b46b9b747eb68504e29",
          _tpl: "5b099bb25acfc400186331e8",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_reciever",
        },
        {
          _id: "f0f0c84c56431a0587dc8397",
          _tpl: "5b099bf25acfc4001637e683",
          parentId: "4639e38ca398a725dd4ab9cf",
          slotId: "mod_stock",
        },
        {
          _id: "201c128e66290809da115428",
          _tpl: "5b099b7d5acfc400186331e4",
          parentId: "13be1d4e3581e633784d59b1",
          slotId: "mod_muzzle",
        },
        {
          _id: "9475c4bf58125b8a09c13aec",
          _tpl: "5649be884bdc2d79388b4577",
          parentId: "f0f0c84c56431a0587dc8397",
          slotId: "mod_stock_000",
        },
        {
          _id: "382c396c4993cc6eb9c582f2",
          _tpl: "56eabf3bd2720b75698b4569",
          parentId: "9475c4bf58125b8a09c13aec",
          slotId: "mod_stock_000",
        },
        {
          _id: "878bb2d6bd4760e96ce9eea7",
          _tpl: "58d2912286f7744e27117493",
          parentId: "382c396c4993cc6eb9c582f2",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666040f70100111a38956fc4",
      Name: "hk416",
      Root: "c147fd4f013d4f405ddc6b33",
      Items: [
        {
          _id: "c147fd4f013d4f405ddc6b33",
          _tpl: "5bb2475ed4351e00853264e3",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "0c54b04c3328947bb0e2b83b",
          _tpl: "5bb20e0ed4351e3bac1212dc",
          parentId: "c147fd4f013d4f405ddc6b33",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "83b725bc1e4ae5443f366630",
          _tpl: "5c05413a0db834001c390617",
          parentId: "c147fd4f013d4f405ddc6b33",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "730eee40dea17d2ea5070f22",
          _tpl: "5bb20d53d4351e4502010a69",
          parentId: "c147fd4f013d4f405ddc6b33",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6a1389d0153a36fce41ea01f",
          _tpl: "5bb20e58d4351e00320205d7",
          parentId: "c147fd4f013d4f405ddc6b33",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "98b657012fde7ced9f9256bd",
          _tpl: "5bb20dbcd4351e44f824c04e",
          parentId: "c147fd4f013d4f405ddc6b33",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b34a776ed36172113d7279c8",
          _tpl: "5bb20d9cd4351e00334c9d8a",
          parentId: "730eee40dea17d2ea5070f22",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "73556eb0bba38f81e9b9666f",
          _tpl: "5bb20de5d4351e0035629e59",
          parentId: "730eee40dea17d2ea5070f22",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b1b4768b3a7d36c533784800",
          _tpl: "5bb20e49d4351e3bac1212de",
          parentId: "730eee40dea17d2ea5070f22",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "e8bd501a93bea897c5aa3d71",
          _tpl: "5bb20e70d4351e0035629f8f",
          parentId: "6a1389d0153a36fce41ea01f",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cba4b674c3c677359a2e5d2f",
          _tpl: "544a38634bdc2d58388b4568",
          parentId: "b34a776ed36172113d7279c8",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "24a061fda8ec5fe367cf1b8c",
          _tpl: "5bb20dcad4351e3bac1212da",
          parentId: "b34a776ed36172113d7279c8",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666040fd0100111a387eaffc",
      Name: "ak74",
      Root: "6a09166099574db483fee9ef",
      Items: [
        {
          _id: "6a09166099574db483fee9ef",
          _tpl: "5bf3e03b0db834001d2c4a9c",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "76faf484c84c7f4132ea06ab",
          _tpl: "59c6633186f7740cf0493bb9",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "417073544a2f4af2beb6ed66",
          _tpl: "5649aa744bdc2ded0b8b457e",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9152b5f52a8abb890fe5cd73",
          _tpl: "57e3dba62459770f0c32322b",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "78903ec87fa84e13a67be8c2",
          _tpl: "5649af094bdc2df8348b4586",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "295b5751e4665d96ae25007d",
          _tpl: "5649b0544bdc2d1b2b8b458a",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "d345e244906f756a7d96fcd0",
          _tpl: "5649b1c04bdc2d16268b457c",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f38e7859e45b22b03fb5a904",
          _tpl: "564ca99c4bdc2d16268b4589",
          parentId: "6a09166099574db483fee9ef",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d6274d8d2d92c4693090de72",
          _tpl: "5648b0744bdc2d363b8b4578",
          parentId: "76faf484c84c7f4132ea06ab",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666041040100111a38249b19",
      Name: "adar",
      Root: "e0cd99c1bac871fcfb9f0152",
      Items: [
        {
          _id: "e0cd99c1bac871fcfb9f0152",
          _tpl: "5c07c60e0db834002330051f",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "e00558b4baed69090757abcc",
          _tpl: "5c0e2ff6d174af02a1659d4a",
          parentId: "e0cd99c1bac871fcfb9f0152",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "adb40d19b1e1a1548ffb3755",
          _tpl: "5aaa5e60e5b5b000140293d6",
          parentId: "e0cd99c1bac871fcfb9f0152",
          slotId: "mod_magazine",
        },
        {
          _id: "7c7ec457e61e7c6665f9f67c",
          _tpl: "5c0e2f26d174af02a9625114",
          parentId: "e0cd99c1bac871fcfb9f0152",
          slotId: "mod_reciever",
        },
        {
          _id: "48c4c4bfcee36682a16f7ee5",
          _tpl: "5c0faeddd174af02a962601f",
          parentId: "e0cd99c1bac871fcfb9f0152",
          slotId: "mod_stock",
        },
        {
          _id: "6744173080485234d7747706",
          _tpl: "5c0faf68d174af02a96260b8",
          parentId: "e0cd99c1bac871fcfb9f0152",
          slotId: "mod_charge",
        },
        {
          _id: "648012922a8697d59cbac5cd",
          _tpl: "5c0e2f94d174af029f650d56",
          parentId: "7c7ec457e61e7c6665f9f67c",
          slotId: "mod_barrel",
        },
        {
          _id: "6505f6cf309aeca1dba871bd",
          _tpl: "5c0e2f5cd174af02a012cfc9",
          parentId: "7c7ec457e61e7c6665f9f67c",
          slotId: "mod_handguard",
        },
        {
          _id: "4d798f56adef41938d88dc29",
          _tpl: "5c0fafb6d174af02a96260ba",
          parentId: "648012922a8697d59cbac5cd",
          slotId: "mod_muzzle",
        },
        {
          _id: "129e4918dca6fd463c6a9abb",
          _tpl: "5ae30e795acfc408fb139a0b",
          parentId: "648012922a8697d59cbac5cd",
          slotId: "mod_gas_block",
        },
      ],
    },
    {
      Id: "666041090100111a38936158",
      Name: "mdr",
      Root: "c277590f98d013c95084b4db",
      Items: [
        {
          _id: "c277590f98d013c95084b4db",
          _tpl: "5c488a752e221602b412af63",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "2444c69ea03f5fc39870b3cb",
          _tpl: "5c48a2c22e221602b313fb6c",
          parentId: "c277590f98d013c95084b4db",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b9e67c4bfb5ae13498c233b1",
          _tpl: "55802d5f4bdc2dac148b458e",
          parentId: "c277590f98d013c95084b4db",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d9fdc33000022832240fa12e",
          _tpl: "5c48a14f2e2216152006edd7",
          parentId: "c277590f98d013c95084b4db",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "bb03295aaa871a407a7ff605",
          _tpl: "5c48a2852e221602b21d5923",
          parentId: "c277590f98d013c95084b4db",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c66c49e828f6dbd803d13b51",
          _tpl: "5c48a2a42e221602b66d1e07",
          parentId: "bb03295aaa871a407a7ff605",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660410f0100111a3890001c",
      Name: "ash12",
      Root: "e34c9c9f992506933a79e33c",
      Items: [
        {
          _id: "e34c9c9f992506933a79e33c",
          _tpl: "5cadfbf7ae92152ac412eeef",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "3c6dddae0e7f627d3275b07a",
          _tpl: "5caf17c9ae92150b30006be1",
          parentId: "e34c9c9f992506933a79e33c",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "45ccf768e54aa0f6dae397f6",
          _tpl: "5caf1041ae92157c28402e3f",
          parentId: "e34c9c9f992506933a79e33c",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b93b52a770a42a6e842649cb",
          _tpl: "5caf16a2ae92152ac412efbc",
          parentId: "e34c9c9f992506933a79e33c",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "ff1c7a3b78ff11e1512e2116",
          _tpl: "5cdaa99dd7f00c002412d0b2",
          parentId: "e34c9c9f992506933a79e33c",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7643ea5f171f28d752bf486d",
          _tpl: "5caf1691ae92152ac412efb9",
          parentId: "e34c9c9f992506933a79e33c",
          slotId: "mod_scope",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "3d352cc22f3b68178f69485d",
          _tpl: "5cda9bcfd7f00c0c0b53e900",
          parentId: "ff1c7a3b78ff11e1512e2116",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666041320100111a387c2677",
      Name: "glock18",
      Root: "65f9e2f2ff72b4bf99b6c802",
      Items: [
        {
          _id: "65f9e2f2ff72b4bf99b6c802",
          _tpl: "5b1fa9b25acfc40018633c01",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "3dc1cad7bac1d7fcaf7d491a",
          _tpl: "5b1fa9ea5acfc40018633c0a",
          parentId: "65f9e2f2ff72b4bf99b6c802",
          slotId: "mod_barrel",
        },
        {
          _id: "66d34874ad15a5b71ed14164",
          _tpl: "5b1faa0f5acfc40dc528aeb5",
          parentId: "65f9e2f2ff72b4bf99b6c802",
          slotId: "mod_reciever",
        },
        {
          _id: "cf2ae2c31616df4445e8743c",
          _tpl: "5a718b548dc32e000d46d262",
          parentId: "65f9e2f2ff72b4bf99b6c802",
          slotId: "mod_magazine",
        },
        {
          _id: "6f834e5a5fdd170932e732d4",
          _tpl: "5a6f5d528dc32e00094b97d9",
          parentId: "66d34874ad15a5b71ed14164",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "cd469eaaec09327c47c0cbe2",
          _tpl: "5a6f58f68dc32e000a311390",
          parentId: "66d34874ad15a5b71ed14164",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666045ca0100111a38df803a",
      Name: "tx15",
      Root: "2614eb2857b3f24940394410",
      Items: [
        {
          _id: "2614eb2857b3f24940394410",
          _tpl: "5d43021ca4b9362eab4b5e25",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "6305252f82c557becd110741",
          _tpl: "55802f5d4bdc2dac148b458f",
          parentId: "2614eb2857b3f24940394410",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fe4027ccfefba62207549857",
          _tpl: "5aaa5dfee5b5b000140293d3",
          parentId: "2614eb2857b3f24940394410",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d321ea791965b7f957ae710d",
          _tpl: "5d4405aaa4b9361e6a4e6bd3",
          parentId: "2614eb2857b3f24940394410",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b026b5bff9ad251aeabb304d",
          _tpl: "5649be884bdc2d79388b4577",
          parentId: "2614eb2857b3f24940394410",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "daad6e5618045a219e5284ea",
          _tpl: "5d44334ba4b9362b346d1948",
          parentId: "2614eb2857b3f24940394410",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0127f7632a39b2d8722befdb",
          _tpl: "5d440b93a4b9364276578d4b",
          parentId: "d321ea791965b7f957ae710d",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0b4b22a96aa51d4b851d2e5b",
          _tpl: "5d4405f0a4b9361e6a4e6bd9",
          parentId: "d321ea791965b7f957ae710d",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b2ed8fcff3bb7224d785e41f",
          _tpl: "5d4406a8a4b9361e4f6eb8b7",
          parentId: "b026b5bff9ad251aeabb304d",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f4a2fc0f4a300a1af73b78ed",
          _tpl: "5d440625a4b9361eec4ae6c5",
          parentId: "0127f7632a39b2d8722befdb",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e3b048812901cf8fde3d1988",
          _tpl: "56eabcd4d2720b66698b4574",
          parentId: "0127f7632a39b2d8722befdb",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8da74c1575635c87c6e87c78",
          _tpl: "5b7be47f5acfc400170e2dd2",
          parentId: "0b4b22a96aa51d4b851d2e5b",
          slotId: "mod_mount_004",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "44bce6d992b879ebc695e611",
          _tpl: "5b7be4895acfc400170e2dd5",
          parentId: "0b4b22a96aa51d4b851d2e5b",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "609a47a80af0437e763aa2d2",
          _tpl: "5d44064fa4b9361e4f6eb8b5",
          parentId: "f4a2fc0f4a300a1af73b78ed",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666045d00100111a38c0ee3b",
      Name: "mdr762",
      Root: "56f5590122069b10e66391ba",
      Items: [
        {
          _id: "56f5590122069b10e66391ba",
          _tpl: "5dcbd56fdbd3d91b3e5468d5",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "4ff10809fd0fe820469cb63a",
          _tpl: "5dcbd6dddbd3d91b3e5468de",
          parentId: "56f5590122069b10e66391ba",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5716d7506c0293cc4b988673",
          _tpl: "5a3501acc4a282000d72293a",
          parentId: "56f5590122069b10e66391ba",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "986b6e933550b462568b61ab",
          _tpl: "5dcbd6b46ec07c0c4347a564",
          parentId: "56f5590122069b10e66391ba",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ee42a625a19ad82748289945",
          _tpl: "5dcbe9431e1f4616d354987e",
          parentId: "56f5590122069b10e66391ba",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d8db9d12140886b463316b76",
          _tpl: "5dcbe965e4ed22586443a79d",
          parentId: "ee42a625a19ad82748289945",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666045d80100111a38aa91ce",
      Name: "mutant",
      Root: "a2dbcc63393384c6ba2f7932",
      Items: [
        {
          _id: "a2dbcc63393384c6ba2f7932",
          _tpl: "606587252535c57a13424cfd",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "7ce7050cab2d1ab39e33ad64",
          _tpl: "55802f5d4bdc2dac148b458f",
          parentId: "a2dbcc63393384c6ba2f7932",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ab4e6bed2de7c0828ecce597",
          _tpl: "59d6272486f77466146386ff",
          parentId: "a2dbcc63393384c6ba2f7932",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "89bb79ba8ecb219417995674",
          _tpl: "606587a88900dc2d9a55b659",
          parentId: "a2dbcc63393384c6ba2f7932",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5a37cc56eb57408acc587f1a",
          _tpl: "606587e18900dc2d9a55b65f",
          parentId: "a2dbcc63393384c6ba2f7932",
          slotId: "mod_stock_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2318cbc2aedfff24182072b1",
          _tpl: "606587bd6d0bd7580617bacc",
          parentId: "a2dbcc63393384c6ba2f7932",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "25ace57dc7cba7d33e7ad41b",
          _tpl: "60658776f2cb2e02a42ace2b",
          parentId: "89bb79ba8ecb219417995674",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6d1e0f80373a2883de3d0e01",
          _tpl: "6065880c132d4d12c81fd8da",
          parentId: "89bb79ba8ecb219417995674",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f40474688191ff260a95f303",
          _tpl: "5bc09a18d4351e003562b68e",
          parentId: "89bb79ba8ecb219417995674",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "676f12be98eacfdec33f8bc1",
          _tpl: "606587d11246154cad35d635",
          parentId: "5a37cc56eb57408acc587f1a",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7c3de091c225643f67148eb9",
          _tpl: "6065c6e7132d4d12c81fd8e1",
          parentId: "25ace57dc7cba7d33e7ad41b",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e387ea2b2ab8ef6148016517",
          _tpl: "6065dc8a132d4d12c81fd8e3",
          parentId: "25ace57dc7cba7d33e7ad41b",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cda82ff9a951964c5d0c5257",
          _tpl: "5bc09a30d4351e00367fb7c8",
          parentId: "6d1e0f80373a2883de3d0e01",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666045df0100111a38ff87c4",
      Name: "mk17",
      Root: "e33ddff7b2bd89f3a7d88281",
      Items: [
        {
          _id: "e33ddff7b2bd89f3a7d88281",
          _tpl: "6183afd850224f204c1da514",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "0a514d64ba874d7392fa6133",
          _tpl: "55d4b9964bdc2d1d4e8b456e",
          parentId: "e33ddff7b2bd89f3a7d88281",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "0db0b8b1a6ed6d68a2970d1f",
          _tpl: "618168dc8004cc50514c34fc",
          parentId: "e33ddff7b2bd89f3a7d88281",
          slotId: "mod_magazine",
        },
        {
          _id: "d39ee329eb09ca28a8760d5a",
          _tpl: "6165adcdd3a39d50044c120f",
          parentId: "e33ddff7b2bd89f3a7d88281",
          slotId: "mod_reciever",
        },
        {
          _id: "50990f81df8b1a662ae7dc3f",
          _tpl: "61816734d8e3106d9806c1f3",
          parentId: "e33ddff7b2bd89f3a7d88281",
          slotId: "mod_stock",
        },
        {
          _id: "ba46ca7b9d8f65a67b88bec5",
          _tpl: "6181688c6c780c1e710c9b04",
          parentId: "e33ddff7b2bd89f3a7d88281",
          slotId: "mod_charge",
        },
        {
          _id: "b792e713e621a62f95a21b5e",
          _tpl: "6183b084a112697a4b3a6e6c",
          parentId: "d39ee329eb09ca28a8760d5a",
          slotId: "mod_barrel",
        },
        {
          _id: "6bb6efee8abe7a45d0f7408a",
          _tpl: "61817865d3a39d50044c13a4",
          parentId: "d39ee329eb09ca28a8760d5a",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "393fd907b369fc927a57f1d7",
          _tpl: "61816df1d3a39d50044c139e",
          parentId: "d39ee329eb09ca28a8760d5a",
          slotId: "mod_mount_000",
        },
        {
          _id: "8f33eba33549c8670535dde1",
          _tpl: "61816dfa6ef05c2ce828f1ad",
          parentId: "d39ee329eb09ca28a8760d5a",
          slotId: "mod_mount_001",
        },
        {
          _id: "176032b47bad58e93a5e7e54",
          _tpl: "618167528004cc50514c34f9",
          parentId: "50990f81df8b1a662ae7dc3f",
          slotId: "mod_stock_001",
        },
        {
          _id: "7136ad3227e79743571eb06b",
          _tpl: "618167441cb55961fa0fdc71",
          parentId: "50990f81df8b1a662ae7dc3f",
          slotId: "mod_stock_002",
        },
        {
          _id: "a3c9137cf0f11d1029ba36e1",
          _tpl: "618178aa1cb55961fa0fdc80",
          parentId: "b792e713e621a62f95a21b5e",
          slotId: "mod_muzzle",
        },
        {
          _id: "02409eecacd2f11a346236f1",
          _tpl: "61816fcad92c473c770215cc",
          parentId: "b792e713e621a62f95a21b5e",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "1f8402d4f20c3ab9f0b11515",
          _tpl: "618167616ef05c2ce828f1a8",
          parentId: "176032b47bad58e93a5e7e54",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666045e80100111a380c5f8b",
      Name: "mk16",
      Root: "ce89a901be66a4a5e259b358",
      Items: [
        {
          _id: "ce89a901be66a4a5e259b358",
          _tpl: "6184055050224f204c1da540",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "50604b0c47f4756f0561524c",
          _tpl: "55d4b9964bdc2d1d4e8b456e",
          parentId: "ce89a901be66a4a5e259b358",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b1dad1c9883d7c957b03b131",
          _tpl: "61840bedd92c473c77021635",
          parentId: "ce89a901be66a4a5e259b358",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "43fa553b6ea8e6dc97d139b0",
          _tpl: "618405198004cc50514c3594",
          parentId: "ce89a901be66a4a5e259b358",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7f1a664098b1c915850b7c16",
          _tpl: "61816734d8e3106d9806c1f3",
          parentId: "ce89a901be66a4a5e259b358",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b6bcba19e10018773fec151c",
          _tpl: "6181688c6c780c1e710c9b04",
          parentId: "ce89a901be66a4a5e259b358",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "608fb45b9a995d5754e81e80",
          _tpl: "6183fd9e8004cc50514c358f",
          parentId: "43fa553b6ea8e6dc97d139b0",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d40d327adb8320f8f98cca9f",
          _tpl: "61817865d3a39d50044c13a4",
          parentId: "43fa553b6ea8e6dc97d139b0",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "a53fdd9b62a42f19f3a7fe9a",
          _tpl: "61816df1d3a39d50044c139e",
          parentId: "43fa553b6ea8e6dc97d139b0",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a2ae250be99e8ac4ff914da8",
          _tpl: "61816dfa6ef05c2ce828f1ad",
          parentId: "43fa553b6ea8e6dc97d139b0",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0ba5f55b04797b1d5efe636c",
          _tpl: "618167528004cc50514c34f9",
          parentId: "7f1a664098b1c915850b7c16",
          slotId: "mod_stock_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "57b0d729456cc2d028dab833",
          _tpl: "618167441cb55961fa0fdc71",
          parentId: "7f1a664098b1c915850b7c16",
          slotId: "mod_stock_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5b990d7c2191278d0248e140",
          _tpl: "618407a850224f204c1da549",
          parentId: "608fb45b9a995d5754e81e80",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6158ebf05a6216903c797a48",
          _tpl: "61816fcad92c473c770215cc",
          parentId: "608fb45b9a995d5754e81e80",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "da3816169b9c409724499ef1",
          _tpl: "618167616ef05c2ce828f1a8",
          parentId: "0ba5f55b04797b1d5efe636c",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666045ed0100111a38e1a431",
      Name: "rd704",
      Root: "b92f5323e627194cbd0806e1",
      Items: [
        {
          _id: "b92f5323e627194cbd0806e1",
          _tpl: "628a60ae6b1d481ff772e9c8",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "39cdb934885ec9fd07b3167c",
          _tpl: "628a83c29179c324ed269508",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7a4ccef34c2b6be27ab35267",
          _tpl: "628a66b41d5e41750e314f34",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2b1d4926f7d41e2ce84eeee2",
          _tpl: "628a664bccaab13006640e47",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ca2267301a41d0eac0089dd0",
          _tpl: "628a665a86cbd9750d2ff5e5",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6a6e29237a9ef1e672668c2e",
          _tpl: "628a7b23b0f75035732dd565",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "ca3161a5848b198640a38f8c",
          _tpl: "628a6678ccaab13006640e49",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a822105dd2ad4cf58e1ad55a",
          _tpl: "59d625f086f774661516605d",
          parentId: "b92f5323e627194cbd0806e1",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "69c058d854eaa14c89f968a2",
          _tpl: "5649be884bdc2d79388b4577",
          parentId: "ca3161a5848b198640a38f8c",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6f684623d32eed5484bb2738",
          _tpl: "628a85ee6b1d481ff772e9d5",
          parentId: "69c058d854eaa14c89f968a2",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666045f40100111a38e46cfe",
      Name: "mk556",
      Root: "dae8e7495224e070b318a86f",
      Items: [
        {
          _id: "dae8e7495224e070b318a86f",
          _tpl: "618428466ef05c2ce828f218",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "ff7098826e7cc5b275db8d0e",
          _tpl: "571659bb2459771fb2755a12",
          parentId: "dae8e7495224e070b318a86f",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0a9e7716e5288194d65c3906",
          _tpl: "61840d85568c120fdd2962a5",
          parentId: "dae8e7495224e070b318a86f",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "21e285557f60baa9a986037a",
          _tpl: "618426d96c780c1e710c9b9f",
          parentId: "dae8e7495224e070b318a86f",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5339d95f3e6ced7624169c52",
          _tpl: "61825d06d92c473c770215de",
          parentId: "dae8e7495224e070b318a86f",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9937c8f530c9a5f1d1a34522",
          _tpl: "6181688c6c780c1e710c9b04",
          parentId: "dae8e7495224e070b318a86f",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "885e8de1d2f8a87a738b39bf",
          _tpl: "6183fd911cb55961fa0fdce9",
          parentId: "21e285557f60baa9a986037a",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9037b1e678429ad1a42f462e",
          _tpl: "61817865d3a39d50044c13a4",
          parentId: "21e285557f60baa9a986037a",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f41e627bd3de3de9fe93a806",
          _tpl: "61816df1d3a39d50044c139e",
          parentId: "21e285557f60baa9a986037a",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "566480b0bdf304254f2f6ad4",
          _tpl: "61816dfa6ef05c2ce828f1ad",
          parentId: "21e285557f60baa9a986037a",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "bf75d9f4e63f26756725fc91",
          _tpl: "61825d136ef05c2ce828f1cc",
          parentId: "5339d95f3e6ced7624169c52",
          slotId: "mod_stock_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d8b698310b68dff208031995",
          _tpl: "61825d24d3a39d50044c13af",
          parentId: "5339d95f3e6ced7624169c52",
          slotId: "mod_stock_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7cf86e40a233a90b9f06290e",
          _tpl: "618407a850224f204c1da549",
          parentId: "885e8de1d2f8a87a738b39bf",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a408fc3ea67a4c564626f5c8",
          _tpl: "61816fcad92c473c770215cc",
          parentId: "885e8de1d2f8a87a738b39bf",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "e1dd16391d92ec6f2643ad7b",
          _tpl: "618167616ef05c2ce828f1a8",
          parentId: "bf75d9f4e63f26756725fc91",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666045fe0100111a38101347",
      Name: "g36",
      Root: "16cc588daf2c34b114520964",
      Items: [
        {
          _id: "16cc588daf2c34b114520964",
          _tpl: "623063e994fc3f7b302a9696",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "29be92be441e7b50f294c827",
          _tpl: "62307b7b10d2321fa8741921",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_magazine",
        },
        {
          _id: "40fe17270b9490ed90406c38",
          _tpl: "622f14e899892a7f9e08f6c5",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_stock",
        },
        {
          _id: "1b610e68a8a1801c2d389bd2",
          _tpl: "622b3858034a3e17ad0b81f5",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_barrel",
        },
        {
          _id: "dcd9683236d242fe569955f1",
          _tpl: "62386b7153757417e93a4e9f",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_handguard",
        },
        {
          _id: "d484cbf997988ca1cbc077c4",
          _tpl: "622f02437762f55aaa68ac85",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_mount",
        },
        {
          _id: "b08b174f4669b0ab9e81aef4",
          _tpl: "622b3d5cf9cfc87d675d2de9",
          parentId: "16cc588daf2c34b114520964",
          slotId: "mod_scope",
        },
        {
          _id: "e54249a48f6f0ae860522d0d",
          _tpl: "622f128cec80d870d349b4e8",
          parentId: "1b610e68a8a1801c2d389bd2",
          slotId: "mod_muzzle",
        },
        {
          _id: "ab77cecfac8654cb26dba34a",
          _tpl: "622b327b267a1b13a44abea3",
          parentId: "1b610e68a8a1801c2d389bd2",
          slotId: "mod_gas_block",
        },
        {
          _id: "bfa856e9facddf6a28693ee3",
          _tpl: "622f16a1a5958f63c67f1737",
          parentId: "dcd9683236d242fe569955f1",
          slotId: "mod_tactical",
        },
      ],
    },
    {
      Id: "666046030100111a3887a9b6",
      Name: "ak545",
      Root: "47108ce69d5ee25f181af2bb",
      Items: [
        {
          _id: "47108ce69d5ee25f181af2bb",
          _tpl: "628b5638ad252a16da6dd245",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "82072c106384c204ecf9e8bd",
          _tpl: "628b8d83717774443b15e248",
          parentId: "47108ce69d5ee25f181af2bb",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "26e7e088cafc43c4c465353c",
          _tpl: "5ac7655e5acfc40016339a19",
          parentId: "47108ce69d5ee25f181af2bb",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fc877a71d4a09b4d9722d3a4",
          _tpl: "5cf50850d7f00c056e24104c",
          parentId: "47108ce69d5ee25f181af2bb",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3cb8caf9c6332475d5d3397c",
          _tpl: "628b9a40717774443b15e9f2",
          parentId: "47108ce69d5ee25f181af2bb",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1dc3d6a21b4f8b36094575f1",
          _tpl: "55d480c04bdc2d1d4e8b456a",
          parentId: "47108ce69d5ee25f181af2bb",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f1b77c5565e6178d5a80d92b",
          _tpl: "628b916469015a4e1711ed8d",
          parentId: "82072c106384c204ecf9e8bd",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "19ddff7c2cde46e8d22fd4af",
          _tpl: "55d4ae6c4bdc2d8b2f8b456e",
          parentId: "3cb8caf9c6332475d5d3397c",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f7db4ac75203e11fe5d11f31",
          _tpl: "628b9be6cff66b70c002b14c",
          parentId: "f1b77c5565e6178d5a80d92b",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5fed30b768f6a576314b9a4e",
          _tpl: "628b9471078f94059a4b9bfb",
          parentId: "f7db4ac75203e11fe5d11f31",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660460a0100111a3876d8f7",
      Name: "aks545",
      Root: "94064b6c0300464bd28b6757",
      Items: [
        {
          _id: "94064b6c0300464bd28b6757",
          _tpl: "628b9c37a733087d0d7fe84b",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "e8ee3c02fea9c669b4875950",
          _tpl: "628b8d83717774443b15e248",
          parentId: "94064b6c0300464bd28b6757",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3032c9e25c313796abb7745c",
          _tpl: "5943eeeb86f77412d6384f6b",
          parentId: "94064b6c0300464bd28b6757",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "b9fc46d8fe92e737217ee8e4",
          _tpl: "5cf50850d7f00c056e24104c",
          parentId: "94064b6c0300464bd28b6757",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "edac3921bb010806f5261c46",
          _tpl: "628b9a40717774443b15e9f2",
          parentId: "94064b6c0300464bd28b6757",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "544a229d436543b9cb3b5654",
          _tpl: "55d480c04bdc2d1d4e8b456a",
          parentId: "94064b6c0300464bd28b6757",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f7ee8c74fd964ec958734916",
          _tpl: "628b916469015a4e1711ed8d",
          parentId: "e8ee3c02fea9c669b4875950",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "aa4e4ca92a3069f65af2d86e",
          _tpl: "55d4ae6c4bdc2d8b2f8b456e",
          parentId: "edac3921bb010806f5261c46",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "598c5f2fe473182c9451c810",
          _tpl: "628b9be6cff66b70c002b14c",
          parentId: "f7ee8c74fd964ec958734916",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3b6c226a3cbd14bde5fefb6f",
          _tpl: "628b9471078f94059a4b9bfb",
          parentId: "598c5f2fe473182c9451c810",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666046100100111a38705fbd",
      Name: "auga1",
      Root: "8b434aa59886a0ae3721abd3",
      Items: [
        {
          _id: "8b434aa59886a0ae3721abd3",
          _tpl: "62e7c4fba689e8c9c50dfc38",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "43faec0b99a336be362e1e47",
          _tpl: "62e7c98b550c8218d602cbb4",
          parentId: "8b434aa59886a0ae3721abd3",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fe463392c97437c3097e2e06",
          _tpl: "62e7c880f68e7a0676050c7c",
          parentId: "8b434aa59886a0ae3721abd3",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0b35f1e014eaabccc0f41b4e",
          _tpl: "62ea7c793043d74a0306e19f",
          parentId: "8b434aa59886a0ae3721abd3",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0, 0],
              ScopesSelectedModes: [0, 0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f79d9233fa9918607652a8ac",
          _tpl: "62e7c7f3c34ea971710c32fc",
          parentId: "0b35f1e014eaabccc0f41b4e",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8cf9bb878bdeeaeb94a971e6",
          _tpl: "630f2872911356c17d06abc5",
          parentId: "f79d9233fa9918607652a8ac",
          slotId: "mod_muzzle_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "76843f92312ac60b4b09ac9e",
          _tpl: "634e61b0767cb15c4601a877",
          parentId: "f79d9233fa9918607652a8ac",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660461e0100111a38fd084c",
      Name: "auga3",
      Root: "8eaed10b9f212236f24b6b72",
      Items: [
        {
          _id: "8eaed10b9f212236f24b6b72",
          _tpl: "63171672192e68c5460cebc5",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "89692d9a6df2d8149f2dd8ec",
          _tpl: "62e7c98b550c8218d602cbb4",
          parentId: "8eaed10b9f212236f24b6b72",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "91b0193861830a04e97a386d",
          _tpl: "62ebbc53e3c1e1ec7c02c44f",
          parentId: "8eaed10b9f212236f24b6b72",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ef57e52f3e696dc0e385aa7e",
          _tpl: "62e7c72df68e7a0676050c77",
          parentId: "8eaed10b9f212236f24b6b72",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2239f6745d0d21d0a5421c35",
          _tpl: "62e7c7f3c34ea971710c32fc",
          parentId: "ef57e52f3e696dc0e385aa7e",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "44e782e8d8ffd4e0765ac088",
          _tpl: "62ebd290c427473eff0baafb",
          parentId: "ef57e52f3e696dc0e385aa7e",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "ba62950173bbf058658d5789",
          _tpl: "630f28f0cadb1fe05e06f004",
          parentId: "2239f6745d0d21d0a5421c35",
          slotId: "mod_muzzle_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c99b6e92c3270bc50a05f1cb",
          _tpl: "634e61b0767cb15c4601a877",
          parentId: "2239f6745d0d21d0a5421c35",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046280100111a382f8646",
      Name: "vss",
      Root: "adc4d6844f27226791531547",
      Items: [
        {
          _id: "adc4d6844f27226791531547",
          _tpl: "57838ad32459774a17445cd2",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "167f22813dc518644865f917",
          _tpl: "57838f0b2459774a256959b2",
          parentId: "adc4d6844f27226791531547",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "4ff4bcff1a26f3c66518ca22",
          _tpl: "57838c962459774a1651ec63",
          parentId: "adc4d6844f27226791531547",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fa312f78f02c96bcd84f3ddc",
          _tpl: "578395402459774a256959b5",
          parentId: "adc4d6844f27226791531547",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d60d85ab8d11d738b1d78ee1",
          _tpl: "578395e82459774a0e553c7b",
          parentId: "adc4d6844f27226791531547",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "aed13fa11b2f4b7b782e8c02",
          _tpl: "57838e1b2459774a256959b1",
          parentId: "4ff4bcff1a26f3c66518ca22",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660462e0100111a38642f88",
      Name: "m1a",
      Root: "a0d7a4dea9a1fe2100af8d00",
      Items: [
        {
          _id: "a0d7a4dea9a1fe2100af8d00",
          _tpl: "5aafa857e5b5b00018480968",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "1ec7a9a21eb7aa30ec73ef88",
          _tpl: "64b9e2037fdfb81df81e3c25",
          parentId: "a0d7a4dea9a1fe2100af8d00",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "87b861710df4b60179715a2f",
          _tpl: "5aaf8e43e5b5b00015693246",
          parentId: "a0d7a4dea9a1fe2100af8d00",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6ba3b2188c45f594824c6ee8",
          _tpl: "5aaf9d53e5b5b00015042a52",
          parentId: "a0d7a4dea9a1fe2100af8d00",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5bd70d780ef0f451d5f091a2",
          _tpl: "5abcbb20d8ce87001773e258",
          parentId: "a0d7a4dea9a1fe2100af8d00",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "21e6d442a7651d91d233562e",
          _tpl: "5ab24ef9e5b5b00fe93c9209",
          parentId: "87b861710df4b60179715a2f",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3494c1ecdb92841bd96a9de7",
          _tpl: "5aafa1c2e5b5b00015042a56",
          parentId: "6ba3b2188c45f594824c6ee8",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fc8be2cfd70c021d2871a6d1",
          _tpl: "5aafa49ae5b5b00015042a58",
          parentId: "3494c1ecdb92841bd96a9de7",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666046380100111a38ce9abf",
      Name: "svds",
      Root: "0fd58b4775c2328df45221fd",
      Items: [
        {
          _id: "0fd58b4775c2328df45221fd",
          _tpl: "5c46fbd72e2216398b5a8c9c",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "4e0215df9d3d73d63105d16a",
          _tpl: "5c471be12e221602b66cd9ac",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "939ea7a9164aca56c0dc800a",
          _tpl: "5c471c442e221602b542a6f8",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7cb95905de65a7b04a5f16e7",
          _tpl: "5c471b5d2e221602b21d4e14",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "26abbc47889a3318d86c9279",
          _tpl: "5c471cb32e221602b177afaa",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6da4d0b634d7e3bbc0c1e2e3",
          _tpl: "5c471c2d2e22164bef5d077f",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "87ae31c3b5d14bc8412f78ce",
          _tpl: "5c471bd12e221602b4129c3a",
          parentId: "0fd58b4775c2328df45221fd",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a79c476adb91b4cf407e67de",
          _tpl: "5c471bfc2e221602b21d4e17",
          parentId: "26abbc47889a3318d86c9279",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a047817088a1bcdfac8acd20",
          _tpl: "5c471c842e221615214259b5",
          parentId: "26abbc47889a3318d86c9279",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "93b0fa23eec128e922d3c7ac",
          _tpl: "5c471c6c2e221602b66cd9ae",
          parentId: "6da4d0b634d7e3bbc0c1e2e3",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "67b8ba51a0a484f1bc4ae60b",
          _tpl: "5c471b7e2e2216152006e46c",
          parentId: "6da4d0b634d7e3bbc0c1e2e3",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "d7b27f18b9ca2f3b8557e4c4",
          _tpl: "5c471ba12e221602b3137d76",
          parentId: "a79c476adb91b4cf407e67de",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660463f0100111a38e570c0",
      Name: "rdb",
      Root: "b2b82ab18e4a199ea9605b9b",
      Items: [
        {
          _id: "b2b82ab18e4a199ea9605b9b",
          _tpl: "5f2a9575926fd9352339381f",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "1e42ec946da417c48c37d9a8",
          _tpl: "5b099ac65acfc400186331e1",
          parentId: "b2b82ab18e4a199ea9605b9b",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "49add1d960cdc5b3343e2df2",
          _tpl: "5f2aa46b878ef416f538b567",
          parentId: "b2b82ab18e4a199ea9605b9b",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "48333160e2b0403634878863",
          _tpl: "5f2aa47a200e2c0ee46efa71",
          parentId: "b2b82ab18e4a199ea9605b9b",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3ca922667832ec705b73ba3d",
          _tpl: "5f2aa49f9b44de6b1b4e68d4",
          parentId: "b2b82ab18e4a199ea9605b9b",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "850f141292a042ec97a4a0cc",
          _tpl: "5f2aa4464b50c14bcf07acdb",
          parentId: "49add1d960cdc5b3343e2df2",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cae59c73f3abc57998000416",
          _tpl: "5f2aa493cd375f14e15eea72",
          parentId: "48333160e2b0403634878863",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046440100111a3820566a",
      Name: "sr25",
      Root: "e915b6d2ea8dafd50078d4b9",
      Items: [
        {
          _id: "e915b6d2ea8dafd50078d4b9",
          _tpl: "5df8ce05b11454561e39243b",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "ea48e65b1d5916e258d0fe67",
          _tpl: "55d4b9964bdc2d1d4e8b456e",
          parentId: "e915b6d2ea8dafd50078d4b9",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "194949289f29e9d86e965415",
          _tpl: "5df8f541c41b2312ea3335e3",
          parentId: "e915b6d2ea8dafd50078d4b9",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0364aec1d19fb63238848d8c",
          _tpl: "5649be884bdc2d79388b4577",
          parentId: "e915b6d2ea8dafd50078d4b9",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2ebb18b6391c7fd24bf7d848",
          _tpl: "5df8e4080b92095fd441e594",
          parentId: "e915b6d2ea8dafd50078d4b9",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8e64566d91b0c49ef75d7a33",
          _tpl: "5df8e053bb49d91fb446d6a6",
          parentId: "e915b6d2ea8dafd50078d4b9",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "aa000ee6133ad4b7c875c8e3",
          _tpl: "5ae30c9a5acfc408fb139a03",
          parentId: "0364aec1d19fb63238848d8c",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "033d6ed955044d598d981f5a",
          _tpl: "5df917564a9f347bc92edca3",
          parentId: "2ebb18b6391c7fd24bf7d848",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9fa9962ddb546cbd842f82d6",
          _tpl: "5df916dfbb49d91fb446d6b9",
          parentId: "2ebb18b6391c7fd24bf7d848",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "97422f3a7bec57acd9a1b5ce",
          _tpl: "5dfa3d7ac41b2312ea33362a",
          parentId: "2ebb18b6391c7fd24bf7d848",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "887bfb71c7123d1c07557314",
          _tpl: "5dfa3cd1b33c0951220c079b",
          parentId: "033d6ed955044d598d981f5a",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "72220eed9af69de7288ad393",
          _tpl: "5dfa3d45dfc58d14537c20b0",
          parentId: "033d6ed955044d598d981f5a",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1650ff082bad5d63c9fbec46",
          _tpl: "5dfa3d950dee1b22f862eae0",
          parentId: "9fa9962ddb546cbd842f82d6",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660464b0100111a38e5120f",
      Name: "apb",
      Root: "a374a2495c7cc52903da341e",
      Items: [
        {
          _id: "a374a2495c7cc52903da341e",
          _tpl: "5abccb7dd8ce87001773e277",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "973ccca65aabae31ab809b8f",
          _tpl: "5a17fb03fcdbcbcae668728f",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cdde12141a9f309c09cbc6c4",
          _tpl: "5a17fb9dfcdbcbcae6687291",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ffbead2ac581ea562f2a97dd",
          _tpl: "5a17fc70fcdbcb0176308b3d",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ba4280100949f8d833c6449a",
          _tpl: "5aba62f8d8ce87001943946b",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "0c9ee8f69ead2624943e3ab9",
          _tpl: "5aba639ed8ce8700182ece67",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "af8fa0a72fbe6420817bdf2e",
          _tpl: "5abcc328d8ce8700194394f3",
          parentId: "a374a2495c7cc52903da341e",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046550100111a38e5c8e6",
      Name: "57mk2",
      Root: "10603d501c9049d5f2164e10",
      Items: [
        {
          _id: "10603d501c9049d5f2164e10",
          _tpl: "5d3eb3b0a4b93615055e84d2",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "1c30565237f3191552c35dfe",
          _tpl: "5d3eb5b6a4b9361eab311902",
          parentId: "10603d501c9049d5f2164e10",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "98b3813266f2ac4558c26af7",
          _tpl: "5d3eb44aa4b93650d64e4979",
          parentId: "10603d501c9049d5f2164e10",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fa63f09b67505940ab8500fb",
          _tpl: "5d3eb5eca4b9363b1f22f8e4",
          parentId: "10603d501c9049d5f2164e10",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3126fc4c95f102fe2b0a9b12",
          _tpl: "5d3eb4aba4b93650d64e497d",
          parentId: "98b3813266f2ac4558c26af7",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "22822f0aa223a853444d474e",
          _tpl: "5d3eb536a4b9363b1f22f8e2",
          parentId: "98b3813266f2ac4558c26af7",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660465f0100111a38f872fe",
      Name: "pl15",
      Root: "2bb5dae471990905a4cff451",
      Items: [
        {
          _id: "2bb5dae471990905a4cff451",
          _tpl: "602a9740da11d6478d5a06dc",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "b5dc354e58244ea51c061d73",
          _tpl: "602a95edda11d6478d5a06da",
          parentId: "2bb5dae471990905a4cff451",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9b8805f96351e91244c6c787",
          _tpl: "60228924961b8d75ee233c32",
          parentId: "2bb5dae471990905a4cff451",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "efbd9b33b50aaf205665f48b",
          _tpl: "602286df23506e50807090c6",
          parentId: "2bb5dae471990905a4cff451",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "846c956542f938393cb846fc",
          _tpl: "60229948cacb6b0506369e27",
          parentId: "9b8805f96351e91244c6c787",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "3fe4cf788c822ffb59d75cb9",
          _tpl: "60228a76d62c9b14ed777a66",
          parentId: "9b8805f96351e91244c6c787",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666046650100111a389cb1e9",
      Name: "rsh12",
      Root: "d21a443875a4b5d2a6df54d0",
      Items: [
        {
          _id: "d21a443875a4b5d2a6df54d0",
          _tpl: "633ec7c2a6918cb895019c6c",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "93030e0d25ec65808143c501",
          _tpl: "633ec6ee025b096d320a3b15",
          parentId: "d21a443875a4b5d2a6df54d0",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7aa13d92d33263a991c35679",
          _tpl: "633ec8e4025b096d320a3b1e",
          parentId: "d21a443875a4b5d2a6df54d0",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660466b0100111a3899e98a",
      Name: "133",
      Root: "17053179dd45e8c1a233df68",
      Items: [
        {
          _id: "17053179dd45e8c1a233df68",
          _tpl: "54491c4f4bdc2db1078b4568",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "6f4231c605cf6a205d06c2a4",
          _tpl: "55d4491a4bdc2d882f8b456e",
          parentId: "17053179dd45e8c1a233df68",
          slotId: "mod_barrel",
        },
        {
          _id: "81192f3b1db5bb2387ecd171",
          _tpl: "55d45d3f4bdc2d972f8b456c",
          parentId: "17053179dd45e8c1a233df68",
          slotId: "mod_handguard",
        },
        {
          _id: "ab191acdd124d10ed846afd4",
          _tpl: "55d484b44bdc2d1d4e8b456d",
          parentId: "17053179dd45e8c1a233df68",
          slotId: "mod_magazine",
        },
        {
          _id: "ba36aa7a65aa110698289fa5",
          _tpl: "56083cba4bdc2de22e8b456f",
          parentId: "17053179dd45e8c1a233df68",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666046720100111a387d40b2",
      Name: "mp7a1",
      Root: "6069f9ad2727107d29b6f330",
      Items: [
        {
          _id: "6069f9ad2727107d29b6f330",
          _tpl: "5ba26383d4351e00334c93d9",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "3978d97d462bbf3061830a37",
          _tpl: "5ba264f6d4351e0034777d52",
          parentId: "6069f9ad2727107d29b6f330",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3351efb66dca8631add6b788",
          _tpl: "5ba26acdd4351e003562908e",
          parentId: "6069f9ad2727107d29b6f330",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fd9f4e25d93e3c23ae33b452",
          _tpl: "5ba26b01d4351e0085325a51",
          parentId: "6069f9ad2727107d29b6f330",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f38b53bcc945670f105fd2f2",
          _tpl: "5ba26b17d4351e00367f9bdd",
          parentId: "6069f9ad2727107d29b6f330",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f429201829b315fa439e3b86",
          _tpl: "5bcf0213d4351e0085327c17",
          parentId: "6069f9ad2727107d29b6f330",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660467d0100111a38227071",
      Name: "mp43",
      Root: "9ef98b42b84dda29e5620992",
      Items: [
        {
          _id: "9ef98b42b84dda29e5620992",
          _tpl: "5580223e4bdc2d1c128b457f",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "7003718dcc06b90d0b04f435",
          _tpl: "55d447bb4bdc2d892f8b456f",
          parentId: "9ef98b42b84dda29e5620992",
          slotId: "mod_barrel",
        },
        {
          _id: "8cfff876a123af29f4b8e8fb",
          _tpl: "611a31ce5b7ffe001b4649d1",
          parentId: "9ef98b42b84dda29e5620992",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666046850100111a38753b5d",
      Name: "toz",
      Root: "d5cd883d89bb08d654e3cf65",
      Items: [
        {
          _id: "d5cd883d89bb08d654e3cf65",
          _tpl: "5a38e6bac4a2826c6e06d79b",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "86cf4067a25d436d29483709",
          _tpl: "5a38ee51c4a282000c5a955c",
          parentId: "d5cd883d89bb08d654e3cf65",
          slotId: "mod_magazine",
        },
        {
          _id: "ef607a8360e6f7a418b969f8",
          _tpl: "5a38ef1fc4a282000b1521f6",
          parentId: "d5cd883d89bb08d654e3cf65",
          slotId: "mod_stock",
          upd: {
            Foldable: {
              Folded: false,
            },
          },
        },
        {
          _id: "1385cc6b6d09061d14916a59",
          _tpl: "5a38eecdc4a282329a73b512",
          parentId: "ef607a8360e6f7a418b969f8",
          slotId: "mod_pistol_grip",
        },
      ],
    },
    {
      Id: "6660468b0100111a380e6ebd",
      Name: "153",
      Root: "1f4559f481b46d6199949fd5",
      Items: [
        {
          _id: "1f4559f481b46d6199949fd5",
          _tpl: "56dee2bdd2720bc8328b4567",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "c35b734991dc0996500e3284",
          _tpl: "56deec93d2720bec348b4568",
          parentId: "1f4559f481b46d6199949fd5",
          slotId: "mod_barrel",
        },
        {
          _id: "7c85160269c8ee5804bdcb08",
          _tpl: "56deed6ed2720b4c698b4583",
          parentId: "1f4559f481b46d6199949fd5",
          slotId: "mod_handguard",
        },
        {
          _id: "b8b66643196b581af67fa9f9",
          _tpl: "56deee15d2720bee328b4567",
          parentId: "1f4559f481b46d6199949fd5",
          slotId: "mod_magazine",
        },
        {
          _id: "c5523e32108cbd0ad6d081cb",
          _tpl: "56083be64bdc2d20478b456f",
          parentId: "1f4559f481b46d6199949fd5",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666046900100111a38130f29",
      Name: "mp7a2",
      Root: "37aa91df671c5003d5600751",
      Items: [
        {
          _id: "37aa91df671c5003d5600751",
          _tpl: "5bd70322209c4d00d7167b8f",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "693351d45089a5aac4c5ad92",
          _tpl: "5ba264f6d4351e0034777d52",
          parentId: "37aa91df671c5003d5600751",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "be49f85768468d397ae1d3bb",
          _tpl: "5ba26acdd4351e003562908e",
          parentId: "37aa91df671c5003d5600751",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1b06de8ab2eec660feb68379",
          _tpl: "5ba26b01d4351e0085325a51",
          parentId: "37aa91df671c5003d5600751",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "9b506155845d93127c23480c",
          _tpl: "5ba26b17d4351e00367f9bdd",
          parentId: "37aa91df671c5003d5600751",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "204a45ce89e54b9d10fb7421",
          _tpl: "5bd704e7209c4d00d7167c31",
          parentId: "37aa91df671c5003d5600751",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046980100111a38149494",
      Name: "saiga12",
      Root: "282b75fec963b004a205e23c",
      Items: [
        {
          _id: "282b75fec963b004a205e23c",
          _tpl: "576165642459773c7a400233",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "90176c8e7f09cc019f3f3a45",
          _tpl: "576169e62459773c69055191",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_handguard",
        },
        {
          _id: "de72af4e0bff97195c360fd7",
          _tpl: "576167ab2459773cad038c43",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_muzzle",
        },
        {
          _id: "c55c02167af71d487ba4ec1a",
          _tpl: "5649ade84bdc2d1b2b8b4587",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "18fbdfed36fe989e528b5e07",
          _tpl: "57616c112459773cce774d66",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_reciever",
        },
        {
          _id: "4a1ac25ea3b055f9d98178cf",
          _tpl: "57a9b9ce2459770ee926038d",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "97bae4ef6e8d2630c081de5e",
          _tpl: "57616ca52459773c69055192",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_stock",
        },
        {
          _id: "fa7f3588a03c0488312479c1",
          _tpl: "57616a9e2459773c7a400234",
          parentId: "282b75fec963b004a205e23c",
          slotId: "mod_magazine",
        },
      ],
    },
    {
      Id: "6660469f0100111a38afe310",
      Name: "m870",
      Root: "ce40c6c364cd41d9c8cb8cab",
      Items: [
        {
          _id: "ce40c6c364cd41d9c8cb8cab",
          _tpl: "5a7828548dc32e5a9c28b516",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "b19956d75b8f5f9f6848aa19",
          _tpl: "5a787f7ac5856700177af660",
          parentId: "ce40c6c364cd41d9c8cb8cab",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "914e2bbebc5b5e0d202605b2",
          _tpl: "5a788089c5856700142fdd9c",
          parentId: "ce40c6c364cd41d9c8cb8cab",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "96beca7769fd3db7a54f1bba",
          _tpl: "5a7882dcc5856700177af662",
          parentId: "ce40c6c364cd41d9c8cb8cab",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3b7fa9c1d401f87934b74f91",
          _tpl: "5a7880d0c5856700142fdd9d",
          parentId: "ce40c6c364cd41d9c8cb8cab",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046a60100111a381fce67",
      Name: "mossberg",
      Root: "8fb0eb38b95188d69766b0ec",
      Items: [
        {
          _id: "8fb0eb38b95188d69766b0ec",
          _tpl: "5e870397991fd70db46995c8",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "df4ae66b69eb9126f104c14b",
          _tpl: "5e87071478f43e51ca2de5e1",
          parentId: "8fb0eb38b95188d69766b0ec",
          slotId: "mod_barrel",
        },
        {
          _id: "83295e428ab1ced716d10797",
          _tpl: "5e87076ce2db31558c75a11d",
          parentId: "8fb0eb38b95188d69766b0ec",
          slotId: "mod_handguard",
        },
        {
          _id: "6673d6132f3130ab6e00274b",
          _tpl: "5e87080c81c4ed43e83cefda",
          parentId: "8fb0eb38b95188d69766b0ec",
          slotId: "mod_magazine",
        },
        {
          _id: "76bde14f1d882218815f9e16",
          _tpl: "5e87116b81c4ed43e83cefdd",
          parentId: "8fb0eb38b95188d69766b0ec",
          slotId: "mod_stock",
        },
        {
          _id: "fa50173ff9767a4cbcbf0935",
          _tpl: "5e87114fe2db31558c75a120",
          parentId: "8fb0eb38b95188d69766b0ec",
          slotId: "mod_mount",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "f73779d77a949fe82fcb7528",
          _tpl: "5e8708d4ae379e67d22e0102",
          parentId: "df4ae66b69eb9126f104c14b",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666046ae0100111a382e1a9a",
      Name: "ks23",
      Root: "34e7c51b491aeeafc1b9f709",
      Items: [
        {
          _id: "34e7c51b491aeeafc1b9f709",
          _tpl: "5e848cc2988a8701445df1e8",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a9f549123655bc1e557e15f7",
          _tpl: "5e848d2eea0a7c419c2f9bfd",
          parentId: "34e7c51b491aeeafc1b9f709",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a0a9a82399eb8856a8d26340",
          _tpl: "5e848d51e4dbc5266a4ec63b",
          parentId: "34e7c51b491aeeafc1b9f709",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c5dbb9eb7d73cf4d67bf8bc7",
          _tpl: "5f647d9f8499b57dc40ddb93",
          parentId: "34e7c51b491aeeafc1b9f709",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6ef6669f722ca159929923c4",
          _tpl: "5e848db4681bea2ada00daa9",
          parentId: "34e7c51b491aeeafc1b9f709",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046b40100111a386fd9dc",
      Name: "155",
      Root: "1c2619d55767e71a8937c8a3",
      Items: [
        {
          _id: "1c2619d55767e71a8937c8a3",
          _tpl: "606dae0ab0e443224b421bb7",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "c320c3508873f36513a1f9a0",
          _tpl: "6076c1b9f2cb2e02a42acedc",
          parentId: "1c2619d55767e71a8937c8a3",
          slotId: "mod_barrel",
        },
        {
          _id: "38a8058821da1f424d247fcf",
          _tpl: "607d5aa50494a626335e12ed",
          parentId: "1c2619d55767e71a8937c8a3",
          slotId: "mod_handguard",
        },
        {
          _id: "979cda923ffb48085238f440",
          _tpl: "6076c87f232e5a31c233d50e",
          parentId: "1c2619d55767e71a8937c8a3",
          slotId: "mod_magazine",
        },
        {
          _id: "e6b7ae52f7f18be9c8692006",
          _tpl: "607d5a891246154cad35d6aa",
          parentId: "1c2619d55767e71a8937c8a3",
          slotId: "mod_stock",
        },
      ],
    },
    {
      Id: "666046ba0100111a3827c1dc",
      Name: "benelli-m3",
      Root: "f06a5256d1690d7c61388f4e",
      Items: [
        {
          _id: "f06a5256d1690d7c61388f4e",
          _tpl: "6259b864ebedf17603599e88",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "8777c5976eb86f110378ce12",
          _tpl: "6259c2c1d714855d182bad85",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5d0a359465b2db10bc3abaa1",
          _tpl: "6259c4347d6aab70bc23a190",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9e0fbdeaebba3e21c92aa661",
          _tpl: "625ff2ccb8c587128c1a01dd",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0f7952049b66683152288cbb",
          _tpl: "6259c3387d6aab70bc23a18d",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
            Foldable: {
              Folded: false,
            },
          },
        },
        {
          _id: "685ad685648ae5b4d5366b13",
          _tpl: "625ed7c64d9b6612df732146",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "450f801eda7d874bc6fbbba1",
          _tpl: "625ebcef6f53af4aa66b44dc",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "8e833535b323a995d53bcbf7",
          _tpl: "625ec45bb14d7326ac20f572",
          parentId: "f06a5256d1690d7c61388f4e",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8773365debbc8e9cc4d72b59",
          _tpl: "6259c3d8012d6678ec38eeb8",
          parentId: "0f7952049b66683152288cbb",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046c70100111a380cbd99",
      Name: "mpx",
      Root: "aa3787c0291ee366d52f7a01",
      Items: [
        {
          _id: "aa3787c0291ee366d52f7a01",
          _tpl: "58948c8e86f77409493f7266",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "b29a04acb3a2b1d913e144ef",
          _tpl: "5894a51286f77426d13baf02",
          parentId: "aa3787c0291ee366d52f7a01",
          slotId: "mod_pistol_grip",
        },
        {
          _id: "e2d50e820055f4d7bae21ddd",
          _tpl: "5894a05586f774094708ef75",
          parentId: "aa3787c0291ee366d52f7a01",
          slotId: "mod_magazine",
        },
        {
          _id: "ce65d69f884ea4ea927f67d6",
          _tpl: "5894a5b586f77426d2590767",
          parentId: "aa3787c0291ee366d52f7a01",
          slotId: "mod_reciever",
        },
        {
          _id: "74dd899963b8ab803ba61cc2",
          _tpl: "5894a13e86f7742405482982",
          parentId: "aa3787c0291ee366d52f7a01",
          slotId: "mod_stock",
        },
        {
          _id: "51b9f1fd2e05f57b3f7f602d",
          _tpl: "58949edd86f77409483e16a9",
          parentId: "aa3787c0291ee366d52f7a01",
          slotId: "mod_charge",
        },
        {
          _id: "37b8c6fcbcc39b01474f2355",
          _tpl: "5894a2c386f77427140b8342",
          parentId: "ce65d69f884ea4ea927f67d6",
          slotId: "mod_barrel",
        },
        {
          _id: "7536b03db32b5e237b64f3e6",
          _tpl: "5894a42086f77426d2590762",
          parentId: "ce65d69f884ea4ea927f67d6",
          slotId: "mod_handguard",
        },
        {
          _id: "ef6f8fd33a04408b27a45d72",
          _tpl: "5894a81786f77427140b8347",
          parentId: "ce65d69f884ea4ea927f67d6",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "c7f1b95682b1628b69e0ebad",
          _tpl: "58949dea86f77409483e16a8",
          parentId: "37b8c6fcbcc39b01474f2355",
          slotId: "mod_muzzle",
        },
        {
          _id: "d83b7ea405c9b9e7bbb49553",
          _tpl: "5894a73486f77426d259076c",
          parentId: "7536b03db32b5e237b64f3e6",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "e44b5460d8b9d343e53fcb6a",
          _tpl: "58a56f8d86f774651579314c",
          parentId: "7536b03db32b5e237b64f3e6",
          slotId: "mod_mount_000",
        },
        {
          _id: "732a038190910fd00d525ad5",
          _tpl: "58a5c12e86f7745d585a2b9e",
          parentId: "7536b03db32b5e237b64f3e6",
          slotId: "mod_mount_001",
        },
        {
          _id: "e0343115ef56ef359826cdb9",
          _tpl: "58a56f8d86f774651579314c",
          parentId: "7536b03db32b5e237b64f3e6",
          slotId: "mod_mount_002",
        },
      ],
    },
    {
      Id: "666046cd0100111a38d71f27",
      Name: "mp5",
      Root: "5e4005b4842917c6705bffe8",
      Items: [
        {
          _id: "5e4005b4842917c6705bffe8",
          _tpl: "5926bb2186f7744b1c6c6e60",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "11c83cac294271c36c2da835",
          _tpl: "5926c3b286f774640d189b6b",
          parentId: "5e4005b4842917c6705bffe8",
          slotId: "mod_magazine",
        },
        {
          _id: "ba0e42975378a0e12531ccff",
          _tpl: "5926c0df86f77462f647f764",
          parentId: "5e4005b4842917c6705bffe8",
          slotId: "mod_reciever",
        },
        {
          _id: "959d342a42e2ea8ff78b4762",
          _tpl: "5926c32286f774616e42de99",
          parentId: "5e4005b4842917c6705bffe8",
          slotId: "mod_charge",
        },
        {
          _id: "b0efd62c16c15c3e5bcd4015",
          _tpl: "5926c36d86f77467a92a8629",
          parentId: "ba0e42975378a0e12531ccff",
          slotId: "mod_handguard",
        },
        {
          _id: "19eb07c5349e420c8ed1c128",
          _tpl: "5926d2be86f774134d668e4e",
          parentId: "ba0e42975378a0e12531ccff",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "40162ee41625839f72a59dc9",
          _tpl: "5926d3c686f77410de68ebc8",
          parentId: "ba0e42975378a0e12531ccff",
          slotId: "mod_stock",
        },
        {
          _id: "4920d613244867dd0dcb018f",
          _tpl: "5926e16e86f7742f5a0f7ecb",
          parentId: "ba0e42975378a0e12531ccff",
          slotId: "mod_muzzle",
        },
      ],
    },
    {
      Id: "666046d20100111a38afd009",
      Name: "p90",
      Root: "aea79af7f9791cb2531adc52",
      Items: [
        {
          _id: "aea79af7f9791cb2531adc52",
          _tpl: "5cc82d76e24e8d00134b4b83",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "2375aa3bde4a2de0f9afb19d",
          _tpl: "5cc70093e4a949033c734312",
          parentId: "aea79af7f9791cb2531adc52",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e9845e04160cc8404fb37adb",
          _tpl: "5cc700b9e4a949000f0f0f25",
          parentId: "aea79af7f9791cb2531adc52",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a6c23fb32bd1bd371394953e",
          _tpl: "5cc70102e4a949035e43ba74",
          parentId: "aea79af7f9791cb2531adc52",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "406eacb9bf317f4dc2b15f05",
          _tpl: "5cc701aae4a949000e1ea45c",
          parentId: "aea79af7f9791cb2531adc52",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9309ab20692772a8e668348f",
          _tpl: "5cc6ea78e4a949000e1ea3c1",
          parentId: "aea79af7f9791cb2531adc52",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6afdfad3f4a3402895bba7f5",
          _tpl: "5cc700cae4a949035e43ba72",
          parentId: "e9845e04160cc8404fb37adb",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1ab5afd6de36a1128a64e9d0",
          _tpl: "5cebec38d7f00c00110a652a",
          parentId: "a6c23fb32bd1bd371394953e",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "c0983ec5d932f0ce0ac71a67",
          _tpl: "5cc70146e4a949000d73bf6b",
          parentId: "a6c23fb32bd1bd371394953e",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "01d79201f306414b55fb3cec",
          _tpl: "5cc70146e4a949000d73bf6b",
          parentId: "a6c23fb32bd1bd371394953e",
          slotId: "mod_mount_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e700e2d3a32eecdbf129057e",
          _tpl: "5cc82796e24e8d000f5859a8",
          parentId: "406eacb9bf317f4dc2b15f05",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046d70100111a385ada08",
      Name: "mp9",
      Root: "8300947c27cf937ef2fffd52",
      Items: [
        {
          _id: "8300947c27cf937ef2fffd52",
          _tpl: "5de7bd7bfd6b4e6e2276dc25",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "484fa04108607a2967089513",
          _tpl: "5de8eac42a78646d96665d91",
          parentId: "8300947c27cf937ef2fffd52",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "46d2d8f0a81b0bccbd0e79de",
          _tpl: "5de910da8b6c4240ba2651b5",
          parentId: "8300947c27cf937ef2fffd52",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "21d6ae44b0fe1914ba27e943",
          _tpl: "5de8fbad2fbe23140d3ee9c4",
          parentId: "8300947c27cf937ef2fffd52",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "61cd5689fcd7e7ddf59ac9d9",
          _tpl: "5de8e67c4a9f347bc92edbd7",
          parentId: "8300947c27cf937ef2fffd52",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "eb8951bd36edd3adc11a545c",
          _tpl: "5de922d4b11454561e39239f",
          parentId: "8300947c27cf937ef2fffd52",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "3ad3d77420fcb217fa541d08",
          _tpl: "5de8fb539f98ac2bc659513a",
          parentId: "61cd5689fcd7e7ddf59ac9d9",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "b74f3c169147e69cf6781d57",
          _tpl: "5de8fc0b205ddc616a6bc51b",
          parentId: "61cd5689fcd7e7ddf59ac9d9",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046dd0100111a38d29880",
      Name: "mp99",
      Root: "13bb51f2ba33b74ac98265d1",
      Items: [
        {
          _id: "13bb51f2ba33b74ac98265d1",
          _tpl: "5e00903ae9dc277128008b87",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "632d98762188f53e0cf9b8bc",
          _tpl: "5de8eac42a78646d96665d91",
          parentId: "13bb51f2ba33b74ac98265d1",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fd6a68ddb59044837e59770d",
          _tpl: "5de910da8b6c4240ba2651b5",
          parentId: "13bb51f2ba33b74ac98265d1",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2436b7b77112afb6496f38c7",
          _tpl: "5e0090f7e9dc277128008b93",
          parentId: "13bb51f2ba33b74ac98265d1",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0f93d9b323224215f654b359",
          _tpl: "5de922d4b11454561e39239f",
          parentId: "13bb51f2ba33b74ac98265d1",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2fedc94f5a83e85a21c728ad",
          _tpl: "5de8fbf2b74cd90030650c79",
          parentId: "13bb51f2ba33b74ac98265d1",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "67139ca46b2a8a5e1a0ce23f",
          _tpl: "5de8fb539f98ac2bc659513a",
          parentId: "2436b7b77112afb6496f38c7",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "666046ef0100111a3870ac33",
      Name: "ppsh",
      Root: "93ae47580f73e0ec5be42936",
      Items: [
        {
          _id: "93ae47580f73e0ec5be42936",
          _tpl: "5ea03f7400685063ec28bfa8",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "31203c71b6ddbac419115252",
          _tpl: "5ea03e9400685063ec28bfa4",
          parentId: "93ae47580f73e0ec5be42936",
          slotId: "mod_stock",
        },
        {
          _id: "03c5f071a1a3eafbeb58bd74",
          _tpl: "5ea034eb5aad6446a939737b",
          parentId: "93ae47580f73e0ec5be42936",
          slotId: "mod_magazine",
        },
        {
          _id: "e89c5c4e64f8f26a78339d97",
          _tpl: "5ea03e5009aa976f2e7a514b",
          parentId: "93ae47580f73e0ec5be42936",
          slotId: "mod_reciever",
        },
        {
          _id: "538d48087a1a465831d26518",
          _tpl: "5ea02bb600685063ec28bfa1",
          parentId: "93ae47580f73e0ec5be42936",
          slotId: "mod_barrel",
        },
      ],
    },
    {
      Id: "666046f40100111a385958f1",
      Name: "vector45",
      Root: "c674d0d3e969341d9c2a3d46",
      Items: [
        {
          _id: "c674d0d3e969341d9c2a3d46",
          _tpl: "5fb64bc92b1b027b1f50bcf2",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "d99a6bf5e336d158a369f6d5",
          _tpl: "5fb651b52b1b027b1f50bcff",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7e6f50c443ddd7d70fc233fd",
          _tpl: "5fb6567747ce63734e3fa1dc",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "3fa2c7a3f5205799b7ffb338",
          _tpl: "5fb6564947ce63734e3fa1da",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "263c7870b291938d5c8c7e11",
          _tpl: "5fb6558ad6f0b2136f2d7eb7",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d56e48c2be0d7646bdd3f8a8",
          _tpl: "5fb65363d1409e5ca04b54f5",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6208e203ecaf18623a67786d",
          _tpl: "5fbb976df9986c4cff3fe5f2",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "71ac8c02f73b1dd53891b7c7",
          _tpl: "5fce0f9b55375d18a253eff2",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2dc24e10954b891d706c77b5",
          _tpl: "5fce0f9b55375d18a253eff2",
          parentId: "c674d0d3e969341d9c2a3d46",
          slotId: "mod_mount_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9bbf91d4fdc8f9903f6c80f4",
          _tpl: "5fb6548dd1409e5ca04b54f9",
          parentId: "d56e48c2be0d7646bdd3f8a8",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666046fa0100111a38a8bcce",
      Name: "ump",
      Root: "fa112228b4b09f6c5188216f",
      Items: [
        {
          _id: "fa112228b4b09f6c5188216f",
          _tpl: "5fc3e272f8b6a877a729eac5",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "d14b6ea387a673d7fccb343a",
          _tpl: "5fc3e466187fea44d52eda90",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_magazine",
        },
        {
          _id: "952cb7fa6c95bef3148137ac",
          _tpl: "5fc3e4ee7283c4046c5814af",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_stock",
        },
        {
          _id: "1ad9d9203b8dd1c5c3d9c9c2",
          _tpl: "5fc3e4a27283c4046c5814ab",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_barrel",
        },
        {
          _id: "4ef378188abf4fae1038070d",
          _tpl: "5fc53954f8b6a877a729eaeb",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_mount_000",
        },
        {
          _id: "e387c7422a5580a62ca998e6",
          _tpl: "5fc5396e900b1d5091531e72",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_mount_001",
        },
        {
          _id: "2b00590bfee69b98e251b5df",
          _tpl: "5fc5396e900b1d5091531e72",
          parentId: "fa112228b4b09f6c5188216f",
          slotId: "mod_mount_002",
        },
      ],
    },
    {
      Id: "666046ff0100111a38826ad3",
      Name: "vector9x19",
      Root: "cf11c781582d76054fbe8144",
      Items: [
        {
          _id: "cf11c781582d76054fbe8144",
          _tpl: "5fc3f2d5900b1d5091531e57",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "29d922f2509bbc865e35d5d4",
          _tpl: "5a718b548dc32e000d46d262",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "1c2b79ec630a5410182bd8ab",
          _tpl: "5fb6567747ce63734e3fa1dc",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_sight_front",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "d8aafc2986965545b85cccf6",
          _tpl: "5fb6564947ce63734e3fa1da",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "e2e50547810db056bd6321fd",
          _tpl: "5fb6558ad6f0b2136f2d7eb7",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "e686ac78f0a263cd48e3f763",
          _tpl: "5fbbc366ca32ed67276c1557",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "72775f4c30533f3653abc8b9",
          _tpl: "5fbb976df9986c4cff3fe5f2",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "22045471b944c60385bff013",
          _tpl: "5fce0f9b55375d18a253eff2",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8290bf8edbcc6dbbce61998f",
          _tpl: "5fce0f9b55375d18a253eff2",
          parentId: "cf11c781582d76054fbe8144",
          slotId: "mod_mount_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "806c94d522ee6ad0d97dd40a",
          _tpl: "5fbbc34106bde7524f03cbe9",
          parentId: "e686ac78f0a263cd48e3f763",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660470d0100111a381a18db",
      Name: "stm9",
      Root: "9831072c7b0dd7ac6b9fd3bf",
      Items: [
        {
          _id: "9831072c7b0dd7ac6b9fd3bf",
          _tpl: "60339954d62c9b14ed777c06",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a1f282edc5fd09d6d7c7906a",
          _tpl: "602e71bd53a60014f9705bfa",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "66b079e8d3410d52779482e6",
          _tpl: "5a7ad2e851dfba0016153692",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "aa166dce46bcea0b7290670d",
          _tpl: "602e63fb6335467b0c5ac94d",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "01f0479d770c0b8396d71100",
          _tpl: "602e3f1254072b51b239f713",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_stock_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ee56c6837e759b852aaa763d",
          _tpl: "6033749e88382f4fab3fd2c5",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_charge",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "fd33067bd4557c949d85bb99",
          _tpl: "602f85fd9b513876d4338d9c",
          parentId: "9831072c7b0dd7ac6b9fd3bf",
          slotId: "mod_tactical_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cf212a291b93feb848a317fe",
          _tpl: "603372b4da11d6478d5a07ff",
          parentId: "aa166dce46bcea0b7290670d",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a54458e5359a5182a4bafe0c",
          _tpl: "6034e3cb0ddce744014cb870",
          parentId: "aa166dce46bcea0b7290670d",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "89ec2b35dde7caf73bd989c4",
          _tpl: "602e620f9b513876d4338d9a",
          parentId: "01f0479d770c0b8396d71100",
          slotId: "mod_stock_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c8ddb094224b46b12e53fbaa",
          _tpl: "60337f5dce399e10262255d1",
          parentId: "cf212a291b93feb848a317fe",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047130100111a3815d3d7",
      Name: "sr2m",
      Root: "2a0dad29591c9e7a089ff4b5",
      Items: [
        {
          _id: "2a0dad29591c9e7a089ff4b5",
          _tpl: "62e14904c2699c0ec93adc47",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "eae7e84b8a92c5c5623927ea",
          _tpl: "633a98eab8b0506e48497c1a",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "916b6d67c2a03b7eff2c92ed",
          _tpl: "62e2a754b6c0ee2f230cee0f",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c83bb736bfab20f2903e406d",
          _tpl: "62e292e7b6c0ee2f230cee00",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c9414578b62314efe4cd737a",
          _tpl: "62e27a7865f0b1592a49e17b",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "7bdb997450e80ca6c020485a",
          _tpl: "62e15547db1a5c41971c1b5e",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8334244ff912ebcf4096adf8",
          _tpl: "637b9c37b7e3bc41b21ce71a",
          parentId: "2a0dad29591c9e7a089ff4b5",
          slotId: "mod_pistolgrip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "5e1a5bdfb3f111421fc1d04a",
          _tpl: "62ed189fb3608410ef5a2bfc",
          parentId: "7bdb997450e80ca6c020485a",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047180100111a3824a44a",
      Name: "sv98",
      Root: "8463643e74226b30afbd0749",
      Items: [
        {
          _id: "8463643e74226b30afbd0749",
          _tpl: "55801eed4bdc2d89578b4588",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a75c80c9a65280d8bae0960d",
          _tpl: "559ba5b34bdc2d1f1a8b4582",
          parentId: "8463643e74226b30afbd0749",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "558417f24d1295dbfd9649dd",
          _tpl: "56083e1b4bdc2dc8488b4572",
          parentId: "8463643e74226b30afbd0749",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "3a1120f5b4e239aee8995689",
          _tpl: "56083eab4bdc2d26448b456a",
          parentId: "8463643e74226b30afbd0749",
          slotId: "mod_tactical",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2ce026162d098564c63cf705",
          _tpl: "560e620e4bdc2d724b8b456b",
          parentId: "8463643e74226b30afbd0749",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "bdbe54c1041e425e8ea6f661",
          _tpl: "61faa91878830f069b6b7967",
          parentId: "8463643e74226b30afbd0749",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "10f481d2269541aa0eb80924",
          _tpl: "56ea8222d2720b69698b4567",
          parentId: "bdbe54c1041e425e8ea6f661",
          slotId: "mod_bipod",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047200100111a38dae989",
      Name: "dvl",
      Root: "d04fe35e6869a4f915456fa1",
      Items: [
        {
          _id: "d04fe35e6869a4f915456fa1",
          _tpl: "588892092459774ac91d4b11",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "7e9117b27bffe1198112b45d",
          _tpl: "5888988e24597752fe43a6fa",
          parentId: "d04fe35e6869a4f915456fa1",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "68687caf251c1cc18ce84541",
          _tpl: "5888956924597752983e182d",
          parentId: "d04fe35e6869a4f915456fa1",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "24f260db3dbde231d4972859",
          _tpl: "57c55f172459772d27602381",
          parentId: "d04fe35e6869a4f915456fa1",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "ba298c5b8ebc1051712ac615",
          _tpl: "58889d0c2459775bc215d981",
          parentId: "d04fe35e6869a4f915456fa1",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "15be9015beb5ec236657c05b",
          _tpl: "5888996c24597754281f9419",
          parentId: "68687caf251c1cc18ce84541",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "4214260ac2b606355b4b5ecd",
          _tpl: "5888976c24597754281f93f5",
          parentId: "68687caf251c1cc18ce84541",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047260100111a384ce4a4",
      Name: "mosin",
      Root: "74f8c676b681afb46f87a68d",
      Items: [
        {
          _id: "74f8c676b681afb46f87a68d",
          _tpl: "5ae08f0a5acfc408fb1398a1",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "ef4534cbad47deacbbab9241",
          _tpl: "5ae0973a5acfc4001562206c",
          parentId: "74f8c676b681afb46f87a68d",
          slotId: "mod_magazine",
        },
        {
          _id: "b2628e4442712a56176463b0",
          _tpl: "5ae096d95acfc400185c2c81",
          parentId: "74f8c676b681afb46f87a68d",
          slotId: "mod_stock",
        },
        {
          _id: "acd6972351ae68737f30ba42",
          _tpl: "5ae09bff5acfc4001562219d",
          parentId: "74f8c676b681afb46f87a68d",
          slotId: "mod_barrel",
        },
        {
          _id: "c11053d33c12712273037e98",
          _tpl: "5ae099875acfc4001714e593",
          parentId: "acd6972351ae68737f30ba42",
          slotId: "mod_sight_front",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "c2919379bec834b4ae070620",
          _tpl: "5ae099925acfc4001a5fc7b3",
          parentId: "acd6972351ae68737f30ba42",
          slotId: "mod_sight_rear",
          upd: {
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
      ],
    },
    {
      Id: "6660472e0100111a385a1818",
      Name: "m700",
      Root: "c9f3e63fb31e4318783c4bf6",
      Items: [
        {
          _id: "c9f3e63fb31e4318783c4bf6",
          _tpl: "5bfea6e90db834001b7347f3",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "d3f3ca82241704878abe30f1",
          _tpl: "5bfea7ad0db834001c38f1ee",
          parentId: "c9f3e63fb31e4318783c4bf6",
          slotId: "mod_magazine",
        },
        {
          _id: "a2c41e5b3cabdefefb9fc7af",
          _tpl: "5bfeb32b0db834001a6694d9",
          parentId: "c9f3e63fb31e4318783c4bf6",
          slotId: "mod_stock",
        },
        {
          _id: "3aac380294b6b18c6c63f240",
          _tpl: "5bfebc320db8340019668d79",
          parentId: "c9f3e63fb31e4318783c4bf6",
          slotId: "mod_barrel",
        },
      ],
    },
    {
      Id: "666047340100111a38199d4b",
      Name: "vpo215",
      Root: "d6e55395d692371f6ed4feac",
      Items: [
        {
          _id: "d6e55395d692371f6ed4feac",
          _tpl: "5de652c31b7e3716273428be",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "2cc458651ef3200f3fdcaa66",
          _tpl: "5de653abf76fdc1ce94a5a2a",
          parentId: "d6e55395d692371f6ed4feac",
          slotId: "mod_magazine",
        },
        {
          _id: "17315b82eeafe9b82cc39a88",
          _tpl: "5de655be4a9f347bc92edb88",
          parentId: "d6e55395d692371f6ed4feac",
          slotId: "mod_stock",
        },
        {
          _id: "e54718e4ced3728dd6058e84",
          _tpl: "5de65547883dde217541644b",
          parentId: "d6e55395d692371f6ed4feac",
          slotId: "mod_barrel",
        },
        {
          _id: "cae4e1a7d63a6e910c81f1da",
          _tpl: "5de6558e9f98ac2bc65950fc",
          parentId: "d6e55395d692371f6ed4feac",
          slotId: "mod_mount",
        },
        {
          _id: "3e3c2aa836ec1391329da681",
          _tpl: "5de6556a205ddc616a6bc4f7",
          parentId: "e54718e4ced3728dd6058e84",
          slotId: "mod_muzzle",
        },
      ],
    },
    {
      Id: "6660473f0100111a3819d7da",
      Name: "t5000",
      Root: "d381f3c6143c4151c8b629a9",
      Items: [
        {
          _id: "d381f3c6143c4151c8b629a9",
          _tpl: "5df24cf80dee1b22f862e9bc",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "852e25e0e3593e387e23312b",
          _tpl: "5df25b6c0b92095fd441e4cf",
          parentId: "d381f3c6143c4151c8b629a9",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "d0d04b04a135166afaecf469",
          _tpl: "5df256570dee1b22f862e9c4",
          parentId: "d381f3c6143c4151c8b629a9",
          slotId: "mod_barrel",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "4b49503a97a51394de01fdc0",
          _tpl: "5df35e59c41b2312ea3334d5",
          parentId: "d381f3c6143c4151c8b629a9",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
            Foldable: {
              Folded: false,
            },
          },
        },
        {
          _id: "bc6f38153ab71aa5630b31d9",
          _tpl: "5df35e970b92095fd441e4d2",
          parentId: "d381f3c6143c4151c8b629a9",
          slotId: "mod_mount",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "43b4ce8ffd68e0dc719de8e2",
          _tpl: "5df35e7f2a78646d96665dd4",
          parentId: "d0d04b04a135166afaecf469",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a4465f52ee92ed662de4b13d",
          _tpl: "5df25d3bfd6b4e6e2276dc9a",
          parentId: "4b49503a97a51394de01fdc0",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "c1bdb3648c2eabfacdc3c6cd",
          _tpl: "5df38a5fb74cd90030650cb6",
          parentId: "4b49503a97a51394de01fdc0",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9dde2b7ee7c5cd59c2ef6838",
          _tpl: "5df35ddddfc58d14537c2036",
          parentId: "4b49503a97a51394de01fdc0",
          slotId: "mod_stock_axis",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a84019cec44c5ceed28a4329",
          _tpl: "5df35eb2b11454561e3923e2",
          parentId: "a4465f52ee92ed662de4b13d",
          slotId: "mod_mount_000",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "a4e301c6e519466fb226c58b",
          _tpl: "5df35eb2b11454561e3923e2",
          parentId: "a4465f52ee92ed662de4b13d",
          slotId: "mod_mount_001",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "f869569c5d3da85905f90d82",
          _tpl: "5df35ea9c41b2312ea3334d8",
          parentId: "a4465f52ee92ed662de4b13d",
          slotId: "mod_mount_002",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "8c784708d0eba405c21a27cf",
          _tpl: "5df35eb2b11454561e3923e2",
          parentId: "a4465f52ee92ed662de4b13d",
          slotId: "mod_mount_003",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "36e46926bb336a2c590563f8",
          _tpl: "5df36948bb49d91fb446d5ad",
          parentId: "a4465f52ee92ed662de4b13d",
          slotId: "mod_foregrip",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "6660479e0100111a388a40ac",
      Name: "sawedoff",
      Root: "00b1dab1498b3c4370c4f69f",
      Items: [
        {
          _id: "00b1dab1498b3c4370c4f69f",
          _tpl: "64748cb8de82c85eaf0a273a",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "a4714484bdecf6bedf1604fe",
          _tpl: "64748d02d1c009260702b526",
          parentId: "00b1dab1498b3c4370c4f69f",
          slotId: "mod_barrel",
        },
      ],
    },
    {
      Id: "666047b10100111a38070882",
      Name: "kedrb",
      Root: "81bd71ce7738e6a9baa64ee9",
      Items: [
        {
          _id: "81bd71ce7738e6a9baa64ee9",
          _tpl: "57f3c6bd24597738e730fa2f",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 100,
              Durability: 77,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "5e911b3e8a26c59f1206ceae",
          _tpl: "57d152ec245977144076ccdf",
          parentId: "81bd71ce7738e6a9baa64ee9",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0814b5ce7caeb790bfbc8daa",
          _tpl: "57f3c7e024597738ea4ba286",
          parentId: "81bd71ce7738e6a9baa64ee9",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "2d2943f724d93f32bd216d46",
          _tpl: "57d1519e24597714373db79d",
          parentId: "81bd71ce7738e6a9baa64ee9",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "0cdd633f0b8697f523d20a72",
          _tpl: "57f3c8cc2459773ec4480328",
          parentId: "0814b5ce7caeb790bfbc8daa",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047bb0100111a38f8b04b",
      Name: "saiga9",
      Root: "045b9da8665968b753acd081",
      Items: [
        {
          _id: "045b9da8665968b753acd081",
          _tpl: "59f9cabd86f7743a10721f46",
          upd: {
            SpawnedInSession: true,
            Repairable: {
              MaxDurability: 95,
              Durability: 95,
            },
            Foldable: {
              Folded: false,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "b713f87bc19c96bf7dbd9f34",
          _tpl: "5998517986f7746017232f7e",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_pistol_grip",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "cd27b58ae75a7b64c3eafeaf",
          _tpl: "599851db86f77467372f0a18",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_stock",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "dd4e58a8a24b7b4d40b8f41e",
          _tpl: "5998529a86f774647f44f421",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_magazine",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "4689a28dbaaf445b93caa61e",
          _tpl: "5998598e86f7740b3f498a86",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_muzzle",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "df8dc1199ff1ef1bef7a4ca4",
          _tpl: "59985a8086f77414ec448d1a",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_reciever",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "6733f58e751192f3676091d4",
          _tpl: "599860e986f7743bb57573a6",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_sight_rear",
          upd: {
            SpawnedInSession: true,
            Sight: {
              ScopesCurrentCalibPointIndexes: [0],
              ScopesSelectedModes: [0],
              SelectedScope: 0,
            },
          },
        },
        {
          _id: "a5b90c373a91bc9a917eec92",
          _tpl: "59ccd11386f77428f24a488f",
          parentId: "045b9da8665968b753acd081",
          slotId: "mod_gas_block",
          upd: {
            SpawnedInSession: true,
          },
        },
        {
          _id: "9a1cb6bb3f85c15899c33352",
          _tpl: "5648b1504bdc2d9d488b4584",
          parentId: "a5b90c373a91bc9a917eec92",
          slotId: "mod_handguard",
          upd: {
            SpawnedInSession: true,
          },
        },
      ],
    },
    {
      Id: "666047c40100111a3825313f",
      Name: "mp18",
      Root: "14df610f7fdc5edcda9df6d8",
      Items: [
        {
          _id: "14df610f7fdc5edcda9df6d8",
          _tpl: "61f7c9e189e6fb1a5e3ea78d",
          upd: {
            Repairable: {
              MaxDurability: 100,
              Durability: 100,
            },
            FireMode: {
              FireMode: "single",
            },
          },
        },
        {
          _id: "1bf2ecb41149918cd6942056",
          _tpl: "61f4012adfc9f01a816adda1",
          parentId: "14df610f7fdc5edcda9df6d8",
          slotId: "mod_barrel",
        },
        {
          _id: "9badbdad3fc043b4cd21001e",
          _tpl: "61f7b234ea4ab34f2f59c3ec",
          parentId: "14df610f7fdc5edcda9df6d8",
          slotId: "mod_stock",
        },
        {
          _id: "0ec16cbf1a08a0493c9db533",
          _tpl: "61f7b85367ddd414173fdb36",
          parentId: "1bf2ecb41149918cd6942056",
          slotId: "mod_handguard",
        },
      ],
    },
  ];

  public weaponMemeBuilds = [ 
      {
      "Id": "6666766e010016df0b595ae1",
      "Name": "Mini Intervention",
      "Root": "2d4537e35782b939052e276c",
      "Items": [
        {
          "_id": "2d4537e35782b939052e276c",
          "_tpl": "5d2f0d8048f0356c925bc3b0",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "428912e4a9c5e991df718c6f",
          "_tpl": "5a351711c4a282000b1521a4",
          "parentId": "2d4537e35782b939052e276c",
          "slotId": "mod_magazine"
        },
        {
          "_id": "19168456b3be41cb825148fe",
          "_tpl": "5d2f261548f03576f500e7b7",
          "parentId": "2d4537e35782b939052e276c",
          "slotId": "mod_reciever"
        },
        {
          "_id": "75741eed4302f6481940a017",
          "_tpl": "5d2f2d5748f03572ec0c0139",
          "parentId": "2d4537e35782b939052e276c",
          "slotId": "mod_charge"
        },
        {
          "_id": "ea4a6500e7f8aad357f1b981",
          "_tpl": "5d2f259b48f0355a844acd74",
          "parentId": "19168456b3be41cb825148fe",
          "slotId": "mod_handguard"
        },
        {
          "_id": "14348750c1bbe892878c2077",
          "_tpl": "5926d2be86f774134d668e4e",
          "parentId": "19168456b3be41cb825148fe",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "8ed2d1ebcf8c0e11a4316830",
          "_tpl": "5d2f25bc48f03502573e5d85",
          "parentId": "19168456b3be41cb825148fe",
          "slotId": "mod_stock"
        },
        {
          "_id": "cd094ba30bb10fdc0d82fc58",
          "_tpl": "5926dad986f7741f82604363",
          "parentId": "19168456b3be41cb825148fe",
          "slotId": "mod_mount"
        },
        {
          "_id": "1786f55aab6098b87f5e3201",
          "_tpl": "5b2389515acfc4771e1be0c0",
          "parentId": "cd094ba30bb10fdc0d82fc58",
          "slotId": "mod_scope"
        },
        {
          "_id": "33ce78278de5c61780bcbefd",
          "_tpl": "5a37cb10c4a282329a73b4e7",
          "parentId": "1786f55aab6098b87f5e3201",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "b0c06b771a8ee214c73e44e2",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "1786f55aab6098b87f5e3201",
          "slotId": "mod_scope_001",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "de625ea5c7a4484546d29e2f",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "1786f55aab6098b87f5e3201",
          "slotId": "mod_scope_002",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "666676c2010016df0b267baa",
      "Name": "CCTV",
      "Root": "5bad204b90c0c683b3501926",
      "Items": [
        {
          "_id": "5bad204b90c0c683b3501926",
          "_tpl": "5cc82d76e24e8d00134b4b83",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e210e962a2dd5b9660b13c25",
          "_tpl": "5cc70093e4a949033c734312",
          "parentId": "5bad204b90c0c683b3501926",
          "slotId": "mod_magazine"
        },
        {
          "_id": "5de5c5d5af3c4bf9af06c2f3",
          "_tpl": "5cebec10d7f00c065703d185",
          "parentId": "5bad204b90c0c683b3501926",
          "slotId": "mod_stock"
        },
        {
          "_id": "75821bf86303d736b1dd77d8",
          "_tpl": "5cc700ede4a949033c734315",
          "parentId": "5bad204b90c0c683b3501926",
          "slotId": "mod_reciever"
        },
        {
          "_id": "75024e41ad204c001d030a23",
          "_tpl": "5cc701aae4a949000e1ea45c",
          "parentId": "5bad204b90c0c683b3501926",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b4f24c7df404cf05d1837919",
          "_tpl": "5cc6ea78e4a949000e1ea3c1",
          "parentId": "5bad204b90c0c683b3501926",
          "slotId": "mod_charge"
        },
        {
          "_id": "537c6e92b62d73b32db648f0",
          "_tpl": "5cc700d4e4a949000f0f0f28",
          "parentId": "5de5c5d5af3c4bf9af06c2f3",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "41d2c50fe4ed7b53d71e5061",
          "_tpl": "5cc7012ae4a949001252b43e",
          "parentId": "75821bf86303d736b1dd77d8",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "6ccde6919fb9c08c543edfa0",
          "_tpl": "5cc7012ae4a949001252b43e",
          "parentId": "75821bf86303d736b1dd77d8",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "7a275242ee05e1879fee6fc0",
          "_tpl": "5dfe6104585a0c3e995c7b82",
          "parentId": "75821bf86303d736b1dd77d8",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0,
                0
              ],
              "ScopesSelectedModes": [
                0,
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "44e35cd53e0548bae7af7f67",
          "_tpl": "5cc82796e24e8d000f5859a8",
          "parentId": "75024e41ad204c001d030a23",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "15abc13874fc883dfd3a8341",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "41d2c50fe4ed7b53d71e5061",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ffd858d0039b215f934f7e3e",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "6ccde6919fb9c08c543edfa0",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "d767109513ab805beca36adc",
          "_tpl": "5cebec00d7f00c065c53522a",
          "parentId": "44e35cd53e0548bae7af7f67",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "66667715010016df0bd0a3f0",
      "Name": "Mini Chad Blaster",
      "Root": "fc201810cb704d1882d1e68a",
      "Items": [
        {
          "_id": "fc201810cb704d1882d1e68a",
          "_tpl": "5a7828548dc32e5a9c28b516",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "871e287235b0d7ececbaf71a",
          "_tpl": "5a787f7ac5856700177af660",
          "parentId": "fc201810cb704d1882d1e68a",
          "slotId": "mod_barrel"
        },
        {
          "_id": "1dfd53d5b47ed1e94216b536",
          "_tpl": "5a788031c585673f2b5c1c79",
          "parentId": "fc201810cb704d1882d1e68a",
          "slotId": "mod_handguard"
        },
        {
          "_id": "a721288d8afaa3024ed1f79f",
          "_tpl": "5a78830bc5856700137e4c90",
          "parentId": "fc201810cb704d1882d1e68a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a20189ad4fe313f1a5f0a5e7",
          "_tpl": "5a788169c5856700142fdd9e",
          "parentId": "fc201810cb704d1882d1e68a",
          "slotId": "mod_stock"
        },
        {
          "_id": "631187bc09761742df3edaf5",
          "_tpl": "5a7893c1c585673f2b5c374d",
          "parentId": "fc201810cb704d1882d1e68a",
          "slotId": "mod_mount"
        },
        {
          "_id": "1f4bc55cf3af2493fc64363e",
          "_tpl": "560838c94bdc2d77798b4569",
          "parentId": "871e287235b0d7ececbaf71a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1ee21fb08b3518267860c58d",
          "_tpl": "5a789261c5856700186c65d3",
          "parentId": "871e287235b0d7ececbaf71a",
          "slotId": "mod_mount"
        },
        {
          "_id": "be6a1f0622e6d5f43fd5a43c",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "1dfd53d5b47ed1e94216b536",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "40e2076e70e65c4d7e690f0d",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "1dfd53d5b47ed1e94216b536",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "380a3a9a3299138ca85cfc3f",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "1dfd53d5b47ed1e94216b536",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "4d1f9cded9bd7bdb2186d6db",
          "_tpl": "57c69dd424597774c03b7bbc",
          "parentId": "631187bc09761742df3edaf5",
          "slotId": "mod_scope"
        },
        {
          "_id": "9bf4384f0cc85c33fd2197f9",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "1ee21fb08b3518267860c58d",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "60683b4d97e696eb4fcb8bab",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "1ee21fb08b3518267860c58d",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "932f502ba96bb6c2fb7bf0c2",
          "_tpl": "5b3b99475acfc432ff4dcbee",
          "parentId": "4d1f9cded9bd7bdb2186d6db",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "666677ba010016df0ba21fe3",
      "Name": "Economy VSS",
      "Root": "a46f95e9449bd2c57d429c98",
      "Items": [
        {
          "_id": "a46f95e9449bd2c57d429c98",
          "_tpl": "5447a9cd4bdc2dbd208b4567",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "156abdcb8254dad4b3324aae",
          "_tpl": "5c0e2ff6d174af02a1659d4a",
          "parentId": "a46f95e9449bd2c57d429c98",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "4a34af13b52d0e77e47852f9",
          "_tpl": "5448c1d04bdc2dff2f8b4569",
          "parentId": "a46f95e9449bd2c57d429c98",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c7a4581b24f6cd1d7a46b82e",
          "_tpl": "59bfe68886f7746004266202",
          "parentId": "a46f95e9449bd2c57d429c98",
          "slotId": "mod_reciever"
        },
        {
          "_id": "a030cfccd563b8d271eebf7c",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "a46f95e9449bd2c57d429c98",
          "slotId": "mod_stock"
        },
        {
          "_id": "3ea9ae64910e3c6700299c12",
          "_tpl": "55d44fd14bdc2d962f8b456e",
          "parentId": "a46f95e9449bd2c57d429c98",
          "slotId": "mod_charge"
        },
        {
          "_id": "b874a9c2ff6d26b5a2853c86",
          "_tpl": "570fd79bd2720bc7458b4583",
          "parentId": "c7a4581b24f6cd1d7a46b82e",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "da00547c6e8c60361c1c3c9b",
          "_tpl": "63d3d44a2a49307baf09386d",
          "parentId": "c7a4581b24f6cd1d7a46b82e",
          "slotId": "mod_barrel"
        },
        {
          "_id": "0befe3e9161cb37629d75709",
          "_tpl": "5b2cfa535acfc432ff4db7a0",
          "parentId": "c7a4581b24f6cd1d7a46b82e",
          "slotId": "mod_handguard"
        },
        {
          "_id": "b13e9f3cd5f68d9bc267a383",
          "_tpl": "56ea8180d2720bf2698b456a",
          "parentId": "da00547c6e8c60361c1c3c9b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "6417d9fd7c100c495a8524cf",
          "_tpl": "56eabcd4d2720b66698b4574",
          "parentId": "da00547c6e8c60361c1c3c9b",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "f52112812d1d4e5c1714e93c",
          "_tpl": "5b30bc285acfc47a8608615d",
          "parentId": "0befe3e9161cb37629d75709",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "6741534510f2c18f1d6ec5a4",
          "_tpl": "57da93632459771cb65bf83f",
          "parentId": "b13e9f3cd5f68d9bc267a383",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d0d17c83469e4de6af26d1e6",
          "_tpl": "5c1bc5612e221602b5429350",
          "parentId": "f52112812d1d4e5c1714e93c",
          "slotId": "mod_foregrip"
        }
      ]
    },
    {
      "Id": "666677e0010016df0b8bdcfb",
      "Name": "The Giant Handcannon",
      "Root": "6ab6c9b86af98fa51b60a1d2",
      "Items": [
        {
          "_id": "6ab6c9b86af98fa51b60a1d2",
          "_tpl": "588892092459774ac91d4b11",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "133d96d3c60a25ac8c624a79",
          "_tpl": "5888988e24597752fe43a6fa",
          "parentId": "6ab6c9b86af98fa51b60a1d2",
          "slotId": "mod_magazine"
        },
        {
          "_id": "39d08bea5eda1e5f67c0c3b0",
          "_tpl": "5d2dc3e548f035404a1a4798",
          "parentId": "6ab6c9b86af98fa51b60a1d2",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4eede6d8bd7acd722bcb0103",
          "_tpl": "5888945a2459774bf43ba385",
          "parentId": "6ab6c9b86af98fa51b60a1d2",
          "slotId": "mod_barrel"
        },
        {
          "_id": "c18ac74f654e8c4aff2d282d",
          "_tpl": "6113cc78d3a39d50044c065a",
          "parentId": "6ab6c9b86af98fa51b60a1d2",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "3ff7f6a1f961759c6947ac66",
          "_tpl": "58889c7324597754281f9439",
          "parentId": "4eede6d8bd7acd722bcb0103",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6666780c010016df0b49c940",
      "Name": "The Flashbang",
      "Root": "fee3c1831500e4c4f976695d",
      "Items": [
        {
          "_id": "fee3c1831500e4c4f976695d",
          "_tpl": "59f98b4986f7746f546d2cef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "e2351b55e5aba2c4d87bdefc",
          "_tpl": "5a27bad7c4a282000b15184b",
          "parentId": "fee3c1831500e4c4f976695d",
          "slotId": "mod_mount"
        },
        {
          "_id": "d097a15c523b7ffdbdf64cc0",
          "_tpl": "59f99a7d86f7745b134aa97b",
          "parentId": "fee3c1831500e4c4f976695d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "b2cb46dd1df8b42aed0a63c1",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "e2351b55e5aba2c4d87bdefc",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "caf387dff616f1efb63dc6fb",
          "_tpl": "5a27b3d0c4a282000d721ec1",
          "parentId": "e2351b55e5aba2c4d87bdefc",
          "slotId": "mod_mount"
        },
        {
          "_id": "50360416ea85a573ee4a89dc",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "e2351b55e5aba2c4d87bdefc",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "bea076ce1132d1d60c1ddd6b",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "e2351b55e5aba2c4d87bdefc",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "4c9d088eb8954f2f7cf95679",
          "_tpl": "577d128124597739d65d0e56",
          "parentId": "e2351b55e5aba2c4d87bdefc",
          "slotId": "mod_scope"
        },
        {
          "_id": "35ae70b1f4a68596761236b7",
          "_tpl": "5a27b6bec4a282000e496f78",
          "parentId": "caf387dff616f1efb63dc6fb",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "d7cad37f76aadcd7d9707daf",
          "_tpl": "577d141e24597739c5255e01",
          "parentId": "4c9d088eb8954f2f7cf95679",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667867010016df0b2cf7a0",
      "Name": "The Careless Whisper",
      "Root": "04a32704e1fe4aa1b96cb635",
      "Items": [
        {
          "_id": "04a32704e1fe4aa1b96cb635",
          "_tpl": "5ae08f0a5acfc408fb1398a1",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "39209f6183b383d5f96e26b9",
          "_tpl": "5ae0973a5acfc4001562206c",
          "parentId": "04a32704e1fe4aa1b96cb635",
          "slotId": "mod_magazine"
        },
        {
          "_id": "04329c14e361cc67cbdd267f",
          "_tpl": "5bfd36ad0db834001c38ef66",
          "parentId": "04a32704e1fe4aa1b96cb635",
          "slotId": "mod_stock"
        },
        {
          "_id": "1ea146865a03aa1ddb03e51c",
          "_tpl": "5ae09bff5acfc4001562219d",
          "parentId": "04a32704e1fe4aa1b96cb635",
          "slotId": "mod_barrel"
        },
        {
          "_id": "4708e57fc32aa7eb5a6bbf0f",
          "_tpl": "5bbde41ed4351e003562b038",
          "parentId": "04329c14e361cc67cbdd267f",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "d83fead68251a2d61d6d4009",
          "_tpl": "5ae099875acfc4001714e593",
          "parentId": "1ea146865a03aa1ddb03e51c",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3fc82d6ebfd5cb5c92f1b154",
          "_tpl": "5bbdb811d4351e45020113c7",
          "parentId": "1ea146865a03aa1ddb03e51c",
          "slotId": "mod_sight_rear"
        },
        {
          "_id": "f5a69c35dfe9da3db7eefc77",
          "_tpl": "5b86a0e586f7745b600ccb23",
          "parentId": "1ea146865a03aa1ddb03e51c",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ec5d38f016f5c521c450f449",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "3fc82d6ebfd5cb5c92f1b154",
          "slotId": "mod_scope"
        },
        {
          "_id": "074f237b1139f3ac3a6610d4",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "3fc82d6ebfd5cb5c92f1b154",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5f8ebd83c884ef366c11d912",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "3fc82d6ebfd5cb5c92f1b154",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "2bf1d10d832f5607dbb0c588",
          "_tpl": "5b2388675acfc4771e1be0be",
          "parentId": "ec5d38f016f5c521c450f449",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "666678af010016df0bb778d8",
      "Name": "Big Choppa",
      "Root": "5e4a0c09ede0ed2be92ea158",
      "Items": [
        {
          "_id": "5e4a0c09ede0ed2be92ea158",
          "_tpl": "5b0bbe4e5acfc40dc528a72d",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "51cbb7661d92bfd36127a39f",
          "_tpl": "5b7d679f5acfc4001a5c4024",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "6443d6613908e75e5cb8a1bd",
          "_tpl": "5b7bef9c5acfc43d102852ec",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_magazine"
        },
        {
          "_id": "f9cac2deb8ffbe7f7b8e3eb2",
          "_tpl": "5b7be1ca5acfc400170e2d2f",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_handguard"
        },
        {
          "_id": "1ededa155ace931073c33c67",
          "_tpl": "5b7be1265acfc400161d0798",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_barrel"
        },
        {
          "_id": "06c5b6950c95962a5d970920",
          "_tpl": "5b0bc22d5acfc47a8607f085",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "26e434cf6c325bc3927d2614",
          "_tpl": "5b099bb25acfc400186331e8",
          "parentId": "5e4a0c09ede0ed2be92ea158",
          "slotId": "mod_reciever"
        },
        {
          "_id": "939d1a104eb384183a821174",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "f9cac2deb8ffbe7f7b8e3eb2",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "8c9ca8aa29465d4536848deb",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "f9cac2deb8ffbe7f7b8e3eb2",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "9e1c1555f2f3941e15773c50",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "f9cac2deb8ffbe7f7b8e3eb2",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "aeda998b3e28308742e3b9f0",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "f9cac2deb8ffbe7f7b8e3eb2",
          "slotId": "mod_tactical_003",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "400be0692c1d83379f910ca0",
          "_tpl": "612e0d3767085e45ef14057f",
          "parentId": "1ededa155ace931073c33c67",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "c96b160c9ccc5a8408418351",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "26e434cf6c325bc3927d2614",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bf68ef4354ebd197eb6b6584",
          "_tpl": "63877c99e785640d436458ea",
          "parentId": "400be0692c1d83379f910ca0",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6666791f010016df0b132f1b",
      "Name": "The Predator",
      "Root": "0cffc5e3e0f73c4b35d6df42",
      "Items": [
        {
          "_id": "0cffc5e3e0f73c4b35d6df42",
          "_tpl": "5a0ec13bfcdbcb00165aa685",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "811d9ec6324c63b3fd3bf768",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "8139e95faf2200852649d11e",
          "_tpl": "59d64fc686f774171b243fe2",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "38d14d825f853ddd80c1fccb",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "b2bf72ca808a4971e9bd1ed1",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_reciever"
        },
        {
          "_id": "534bc5d53e2d58ce3fbe8b66",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3577352e06a684488f2ee3d0",
          "_tpl": "5b0e794b5acfc47a877359b2",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_stock"
        },
        {
          "_id": "d94454346e3e8f268fd4935f",
          "_tpl": "5c6175362e221600133e3b94",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8319e48e306cefef8cd5ee8f",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "0cffc5e3e0f73c4b35d6df42",
          "slotId": "mod_charge"
        },
        {
          "_id": "0d9e9e22b32a9164f28fa6cd",
          "_tpl": "5cf4e3f3d7f00c06595bc7f0",
          "parentId": "811d9ec6324c63b3fd3bf768",
          "slotId": "mod_handguard"
        },
        {
          "_id": "3808a3aed51f353e9a471a6e",
          "_tpl": "5aa66c72e5b5b00016327c93",
          "parentId": "b2bf72ca808a4971e9bd1ed1",
          "slotId": "mod_scope"
        },
        {
          "_id": "da305e530669cccc6cbd5533",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "95b72f5e750444e432dae5f4",
          "_tpl": "5c06595c0db834001a66af6c",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_scope",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "847ef9d910f7f0aaf0dd201c",
          "_tpl": "5c06595c0db834001a66af6c",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b94b267663038ccf40dd5295",
          "_tpl": "5c06595c0db834001a66af6c",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "0ecef26b3a8bdb1a97a3999a",
          "_tpl": "5c06595c0db834001a66af6c",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a11c04a345f8365af3af6ae3",
          "_tpl": "5c06595c0db834001a66af6c",
          "parentId": "0d9e9e22b32a9164f28fa6cd",
          "slotId": "mod_tactical_003",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "aed3193b3e29aefd036b9064",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "3808a3aed51f353e9a471a6e",
          "slotId": "mod_scope_001",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "16c40358c0ad68802fbfb799",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "3808a3aed51f353e9a471a6e",
          "slotId": "mod_scope_002",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "986daf366734acd6e0ab3f2b",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "3808a3aed51f353e9a471a6e",
          "slotId": "mod_scope_003",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667996010016df0b2dae8b",
      "Name": "Chad Molester",
      "Root": "f7b4559cc2e447842360c86b",
      "Items": [
        {
          "_id": "f7b4559cc2e447842360c86b",
          "_tpl": "5de7bd7bfd6b4e6e2276dc25",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "d4d762ea1332d6b2b79381e5",
          "_tpl": "5de8eac42a78646d96665d91",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_magazine"
        },
        {
          "_id": "c6a1dd3bc0df0e6f5f3180f3",
          "_tpl": "5de8f237bbaf010b10528a70",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "448b3a60d8763b3eb0c0cc00",
          "_tpl": "5de910da8b6c4240ba2651b5",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_stock"
        },
        {
          "_id": "8c698ee9c8c286cc4fb0b7b3",
          "_tpl": "5de8fbad2fbe23140d3ee9c4",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "5a3cd167d26b99caf8460af3",
          "_tpl": "5de8e67c4a9f347bc92edbd7",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_reciever"
        },
        {
          "_id": "a6daec7a1f46379bb95e807d",
          "_tpl": "5de922d4b11454561e39239f",
          "parentId": "f7b4559cc2e447842360c86b",
          "slotId": "mod_charge"
        },
        {
          "_id": "4f3572bde915df104d5e7bc8",
          "_tpl": "5de8f2d5b74cd90030650c72",
          "parentId": "c6a1dd3bc0df0e6f5f3180f3",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9fd5c9e692029bf0c5958207",
          "_tpl": "5a7b483fe899ef0016170d15",
          "parentId": "c6a1dd3bc0df0e6f5f3180f3",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "894a2f4793ad702e577333d6",
          "_tpl": "6171407e50224f204c1da3c5",
          "parentId": "5a3cd167d26b99caf8460af3",
          "slotId": "mod_scope"
        },
        {
          "_id": "a0811cb06d984a8de7becab3",
          "_tpl": "5de8fb539f98ac2bc659513a",
          "parentId": "5a3cd167d26b99caf8460af3",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9f29739cdea5523a305af437",
          "_tpl": "5de8fc0b205ddc616a6bc51b",
          "parentId": "5a3cd167d26b99caf8460af3",
          "slotId": "mod_mount"
        },
        {
          "_id": "4983801ea50a73d685823600",
          "_tpl": "617151c1d92c473c770214ab",
          "parentId": "894a2f4793ad702e577333d6",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d57f13a0a6fbf9ceb0e4cfc4",
          "_tpl": "61714b2467085e45ef140b2c",
          "parentId": "894a2f4793ad702e577333d6",
          "slotId": "mod_scope_001"
        },
        {
          "_id": "091523ceaf9ba5a2b4a3759a",
          "_tpl": "61714b2467085e45ef140b2c",
          "parentId": "894a2f4793ad702e577333d6",
          "slotId": "mod_scope_002"
        },
        {
          "_id": "34a7787b002d7e4b41ec89a6",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "9f29739cdea5523a305af437",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "54053c93f281d9ba57c78b67",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "d57f13a0a6fbf9ceb0e4cfc4",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "ab8fdaf9014f0f8db1668376",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "091523ceaf9ba5a2b4a3759a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667a30010016df0b0c4d07",
      "Name": "The Red Menace",
      "Root": "cf05e1d49d0f480ecf9343eb",
      "Items": [
        {
          "_id": "cf05e1d49d0f480ecf9343eb",
          "_tpl": "59d6088586f774275f37482f",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "56e662a5b49aad994199984a",
          "_tpl": "59d64ec286f774171d1e0a42",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "2c95be4585d2902790f64eff",
          "_tpl": "593d489686f7745c6255d58a",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "52649dc5d0f2f7110f389801",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "0387a1e55cf239dca7305e24",
          "_tpl": "5d2c770c48f0354b4a07c100",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_reciever"
        },
        {
          "_id": "88b5c57f3ba16f4bb36b0224",
          "_tpl": "59d650cf86f7741b846413a4",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4c4220a484129030dab95bd3",
          "_tpl": "5e217ba4c1434648c13568cd",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_stock"
        },
        {
          "_id": "cf033f92f31208bc55066e21",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8822717d92fa3b85f06f4fe0",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "cf05e1d49d0f480ecf9343eb",
          "slotId": "mod_charge"
        },
        {
          "_id": "625743615f8d4beaf53af5f7",
          "_tpl": "5b80242286f77429445e0b47",
          "parentId": "56e662a5b49aad994199984a",
          "slotId": "mod_handguard"
        },
        {
          "_id": "2d13828c747e40b9b2b0f6fa",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "0387a1e55cf239dca7305e24",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c96c32be15aef3b4ab16a742",
          "_tpl": "5b8403a086f7747ff856f4e2",
          "parentId": "625743615f8d4beaf53af5f7",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "deb06a5efab5de8290017c13",
          "_tpl": "5b84038986f774774913b0c1",
          "parentId": "625743615f8d4beaf53af5f7",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "837693592f59df5461638f10",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "c96c32be15aef3b4ab16a742",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "be7d040031a444a0fd429976",
          "_tpl": "6272370ee4013c5d7e31f418",
          "parentId": "deb06a5efab5de8290017c13",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667a6c010016df0b6b5b4d",
      "Name": "Shitty Railgun Womp Womp",
      "Root": "abb403c792eb02b45f135be2",
      "Items": [
        {
          "_id": "abb403c792eb02b45f135be2",
          "_tpl": "5cadfbf7ae92152ac412eeef",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "78acf4fb6b7d40a9c7a944c9",
          "_tpl": "5b3b99265acfc4704b4a1afb",
          "parentId": "abb403c792eb02b45f135be2",
          "slotId": "mod_scope"
        }
      ]
    },
    {
      "Id": "66667b55010016df0b019daf",
      "Name": "The Maw",
      "Root": "9efa5b8ab8746c8aada29c4d",
      "Items": [
        {
          "_id": "9efa5b8ab8746c8aada29c4d",
          "_tpl": "5c46fbd72e2216398b5a8c9c",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "f7600a947a4dde8e3a8fb5ce",
          "_tpl": "6516b129609aaf354b34b3a8",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "d1ff52d702228c6692b9dbc8",
          "_tpl": "5c471c442e221602b542a6f8",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "cb7ed0f864aa89304ec06cac",
          "_tpl": "6197b229af1f5202c57a9bea",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_stock"
        },
        {
          "_id": "e4d5c804be55195dd9c8d472",
          "_tpl": "5c471cb32e221602b177afaa",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_barrel"
        },
        {
          "_id": "ec5d582f9c3ac2dea04643a3",
          "_tpl": "5c471c2d2e22164bef5d077f",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "9ea5dc82a79d424c223bf9b1",
          "_tpl": "5c471bd12e221602b4129c3a",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "258962b8f6af088ee72c5a20",
          "_tpl": "5dff8db859400025ea5150d4",
          "parentId": "9efa5b8ab8746c8aada29c4d",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "9000f0aa90ebe519fb9c5c75",
          "_tpl": "6087e663132d4d12c81fd96b",
          "parentId": "f7600a947a4dde8e3a8fb5ce",
          "slotId": "mod_pistolgrip"
        },
        {
          "_id": "ac42dbaae6aee16b740cb366",
          "_tpl": "5c793fb92e221644f31bfb64",
          "parentId": "cb7ed0f864aa89304ec06cac",
          "slotId": "mod_stock"
        },
        {
          "_id": "727a1c0598b09d351d525be2",
          "_tpl": "5c471bfc2e221602b21d4e17",
          "parentId": "e4d5c804be55195dd9c8d472",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "4049024f037dffd74a6c0980",
          "_tpl": "5c471c842e221615214259b5",
          "parentId": "e4d5c804be55195dd9c8d472",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "9876170312ba29d747c447e6",
          "_tpl": "5e569a132642e66b0b68015c",
          "parentId": "e4d5c804be55195dd9c8d472",
          "slotId": "mod_mount"
        },
        {
          "_id": "88cd5203388d526d4cb18bca",
          "_tpl": "5e56991336989c75ab4f03f6",
          "parentId": "ec5d582f9c3ac2dea04643a3",
          "slotId": "mod_handguard"
        },
        {
          "_id": "3ad9675dbf32af47c2c62b92",
          "_tpl": "5649d9a14bdc2d79388b4580",
          "parentId": "ec5d582f9c3ac2dea04643a3",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "fa13744d1b277585b87a2837",
          "_tpl": "5aa66c72e5b5b00016327c93",
          "parentId": "258962b8f6af088ee72c5a20",
          "slotId": "mod_scope"
        },
        {
          "_id": "ddac191ac671b3e1c9458ed8",
          "_tpl": "5d44069ca4b9361ebd26fc37",
          "parentId": "ac42dbaae6aee16b740cb366",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "9d093063beac1f966c7bb27e",
          "_tpl": "5c471ba12e221602b3137d76",
          "parentId": "727a1c0598b09d351d525be2",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "260ea8cb3ca1d05e45efb5f2",
          "_tpl": "5e01e9e273d8eb11426f5bc3",
          "parentId": "727a1c0598b09d351d525be2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "7e6e681aa317dd36c4c8c2a9",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "9876170312ba29d747c447e6",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "d8e41428b93b5e7ce820e629",
          "_tpl": "5e01ea19e9dc277128008c0b",
          "parentId": "260ea8cb3ca1d05e45efb5f2",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "19b58af73c946d0e9e55affa",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "f44354ced97f68bfbab9a3d6",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "ea64e1dda137ef76c26b2b21",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "aecc2c15127637f395a3b80f",
          "_tpl": "61605d88ffa6e502ac5e7eeb",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "8fcf08efaea14b048f824e41",
          "_tpl": "616554fe50224f204c1da2aa",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_scope"
        },
        {
          "_id": "7e6334d196a3ed3933668281",
          "_tpl": "5b7be4895acfc400170e2dd5",
          "parentId": "88cd5203388d526d4cb18bca",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4ecb561dec047ec7681b5744",
          "_tpl": "616554fe50224f204c1da2aa",
          "parentId": "3ad9675dbf32af47c2c62b92",
          "slotId": "mod_scope"
        },
        {
          "_id": "b03dcd5b4153c856c636087f",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "19b58af73c946d0e9e55affa",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5fa2d0e7834cdf6d68e8b0c1",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "f44354ced97f68bfbab9a3d6",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "4e10b5f7bdd5a099fe9bc795",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "ea64e1dda137ef76c26b2b21",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ae0fe15ed48408e39fad6186",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "8fcf08efaea14b048f824e41",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7e147c649bd477291a82470a",
          "_tpl": "5b057b4f5acfc4771e1bd3e9",
          "parentId": "7e6334d196a3ed3933668281",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "4a95995e1ee592de20c4400c",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "4ecb561dec047ec7681b5744",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3c1b2f50fffcb41f615498da",
          "_tpl": "5aa66be6e5b5b0214e506e97",
          "parentId": "fa13744d1b277585b87a2837",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9b63b18d07b81904c68ab0b4",
          "_tpl": "616554fe50224f204c1da2aa",
          "parentId": "fa13744d1b277585b87a2837",
          "slotId": "mod_scope_001"
        },
        {
          "_id": "10d787265cefda4fe59f9428",
          "_tpl": "616554fe50224f204c1da2aa",
          "parentId": "fa13744d1b277585b87a2837",
          "slotId": "mod_scope_002"
        },
        {
          "_id": "d2f1bfff63757e68e0446642",
          "_tpl": "616554fe50224f204c1da2aa",
          "parentId": "fa13744d1b277585b87a2837",
          "slotId": "mod_scope_003"
        },
        {
          "_id": "82b565ecff348b97c3cb2f66",
          "_tpl": "61657230d92c473c770213d7",
          "parentId": "9b63b18d07b81904c68ab0b4",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bd55cf1a4bd7a06cdf49e255",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "10d787265cefda4fe59f9428",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "98a342af27e7bbdce3e7d187",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "d2f1bfff63757e68e0446642",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667bdb010016df0b0c0d47",
      "Name": "Soviet Waffle Maker",
      "Root": "3dc457a797b6c2249b216c7a",
      "Items": [
        {
          "_id": "3dc457a797b6c2249b216c7a",
          "_tpl": "5644bd2b4bdc2d3b4c8b4572",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1aa22decfd760ac5feb93545",
          "_tpl": "59c6633186f7740cf0493bb9",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "36b70fc2184bdf689aeef363",
          "_tpl": "615d8f5dd92c473c770212ef",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1d9b971cabf3f08741094623",
          "_tpl": "5649ad3f4bdc2df8348b4585",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "09cb8a8e47e77a8b6e118726",
          "_tpl": "5649d9a14bdc2d79388b4580",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "3de358ab765aaf5af25bbb4a",
          "_tpl": "5649b1c04bdc2d16268b457c",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_stock"
        },
        {
          "_id": "b23779c83d2e8f6a83803a47",
          "_tpl": "55d481904bdc2d8c2f8b456a",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "8deb95507106ef6855005a63",
          "_tpl": "57acb6222459771ec34b5cb0",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "430ae46b74a93890e0ace3d9",
          "_tpl": "5648ac824bdc2ded0b8b457d",
          "parentId": "3dc457a797b6c2249b216c7a",
          "slotId": "mod_charge"
        },
        {
          "_id": "98fef75211d62aec1dcfa5b3",
          "_tpl": "5648b0744bdc2d363b8b4578",
          "parentId": "1aa22decfd760ac5feb93545",
          "slotId": "mod_handguard"
        },
        {
          "_id": "e8ffffbf5418c240328e16ab",
          "_tpl": "615d8f8567085e45ef1409ca",
          "parentId": "36b70fc2184bdf689aeef363",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "ef5ee48c450162deba5133fc",
          "_tpl": "6478641c19d732620e045e17",
          "parentId": "09cb8a8e47e77a8b6e118726",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "00d54f7aa907d5087cd7ba63",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "3de358ab765aaf5af25bbb4a",
          "slotId": "mod_stock"
        },
        {
          "_id": "2edc93e6f02d4c05652e5a9f",
          "_tpl": "544a3a774bdc2d3a388b4567",
          "parentId": "8deb95507106ef6855005a63",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667c1a010016df0bd19d13",
      "Name": "Toe Sniffer",
      "Root": "c1b59689e5f19330a0986929",
      "Items": [
        {
          "_id": "c1b59689e5f19330a0986929",
          "_tpl": "5fc3f2d5900b1d5091531e57",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "fb3024cd97c61c3a6784ed5a",
          "_tpl": "630767c37d50ff5e8a1ea71a",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_magazine"
        },
        {
          "_id": "e23522c0da5743e37e021a18",
          "_tpl": "5fb6567747ce63734e3fa1dc",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_sight_front",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "9693767e0ea66d23e42462b6",
          "_tpl": "5fb6564947ce63734e3fa1da",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "dc2ecf3964a653dd004c2994",
          "_tpl": "5d1b5e94d7ad1a2b865a96b0",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "2626b7ab8229d60c29b41156",
          "_tpl": "5fb655b748c711690e3a8d5a",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_stock"
        },
        {
          "_id": "b1a3cbf9a0307d49b29fe30b",
          "_tpl": "5fbbc366ca32ed67276c1557",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_barrel"
        },
        {
          "_id": "b62c6321b1ee78b0d0d1bf62",
          "_tpl": "5fbb976df9986c4cff3fe5f2",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_mount"
        },
        {
          "_id": "a9ede07ca9d088c2f691b54e",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "08a1c9b896a51d310b968f70",
          "_tpl": "5fce0f9b55375d18a253eff2",
          "parentId": "c1b59689e5f19330a0986929",
          "slotId": "mod_mount_002"
        },
        {
          "_id": "2e6c36900c2ba09f23d43514",
          "_tpl": "591af10186f774139d495f0e",
          "parentId": "2626b7ab8229d60c29b41156",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "eea4afef933d32831449b6c0",
          "_tpl": "5a32a064c4a28200741e22de",
          "parentId": "b1a3cbf9a0307d49b29fe30b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "49e5eb06302c6728fa89e86e",
          "_tpl": "619386379fb0c665d5490dbe",
          "parentId": "b62c6321b1ee78b0d0d1bf62",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "8db98d9cde71149e04047432",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "a9ede07ca9d088c2f691b54e",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "dc18fc681881c4dcc86fed07",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "08a1c9b896a51d310b968f70",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66667c99010016df0b596e00",
      "Name": "Keep It 100",
      "Root": "00032862fe5ecb64fe105ae3",
      "Items": [
        {
          "_id": "00032862fe5ecb64fe105ae3",
          "_tpl": "5c488a752e221602b412af63",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "16ac9750e76aa701cd4dae39",
          "_tpl": "5c48a2c22e221602b313fb6c",
          "parentId": "00032862fe5ecb64fe105ae3",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "75011f74b130fe0ba9816b1a",
          "_tpl": "5c6592372e221600133e47d7",
          "parentId": "00032862fe5ecb64fe105ae3",
          "slotId": "mod_magazine"
        },
        {
          "_id": "6ed184ee583b87c431a3c6cf",
          "_tpl": "5c48a14f2e2216152006edd7",
          "parentId": "00032862fe5ecb64fe105ae3",
          "slotId": "mod_handguard"
        },
        {
          "_id": "6ac5bbdbe00ae582f7e256e0",
          "_tpl": "5c48a2852e221602b21d5923",
          "parentId": "00032862fe5ecb64fe105ae3",
          "slotId": "mod_barrel"
        },
        {
          "_id": "f34c44bd6e7cc3cc167efa98",
          "_tpl": "5ae30bad5acfc400185c2dc4",
          "parentId": "00032862fe5ecb64fe105ae3",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4b3a4e301b2ce9b0e24b69b9",
          "_tpl": "56ea6fafd2720b844b8b4593",
          "parentId": "6ac5bbdbe00ae582f7e256e0",
          "slotId": "mod_muzzle"
        }
      ]
    },
    {
      "Id": "6690564a010016df0bb996c9",
      "Name": "The Heretic",
      "Root": "9853f433223ea5ffab4ed7b8",
      "Items": [
        {
          "_id": "9853f433223ea5ffab4ed7b8",
          "_tpl": "57c44b372459772d2b39b8ce",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "1e0dd1a947a46440da1e4d14",
          "_tpl": "57c44dd02459772d2e0ae249",
          "parentId": "9853f433223ea5ffab4ed7b8",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "9faf743451a8eeb07ad7822c",
          "_tpl": "57c44f4f2459772d2c627113",
          "parentId": "9853f433223ea5ffab4ed7b8",
          "slotId": "mod_reciever"
        },
        {
          "_id": "05a6390030d2f2d189ca5f75",
          "_tpl": "5a9e81fba2750c00164f6b11",
          "parentId": "9853f433223ea5ffab4ed7b8",
          "slotId": "mod_magazine"
        },
        {
          "_id": "116e29eecd252b4cc5196f9a",
          "_tpl": "5a69a2ed8dc32e000d46d1f1",
          "parentId": "9853f433223ea5ffab4ed7b8",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "ff110eb175e285c789fc94c5",
          "_tpl": "5dff8db859400025ea5150d4",
          "parentId": "9853f433223ea5ffab4ed7b8",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "88f98c3a3feec9df10357d35",
          "_tpl": "57c44e7b2459772d28133248",
          "parentId": "1e0dd1a947a46440da1e4d14",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "bccc756cd061c2c91fefd3bd",
          "_tpl": "59eb7ebe86f7740b373438ce",
          "parentId": "1e0dd1a947a46440da1e4d14",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "2a1abf58f5e05f0f4851c3e3",
          "_tpl": "5aa66c72e5b5b00016327c93",
          "parentId": "ff110eb175e285c789fc94c5",
          "slotId": "mod_scope"
        },
        {
          "_id": "cd88f7707399f3a0fc5d2c7c",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "bccc756cd061c2c91fefd3bd",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ba0d46ec82cfcd41aaf14410",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "bccc756cd061c2c91fefd3bd",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "255269f5a3b535ea4692bd3f",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "bccc756cd061c2c91fefd3bd",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "34cfcea62292cb55fe255f25",
          "_tpl": "5aa66be6e5b5b0214e506e97",
          "parentId": "2a1abf58f5e05f0f4851c3e3",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "282c2e1bd909b57a49ce69a0",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "2a1abf58f5e05f0f4851c3e3",
          "slotId": "mod_scope_002",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "4b80c6dfaca975361244d519",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "2a1abf58f5e05f0f4851c3e3",
          "slotId": "mod_scope_003",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905701010016df0b385307",
      "Name": "Collateral Damage",
      "Root": "4887876ceb9f6e3cb2a73f0d",
      "Items": [
        {
          "_id": "4887876ceb9f6e3cb2a73f0d",
          "_tpl": "628a60ae6b1d481ff772e9c8",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "c0f9f5574af571aee48cd9f4",
          "_tpl": "628a83c29179c324ed269508",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "270e588937fedccb1759c23f",
          "_tpl": "59bffc1f86f77435b128b872",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "dba3b5f67a98cb3b3d653a33",
          "_tpl": "5a0071d486f77404e23a12b2",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "93285b577e300fa9717ee800",
          "_tpl": "628a665a86cbd9750d2ff5e5",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_reciever"
        },
        {
          "_id": "d0f46d70b8e8a343dac8facf",
          "_tpl": "5649d9a14bdc2d79388b4580",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_sight_rear",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "74709ee6a9bbea3eeed41fc4",
          "_tpl": "59e89d0986f77427600d226e",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_stock_000"
        },
        {
          "_id": "30b86072db2d6b9cba3beac0",
          "_tpl": "5cbdc23eae9215001136a407",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_magazine"
        },
        {
          "_id": "3c609f0f95c8fa6a009a501b",
          "_tpl": "57acb6222459771ec34b5cb0",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "cba4ce2ed3d06c773b548d1a",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "4887876ceb9f6e3cb2a73f0d",
          "slotId": "mod_charge"
        },
        {
          "_id": "1a82687000afa8d0143c2a79",
          "_tpl": "61714b2467085e45ef140b2c",
          "parentId": "c0f9f5574af571aee48cd9f4",
          "slotId": "mod_tactical_000"
        },
        {
          "_id": "42f1ac9315eab682894c38ef",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "c0f9f5574af571aee48cd9f4",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "e9b75d451ba1e466c9f6e3d0",
          "_tpl": "5b7be47f5acfc400170e2dd2",
          "parentId": "c0f9f5574af571aee48cd9f4",
          "slotId": "mod_mount_001"
        },
        {
          "_id": "540622503c2d3a136dcbf951",
          "_tpl": "57cffce524597763b31685d8",
          "parentId": "c0f9f5574af571aee48cd9f4",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "e00b0a3d22b0d7f48caea904",
          "_tpl": "59bffbb386f77435b379b9c2",
          "parentId": "270e588937fedccb1759c23f",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "217bf3dc2cfba9d91ed4805b",
          "_tpl": "615d8d878004cc50514c3233",
          "parentId": "d0f46d70b8e8a343dac8facf",
          "slotId": "mod_scope"
        },
        {
          "_id": "3976bbba71089ce6f087586f",
          "_tpl": "5a0c59791526d8dba737bba7",
          "parentId": "74709ee6a9bbea3eeed41fc4",
          "slotId": "mod_stock"
        },
        {
          "_id": "379a6db96e98096e6cacc3c9",
          "_tpl": "5dff77c759400025ea5150cf",
          "parentId": "3c609f0f95c8fa6a009a501b",
          "slotId": "mod_scope"
        },
        {
          "_id": "8a4feb8ddac9f458a5f13781",
          "_tpl": "58d399e486f77442e0016fe7",
          "parentId": "1a82687000afa8d0143c2a79",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "740c7d16c179b70290d6f9ab",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "42f1ac9315eab682894c38ef",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "b289d2deebf07c03b3c729f7",
          "_tpl": "5b3a337e5acfc4704b4a19a0",
          "parentId": "e9b75d451ba1e466c9f6e3d0",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "ef328c5d78a4463be5a36616",
          "_tpl": "616442e4faa1272e43152193",
          "parentId": "217bf3dc2cfba9d91ed4805b",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "a5f3eca2f2eeded8180bb602",
          "_tpl": "5dff772da3651922b360bf91",
          "parentId": "379a6db96e98096e6cacc3c9",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905769010016df0b0c73cd",
      "Name": "The Dagger",
      "Root": "205be6ccf3b55fbfbbfbdd00",
      "Items": [
        {
          "_id": "205be6ccf3b55fbfbbfbdd00",
          "_tpl": "5a38e6bac4a2826c6e06d79b",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "70b043710708cfe99389831d",
          "_tpl": "5c6161fb2e221600113fbde5",
          "parentId": "205be6ccf3b55fbfbbfbdd00",
          "slotId": "mod_magazine"
        },
        {
          "_id": "a3ab2ec0af2a3055e249388b",
          "_tpl": "5c99f3592e221644fc633070",
          "parentId": "205be6ccf3b55fbfbbfbdd00",
          "slotId": "mod_stock"
        },
        {
          "_id": "720da6b234e1b8fc857f7209",
          "_tpl": "5c6162682e22160010261a2b",
          "parentId": "205be6ccf3b55fbfbbfbdd00",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "b040fb050244723726fc9c2c",
          "_tpl": "5bbde409d4351e003562b036",
          "parentId": "a3ab2ec0af2a3055e249388b",
          "slotId": "mod_stock"
        },
        {
          "_id": "ffff3c610f61f6a903af20ec",
          "_tpl": "5c61627a2e22160012542c55",
          "parentId": "720da6b234e1b8fc857f7209",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "9396a3f48a9e1ec4ca024721",
          "_tpl": "5aa66c72e5b5b00016327c93",
          "parentId": "ffff3c610f61f6a903af20ec",
          "slotId": "mod_scope"
        },
        {
          "_id": "5a4fb5d2c83a9ef49008da4b",
          "_tpl": "5aa66be6e5b5b0214e506e97",
          "parentId": "9396a3f48a9e1ec4ca024721",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "95f0368e9267cdca77144d6a",
          "_tpl": "61605d88ffa6e502ac5e7eeb",
          "parentId": "9396a3f48a9e1ec4ca024721",
          "slotId": "mod_scope_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "f99ff9e0f9ad6e35ee99a6c6",
          "_tpl": "615d8d878004cc50514c3233",
          "parentId": "9396a3f48a9e1ec4ca024721",
          "slotId": "mod_scope_002"
        },
        {
          "_id": "edb1702c5bf8707db1fc287a",
          "_tpl": "615d8d878004cc50514c3233",
          "parentId": "9396a3f48a9e1ec4ca024721",
          "slotId": "mod_scope_003"
        },
        {
          "_id": "dbdbebd4567ada4092590631",
          "_tpl": "616442e4faa1272e43152193",
          "parentId": "f99ff9e0f9ad6e35ee99a6c6",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "24a2141aa3f7ce293a6a032e",
          "_tpl": "616442e4faa1272e43152193",
          "parentId": "edb1702c5bf8707db1fc287a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905813010016df0b27b89b",
      "Name": "The Predator Mk2",
      "Root": "735b93060a68b285aba7072a",
      "Items": [
        {
          "_id": "735b93060a68b285aba7072a",
          "_tpl": "583990e32459771419544dd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "56b4cd095886c6977adf7e75",
          "_tpl": "5f6341043ada5942720e2dc5",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "20ba271d9625ebbbed6c40a9",
          "_tpl": "59ecc28286f7746d7a68aa8c",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_stock"
        },
        {
          "_id": "57e3cb32b19e9162255d70f3",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_charge"
        },
        {
          "_id": "42dfff96a8b9143f98434b01",
          "_tpl": "5bed625c0db834001c062946",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_magazine"
        },
        {
          "_id": "008571244d83f14f5d346747",
          "_tpl": "564caa3d4bdc2d17108b458e",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "177bea0b0186e79f180c9842",
          "_tpl": "57dc334d245977597164366f",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_reciever"
        },
        {
          "_id": "5c7bfa3d9ecb17d5d9d7bcff",
          "_tpl": "591ee00d86f774592f7b841e",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_mount_000"
        },
        {
          "_id": "1aaec0fa60f935135dfa57ee",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "735b93060a68b285aba7072a",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "a9da288637901334444a5525",
          "_tpl": "5b222d405acfc400153af4fe",
          "parentId": "20ba271d9625ebbbed6c40a9",
          "slotId": "mod_stock"
        },
        {
          "_id": "9594426c44eecff872f9772e",
          "_tpl": "59f9d81586f7744c7506ee62",
          "parentId": "5c7bfa3d9ecb17d5d9d7bcff",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "d0739d59237a18ac93722112",
          "_tpl": "5d10b49bd7ad1a1a560708b0",
          "parentId": "5c7bfa3d9ecb17d5d9d7bcff",
          "slotId": "mod_tactical",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "a5abde4f782dbab6ce9059b3",
          "_tpl": "5d15ce51d7ad1a1eff619092",
          "parentId": "1aaec0fa60f935135dfa57ee",
          "slotId": "mod_handguard"
        },
        {
          "_id": "f84eb55a6cc5901b9690ba25",
          "_tpl": "5c1cd46f2e22164bef5cfedb",
          "parentId": "a5abde4f782dbab6ce9059b3",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "73b8eaa746ce06a5385d3d31",
          "_tpl": "5c5952732e2216398b5abda2",
          "parentId": "a5abde4f782dbab6ce9059b3",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "6c8c7dcd973c7d4c34503261",
          "_tpl": "5c5952732e2216398b5abda2",
          "parentId": "a5abde4f782dbab6ce9059b3",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "83287fd7becae7c21319fc4b",
          "_tpl": "5c5952732e2216398b5abda2",
          "parentId": "a5abde4f782dbab6ce9059b3",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "e84cd609c2159409e432cf54",
          "_tpl": "5c5952732e2216398b5abda2",
          "parentId": "a5abde4f782dbab6ce9059b3",
          "slotId": "mod_tactical_003",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        }
      ]
    },
    {
      "Id": "66905910010016df0b7cdd21",
      "Name": "Destination Death",
      "Root": "e5ce0f891ebe450903e75e17",
      "Items": [
        {
          "_id": "e5ce0f891ebe450903e75e17",
          "_tpl": "583990e32459771419544dd2",
          "upd": {
            "Repairable": {
              "MaxDurability": 100,
              "Durability": 100
            },
            "Foldable": {
              "Folded": false
            },
            "FireMode": {
              "FireMode": "single"
            }
          }
        },
        {
          "_id": "255d162407156f61b724a3f2",
          "_tpl": "5e2192a498a36665e8337386",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_pistol_grip"
        },
        {
          "_id": "973fc82836e917ca5b6155f6",
          "_tpl": "59ecc28286f7746d7a68aa8c",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_stock"
        },
        {
          "_id": "127c74906fc327f85a1a0053",
          "_tpl": "6130ca3fd92c473c77020dbd",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_charge"
        },
        {
          "_id": "40e08aea59d0d1ed189d624d",
          "_tpl": "55d481904bdc2d8c2f8b456a",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_magazine"
        },
        {
          "_id": "923d718426904791977cc59b",
          "_tpl": "59bffc1f86f77435b128b872",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "1626422d1e6a243583ea12dd",
          "_tpl": "655cb6b5d680a544f30607fa",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_reciever"
        },
        {
          "_id": "0441dfcd74e8d16bfa62e0d5",
          "_tpl": "59d36a0086f7747e673f3946",
          "parentId": "e5ce0f891ebe450903e75e17",
          "slotId": "mod_gas_block"
        },
        {
          "_id": "79d1265dc491c83d81884d9b",
          "_tpl": "59bffbb386f77435b379b9c2",
          "parentId": "923d718426904791977cc59b",
          "slotId": "mod_muzzle"
        },
        {
          "_id": "3a24abd188c1e84313f49156",
          "_tpl": "5aa66c72e5b5b00016327c93",
          "parentId": "1626422d1e6a243583ea12dd",
          "slotId": "mod_scope"
        },
        {
          "_id": "56620a2965fe024040b65d42",
          "_tpl": "5d15ce51d7ad1a1eff619092",
          "parentId": "0441dfcd74e8d16bfa62e0d5",
          "slotId": "mod_handguard"
        },
        {
          "_id": "fe4cd8dec72da931fc6edae6",
          "_tpl": "62850c28da09541f43158cca",
          "parentId": "3a24abd188c1e84313f49156",
          "slotId": "mod_scope_000",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "c279e8bd728624617bcba0e6",
          "_tpl": "61605d88ffa6e502ac5e7eeb",
          "parentId": "3a24abd188c1e84313f49156",
          "slotId": "mod_scope_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "e9d4791ed0a29c1320ed014d",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "3a24abd188c1e84313f49156",
          "slotId": "mod_scope_002",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "366921991b7ba5bc9cf0fb15",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "3a24abd188c1e84313f49156",
          "slotId": "mod_scope_003",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        },
        {
          "_id": "7ab1a55477ae87a94eb2a586",
          "_tpl": "5c1bc7752e221602b1779b34",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_foregrip"
        },
        {
          "_id": "276e64e36d6da8f124b791d0",
          "_tpl": "57fd23e32459772d0805bcf1",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_tactical_000",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "5116d4e93eab713884f491c5",
          "_tpl": "61605d88ffa6e502ac5e7eeb",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_tactical_001",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "d047f1cac52111e7847f8fae",
          "_tpl": "57fd23e32459772d0805bcf1",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_tactical_002",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "d485c2c14a5ee0ba1b28d84a",
          "_tpl": "5cc9c20cd7f00c001336c65d",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_tactical_003",
          "upd": {
            "Light": {
              "IsActive": true,
              "SelectedMode": 0
            }
          }
        },
        {
          "_id": "209f7be3a6932eb2d937a84a",
          "_tpl": "5649a2464bdc2d91118b45a8",
          "parentId": "56620a2965fe024040b65d42",
          "slotId": "mod_scope"
        },
        {
          "_id": "f015ce68e267902556749a09",
          "_tpl": "57ae0171245977343c27bfcf",
          "parentId": "209f7be3a6932eb2d937a84a",
          "slotId": "mod_scope",
          "upd": {
            "Sight": {
              "ScopesCurrentCalibPointIndexes": [
                0
              ],
              "ScopesSelectedModes": [
                0
              ],
              "SelectedScope": 0
            }
          }
        }
      ]
    }
  ];
}
