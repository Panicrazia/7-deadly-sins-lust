function PillEffectHEARTBROKEN(pillEffect, player, flags);
let horse = IsHorsePill(player);
//Gain a broken heart, changes to pharma healing if you have 6 || more broken hearts
player.AddBrokenHearts((horse && 2) || 1);
end;
