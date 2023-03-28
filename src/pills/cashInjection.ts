import {
    BombSubType,
    EntityType,
    KeySubType,
    PickupVariant,
} from "isaac-typescript-definitions";
import { game } from "isaacscript-common";
import { isHorsePill } from "./pills";

function SEEING_GOLD_GOOD(player: EntityPlayer) {
    let horse = isHorsePill(player);

    game.GetRoom().TurnGold();
    //TODO
    //probs should turn poops golden too (maybe that && the room thing should be for horsepills only?)
    for (const entity of Object.values(Isaac.GetRoomEntities())) {
        entity.AddMidasFreeze(EntityRef(player), 150);
        if (horse) {
            if (entity.Type == EntityType.PICKUP) {
                if (
                    entity.Variant == PickupVariant.KEY &&
                    entity.SubType !== KeySubType.GOLDEN
                ) {
                    entity
                        .ToPickup()
                        ?.Morph(
                            EntityType.PICKUP,
                            PickupVariant.KEY,
                            KeySubType.GOLDEN,
                        );
                }
                if (
                    entity.Variant == PickupVariant.BOMB &&
                    entity.SubType !== BombSubType.GOLDEN
                ) {
                    if (
                        entity.SubType === BombSubType.TROLL ||
                        entity.SubType === BombSubType.GOLDEN_TROLL
                    ) {
                        entity
                            .ToPickup()
                            ?.Morph(
                                EntityType.PICKUP,
                                PickupVariant.BOMB,
                                BombSubType.GOLDEN_TROLL,
                                true,
                                true,
                                true,
                            );
                    } else {
                        entity
                            .ToPickup()
                            ?.Morph(
                                EntityType.PICKUP,
                                PickupVariant.BOMB,
                                BombSubType.GOLDEN,
                            );
                    }
                }
            }
        }
    }
}
