import { DamageFlag } from "isaac-typescript-definitions";
import { addFlag } from "isaacscript-common";
import { isHorsePill } from "./pills";

function PHANTOM_PAINS(player: EntityPlayer) {
    let horse = isHorsePill(player);
    player.TakeDamage(
        1,
        addFlag(DamageFlag.NO_PENALTIES, DamageFlag.FAKE, DamageFlag.NO_KILL),
        EntityRef(player),
        1,
    );
    player.ResetDamageCooldown();
    player.SetMinDamageCooldown(((horse && 3) || 1) * 300);
}
