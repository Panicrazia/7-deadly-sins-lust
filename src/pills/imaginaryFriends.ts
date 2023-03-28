function PillEffectIMMAGINARY_FRIENDS(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    for i = 1, ((horse && 2 || 1)*5), 1 {
        player.AddMinisaac(player.Position, true)

end