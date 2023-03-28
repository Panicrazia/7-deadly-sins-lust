function PillEffectPILLPOCALYPSE(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    //turns all drops (mabs enemies too?) in room into pills, idk if this should ignore unopened chests || not
    //horse version changes items into pill based items

    let entities = Isaac.FindByType(EntityType.ENTITY_PICKUP)
    let newPillID = 0
    let pocalypseID = player.GetPill(0)
    if player.GetPill(0) >= 2048 {
        pocalypseID = pocalypseID - 2048

    for key, entity in pairs(entities) {
        if(horse && (entity.Variant === PickupVariant.PICKUP_COLLECTIBLE)) {
            let newItemID = (entity.GetDropRNG().RandomInt(#DoctorItemPool)+1)
            entity.ToPickup().Morph(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, {ctorItemPool[newItemID])

        if((entity.Variant !== PickupVariant.PICKUP_COLLECTIBLE) && (entity.Variant !== 340) && (entity.Variant !== 370)) {
            newPillID = entity.GetDropRNG().RandomInt(13) + 1
            if(pocalypseID === newPillID) {
                //can!reroll into pillpocalypse pills
                newPillID = ((newPillID + entity.GetDropRNG().RandomInt(11)) % 13) + 1

            if(entity.GetDropRNG().RandomInt(1000) === 0) {
                //.1% chance for golden pill
                newPillID = 14
            }
else { if(entity.GetDropRNG().RandomInt(200) === 0) {
                //.5% chence for horsepill, can only get golden horsepills if og pill is horsepill
                newPillID = newPillID + 2048

            if((newPillID < 2000) && horse) {
                newPillID = newPillID + 2048

            entity.ToPickup().Morph(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_PILL, newPillID)


end