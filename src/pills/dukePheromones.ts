import {
    ChampionColor,
    EffectVariant,
    EntityFlag,
    EntityType,
    SuckerVariant,
} from "isaac-typescript-definitions";
import {
    PlayerIndex,
    addFlag,
    game,
    getPlayerFromIndex,
    getRandomSeed,
    mapDeletePlayer,
    mapSetPlayer,
} from "isaacscript-common";
import { forceCloseDoors, isHorsePill } from "./pills";

const dukePheromonesPlayerValues = {
    dukePheromones: new Map<PlayerIndex, [int, boolean]>(),
};

function DUKE_PHEROMONES(player: EntityPlayer) {
    let horse = isHorsePill(player);

    //TODO. right now this isnt friendly when you have pustules already in the room
    let pustule = Isaac.Spawn(
        EntityType.PUSTULE,
        0,
        0,
        player.Position,
        Vector(0, 0),
        undefined,
    );
    pustule.MaxHitPoints = pustule.MaxHitPoints * 100;
    pustule.HitPoints = pustule.MaxHitPoints;
    pustule.AddEntityFlags(
        addFlag(
            pustule.GetEntityFlags(),
            EntityFlag.NO_STATUS_EFFECTS,
            EntityFlag.NO_FLASH_ON_DAMAGE,
            EntityFlag.NO_KNOCKBACK,
            EntityFlag.NO_PHYSICS_KNOCKBACK,
            EntityFlag.EXTRA_GORE,
            EntityFlag.NO_SPIKE_DAMAGE,
            EntityFlag.NO_PLAYER_CONTROL,
            EntityFlag.AMBUSH,
            EntityFlag.NO_REWARD,
        ),
    );

    forceCloseDoors();

    mapSetPlayer(dukePheromonesPlayerValues.dukePheromones, player, [
        210,
        horse,
    ]);
}

export function dukePheromonesPostUpdate(player: EntityPlayer) {
    for (const [
        playerIndex,
        dukePheromones,
    ] of dukePheromonesPlayerValues.dukePheromones) {
        let player = getPlayerFromIndex(playerIndex);
        if (dukePheromones[0] > 0) {
            dukePheromones[0]--;
            if (dukePheromones[0] % 15 === 0) {
                let roomCenter = game.GetRoom().GetCenterPos();
                let spawn = Isaac.Spawn(
                    EntityType.SUCKER,
                    SuckerVariant.BLOOD_FLY,
                    0,
                    game
                        .GetRoom()
                        .GetCenterPos()
                        .add(Vector(0, roomCenter.X * 1.5))
                        .Rotated(math.random() * 360),
                    Vector(0, 0),
                    undefined,
                );
                spawn
                    .ToNPC()
                    ?.MakeChampion(
                        spawn.InitSeed,
                        ChampionColor.SIZE_PULSE,
                        true,
                    );
                spawn.AddEntityFlags(EntityFlag.NO_REWARD);
                spawn.HitPoints = 1;
            }
            if (dukePheromones[0] === 100) {
                for (const pustule of Isaac.FindByType(EntityType.PUSTULE)) {
                    pustule
                        .ToNPC()
                        ?.MakeChampion(
                            getRandomSeed(),
                            ChampionColor.SIZE_PULSE,
                            false,
                        );
                }
            }
            if (dukePheromones[0] === 3) {
                for (const pustule of Isaac.FindByType(EntityType.PUSTULE)) {
                    let spawn = Isaac.Spawn(
                        EntityType.SUCKER,
                        SuckerVariant.BLOOD_FLY,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.SIZE_PULSE,
                            true,
                        );
                    spawn.HitPoints = 1;
                    spawn = Isaac.Spawn(
                        EntityType.SUCKER,
                        SuckerVariant.BLOOD_FLY,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.SIZE_PULSE,
                            true,
                        );
                    spawn.HitPoints = 1;

                    spawn = Isaac.Spawn(
                        EntityType.MOTER,
                        0,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.FLY_PROTECTED,
                            true,
                        );
                    spawn.HitPoints = 1;

                    spawn = Isaac.Spawn(
                        EntityType.POOTER,
                        0,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.FLY_PROTECTED,
                            true,
                        );
                    spawn.HitPoints = 1;

                    spawn = Isaac.Spawn(
                        EntityType.FLY,
                        0,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.SIZE_PULSE,
                            true,
                        );
                    spawn.HitPoints = 1;
                    spawn = Isaac.Spawn(
                        EntityType.FLY,
                        0,
                        0,
                        pustule.Position,
                        Vector(0, 0),
                        undefined,
                    );
                    spawn
                        .ToNPC()
                        ?.MakeChampion(
                            pustule.InitSeed,
                            ChampionColor.SIZE_PULSE,
                            true,
                        );
                    spawn.HitPoints = 1;

                    if (dukePheromones[1]) {
                        spawn = Isaac.Spawn(
                            EntityType.SUCKER,
                            SuckerVariant.MAMA_FLY,
                            0,
                            pustule.Position,
                            Vector(0, 0),
                            undefined,
                        );
                        spawn
                            .ToNPC()
                            ?.MakeChampion(
                                pustule.InitSeed,
                                ChampionColor.PULSE_GREEN,
                                true,
                            );
                    }
                }
            }
            if (dukePheromones[0] === 1) {
                for (const spawnPoof of Isaac.FindByType(
                    EntityType.EFFECT,
                    EffectVariant.POOF_2,
                )) {
                    spawnPoof.Remove();
                }
            }
        } else {
            if (player) {
                mapDeletePlayer(
                    dukePheromonesPlayerValues.dukePheromones,
                    player,
                );
            }
        }
    }
}
