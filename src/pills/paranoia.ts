function PillEffectPARANOIA(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    let index = GetEntityIndex(player)
	let extraVanishingTwins = horse && 2 || 1

    if(Mod.DataTable[index].ExtraVanishingTwins === undefined) {
        Mod.DataTable[index].ExtraVanishingTwins = extraVanishingTwins
    }
else {
        Mod.DataTable[index].ExtraVanishingTwins = Mod.DataTable[index].ExtraVanishingTwins + extraVanishingTwins


    player.AddCacheFlags(CacheFlag.CACHE_FAMILIARS)
    player.EvaluateItems()
end