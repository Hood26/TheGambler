export class Helmets {

  public parent = "helmet";
  public is_preset = true;
  public price_generate = true;
  public calculate_preset_prices = false;
  
  public rarities = [
    "_extremely_rare", 
    "_rare", 
    "_uncommon", 
    "_common"
  ]

  // Some Helmets missing from this list are incompatible with SOME headsets, fix later...
  public headset_incompatible_helmets = [
    '5df8a58286f77412631087ed', // TSh-4M-L soft tank crew helmet
    '59e7711e86f7746cae05fbe1', // Kolpak-1S riot helmet
    '5c0d2727d174af02a012cf58', // PSh-97 DJETA riot helmet
    '5c08f87c0db8340019124324', // ShPM Firefighter helmet
    '59ef13ca86f77445fd0e2483', // Jack-o'-lantern tactical pumpkin helmet
    '5645bc214bdc2d363b8b4571', // FORT Kiver-M bulletproof helmet
    '5aa7d193e5b5b000171d063f', // SSSh-94 SFERA-S helmet
    '5b4329f05acfc47a86086aa1', // DevTac Ronin Respirator
    '66bdc28a0b603c26902b2011', // DevTac Ronin ballistic helmet
    '5aa7e4a4e5b5b000137b76f2', // ZSh-1-2M helmet (Black cover)
    '5aa7e454e5b5b0214e506fa2', // ZSh-1-2M helmet (Olive Drab)
    '5d6d3716a4b9361bc8618872', // BNTI LShZ-2DTM helmet (Black)
    '5c091a4e0db834001d5addc8', // Maska-1SCh bulletproof helmet (Olive Drab)
    '5c0e874186f7745dc7616606', // Maska-1SCh bulletproof helmet (Killa Edition)
    '5aa7e276e5b5b000171d0647', // Altyn bulletproof helmet (Olive Drab)
    '5f60c74e3b85f6263c145586', // Rys-T bulletproof helmet (Black)
    '5ca20ee186f774799474abc2', // Vulkan-5 LShZ-5 bulletproof helmet (Black)
  ];

  // tpls that don't make sense to calculate prices for
  public presets_invalid_tpls = [
    '657f9897f4c82973640b235e', // Hybrid composite materials
  ]

  // 2d array of rewards by sorted rarity
  public presets = [
    [ // _extremely_rare
      {
        Items: [
          {
						"_id": "6822d84eddc96b68ac0512ba",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 4,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d84eddc96b68ac0512bc",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "6822d84eddc96b68ac0512ba",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d84eddc96b68ac0512bd",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "6822d84eddc96b68ac0512ba",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9a5185ce152ec038d12",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d84eddc96b68ac0512ba",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d99c185ce152ec038d0c",
						"_tpl": "5c11046cd174af02a012e42b",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d9a5185ce152ec038d12",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d98f185ce152ec038d03",
						"_tpl": "5c110624d174af029e69734c",
						"parentId": "6822d99c185ce152ec038d0c",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d866ddc96b68ac0512be",
						"_tpl": "6759af0f9c8a538dd70bfae6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "677e90e191de7ae4136e3967",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d866ddc96b68ac0512bf",
						"_tpl": "6571133d22996eaf11088200",
						"parentId": "6822d866ddc96b68ac0512be",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d866ddc96b68ac0512c0",
						"_tpl": "6571138e818110db4600aa71",
						"parentId": "6822d866ddc96b68ac0512be",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d866ddc96b68ac0512c1",
						"_tpl": "657112fa818110db4600aa6b",
						"parentId": "6822d866ddc96b68ac0512be",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d866ddc96b68ac0512c2",
						"_tpl": "5c0e842486f77443a74d2976",
						"parentId": "6822d866ddc96b68ac0512be",
						"slotId": "mod_equipment",
						"upd": {
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d870ddc96b68ac0512c3",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d870ddc96b68ac0512c4",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "6822d870ddc96b68ac0512c3",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d870ddc96b68ac0512c5",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "6822d870ddc96b68ac0512c3",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9a2185ce152ec038d0d",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "6822d870ddc96b68ac0512c3",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d99b185ce152ec038d0b",
						"_tpl": "5c11046cd174af02a012e42b",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d9a2185ce152ec038d0d",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d98f185ce152ec038d04",
						"_tpl": "5c110624d174af029e69734c",
						"parentId": "6822d99b185ce152ec038d0b",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d873ddc96b68ac051309",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d873ddc96b68ac05130a",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "6822d873ddc96b68ac051309",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d873ddc96b68ac05130b",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "6822d873ddc96b68ac051309",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9a3185ce152ec038d0e",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "6822d873ddc96b68ac051309",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d99a185ce152ec038d0a",
						"_tpl": "5c11046cd174af02a012e42b",
						"parentId": "6822d9a3185ce152ec038d0e",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d98f185ce152ec038d07",
						"_tpl": "5c110624d174af029e69734c",
						"parentId": "6822d99a185ce152ec038d0a",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d87addc96b68ac05130c",
						"_tpl": "5f60c74e3b85f6263c145586",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc861b588f345450a6d76",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d87addc96b68ac05130d",
						"_tpl": "657bc285aab96fccee08bea3",
						"parentId": "6822d87addc96b68ac05130c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d87addc96b68ac05130e",
						"_tpl": "657bc2c5a1c61ee0c3036333",
						"parentId": "6822d87addc96b68ac05130c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d87addc96b68ac05130f",
						"_tpl": "657bc2e7b30eca976305118d",
						"parentId": "6822d87addc96b68ac05130c",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9c7185ce152ec038d15",
						"_tpl": "5f60c85b58eff926626a60f7",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 55,
								"MaxDurability": 55
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d87addc96b68ac05130c",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d885ddc96b68ac05215c",
						"_tpl": "5e00c1ad86f774747333222c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6571200b6fe59548840cb53a",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d885ddc96b68ac05215d",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "6822d885ddc96b68ac05215c",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d885ddc96b68ac05215e",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "6822d885ddc96b68ac05215c",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9a4185ce152ec038d10",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d885ddc96b68ac05215c",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d99a185ce152ec038d08",
						"_tpl": "5c11046cd174af02a012e42b",
						"parentId": "6822d9a4185ce152ec038d10",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d98f185ce152ec038d06",
						"_tpl": "5c110624d174af029e69734c",
						"parentId": "6822d99a185ce152ec038d08",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d886ddc96b68ac05215f",
						"_tpl": "5e01ef6886f77445f643baa4",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120376d197c216005b33e",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d886ddc96b68ac052160",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "6822d886ddc96b68ac05215f",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d886ddc96b68ac052161",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "6822d886ddc96b68ac05215f",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9a4185ce152ec038d11",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d886ddc96b68ac05215f",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d99a185ce152ec038d09",
						"_tpl": "5c11046cd174af02a012e42b",
						"parentId": "6822d9a4185ce152ec038d11",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d98f185ce152ec038d05",
						"_tpl": "5c110624d174af029e69734c",
						"parentId": "6822d99a185ce152ec038d09",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d89dddc96b68ac052162",
						"_tpl": "5ca20ee186f774799474abc2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc8c926820ea7da04f2fa",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d89dddc96b68ac052163",
						"_tpl": "657bbe73a1c61ee0c303632b",
						"parentId": "6822d89dddc96b68ac052162",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d89dddc96b68ac052164",
						"_tpl": "657bbed0aab96fccee08be96",
						"parentId": "6822d89dddc96b68ac052162",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d89dddc96b68ac052165",
						"_tpl": "657bbefeb30eca9763051189",
						"parentId": "6822d89dddc96b68ac052162",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9bc185ce152ec038d13",
						"_tpl": "5ca2113f86f7740b2547e1d2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 85,
								"MaxDurability": 85
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d89dddc96b68ac052162",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d8aaddc96b68ac052166",
						"_tpl": "5aa7e276e5b5b000171d0647",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc88ebbd440df880b2dfe",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d8aaddc96b68ac052167",
						"_tpl": "657bc06daab96fccee08be9b",
						"parentId": "6822d8aaddc96b68ac052166",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d8aaddc96b68ac052168",
						"_tpl": "657bc0d8a1c61ee0c303632f",
						"parentId": "6822d8aaddc96b68ac052166",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d8aaddc96b68ac052169",
						"_tpl": "657bc107aab96fccee08be9f",
						"parentId": "6822d8aaddc96b68ac052166",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d9c0185ce152ec038d14",
						"_tpl": "5aa7e373e5b5b000137b76f0",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 50,
								"MaxDurability": 50
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d8aaddc96b68ac052166",
						"slotId": "mod_equipment"
					}
        ],
      },
    ],
    [ // _rare
      {
        Items: [
          {
						"_id": "67ecee80150082490003850a",
						"_tpl": "6745895717824b1ec20570a6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "677d14927f8ee8353d85918d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecee80150082490003850b",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "67ecee80150082490003850a",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee80150082490003850c",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "67ecee80150082490003850a",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee80150082490003850d",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "67ecee80150082490003850a",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecee86150082490003850e",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecee86150082490003850f",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "67ecee86150082490003850e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee861500824900038510",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "67ecee86150082490003850e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee861500824900038511",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "67ecee86150082490003850e",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecee8c1500824900038512",
						"_tpl": "5aa7e276e5b5b000171d0647",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc88ebbd440df880b2dfe",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecee8c1500824900038513",
						"_tpl": "657bc06daab96fccee08be9b",
						"parentId": "67ecee8c1500824900038512",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee8c1500824900038514",
						"_tpl": "657bc0d8a1c61ee0c303632f",
						"parentId": "67ecee8c1500824900038512",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee8c1500824900038515",
						"_tpl": "657bc107aab96fccee08be9f",
						"parentId": "67ecee8c1500824900038512",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ec144b2f0bf68a003951c",
						"_tpl": "5aa7e373e5b5b000137b76f0",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 50,
								"MaxDurability": 50
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecee8c1500824900038512",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecee911500824900038516",
						"_tpl": "5c066ef40db834001966a595",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 4,
							"y": 14,
							"r": "Horizontal"
						}
					},
					{
						"_id": "681ef2dc73ead7872003a853",
						"_tpl": "5c066e3a0db834001b7353f0",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecee911500824900038516",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecee9d1500824900038517",
						"_tpl": "5d6d3716a4b9361bc8618872",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 4,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecee9d1500824900038519",
						"_tpl": "657fa009d4caf976440afe3a",
						"parentId": "67ecee9d1500824900038517",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee9d150082490003851a",
						"_tpl": "657fa04ac6679fefb3051e24",
						"parentId": "67ecee9d1500824900038517",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecee9d150082490003851b",
						"_tpl": "657fa07387e11c61f70bface",
						"parentId": "67ecee9d1500824900038517",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ec170b2f0bf68a003951d",
						"_tpl": "5d6d3943a4b9360dbc46d0cc",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 1,
								"MaxDurability": 1
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecee9d1500824900038517",
						"slotId": "mod_equipment_002"
					},
					{
						"_id": "681ec176b2f0bf68a003951e",
						"_tpl": "5d6d3829a4b9361bc8618943",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 50,
								"MaxDurability": 50
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecee9d1500824900038517",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "681ec179b2f0bf68a0039561",
						"_tpl": "5d6d3be5a4b9361bc73bc763",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 35,
								"MaxDurability": 35
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecee9d1500824900038517",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceeab150082490003851d",
						"_tpl": "66b5f65ca7f72d197e70bcd6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c41f0b603c26902afd8d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceeab150082490003851e",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "67eceeab150082490003851d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceeab150082490003851f",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "67eceeab150082490003851d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e078185ce152ec04b34d",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "67eceeab150082490003851d",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e07d185ce152ec04b351",
						"_tpl": "5c0695860db834001b735461",
						"parentId": "6822e078185ce152ec04b34d",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e086185ce152ec04c195",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822e07d185ce152ec04b351",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceeb31500824900038520",
						"_tpl": "66b5f666cad6f002ab7214c2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c562fd38bf060b4b85a7",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceeb31500824900038521",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "67eceeb31500824900038520",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceeb31500824900038522",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "67eceeb31500824900038520",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceeb81500824900038523",
						"_tpl": "66b5f661af44ca0014063c05",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c53ea7f72d197e70bf83",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceeb81500824900038524",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "67eceeb81500824900038523",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceeb81500824900038525",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "67eceeb81500824900038523",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e079185ce152ec04b34e",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "67eceeb81500824900038523",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822e07d185ce152ec04b350",
						"_tpl": "5c0695860db834001b735461",
						"parentId": "6822e079185ce152ec04b34e",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e085185ce152ec04c194",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822e07d185ce152ec04b350",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceec61500824900038546",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 30,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceec61500824900038547",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "67eceec61500824900038546",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceec61500824900038548",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "67eceec61500824900038546",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf123150082490003da71",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67eceec61500824900038546",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf3141500824900043f39",
						"_tpl": "5c1793902e221602b21d3de2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 27,
								"MaxDurability": 27
							},
							"SpawnedInSession": false
						},
						"parentId": "67eceec61500824900038546",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceecc1500824900038549",
						"_tpl": "5b4329f05acfc47a86086aa1",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "65711f886d197c216005b32f",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 4,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceecc150082490003854a",
						"_tpl": "65711b07a330b8c9060f7b01",
						"parentId": "67eceecc1500824900038549",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceecc150082490003854b",
						"_tpl": "65711b489eb8c145180dbb9d",
						"parentId": "67eceecc1500824900038549",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceecc150082490003854c",
						"_tpl": "65711b9b65daf6aa960c9b1b",
						"parentId": "67eceecc1500824900038549",
						"slotId": "helmet_eyes",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceecc150082490003854d",
						"_tpl": "65711bc79eb8c145180dbba1",
						"parentId": "67eceecc1500824900038549",
						"slotId": "helmet_jaw",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceecc150082490003854e",
						"_tpl": "65711b706d197c216005b31c",
						"parentId": "67eceecc1500824900038549",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceed3150082490003854f",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceed31500824900038550",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "67eceed3150082490003854f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceed31500824900038551",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "67eceed3150082490003854f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0bc150082490003cd0f",
						"_tpl": "5ea18c84ecf1982c7712d9a2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false
						},
						"parentId": "67eceed3150082490003854f",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceed81500824900038552",
						"_tpl": "65709d2d21b9f815e208ff95",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 0,
							"y": 4,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceed81500824900038554",
						"_tpl": "657f9eb7e9433140ad0baf86",
						"parentId": "67eceed81500824900038552",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceed81500824900038555",
						"_tpl": "657f9ef6c6679fefb3051e1f",
						"parentId": "67eceed81500824900038552",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceeeb1500824900038556",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceeeb1500824900038557",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "67eceeeb1500824900038556",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceeeb1500824900038558",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "67eceeeb1500824900038556",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0ce185ce152ec04d16d",
						"_tpl": "5f60c076f2bcbb675b00dac2",
						"parentId": "67eceeeb1500824900038556",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceeee1500824900038559",
						"_tpl": "5b40e3f35acfc40016388218",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceeee150082490003855b",
						"_tpl": "657f95bff92cd718b701550c",
						"parentId": "67eceeee1500824900038559",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceeee150082490003855c",
						"_tpl": "657f9605f4c82973640b2358",
						"parentId": "67eceeee1500824900038559",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceef1150082490003855d",
						"_tpl": "5b40e4035acfc47a87740943",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 0,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67eceef1150082490003855f",
						"_tpl": "657f95bff92cd718b701550c",
						"parentId": "67eceef1150082490003855d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceef11500824900038560",
						"_tpl": "657f9605f4c82973640b2358",
						"parentId": "67eceef1150082490003855d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67eceef81500824900038565",
						"_tpl": "5b40e2bc5acfc40016388216",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120dd6fe59548840cb54c",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67eceef81500824900038566",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "67eceef81500824900038565",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceef81500824900038567",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "67eceef81500824900038565",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67eceef81500824900038568",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "67eceef81500824900038565",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef051500824900038569",
						"_tpl": "5b432d215acfc4771e1c6624",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 26,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef05150082490003856b",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "67ecef051500824900038569",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef05150082490003856c",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "67ecef051500824900038569",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf34a1500824900044e6c",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef051500824900038569",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf130150082490003da7d",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecef051500824900038569",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef0d150082490003856d",
						"_tpl": "5d5e7d28a4b936645d161203",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa705e9433140ad0baf95",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecef0d150082490003856e",
						"_tpl": "657f8a8d7db258e5600fe33d",
						"parentId": "67ecef0d150082490003856d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef0d150082490003856f",
						"_tpl": "657f8b05f4c82973640b2348",
						"parentId": "67ecef0d150082490003856d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef101500824900038570",
						"_tpl": "5d5e9c74a4b9364855191c40",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa735e65c0122b70ffda5",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef101500824900038571",
						"_tpl": "657f8b94f92cd718b70154ff",
						"parentId": "67ecef101500824900038570",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef101500824900038572",
						"_tpl": "657f8b43f92cd718b70154fb",
						"parentId": "67ecef101500824900038570",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef141500824900038573",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef141500824900038574",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "67ecef141500824900038573",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef141500824900038575",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "67ecef141500824900038573",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf101150082490003da6c",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef141500824900038573",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef1b1500824900038576",
						"_tpl": "675956062f6ddfe8ff0e2806",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777b37393a9a6f10ea57501",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef1b1500824900038577",
						"_tpl": "676307c004856a0b3c0dfffd",
						"parentId": "67ecef1b1500824900038576",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef1b1500824900038578",
						"_tpl": "676307b4d9ec0af3d9001fa8",
						"parentId": "67ecef1b1500824900038576",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef211500824900038579",
						"_tpl": "6759655674aa5e0825040d62",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777bf37e10ffdb431ff9508",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecef21150082490003857a",
						"_tpl": "676307c004856a0b3c0dfffd",
						"parentId": "67ecef211500824900038579",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef21150082490003857b",
						"_tpl": "676307b4d9ec0af3d9001fa8",
						"parentId": "67ecef211500824900038579",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef28150082490003857c",
						"_tpl": "67597ceea35600b4c10cea86",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777bfee0658691ef27d9993",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecef28150082490003857d",
						"_tpl": "676307ded8b241b4f703a3e8",
						"parentId": "67ecef28150082490003857c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef28150082490003857e",
						"_tpl": "676307d3d9ec0af3d9001fac",
						"parentId": "67ecef28150082490003857c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef2d150082490003857f",
						"_tpl": "67597d241d5a44f2f605df06",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777c1244557b9b1474da362",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 10,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecef2d1500824900038580",
						"_tpl": "676307ded8b241b4f703a3e8",
						"parentId": "67ecef2d150082490003857f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef2d1500824900038581",
						"_tpl": "676307d3d9ec0af3d9001fac",
						"parentId": "67ecef2d150082490003857f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef3f1500824900038582",
						"_tpl": "5c0e874186f7745dc7616606",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc821aab96fccee08becc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef3f1500824900038583",
						"_tpl": "6571133d22996eaf11088200",
						"parentId": "67ecef3f1500824900038582",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef3f1500824900038584",
						"_tpl": "6571138e818110db4600aa71",
						"parentId": "67ecef3f1500824900038582",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef3f1500824900038585",
						"_tpl": "657112fa818110db4600aa6b",
						"parentId": "67ecef3f1500824900038582",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef3f1500824900038586",
						"_tpl": "5c0e842486f77443a74d2976",
						"parentId": "67ecef3f1500824900038582",
						"slotId": "mod_equipment",
						"upd": {
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef421500824900038587",
						"_tpl": "5c091a4e0db834001d5addc8",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "65712075f1074598bf0c02a7",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 14,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef421500824900038588",
						"_tpl": "6571133d22996eaf11088200",
						"parentId": "67ecef421500824900038587",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef421500824900038589",
						"_tpl": "6571138e818110db4600aa71",
						"parentId": "67ecef421500824900038587",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef42150082490003858a",
						"_tpl": "657112fa818110db4600aa6b",
						"parentId": "67ecef421500824900038587",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf063150082490003b043",
						"_tpl": "5c0919b50db834001b7ce3b9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 50,
								"MaxDurability": 50
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef421500824900038587",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef48150082490003858b",
						"_tpl": "61bca7cda0eae612383adf57",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7d6aab96fccee08bec4",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef48150082490003858c",
						"_tpl": "657bbcc9a1c61ee0c3036327",
						"parentId": "67ecef48150082490003858b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef48150082490003858d",
						"_tpl": "657bbcffbbd440df880b2dd5",
						"parentId": "67ecef48150082490003858b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef4d150082490003858e",
						"_tpl": "65719f0775149d62ce0a670b",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 10,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "67ecef4d1500824900038590",
						"_tpl": "657fa0fcd4caf976440afe3e",
						"parentId": "67ecef4d150082490003858e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef4d1500824900038591",
						"_tpl": "657fa168e9433140ad0baf8e",
						"parentId": "67ecef4d150082490003858e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef4d1500824900038592",
						"_tpl": "657fa186d4caf976440afe42",
						"parentId": "67ecef4d150082490003858e",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef4f1500824900038593",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 32,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef4f1500824900038594",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecef4f1500824900038593",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef4f1500824900038595",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecef4f1500824900038593",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0eb150082490003cd1b",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"parentId": "67ecef4f1500824900038593",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
					{
						"_id": "67ecf12f150082490003da79",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecef4f1500824900038593",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef511500824900038596",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 34,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef511500824900038597",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecef511500824900038596",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef511500824900038598",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecef511500824900038596",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0aa150082490003bed8",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef511500824900038596",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef581500824900038599",
						"_tpl": "5f60c74e3b85f6263c145586",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc861b588f345450a6d76",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef58150082490003859a",
						"_tpl": "657bc285aab96fccee08bea3",
						"parentId": "67ecef581500824900038599",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef58150082490003859b",
						"_tpl": "657bc2c5a1c61ee0c3036333",
						"parentId": "67ecef581500824900038599",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef58150082490003859c",
						"_tpl": "657bc2e7b30eca976305118d",
						"parentId": "67ecef581500824900038599",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf074150082490003be9c",
						"_tpl": "5f60c85b58eff926626a60f7",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 55,
								"MaxDurability": 55
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef581500824900038599",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef67150082490003859d",
						"_tpl": "5e00c1ad86f774747333222c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6571200b6fe59548840cb53a",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 28,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef67150082490003859e",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "67ecef67150082490003859d",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef67150082490003859f",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "67ecef67150082490003859d",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0aa150082490003bed9",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef67150082490003859d",
						"slotId": "mod_nvg"
					},
					{
						"_id": "67ecf545150082490004c32a",
						"_tpl": "66b5f69ea7f72d197e70bcdb",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecef67150082490003859d",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef6a15008249000385a0",
						"_tpl": "5e01ef6886f77445f643baa4",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 0,
							"y": 34,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef6a15008249000385a2",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "67ecef6a15008249000385a0",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef6a15008249000385a3",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "67ecef6a15008249000385a0",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822ded5185ce152ec044ede",
						"_tpl": "66b5f6a28ca68c6461709ed8",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecef6a15008249000385a0",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef8015008249000385a4",
						"_tpl": "5ca20ee186f774799474abc2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc8c926820ea7da04f2fa",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef8015008249000385a5",
						"_tpl": "657bbe73a1c61ee0c303632b",
						"parentId": "67ecef8015008249000385a4",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef8015008249000385a6",
						"_tpl": "657bbed0aab96fccee08be96",
						"parentId": "67ecef8015008249000385a4",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef8015008249000385a7",
						"_tpl": "657bbefeb30eca9763051189",
						"parentId": "67ecef8015008249000385a4",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf06c150082490003be9b",
						"_tpl": "5ca2113f86f7740b2547e1d2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 85,
								"MaxDurability": 85
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecef8015008249000385a4",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef841500824900039429",
						"_tpl": "5a16bb52fcdbcb001a3b00dc",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecefdb150082490003a1c5",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "67ecef841500824900039429",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecefe2150082490003a1c6",
						"_tpl": "5c0695860db834001b735461",
						"parentId": "67ecefdb150082490003a1c5",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf02f150082490003b042",
						"_tpl": "5c0696830db834001d23f5da",
						"parentId": "67ecefe2150082490003a1c6",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef89150082490003942a",
						"_tpl": "5aa7e4a4e5b5b000137b76f2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa87fc6679fefb3051e32",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef89150082490003942b",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "67ecef89150082490003942a",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef89150082490003942c",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "67ecef89150082490003942a",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef89150082490003942d",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "67ecef89150082490003942a",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecefd3150082490003a1c4",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "67ecef89150082490003942a",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecef8b150082490003942e",
						"_tpl": "5aa7e454e5b5b0214e506fa2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa836c6679fefb3051e28",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecef8b150082490003942f",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "67ecef8b150082490003942e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef8b1500824900039430",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "67ecef8b150082490003942e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecef8b1500824900039431",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "67ecef8b150082490003942e",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecefd1150082490003a1c3",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "67ecef8b150082490003942e",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf083150082490003be9d",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 36,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf083150082490003be9e",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf083150082490003be9d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf083150082490003be9f",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf083150082490003be9d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0c1150082490003cd13",
						"_tpl": "5ea058e01dbce517f324b3e2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 45,
								"MaxDurability": 45
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf083150082490003be9d",
						"slotId": "mod_nvg"
					},
					{
						"_id": "67ecf12c150082490003da77",
						"_tpl": "5a16badafcdbcb001865f72d",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 25,
								"MaxDurability": 25
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf083150082490003be9d",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf084150082490003bea0",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 32,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf084150082490003bea1",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf084150082490003bea0",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf084150082490003bea2",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf084150082490003bea0",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0ea150082490003cd1a",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"parentId": "67ecf084150082490003bea0",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
					{
						"_id": "67ecf130150082490003da7c",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecf084150082490003bea0",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf08e150082490003bea3",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 34,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf08e150082490003bea4",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf08e150082490003bea3",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf08e150082490003bea5",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf08e150082490003bea3",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0a8150082490003bed7",
						"_tpl": "5c0558060db834001b735271",
						"parentId": "67ecf08e150082490003bea3",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf090150082490003bea6",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 30,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf090150082490003bea7",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf090150082490003bea6",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf090150082490003bea8",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf090150082490003bea6",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0c2150082490003cd14",
						"_tpl": "5ea058e01dbce517f324b3e2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 45,
								"MaxDurability": 45
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf090150082490003bea6",
						"slotId": "mod_nvg"
					},
					{
						"_id": "67ecf12d150082490003da78",
						"_tpl": "5a16badafcdbcb001865f72d",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 25,
								"MaxDurability": 25
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf090150082490003bea6",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf150150082490003e84a",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 30,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf150150082490003e84b",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf150150082490003e84a",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf150150082490003e84c",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf150150082490003e84a",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf103150082490003da70",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf150150082490003e84a",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf130150082490003da7b",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecf150150082490003e84a",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf155150082490003e84d",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 28,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf155150082490003e84e",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf155150082490003e84d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf155150082490003e84f",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf155150082490003e84d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf102150082490003da6f",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf155150082490003e84d",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf131150082490003da7f",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecf155150082490003e84d",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf1bc150082490003f5f9",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 26,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf1bc150082490003f5fa",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf1bc150082490003f5f9",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf1bc150082490003f5fb",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf1bc150082490003f5f9",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf102150082490003da6e",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf1bc150082490003f5f9",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf1bf150082490003f5fc",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 28,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf1bf150082490003f5fd",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf1bf150082490003f5fc",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf1bf150082490003f5fe",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf1bf150082490003f5fc",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf102150082490003da6d",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf1bf150082490003f5fc",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf1d3150082490004042e",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 26,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf1d3150082490004042f",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf1d3150082490004042e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf1d31500824900040430",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf1d3150082490004042e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0e9150082490003cd18",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"parentId": "67ecf1d3150082490004042e",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
					{
						"_id": "67ecf127150082490003da73",
						"_tpl": "5c0e66e2d174af02a96252f4",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 30,
								"MaxDurability": 30
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf1d3150082490004042e",
						"slotId": "mod_equipment_002"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf2d81500824900042ff2",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf2d81500824900042ff3",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "67ecf2d81500824900042ff2",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf2d81500824900042ff4",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "67ecf2d81500824900042ff2",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf2ea1500824900043f31",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 20,
								"MaxDurability": 20
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf2d81500824900042ff2",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3031500824900043f32",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 24,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3031500824900043f33",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "67ecf3031500824900043f32",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3031500824900043f34",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "67ecf3031500824900043f32",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3331500824900044e66",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 26,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3331500824900044e67",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "67ecf3331500824900044e66",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3331500824900044e68",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "67ecf3331500824900044e66",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf34d1500824900044e6e",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 20,
								"MaxDurability": 20
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf3331500824900044e66",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf3511500824900044e71",
						"_tpl": "5c178a942e22164bef5ceca3",
						"parentId": "67ecf3331500824900044e66",
						"slotId": "mod_equipment_001",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3341500824900044e69",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 28,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3341500824900044e6a",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "67ecf3341500824900044e69",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3341500824900044e6b",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "67ecf3341500824900044e69",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf34a1500824900044e6d",
						"_tpl": "5a16b7e1fcdbcb00165aa6c9",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf3341500824900044e69",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf3531500824900044e72",
						"_tpl": "5c178a942e22164bef5ceca3",
						"parentId": "67ecf3341500824900044e69",
						"slotId": "mod_equipment_001",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3871500824900045e8d",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3871500824900045e8e",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "67ecf3871500824900045e8d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3871500824900045e8f",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "67ecf3871500824900045e8d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3941500824900045e90",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf3871500824900045e8d",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3cd1500824900046ce7",
						"_tpl": "5a154d5cfcdbcb001a3b00da",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7c0e65c0122b70ffdb0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 24,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3cd1500824900046ce8",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf3cd1500824900046ce7",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3cd1500824900046ce9",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf3cd1500824900046ce7",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf3d11500824900046cea",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 24,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf3d11500824900046ceb",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "67ecf3d11500824900046cea",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf3d11500824900046cec",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "67ecf3d11500824900046cea",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf41015008249000479ec",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf41015008249000479ed",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "67ecf41015008249000479ec",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf41015008249000479ee",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "67ecf41015008249000479ec",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf4af150082490004a67f",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf41015008249000479ec",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf44415008249000488a6",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 30,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf44415008249000488a7",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "67ecf44415008249000488a6",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf44415008249000488a8",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "67ecf44415008249000488a6",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf34d1500824900044e6f",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 20,
								"MaxDurability": 20
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf44415008249000488a6",
						"slotId": "mod_equipment_000"
					},
					{
						"_id": "67ecf131150082490003da7e",
						"_tpl": "5a16b9fffcdbcb0176308b34",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecf44415008249000488a6",
						"slotId": "mod_equipment_001"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf44515008249000488a9",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 28,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf44515008249000488aa",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "67ecf44515008249000488a9",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf44515008249000488ab",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "67ecf44515008249000488a9",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf0c3150082490003cd15",
						"_tpl": "5ea058e01dbce517f324b3e2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 45,
								"MaxDurability": 45
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf44515008249000488a9",
						"slotId": "mod_nvg"
					},
					{
						"_id": "67ecf0f9150082490003cd1e",
						"_tpl": "5a16badafcdbcb001865f72d",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 25,
								"MaxDurability": 25
							},
							"SpawnedInSession": false
						},
						"parentId": "67ecf44515008249000488a9",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf48c150082490004975e",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 32,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf48c150082490004975f",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "67ecf48c150082490004975e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf48c1500824900049760",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "67ecf48c150082490004975e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf4ae150082490004a67e",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf48c150082490004975e",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf524150082490004c31f",
						"_tpl": "5e00c1ad86f774747333222c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6571200b6fe59548840cb53a",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 26,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf524150082490004c320",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "67ecf524150082490004c31f",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf524150082490004c321",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "67ecf524150082490004c31f",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf4af150082490004a680",
						"_tpl": "5c0558060db834001b735271",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "67ecf524150082490004c31f",
						"slotId": "mod_nvg"
					},
					{
						"_id": "67ecf546150082490004c32b",
						"_tpl": "66b5f6a28ca68c6461709ed8",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"parentId": "67ecf524150082490004c31f",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf58f150082490004e270",
						"_tpl": "5e00c1ad86f774747333222c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6571200b6fe59548840cb53a",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 24,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf58f150082490004e271",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "67ecf58f150082490004e270",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf58f150082490004e272",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "67ecf58f150082490004e270",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "67ecf591150082490004e273",
						"_tpl": "5e00c1ad86f774747333222c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6571200b6fe59548840cb53a",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 30,
							"r": "Horizontal"
						}
					},
					{
						"_id": "67ecf591150082490004e274",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "67ecf591150082490004e273",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf591150082490004e275",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "67ecf591150082490004e273",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "67ecf53b150082490004c324",
						"_tpl": "5e00cfa786f77469dc6e5685",
						"parentId": "67ecf591150082490004e273",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "681ef22373ead78720038b5f",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "681ef22373ead78720038b60",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "681ef22373ead78720038b5f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ef22373ead78720038b61",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "681ef22373ead78720038b5f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ef22373ead78720038b62",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "681ef22373ead78720038b5f",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "681ef27073ead78720038b6b",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "681ef27073ead78720038b6c",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "681ef27073ead78720038b6b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ef27073ead78720038b6d",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "681ef27073ead78720038b6b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ef28a73ead78720039a82",
						"_tpl": "5f60c076f2bcbb675b00dac2",
						"parentId": "681ef27073ead78720038b6b",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "681ef28c73ead78720039a83",
						"_tpl": "5f60b85bbdb8e27dee3dc985",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false
						},
						"parentId": "681ef27073ead78720038b6b",
						"slotId": "mod_equipment_002"
					},
					{
						"_id": "681ef29073ead78720039a87",
						"_tpl": "5f60bf4558eff926626a60f2",
						"parentId": "681ef27073ead78720038b6b",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dac7185ce152ec038d9b",
						"_tpl": "5b432d215acfc4771e1c6624",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 24,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dac7185ce152ec038d9d",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822dac7185ce152ec038d9b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dac7185ce152ec038d9e",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822dac7185ce152ec038d9b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822daee185ce152ec038d9f",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 32,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822daee185ce152ec038da0",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "6822daee185ce152ec038d9f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822daee185ce152ec038da1",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "6822daee185ce152ec038d9f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822daf7185ce152ec038da2",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "6822daee185ce152ec038d9f",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dafb185ce152ec038da3",
						"_tpl": "5c0695860db834001b735461",
						"parentId": "6822daf7185ce152ec038da2",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822db01185ce152ec038da4",
						"_tpl": "5c0696830db834001d23f5da",
						"parentId": "6822dafb185ce152ec038da3",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dc80185ce152ec03d6e6",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dc80185ce152ec03d6e7",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "6822dc80185ce152ec03d6e6",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dc80185ce152ec03d6e8",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "6822dc80185ce152ec03d6e6",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dc90185ce152ec03d6e9",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dc90185ce152ec03d6ea",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "6822dc90185ce152ec03d6e9",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dc90185ce152ec03d6eb",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "6822dc90185ce152ec03d6e9",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dc92185ce152ec03d6ec",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dc92185ce152ec03d6ed",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "6822dc92185ce152ec03d6ec",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dc92185ce152ec03d6ee",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "6822dc92185ce152ec03d6ec",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dcae185ce152ec03e6a7",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dcae185ce152ec03e6a8",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822dcae185ce152ec03e6a7",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcae185ce152ec03e6a9",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822dcae185ce152ec03e6a7",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcae185ce152ec03e6aa",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822dcae185ce152ec03e6a7",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dcaf185ce152ec03e6ab",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dcaf185ce152ec03e6ac",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822dcaf185ce152ec03e6ab",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcaf185ce152ec03e6ad",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822dcaf185ce152ec03e6ab",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcaf185ce152ec03e6ae",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822dcaf185ce152ec03e6ab",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dcb0185ce152ec03e6af",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dcb0185ce152ec03e6b0",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822dcb0185ce152ec03e6af",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcb0185ce152ec03e6b1",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822dcb0185ce152ec03e6af",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dcb0185ce152ec03e6b2",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822dcb0185ce152ec03e6af",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dea3185ce152ec044edb",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 14,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dea3185ce152ec044edc",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "6822dea3185ce152ec044edb",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dea3185ce152ec044edd",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "6822dea3185ce152ec044edb",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822dee5185ce152ec045e2c",
						"_tpl": "5e01ef6886f77445f643baa4",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 0,
							"y": 32,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822dee5185ce152ec045e2e",
						"_tpl": "6551fec55d0cf82e51014288",
						"parentId": "6822dee5185ce152ec045e2c",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822dee5185ce152ec045e2f",
						"_tpl": "655200ba0ef76cf7be09d528",
						"parentId": "6822dee5185ce152ec045e2c",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822df68185ce152ec047a8f",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822df68185ce152ec047a90",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822df68185ce152ec047a8f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822df68185ce152ec047a91",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822df68185ce152ec047a8f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822df68185ce152ec047a92",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822df68185ce152ec047a8f",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822df6a185ce152ec047a93",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822df6a185ce152ec047a94",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822df6a185ce152ec047a93",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822df6a185ce152ec047a95",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822df6a185ce152ec047a93",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822df6a185ce152ec047a96",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822df6a185ce152ec047a93",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e092185ce152ec04c196",
						"_tpl": "66b5f666cad6f002ab7214c2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c562fd38bf060b4b85a7",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e092185ce152ec04c197",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822e092185ce152ec04c196",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e092185ce152ec04c198",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822e092185ce152ec04c196",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e07a185ce152ec04b34f",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822e092185ce152ec04c196",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822e07e185ce152ec04b352",
						"_tpl": "5c0695860db834001b735461",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822e07a185ce152ec04b34f",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822e084185ce152ec04c193",
						"_tpl": "5c0696830db834001d23f5da",
						"parentId": "6822e07e185ce152ec04b352",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e097185ce152ec04c199",
						"_tpl": "66b5f661af44ca0014063c05",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c53ea7f72d197e70bf83",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822e097185ce152ec04c19a",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822e097185ce152ec04c199",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e097185ce152ec04c19b",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822e097185ce152ec04c199",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e0af185ce152ec04c19c",
						"_tpl": "5b40e3f35acfc40016388218",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 6,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e0af185ce152ec04c19e",
						"_tpl": "657f95bff92cd718b701550c",
						"parentId": "6822e0af185ce152ec04c19c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0af185ce152ec04c19f",
						"_tpl": "657f9605f4c82973640b2358",
						"parentId": "6822e0af185ce152ec04c19c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e0be185ce152ec04d168",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e0be185ce152ec04d169",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822e0be185ce152ec04d168",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0be185ce152ec04d16a",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822e0be185ce152ec04d168",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0cc185ce152ec04d16b",
						"_tpl": "5f60bf4558eff926626a60f2",
						"parentId": "6822e0be185ce152ec04d168",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0cf185ce152ec04d16e",
						"_tpl": "5f60c076f2bcbb675b00dac2",
						"parentId": "6822e0be185ce152ec04d168",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e0fd185ce152ec04df4e",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e0fd185ce152ec04df4f",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822e0fd185ce152ec04df4e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e0fd185ce152ec04df50",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822e0fd185ce152ec04df4e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e110185ce152ec04df51",
						"_tpl": "5b40e2bc5acfc40016388216",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120dd6fe59548840cb54c",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e110185ce152ec04df52",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822e110185ce152ec04df51",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e110185ce152ec04df53",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822e110185ce152ec04df51",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e110185ce152ec04df54",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822e110185ce152ec04df51",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e110185ce152ec04df55",
						"_tpl": "5b40e2bc5acfc40016388216",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120dd6fe59548840cb54c",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 14,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e110185ce152ec04df56",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822e110185ce152ec04df55",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e110185ce152ec04df57",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822e110185ce152ec04df55",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e110185ce152ec04df58",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822e110185ce152ec04df55",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					}
        ],
      },
    ],
    [
      // _uncommon 
      {
        Items: [
          {
						"_id": "6822d35bddc96b68ac03e095",
						"_tpl": "6745895717824b1ec20570a6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "677d14927f8ee8353d85918d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d35bddc96b68ac03e096",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d35bddc96b68ac03e095",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d35bddc96b68ac03e097",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d35bddc96b68ac03e095",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d35bddc96b68ac03e098",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d35bddc96b68ac03e095",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d35eddc96b68ac03e099",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d35eddc96b68ac03e09a",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d35eddc96b68ac03e099",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d35eddc96b68ac03e09b",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d35eddc96b68ac03e099",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d35eddc96b68ac03e09c",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d35eddc96b68ac03e099",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d360ddc96b68ac03e09d",
						"_tpl": "5a7c4850e899ef00150be885",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 4,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d360ddc96b68ac03e09f",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d360ddc96b68ac03e09d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d360ddc96b68ac03e0a0",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d360ddc96b68ac03e09d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d360ddc96b68ac03e0a1",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d360ddc96b68ac03e09d",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d366ddc96b68ac03e0a2",
						"_tpl": "5c066ef40db834001966a595",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 4,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d5f2ddc96b68ac04726a",
						"_tpl": "5c066e3a0db834001b7353f0",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d366ddc96b68ac03e0a2",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d374ddc96b68ac03ef3b",
						"_tpl": "5d6d3716a4b9361bc8618872",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d374ddc96b68ac03ef3d",
						"_tpl": "657fa009d4caf976440afe3a",
						"parentId": "6822d374ddc96b68ac03ef3b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d374ddc96b68ac03ef3e",
						"_tpl": "657fa04ac6679fefb3051e24",
						"parentId": "6822d374ddc96b68ac03ef3b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d374ddc96b68ac03ef3f",
						"_tpl": "657fa07387e11c61f70bface",
						"parentId": "6822d374ddc96b68ac03ef3b",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d377ddc96b68ac03ef40",
						"_tpl": "66b5f65ca7f72d197e70bcd6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c41f0b603c26902afd8d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d377ddc96b68ac03ef41",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822d377ddc96b68ac03ef40",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d377ddc96b68ac03ef42",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822d377ddc96b68ac03ef40",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d42cddc96b68ac040cd1",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"parentId": "6822d377ddc96b68ac03ef40",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d432ddc96b68ac040cd5",
						"_tpl": "5c0695860db834001b735461",
						"parentId": "6822d42cddc96b68ac040cd1",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d443ddc96b68ac041bac",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d432ddc96b68ac040cd5",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d37addc96b68ac03ef43",
						"_tpl": "66b5f666cad6f002ab7214c2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c562fd38bf060b4b85a7",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 4,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d37addc96b68ac03ef44",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822d37addc96b68ac03ef43",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d37addc96b68ac03ef45",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822d37addc96b68ac03ef43",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d37cddc96b68ac03ef46",
						"_tpl": "66b5f661af44ca0014063c05",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c53ea7f72d197e70bf83",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d37cddc96b68ac03ef47",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822d37cddc96b68ac03ef46",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d37cddc96b68ac03ef48",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822d37cddc96b68ac03ef46",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d382ddc96b68ac03ef49",
						"_tpl": "5c17a7ed2e2216152142459c",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa92de65c0122b70ffdb9",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d382ddc96b68ac03ef4a",
						"_tpl": "657f9897f4c82973640b235e",
						"parentId": "6822d382ddc96b68ac03ef49",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d382ddc96b68ac03ef4b",
						"_tpl": "657f98fbada5fadd1f07a585",
						"parentId": "6822d382ddc96b68ac03ef49",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d387ddc96b68ac03ef4c",
						"_tpl": "66bdc28a0b603c26902b2011",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66c49c0f2e6e23eb7b03f22d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d387ddc96b68ac03ef4d",
						"_tpl": "66bdc2ea8cbd597c9c2f9360",
						"parentId": "6822d387ddc96b68ac03ef4c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d387ddc96b68ac03ef4e",
						"_tpl": "66bdc2e25f17154509115d1e",
						"parentId": "6822d387ddc96b68ac03ef4c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d387ddc96b68ac03ef4f",
						"_tpl": "66bdc2d051aa8c345646d03f",
						"parentId": "6822d387ddc96b68ac03ef4c",
						"slotId": "helmet_eyes",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d387ddc96b68ac03ef50",
						"_tpl": "66bdc2d9408f1e66eb4fd957",
						"parentId": "6822d387ddc96b68ac03ef4c",
						"slotId": "helmet_jaw",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d387ddc96b68ac03ef51",
						"_tpl": "66bdc2c90b603c26902b2018",
						"parentId": "6822d387ddc96b68ac03ef4c",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d389ddc96b68ac03ef52",
						"_tpl": "5ea17ca01412a1425304d1c0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa95ae9433140ad0bafad",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 4,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d389ddc96b68ac03ef53",
						"_tpl": "657f9a55c6679fefb3051e19",
						"parentId": "6822d389ddc96b68ac03ef52",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d389ddc96b68ac03ef54",
						"_tpl": "657f9a94ada5fadd1f07a589",
						"parentId": "6822d389ddc96b68ac03ef52",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d38cddc96b68ac03ef55",
						"_tpl": "65709d2d21b9f815e208ff95",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657faa32e65c0122b70ffdc1",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d38cddc96b68ac03ef56",
						"_tpl": "657f9eb7e9433140ad0baf86",
						"parentId": "6822d38cddc96b68ac03ef55",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d38cddc96b68ac03ef57",
						"_tpl": "657f9ef6c6679fefb3051e1f",
						"parentId": "6822d38cddc96b68ac03ef55",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3a4ddc96b68ac03ef58",
						"_tpl": "5645bc214bdc2d363b8b4571",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 14,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3a4ddc96b68ac03ef5a",
						"_tpl": "657bae18b7e9ca9a02045c0a",
						"parentId": "6822d3a4ddc96b68ac03ef58",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3a4ddc96b68ac03ef5b",
						"_tpl": "657baeaacfcf63c951052db3",
						"parentId": "6822d3a4ddc96b68ac03ef58",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3a4ddc96b68ac03ef5c",
						"_tpl": "657baecbc6f689d3a205b863",
						"parentId": "6822d3a4ddc96b68ac03ef58",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d619ddc96b68ac047fc2",
						"_tpl": "5b46238386f7741a693bcf9c",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 40,
								"MaxDurability": 40
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d3a4ddc96b68ac03ef58",
						"slotId": "mod_equipment"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3a6ddc96b68ac03ef5d",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3a6ddc96b68ac03ef5e",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822d3a6ddc96b68ac03ef5d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3a6ddc96b68ac03ef5f",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822d3a6ddc96b68ac03ef5d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d53cddc96b68ac0447bb",
						"_tpl": "5f60c076f2bcbb675b00dac2",
						"parentId": "6822d3a6ddc96b68ac03ef5d",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3abddc96b68ac03ef60",
						"_tpl": "5b40e3f35acfc40016388218",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3abddc96b68ac03ef62",
						"_tpl": "657f95bff92cd718b701550c",
						"parentId": "6822d3abddc96b68ac03ef60",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3abddc96b68ac03ef63",
						"_tpl": "657f9605f4c82973640b2358",
						"parentId": "6822d3abddc96b68ac03ef60",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3afddc96b68ac03ef64",
						"_tpl": "5b40e4035acfc47a87740943",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa8e787e11c61f70bfad5",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3afddc96b68ac03ef65",
						"_tpl": "657f95bff92cd718b701550c",
						"parentId": "6822d3afddc96b68ac03ef64",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3afddc96b68ac03ef66",
						"_tpl": "657f9605f4c82973640b2358",
						"parentId": "6822d3afddc96b68ac03ef64",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3b2ddc96b68ac03ef89",
						"_tpl": "5b40e1525acfc4771e1c6611",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120b36fe59548840cb542",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3b2ddc96b68ac03ef8a",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822d3b2ddc96b68ac03ef89",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3b2ddc96b68ac03ef8b",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822d3b2ddc96b68ac03ef89",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3b2ddc96b68ac03ef8c",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822d3b2ddc96b68ac03ef89",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3b4ddc96b68ac03ef8d",
						"_tpl": "5b40e2bc5acfc40016388216",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657120dd6fe59548840cb54c",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3b4ddc96b68ac03ef8e",
						"_tpl": "657112234269e9a568089eac",
						"parentId": "6822d3b4ddc96b68ac03ef8d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3b4ddc96b68ac03ef8f",
						"_tpl": "657112a4818110db4600aa66",
						"parentId": "6822d3b4ddc96b68ac03ef8d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3b4ddc96b68ac03ef90",
						"_tpl": "657112ce22996eaf110881fb",
						"parentId": "6822d3b4ddc96b68ac03ef8d",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3bcddc96b68ac03fd9c",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3bcddc96b68ac03fd9d",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822d3bcddc96b68ac03fd9c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3bcddc96b68ac03fd9e",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822d3bcddc96b68ac03fd9c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d4dfddc96b68ac043888",
						"_tpl": "5ea058e01dbce517f324b3e2",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 45,
								"MaxDurability": 45
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d3bcddc96b68ac03fd9c",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3c0ddc96b68ac03fd9f",
						"_tpl": "5d5e7d28a4b936645d161203",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa705e9433140ad0baf95",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3c0ddc96b68ac03fda0",
						"_tpl": "657f8a8d7db258e5600fe33d",
						"parentId": "6822d3c0ddc96b68ac03fd9f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3c0ddc96b68ac03fda1",
						"_tpl": "657f8b05f4c82973640b2348",
						"parentId": "6822d3c0ddc96b68ac03fd9f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d745ddc96b68ac04c8c0",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d3c0ddc96b68ac03fd9f",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d74addc96b68ac04c8c1",
						"_tpl": "5c0695860db834001b735461",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d745ddc96b68ac04c8c0",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d750ddc96b68ac04c8c3",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d74addc96b68ac04c8c1",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3c2ddc96b68ac03fda2",
						"_tpl": "5d5e9c74a4b9364855191c40",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa735e65c0122b70ffda5",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3c2ddc96b68ac03fda3",
						"_tpl": "657f8b94f92cd718b70154ff",
						"parentId": "6822d3c2ddc96b68ac03fda2",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3c2ddc96b68ac03fda4",
						"_tpl": "657f8b43f92cd718b70154fb",
						"parentId": "6822d3c2ddc96b68ac03fda2",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3c4ddc96b68ac03fda5",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3c4ddc96b68ac03fda6",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "6822d3c4ddc96b68ac03fda5",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3c4ddc96b68ac03fda7",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "6822d3c4ddc96b68ac03fda5",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d568ddc96b68ac04570b",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"parentId": "6822d3c4ddc96b68ac03fda5",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3c7ddc96b68ac03fda8",
						"_tpl": "675956062f6ddfe8ff0e2806",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777b37393a9a6f10ea57501",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3c7ddc96b68ac03fda9",
						"_tpl": "676307c004856a0b3c0dfffd",
						"parentId": "6822d3c7ddc96b68ac03fda8",
						"slotId": "Helmet_top",
						"upd": {
							"Repairable": {
								"Durability": 25,
								"MaxDurability": 25
							},
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3c7ddc96b68ac03fdaa",
						"_tpl": "676307b4d9ec0af3d9001fa8",
						"parentId": "6822d3c7ddc96b68ac03fda8",
						"slotId": "Helmet_back",
						"upd": {
							"Repairable": {
								"Durability": 25,
								"MaxDurability": 25
							},
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3c9ddc96b68ac03fdab",
						"_tpl": "6759655674aa5e0825040d62",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777bf37e10ffdb431ff9508",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3c9ddc96b68ac03fdac",
						"_tpl": "676307c004856a0b3c0dfffd",
						"parentId": "6822d3c9ddc96b68ac03fdab",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3c9ddc96b68ac03fdad",
						"_tpl": "676307b4d9ec0af3d9001fa8",
						"parentId": "6822d3c9ddc96b68ac03fdab",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3cbddc96b68ac03fdae",
						"_tpl": "67597ceea35600b4c10cea86",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777bfee0658691ef27d9993",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 8,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d3cbddc96b68ac03fdaf",
						"_tpl": "676307ded8b241b4f703a3e8",
						"parentId": "6822d3cbddc96b68ac03fdae",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3cbddc96b68ac03fdb0",
						"_tpl": "676307d3d9ec0af3d9001fac",
						"parentId": "6822d3cbddc96b68ac03fdae",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3cdddc96b68ac03fdb1",
						"_tpl": "67597d241d5a44f2f605df06",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "6777c1244557b9b1474da362",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3cdddc96b68ac03fdb2",
						"_tpl": "676307ded8b241b4f703a3e8",
						"parentId": "6822d3cdddc96b68ac03fdb1",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3cdddc96b68ac03fdb3",
						"_tpl": "676307d3d9ec0af3d9001fac",
						"parentId": "6822d3cdddc96b68ac03fdb1",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3d9ddc96b68ac03fdb4",
						"_tpl": "61bca7cda0eae612383adf57",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7d6aab96fccee08bec4",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3d9ddc96b68ac03fdb5",
						"_tpl": "657bbcc9a1c61ee0c3036327",
						"parentId": "6822d3d9ddc96b68ac03fdb4",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3d9ddc96b68ac03fdb6",
						"_tpl": "657bbcffbbd440df880b2dd5",
						"parentId": "6822d3d9ddc96b68ac03fdb4",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3ddddc96b68ac03fdb7",
						"_tpl": "65719f0775149d62ce0a670b",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657faa0687e11c61f70bfae5",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3ddddc96b68ac03fdb8",
						"_tpl": "657fa0fcd4caf976440afe3e",
						"parentId": "6822d3ddddc96b68ac03fdb7",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3ddddc96b68ac03fdb9",
						"_tpl": "657fa168e9433140ad0baf8e",
						"parentId": "6822d3ddddc96b68ac03fdb7",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3ddddc96b68ac03fdba",
						"_tpl": "657fa186d4caf976440afe42",
						"parentId": "6822d3ddddc96b68ac03fdb7",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d3e0ddc96b68ac03fdbe",
						"_tpl": "5ac8d6885acfc400180ae7b0",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa7f1e9433140ad0baf9d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d3e0ddc96b68ac03fdbf",
						"_tpl": "657f8ec5f4c82973640b234c",
						"parentId": "6822d3e0ddc96b68ac03fdbe",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d3e0ddc96b68ac03fdc0",
						"_tpl": "657f8f10f4c82973640b2350",
						"parentId": "6822d3e0ddc96b68ac03fdbe",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d40cddc96b68ac040cc7",
						"_tpl": "5aa7e4a4e5b5b000137b76f2",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d40cddc96b68ac040cc9",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d40cddc96b68ac040cc7",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d40cddc96b68ac040cca",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d40cddc96b68ac040cc7",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d40cddc96b68ac040ccb",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d40cddc96b68ac040cc7",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d465ddc96b68ac041bb2",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "6822d40cddc96b68ac040cc7",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d411ddc96b68ac040ccc",
						"_tpl": "5aa7e454e5b5b0214e506fa2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa836c6679fefb3051e28",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d411ddc96b68ac040ccd",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d411ddc96b68ac040ccc",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d411ddc96b68ac040cce",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d411ddc96b68ac040ccc",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d411ddc96b68ac040ccf",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d411ddc96b68ac040ccc",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d465ddc96b68ac041bb3",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "6822d411ddc96b68ac040ccc",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d4f4ddc96b68ac04388e",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d4f4ddc96b68ac04388f",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822d4f4ddc96b68ac04388e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d4f4ddc96b68ac043890",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822d4f4ddc96b68ac04388e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d4e3ddc96b68ac04388a",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"parentId": "6822d4f4ddc96b68ac04388e",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d4feddc96b68ac043891",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 22,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d4feddc96b68ac043892",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822d4feddc96b68ac043891",
						"slotId": "Helmet_top",
						"upd": {
							"Repairable": {
								"Durability": 18,
								"MaxDurability": 18
							},
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d4feddc96b68ac043893",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822d4feddc96b68ac043891",
						"slotId": "Helmet_back",
						"upd": {
							"Repairable": {
								"Durability": 17,
								"MaxDurability": 17
							},
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d707ddc96b68ac04ba2d",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d4feddc96b68ac043891",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d703ddc96b68ac04ba2c",
						"_tpl": "5c0695860db834001b735461",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d707ddc96b68ac04ba2d",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d70bddc96b68ac04ba2e",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d703ddc96b68ac04ba2c",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d555ddc96b68ac0447bc",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 18,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d555ddc96b68ac0447bd",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822d555ddc96b68ac0447bc",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d555ddc96b68ac0447be",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822d555ddc96b68ac0447bc",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d69bddc96b68ac049cad",
						"_tpl": "5f60bf4558eff926626a60f2",
						"parentId": "6822d555ddc96b68ac0447bc",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d69dddc96b68ac049cae",
						"_tpl": "5f60c076f2bcbb675b00dac2",
						"parentId": "6822d555ddc96b68ac0447bc",
						"slotId": "mod_equipment_000",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d583ddc96b68ac04570d",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 20,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d583ddc96b68ac04570e",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "6822d583ddc96b68ac04570d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d583ddc96b68ac04570f",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "6822d583ddc96b68ac04570d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d42eddc96b68ac040cd3",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d583ddc96b68ac04570d",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d434ddc96b68ac040cd8",
						"_tpl": "5c0695860db834001b735461",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d42eddc96b68ac040cd3",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d444ddc96b68ac041bae",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d434ddc96b68ac040cd8",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d5bdddc96b68ac0464d1",
						"_tpl": "66b5f65ca7f72d197e70bcd6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "66b9c41f0b603c26902afd8d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d5bdddc96b68ac0464d2",
						"_tpl": "66b61cfae98be930d701c029",
						"parentId": "6822d5bdddc96b68ac0464d1",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5bdddc96b68ac0464d3",
						"_tpl": "66b61ce0c5d72b027748867e",
						"parentId": "6822d5bdddc96b68ac0464d1",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d5f9ddc96b68ac04726b",
						"_tpl": "5a7c4850e899ef00150be885",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 6,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac04726d",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d5f9ddc96b68ac04726b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac04726e",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d5f9ddc96b68ac04726b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac04726f",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d5f9ddc96b68ac04726b",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d5f9ddc96b68ac047270",
						"_tpl": "5a7c4850e899ef00150be885",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac047272",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d5f9ddc96b68ac047270",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac047273",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d5f9ddc96b68ac047270",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5f9ddc96b68ac047274",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d5f9ddc96b68ac047270",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d744ddc96b68ac04c8bf",
						"_tpl": "5a16b8a9fcdbcb00165aa6ca",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d5f9ddc96b68ac047270",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d74addc96b68ac04c8c2",
						"_tpl": "5c0695860db834001b735461",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false
						},
						"parentId": "6822d744ddc96b68ac04c8bf",
						"slotId": "mod_nvg"
					},
					{
						"_id": "6822d751ddc96b68ac04c8c4",
						"_tpl": "5c0696830db834001d23f5da",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 100,
								"MaxDurability": 100
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d74addc96b68ac04c8c2",
						"slotId": "mod_nvg"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d5fcddc96b68ac047275",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d5fcddc96b68ac047276",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d5fcddc96b68ac047275",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5fcddc96b68ac047277",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d5fcddc96b68ac047275",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5fcddc96b68ac047278",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d5fcddc96b68ac047275",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d5fdddc96b68ac047279",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d5fdddc96b68ac04727a",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d5fdddc96b68ac047279",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5fdddc96b68ac04727b",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d5fdddc96b68ac047279",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d5fdddc96b68ac04727c",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d5fdddc96b68ac047279",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d68addc96b68ac049c6b",
						"_tpl": "5e4bfc1586f774264f7582d3",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa9cf87e11c61f70bfadd",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d68addc96b68ac049c6c",
						"_tpl": "657f9c78ada5fadd1f07a58d",
						"parentId": "6822d68addc96b68ac049c6b",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d68addc96b68ac049c6d",
						"_tpl": "657f9cb587e11c61f70bfaca",
						"parentId": "6822d68addc96b68ac049c6b",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d6a7ddc96b68ac049caf",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d6a7ddc96b68ac049cb0",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822d6a7ddc96b68ac049caf",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d6a7ddc96b68ac049cb1",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822d6a7ddc96b68ac049caf",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d718ddc96b68ac04ba2f",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d718ddc96b68ac04ba30",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822d718ddc96b68ac04ba2f",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d718ddc96b68ac04ba31",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822d718ddc96b68ac04ba2f",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d768ddc96b68ac04c8c5",
						"_tpl": "5d5e7d28a4b936645d161203",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa705e9433140ad0baf95",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 16,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d768ddc96b68ac04c8c6",
						"_tpl": "657f8a8d7db258e5600fe33d",
						"parentId": "6822d768ddc96b68ac04c8c5",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d768ddc96b68ac04c8c7",
						"_tpl": "657f8b05f4c82973640b2348",
						"parentId": "6822d768ddc96b68ac04c8c5",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d794ddc96b68ac04d809",
						"_tpl": "5645bc214bdc2d363b8b4571",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d794ddc96b68ac04d80b",
						"_tpl": "657bae18b7e9ca9a02045c0a",
						"parentId": "6822d794ddc96b68ac04d809",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d794ddc96b68ac04d80c",
						"_tpl": "657baeaacfcf63c951052db3",
						"parentId": "6822d794ddc96b68ac04d809",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d794ddc96b68ac04d80d",
						"_tpl": "657baecbc6f689d3a205b863",
						"parentId": "6822d794ddc96b68ac04d809",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					}
        ],
      },
    ],
    [
      // _common
      {
        Items: [
          {
						"_id": "6822d0a6ddc96b68ac0388d4",
						"_tpl": "6745895717824b1ec20570a6",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "677d14927f8ee8353d85918d",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 0,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d0a6ddc96b68ac0388d5",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d0a6ddc96b68ac0388d4",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0a6ddc96b68ac0388d6",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d0a6ddc96b68ac0388d4",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0a6ddc96b68ac0388d7",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d0a6ddc96b68ac0388d4",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0aaddc96b68ac0388d8",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d0aaddc96b68ac0388d9",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d0aaddc96b68ac0388d8",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0aaddc96b68ac0388da",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d0aaddc96b68ac0388d8",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0aaddc96b68ac0388db",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d0aaddc96b68ac0388d8",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0acddc96b68ac0388dc",
						"_tpl": "5a7c4850e899ef00150be885",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc68d26820ea7da04f2f0",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 10,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d0acddc96b68ac0388dd",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d0acddc96b68ac0388dc",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0acddc96b68ac0388de",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d0acddc96b68ac0388dc",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0acddc96b68ac0388df",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d0acddc96b68ac0388dc",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0b5ddc96b68ac0388e0",
						"_tpl": "5c066ef40db834001966a595",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 6,
							"y": 0,
							"r": "Horizontal"
						}
            
					},
          {
						"_id": "6822d1f5ddc96b68ac03a63b",
						"_tpl": "5c066e3a0db834001b7353f0",
						"parentId": "6822d0b5ddc96b68ac0388e0",
						"slotId": "mod_nvg",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0e9ddc96b68ac038930",
						"_tpl": "5645bc214bdc2d363b8b4571",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d0e9ddc96b68ac038932",
						"_tpl": "657bae18b7e9ca9a02045c0a",
						"parentId": "6822d0e9ddc96b68ac038930",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0e9ddc96b68ac038933",
						"_tpl": "657baeaacfcf63c951052db3",
						"parentId": "6822d0e9ddc96b68ac038930",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0e9ddc96b68ac038934",
						"_tpl": "657baecbc6f689d3a205b863",
						"parentId": "6822d0e9ddc96b68ac038930",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
          {
						"_id": "6822d203ddc96b68ac03a63c",
						"_tpl": "5b46238386f7741a693bcf9c",
						"parentId": "6822d0e9ddc96b68ac038930",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0f0ddc96b68ac038935",
						"_tpl": "5f60b34a41e30a4ab12a6947",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7a5bbd440df880b2df6",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d0f0ddc96b68ac038936",
						"_tpl": "657bbad7a1c61ee0c3036323",
						"parentId": "6822d0f0ddc96b68ac038935",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0f0ddc96b68ac038937",
						"_tpl": "657bbb31b30eca9763051183",
						"parentId": "6822d0f0ddc96b68ac038935",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d0fbddc96b68ac038938",
						"_tpl": "59e7711e86f7746cae05fbe1",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d0fbddc96b68ac03893a",
						"_tpl": "657ba50c23918923cb0df56c",
						"parentId": "6822d0fbddc96b68ac038938",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0fbddc96b68ac03893b",
						"_tpl": "657ba5439ba22f103e08139f",
						"parentId": "6822d0fbddc96b68ac038938",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d0fbddc96b68ac03893c",
						"_tpl": "657ba57af58ba5a62501079e",
						"parentId": "6822d0fbddc96b68ac038938",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
          {
						"_id": "6822d1d4ddc96b68ac039740",
						"_tpl": "5ac4c50d5acfc40019262e87",
						"parentId": "6822d0fbddc96b68ac038938",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d103ddc96b68ac03893d",
						"_tpl": "5b432d215acfc4771e1c6624",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc772aab96fccee08bebc",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 4,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d103ddc96b68ac03893e",
						"_tpl": "657bb92fa1c61ee0c303631f",
						"parentId": "6822d103ddc96b68ac03893d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d103ddc96b68ac03893f",
						"_tpl": "657bb99db30eca976305117f",
						"parentId": "6822d103ddc96b68ac03893d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d131ddc96b68ac038940",
						"_tpl": "61bca7cda0eae612383adf57",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc7d6aab96fccee08bec4",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 2,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d131ddc96b68ac038941",
						"_tpl": "657bbcc9a1c61ee0c3036327",
						"parentId": "6822d131ddc96b68ac038940",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d131ddc96b68ac038942",
						"_tpl": "657bbcffbbd440df880b2dd5",
						"parentId": "6822d131ddc96b68ac038940",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d137ddc96b68ac038943",
						"_tpl": "65719f0775149d62ce0a670b",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657faa0687e11c61f70bfae5",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 2,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d137ddc96b68ac038944",
						"_tpl": "657fa0fcd4caf976440afe3e",
						"parentId": "6822d137ddc96b68ac038943",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d137ddc96b68ac038945",
						"_tpl": "657fa168e9433140ad0baf8e",
						"parentId": "6822d137ddc96b68ac038943",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d137ddc96b68ac038946",
						"_tpl": "657fa186d4caf976440afe42",
						"parentId": "6822d137ddc96b68ac038943",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d13fddc96b68ac038947",
						"_tpl": "5c0d2727d174af02a012cf58",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc600b588f345450a6d62",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d13fddc96b68ac038948",
						"_tpl": "657ba6c3c6f689d3a205b857",
						"parentId": "6822d13fddc96b68ac038947",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d13fddc96b68ac038949",
						"_tpl": "657ba737b7e9ca9a02045bf6",
						"parentId": "6822d13fddc96b68ac038947",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d13fddc96b68ac03894a",
						"_tpl": "658188edf026a90c1708c827",
						"parentId": "6822d13fddc96b68ac038947",
						"slotId": "helmet_eyes",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d13fddc96b68ac03894b",
						"_tpl": "657ba75e23918923cb0df573",
						"parentId": "6822d13fddc96b68ac038947",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d14bddc96b68ac03894c",
						"_tpl": "5aa7d193e5b5b000171d063f",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc742bbd440df880b2dec",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d14bddc96b68ac03894d",
						"_tpl": "657bb70486c7f9ef7a009936",
						"parentId": "6822d14bddc96b68ac03894c",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d14bddc96b68ac03894e",
						"_tpl": "657bb79ba1c61ee0c303631a",
						"parentId": "6822d14bddc96b68ac03894c",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d14bddc96b68ac03894f",
						"_tpl": "657bb7d7b30eca9763051176",
						"parentId": "6822d14bddc96b68ac03894c",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d14fddc96b68ac038950",
						"_tpl": "5c06c6a80db834001b735491",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "65711fc9c50461e8750d1f5b",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d14fddc96b68ac038951",
						"_tpl": "6571199565daf6aa960c9b10",
						"parentId": "6822d14fddc96b68ac038950",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d14fddc96b68ac038952",
						"_tpl": "657119d49eb8c145180dbb95",
						"parentId": "6822d14fddc96b68ac038950",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d14fddc96b68ac038953",
						"_tpl": "657119fea330b8c9060f7afc",
						"parentId": "6822d14fddc96b68ac038950",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d152ddc96b68ac038954",
						"_tpl": "5c08f87c0db8340019124324",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc644bbd440df880b2de2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d152ddc96b68ac038955",
						"_tpl": "657ba85ecfcf63c951052da7",
						"parentId": "6822d152ddc96b68ac038954",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d152ddc96b68ac038956",
						"_tpl": "657ba8bccfcf63c951052dab",
						"parentId": "6822d152ddc96b68ac038954",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d152ddc96b68ac038957",
						"_tpl": "65818e4e566d2de69901b1b1",
						"parentId": "6822d152ddc96b68ac038954",
						"slotId": "helmet_eyes",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d152ddc96b68ac038958",
						"_tpl": "657ba8eab7e9ca9a02045bfd",
						"parentId": "6822d152ddc96b68ac038954",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d156ddc96b68ac038959",
						"_tpl": "5df8a58286f77412631087ed",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 4,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d156ddc96b68ac03895b",
						"_tpl": "657ba096e57570b7f80a17fb",
						"parentId": "6822d156ddc96b68ac038959",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d156ddc96b68ac03895c",
						"_tpl": "657ba145e57570b7f80a17ff",
						"parentId": "6822d156ddc96b68ac038959",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d156ddc96b68ac03895d",
						"_tpl": "657ba18923918923cb0df568",
						"parentId": "6822d156ddc96b68ac038959",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d159ddc96b68ac03895e",
						"_tpl": "5ea05cf85ad9772e6624305d",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc59526820ea7da04f2e8",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d159ddc96b68ac03895f",
						"_tpl": "657ba2eef58ba5a625010798",
						"parentId": "6822d159ddc96b68ac03895e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d159ddc96b68ac038960",
						"_tpl": "657ba34b9ba22f103e08139b",
						"parentId": "6822d159ddc96b68ac03895e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
          {
						"_id": "6822d18cddc96b68ac03896d",
						"_tpl": "5a16b672fcdbcb001912fa83",
						"upd": {
							"StackObjectsCount": 1,
							"Repairable": {
								"Durability": 20,
								"MaxDurability": 20
							},
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						},
						"parentId": "6822d159ddc96b68ac03895e",
						"slotId": "mod_equipment_000"
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d161ddc96b68ac038961",
						"_tpl": "5aa7d03ae5b5b00016327db5",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "65711f2bc50461e8750d1f4f",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d161ddc96b68ac038962",
						"_tpl": "654a90aff4f81a421b0a7c86",
						"parentId": "6822d161ddc96b68ac038961",
						"slotId": "helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d161ddc96b68ac038963",
						"_tpl": "654a91068e1ce698150fd1e2",
						"parentId": "6822d161ddc96b68ac038961",
						"slotId": "helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d161ddc96b68ac038964",
						"_tpl": "654a9189bcc67a392b056c79",
						"parentId": "6822d161ddc96b68ac038961",
						"slotId": "helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d174ddc96b68ac038965",
						"_tpl": "5aa7e4a4e5b5b000137b76f2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa87fc6679fefb3051e32",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d174ddc96b68ac038966",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d174ddc96b68ac038965",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d174ddc96b68ac038967",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d174ddc96b68ac038965",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d174ddc96b68ac038968",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d174ddc96b68ac038965",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
          {
						"_id": "6822d1aaddc96b68ac039709",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "6822d174ddc96b68ac038965",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d177ddc96b68ac038969",
						"_tpl": "5aa7e454e5b5b0214e506fa2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa836c6679fefb3051e28",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d177ddc96b68ac03896a",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d177ddc96b68ac038969",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d177ddc96b68ac03896b",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d177ddc96b68ac038969",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d177ddc96b68ac03896c",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d177ddc96b68ac038969",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
          {
						"_id": "6822d1aaddc96b68ac03970a",
						"_tpl": "5aa7e3abe5b5b000171d064d",
						"parentId": "6822d177ddc96b68ac038969",
						"slotId": "mod_equipment",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false,
							"Togglable": {
								"On": true
							}
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d198ddc96b68ac03896e",
						"_tpl": "5ea05cf85ad9772e6624305d",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc59526820ea7da04f2e8",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 2,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d198ddc96b68ac03896f",
						"_tpl": "657ba2eef58ba5a625010798",
						"parentId": "6822d198ddc96b68ac03896e",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d198ddc96b68ac038970",
						"_tpl": "657ba34b9ba22f103e08139b",
						"parentId": "6822d198ddc96b68ac03896e",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d19dddc96b68ac0396fd",
						"_tpl": "5c06c6a80db834001b735491",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "65711fc9c50461e8750d1f5b",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 8,
							"y": 6,
							"r": 0,
							"rotation": false
						}
					},
					{
						"_id": "6822d19dddc96b68ac0396fe",
						"_tpl": "6571199565daf6aa960c9b10",
						"parentId": "6822d19dddc96b68ac0396fd",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d19dddc96b68ac0396ff",
						"_tpl": "657119d49eb8c145180dbb95",
						"parentId": "6822d19dddc96b68ac0396fd",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d19dddc96b68ac039700",
						"_tpl": "657119fea330b8c9060f7afc",
						"parentId": "6822d19dddc96b68ac0396fd",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d1a3ddc96b68ac039701",
						"_tpl": "5aa7e454e5b5b0214e506fa2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa836c6679fefb3051e28",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 6,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d1a3ddc96b68ac039702",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d1a3ddc96b68ac039701",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1a3ddc96b68ac039703",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d1a3ddc96b68ac039701",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1a3ddc96b68ac039704",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d1a3ddc96b68ac039701",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d1a6ddc96b68ac039705",
						"_tpl": "5aa7e4a4e5b5b000137b76f2",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657fa87fc6679fefb3051e32",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 4,
							"y": 6,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d1a6ddc96b68ac039706",
						"_tpl": "657f925dada5fadd1f07a57a",
						"parentId": "6822d1a6ddc96b68ac039705",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1a6ddc96b68ac039707",
						"_tpl": "657f92acada5fadd1f07a57e",
						"parentId": "6822d1a6ddc96b68ac039705",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1a6ddc96b68ac039708",
						"_tpl": "657f92e7f4c82973640b2354",
						"parentId": "6822d1a6ddc96b68ac039705",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d1ebddc96b68ac03a636",
						"_tpl": "5a7c4850e899ef00150be885",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d1ebddc96b68ac03a638",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d1ebddc96b68ac03a636",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1ebddc96b68ac03a639",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d1ebddc96b68ac03a636",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d1ebddc96b68ac03a63a",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d1ebddc96b68ac03a636",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d209ddc96b68ac03a63d",
						"_tpl": "5645bc214bdc2d363b8b4571",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 8,
							"y": 0,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d209ddc96b68ac03a63f",
						"_tpl": "657bae18b7e9ca9a02045c0a",
						"parentId": "6822d209ddc96b68ac03a63d",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d209ddc96b68ac03a640",
						"_tpl": "657baeaacfcf63c951052db3",
						"parentId": "6822d209ddc96b68ac03a63d",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d209ddc96b68ac03a641",
						"_tpl": "657baecbc6f689d3a205b863",
						"parentId": "6822d209ddc96b68ac03a63d",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822d24bddc96b68ac03b488",
						"_tpl": "5a7c4850e899ef00150be885",
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"upd": {
							"StackObjectsCount": 1,
							"SpawnedInSession": false
						},
						"location": {
							"x": 2,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822d24bddc96b68ac03b48a",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822d24bddc96b68ac03b488",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d24bddc96b68ac03b48b",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822d24bddc96b68ac03b488",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822d24bddc96b68ac03b48c",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822d24bddc96b68ac03b488",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e1b1185ce152ec050acf",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 12,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad0",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822e1b1185ce152ec050acf",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad1",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822e1b1185ce152ec050acf",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad2",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822e1b1185ce152ec050acf",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					},
        ],
      },
      {
        Items: [
          {
						"_id": "6822e1b1185ce152ec050ad3",
						"_tpl": "5aa7cfc0e5b5b00015693143",
						"upd": {
							"StackObjectsCount": 1,
							"sptPresetId": "657bc6ceaab96fccee08beb2",
							"SpawnedInSession": false
						},
						"parentId": "5fe49444ae6628187a2e78b8",
						"slotId": "hideout",
						"location": {
							"x": 0,
							"y": 8,
							"r": "Horizontal"
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad4",
						"_tpl": "657baaf0b7e9ca9a02045c02",
						"parentId": "6822e1b1185ce152ec050ad3",
						"slotId": "Helmet_top",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad5",
						"_tpl": "657bab6ec6f689d3a205b85f",
						"parentId": "6822e1b1185ce152ec050ad3",
						"slotId": "Helmet_back",
						"upd": {
							"SpawnedInSession": false
						}
					},
					{
						"_id": "6822e1b1185ce152ec050ad6",
						"_tpl": "657babc6f58ba5a6250107a2",
						"parentId": "6822e1b1185ce152ec050ad3",
						"slotId": "Helmet_ears",
						"upd": {
							"SpawnedInSession": false
						}
					}
        ],
      },
    ],
  ]
}
