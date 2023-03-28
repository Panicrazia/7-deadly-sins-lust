function CurseOfTheBroken()
    //TODO. probably have it be a one time reroll with a chance instead turn the enemy into a dice enemy
    //what should happen is there is a timer above the items when you enter, signalling that they will be rerolled && possibly dissapear
    //this timer swould be used in other places so definetly { that, it will be useful later

    //I {nt think its possible to spawn an empty pedistal, try spawning a null item (id 0), thats the last thing i can think of (also try -1)
    //also use the command to see && hopefully it isnt one of those dead isaacs effects
    //with that dead isaac effect see if giving the player id as the thing works, it may be something like that

    // the dice enemies is a good idea but it should be a diff situation, && they should just be possibly random enemies in dice room layouts
    //dice enemies move slowly && { their effect when hitting isaac,
    //(idea is they should be near impossible to be accidentally hit, but if you want to { you can roll the dice)
    let room = Game.GetRoom()
    let entities = Isaac.FindByType(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE)
    for key, entity in pairs(entities) {
        //Isaac.RenderText(entity.ToPickup().State, 60, 60, 1 ,1 ,1 ,1 )
        if((entity.FrameCount > 50)
        && (entity.FrameCount%60 === 0)
        //does the rooms framecount !work?
        && (entity.SubType !== 0)
        && !(entity.ToPickup().Touched)) {
            //TODO. change poof to the right one, i have it in rosetinted goggles
            Game.SpawnParticles(entity.Position+Vector(0,0), EffectVariant.POOF02, 1, 0)

            if(entity.GetDropRNG().RandomInt(2) === 0) {
                entity.ToPickup().Morph(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, 0)
                //entity.ToPickup().Morph(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, entity.GetDropRNG().Next())
                //apparently just putting in 0 also makes it random idk
            }
else {
                entity.Remove()
                //if someone knows how to make a pedestal empty please tell me



end