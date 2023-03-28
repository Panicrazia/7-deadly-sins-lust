import {
    BlueFlySubType,
    EntityType,
    FamiliarVariant,
} from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function FRIENDS_TO_THE_VERY_END(player: EntityPlayer) {
    let horse = isHorsePill(player);
    for (let i = 0; i < ((horse && 2) || 1) * 7; i++) {
        Isaac.Spawn(
            EntityType.FAMILIAR,
            FamiliarVariant.BLUE_FLY,
            BlueFlySubType.WRATH,
            player.Position,
            Vector(0, 0),
            undefined,
        );
    }
}
