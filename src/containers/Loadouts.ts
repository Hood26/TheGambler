export class Loadouts {

  public parent = "loadout";
  
  public rarities = [
    "_rare", 
    "_uncommon", 
    "_common"
  ];

  public guaranteed_stackable = [false, false, false];
  public guaranteed_reward_amount = [1,1,1];
  public guaranteed_rewards = [
    'weapon', 'helmet', 'headset', 'armor', 'rig', 'backpack', 'food', 'stim'
  ];

  public rewards = undefined;
}
