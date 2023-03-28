function PillEffectMINDBLOWING(pillEffect, player, flags);
let horse = IsHorsePill(player);
//player.AddEntityFlags(EntityFlag.FLAG_NO_DAMAGE_BLINK)

//let club = Isaac.Spawn(8, 2, 0, player.Position+Vector(0,0), Vector(0,100), nil)
//club.Parent = player
//ok this club will work for tforgotten
let entity;
let originalLink;
let forgot;
let distance = 20;
forgot = Isaac.Spawn(3, 900, 0, Vector(320, 280), Vector(0, 0), nil);
print(forgot.Size);
forgot.Size = 10;
originalLink = Isaac.Spawn(
  1000,
  114,
  0,
  forgot.Position + Vector(0, distance),
  Vector(0, 0),
  nil,
);
//originalLink.ToEffect().SetRadii(5.0, 10.0)
originalLink.ToEffect().Scale = 60; //120 is the usual forgotten
originalLink.Target = player; //.GetOtherTwin()
originalLink.Child = forgot;
//the thing thats chained && has its movement rescricted is the target,
//the child will be the anchor, they are able to move freely it seems
//and this shit is giving me a really good idea for iteams, && how judas's summoning circles have suddenly become much easier

//.Rotation seems like the counter for which one they are, going from .1 to .9
//.m_Height also seems weird but I cant find a pattern
//.FallingSpeed is also similarly weird
//.FallingAcceleration was always 1.3
//1.0 fricition on all

/*
        //dont need more links, the first one automatically creates && links the others
    entity = Isaac.Spawn(1000, 114, 1, entity.Position+Vector(0,distance), Vector(0,0), originalLink)
    entity.Target = player
    entity.Child = forgot
    entity = Isaac.Spawn(1000, 114, 1, entity.Position+Vector(0,distance), Vector(0,0), originalLink)
    entity.Target = player
    entity.Child = forgot
    */
end;
