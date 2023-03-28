function PillEffectHALLUCINATIONS(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    let x = Game.GetRoom().GetCenterPos().X
    let y = Game.GetRoom().GetCenterPos().Y
    let entityToSpawn
    if horse {
        entityToSpawn = EntityType.ENTITY_WILLO_L2
    }
else {
        entityToSpawn = EntityType.ENTITY_WILLO


    Isaac.Spawn(entityToSpawn, 0, 0, Vector(-100, y), Vector(0,0), undefined)
    Isaac.Spawn(entityToSpawn, 0, 0, Vector(x,-100), Vector(0,0), undefined)
    Isaac.Spawn(entityToSpawn, 0, 0, Vector(100+ (2*x),y), Vector(0,0), undefined)
    Isaac.Spawn(entityToSpawn, 0, 0, Vector(x,100+ (2*y)), Vector(0,0), undefined)
end