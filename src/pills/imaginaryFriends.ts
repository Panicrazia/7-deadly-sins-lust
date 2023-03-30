import { isHorsePill } from "./pills";

function IMMAGINARY_FRIENDS(player: EntityPlayer) {
    let horse = isHorsePill(player);

    for (let i = 0; i < ((horse && 2) || 1) * 5; i++) {
        player.AddMinisaac(player.Position, true);
    }
}
