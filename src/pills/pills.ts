import {
    CollectibleType,
    LevelStage,
    StageType,
} from "isaac-typescript-definitions";
import { game, getNPCs } from "isaacscript-common";

const ModPillEffects = {
    PILLPOCALYPSE: Isaac.GetPillEffectByName("PILLPOCALYPSE!"),
    PILLCOLLAPSE: Isaac.GetPillEffectByName("Pillcollapse?"),
    PETRIFICATION: Isaac.GetPillEffectByName("Petrification"),
    LEPROSY: Isaac.GetPillEffectByName("Leprosy"),
    PARANOIA: Isaac.GetPillEffectByName("Paranoia"),
    METH: Isaac.GetPillEffectByName("Methamphetamines"),
    XANNY: Isaac.GetPillEffectByName("Xanax"),
    FLAX: Isaac.GetPillEffectByName("ƒ-lax"),
    XXLAX: Isaac.GetPillEffectByName("Ж-lax"),
    CLOTTING_AGENT: Isaac.GetPillEffectByName("Clotting Agent"),
    PHANTOM_PAINS: Isaac.GetPillEffectByName("Phantom Pains"),
    SEEING_RED_GOOD: Isaac.GetPillEffectByName("I'm Seeing Red!"),
    SEEING_RED_BAD: Isaac.GetPillEffectByName("I'm Seeing Red?"),
    THC: Isaac.GetPillEffectByName("THC"),
    JESUS_PILLS: Isaac.GetPillEffectByName("Jesus Pills"),
    PLAN_B: Isaac.GetPillEffectByName("Plan B"),
    ROSE_TINTED: Isaac.GetPillEffectByName("Rose Tinted Glasses"),
    DEMENTIA: Isaac.GetPillEffectByName("Dementia"),
    SPIRIT_SALTS: Isaac.GetPillEffectByName("Spirit Salts"),
    BATH_SALTS: Isaac.GetPillEffectByName("Bath Salts"),
    IMMAGINARY_FRIENDS: Isaac.GetPillEffectByName("Imaginary Friends"),
    HALLUCINATIONS: Isaac.GetPillEffectByName("Hallucinations"),
    SEEING_GOLD_GOOD: Isaac.GetPillEffectByName("I'm Seeing Gold!"),
    SEEING_GOLD_BAD: Isaac.GetPillEffectByName("I'm Seeing Gold?"),
    FRIENDS_TO_THE_VERY_END: Isaac.GetPillEffectByName(
        "Friends to the Very End",
    ),
    DUKE_PHEROMONES: Isaac.GetPillEffectByName("Duke Pheromones"),
    CALCIFICATION: Isaac.GetPillEffectByName("Calcification"),
    ACETOMETAPHIN: Isaac.GetPillEffectByName("Acetaminophen"),
    PARACETOMOL: Isaac.GetPillEffectByName("Paracetamol"),
    BIPOLAR: Isaac.GetPillEffectByName("Bipolar"),
    I_FOUND_BIG_PILLS: Isaac.GetPillEffectByName("I found BIG pills!"),
    DIURETICS: Isaac.GetPillEffectByName("Diuretics"),
    SOMETHINGS_REALLY_WRONG: Isaac.GetPillEffectByName(
        "Somethings really wrong",
    ),
    WEIGHT_GAIN_SUPPLEMENTS: Isaac.GetPillEffectByName(
        "Weight Gain Supplements",
    ),
    WEIGHT_LOSS_SUPPLEMENTS: Isaac.GetPillEffectByName(
        "Weight Loss Supplements",
    ),
    ABSOLUTE_CHAOS: Isaac.GetPillEffectByName("Absolute Chaos"),
    MINDBLOWING: Isaac.GetPillEffectByName("Mindblowing"),
    PSILOCYBIN: Isaac.GetPillEffectByName("Psilocybin"),
    MYSTERY_DRUG: Isaac.GetPillEffectByName("Mystery Drug"),
    SPEED: Isaac.GetPillEffectByName("Speed"),
    PHARMACEUTICAL_HEALING: Isaac.GetPillEffectByName("Pharmaceutical Healing"),
    HEARTBROKEN: Isaac.GetPillEffectByName("Heartbroken"),
    CRASH: Isaac.GetPillEffectByName("Energy Crash!"),
};

