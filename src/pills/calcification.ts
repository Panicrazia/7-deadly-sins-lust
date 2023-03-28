import { isHorsePill } from "./pills";

function CALCIFICATION(player: EntityPlayer) {
    let horse = isHorsePill(player);

    for (let i = 0; i < ((horse && 2) || 1); i++) {
        if (player.GetMaxHearts() > 0 && player.CanPickBoneHearts()) {
            player.AddMaxHearts(-2, true);
            player.AddBoneHearts(1);
            //has red heart containers availible
            if (
                player.GetEffectiveMaxHearts() - player.GetBoneHearts() * 2 >
                0
            ) {
                //this was left blank in the original, dunno why but there might be a reason
            }
            //drain all health in bone hearts
            let extraHearts =
                player.GetHearts() -
                (player.GetEffectiveMaxHearts() - player.GetBoneHearts() * 2);
            if (extraHearts > 0) {
                player.AddHearts(-extraHearts);
            }
        }
    }
    BoneSpray(player);
}

function BoneSpray(player: EntityPlayer) {
    //TODO: bone spray
}
