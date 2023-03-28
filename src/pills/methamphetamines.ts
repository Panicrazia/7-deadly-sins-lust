/**
 * :GetDevilRoomDeals() <-- see if this method tracks devil deals made, it wont work for multiplayer but its
 * @param pillEffect
 * @param player
 * @param flags
 */


function PillEffectMETH(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    let index = GetEntityIndex(player)

    //Game.GetDevilRoomDeals()
    //Mod.DataTable[index].DevilDealsTaken
    //turns out there was actually a devil deal tracker lol

    if(Game.GetDevilRoomDeals() > 0) {
        Mod.DataTable[index].Methamphetamines = {((horse && 2 || 1) * 900), -1}
    }
else {
        Mod.DataTable[index].Methamphetamines = {((horse && 2 || 1) * 900), math.min(Game.GetDevilRoomDeals(), 10)}


    MethCacheFlags(player)

function MethCacheFlags(player)
    player.AddCacheFlags(CacheFlag.CACHE_DAMAGE)
    player.AddCacheFlags(CacheFlag.CACHE_FIREDELAY)
    player.AddCacheFlags(CacheFlag.CACHE_SHOTSPEED)
    player.AddCacheFlags(CacheFlag.CACHE_RANGE)
    player.AddCacheFlags(CacheFlag.CACHE_SPEED)
    player.AddCacheFlags(CacheFlag.CACHE_TEARFLAG)
    player.AddCacheFlags(CacheFlag.CACHE_FLYING)
    player.EvaluateItems()
end

if(Mod.DataTable[index].Methamphetamines !== undefined && Mod.DataTable[index].Methamphetamines[1] > 0) {
    Mod.DataTable[index].Methamphetamines[1] = Mod.DataTable[index].Methamphetamines[1] - 1
    if(Mod.DataTable[index].Methamphetamines[1] === 0 ) {
        Mod.DataTable[index].Methamphetamines = {0,0}
        MethCacheFlags(player)
