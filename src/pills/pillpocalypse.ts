import {
    CollectibleType,
    EntityType,
    PickupVariant,
} from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

//turns all drops (mabs enemies too?) in room into pills, idk if this should ignore unopened chests || not
//horse version changes items into pill based items
function PILLPOCALYPSE(player: EntityPlayer) {
    let horse = isHorsePill(player);

    player.UseActiveItem(CollectibleType.D20);

    let newPillID = 0;
    let pocalypseID = player.GetPill(0);
    if (horse) {
        pocalypseID -= 2048;
    }
    for (const entity of Isaac.FindByType(EntityType.PICKUP)) {
        if (entity.GetDropRNG().RandomInt(4) === 0) {
            //horse pills turning items into doctor items
            /*
            if(horse && (entity.Variant === PickupVariant.COLLECTIBLE)) {
                let newItemID = (entity.GetDropRNG().RandomInt(#DoctorItemPool)+1)
                entity.ToPickup().Morph(EntityType.ENTITY_PICKUP, PickupVariant.PICKUP_COLLECTIBLE, {ctorItemPool[newItemID])
            }
            */
            if (
                entity.Variant !== PickupVariant.COLLECTIBLE &&
                entity.Variant !== PickupVariant.BIG_CHEST &&
                entity.Variant !== PickupVariant.TROPHY
            ) {
                newPillID = entity.GetDropRNG().RandomInt(13) + 1;
                if (pocalypseID === newPillID) {
                    newPillID += entity.GetDropRNG().RandomInt(12);
                    if (newPillID > 13) {
                        newPillID -= 13;
                    }
                }
                if (entity.GetDropRNG().RandomInt(1000) === 0) {
                    //.1% chance for golden pill
                    newPillID = 14;
                }
                if (entity.GetDropRNG().RandomInt((horse && 4) || 200) === 0) {
                    newPillID += 2048;
                }
                (entity.ToPickup() as EntityPickup).Morph(
                    EntityType.PICKUP,
                    PickupVariant.PILL,
                    newPillID,
                );
            }
        }
    }
}
