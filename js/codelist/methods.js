const GROUPS_1_1_0 = 
[
    {
        min: 0,
        max: 14,
        title: "game.Game"
    },
    {
        min: 300,
        max: 306,
        title: "game.StageScript"
    },
    {
        min: 400,
        max: 407,
        title: "game.menu.MenuManager"
    },
    {
        min: 440,
        max: 449,
        title: "game.Menu.MenuNew"
    },
    {
        min: 470,
        max: 474,
        title: "game.Menu.MenuEntry"
    },
    {
        min: 485,
        max: 491,
        title: "game.Menu.OptionSelector"
    }/*
    
    {
        min: 1000,
        max: 1047,
        title: "game.bullet.BulletManager"
    },
    {
        min: 1100,
        max: 1171,
        title: "game.bullet.Bullet"
    },
    {
        min: 1300,
        max: 1371,
        title: "game.bullet.BulletSpawner"
    },
    {
        min: 1500,
        max: 1541,
        title: "game.bullet.BulletTransformation"
    },
    {
        min: 2000,
        max: 2171,
        title: "game.enemy.EnemyManager"
    },
    {
        min: 2200,
        max: 2471,
        title: "game.enemy.Enemy"
    },
    {
        min: 2500,
        max: 2550,
        title: "game.enemy.EnemyMovementInterpolator"
    }  */
];

