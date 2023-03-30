import { CollectibleType } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function PARACETOMOL(player: EntityPlayer) {
    let horse = isHorsePill(player);
    for (let i = 0; (horse && 7) || 3; 1) {
        player.AddWisp(CollectibleType.MAMA_MEGA, player.Position);
    }
    player.AddWisp(CollectibleType.MOMS_BOTTLE_OF_PILLS, player.Position);
}
