export class Loadouts {

  public parent = "loadout";
  
  public rarities = [
    "_rare", 
    "_uncommon", 
    "_common"
  ];

  public guaranteed_stackable = [false, false, false];
  public guaranteed_reward_amount = [1,1,1];
  public guaranteed_randomness = [false, false, true, false, false, false, false, false, false, false, false, false, false, false];
  public guaranteed_rewards = [
    'weapon', 'helmet', 'headset', 'armor', 'rig', 'backpack', 'loadout_grenade', 'loadout_grenade', 'loadout_facecovers', 'loadout_food', 'loadout_drink', 'loadout_light_bleed', 'loadout_light_bleed', 'loadout_heavy_bleed', 'loadout_heavy_bleed', 'loadout_stim', 'loadout_splint', 'loadout_healing',
  ];

  public rewards = undefined;
}
