import { isHorsePill } from "./pills";

//for 15 seconds the player produces unfriendly white creep underneath them,
//a baby spidersac spawns a few seconds later in the origin point (ie where isaac was when he took the pill)
//if the player is flying they are still slowed, && have an effect that looks like they are stuck to it like pulling away glue
function LIQUID_CORN_STARCH(player: EntityPlayer) {
    let horse = isHorsePill(player);
    //TODO
}
