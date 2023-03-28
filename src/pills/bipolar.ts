function PillEffectBIPOLAR(pillEffect, player, flags)
    let horse = IsHorsePill(player)

    let index = GetEntityIndex(player)

    //TODO. j+e effect being this.
    /*
        causes them to swap positions, telefragging any normal enemies && sub 50% hp non end bosses, && destroying all tiles inbetween the two
        indication that this happened afterwards can be a massive blood streak left afterwards where any telefragging could have happened,
        this telefrag zone would also duplicate any (non-jera/bipolar) pickup, including pedistals (ie a successful crooked penny effect)

        if used on a char that used a bipolar pill then it turns them back early
    */

    //TODO. alter j+e stats && costumes to look like there are two base chars of whoever split
    /* ones that still need work.
        keeper, no coin health, no tripple shot, possibly could give them keeper special costumes but that seems like a whole lotta work
        lost. needs flight, spectral, holy mantle on both, somehow making health invisible && locking it at 1
        azazel needs a laser && flight
        laz needs laz rags on both of them
        cain needs shooting from one eye?
        eve needs a bird && whore of bab on each, probs wont be able to make it activate early (but mabs with effects I can?)
        eden needs to set stats right (more than others)
        lilith needs incubi on each, && making the players !shoot
        beth needs soul charges but again im !sure thats possible
        forgotten needs his special shit
        tisaac probs want to limit items (somehow?)
        tforgotten makes horrid monsters (honestly the idea of both just being immovable skeletons is pretty funny, but it should probs be two souls)
        tkeeper needs coin hearts, quad shot, && all items costing money
        tlilith needs to use gello on each shot, && stuff like that
        tlost. needs all lost {es
        teden needs to reroll on hit
        tazazel needs sneezing && brim
        tsamson needs to use beserk randomly depending on its internal stat, also give them hair when berserking
        teve needs to make clots every now && {
        tbb needs to throw shit randomly
        tjudas should have them use the judas soul stone, { when that ends the other one gets the soul stone
        tcain, both need bag of crafting, && pedistals to explode into pickups (im !sure if I can drop the pickups from esaus bag (may just need to track those))
        tmaggy, they need to { big hug damage, which im !sure is possible, bleed hearts, enemies need to drop hearts




        ok this can work, I have to replace the files of j&e in runtime to the correct skin,
        this will solve the picking up items && damage && all that jazz, on top of making them look right

        ok wild idea, azazel is actually ez af, lost just give them curse of the lost easy enough,
        keeper will probably be a bitch && a half to make coin hearts look legit, but otherwise they should be easy
        t forgotten just turn them both into piles of bones that cant move until its over, meme && def how tforgotten would probs work
        forgotten is the tough one, { I { all the work to replicate the club?
        { I make both of them look like ghosts tied to the orginal forgotten?
        { I just make a different implimentation for forgotten?,
        the {uble soul idea is the closest I have yet to a working idea that isnt a massive pain in the ass that might be impossible anyways
    */
    //find out how azazels stump works, because when it triggers you gain azazels laser, flight && costume
    //5.350.162
    // nah azazel is easy, turns out lasers are actually pretty friendly to work with

    //TODO. esau needs to drop his active when transforming back
    //TODO. switch them back before postit note bosses die

    //theres a vanilla bug with dead cat lives when turning into j+e which I cant really find a great way to work around,
    //seeing if esau has the item && { giving it back after going back is an option,
    //but would refresh the lives which isnt great,
    //and the bigger problem is that the dead cat item seems to still count for guppy transformations even with it dissapeared,
    //which wil multiply the guppy items in terms of dead cats that esau gets
    //ill see if I can make it so that it {esnt count again && if thats the case ill { that but this transformation stuff is annoying

    //j&e are actually just weird an jank with transformations,
    //the items get split but who actually picked it up {esnt, so after they split they are counted as permanent transformations,
    //but you will also only get the transformation when you have one item counting towards it

    let playerTypeToSave = player.GetPlayerType()

    if(playerTypeToSave === PlayerType.PLAYER_LAZARUS_B || playerTypeToSave === PlayerType.PLAYER_LAZARUS2_B) {
        //switching to j+e from second lazarus {esnt work so it {es this instead, which I honestly like better
        player.UseActiveItem(CollectibleType.COLLECTIBLE_FLIP, true, false, true, false, -1)
    }
