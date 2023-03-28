import { clottingAgentPostUpdate } from "../pills/clottingAgent";
import { seeingRedGoodPostUpdate } from "../pills/seeingRedGood";


function PostGameUpdate(mod: Mod) {
    let level = Game().GetLevel();
    seeingRedGoodPostUpdate();
    clottingAgentPostUpdate();
}



/**
 * yeah all this shit below is what was orientally <-- ty autocorrect vscode    in it
 */


    if level.GetCurses() & Curses.CURSE_BROKEN > 0 {
        //Mod.CurseOfTheBroken()

    if(Mod.DataTable.CheckForDeal!== undefined && Mod.DataTable.CheckForDeal > 0) {
        if(CheckForDealDoor()) {
            Mod.DataTable.LastNaturalDevilRoom = level.GetStage()

        Mod.DataTable.CheckForDeal = 0


    for (playerNum = 1, Game.GetNumPlayers()) {
        let player = Game.GetPlayer(playerNum - 1)

        let index = GetEntityIndex(player)
        //^ this index thing may need special j+e checks because it might call it twice for them
        if(!player.IsItemQueueEmpty()) {
            let itemInQueue = player.QueuedItem.Item.ID
            if type(player.GetData()["CheckDevilPurchase"]) !== type(nil)
            && (player.GetData()["CheckDevilPurchase"] === itemInQueue) {
                if(Mod.DataTable[index].DevilDealsTaken === undefined) {
                    Mod.DataTable[index].DevilDealsTaken = 1
                }
else {
                    Mod.DataTable[index].DevilDealsTaken = Mod.DataTable[index].DevilDealsTaken + 1

                player.GetData()["CheckDevilPurchase"] = 0


            //this {esnt count if you pick up the same item twice in a row right now
            let itemPool = Game.GetItemPool().GetLastPool()
            //print(tostring(itemPool))
            let quality = Isaac.GetItemConfig().GetCollectible(itemInQueue).Quality
            //print(tostring(quality))
            let newEntry = {itemInQueue, itemPool, quality}
            //print(tostring(itemInQueue))
            if(Mod.DataTable[index].ItemsInOrder === undefined || #(Mod.DataTable[index].ItemsInOrder) < 1) {
                Mod.DataTable[index].ItemsInOrder =  {newEntry}
            }
else { if(itemInQueue !== Mod.DataTable[index].ItemsInOrder[#(Mod.DataTable[index].ItemsInOrder)][1]) {
                table.insert(Mod.DataTable[index].ItemsInOrder, newEntry)


        //Isaac.Spawn(8, 1, 0, player.Position+Vector(0,20), Vector(0,0), undefined).Parent = player

        /*
        if(Game.GetFrameCount() % 1 === 0 )then
            let entity = Isaac.Spawn(1000, 99, 1, player.Position+Vector(0,-10), Vector(0,0), undefined)
            entity.Velocity = Vector(0, -math.random(3,8))
            //entity.Velocity = Vector(math.random(4,13), 0)
            entity.SetColor(Color(0.76, 0.0, 0.0, 1, 0.0, 0.0, 0.0), -1, 1, false, false)
            entity.GetSprite().SetLastFrame()
            entity.SpriteScale = entity.SpriteScale*2
            //entity.GetSprite().Update()

        */
        trueStageTime++;

        }
    }
}

AddCallback(ModCallback.MC_POST_UPDATE , Mod.PostGameUpdate)