import {
    CollectibleType,
    EffectVariant,
    EntityType,
    ItemPoolType,
    PickupVariant,
    SoundEffect,
} from "isaac-typescript-definitions";
import { game, getCollectibleQuality, getRandomSeed } from "isaacscript-common";
import { isHorsePill, removeOldestItem } from "./pills";

function ROSE_TINTED(player: EntityPlayer) {
    let horse = isHorsePill(player);
    let removedItem = removeOldestItem(player);
    if (removedItem !== undefined) {
        player.AnimateCollectible(removedItem);
        //TODO. do the effect and spawn clouds delayed like reversed stars
        Isaac.Spawn(
            EntityType.EFFECT,
            EffectVariant.POOF_2,
            1,
            player.Position,
            Vector(0, 0),
            undefined,
        );
        Isaac.Spawn(
            EntityType.EFFECT,
            EffectVariant.POOF_2,
            2,
            player.Position.add(Vector(0, -40)),
            Vector(0, 0),
            undefined,
        );
        SFXManager().Play(SoundEffect.BLACK_POOF, 1, 2, false, 1);

        let itemPool = game
            .GetItemPool()
            .GetPoolForRoom(game.GetRoom().GetType(), getRandomSeed());
        //TODO. i dunno what this seed is for but it should probably be reliable
        let newItemID = getNewItem(
            player,
            itemPool,
            ((horse || Random() % 2 === 1) && 3) || 1,
        ); //auto quality 4 is kindof busted

        let spawnPosition = game
            .GetRoom()
            .FindFreePickupSpawnPosition(
                player.Position.add(Vector(0, 65)),
                0,
                false,
                false,
            );

        Isaac.Spawn(
            EntityType.PICKUP,
            PickupVariant.COLLECTIBLE,
            newItemID,
            spawnPosition,
            Vector(0, 0),
            undefined,
        );

        game.GetItemPool().RemoveCollectible(newItemID);
    }
}

function getNewItem(
    player: EntityPlayer,
    pool: ItemPoolType,
    minQuality: int,
): CollectibleType {
    let newItemID;
    let itemPool = game.GetItemPool();
    let itemConfig = Isaac.GetItemConfig();
    let flag = false;
    while (!flag) {
        newItemID = itemPool.GetCollectible(pool, false, getRandomSeed());
        //TODO. make the seed be reliable
        if (newItemID === CollectibleType.NULL) {
            minQuality = minQuality - 1;
            itemPool.ResetRoomBlacklist();
            if (minQuality <= -1) {
                return CollectibleType.BREAKFAST;
            }
        } else if (!player.CanAddCollectible(newItemID)) {
            print("Player couldnt add collectible: " + newItemID);
            itemPool.AddRoomBlacklist(newItemID);
        } else if (getCollectibleQuality(newItemID) < minQuality) {
            itemPool.AddRoomBlacklist(newItemID);
        } else {
            flag = true;
        }
    }
    itemPool.ResetRoomBlacklist();
    return newItemID as CollectibleType;
}
