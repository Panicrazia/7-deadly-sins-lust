import {
    GridEntityType,
    PoopGridEntityVariant,
} from "isaac-typescript-definitions";
import { VectorZero } from "isaacscript-common";
import { isHorsePill } from "./pills";

function FLAX(player: EntityPlayer) {
    let horse = isHorsePill(player);
    Isaac.GridSpawn(
        GridEntityType.POOP,
        PoopGridEntityVariant.WHITE,
        player.Position,
    );

    //again, horse pill idk
    //I want a giant holy poop for horse pill effect
    //TODO. see if big hallowed poop gridtiles are possible
    if (horse) {
        for (let i = 0; i <= 3; i++) {
            player.ThrowFriendlyDip(6, player.Position, VectorZero);
        }
    }
}
