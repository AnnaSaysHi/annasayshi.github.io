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
        min: 450,
        max: 457,
        title: "game.menu.MenuManager"
    },
    {
        min: 600,
        max: 609,
        title: "game.Menu.MenuNew"
    },
    {
        min: 700,
        max: 704,
        title: "game.Menu.MenuEntry"
    }/*
    {
        min: 800,
        max: 871,
        title: "game.Menu.OptionSelector"
    },
    
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
    450: {
        number: 450,
        name: "MenuManager",
        package: "",
        version: "1_1_0",
        args: "gks",
        argnames: ["game", "kbh", "SoundMGR"],
        description: "Constructs and returns the menu manager, without initializing any menus.",
        documented: true
    },
    451: {
        number: 451,
        name: "initMenus",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Initializes all of the menus. Currently this is hard-coded, so this method must be modified in order to adjust menus.",
        documented: true
    },
    452: {
        number: 452,
        name: "tick",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in menus, except for the pause menu.",
        documented: true
    },
    453: {
        number: 453,
        name: "switchActiveMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "S",
        argnames: ["switchTo"],
        description: "Switches which menu is active to %1, and deactivates the current menu. If %1 is -1 or equal to the previously-active menu, then back out to the previous menu. If %1 is -1 and the active menu has no parent (is the title-screen menu), then exit the game normally.",
        documented: true
    },
    454: {
        number: 454,
        name: "switchActiveMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "SS",
        argnames: ["switchTo", "newCursorPos"],
        description: "Not implemented yet. Please wait warmly.",
        documented: true
    },
    455: {
        number: 455,
        name: "tickPauseMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in the pause menu.",
        documented: true
    },
    456: {
        number: 456,
        name: "renderCurrentMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders the currently active menu. Only called if the game is in a menu.",
        documented: true
    },
    457: {
        number: 457,
        name: "renderPauseMenu",
        package: "menu.MenuManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders the pause menu. Only called if the game is paused.",
        documented: true
    },
    600: {
        number: 600,
        name: "MenuNew",
        package: "",
        version: "1_1_0",
        args: "gksM",
        argnames: ["g", "kbh", "smgr", "mmgr"],
        description: "Constructs and returns an empty MenuNew struct.",
        documented: true
    },
    601: {
        number: 601,
        name: "addNewEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mSSSS",
        argnames: ["text", "behavior", "behaviorArg1", "xpos", "ypos"],
        description: "Constructs a MenuEntry and adds it to this `MenuNew`'s `entries` field.",
        documented: true
    },
    602: {
        number: 602,
        name: "addSubMenu",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mOSS",
        argnames: ["text", "subMenu", "xpos", "ypos"],
        description: "Constructs a MenuEntry that behaves as a submenu and adds it to this `MenuNew`'s `entries` field.",
        documented: true
    },
    603: {
        number: 603,
        name: "addUnselectableEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "mSS",
        argnames: ["text", "xpos", "ypos"],
        description: "Constructs a half-finished MenuEntry and adds it to this `MenuNew`'s `entries` field. This MenuEntry will not be selectable, but its text is visible.",
        documented: true
    },
    604: {
        number: 604,
        name: "setArgsOfEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "SSS",
        argnames: ["arg2", "arg3", "arg4"],
        description: "Sets the `arg2`, `arg3`, and `arg4` fields of the most recently added MenuEntry to %1, %2, and %3.",
        documented: true
    },
    605: {
        number: 605,
        name: "tick",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to being in this specific menu.",
        documented: true
    },
    606: {
        number: 606,
        name: "reactivate",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Re-activates this menu without affecting the cursor's position.",
        documented: true
    },
    607: {
        number: 607,
        name: "reactivate",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Re-activates this menu, and sets the cursor's position to %1.",
        documented: true
    },
    608: {
        number: 608,
        name: "setSelectedEntry",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Sets the cursor's position to %1. Throws an Exception if %1 is less than 0 or greater than or equal to the number of selectable entries.",
        documented: true
    },
    609: {
        number: 609,
        name: "render",
        package: "menu.MenuNew",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders this specific menu.",
        documented: true
    },
    700: {
        number: 700,
        name: "MenuEntry",
        package: "",
        version: "1_1_0",
        args: "gMmSSSS",
        argnames: ["parent", "mmgr", "text", "behavior", "behaviorArg1", "x", "y"],
        description: "Constructs and returns a `MenuEntry` struct.",
        documented: true
    },
    701: {
        number: 701,
        name: "MenuEntry",
        package: "",
        version: "1_1_0",
        args: "gmSS",
        argnames: ["parent", "text", "x", "y"],
        description: "Half-constructs and returns a `MenuEntry` struct. This entry is intended to be visual-only and will have undefined behavior if selected.",
        documented: true
    },
    702: {
        number: 702,
        name: "setExtendedArguments",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "SSS",
        argnames: ["behaviorArg2", "behaviorArg3", "behaviorArg4"],
        description: "Sets the extended argument fields. Not all behaviors use these fields.",
        documented: true
    },
    703: {
        number: 703,
        name: "onSelect",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic related to selecting this entry.",
        documented: true
    },
    704: {
        number: 704,
        name: "render",
        package: "menu.MenuEntry",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Renders this MenuEntry. Actually unused, since MenuNew handles rendering the entries itself.",
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
        case "MenuManager": return 450;
        case "MenuManager.initMenus": return 451;
        case "MenuManager.tick": return 452;
        case "MenuManager.switchActiveMenu1": return 453;
        case "MenuManager.switchActiveMenu2": return 454;
        case "MenuManager.tickPauseMenu": return 455;
        case "MenuManager.renderCurrentMenu": return 456;
        case "MenuManager.renderPauseMenu": return 457;
        case "MenuNew": return 600;
        case "MenuNew.addNewEntry": return 601;
        case "MenuNew.addSubMenu": return 602;
        case "MenuNew.addUnselectableEntry": return 603;
        case "MenuNew.setArgsOfEntry": return 604;
        case "MenuNew.tick": return 605;
        case "MenuNew.reactivate1": return 606;
        case "MenuNew.reactivate2": return 607;
        case "MenuNew.setSelectedEntry": return 608;
        case "MenuNew.render": return 609;
        case "MenuEntry.constructor1": return 700;
        case "MenuEntry.setExtendedArguments": return 702;
        case "MenuEntry.constructor2": return 701;
        case "MenuEntry.onSelect": return 703;
        case "MenuEntry.render": return 704;
    }
}