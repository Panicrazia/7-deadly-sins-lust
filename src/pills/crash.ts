import { isHorsePill } from "./pills";

//Active item looses all charge, enemies speed set to 0, slowly speed up, all shots in room get forced to the ground
//when the active item is discharged it turns all enemies into speed champions with a lightning shot between isaac && them
function CRASH(player: EntityPlayer) {
    let horse = isHorsePill(player);
    //TODO
}

/**
function ShootYellowElectricity(player)
    local laser
    for i = 1, 10, 1 do
        laser = EntityLaser.ShootAngle(2, player.Position, math.random(360), 3, Vector(0,0), player)
        laser:SetColor(Color(1.0, 1.0, 1.0, 0.75, 1.0, 1.0, 0.0), -1, 1, false, false)
        laser:SetColor(Color(1.0, 1.0, 1.0, 5.0, 1.0, 1.0, 0.0), 2, 1, true, false)
        laser.SubType = LaserSubType.LASER_SUBTYPE_LINEAR
        laser.MaxDistance = math.random(50,100)
    end
end
*/
