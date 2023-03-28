import { ModCallback } from "isaac-typescript-definitions";
import { ISCFeature, upgradeMod } from "isaacscript-common";

const MOD_NAME = "7-deadly-sins-lust";
const modVanilla = RegisterMod(MOD_NAME, 1);
const features = [ISCFeature.PAUSE, ISCFeature.RUN_IN_N_FRAMES] as const;
export const nanatsu = upgradeMod(modVanilla, features);

main();

function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game eventsS
  // Register a callback function that corresponds to when a new player is initialized.
  nanatsu.AddCallback(ModCallback.POST_PLAYER_INIT, postPlayerInit);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);
}

main();

function postPlayerInit() {
  Isaac.DebugString("Callback fired: POST_PLAYER_INIT");
}

function registerCallbacks(mod: Mod) {
  PostGameUpdate(mod);
}
