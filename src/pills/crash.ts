import { isHorsePill } from "./pills";

//Active item looses all charge, enemies speed set to 0, slowly speed up, all shots in room get forced to the ground
//when the active item is discharged it turns all enemies into speed champions with a lightning shot between isaac && them
function CRASH(player: EntityPlayer) {
    let horse = isHorsePill(player);
    //TODO
}
