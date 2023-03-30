import { EntityType } from "isaac-typescript-definitions";
import { game } from "isaacscript-common";
import { isHorsePill } from "./pills";

function HALLUCINATIONS(player: EntityPlayer) {
    let horse = isHorsePill(player);

    let x = game.GetRoom().GetCenterPos().X;
    let y = game.GetRoom().GetCenterPos().Y;
    let entityToSpawn;
    if (horse) {
        entityToSpawn = EntityType.WILLO_LVL_2;
    } else {
        entityToSpawn = EntityType.WILLO;
    }
    Isaac.Spawn(entityToSpawn, 0, 0, Vector(-100, y), Vector(0, 0), undefined);
    Isaac.Spawn(entityToSpawn, 0, 0, Vector(x, -100), Vector(0, 0), undefined);
    Isaac.Spawn(
        entityToSpawn,
        0,
        0,
        Vector(100 + 2 * x, y),
        Vector(0, 0),
        undefined,
    );
    Isaac.Spawn(
        entityToSpawn,
        0,
        0,
        Vector(x, 100 + 2 * y),
        Vector(0, 0),
        undefined,
    );
}
