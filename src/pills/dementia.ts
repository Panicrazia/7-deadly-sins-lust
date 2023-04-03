import { CacheFlag } from "isaac-typescript-definitions";
import {
    getCollectibleQuality,
    mapGetPlayer,
    mapSetPlayer,
    PlayerIndex,
} from "isaacscript-common";
import { isHorsePill, removeOldestItem } from "./pills";

const dementiaPlayerValues = {
    dementiaTears: new Map<PlayerIndex, int>(),
};

function DEMENTIA(player: EntityPlayer) {
    let horse = isHorsePill(player);
    let removedItem = removeOldestItem(player);
    if (removedItem) {
        let removedQuality = getCollectibleQuality(removedItem);
        let previousValue = mapGetPlayer(
            dementiaPlayerValues.dementiaTears,
            player,
        );
        if (previousValue) {
            mapSetPlayer(
                dementiaPlayerValues.dementiaTears,
                player,
                previousValue + removedQuality,
            );
        } else {
            mapSetPlayer(
                dementiaPlayerValues.dementiaTears,
                player,
                removedQuality,
            );
        }
    }
}

function DementiaCacheFlags(player: EntityPlayer) {
    player.AddCacheFlags(CacheFlag.FIRE_DELAY);
    player.EvaluateItems();
}
