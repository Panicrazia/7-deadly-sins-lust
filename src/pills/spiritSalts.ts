function PillEffectSPIRIT_SALTS(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    let index = GetEntityIndex(player)

    //I really like how this pill turned out

    if(Mod.DataTable[index].SpiritSalts === undefined) {
        Mod.DataTable[index].SpiritSalts = {((horse && 2 || 1) * 100), horse}
    }
else {
        Mod.DataTable[index].SpiritSalts[1] = Mod.DataTable[index].SpiritSalts[1] + ((horse && 2 || 1) * 100)
        Mod.DataTable[index].SpiritSalts[2] = horse

    if(horse) {
        Isaac.Spawn(EntityType.ENTITY_EFFECT, 189, 0, player.Position, Vector(0,0), undefined)
    }
else {
        Isaac.Spawn(EntityType.ENTITY_EFFECT, 189, 1, player.Position, Vector(0,0), undefined)

    //1000.189.0 are the rifts, 1000.189.1 are the ghoties
end



if(Mod.DataTable[index].SpiritSalts !== undefined && Mod.DataTable[index].SpiritSalts[1] > 0) {
    if(Mod.DataTable[index].SpiritSalts[1] % (20/(Mod.DataTable[index].SpiritSalts[2] && 2 || 1)) === 0) {
        //Isaac.Spawn(EntityType.ENTITY_EFFECT, 189, 1, player.Position, Vector(0,0), undefined)
        Isaac.Spawn(EntityType.ENTITY_EFFECT, 189, 1, player.Position + Vector(0,600).Rotated(math.random()*360), Vector(0,0), undefined)

    Mod.DataTable[index].SpiritSalts[1] = Mod.DataTable[index].SpiritSalts[1] - 1

