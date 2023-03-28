function PillEffectTHC(pillEffect, player, flags);
let horse = IsHorsePill(player);
let index = GetEntityIndex(player);
let level = Game.GetLevel();
let effectTime = ((horse && 2) || 1) * 430;

//TODO. this pill might be a little too OP

ApplyTHCItems(player);
player.SpawnMawOfVoid(75);
//Game.GetLevel().GetCurrentRoomDesc().Flags = Game.GetLevel().GetCurrentRoomDesc().Flags | RoomDescriptor.FLAG_PITCH_BLACK
print(Game.GetLevel().GetCurrentRoomDesc().Flags);
print(
  Game.GetLevel().GetCurrentRoomDesc().Flags | RoomDescriptor.FLAG_PITCH_BLACK,
);

let room = Game.GetRoom();

let writableRoomDesc = level.GetRoomByIdx(level.GetCurrentRoomIndex());

writableRoomDesc.Flags =
  Game.GetLevel().GetCurrentRoomDesc().Flags | RoomDescriptor.FLAG_PITCH_BLACK;

//room.Update()

//TODO. make all rooms dark

//Game.GetLevel().GetCurrentRoomDesc().Flags = 577

//Game.Darken(1, effectTime)
Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_SATANIC_BIBLE_USED, true);

Mod.DataTable[index].THC = effectTime;

function THCCacheFlags(player);
player.AddCacheFlags(CacheFlag.CACHE_FIREDELAY);
player.EvaluateItems();

function ApplyTHCItems(player);
let effectsManager = player.GetEffects();
effectsManager.AddCollectibleEffect(CollectibleType.COLLECTIBLE_2SPOOKY, true);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_BRIMSTONE,
  true,
);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_BRIMSTONE_BOMBS,
  true,
);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_HUNGRY_SOUL,
  true,
);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_PENTAGRAM,
  true,
);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_DARK_MATTER,
  true,
);
effectsManager.AddCollectibleEffect(
  CollectibleType.COLLECTIBLE_MAW_OF_THE_VOID,
  true,
);
effectsManager.AddTrinketEffect(TrinketType.TRINKET_NUMBER_MAGNET, true);
effectsManager.AddTrinketEffect(TrinketType.TRINKET_DEVILS_CROWN, true);

function RemoveTHCItems(player);
let effectsManager = player.GetEffects();
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_BRIMSTONE,
  -1,
);
effectsManager.RemoveCollectibleEffect(CollectibleType.COLLECTIBLE_2SPOOKY, -1);
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_BRIMSTONE_BOMBS,
  -1,
);
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_HUNGRY_SOUL,
  -1,
);
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_PENTAGRAM,
  -1,
);
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_DARK_MATTER,
  -1,
);
effectsManager.RemoveCollectibleEffect(
  CollectibleType.COLLECTIBLE_MAW_OF_THE_VOID,
  -1,
);
effectsManager.RemoveTrinketEffect(TrinketType.TRINKET_NUMBER_MAGNET, -1);
effectsManager.RemoveTrinketEffect(TrinketType.TRINKET_DEVILS_CROWN, -1);
end;

if(Mod.DataTable[index].THC !== undefined && Mod.DataTable[index].THC > 0) {
  if((((Mod.DataTable[index].THC-51)+ 51) % 50) === 0) {
      player.SpawnMawOfVoid(75)
      player.AddVelocity(player.GetAimDirection().Rotated(180).Normalized()*Vector(3,3))

  if((Mod.DataTable[index].THC-51) % 50 === 6) {
  //if((Mod.DataTable[index].THC-51) % 50 === 20) { //eye of the occult timing
  //if((Mod.DataTable[index].THC-51) % 50 === 6) { //normal brim timing
      player.AddControlsCooldown(15)

  if((Mod.DataTable[index].THC % 450) === 150 )then //200) || (Mod.DataTable[index].THC === 750) {
      player.GetEffects().AddCollectibleEffect(CollectibleType.COLLECTIBLE_BRIMSTONE, true)

  if(Mod.DataTable[index].THC === 434) {
      player.UseActiveItem(CollectibleType.COLLECTIBLE_MEGA_BLAST, false, false, true, true, -1)
      player.AddVelocity(player.GetAimDirection().Rotated(180).Normalized()*Vector(4,4))

  let coefficient = 1.0/(Mod.DataTable[index].THC+200)*250
  player.AddVelocity(player.GetAimDirection().Rotated(180).Normalized()*Vector(coefficient,coefficient))
  Mod.DataTable[index].THC = Mod.DataTable[index].THC - 1
  if(Mod.DataTable[index].THC === 1) {
      RemoveTHCItems(player)

  THCCacheFlags(player)