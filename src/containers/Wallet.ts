export class Wallet {

  public parent = "wallet";
  public price_generate = true;
  
    public rarities = [
      "_kinda_rare", 
      "_rare", 
      "_extra_uncommon", 
      "_more_uncommon", 
      "_uncommon", 
      "_common",
      "_extra_common",
      "_base"
    ]
    public stackable = [true, true, true, true, true, true, true, true]
    public reward_amount = [
      2000000, 
      1000000, 
      500000, 
      250000, 
      100000,
      50000,
      25000,
      0
    ]
    public rewards = [ 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'], 
      ['5449016a4bdc2d6f028b456f'],
      ['5449016a4bdc2d6f028b456f'],
      ['5449016a4bdc2d6f028b456f'],
      ['5449016a4bdc2d6f028b456f'],
      ['NaN']
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
