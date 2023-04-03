import { CacheFlag } from "isaac-typescript-definitions";
import { mapSetPlayer, PlayerIndex } from "isaacscript-common";
import { isHorsePill } from "./pills";

const paranoiaPlayerValues = {
    extraVanishingTwins: new Map<PlayerIndex, int>(),
};

function PARANOIA(player: EntityPlayer) {
    let horse = isHorsePill(player);

    mapSetPlayer(
        paranoiaPlayerValues.extraVanishingTwins,
        player,
        (horse && 2) || 1,
    );

    ParanoiaCacheFlags(player);
}

function ParanoiaCacheFlags(player: EntityPlayer) {
    player.AddCacheFlags(CacheFlag.FAMILIARS);
    player.EvaluateItems();
}
