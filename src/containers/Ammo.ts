export class Ammo {

    public ammoNames = [
        '7.62x25',
        '9x18',
        '9x19',
        '9x21',
        '.357',
        '.45',
        '4.6x30',
        '5.7x28',
        '5.45x39',
        '5.56x45',
        '.300',
        '7.62x39',
        '7.62x51',
        '7.62x54',
        '.338',
        '9x39',
        '.366',
        '12.7x55',
        '12/70',
        '20/70',
        '23x75',
    ]

    public items = {
        "7.62x25": {
            items: {
                "7.62x25_common": [
                    "573602322459776445391df1", // 7.62x25mm TT LRNPC
                    "573601b42459776410737435", // 7.62x25mm TT LRN
                    "5735ff5c245977640e39ba7e", // 7.62x25mm TT FMJ43
                    "5736026a245977644601dc61", // 7.62x25mm TT P gl
                    "573603c924597764442bd9cb", // 7.62x25mm TT PT gzh
                ],
                "7.62x25_uncommon": [
                    "5735fdcd2459776445391d61", // 7.62x25mm TT AKBS
                ],
                "7.62x25_rare": [
                    "573603562459776430731618", // 7.62x25mm TT Pst gzh
                ],
            }
        },
        "9x18": {
            items: {
                "9x18_common": [
                    "5737207f24597760ff7b25f2", // 9x18mm PM PSV
                    "573719762459775a626ccbc1", // 9x18mm PM P gzh 
                    "57371f8d24597761006c6a81", // 9x18mm PM PSO gzh
                    "57371f2b24597761224311f1", // 9x18mm PM PS gs PPO 
                    "57371eb62459776125652ac1", // 9x18mm PM PRS gs
                    "57371b192459775a9f58a5e0", // 9x18mm PM PPe gzh 
                    "57371e4124597760ff7b25f1", // 9x18mm PM PPT gzh 
                    "5737201124597760fc4431f1", // 9x18mm PM Pst gzh 
                    "573720e02459776143012541", // 9x18mm PM RG028 gzh 
                ],
                "9x18_uncommon": [
                    "57372140245977611f70ee91", // 9x18mm PM SP7 gzh
                    "5737218f245977612125ba51", // 9x18mm PM SP8 gzh
                    "573718ba2459775a75491131", // 9x18mm PM BZhT gzh
                ],
                "9x18_rare": [
                    "57371aab2459775a77142f22", // 9x18mm PMM PstM gzh
                    "573719df2459775a626ccbc2", // 9x18mm PM PBM gzh
                ],  
            }
        },
        "9x19": {
            items: {
                "9x19_common": [
                    "58864a4f2459770fcc257101", // 9x19mm PSO gzh
                    "5c3df7d588a4501f290594e5", // 9x19mm Green Tracer 
                    "64b7bbb74b75259c590fa897", // 9x19mm FMJ M882
                    "56d59d3ad2720bdb418b4577", // 9x19mm Pst gzh
                ],
                "9x19_uncommon": [
                    "5efb0e16aeb21837e749c7ff", // 9x19mm QuakeMaker
                    "5a3c16fe86f77452b62de32a", // 9x19mm Luger CCI
                ],
                "9x19_rare": [
                    "5c0d56a986f774449d5de529", // 9x19mm RIP
                    "5c925fa22e221601da359b7b", // 9x19mm AP 6.3
                    "5efb0da7a29a85116f6ea05f", // 9x19mm PBP gzh
                ],  
            }
        },
        "9x21": {
            items: {
                "9x21_common": [
                    "5a26ac06c4a282000c5a90a8", // 9x21mm PE gzh
                    "5a26abfac4a28232980eabff", // 9x21mm P gzh
                ],
                "9x21_uncommon": [
                    "5a269f97c4a282000b151807", // 9x21mm PS gzh
                    "6576f93989f0062e741ba952", // 9x21mm 7U4
                ],
                "9x21_rare": [
                    "5a26ac0ec4a28200741e1e18", // 9x21mm BT gzh
                    "6576f4708ca9c4381d16cd9d", // 9x21mm 7N42 "Zubilo"
                ],  
            }
        },
        ".357": {
            items: {
                ".357_common": [
                    "62330c40bdd19b369e1e53d1", // .357 Magnum SP
                    "62330bfadc5883093563729b", // .357 Magnum HP
                ],
                ".357_uncommon": [
                    "62330c18744e5e31df12f516", // .357 Magnum JHP
                ],
                ".357_rare": [
                    "62330b3ed4dc74626d570b95", // .357 Magnum FMJ
                ],
            }
        },
        ".45": {
            items: {
                ".45_common": [
                    "5efb0d4f4bc50b58e81710f3", // .45 ACP Lasermatch FMJ
                    "5e81f423763d9f754677bf2e", // .45 ACP Match FMJ
                ],
                ".45_uncommon": [
                    "5efb0fc6aeb21837e749c801", // .45 ACP Hydra-Shok
                ],
                ".45_rare": [
                    "5ea2a8e200685063ec28c05a", // .45 ACP RIP
                    "5efb0cabfb3e451d70735af5", // .45 ACP AP
                ],
            }
        },
        "4.6x30": {
            items: {
                "4.6x30_common": [
                    "5ba26812d4351e003201fef1", // 4.6x30mm Action SX
                ],
                "4.6x30_uncommon": [
                    "5ba26844d4351e00334c9475", // 4.6x30mm Subsonic SX
                    "64b6979341772715af0f9c39", // 4.6x30mm JSP SX 
                ],
                "4.6x30_rare": [
                    "5ba2678ad4351e44f824b344", // 4.6x30mm FMJ SX
                    "5ba26835d4351e0035628ff5", // 4.6x30mm AP SX
                ],
            }
        },
        "5.7x28": {
            items: {
                "5.7x28_common": [
                    "5cc86832d7f00c000d3a6e6c", // 5.7x28mm R37.F
                    "5cc86840d7f00c002412c56c", // 5.7x28mm R37.X
                    "5cc80f79e4a949033c7343b2", // 5.7x28mm SS198LF
                ],
                "5.7x28_uncommon": [
                    "5cc80f8fe4a949033b0224a2", // 5.7x28mm SS197SR
                    "5cc80f67e4a949035e43bbba", // 5.7x28mm SB193
                ],
                "5.7x28_rare": [
                    "5cc80f53e4a949000e1ea4f8", // 5.7x28mm L191
                    "5cc80f38e4a949001152b560", // 5.7x28mm SS190
                ],
            }
        },
        "5.45x39": {
            items: {
                "5.45x39_common": [
                    "56dff216d2720bbd668b4568", // 5.45x39mm HP
                    "56dff338d2720bbd668b4569", // 5.45x39mm PRS gs
                    "56dff421d2720b5f5a8b4567", // 5.45x39mm SP
                    "56dff4ecd2720b5f5a8b4568", // 5.45x39mm US gs
                    "56dff4a2d2720bbd668b456a", // 5.45x39mm T gs 
                    "56dff0bed2720bb0668b4567", // 5.45x39mm FMJ
                ],
                "5.45x39_uncommon": [
                    "56dff3afd2720bba668b4567", // 5.45x39mm PS gs
                    "56dff2ced2720bb4668b4567", // 5.45x39mm PP gs
                    "56dff061d2720bb5668b4567", // 5.45x39mm BT gs 
                ],
                "5.45x39_rare": [
                    "61962b617c6c7b169525f168", // 5.45x39mm 7N40 
                    "56dfef82d2720bbd668b4567", // 5.45x39mm BP gs
                    "56dff026d2720bb8668b4567", // 5.45x39mm BS gs
                    "5c0d5e4486f77478390952fe", // 5.45x39mm PPBS gs "Igolnik"
                ],
            }
        },
        "5.56x45": {
            items: {
                "5.56x45_common": [
                    "5c0d5ae286f7741e46554302", // 5.56x45mm Warmageddon
                    "59e6927d86f77411da468256", // 5.56x45mm HP
                    "59e6918f86f7746c9f75e849", // 5.56x45mm MK 255 Mod 0 (RRLP)
                    "59e6920f86f77411d82aa167", // 5.56x45mm FMJ
                    "59e68f6f86f7746c9f75e846", // 5.56x45mm M856
                ],
                "5.56x45_uncommon": [
                    "54527a984bdc2d4e668b4567", // 5.56x45mm M855
                    "60194943740c5d77f6705eea", // 5.56x45mm MK 318 Mod 0 (SOST)
                    "59e6906286f7746c9f75e847", // 5.56x45mm M856A1
                ],
                "5.56x45_rare": [
                    "54527ac44bdc2d36668b4567", // 5.56x45mm M855A1
                    "54527ac44bdc2d36668b4567", // 5.56x45mm M855A1
                    "59e690b686f7746c9f75e848", // 5.56x45mm M995
                    "601949593ae8f707c4608daa", // 5.56x45mm SSA AP
                ],
            }
        },
        ".300": {
            items: {
                ".300_common": [
                    "6196365d58ef8c428c287da1", // .300 Whisper
                    "6196364158ef8c428c287d9f", // .300 Blackout V-Max
                ],
                ".300_uncommon": [
                    "5fbe3ffdf8b6a877a729ea82", // .300 Blackout BCP FMJ
                    "619636be6db0f2477964e710", // .300 Blackout M62 Tracer
                ],
                ".300_rare": [
                    "64b8725c4b75259c590fa899", // .300 Blackout CBJ
                    "5fd20ff893a8961fc660a954", // .300 Blackout AP
                ],
            }
        },
        "7.62x39": {
            items: {
                "7.62x39_common": [
                    "59e4d3d286f774176a36250a", // 7.62x39mm HP
                    "64b7af734b75259c590fa895", // 7.62x39mm SP
                    "64b7af5a8532cf95ee0a0dbd", // 7.62x39mm FMJ
                    "59e4d24686f7741776641ac7", // 7.62x39mm US gzh
                    "59e4cf5286f7741778269d8a", // 7.62x39mm T-45M1 gzh 
                ],
                "7.62x39_uncommon": [
                    "5656d7c34bdc2d9d198b4587", // 7.62x39mm PS gzh
                    "64b7af434b75259c590fa893", // 7.62x39mm PP gzh
                ],
                "7.62x39_rare": [
                    "59e0d99486f7744a32234762", // 7.62x39mm BP gzh 
                    "601aa3d2b2bcb34913271e6d", // 7.62x39mm MAI AP
                ],
            }
        },
        "7.62x51": {
            items: {
                "7.62x51_common": [
                    "5e023e88277cce2b522ff2b1", // 7.62x51mm Ultra Nosler
                    "5e023e6e34d52a55c3304f71", // 7.62x51mm TCW SP
                ],
                "7.62x51_uncommon": [
                    "5e023e53d4353e3302577c4c", // 7.62x51mm BCP FMJ 
                    "58dd3ad986f77403051cba8f", // 7.62x51mm M80
                ],
                "7.62x51_rare": [
                    "5a608bf24f39f98ffc77720e", // 7.62x51mm M62 Tracer
                    "5a6086ea4f39f99cd479502f", // 7.62x51mm M61
                    "5efb0c1bd79ff02a1f5e68d9", // 7.62x51mm M993
                ],
            }
        },
        "7.62x54": {
            items: {
                "7.62x54_common": [
                    "64b8f7c241772715af0f9c3d", // 7.62x54mm R HP BT
                    "64b8f7b5389d7ffd620ccba2", // 7.62x54mm R SP BT
                    "64b8f7968532cf95ee0a0dbf", // 7.62x54mm R FMJ
                ],
                "7.62x54_uncommon": [
                    "5e023cf8186a883be655e54f", // 7.62x54mm R T-46M gzh 
                    "5887431f2459777e1612938f", // 7.62x54mm R LPS gzh
                    "59e77a2386f7742ee578960a", // 7.62x54mm R PS gzh
                ],
                "7.62x54_rare": [
                    "5e023d34e8a400319a28ed44", // 7.62x54mm R BT gzh
                    "560d61e84bdc2da74d8b4571", // 7.62x54mm R SNB gzh 
                    "5e023d48186a883be655e551", // 7.62x54mm R BS gs
                ],
            }
        },
        ".338": {
            items: {
                ".338_common": [
                    "5fc382b6d6fa9c00c571bbc3", // .338 Lapua Magnum TAC-X
                    "5fc382c1016cce60e8341b20", // .338 Lapua Magnum UCW
                ],
                ".338_uncommon": [
                    "5fc275cf85fd526b824a571a", // .338 Lapua Magnum FMJ
                ],
                ".338_rare": [
                    "5fc382a9d724d907e2077dab", // .338 Lapua Magnum AP
                ],
            }
        },
        "9x39": {
            items: {
                "9x39_common": [
                    "6576f96220d53a5b8f3e395e", // 9x39mm FMJ
                ],
                "9x39_uncommon": [
                    "57a0dfb82459774d3078b56c", // 9x39mm SP-5 gs
                ],
                "9x39_rare": [
                    "5c0d668f86f7747ccb7f13b2", // 9x39mm SPP gs
                    "61962d879bb3d20b0946d385", // 9x39mm PAB-9 gs
                    "5c0d688c86f77413ae3407b2", // 9x39mm BP gs
                    "57a0e5022459774d1673f889", // 9x39mm SP-6 gs
                    "57a0e5022459774d1673f889", // 9x39mm SP-6 gs
                ],
            }
        },
        ".366": {
            items: {
                ".366_common": [
                    "59e6658b86f77411d949b250", // .366 TKM Geksa
                    "59e6542b86f77411dc52a77a", // .366 TKM FMJ
                ],
                ".366_uncommon": [
                    "59e655cb86f77411dc52a77b", // .366 TKM EKO
                ],
                ".366_rare": [
                    "5f0596629e22f464da6bbdd9", // .366 TKM AP-M
                ],
            }
        },
        "12.7x55": {
            items: {
                "12.7x55_common": [
                    "5cadf6ddae9215051e1c23b2", // 12.7x55mm PS12A
                ],
                "12.7x55_uncommon": [
                    "5cadf6ddae9215051e1c23b2", // 12.7x55mm PS12
                ],
                "12.7x55_rare": [
                    "5cadf6eeae921500134b2799", // 12.7x55mm PS12B
                ],
            }
        },
        "12/70": {
            items: {
                "12/70_common": [
                    "5d6e6772a4b936088465b17c", // 12/70 5.25mm buckshot
                    "5d6e67fba4b9361bc73bc779", // 12/70 6.5mm Express buckshot
                    "560d5e524bdc2d25448b4571", // 12/70 7mm buckshot
                    "5d6e68d1a4b93622fe60e845", // 12/70 SuperFormance HP slug
                    "5d6e6869a4b9361c140bcfde", // 12/70 Grizzly 40 slug
                    "5d6e68b3a4b9361bca7e50b5", // 12/70 Copper Sabot Premier HP slug
                    "58820d1224597753c90aeb13", // 12/70 lead slug
                    "5d6e6891a4b9361bd473feea", // 12/70 "Poleva-3" slug
                    "5d6e68dea4b9361bcc29e659", // 12/70 Dual Sabot slug
                    "5d6e68e6a4b9361c140bcfe0", // 12/70 FTX Custom Lite slug
                    "5d6e689ca4b9361bc8618956", // 12/70 "Poleva-6u" slug
                ],
                "12/70_uncommon": [
                    "5d6e6806a4b936088465b17e", // 12/70 8.5mm Magnum buckshot 
                    "64b8ee384b75259c590fa89b", // 12/70 Piranha
                    "5d6e68c4a4b9361b93413f79", // 12/70 makeshift .50 BMG slug 
                ],
                "12/70_rare": [
                    "5d6e6911a4b9361bd5780d52", // 12/70 flechette 
                    "5c0d591486f7744c505b416f", // 12/70 RIP
                    "5d6e68a8a4b9360b6c0d54e2", // 12/70 AP-20 armor-piercing slug
                ],
            }
        },
        "20/70": {
            items: {
                "20/70_common": [
                    "5d6e695fa4b936359b35d852", // 20/70 5.6mm buckshot
                    "5d6e69b9a4b9361bc8618958", // 20/70 6.2mm buckshot
                    "5a38ebd9c4a282000d722a5b", // 20/70 7.5mm buckshot
                ],
                "20/70_uncommon": [
                    "5d6e69c7a4b9360b6c0d54e4", // 20/70 7.3mm buckshot
                    "5d6e6a53a4b9361bd473feec", // 20/70 "Poleva-3" slug
                    "5d6e6a42a4b9364f07165f52", // 20/70 "Poleva-6u" slug
                ],
                "20/70_rare": [
                    "5d6e6a5fa4b93614ec501745", // 20/70 Devastator slug
                    "5d6e6a05a4b93618084f58d0", // 20/70 Star slug
                ],
            }
        },
        "23x75": {
            items: {
                "23x75_common": [
                    "5f647f31b6238e5dd066e196", // 23x75mm Shrapnel-25 buckshot
                ],
                "23x75_uncommon": [
                    "5e85a9a6eacf8c039e4e2ac1", // 23x75mm Shrapnel-10 buckshot
                ],
                "23x75_rare": [
                    "5e85a9f4add9fe03027d9bf1", // 23x75mm Zvezda flashbang round
                    "5e85aa1a988a8701445df1f5", // 23x75mm Barrikada slug
                ],
            }
        },
    }
}