export function isHorsePill(player: EntityPlayer): boolean {
    return player.GetPill(0) >= 2048;
}

export function removeOldestItem(
    player: EntityPlayer,
): CollectibleType | undefined {
    let collectibleToRemove = getPlayerLastPassiveCollectible(player);
    if (collectibleToRemove) {
        if (player.HasCollectible(collectibleToRemove)) {
            player.RemoveCollectible(collectibleToRemove);
        }
    }
    return collectibleToRemove;
}

export function forceCloseDoors(): void {
    if (getNPCs().length > 0) {
        let room = game.GetRoom();
        let door;
        for (let i = 0; i < 8; i++) {
            door = room.GetDoor(i);
            if (door) {
                door?.Close(true);
            }
        }
    }
}

export function IsBasement1(): boolean {
    //curse you downpour and dross 1 for also being LevelStage.STAGE1_1

    let backdrop = game.GetRoom().GetBackdropType();
    return (
        game.GetLevel().GetStage() === LevelStage.BASEMENT_1 &&
        game.GetLevel().GetStageType() !== StageType.REPENTANCE
    );
    //and ((backdrop === BackdropType.BASEMENT) || (backdrop === BackdropType.CELLAR) || (backdrop === BackdropType.BURNING_BASEMENT))
}

// function GetPillEffect(pillEffect :PillEffect, pillColor :PillColor) {
//     return ModPillEffects.BIPOLAR//.MINDBLOWING//ModPillEffects.MYSTERY_DRUG
//     //return PillEffect.PILLEFFECT_SOMETHINGS_WRONG
// }
//  AddCallback(ModCallback.MC_GET_PILL_EFFECT, Mod.GetPillEffect)

// function UsePill(pillEffect :PillEffect, player :EntityPlayer) {
//     let horse = IsHorsePill(player)
//     if(pillEffect === PillEffect.PARALYSIS) {
//         if(horse) {
//             player.UseActiveItem(CollectibleType.PAUSE, false, false, true, false, -1)
//         }
//     else {
//             pause();
//             runInNGameFrames(unpause(), 100);
//         }
//     }
//     else { if(pillEffect === PillEffect.SOMETHINGS_WRONG) {
//         MakePuddlesUnfriendly(player)
//         //TODO. seems like even removing the puddles immediately still shows them for a frame so just make al 3 custom pills && remove this from the rotation

//         //summon a gish puddle on isaac
//     }
//     //TODO. make xlax accelerate things super fast, to the point that normal enemies hit walls && take damage
//     //remake paralysis into a pill that freezes isaac, enemies && enemy shots in the air, essentially a short term pause (mabs just use pause && see if it works well enough?)
//     //pause wisps pause all enemies && enemy shots for 3 seconds when destroyed, look into if this is a viable way to get a short pause
// }

// function MakePuddlesUnfriendly(player :EntityPlayer) {
//     let flags
//     print(player.Position)
//     SpawnCreep(Vector(200,200))
//     for i, entity in ipairs(Isaac.GetRoomEntities()) {
//         if(entity.Type === 1000 && entity.Variant === 45) {
//             SpawnCreep(entity.Position)
//             entity.Visible = false
//             entity.Remove()
//             if(entity.HasEntityFlags(EntityFlag.FLAG_FRIENDLY)) {

//             }
// else {
//                 //print("meanie detected")
//             }
//             //entity.ClearEntityFlags(EntityFlag.FLAG_FRIENDLY)
//             //entity.Update()
//         }
//     }
//     Mod.DataTable.BlackCreepGrowth = 100

