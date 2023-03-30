import { CacheFlag } from "isaac-typescript-definitions";
import {
    game,
    getPlayerFromIndex,
    mapDeletePlayer,
    mapSetPlayer,
    PlayerIndex,
} from "isaacscript-common";
import { isHorsePill } from "./pills";

const methPlayerValues = {
    meth: new Map<PlayerIndex, [int, int]>(),
};

function METH(player: EntityPlayer) {
    let horse = isHorsePill(player);

    //Game.GetDevilRoomDeals()
    //Mod.DataTable[index].DevilDealsTaken
    //turns out there was actually a devil deal tracker lol
    mapSetPlayer(methPlayerValues.meth, player, [
        ((horse && 2) || 1) * 900,
        math.min(game.GetDevilRoomDeals(), 10),
    ]);

    MethCacheFlags(player);
}

function MethCacheFlags(player: EntityPlayer) {
    player.AddCacheFlags(CacheFlag.DAMAGE);
    player.AddCacheFlags(CacheFlag.FIRE_DELAY);
    player.AddCacheFlags(CacheFlag.SHOT_SPEED);
    player.AddCacheFlags(CacheFlag.RANGE);
    player.AddCacheFlags(CacheFlag.SPEED);
    player.AddCacheFlags(CacheFlag.TEAR_FLAG);
    player.AddCacheFlags(CacheFlag.FLYING);
    player.EvaluateItems();
}

export function methPostUpdate(): void {
    for (const [playerIndex, meth] of methPlayerValues.meth) {
        let player = getPlayerFromIndex(playerIndex);
        if (meth[0] > 0) {
            meth[0]--;
        } else {
            if (player) {
                mapDeletePlayer(methPlayerValues.meth, player);
                MethCacheFlags(player);
            }
        }
    }
}
