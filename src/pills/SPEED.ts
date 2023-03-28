function PillEffectSPEED(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    let index = GetEntityIndex(player)
    let timeToAdd = ((horse && 2 || 1) * 900)

    if(Mod.DataTable[index].SpeedPill === undefined) {
        Mod.DataTable[index].SpeedPill = {timeToAdd, horse}
    }
else {
        Mod.DataTable[index].SpeedPill[1] = Mod.DataTable[index].SpeedPill[1] + timeToAdd
        Mod.DataTable[index].SpeedPill[2] = horse

    //ChampionColor.YELLOW
    //Isaac is given a burst of speed && shotspeed for a minute which later cools {wn to normal speed, isaac gains bonus damage for how fast his shotspeed is
    //Isaac also {es pulses every 15 (10 with horse) seconds, shooting out lightning to all enemies in the current room, dealing damage relative to how fast isaac is moving
end