//     for i, entity in ipairs(Isaac.GetRoomEntities()) {
//         if(entity.Type === 1000 && (entity.Variant === EffectVariant.CREEP_BLACK)) {
//             //entity.SpriteScale = Vector(3,3)
//             //entity.Update()
//             //print(entity.GetSprite().GetFilename())

//         }
//     }
// }

// if(Mod.DataTable.BlackCreepGrowth !== undefined && Mod.DataTable.BlackCreepGrowth > 0) {
//     Mod.DataTable.BlackCreepGrowth = Mod.DataTable.BlackCreepGrowth - 1
//     if(Mod.DataTable.BlackCreepGrowth % 98 === 0) {
//         print(Mod.DataTable.BlackCreepGrowth)
//         for i, entity in ipairs(Isaac.GetRoomEntities()) {
//             if(entity.Type === 1000 && (entity.Variant === EffectVariant.CREEP_RED)) {
//                 print(entity.GetSprite().GetAnimation())
//                 entity.GetSprite().SetAnimation("BiggestBlood02", false)
//                 entity.Size = 100
//                 //entity.SpriteScale = entity.SpriteScale * 1.02
//                 //entity.SpriteScale = entity.SpriteScale + Vector(.03,.03)
//                 entity.ToEffect().Timeout = entity.ToEffect().Timeout + 2
//                 //print(entity.ToEffect().Scale)
//                 //entity.Update()
//                 /*

//                 print(entity.ToEffect().MinRadius)

//                 //creep.GetSprite().Load("1000.026_creep (black).anm2", true)
//                 //creep.GetSprite().Play("BiggestBlood02", false)
//                 //creep.GetSprite().SetAnimation("BiggestBlood02", true)
//                 //creep.GetSprite().PlayOverlay("BiggestBlood02", true)
//                 */

// function SpawnCreep(location) {
//     let creep = Isaac.Spawn(EntityType.EFFECT, EffectVariant.CREEP_RED, 0, location, Vector(0,0), undefined).ToEffect()

//     creep.GetSprite().SetAnimation("BiggestBlood02", false)
//     //creep.GetSprite().Stop()
//     //creep.GetSprite().Load("1000.026_creep (black).anm2", true)
//     //creep.GetSprite().Play("BiggestBlood02", false)
//     //creep.GetSprite().SetAnimation("BiggestBlood02", true)
//     //creep.GetSprite().PlayOverlay("BiggestBlood02", true)
//     Mod.DataTable.BlackCreepGrowth = 100
//     creep.Size = 100
//     //creep.Scale = 3
//     //creep.Update()
//     //Isaac.Spawn(EntityType.ENTITY_EFFECT, EffectVariant.CREEP_BLACK, 0, entity.Position, Vector(0,0), undefined)
// }

// /**
//  * this was all random shit, theres components to multiple pills && curses in here
//  */
// function ShootYellowElectricity(player) {
// let laser
// for i = 1, 10, 1 {
//     laser = EntityLaser.ShootAngle(2, player.Position, math.random(360), 3, Vector(0,0), player)
//     laser.SetColor(Color(1.0, 1.0, 1.0, 0.75, 1.0, 1.0, 0.0), -1, 1, false, false)
//     laser.SetColor(Color(1.0, 1.0, 1.0, 5.0, 1.0, 1.0, 0.0), 2, 1, true, false)
//     laser.SubType = LaserSubType.LASER_SUBTYPE_LINEAR
//     laser.MaxDistance = math.random(50,100)
// }
// }

// function MawOfTheVoid(position, player) {
// let laser = EntityLaser.ShootAngle(3, player.Position, 30.0, 300, Vector(0,0), player)
// //TODO. sound, pulse, make it acutally go on a position, etc
// laser.GetSprite().Load("gfx/spook_laser.anm2", true)
// laser.GetSprite().LoadGraphics()
// laser.GetSprite().Play("LargeRedLaser")
// //laser.Update()
// laser.CollisionDamage = 1
// laser.Radius = 160
// laser.SubType = LaserSubType.LASER_SUBTYPE_RING_FOLLOW_PARENT
// laser.AddTearFlags()//TearFlags.TEAR_HOMING)
// //laser.CurveStrength = .5

