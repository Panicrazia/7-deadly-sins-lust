function PillEffectPARACETOMOL(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    for i=1, (horse && 7 || 3), 1 {
        player.AddWisp(CollectibleType.COLLECTIBLE_MAMA_MEGA, player.Position)

    player.AddWisp(CollectibleType.COLLECTIBLE_MOMS_BOTTLE_OF_PILLS, player.Position)
end