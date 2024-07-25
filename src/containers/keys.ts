export class Keys {

  public parent = "key";
  public price_generate = true;
  
  public rarities = [
    "_extremely_rare", 
    "_rare", 
    "_uncommon", 
    "_common"
  ]

  // 0.2.0 Keys Total = 143 - 1 broken key
  // 0.2.1 Keys Total = 216 - 1 broken key

  

  public rewards = [
    [ // Extremely Rare
      "5d80c60f86f77440373c4ece", // RB-BK
      "5d80c62a86f7744036212b3f", // RB-VO
      "63a3a93f8a56922e82001f5d", // Abandoned Marked Key
      "5780cf7f2459777de4559322", // 314 Dorms Marked Key
      "64ccc25f95763a1ae376e447", // Mysterious Room Marked Key
      "63a39fc0af870e651d58e6ae", // Chek 15 key
      "5ede7a8229445733cb4c18e2", // RB-PKPM Key
      "64d4b23dc1b37504b41ac2b6", // Rusted bloody key
    ], 
    [ // Rare
      "664d3db6db5dea2bad286955", // Shatun's hideout
      "664d3dd590294949fe2d81b7", // Grumpy's hideout key
      "664d3ddfdda2e85aca370d75", // Voron's hideout key
      "664d3de85f2355673b09aed5", // Leon's hideout key
      "5c1f79a086f7746ed066fb8f", // TerraGroup Labs arsenal storage room key
      "63a397d3af870e651d58e65b", // Car dealership closed section key
      "5e42c71586f7747f245e1343", // ULTRA medical storage key
      "62987dfc402c7f69bf010923", // Shared bedroom marked key
      "5448ba0b4bdc2d02308b456c", // Factory emergency exit key
      "5ad5d7d286f77450166e0a89", // Kiba Arms outer door key
      "63a71e922b25f7513905ca20", // Concordia apartment 64 key
      "5d08d21286f774736e7c94c3", // Shturman's stash key
      "63a39f6e64283b5e9c56b289", // Iron gate key
      "5eff09cd30a7dc22fd1ddfed", // Health Resort office key with a blue tape
      "6398fd8ad3de3849057f5128", // Backup hideout key
    ], 
    [ // Uncommon
      "5c1e2d1f86f77431e9280bee", // TerraGroup Labs weapon testing area key
      "5ad7247386f7747487619dc3", // Goshan cash register key
      "61aa5b7db225ac1ead7957c1", // USEC cottage first safe key
      "64ccc246ff54fb38131acf29", // X-ray room key
      "61aa5ba8018e9821b7368da9", // USEC cottage second safe key
      "5c1e2a1e86f77431ea0ea84c", // TerraGroup Labs manager's office room key
      "5a0eb6ac86f7743124037a28", // Cottage back door key
      "64ce572331dd890873175115", // Aspect company office key
      "63a39f08cd6db0635c197600", // Pinewood hotel room 215 key
      "5ad5db3786f7743568421cce", // EMERCOM medical unit key
      "63a399193901f439517cafb6", // Car dealership director's office room key
      "5ad5d64486f774079b080af8", // NecrusPharm pharmacy key
      "63a71e86b7f4570d3a293169", // Concordia apartment 64 office room key
      "64ccc24de61ea448b507d34d", // TerraGroup security armory key
      "64ccc1fe088064307e14a6f7", // Beluga restaurant director key
      "5d80cbd886f77470855c26c2", // RB-MP13 key
      "5d80cbd886f77470855c26c2", // RB-MP13 key
      "63a39c7964283b5e9c56b280", // Concordia security room key
      "5d8e3ecc86f774414c78d05e", // RB-GN key
      "63a71ed21031ac76fe773c7f", // Financial institution small office key
      "5d80c6fc86f774403a401e3c", // RB-TB key
      "5d80c8f586f77440373c4ed0", // RB-OP key
      "62987cb98081af308d7558c8", // Conference room key
      "5d80cb5686f77440545d1286", // RB-PSV1 key
      "5d95d6be86f77424444eb3a7", // RB-PSV2 key
      "61a64492ba05ef10d62adcc1", // Rogue USEC stash key
      "5d8e15b686f774445103b190", // HEP station storage room key
      "61aa81fcb225ac1ead7957c3", // Rogue USEC workshop key
      "63a71e781031ac76fe773c7d", // Concordia apartment 8 room key
      "5d80cb3886f77440556dbf09", // RB-PSP1 key
      "5d80ca9086f774403a401e40", // RB-MP21 key
      "62987e26a77ec735f90a2995", // Water treatment plant storage room key
      "5a0f006986f7741ffd2fe484", // Weather station safe key
      "5a0448bc86f774736f14efa8", // Key to the closed premises of the Health Resort
      "63a39e1d234195315d4020bd", // Primorsky 46-48 skybridge key
      //"6391fcf5744e45201147080f", // Primorsky Ave apartment key
      "5d80ccdd86f77474f7575e02", // RB-ORB2 key
      "5d947d4e86f774447b415895", // RB-KSM key
      "5d8e0e0e86f774321140eb56", // RB-KPRL key
      "64ccc1ec1779ad6ba200a137", // Concordia apartment 8 home cinema key
      "5d9f1fa686f774726974a992", // RB-ST key
      "64ccc1d4a0f13c24561edf27", // Concordia apartment 34 room key
      "5a0f0f5886f7741c4e32a472", // Health Resort management warehouse safe key
      "5a0f08bc86f77478f33b84c2", // Health Resort management office safe key
      "5a0ea79b86f7741d4a35298e", // Health Resort universal utility room key
      "5a13f35286f77413ef1436b0", // Health Resort east wing room 226 key
      "5a145d7b86f7744cbb6f4a13", // Health Resort east wing room 308 key
      "5a0ea64786f7741707720468", // Health Resort east wing office room 107 key
      "5a144bdb86f7741d374bbde0", // Health Resort east wing room 205 key
      "5a0ee4b586f7743698200d22", // Health Resort east wing room 206 key
      "5a0ee72c86f77436955d3435", // Health Resort east wing room 213 key
      "5a0ee76686f7743698200d5c", // Health Resort east wing room 216 key
      "5a13f24186f77410e57c5626", // Health Resort east wing room 222 key
      "5a145d4786f7744cbb6f4a12", // Health Resort east wing room 306 key
      "5a0eec9686f77402ac5c39f2", // Health Resort east wing room 310 key
      "5a0eecf686f7740350630097", // Health Resort east wing room 313 key
      "5a0eed4386f77405112912aa", // Health Resort east wing room 314 key
      "5a145ebb86f77458f1796f05", // Health Resort east wing room 316 key
      "5a0eee1486f77402aa773226", // Health Resort east wing room 328 key
      "5a0dc45586f7742f6b0b73e3", // Health Resort west wing office room 104 key
      "5a0dc95c86f77452440fc675", // Health Resort west wing office room 112 key
      "5a144dfd86f77445cb5a0982", // Health Resort west wing room 203 key
      "5a0ec6d286f7742c0b518fb5", // Health Resort west wing room 205 key
      "5a0ee30786f774023b6ee08f", // Health Resort west wing room 216 key
      "5a13eebd86f7746fd639aa93", // Health Resort west wing room 218 key
      "5a13ef0686f7746e5a411744", // Health Resort west wing room 219 key
      "5a0ee34586f774023b6ee092", // Health Resort west wing room 220 key
      "5a0ee37f86f774023657a86f", // Health Resort west wing room 221 key
      "5a1452ee86f7746f33111763", // Health Resort west wing room 222 key
      "5a13ef7e86f7741290491063", // Health Resort west wing room 301 key
      "5a0eeb1a86f774688b70aa5c", // Health Resort west wing room 303 key
      "5a13f46386f7741dd7384b04", // Health Resort west wing room 306 key
      "5a0eff2986f7741fd654e684", // Health Resort west wing room 321 safe key
      "63a39cb1c9b3aa4b61683ee2", // Construction site bunkhouse key
      "5d80c93086f7744036212b41", // RB-MP11 key
      "63a39ce4cd6db0635c1975fa", // Supply department director's office key
      "5da5cdcd86f774529238fb9b", // RB-RH key
      "5d80c95986f77440351beef3", // RB-MP12 key
      "5d80c66d86f774405611c7d6", // RB-AO key
      "63a39fdf1e21260da44a0256", // Cargo container mesh door key
      "63a39fd1c9b3aa4b61683efb", // Stair landing key
      "63a71eb5b7f4570d3a29316b", // Primorsky 48 apartment key
      "5d95d6fa86f77424484aa5e9", // RB-PSP2 key
      "5d80cab086f77440535be201", // RB-MP22 key
      "5d80c88d86f77440556dbf07", // RB-AM key
      "5a0f068686f7745b0d4ea242", // Cottage safe key
      "62987c658081af308d7558c6", // Radar station commandant room key
      "5780cf722459777a5108b9a1", // Dorm room 308 key
      "5d80cd1a86f77402aa362f42", // RB-ORB3 key
      "5d947d3886f774447b415893", // RB-SMP key
      "5d80ccac86f77470841ff452", // RB-ORB1 key
      "5913877a86f774432f15d444", // Gas station storage room key
      "59387a4986f77401cc236e62", // Dorm room 114 key
      "5addaffe86f77470b455f900", // Kiba Arms inner grate door key
      "6582dbf0b8d7830efc45016f", // Relaxation room key
      "6582dc5740562727a654ebb1", // Real estate agency office room key
      "5d80c6c586f77440351beef1", // RB-OB key
      "63a39667c9b3aa4b61683e98", // Financial institution office key
      "5448ba0b4bdc2d02308b456c", // Factory emergency exit key
      "64ccc1f4ff54fb38131acf27", // Concordia apartment 63 room key
      "5ad5cfbd86f7742c825d6104", // OLI logistics department office key
      "62987da96188c076bc0d8c51", // Operating room key
      "64ccc206793ca11c8f450a38", // TerraGroup meeting room key
      "5da743f586f7744014504f72", // USEC stash key
      "5ad7217186f7746744498875", // OLI cash register key
      "61a64428a8c6aa1b795f0ba1", // Convenience store storage room key
      "5a0f045e86f7745b0f0d0e42", // Gas station safe key
      "66265d7be65f224b2e17c6aa", // USEC cottage room key
      "5d80c78786f774403a401e3e", // RB-AK key
    ], 
    [ // Common
      "5780d0532459777a5108b9a2", // Tarcone Director's office key
      "61aa5b518f5e7a39b41416e2", // Merin car trunk key
      "5d8e0db586f7744450412a42", // RB-KORL key
      "5913915886f774123603c392", // Military checkpoint key
      "5780d0652459777df90dcb74", // Gas station office key
      "62a9cb937377a65d7b070cef", // Rogue USEC barrack key
      "64ccc2111779ad6ba200a139", // Tarbank cash register department key
      "591382d986f774465a6413a7", // Dorm room 105 key
      "61a6444b8c141d68246e2d2f", // Hillside house key
      "6582dc4b6ba9e979af6b79f4", // MVD academy entrance hall guard room key
      "62a09ec84f842e1bd12da3f2", // Missam forklift key
      "63a39c69af870e651d58e6aa", // Store manager's key
      "63a39dfe3901f439517cafba", // Zmeisky 3 apartment 8 key
      "63a39df18a56922e82001f25", // Zmeisky 5 apartment 20 key
      "57a349b2245977762b199ec7", // Pumping station front door key
      "593858c486f774253a24cb52", // Pumping station back door key
      "591ae8f986f77406f854be45", // Yotota car key
      "5780d07a2459777de4559324", // Portable cabin key
      "6582dbe43a2e5248357dbe9a", // "Negotiation" room key
      "5a0dc45586f7742f6b0b73e3", // SMW car key
      "64ccc268c41e91416064ebc7", // PE teacher's office key
      "59136f6f86f774447a1ed173", // Folding car key
      "59136a4486f774447a1ed172", // Dorm guard desk key
      "5938994586f774523a425196", // Dorm room 103 key
      "591383f186f7744a4c5edcf3", // Dorm room 104 key
      "591382d986f774465a6413a7", // Dorm room 104 key
      "5914578086f774123569ffa4", // Dorm room 108 key
      "59136e1e86f774432f15d133", // Dorm room 110 key
      "5672c92d4bdc2d180f8b4567", // Dorm room 118 key
      "5938504186f7740991483f30", // Dorm room 203 key
      "59148c8a86f774197930e983", // Dorm room 204 key
      "5938603e86f77435642354f4", // Dorm room 206 key
      "5780cf942459777df90dcb72", // Dorm room 214 key
      "5780cf9e2459777df90dcb73", // Dorm room 218 key
      "5780cfa52459777dfb276eb1", // Dorm room 220 key
      "593aa4be86f77457f56379f8", // Dorm room 303 key
      "5780cda02459777b272ede61", // Dorm room 306 key
      "5780cf722459777a5108b9a1", // Dorm room 308 key
      "5780cf692459777de4559321", // Dorm room 315 key
      "5da46e3886f774653b7a83fe", // RB-RS key
      "5ad7242b86f7740a6a3abd43", // IDEA cash register key
      "5a0ec70e86f7742c0b518fba", // Health Resort west wing room 207 key
      "5a0eeb8e86f77461257ed71a", // Health Resort west wing room 309 key
      "5a0ea69f86f7741cd5406619", // Health Resort east wing office room 108 key
      "5a0ee62286f774369454a7ac", // Health Resort east wing room 209 key
      "5a0eedb386f77403506300be", // Health Resort east wing room 322 key
      "5a0eebed86f77461230ddb3d", // Health Resort west wing room 325 key
      "5a13ee1986f774794d4c14cd", // Health Resort west wing room 323 key
      "63a39e49cd6db0635c1975fc", // Archive room key
      "63a39f18c2d53c2c6839c1d3", // Pinewood hotel room 206 key
      "5ad5ccd186f774446d5706e9", // OLI administration office key
      "5938144586f77473c2087145", // Portable bunkhouse key
      "5937ee6486f77408994ba448", // Machinery key
      "5ad5d49886f77455f9731921", // Power substation utility cabin key
      "658199972dc4e60f6d556a2f", // Underground parking utility room key
      "5d80cb8786f774405611c7d9", // RB-PP key
      "5ad5d20586f77449be26d877", // OLI outlet utility room key
      "6581998038c79576a2569e11", // Unity Credit Bank cash register key
      "5913651986f774432f15d132", // VAZ car key
      "5a0f075686f7745bcc42ee12", // Store safe key
      "5913611c86f77479e0084092", // Trailer park portable cabin key
      "59148f8286f7741b951ea113", // Weapon safe key
      "61aa5aed32a4743c3453d319", // Police truck cabin key
      "591afe0186f77431bd616a11", // ZB-014 key
    ]
  ]
}
