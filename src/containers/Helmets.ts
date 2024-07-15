export class Helmets {

  public parent = "helmet";
  
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
    '5b4329f05acfc47a86086aa1', // DevTac Ronin ballistic helmet
    '5aa7e4a4e5b5b000137b76f2', // ZSh-1-2M helmet (Black cover)
    '5aa7e454e5b5b0214e506fa2', // ZSh-1-2M helmet (Olive Drab)
    '5d6d3716a4b9361bc8618872', // BNTI LShZ-2DTM helmet (Black)
    '5c091a4e0db834001d5addc8', // Maska-1SCh bulletproof helmet (Olive Drab)
    '5c0e874186f7745dc7616606', // Maska-1SCh bulletproof helmet (Killa Edition)
    '5aa7e276e5b5b000171d0647', // Altyn bulletproof helmet (Olive Drab)
    '5f60c74e3b85f6263c145586', // Rys-T bulletproof helmet (Black)
    '5ca20ee186f774799474abc2', // Vulkan-5 LShZ-5 bulletproof helmet (Black)
  ];
  

  public presets = [
    "extremely_rare", 
    "rare", 
    "uncommon", 
    "common"
  ]
}
