export class Medical {
  
  public parent = "medical";
  //public price_generate = true;
  
  public rarities = [
    "_uncommon",
    "_uncommon",
    "_uncommon",
    "_uncommon",
    "_uncommon",
    "_uncommon",
    "_uncommon"
  ]

  public reward_rolls = [5, 5, 3, 4, 4, 3, 2] // Number of times rolled for each rarity (MAYBE)
  public rewards = [
    [ // Light Bleeds
      '544fb25a4bdc2dfb738b4567', // Aseptic bandage
      '5751a25924597722c463c472', // Army bandage
    ],
    [ // Heavy Bleeds
      '5e831507ea0a7c419c2f9bd9', // Esmarch tourniquet
      '60098af40accd37ef2175f27', // CAT hemostatic tourniquet
      '5e8488fa988a8701445df1e4', // CALOK-B hemostatic applicator
      
    ],
    [ // Fractures 
      '544fb3364bdc2d34748b456a', // Immobilizing splint
      '5af0454c86f7746bf20992e8', // Aluminum splint
      
    ], 
    [ // PainKiller
      '544fb37f4bdc2dee738b4567', // Analgin painkillers
      '544fb37f4bdc2dee738b4567', // Analgin painkillers
      '544fb37f4bdc2dee738b4567', // Analgin painkillers
      '590c695186f7741e566b64a2', // Augmentin antibiotic pills
      '5755383e24597772cb798966', // Vaseline balm
      '5af0548586f7743a532b7e99', // Ibuprofen painkillers
      '5751a89d24597722aa0e8db0', // Golden Star balm
    ],
    [ // Headling Kits
      '5755356824597772cb798962', // AI-2 medkit
      '5755356824597772cb798962', // AI-2 medkit
      '590c661e86f7741e566b646a', // Car first aid kit
      '544fb45d4bdc2dee738b4568', // Salewa first aid kit
    ],
    [ // Advanced Healing Kits
      '544fb45d4bdc2dee738b4568', // Salewa first aid kit
      '544fb45d4bdc2dee738b4568', // Salewa first aid kit
      '590c678286f77426c9660122', // IFAK individual first aid kit
      '590c678286f77426c9660122', // IFAK individual first aid kit
      '590c678286f77426c9660122', // IFAK individual first aid kit
      '60098ad7c2240c0fe85c570a', // AFAK tactical individual first aid kit
      '60098ad7c2240c0fe85c570a', // AFAK tactical individual first aid kit
      '590c657e86f77412b013051d', // Grizzly medical kit
    ],
    [ // Reapiratory Kits
      '5d02778e86f774203e7dedbe', // CMS surgical kit
      '5d02797c86f774203f38e30a', // Surv12 field surgical kit
    ]

  ]
}
