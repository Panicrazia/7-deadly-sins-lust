import {
    CollectibleType,
    EffectVariant,
    EntityFlag,
    EntityType,
    SoundEffect,
} from "isaac-typescript-definitions";
import {
    PlayerIndex,
    getNPCs,
    getPlayerFromIndex,
    mapDeletePlayer,
    mapSetPlayer,
} from "isaacscript-common";
import { isHorsePill } from "./pills";

const seeingRedGoodPlayerValues = {
    redScreaming: new Map<PlayerIndex, int>(),
};

function SEEING_RED_GOOD(player: EntityPlayer) {
    let horse = isHorsePill(player);

    mapSetPlayer(
        seeingRedGoodPlayerValues.redScreaming,
        player,
        ((horse && 5) || 1) * 90,
    );

    MurderizeEnemies();

    Isaac.Spawn(
        EntityType.EFFECT,
        EffectVariant.POOF_2,
        3,
        player.Position,
        Vector(0, 0),
        undefined,
    );
    Isaac.Spawn(
        EntityType.EFFECT,
        EffectVariant.POOF_2,
        4,
        player.Position,
        Vector(0, -40),
        undefined,
    );

    if (horse) {
        SFXManager().Play(SoundEffect.LARYNX_SCREAM_LO, 4, 2, false, 0.85);
    } else {
        SFXManager().Play(SoundEffect.LARYNX_SCREAM_HI, 4, 2, false, 0.85);
    }

    player.UseActiveItem(CollectibleType.LARYNX, true, false, true, false, -1);
}

export function seeingRedGoodPostUpdate(): void {
    for (const [
        playerIndex,
        redScreaming,
    ] of seeingRedGoodPlayerValues.redScreaming) {
        let player = getPlayerFromIndex(playerIndex);
        if (redScreaming > 0) {
            if (redScreaming % 5 === 0 && player) {
                player.UseActiveItem(
                    CollectibleType.LARYNX,
                    true,
                    false,
                    true,
                    false,
                    -1,
                );
                if (redScreaming % 45 === 0) {
                    SFXManager().Play(
                        SoundEffect.LARYNX_SCREAM_HI,
                        1.5,
                        2,
                        false,
                        1,
                    );
                    MurderizeEnemies();
                }
            }
        } else if (player) {
            mapDeletePlayer(seeingRedGoodPlayerValues.redScreaming, player);
        }
    }
}

function MurderizeEnemies() {
    for (const entity of getNPCs()) {
        if (entity.IsActiveEnemy(false)) {
            entity.AddEntityFlags(EntityFlag.EXTRA_GORE);
            if (
                !entity.IsBoss() &&
                entity.HitPoints < entity.MaxHitPoints * (horse ? 1.5 : 0.75)
            ) {
                Isaac.Spawn(
                    EntityType.EFFECT,
                    EffectVariant.POOF_2,
                    3,
                    entity.Position,
                    Vector(0, 0),
                    undefined,
                );
                Isaac.Spawn(
                    EntityType.EFFECT,
                    EffectVariant.POOF_2,
                    4,
                    entity.Position,
                    Vector(0, -40),
                    undefined,
                );
                entity.Kill();
            }
        }
    }
}
