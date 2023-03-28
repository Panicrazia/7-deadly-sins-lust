import { EntityFlag } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function ABSOLUTE_CHAOS(player: EntityPlayer) {
    let horse = isHorsePill(player);

    //GlitchItem(player)
    //placeholder to check glitching items, is actually a bomb pill
    for (const entity of Object.values(Isaac.GetRoomEntities())) {
        entity.AddEntityFlags(EntityFlag.ICE);
    }
}
