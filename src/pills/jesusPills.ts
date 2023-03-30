import {
    GameStateFlag,
    LevelStage,
    LevelStateFlag,
    StageType,
} from "isaac-typescript-definitions";
import { game, getDevilRoomOrAngelRoomDoor } from "isaacscript-common";
import { IsBasement1, isHorsePill } from "./pills";

const JesusPillsPlayerValues = {
    LastNaturalDeal: 0,
    PreviousStageType: StageType.ORIGINAL,
    JesusPillsChangedStage: false,
    PreviousStageWasLabyrinth: false,
    CheckForDeal: false,
};

function JESUS_PILLS(player: EntityPlayer) {
    let horse = isHorsePill(player);

    let stage = game.GetLevel().GetStage();

    let curFloorIsAltpath =
        game.GetLevel().GetStageType() === StageType.REPENTANCE ||
        game.GetLevel().GetStageType() === StageType.REPENTANCE_B;
    if (
        !game.GetStateFlag(GameStateFlag.DEVIL_ROOM_SPAWNED) &&
        !IsBasement1()
    ) {
        if (
            stage === LevelStage.BASEMENT_1 ||
            (stage === LevelStage.BASEMENT_2 && !curFloorIsAltpath && horse)
        ) {
            //yeah with a labarynth on floor 1 you get a 100% angel chance but hey whatever I cant stop that, plus it makes labs marginally better
            game.SetLastDevilRoomStage(0);
        } else {
            if (
                JesusPillsPlayerValues.JesusPillsChangedStage === false ||
                horse
            ) {
                let stageToTurnInto = math.max(
                    JesusPillsPlayerValues.LastNaturalDeal,
                    math.max(stage - ((horse && 2) || 1), 1) +
                        ((curFloorIsAltpath && 1) || 0),
                );
                game.SetLastDevilRoomStage(stageToTurnInto);

                JesusPillsPlayerValues.JesusPillsChangedStage = true;
            }
        }
        game.GetLevel().AddAngelRoomChance(((horse && 2) || 1) * 0.5);
        game.GetLevel().SetStateFlag(LevelStateFlag.SATANIC_BIBLE_USED, false);
        game.GetLevel().SetStateFlag(
            LevelStateFlag.WOODEN_CROSS_REMOVED,
            false,
        );
        game.GetLevel().SetStateFlag(LevelStateFlag.EVIL_BUM_LEFT, false);
        game.GetLevel().SetStateFlag(LevelStateFlag.BUM_KILLED, false);
        game.GetLevel().SetStateFlag(
            LevelStateFlag.SHOPKEEPER_KILLED_LVL,
            false,
        );
    }
}

function JesusPillsPostNewLevel() {
    let level = game.GetLevel();
    let stage = level.GetStage();
    let stageType = level.GetStageType();
    if (IsBasement1()) {
        JesusPillsPlayerValues.LastNaturalDeal = 0;
    }
    //check because otherwise it errors if reloaded through console
    if (JesusPillsPlayerValues.PreviousStageType != undefined) {
        if (JesusPillsPlayerValues.PreviousStageWasLabyrinth) {
            JesusPillsPlayerValues.LastNaturalDeal =
                JesusPillsPlayerValues.LastNaturalDeal + 1;
            JesusPillsPlayerValues.PreviousStageWasLabyrinth = false;
        }
        if (
            stageType == StageType.REPENTANCE ||
            stageType == StageType.REPENTANCE_B
        ) {
            //downpour/mines/ets
            if (
                JesusPillsPlayerValues.PreviousStageType !=
                    StageType.REPENTANCE &&
                JesusPillsPlayerValues.PreviousStageType !=
                    StageType.REPENTANCE_B
            ) {
                //normal to rep
            }
        } else if (
            JesusPillsPlayerValues.PreviousStageType == StageType.REPENTANCE ||
            JesusPillsPlayerValues.PreviousStageType == StageType.REPENTANCE_B
        ) {
            JesusPillsPlayerValues.LastNaturalDeal =
                JesusPillsPlayerValues.LastNaturalDeal + 1;
            //rep to normal
        }
    }

    //print("was repentance:")
    //print(tostring((Mod.DataTable.PreviousStageType == StageType.STAGETYPE_REPENTANCE) or (Mod.DataTable.PreviousStageType == StageType.STAGETYPE_REPENTANCE_B)))
    //print(tostring(Mod.DataTable.PreviousStageType))

    if (JesusPillsPlayerValues.JesusPillsChangedStage) {
        JesusPillsPlayerValues.JesusPillsChangedStage = false;
    }
    game.SetLastDevilRoomStage(JesusPillsPlayerValues.LastNaturalDeal);

    JesusPillsPlayerValues.PreviousStageType = level.GetStageType();
}

function JesusPillsPostUpdate() {
    let level = game.GetLevel();

    if (JesusPillsPlayerValues.CheckForDeal) {
        if (JesusPillsCheckForDealDoor()) {
            JesusPillsPlayerValues.LastNaturalDeal = level.GetStage();
        }
    }
}

function JesusPillsPreSpawnCleanAward() {
    let currentRoom = game.GetRoom();
    if (currentRoom.IsCurrentRoomLastBoss()) {
        JesusPillsPlayerValues.CheckForDeal = true;
    }
}

function JesusPillsCheckForDealDoor() {
    return getDevilRoomOrAngelRoomDoor() != undefined;
}
