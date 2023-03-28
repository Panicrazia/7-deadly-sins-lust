// function Mod.GetPlayerMaxHealthWithBrokenHearts(player)
//     return (Mod.GetPlayerMaxHealthContainers(player) + player.GetBrokenHearts())

// function Mod.GetPlayerMaxHealthContainers(player)
//     return (math.ceil(player.GetEffectiveMaxHearts()/2) + math.ceil(player.GetSoulHearts()/2))

// function Mod.GetPlayerCurrentHealth(player)
//     return (player.GetHearts() + player.GetSoulHearts())// + player.GetBoneHearts()

// unction OnPlayerDamage(target, DamageAmount, DamageFlags, DamageSource)
//     // No damage (holy mantle), || the damage is inflicted by us? We {n't need to handle this.

//     let player = target.ToPlayer()

// 	if player.GetPlayerType() === PlayerType.PLAYER_THESOUL { return undefined
//     if DamageAmount <= 0 || (DamageFlags & DamageFlag.DAMAGE_CLONES === DamageFlag.DAMAGE_CLONES) { return undefined

//     // This function should return true if the original damage should be kept.
//     // Returning false allows us to ignore the "original" damage && re-apply it ourselves, our way.
//     // However, this should only happen if the rightmost heart is an immortal heart.
//     let shouldKeepOriginalDamage = true

//     // Round up to the nearest whole heart
//     let rightmostHeartIndex = math.ceil(Mod.GetPlayerCurrentHealth(player) * 0.5)
//     //TODO. fix peftiried hearts being priortized to be destroyed over an enpty bone heart infront of it

//     let index = GetEntityIndex(player)

//     if Mod.DataTable[index].PetrifiedHeartSlots !== undefined && Mod.DataTable[index].PetrifiedHeartSlots[rightmostHeartIndex] {

//         // Ignore the original damage
//         shouldKeepOriginalDamage = false

//         Mod.DataTable[index].PetrifiedHeartSlots[rightmostHeartIndex] = false

//         player.TakeDamage(1, DamageFlag.DAMAGE_FAKE | DamageFlag.DAMAGE_CLONES, DamageSource, 5000)

//         SFXManager().Play(SoundEffect.SOUND_ROCK_CRUMBLE, 1, 0, false, 1)

//         player.AddCacheFlags(CacheFlag.CACHE_DAMAGE)
//         player.AddCacheFlags(CacheFlag.CACHE_FIREDELAY)
//         player.AddCacheFlags(CacheFlag.CACHE_SPEED)
//         player.EvaluateItems()

//     // NOTE. Mod API has yet another bug in it!
//     // Returning anything except undefined will break other Mods' damage triggers.
//     // This means that we should return undefined if we should keep the original damage, || return false otherwise.
//     if !shouldKeepOriginalDamage {
//         return false

// AddCallback(ModCallback.MC_ENTITY_TAKE_DMG, Mod.OnPlayerDamage, EntityType.ENTITY_PLAYER)
