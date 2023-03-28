function PillEffectJESUS_PILLS(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    let stage = Game.GetLevel().GetStage()

    let curFloorIsAltpath = ((Game.GetLevel().GetStageType() === StageType.STAGETYPE_REPENTANCE) || (Game.GetLevel().GetStageType() === StageType.STAGETYPE_REPENTANCE_B))
    if(!Game.GetStateFlag(GameStateFlag.STATE_DEVILROOM_SPAWNED)) && (!IsBasement1()) {
        if((stage === LevelStage.STAGE1_1) || ((stage === LevelStage.STAGE1_2 && !curFloorIsAltpath) && horse)) {
            //yeah with a labarynth on floor 1 you get a 100% angel chance but hey whatever I cant stop that, plus it makes labs marginally better
            Game.SetLastDevilRoomStage(0)
        }
else {
            if(Mod.DataTable.JesusPillsChangedStage === undefined || horse) {
                let stageToTurnInto = math.max(Mod.DataTable.LastNaturalDevilRoom, (math.max(stage-(horse && 2 || 1), 1))+(curFloorIsAltpath && 1 || 0))
                Game.SetLastDevilRoomStage(stageToTurnInto)

                Mod.DataTable.JesusPillsChangedStage = true



    Game.GetLevel().AddAngelRoomChance((horse && 2 || 1)*(.5))
    Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_SATANIC_BIBLE_USED, false)
    Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_WOODEN_CROSS_REMOVED, false)
    Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_EVIL_BUM_LEFT, false)
    Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_BUM_KILLED, false)
    Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_SHOPKEEPER_KILLED_LVL, false)
    //.AddCollectibleEffect(CollectibleType, AddCostume, Count)
end