// //Noral brimstone particle effects that happen when its going through stuff && the particles you see are.
// //many 1000.99.1
// //a faw 1000.21.10
// }

// //please { !tell me this shits gotta change when I add unlocks
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PILLPOCALYPSE)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PILLCOLLAPSE)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PETRIFICATION, ModPillEffects.PETRIFICATION)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.LEPROSY, ModPillEffects.LEPROSY)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PARANOIA, ModPillEffects.PARANOIA)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.METH, ModPillEffects.METH)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.XANNY, ModPillEffects.XANNY)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.FLAX, ModPillEffects.FLAX)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.XXLAX, ModPillEffects.XXLAX)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.CLOTTING_AGENT, ModPillEffects.CLOTTING_AGENT)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PHANTOM_PAINS, ModPillEffects.PHANTOM_PAINS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SEEING_RED_GOOD, ModPillEffects.SEEING_RED_GOOD)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SEEING_RED_BAD, ModPillEffects.SEEING_RED_BAD)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.THC, ModPillEffects.THC)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.JESUS_PILLS, ModPillEffects.JESUS_PILLS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PLAN_B, ModPillEffects.PLAN_B)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.ROSE_TINTED, ModPillEffects.ROSE_TINTED)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.DEMENTIA, ModPillEffects.DEMENTIA)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SPIRIT_SALTS, ModPillEffects.SPIRIT_SALTS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.BATH_SALTS, ModPillEffects.BATH_SALTS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.IMMAGINARY_FRIENDS, ModPillEffects.IMMAGINARY_FRIENDS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.HALLUCINATIONS, ModPillEffects.HALLUCINATIONS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SEEING_GOLD_GOOD, ModPillEffects.SEEING_GOLD_GOOD)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SEEING_GOLD_BAD, ModPillEffects.SEEING_GOLD_BAD)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.FRIENDS_TO_THE_VERY_END, ModPillEffects.FRIENDS_TO_THE_VERY_END)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.DUKE_PHEROMONES, ModPillEffects.DUKE_PHEROMONES)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.CALCIFICATION, ModPillEffects.CALCIFICATION)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.ACETOMETAPHIN, ModPillEffects.ACETOMETAPHIN)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PARACETOMOL, ModPillEffects.PARACETOMOL)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.BIPOLAR, ModPillEffects.BIPOLAR)
// //AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.I_FOUND_BIG_PILLS, ModPillEffects.I_FOUND_BIG_PILLS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.DIURETICS, ModPillEffects.DIURETICS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SOMETHINGS_REALLY_WRONG, ModPillEffects.SOMETHINGS_REALLY_WRONG)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.WEIGHT_GAIN_SUPPLEMENTS, ModPillEffects.WEIGHT_GAIN_SUPPLEMENTS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.WEIGHT_LOSS_SUPPLEMENTS, ModPillEffects.WEIGHT_LOSS_SUPPLEMENTS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.ABSOLUTE_CHAOS, ModPillEffects.ABSOLUTE_CHAOS)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.MINDBLOWING, ModPillEffects.MINDBLOWING)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PSILOCYBIN, ModPillEffects.PSILOCYBIN)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.MYSTERY_DRUG, ModPillEffects.MYSTERY_DRUG)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.SPEED, ModPillEffects.SPEED)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.PHARMACEUTICAL_HEALING, ModPillEffects.PHARMACEUTICAL_HEALING)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.HEARTBROKEN, ModPillEffects.HEARTBROKEN)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.LIQUID_CORN_STARCH, ModPillEffects.LIQUID_CORN_STARCH)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.KRAKATOA, ModPillEffects.KRAKATOA)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, ModPillEffects.CRASH, ModPillEffects.CRASH)
// nanatsu.AddCallback(ModCallback.POST_USE_PILL, Mod.UsePill)

