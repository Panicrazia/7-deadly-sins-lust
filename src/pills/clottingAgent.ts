import {
    BloodClotSubType,
    ChampionColor,
    EffectVariant,
    EntityFlag,
    EntityType,
    FamiliarVariant,
} from "isaac-typescript-definitions";
import {
    PlayerIndex,
    getNPCs,
    getPlayerFromIndex,
    getRandom,
    getRandomSeed,
    mapDeletePlayer,
    mapSetPlayer,
} from "isaacscript-common";
import { isHorsePill } from "./pills";

const clottingAgentPlayerValues = {
    clottingAgent: new Map<PlayerIndex, [int, boolean]>(),
};

//TODO ghosts and demons and angel stuff should turn into different clots
function CLOTTING_AGENT(player: EntityPlayer) {
    //the clot trinket is 5.350.176
    let horse = isHorsePill(player);

    mapSetPlayer(clottingAgentPlayerValues.clottingAgent, player, [80, horse]);

    turnEnemiesDarkRed();
}

function SpawnClot(
    player: EntityPlayer,
    type: BloodClotSubType,
    position: Vector,
) {
    //TODO. make type determine which clot to spawn
    Isaac.Spawn(
        EntityType.FAMILIAR,
        FamiliarVariant.BLOOD_BABY,
        7,
        position,
        Vector(0, 0),
        player,
    );
}

export function clottingAgentPostUpdate(): void {
    for (const [
        playerIndex,
        clottingAgent,
    ] of clottingAgentPlayerValues.clottingAgent) {
        let player = getPlayerFromIndex(playerIndex);
        if (clottingAgent[0] > 0) {
            clottingAgent[0]--;
            if (clottingAgent[0] % 20 === 0) {
                shrinkEnemies();
                if (clottingAgent[0] <= 0 && player) {
                    turnEnemiesIntoClots(clottingAgent[1], player);
                }
            }
        } else {
            if (player) {
                mapDeletePlayer(
                    clottingAgentPlayerValues.clottingAgent,
                    player,
                );
            }
        }
    }
}

function turnEnemiesDarkRed() {
    for (const entity of getNPCs()) {
        if (entity.IsActiveEnemy(false) && !entity.IsBoss()) {
            entity.MakeChampion(getRandomSeed(), ChampionColor.DARK_RED);
            entity.AddEntityFlags(EntityFlag.NO_STATUS_EFFECTS);
            entity.Kill();
        }
    }
}

function shrinkEnemies() {
    for (const entity of getNPCs()) {
        if (
            entity.IsActiveEnemy(false) &&
            !entity.IsBoss() &&
            isDarkRedChamp(entity)
        ) {
            entity.SetSize(
                entity.Size * 0.8,
                entity.SizeMulti.Resized(entity.SizeMulti.Length() * 0.8),
                1,
            );
        }
        entity.SpriteScale = entity.SizeMulti;
    }
}

function turnEnemiesIntoClots(flag: boolean, player: EntityPlayer) {
    for (const entity of getNPCs()) {
        if (isDarkRedChamp(entity)) {
            entity.Remove();
            if (flag || getRandom() > 0.5) {
                entity.SetSize(
                    entity.Size * 0.8,
                    entity.SizeMulti.Resized(entity.SizeMulti.Length() * 0.8),
                    1,
                );
                SpawnClot(player, BloodClotSubType.RED, entity.Position);
            } else {
                Isaac.Spawn(
                    EntityType.EFFECT,
                    EffectVariant.CREEP_RED,
                    0,
                    entity.Position,
                    Vector(0, 0),
                    undefined,
                );
            }
        }
    }
}

function isDarkRedChamp(entity: EntityNPC): boolean {
    return entity.GetChampionColorIdx() == ChampionColor.DARK_RED;
}