const INS_1_1_0 = {
    0: {
        number: 0,
        name: "tick",
        package: "Game",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "All the game logic is handled inside this instruction. Called automatically.",
        documented: true
    },
    1: {
        number: 1,
        name: "render",
        package: "Game",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Renders the entirety of the game screen. Called automatically.",
        documented: true
    },
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: {
        number: 10,
        name: "getAngleToPlayer",
        package: "Game",
        version: "1_1_0",
        args: "ff",
        argnames: ["x", "y"],
        description: "Returns the angle from (%1, %2) to the player's position.",
        documented: true
    },
    11: {
        number: 11,
        name: "fetchRNG",
        package: "Game",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Returns the RNG struct used to generate new random numbers.",
        documented: true
    },
    12: {
        number: 12,
        name: "randRad",
        package: "Game",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Returns a random double from 0 to 2pi.",
        documented: true
    },
    13: {
        number: 13,
        name: "intDiff",
        package: "Game",
        version: "1_1_0",
        args: "SS",
        argnames: ["a", "b"],
        description: "Returns either $1 or $2 depending on the value stored in [var=1,110].",
        documented: true
    },
    14: {
        number: 14,
        name: "floatDiff",
        package: "Game",
        version: "1_1_0",
        args: "ff",
        argnames: ["a", "b"],
        description: "Returns either %1 or %2 depending on the value stored in [var=1,110].",
        documented: true
    },

    300: {
        number: 300,
        name: "StageScript",
        package: "",
        version: "1_1_0",
        args: "BgpEs",
        argnames: ["mgr", "g", "playerChar", "enmMgr", "smgr"],
        description: "Constructs and returns a new StageScript.",
        documented: true
    },
    301: {
        number: 301,
        name: "init",
        package: "StageScript",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Resets some variables, then calls [method=StageScript.initActions1,1_1_0]`()`. Called whenever the stage is loaded or restarted.",
        documented: true
    },
    302: {
        number: 302,
        name: "init",
        package: "StageScript",
        version: "1_1_0",
        args: "S",
        argnames: ["argA"],
        description: "Resets some variables, then calls [method=StageScript.initActions2,1_1_0]`(`%1`)` Called whenever the stage is loaded or restarted.",
        documented: true
    },
    303: {
        number: 303,
        name: "initActions",
        package: "StageScript",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "An abstract method that is invoked whenever the stage is initialized.",
        documented: true
    },
    304: {
        number: 304,
        name: "initActions",
        package: "StageScript",
        version: "1_1_0",
        args: "S",
        argnames: ["argA"],
        description: "Same as [method=StageScript.initActions1,1_1_0]`()`, but takes an argument.",
        documented: true
    },
    305: {
        number: 305,
        name: "update",
        package: "StageScript",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Increments `StageTimer`, then calls [method=StageScript.tick,1_1_0]`()`. Called during Game.tick.",
        documented: true
    },
    306: {
        number: 306,
        name: "tick",
        package: "StageScript",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "An abstract method that must be modified in order to execute all user-defined stage logic.",
        documented: true
    },
    400: {
        number: 400,
        name: "MenuManager",
        package: "",
        version: "1_1_0",
        args: "gks",
        argnames: ["game", "kbh", "SoundMGR"],
        description: "Constructs and returns the menu manager, without initializing any menus.",
        documented: true
    },
    401: {
        number: 401,
        name: "initMenus",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Initializes all of the menus. Currently this is hard-coded, so this method must be modified in order to adjust menus.",
        documented: true
    },
    402: {
        number: 402,
        name: "tick",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in menus, except for the pause menu.",
        documented: true
    },
    403: {
        number: 403,
        name: "switchActiveMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "S",
        argnames: ["switchTo"],
        description: "Switches which menu is active to %1, and deactivates the current menu. If %1 is -1 or equal to the previously-active menu, then back out to the previous menu. If %1 is -1 and the active menu has no parent (is the title-screen menu), then exit the game normally.",
        documented: true
    },
    404: {
        number: 404,
        name: "switchActiveMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "SS",
        argnames: ["switchTo", "newCursorPos"],
        description: "Not implemented yet. Please wait warmly.",
        documented: true
    },
    405: {
        number: 405,
        name: "tickPauseMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in the pause menu.",
        documented: true
    },
    406: {
        number: 406,
        name: "renderCurrentMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders the currently active menu. Only called if the game is in a menu.",
        documented: true
    },
    407: {
        number: 407,
        name: "renderPauseMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders the pause menu. Only called if the game is paused.",
        documented: true
    },
    440: {
        number: 440,
        name: "MenuNew",
        package: "",
        version: "1_1_0",
        args: "gksM",
        argnames: ["g", "kbh", "smgr", "mmgr"],
        description: "Constructs, initializes, and returns an empty MenuNew struct.",
        documented: true
    },
    441: {
        number: 441,
        name: "addNewEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mSSSS",
        argnames: ["text", "behavior", "behaviorArg1", "xpos", "ypos"],
        description: "Constructs a MenuEntry and adds it to this `MenuNew`'s `entries` field.",
        documented: true
    },
    442: {
        number: 442,
        name: "addSubMenu",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mOSS",
        argnames: ["text", "subMenu", "xpos", "ypos"],
        description: "Constructs a MenuEntry that behaves as a submenu and adds it to this `MenuNew`'s `entries` field.",
        documented: true
    },
    443: {
        number: 443,
        name: "addUnselectableEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mSS",
        argnames: ["text", "xpos", "ypos"],
        description: "Constructs a half-finished MenuEntry and adds it to this `MenuNew`'s `entries` field. This MenuEntry will not be selectable, but its text is visible.",
        documented: true
    },
    444: {
        number: 444,
        name: "setArgsOfEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "SSS",
        argnames: ["arg2", "arg3", "arg4"],
        description: "Sets the `arg2`, `arg3`, and `arg4` fields of the most recently added MenuEntry to %1, %2, and %3.",
        documented: true
    },
    445: {
        number: 445,
        name: "tick",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in this specific menu.",
        documented: true
    },
    446: {
        number: 446,
        name: "reactivate",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Re-activates this menu without affecting the cursor's position.",
        documented: true
    },
    447: {
        number: 447,
        name: "reactivate",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Re-activates this menu, and sets the cursor's position to %1.",
        documented: true
    },
    448: {
        number: 448,
        name: "setSelectedEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Sets the cursor's position to %1. Throws an Exception if %1 is less than 0 or greater than or equal to the number of selectable entries.",
        documented: true
    },
    449: {
        number: 449,
        name: "render",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders this specific menu.",
        documented: true
    },
    470: {
        number: 470,
        name: "MenuEntry",
        package: "",
        version: "1_1_0",
        args: "gMmSSSS",
        argnames: ["parent", "mmgr", "text", "behavior", "behaviorArg1", "x", "y"],
        description: "Constructs and returns a `MenuEntry` struct.",
        documented: true
    },
    471: {
        number: 471,
        name: "MenuEntry",
        package: "",
        version: "1_1_0",
        args: "gmSS",
        argnames: ["parent", "text", "x", "y"],
        description: "Half-constructs and returns a `MenuEntry` struct. This entry is intended to be visual-only and will have undefined behavior if selected.",
        documented: true
    },
    472: {
        number: 472,
        name: "setExtendedArguments",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "SSS",
        argnames: ["behaviorArg2", "behaviorArg3", "behaviorArg4"],
        description: "Sets the extended argument fields. Not all behaviors use these fields.",
        documented: true
    },
    473: {
        number: 473,
        name: "onSelect",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to selecting this entry.",
        documented: true
    },
    474: {
        number: 474,
        name: "render",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders this MenuEntry. Actually unused, since MenuNew handles rendering the entries itself.",
        documented: true
    },
    485: {
        number: 485,
        name: "OptionSelector",
        package: "",
        version: "1_1_0",
        args: "gksn",
        argnames: ["g", "kbh", "smgr", "parentMenu"],
        description: "Constructs and returns an un-initialized OptionSelector. Initialization is done through the methods below.",
        documented: true
    },
    486: {
        number: 486,
        name: "setgvarIndex",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "S",
        argnames: ["newIndex"],
        description: "Determines what index in game.gvars this sub-menu will affect.",
        documented: true
    },
    487: {
        number: 487,
        name: "setYpos",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "S",
        argnames: ["newY"],
        description: "Sets the Y-position to render the options of this sub-menu at.",
        documented: true
    },
    488: {
        number: 488,
        name: "addSubEntry",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "mS",
        argnames: ["entryText", "xpos"],
        description: "Appends a new selection to this sub-menu, displayed at position %2, with text %1.",
        documented: true
    },
    489: {
        number: 489,
        name: "tick",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in this sub-menu.",
        documented: true
    },
    490: {
        number: 490,
        name: "reactivate",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Reactivates this sub-menu, and sets the cursor's position to that of the currently enabled choice.",
        documented: true
    },
    491: {
        number: 491,
        name: "render",
        package: "menu.OptionSelector",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders the sub-entries of this sub-menu. Does not actually render the name of the sub-menu itself.",
        documented: true
    },
    

}


