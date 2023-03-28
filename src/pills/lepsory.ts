function PillEffectLEPROSY(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    if(horse) {
        Isaac.Spawn(EntityType.ENTITY_FAMILIAR, FamiliarVariant.LEPROCY, 0, player.Position, Vector(0,0), player)
        Isaac.Spawn(EntityType.ENTITY_FAMILIAR, FamiliarVariant.LEPROCY, 0, player.Position, Vector(0,0), player)
        //Isaac.Spawn(EntityType.ENTITY_FAMILIAR, FamiliarVariant.LEPROSY, 0, player.Position, Vector(0,0), player)
        //seem to be the same?
        Isaac.Spawn(EntityType.ENTITY_FAMILIAR, FamiliarVariant.SWARM_FLY_ORBITAL, 0, player.Position, Vector(0,0), player)


    player.AddRottenHearts(player.GetMaxHearts())
end