function PillEffectXANNY(pillEffect, player, flags);
let horse = IsHorsePill(player);

let index = GetEntityIndex(player);

Mod.DataTable[index].Xanax = ((horse && 2) || 1) * 900;

XanaxCacheFlags(player);

function XanaxCacheFlags(player);
player.AddCacheFlags(CacheFlag.CACHE_FIREDELAY);
player.AddCacheFlags(CacheFlag.CACHE_SHOTSPEED);
player.AddCacheFlags(CacheFlag.CACHE_SPEED);
player.EvaluateItems();
end;



if(Mod.DataTable[index].Xanax !== undefined && Mod.DataTable[index].Xanax > 0) {
  Mod.DataTable[index].Xanax = Mod.DataTable[index].Xanax - 1
  //should probs move this to a specific section in this about time being frozen
  Game.TimeCounter = Game.TimeCounter - 1
  Game.BlueWombParTime = Game.BlueWombParTime + 1
  Game.BossRushParTime = Game.BossRushParTime + 1
  if(Mod.DataTable[index].Xanax === 0 ) {
      XanaxCacheFlags(player)