// function ForceCloseDoors() {
//     if(#Isaac.GetRoomEntities() > 0 ) {
//         let room = Game.GetRoom()
//         let {or
//         for i=0, 8, 1 {
//             {or = room.GetDoor(i)
//             if(door !== undefined) {
//                 {or.Close(true)
//             }
//         }
//     }
// }

// function PreSpawnCleanAward(RNG, SpawnPosition) {
//     let currentRoom = Game.GetRoom()
//     if(currentRoom.IsCurrentRoomLastBoss()) {
//         let level = Game.GetLevel()
//         Mod.DataTable.CheckForDeal = 3
//         for playerNum = 1, Game.GetNumPlayers() {
//             let player = Game.GetPlayer(playerNum - 1)
//             let index = GetEntityIndex(player)

//             if(Mod.DataTable[index].ExtraVanishingTwins !== undefined) {
//                 Mod.DataTable[index].ExtraVanishingTwins = 0
//                 player.AddCacheFlags(CacheFlag.CACHE_FAMILIARS)
//                 player.EvaluateItems()
//             }
//         }
//         if(IsBasement1()) {
//             if(Game.TimeCounter <= 1800 && trueStageTime > 1800) {
//                 Game.GetLevel().SetStateFlag(LevelStateFlag.STATE_SHOVEL_QUEST_TRIGGERED, true)
//                 SFXManager().Play(SoundEffect.SOUND_MOM_FOOTSTEPS, 1, 2, false, 1)
//                 SFXManager().Play(SoundEffect.SOUND_MOM_VOX_FILTERED_ISAAC, 1, 2, false, 1)
//             }
//         }
//     }
// }

// AddCallback(ModCallback.MC_PRE_SPAWN_CLEAN_AWARD, Mod.PreSpawnCleanAward)

// function CheckForDealDoor()
//     let room = Game.GetRoom()
//     let {or

//     for slot = 1, {orSlot.NUM_DOOR_SLOTS, 1 {
//         {or = room.GetDoor(slot-1)
//         if(door !== undefined && (door.TargetRoomType === RoomType.ROOM_DEVIL || {or.TargetRoomType === RoomType.ROOM_ANGEL)) {
//             return true
//         }
//     }
//     return false
// }

// function IsBasement1()
//     //curse you {wnpour && dross 1 for also being LevelStage.STAGE1_1

//     let backdrop = Game.GetRoom().GetBackdropType()
//     return (Game.GetLevel().GetStage() === LevelStage.STAGE1_1) && (Game.GetLevel().GetStageType() !== StageType.STAGETYPE_REPENTANCE)
//     //and ((backdrop === BackdropType.BASEMENT) || (backdrop === BackdropType.CELLAR) || (backdrop === BackdropType.BURNING_BASEMENT))
// }

// function PrePickupCollision(pickup,collider,isAggressor)
//     if !collider.ToPlayer() { return }
// 	let player = collider.ToPlayer()

//     if((Game.GetRoom().GetType() === RoomType.ROOM_DEVIL)
//     && (pickup.Price !== 0)
//     && (pickup.Price > -10)
//     && (player.IsItemQueueEmpty())) {
//         player.GetData()["CheckDevilPurchase"] = pickup.SubType
//         //player.GetData()["DevilDealsTaken"] = player.GetData()["DevilDealsTaken"] + 1
//     }

// }

// AddCallback(ModCallback.MC_PRE_PICKUP_COLLISION, Mod.PrePickupCollision)

// function CheckFamiliar(player, collectibleType, additionalTargetCount, familiarVariant, familiarSubType)
//     let itemConfigItem = Isaac.GetItemConfig().GetCollectible(collectibleType)

