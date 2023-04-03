import { CollectibleType } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function PSILOCYBIN(player: EntityPlayer) {
    let horse = isHorsePill(player);

    for (let i = 0; i < ((horse && 10) || 5); i++) {
        player.UseActiveItem(
            CollectibleType.WAVY_CAP,
            false,
            false,
            true,
            false,
        );
    }
}
