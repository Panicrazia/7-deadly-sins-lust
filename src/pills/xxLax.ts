function PillEffectXXLAX(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    for i=0, 8, 1 {
        Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 0, player.Position+(Vector(0,-90).Rotated(i*45)), Vector(0,0), undefined)

    Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 0, player.Position, Vector(0,0), undefined)
    for i=0, 8, 1 {
        Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 1, player.Position+(Vector(0,-70).Rotated(i*45)), Vector(0,0), undefined)

    player.UsePoopSpell(PoopSpellType.SPELL_FART)
    for i, entity in ipairs(Isaac.FindByType(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 0)) {
        entity.ToEffect().SetTimeout(200+math.floor(math.random()*100))
        entity.AddEntityFlags(EntityFlag.FLAG_FRIENDLY)

    for i, entity in ipairs(Isaac.FindByType(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 1)) {
        entity.ToEffect().SetTimeout(150+math.floor(math.random()*50))

    if horse {
        for i=0, 5, 1 {
            player.ThrowFriendlyDip(14, player.Position, Vector.Zero)


end