//     let numCollectibles = player.GetCollectibleNum(collectibleType)
//     let effects = player.GetEffects()
//     let numCollectibleEffects = effects.GetCollectibleEffectNum(collectibleType)
//     let targetCount = numCollectibles + numCollectibleEffects + additionalTargetCount

//     player.CheckFamiliar(familiarVariant, targetCount, RNG(), itemConfigItem, familiarSubType)
// }

// function PostNewRoom()
//     for i = 0, (Game.GetNumPlayers() - 1), 1 {
// 		let player = Isaac.GetPlayer(i)
// 		let index = GetEntityIndex(player)

//         if(Mod.DataTable[index].THC !== undefined && Mod.DataTable[index].THC > 0) {
//             ApplyTHCItems(player)
//         }
//     }
//     for i, entity in ipairs(Isaac.FindByType(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 0)) {
//         entity.ToEffect().SetTimeout(100+math.floor(math.random()*100))
//         entity.AddEntityFlags(EntityFlag.FLAG_FRIENDLY)
//     }
//     for i, entity in ipairs(Isaac.FindByType(EntityType.ENTITY_EFFECT, EffectVariant.SMOKE_CLOUD, 1)) {
//         entity.ToEffect().SetTimeout(50+math.floor(math.random()*50))
//     }
// }

// AddCallback(ModCallback.MC_POST_NEW_ROOM, Mod.PostNewRoom)

// function PostNewLevel()
//     let level = Game.GetLevel()
//     let stage = level.GetStage()
//     let stageType = level.GetStageType()
//     if (IsBasement1()) {
//         Mod.DataTable.LastNaturalDevilRoom = 0
//     }

//     if(Mod.DataTable.LastNaturalDevilRoom !== undefined) { //check because otherwise it errors if reloaded through console
//         if(Mod.DataTable.PreviousStageType !== undefined)then
//             if(Mod.DataTable.PreviousStageWasLabyrinth !== undefined && Mod.DataTable.PreviousStageWasLabyrinth) {
//                 //print("was lab")
//                 Mod.DataTable.LastNaturalDevilRoom = Mod.DataTable.LastNaturalDevilRoom + 1
//                 Mod.DataTable.PreviousStageWasLabyrinth = false
//             }
//             if(stageType === StageType.STAGETYPE_REPENTANCE) || (stageType === StageType.STAGETYPE_REPENTANCE_B) { //downpour/mines/ets
//                 if(Mod.DataTable.PreviousStageType !== StageType.STAGETYPE_REPENTANCE) || (Mod.DataTable.PreviousStageType !== StageType.STAGETYPE_REPENTANCE_B)then //no to rep
//                     //print("Normal to rep")
//                     //Mod.DataTable.LastNaturalDevilRoom = math.max(Mod.DataTable.LastNaturalDevilRoom - 1, 0)
//                 }
//             }
// else { if(Mod.DataTable.PreviousStageType === StageType.STAGETYPE_REPENTANCE) || (Mod.DataTable.PreviousStageType === StageType.STAGETYPE_REPENTANCE_B) { //rep to no
//                 //print("rep to normal")
//                 Mod.DataTable.LastNaturalDevilRoom = Mod.DataTable.LastNaturalDevilRoom + 1
//             }
//         }
//         //print("was repentance.")
//         //print(tostring((Mod.DataTable.PreviousStageType === StageType.STAGETYPE_REPENTANCE) || (Mod.DataTable.PreviousStageType === StageType.STAGETYPE_REPENTANCE_B)))
//         //print(tostring(Mod.DataTable.PreviousStageType))

//         if(Mod.DataTable.JesusPillsChangedStage !== undefined && Mod.DataTable.JesusPillsChangedStage)then
//             Mod.DataTable.JesusPillsChangedStage = undefined
//         }
//         Game.SetLastDevilRoomStage(Mod.DataTable.LastNaturalDevilRoom)

//         Mod.DataTable.PreviousStageType = level.GetStageType()
//     }
// }

// AddCallback(ModCallback.MC_POST_NEW_LEVEL, Mod.PostNewLevel)

