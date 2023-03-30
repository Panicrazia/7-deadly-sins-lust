import { isHorsePill } from "./pills";

//TODO: Gain a broken heart, changes to pharma healing if you have 6 || more broken hearts
function HEARTBROKEN(player: EntityPlayer) {
    let horse = isHorsePill(player);
    player.AddBrokenHearts((horse && 2) || 1);
}
