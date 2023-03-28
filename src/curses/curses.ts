function Curses.onEval(CurseFlags)
    //return CurseFlags | Curses.CURSE_BROKEN
    //give the curses

    let level = Game.GetLevel()

    if level.GetCurses() & LevelCurse.CURSE_OF_LABYRINTH > 0 {

        Mod.DataTable.PreviousStageWasLabyrinth = true//Mod.CurseOfTheBroken()



AddCallback(ModCallback.MC_POST_CURSE_EVAL , Curses.onEval)