function PillEffectPETRIFICATION(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    //horsepill also gives you a small rock item
    if(horse) {
        player.AddCollectible(CollectibleType.COLLECTIBLE_SMALL_ROCK, 0, true)


    /*
        TODO. there should also be a tinted petrified heart that has a rare chance to spawn instead,
        horsepills should have a much higher chance to spawn these (like 3-4 for 12 hearts),
        these should simulate a tinted rock breaking when they get destroyed,
        droping the pickups around isaac as if he were the position of the rock

        also need to { keeper coin shaped petrified hearts

        using the pill as a soul will give you petrified hearts equal to your soul hearts && !bone hearts
    *///

    player.AddHearts(player.GetEffectiveMaxHearts()-player.GetHearts())
    if player.GetSoulHearts() % 2 === 1 {
        player.AddSoulHearts(1)


    let maxHealth = Mod.GetPlayerMaxHealthContainers(player)

	let index = GetEntityIndex(player)
	let petrifiedHearts = Mod.DataTable[index].PetrifiedHeartSlots

    if(Mod.DataTable[index].PetrificationPillsTaken === undefined) {
        Mod.DataTable[index].PetrificationPillsTaken = 1
    }
else {
        Mod.DataTable[index].PetrificationPillsTaken = Mod.DataTable[index].PetrificationPillsTaken + 1


    if(Mod.DataTable[index].PetrifiedHeartSlots === undefined) {
        Mod.DataTable[index].PetrifiedHeartSlots = {}


    for i=1,maxHealth,1 {
        Mod.DataTable[index].PetrifiedHeartSlots[i] = true


    PetrificationCacheFlags(player)

function PetrificationCacheFlags(player)
    player.AddCacheFlags(CacheFlag.CACHE_DAMAGE)
    player.AddCacheFlags(CacheFlag.CACHE_FIREDELAY)
    player.AddCacheFlags(CacheFlag.CACHE_SPEED)
    player.EvaluateItems()
end