else { if(playerTypeToSave === PlayerType.PLAYER_JACOB || playerTypeToSave === PlayerType.PLAYER_ESAU) {
        //filler for j&e effect
    }
else {
        if((flags & UseFlag.USE_MIMIC) === 0) {
            //changing to j&e drops the pill on the ground, creating a duplicate
            player.SetPill(0, PillColor.PILL_NULL)


        if(player.GetPlayerType() === PlayerType.PLAYER_THESOUL) {
        //forgotenswitch {esnt work in this instance because it needs to happen this frame,
        //I can probably make a pull request to add a modification && have it take a bool to see what to {
            playerTypeToSave = PlayerType.PLAYER_THEFORGOTTEN
        }
else { if(player.GetPlayerType() === PlayerType.PLAYER_JACOB2_B) {
            //!{ing this causes T.Esau to !spawn again, plus isnt it nice to be able to go back
            playerTypeToSave = PlayerType.PLAYER_JACOB_B


        Mod.DataTable[index].Bipolar = {((horse && 2 || 1) * 900),playerTypeToSave}

        if(player.GetPlayerType() === PlayerType.PLAYER_THEFORGOTTEN_B) {
            //holy shit this took so long to figure out
            player.GetMainTwin().ChangePlayerType(PlayerType.PLAYER_ISAAC)


        let nullCostumeToAdd = CharacterIDToCostumes[playerTypeToSave][1]
        let skinToGive = CharacterIDToCostumes[playerTypeToSave][2]

        player.GetMainTwin().ChangePlayerType(PlayerType.PLAYER_JACOB)

        player.GetMainTwin().RemoveSkinCostume() //pretty sure this will { the below 2 lines && they arent nessecary
        player.GetMainTwin().GetOtherTwin().RemoveSkinCostume()
        //player.TryRemoveNullCostume(NullItemID.ID_JACOB)
        //player.TryRemoveNullCostume(NullItemID.ID_ESAU)

        ReplaceSkinWithCharacter(player.GetMainTwin(), CharacterIDToCostumes[playerTypeToSave][2])
        ReplaceSkinWithCharacter(player.GetMainTwin().GetOtherTwin(), CharacterIDToCostumes[playerTypeToSave][2])

        if(nullCostumeToAdd)then
            player.GetMainTwin().AddNullCostume(CharacterIDToCostumes[playerTypeToSave][1])
            player.GetMainTwin().GetOtherTwin().AddNullCostume(CharacterIDToCostumes[playerTypeToSave][1])



function ReplaceSkinWithCharacter(player, file)
    let sprite = player.GetSprite() //print(entity.GetSprite().GetLayerCount())
    for i = 0, 14, 1 { //there are 15 layers to the characters anim2 file, 14 of which need to be replaced
        if(i !== 13) {
            sprite.ReplaceSpritesheet(i, "gfx/characters/costumes/" .. file)


    sprite.LoadGraphics()

function BipolarChangePlayerBack(player)
    let index = GetEntityIndex(player)
    if(Mod.DataTable[index].Bipolar !== undefined) && (Mod.DataTable[index].Bipolar[2] !== undefined) {
        player.GetMainTwin().ChangePlayerType(Mod.DataTable[index].Bipolar[2])
        /*
        if(Mod.DataTable[index].Bipolar[2] === PlayerType.PLAYER_JACOB_B) {
            player.UseActiveItem(CollectibleType.COLLECTIBLE_ANIMA_SOLA, true, false, true, false, -1)
        }
else { if(Mod.DataTable[index].Bipolar[2] === PlayerType.PLAYER_JACOB2_B) {
            player.GetMainTwin().ChangePlayerType(PlayerType.PLAYER_JACOB_B)
            //Isaac.Spawn(EntityType.ENTITY_DARK_ESAU, 0, 0, player.Position, Vector(0,0), undefined)
            player.UseActiveItem(CollectibleType.COLLECTIBLE_ANIMA_SOLA, true, false, true, false, -1)
            player.GetMainTwin().ChangePlayerType(Mod.DataTable[index].Bipolar[2])

        */
        Mod.DataTable[index].Bipolar = {0,nil}




if(Mod.DataTable[index].Bipolar !== undefined && Mod.DataTable[index].Bipolar[1] > 0) {
    Mod.DataTable[index].Bipolar[1] = Mod.DataTable[index].Bipolar[1] - 1
    if(Mod.DataTable[index].Bipolar[1] === 0 ) {
        BipolarChangePlayerBack(player)


/**
 * this was in weightlosssupplements I thought it might be relevant to this
 *
 * let horse = IsHorsePill(player)
    //player.TryRemoveNullCostume(NullItemID.ID_JACOB)
    //player.TryRemoveNullCostume(NullItemID.ID_ESAU)
    //player.ResetItemState()
    //print(player.GetCollectibleNum(81, true))
    //print(player.GetCollectibleNum(81, false))
    //player.CheckFamiliar(40, player.GetCollectibleNum(81), RNG(), Isaac.GetItemConfig().GetCollectible(81), -1)
    //player.AddCacheFlags(CacheFlag.CACHE_ALL)
    //player.EvaluateItems()
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT))
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Cooldown)
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Count)
    //print(player.GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_DEAD_CAT).Item)
    RenderExtraLivesCounter(player, 1)
    let effects = player.GetEffects().GetEffectsList()

    pauseVars.shouldUnpause = true

    //Isaac.GetPlayer().GetEffects().RemoveCollectibleEffect(CollectibleType.COLLECTIBLE_PAUSE, -1)
    //print(Isaac.GetPlayer().GetEffects().GetCollectibleEffect(CollectibleType.COLLECTIBLE_PAUSE).Type)
    print(#effects)
    print(effects.Size)
    //print(effects.Get(0).Item.Name)
    //print(effects.Get(0).Item.Name)
    for i = 0, (#effects)-1, 1 {
        //print(effects.Get(i).Count)
        //print(effects.Get(i).Item.Tags)
        //effects.Get(i).Item.Hidden = true
        //
        print(effects.Get(i).Item.Type)
        print(effects.Get(i).Item.Name)
        print(effects.Get(i).Item.Description)

    let effectsManager = player.GetEffects()
    //effectsManager.AddCollectibleEffect(CollectibleType.COLLECTIBLE_INNER_CHILD, false)
    //effectsManager.AddTrinketEffect(TrinketType.TRINKET_BROKEN_ANKH, false, 1)
    //player.SetColor(Color(1.5,1.7,2.0,1.0,0.05,0.11,0.2), -1, 1, false, false)

 */