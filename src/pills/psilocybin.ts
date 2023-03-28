function PillEffectPSILOCYBIN(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    for i = 1, (horse && 10 || 5), 1 {
        player.UseActiveItem(CollectibleType.COLLECTIBLE_WAVY_CAP, true, false, true, false, -1)

end