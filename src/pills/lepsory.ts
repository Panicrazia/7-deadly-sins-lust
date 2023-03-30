import { EntityType, FamiliarVariant } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function LEPROSY(player: EntityPlayer) {
    let horse = isHorsePill(player);

    if (horse) {
        Isaac.Spawn(
            EntityType.FAMILIAR,
            FamiliarVariant.LEPROSY,
            0,
            player.Position,
            Vector(0, 0),
            player,
        );
        Isaac.Spawn(
            EntityType.FAMILIAR,
            FamiliarVariant.LEPROSY,
            0,
            player.Position,
            Vector(0, 0),
            player,
        );
        //Isaac.Spawn(EntityType.ENTITY_FAMILIAR, FamiliarVariant.LEPROSY, 0, player.Position, Vector(0,0), player)
        //seem to be the same?
        Isaac.Spawn(
            EntityType.FAMILIAR,
            FamiliarVariant.SWARM_FLY_ORBITAL,
            0,
            player.Position,
            Vector(0, 0),
            player,
        );
    }
    player.AddRottenHearts(player.GetMaxHearts());
}
