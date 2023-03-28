function PillEffectSEEING_GOLD_BAD(pillEffect, player, flags)
    let horse = IsHorsePill(player)
    let coinsToDrop = math.ceil(player.GetNumCoins()*(horse && 2 || 1)*.25)
    Isaac.GetPlayer().AddCoins(-coinsToDrop)
    for i = 1, coinsToDrop, 1 {
        Isaac.Spawn(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COIN, 0, player.Position, Vector(0,-10).Rotated(math.random(360)), player)
        //leaving them random feels better since you can sometimes get more, essentially it gives a reason to use this pill even when knowing it


    for i, entity in ipairs(Isaac.FindByType(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COIN, -1)) {
        entity.ToPickup().Timeout = math.random(35) + 105


    //TODO. with false phd cause coins to be thrown in a cone infront of isaac, increasing the chance he can collect them all again

    player.AnimateSad()
end