function PillEffectPHANTOM_PAINS(pillEffect, player, flags);
let horse = IsHorsePill(player);
player.TakeDamage(
  1,
  DamageFlag.DAMAGE_FAKE |
    DamageFlag.DAMAGE_NO_PENALTIES |
    DamageFlag.DAMAGE_NOKILL,
  EntityRef(player),
  1,
);
player.ResetDamageCooldown();
player.SetMinDamageCooldown(((horse && 3) || 1) * 300);
end;
