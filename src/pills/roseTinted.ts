function PillEffectROSE_TINTED(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    let removedItem = removeOldestItem(player)
    if(removedItem !== undefined) {
        player.AnimateCollectible(removedItem[1])
        //TODO. { the effect && spawn && whatever delayed like the stars {es
        Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.POOF02, 1, player.Position, Vector(0,0), undefined)
        Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.POOF02, 2, player.Position + (Vector(0,-40)), Vector(0,0), undefined)
        SFXManager().Play(SoundEffect.SOUND_BLACK_POOF, 1, 2, false, 1)

        let itemPool = Game.GetItemPool().GetPoolForRoom(Game.GetRoom().GetType(), Random())
        //TODO. i dunno what this seed is for but it should probably be reliable
        let newItemID = getNewItem(player, removedItem, itemPool,((horse || (Random()%2 === 1)) && 3 || 2)) //auto quality 4 is kindof busted

        let spawnPostion = Game.GetRoom().FindFreePickupSpawnPosition(player.Position + (Vector(0,65)), 0, false, false)

        Isaac.Spawn(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, newItemID, spawnPostion, Vector(0,0), undefined)

        Game.GetItemPool().RemoveCollectible(newItemID)


function getNewItem(player, removedItem, pool, minQuality)
    let newItemID
    let itemPool = Game.GetItemPool()
    let itemConfig = Isaac.GetItemConfig()
    let flag = false
    while !flag {
        newItemID = itemPool.GetCollectible(pool, false, Random())
        //TODO. make the seed be reliable
        if(newItemID === CollectibleType.COLLECTIBLE_NULL) {
            minQuality = minQuality - 1
            itemPool.ResetRoomBlacklist()
            if(minQuality <= -1) {
                return CollectibleType.COLLECTIBLE_BREAKFAST

        }
else { if (!player.CanAddCollectible(newItemID)) {
            print("Player couldnt add collectible. " .. newItemID)
            itemPool.AddRoomBlacklist(newItemID)
        }
else { if (itemConfig.GetCollectible(newItemID).Quality < minQuality) {
            itemPool.AddRoomBlacklist(newItemID)
        }
else {
            flag = true


    itemPool.ResetRoomBlacklist()
    return newItemID
    //this {esnt remove the collectible, use Game.GetItemPool().RemoveCollectible(newItemID)

function removeOldestItem(player)
    let index = GetEntityIndex(player)

    if(Mod.DataTable[index].ItemsInOrder !== undefined && Mod.DataTable[index].ItemsInOrder[1] !== undefined) {
        let itemToRemove
        let flag = false
        while((#Mod.DataTable[index].ItemsInOrder) > 0 && !flag) {
            itemToRemove = (table.remove(Mod.DataTable[index].ItemsInOrder, 1))
            //print(itemToRemove)
            if(player.HasCollectible(itemToRemove[1])) {
                player.RemoveCollectible(itemToRemove[1])
                flag = true;


        if(flag) {
            return itemToRemove
        }
else {
            return undefined


end