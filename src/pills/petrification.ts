import { CacheFlag, CollectibleType } from "isaac-typescript-definitions";
import { PlayerIndex, mapGetPlayer, mapSetPlayer } from "isaacscript-common";
import { isHorsePill } from "./pills";

const petrificationPlayerValues = {
    petrification: new Map<PlayerIndex, [int, boolean[]]>(),
};

/*
    TODO. there should also be a tinted petrified heart that has a rare chance to spawn instead,
    horsepills should have a much higher chance to spawn these (like 3-4 for 12 hearts),
    these should simulate a tinted rock breaking when they get destroyed,
    droping the pickups around isaac as if he were the position of the rock

    also need to make keeper coin shaped petrified hearts

    using the pill as a soul will give you petrified hearts equal to your soul hearts && !bone hearts
*/
function PETRIFICATION(player: EntityPlayer) {
    let horse = isHorsePill(player);
    //horsepill also gives you a small rock item
    if (horse) {
        player.AddCollectible(CollectibleType.SMALL_ROCK, 0, true);
    }

    player.AddHearts(100);
    //hopefully this is good for a full health effect
    //no, it will break for tainted bethany
    //TODO
    if (player.GetSoulHearts() % 2 === 1) {
        player.AddSoulHearts(1);
    }

    let maxHealth = player.GetEffectiveMaxHearts() + player.GetSoulHearts();
    //Mod.GetPlayerMaxHealthContainers(player)

    let previousValue = mapGetPlayer(
        petrificationPlayerValues.petrification,
        player,
    );
    if (!previousValue) {
        previousValue = [0, []];
    }
    let tupleToInput: [int, boolean[]] = [0, []];
    tupleToInput[0] = previousValue[0] + 1;

    for (let i = 0; i < maxHealth / 2; 1) {
        tupleToInput[1][i] = true;
    }
    mapSetPlayer(petrificationPlayerValues.petrification, player, tupleToInput);

    PetrificationCacheFlags(player);
}

function PetrificationCacheFlags(player: EntityPlayer) {
    player.AddCacheFlags(CacheFlag.DAMAGE);
    player.AddCacheFlags(CacheFlag.FIRE_DELAY);
    player.AddCacheFlags(CacheFlag.SPEED);
    player.EvaluateItems();
}
