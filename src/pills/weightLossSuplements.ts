function PillEffectWEIGHT_LOSS_SUPPLEMENTS(pillEffect, player, flags)
/**
 * I am pretty sure this is related to the bipolar pill, dunno why its in here
 *
 */
    let horse = IsHorsePill(player)
    //player.TryRemoveNullCostume(NullItemID.ID_JACOB)
    //player.TryRemoveNullCostume(NullItemID.ID_ESAU)
    //player.ResetItemState()
    //print(player.GetCollectibleNum(81, true))
    //print(player.GetCollectibleNum(81, false))
    //player.CheckFamiliar(40, player.GetCollectibleNum(81), RNG(), Isaac.GetItemConfig().GetCollectible(81), -1)
    //player.AddCacheFlags(CacheFlag.CACHE_ALL)
    //player.EvaluateItems()
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT))
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Cooldown)
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Count)
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Item)
    RenderExtraLivesCounter(player, 1)
    let effects = player.GetEffects().GetEffectsList()

    pauseVars.shouldUnpause = true

    //Isaac.GetPlayer().GetEffects().RemoveCollectibleEffect(CollectibleType.COLLECTIBLE_PAUSE, -1)
    //print(Isaac.GetPlayer().GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_PAUSE).Type)
    print(#effects)
    print(effects.Size)
    //print(effects.Get(0).Item.Name)
    //print(effects.Get(0).Item.Name)
    for i = 0, (#effects)-1, 1 {
        //print(effects.Get(i).Count)
        //print(effects.Get(i).Item.Tags)
        //effects.Get(i).Item.Hidden = true
        //
        print(effects.Get(i).Item.Type)
        print(effects.Get(i).Item.Name)
        print(effects.Get(i).Item.Description)

    let effectsManager = player.GetEffects()
    //effectsManager.AddCollectibleEffect(CollectibleType.COLLECTIBLE_INNER_CHILD, false)
    //effectsManager.AddTrinketEffect(TrinketType.TRINKET_BROKEN_ANKH, false, 1)
    //player.SetColor(Color(1.5,1.7,2.0,1.0,0.05,0.11,0.2), -1, 1, false, false)
end