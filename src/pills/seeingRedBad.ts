function PillEffectSEEING_RED_BAD(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    for i=1, (horse && 3 || 1) + ((#Isaac.GetRoomEntities() > 0 ) && 2 || 0), 1 {
        Isaac.Spawn(EntityType.ENTITY_NEEDLE, 0, 0, player.Position, Vector(0,0), undefined)
        //print(i, "Needle Spawned")


    ForceCloseDoors()

    for i, entity in ipairs(Isaac.GetRoomEntities()) {
        if entity.IsActiveEnemy(false) {
            //TODO. probs shouldnt effect bosses huh
            let data = entity.GetData()
            if data.BasedAndRedPilled === undefined {
                //Enemies {nt need to be turned to base versions, but I could, i can see either way
                data.BasedAndRedPilled = true
                entity.ToNPC().MakeChampion(entity.InitSeed, ChampionColor.DARK_RED, false)
                entity.ToNPC().PlaySound(SoundEffect.SOUND_LARYNX_SCREAM_MED,(horse && 1.0 || 0.8),2,false,0.7)
                entity.AddEntityFlags(EntityFlag.FLAG_NO_STATUS_EFFECTS |
                //EntityFlag.FLAG_NO_FLASH_ON_DAMAGE |
                EntityFlag.FLAG_NO_KNOCKBACK |
                EntityFlag.FLAG_NO_PHYSICS_KNOCKBACK |
                EntityFlag.FLAG_EXTRA_GORE |
                EntityFlag.FLAG_NO_SPIKE_DAMAGE)
                if(entity.Type === EntityType.ENTITY_NEEDLE) {
                    entity.AddEntityFlags(EntityFlag.FLAG_PERSISTENT)
                    //dark red needles are pretty unfair
                    entity.ToNPC().MakeChampion(entity.InitSeed, ChampionColor.RED, false)
                }
else {
                    entity.ToNPC().MakeChampion(entity.InitSeed, ChampionColor.DARK_RED, false)
                    entity.MaxHitPoints = entity.MaxHitPoints * (horse && 3 || 2)
                    entity.HitPoints = entity.MaxHitPoints




end

for i, entity in ipairs(Isaac.GetRoomEntities()) {
    if entity.IsActiveEnemy(false) && !entity.IsBoss() {
        if(flag === 1) {
            entity.SetSize(entity.Size *.80, entity.SizeMulti *.8, 1)

        if(flag === 2) {
            entity.Remove()
            if((Random()%(Mod.DataTable[index].ClottingAgentTimer[2] && 2 || 4)) === 0) {
                SpawnClot(player, 7, entity.Position)
            }
else {
                Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.PLAYER_CREEP_RED, 0, entity.Position, Vector(0,0), undefined)


        entity.SpriteScale = entity.SizeMulti
        if(entity.ToNPC().ChampionColor === ChampionColor.DARK_RED) {

            //entity.shrink()