// function OnMonsterDamage(entity, DamageAmount, DamageFlags, DamageSource)
//     let data = entity.GetData()
//     if(entity.ToNPC() !== undefined) {
//         if data.BasedAndRedPilled !== undefined {
//             if(math.random() < .15) { //if the sounds get too much i can make it so it also checks if its already playing
//                 entity.ToNPC().PlaySound(SoundEffect.SOUND_LARYNX_SCREAM_LO,0.8,2,false,0.7)
//             }
//         }
//         //[[
//         if(DamageAmount > entity.HitPoints) { //if enemy will die
//             if(entity.ToNPC().IsBoss()) {
//                 if(IsPostmarkBoss(entity)) {
//                     print("Fatal damage detected")
//                     let player
//                     let index
//                     for playerNum = 1, Game.GetNumPlayers() {
//                         player = Game.GetPlayer(playerNum - 1)
//                         index = GetEntityIndex(player)

//                         if(Mod.DataTable[index].Bipolar !== undefined) && (Mod.DataTable[index].Bipolar[2] !== undefined) {
//                             BipolarChangePlayerBack(player)
//                         }
//                     }
//                 }
//             }
//         }
//         */
//     }
// }

// AddCallback(ModCallback.MC_ENTITY_TAKE_DMG, Mod.OnMonsterDamage)

// function JandEUnlockCheesePrevention(entity)
//     if(entity.ToNPC() !== undefined) {
//         if(entity.ToNPC().IsBoss()) {
//             if(IsPostmarkBoss(entity)) {
//                 let player
//                 let index
//                 for playerNum = 1, Game.GetNumPlayers() {
//                     player = Game.GetPlayer(playerNum - 1)
//                     index = GetEntityIndex(player)

//                     if(Mod.DataTable[index].Bipolar !== undefined) && (Mod.DataTable[index].Bipolar[2] !== undefined) {
//                         BipolarChangePlayerBack(player)
//                     }
//                 }
//             }
//         }
//     }
// }

// AddCallback(ModCallback.MC_POST_NPC_DEATH, Mod.JandEUnlockCheesePrevention)

// function IsPostmarkBoss(entity)
//     let type = entity.Type
//     //TODO. check for floors aswell
//     return ((type === EntityType.ENTITY_MOM) or
//     (type === EntityType.ENTITY_MOMS_HEART) or
//     (type === EntityType.ENTITY_SATAN) or
//     (type === EntityType.ENTITY_ISAAC) or
//     (type === EntityType.ENTITY_MEGA_SATAN_2) or
//     (type === EntityType.ENTITY_THE_LAMB) or
//     (type === EntityType.ENTITY_MOTHER) or
//     (type === EntityType.ENTITY_DELIRIUM) or
//     (type === EntityType.ENTITY_HUSH) or
//     (type === EntityType.ENTITY_BEAST && entity.Variant === 0) or
//     (type === EntityType.ENTITY_ULTRA_GREED) or
//     (Game.GetLevel().GetCurrentRoomDesc().Data.Shape === RoomShape.ROOMSHAPE_2x2)) //should work for boss rush && i guess delerium too
//     //i {nt think there are any other bosses that are in 2x2 rooms so this should basically only fire for boss rush
//     //TODO. see if only {ing this on the 15th wave is possible

//     //uhh i dunno how to get boss rush, probs by looking for room id || something
// }

// function GlitchItem(player)
//     if(player.HasCollectible(CollectibleType.COLLECTIBLE_TMTRAINER)) {
//         player.UseActiveItem(CollectibleType.COLLECTIBLE_D6, false)
//     }
// else {
//         player.AddCollectible(CollectibleType.COLLECTIBLE_TMTRAINER)
//         player.UseActiveItem(CollectibleType.COLLECTIBLE_D6, false)
//         player.RemoveCollectible(CollectibleType.COLLECTIBLE_TMTRAINER)
//     }
// }
