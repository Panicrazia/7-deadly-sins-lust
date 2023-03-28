import { CollectibleType } from "isaac-typescript-definitions";
import { isHorsePill } from "./pills";

function ACETOMETAPHIN(player: EntityPlayer) {
    let horse = isHorsePill(player);
    for (let i = 0; i < ((horse && 2) || 1) * 3; i++) {
        player.AddWisp(CollectibleType.BOOK_OF_SHADOWS, player.Position);
    }
}