const ARGTYPES = {
    "S": "int",
    "f": "double",
    "m": "string",
    "B": "BulletManager",
    "b": "Bullet",
    "E": "EnemyManager",
    "e": "Enemy",
    "G": "Graphics",
    "g": "Game",
    "p": "Player",
    "s": "SoundManager",
    "k": "KBinputHandler",
    "M": "MenuManager",
    "n": "MenuNew",
    "O": "OptionSelector",
    "o": "object"
}
function opcodeNameToNumber(name){
    switch(name){
        case "Game.tick": return 0;
        case "Game.render": return 1;
        case "Game.getAngleToPlayer": return 10;
        case "Game.fetchRNG": return 11;
        case "Game.randRad": return 12;
        case "Game.intDiff": return 13;
        case "Game.floatDiff": return 14;
        case "StageScript": return 300;
        case "StageScript.init": return 301;
        case "StageScript.initArg": return 302;
        case "StageScript.initActions1": return 303;
        case "StageScript.initActions2": return 304;
        case "StageScript.update": return 305;
        case "StageScript.tick": return 306;
        case "MenuManager": return 400;
        case "MenuManager.initMenus": return 401;
        case "MenuManager.tick": return 402;
        case "MenuManager.switchActiveMenu1": return 403;
        case "MenuManager.switchActiveMenu2": return 404;
        case "MenuManager.tickPauseMenu": return 405;
        case "MenuManager.renderCurrentMenu": return 406;
        case "MenuManager.renderPauseMenu": return 407;
        case "MenuNew": return 440;
        case "MenuNew.addNewEntry": return 441;
        case "MenuNew.addSubMenu": return 442;
        case "MenuNew.addUnselectableEntry": return 443;
        case "MenuNew.setArgsOfEntry": return 444;
        case "MenuNew.tick": return 445;
        case "MenuNew.reactivate1": return 446;
        case "MenuNew.reactivate2": return 447;
        case "MenuNew.setSelectedEntry": return 448;
        case "MenuNew.render": return 449;
        case "MenuEntry.constructor1": return 470;
        case "MenuEntry.setExtendedArguments": return 472;
        case "MenuEntry.constructor2": return 471;
        case "MenuEntry.onSelect": return 473;
        case "MenuEntry.render": return 474;
        case "OptionSelector": return 485;
        case "OptionSelector.setgvarIndex": return 486;
        case "OptionSelector.setYpos": return 487;
        case "OptionSelector.addSubEntry": return 488;
        case "OptionSelector.tick": return 489;
        case "OptionSelector.reactivate": return 490;
        case "OptionSelector.render": return 491;
    }
}