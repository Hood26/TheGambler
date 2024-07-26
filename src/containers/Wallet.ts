export class Wallet {

  public parent = "wallet";
  public price_generate = true;
  
    public rarities = [
      "_extremely_rare", 
      "_rare", 
      "_kinda_rare", 
      "_uncommon", 
      "_common",
      "_extra_common"
    ]
    public stackable = [true, true, true, true, true, true]
    public reward_amount = [
      1000000, 
      500000, 
      300000, 
      100000, 
      50000,
      25000
    ]
    public rewards = [
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'],
      ['5449016a4bdc2d6f028b456f']
    ]

/*
  public items = {
    wallet_extremely_rare: [
      1000000
    ],
    
    wallet_rare: [
      500000
    ],
    
    wallet_kinda_rare: [
      300000
    ],

    wallet_uncommon: [
      100000
    ],

    wallet_common: [
      50000
    ]
  };
  */
}
