import { EntityType, PickupVariant } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

//TODO. with false phd cause coins to be thrown in a cone infront of isaac, increasing the chance he can collect them all again

//leaving them random feels better since you can sometimes get more,
//essentially it gives a reason to use this pill even when knowing it,
//which is something I think should be a component of most bad pills
function SEEING_GOLD_BAD(player: EntityPlayer) {
    let horse = isHorsePill(player);
    let coinsToDrop = math.ceil(
        player.GetNumCoins() * ((horse && 3) || 1) * 0.125,
    );
    player.AddCoins(-coinsToDrop);
    for (let i = 0; i < coinsToDrop; i++) {
        let coinToSpawn = Isaac.Spawn(
            EntityType.PICKUP,
            PickupVariant.COIN,
            0,
            player.Position,
            Vector(0, -10).Rotated(math.random(360)),
            player,
        );
        if (
            coinToSpawn !== undefined &&
            coinToSpawn.Type === EntityType.PICKUP
        ) {
            (coinToSpawn.ToPickup() as EntityPickup).Timeout =
                math.random(35) + 105;
        }
    }
    player.AnimateSad();
}
