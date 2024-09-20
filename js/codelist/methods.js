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
        title: "game.menu.MenuNew"
    },
    {
        min: 470,
        max: 474,
        title: "game.menu.MenuEntry"
    },
    {
        min: 485,
        max: 491,
        title: "game.menu.OptionSelector"
    },
    
    {
        min: 500,
        max: 508,
        title: "game.bullet.BulletManager"
    },
    {
        min: 530,
        max: 538,
        title: "game.bullet.Bullet"
    },
    {
        min: 545,
        max: 562,
        title: "game.bullet.BulletSpawner"
    },
    {
        min: 570,
        max: 592,
        title: "game.bullet.BulletTransformation"
    },
    {
        min: 650,
        max: 663,
        title: "game.enemy.EnemyManager"
    },
    {
        min: 670,
        max: 696,
        title: "game.enemy.Enemy"
    }/*
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
    500: {
        number: 500,
        name: "BulletManager",
        package: "",
        version: "1_1_0",
        args: "Shspg",
        argnames: ["size", "ss", "smgr", "player", "game"],
        description: "Constructs, returns, and initializes the BulletManager struct. Aside from modifying %1 to change the bullet cap or using different values of %4 for a hypothetical versus shooter, this method should not be modified.",
        documented: true
    },
    501: {
        number: 501,
        name: "fillSpriteReference",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "h",
        argnames: ["ss"],
        description: "Converts the bullet spritesheet into individual bullet sprites based on definitions set in `game.bullet.BulletDefs.java`. If a discrepancy is found between BulletDefs and the spritesheet %1 provided, an exception is thrown and the engine will immediately exit.",
        documented: true
    },
    502: {
        number: 502,
        name: "updateBullets",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Iteratively calls each Bullet's [method=Bullet.update,110] method, while also disabling bullets that are outside of the screen and do not have despawn protection set.",
        documented: true
    },
    503: {
        number: 503,
        name: "drawBullets",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Iteratively calls each Bullet's [method=Bullet.draw,110] method. Notably, bullets are drawn from higher index number downwards, meaning newly-spawned bullets are usually rendered behind older bullets.",
        documented: true
    },
    504: {
        number: 504,
        name: "checkCollision",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "fff",
        argnames: ["x", "y", "rad"],
        description: "Iteratively checks if each bullet should collide with a player at (%1, %2) with hitbox radius %3, and calls `bullet.`[method=Bullet.collideWithPlayer,110] if a collision is found. Returns immediately if the player has any i-frames.",
        documented: true
    },
    505: {
        number: 505,
        name: "checkGraze",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "fff",
        argnames: ["x", "y", "rad"],
        description: "Iteratively checks if each bullet should be grazed by a player at (%1, %2) with grazebox %3, and calls `bullet.`[method=Bullet.grazedByPlayer,110] if an intersection is found. Returns immediately if the player has any i-frames.",
        documented: true
    },
    506: {
        number: 506,
        name: "deactivateAll",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Deactivates all bullets, without any sound or visual effects. Conventionally called in between boss patterns, although [method=BulletManager.cancelInRadius,110] will also work.",
        documented: true
    },
    507: {
        number: 507,
        name: "cancelInRadius",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "fff",
        argnames: ["x", "y", "rad"],
        description: "Cancels bullets in a circular area centered on (%1, %2), with radius %3. The cancel has a sound effect. This method should be called once per frame if used by entities that are meant to cancel bullets over a duration.",
        documented: true
    },
    508: {
        number: 508,
        name: "addBullet",
        package: "bullet.BulletManager",
        version: "1_1_0",
        args: "ffffSSSfTS",
        argnames: ["xPos", "yPos", "speed", "angle", "type", "color", "offscreenProtectionFramesNum", "distance", "transformationQueue", "transformationStartingIndex"],
        description: "Respawns a bullet. This method is only ever intended to be called by BulletSpawners, and calling it directly is considered a hack. Why did I even make this method public?",
        documented: true
    },
    530: {
        number: 530,
        name: "Bullet",
        package: "",
        version: "1_1_0",
        args: "Bp",
        argnames: ["mgr", "p"],
        description: "Constructs and initializes a bullet. Should only ever be called by BulletManager, during that BulletManager's initialization.",
        documented: true
    },
    531: {
        number: 531,
        name: "respawnBullet",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "ffffSSSTS",
        argnames: ["newXpos", "newYpos", "newSpeed", "newAngle", "newType", "newColor", "offscreenProtectionFramesNum", "newTransformQueue", "startingTransformIndex"],
        description: "Respawns the bullet. This method should only ever be invoked by `BulletManager.`[method=BulletManager.addBullet,110], which in turn should only ever be invoked via a BulletSpawner's private `shootOneWay`, `shootRingLayer`, or `shootPR_Bullet` methods. The proper way to respawn a bullet is via BulletSpawner.Activate.",
        documented: true
    },
    532: {
        number: 532,
        name: "draw",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "Gig",
        argnames: ["g", "b", "m"],
        description: "All code related to rendering this bullet. This method should only ever be invoked by `BulletManager.drawBullets()`.",
        documented: true
    },
    533: {
        number: 533,
        name: "deleteBullet",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Plays the bullet cancel sound, then calls [method=Bullet.disable,110].",
        documented: true
    },
    534: {
        number: 534,
        name: "disable",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Marks the bullet as inactive.",
        documented: true
    },
    535: {
        number: 535,
        name: "update",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Runs all logic relating to moving a bullet. This method should only ever be invoked by `BulletManager.updateBullets()`.",
        documented: true
    },
    536: {
        number: 536,
        name: "checkCollision",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "fff",
        argnames: ["xCompare", "yCompare", "radCompare"],
        description: "Checks if this bullet's hitbox intersects with a circle centered at (%1, %2) with radius %3, and returns `true` or `false` accordingly.",
        documented: true
    },
    537: {
        number: 537,
        name: "collideWithPlayer",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Disables this bullet, then calls `Player.collideWithBullet`.",
        documented: true
    },
    538: {
        number: 538,
        name: "grazedByPlayer",
        package: "bullet.Bullet",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Plays the graze SFX, then sets this bullet's graze timer to -1.",
        documented: true
    },
    545: {
        number: 545,
        name: "BulletSpawner",
        package: "",
        version: "1_1_0",
        args: "Bpg",
        argnames: ["parent", "player", "game"],
        description: "Constructs and initializes a BulletSpawner struct. This BulletSpawner is naked and not attached to any enemy. To initialize a BulletSpawner that is attached to an enemy, use `Enemy.newSpawner()` instead.",
        documented: true
    },
    546: {
        number: 546,
        name: "getSpawnerPos",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Returns the absolute X and Y coordinates this BulletSpawner will shoot from. Currently, there is nothing that calls this method.",
        documented: true
    },
    547: {
        number: 547,
        name: "setAngles",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "ff",
        argnames: ["newAngle1", "newAngle2"],
        description: "Sets this spawner's `angle1` and `angle2` fields. These fields mean different things in different shooting modes. However, generally `angle1` is the angle the whole pattern is shot at, and `angle2` relates to spacing between bullets.",
        documented: true
    },
    548: {
        number: 548,
        name: "setSpeeds",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "ff",
        argnames: ["newSpeed1", "newSpeed"],
        description: "Sets this spawner's `speed1` and `speed2` fields. While these two fields are interchangeable, convention is for `speed1` to be the lower bound for the speed of shot bullets and for `speed2` to be the upper bound.",
        documented: true
    },
    549: {
        number: 549,
        name: "setSpawnerPos",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "ff",
        argnames: ["xPos", "yPos"],
        description: "Sets this spawner's absolute position to (%1, %2), and also makes it stop following the enemy it's attached to.",
        documented: true
    },
    550: {
        number: 550,
        name: "setRelativePos",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "ff",
        argnames: ["xPos", "yPos"],
        description: "Sets this spawner's position relative to its attached enemy to (%1, %2) and also re-enables enemy following if it was disabled prior.",
        documented: true
    },
    551: {
        number: 551,
        name: "setBulletCounts",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "SS",
        argnames: ["numWays", "numLayers"],
        description: "Sets this spawner's bullet count attributes. %2 refers to how many layers thick a spawned pattern will be, while %1 refers to how many bullets are in each layer.",
        documented: true
    },
    552: {
        number: 552,
        name: "setSpawnDistance",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "f",
        argnames: ["distance"],
        description: "Sets this spawner's spawn distance attribute. As soon as bullets are spawned, they will be moved forwards on their current trajectory by this distance. If %1 is negative, they will be moved backwards.",
        documented: true
    },
    553: {
        number: 553,
        name: "setMode",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "S",
        argnames: ["mode"],
        description: "Sets the shooting mode. Each mode works differently, but they are based off of the modes in ECL.",
        documented: true
    },
    554: {
        number: 554,
        name: "setTypeAndColor",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "SS",
        argnames: ["bulletType", "bulletColor"],
        description: "Sets the type and color of spawned bullets. Not all bullets can be all colors.",
        documented: true
    },
    555: {
        number: 555,
        name: "setSound",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "S",
        argnames: ["sound"],
        description: "Sets the SFX to be played when this spawner activates.",
        documented: true
    },
    556: {
        number: 556,
        name: "setActivationFrequency",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "S",
        argnames: ["frequency"],
        description: "Sets the activation frequency, and resets the countdown until activation. If the activation is not set to a positive integer, then the spawner will not automatically activate. Convention is to set manually-controlled spawners to -1 frequency, but 0 also produces identical behavior.",
        documented: true
    },
    557: {
        number: 557,
        name: "setTransformList",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "T",
        argnames: ["transformsList"],
        description: "Sets the list of transforms used by this spawner. A null list behaves identically to an empty list.",
        documented: true
    },
    558: {
        number: 558,
        name: "setTransformStartingIndex",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Used by bullets that shoot other bullets. Sets the initial index of the transform that bullets shot by this spawner will execute.",
        documented: true
    },
    559: {
        number: 558,
        name: "setSpawnProtectionFrames",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "S",
        argnames: ["protectionFramesCount"],
        description: "Sets the duration of offscreen despawn protection for bullets shot by this spawner. 10, by default.",
        documented: true
    },
    560: {
        number: 560,
        name: "tickSpawner",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Updates this spawner's position with respect to its attached enemy, and also manages automatic activation.",
        documented: true
    },
    561: {
        number: 561,
        name: "activate",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Shoots bullets according to this spawner's properties.",
        documented: true
    },
    562: {
        number: 562,
        name: "reInit",
        package: "bullet.BulletSpawner",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Resets this bullet spawner to its default properties, including making it stop following the enemy it's attached to.",
        documented: true
    },
    570: {
        number: 570,
        name: "BulletTransformation",
        package: "",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Constructs and returns an empty bullet transformation queue. This behaves identically to queue filled up entirely with `TRANSFORM_NO_TRANSFORM`.",
        documented: true
    },
    571: {
        number: 571,
        name: "clone",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Constructs and returns a transformation queue that is a copy of this queue. Modifying the copy will not affect the original.",
        documented: true
    },
    572: {
        number: 572,
        name: "removeTransformationAtIndex",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Removes the transformation at %1 from the queue. Transformations in indices higher than %1 will be shifted forward in the queue by 1.",
        documented: true
    },
    573: {
        number: 573,
        name: "queueNoTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Queues a no-transform. If executed, the bullet will stop executing further transformations, even if it has not reached the end of the queue.",
        documented: true
    },
    574: {
        number: 574,
        name: "insertNoTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Inserts a no-transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. If executed, the bullet will stop executing further transformations, even if it has not reached the end of the queue.",
        documented: true
    },
    575: {
        number: 575,
        name: "queueWaitTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["duration"],
        description: "Queues a wait transform. If executed, the bullet will wait for the %1 frames before executing further transformations.",
        documented: true
    },
    576: {
        number: 576,
        name: "insertWaitTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SS",
        argnames: ["index", "duration"],
        description: "Inserts a wait transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. If executed, the bullet will wait for %2 frames before executing further transformations.",
        documented: true
    },
    577: {
        number: 577,
        name: "queueGotoTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SS",
        argnames: ["destinationIndex", "numLoops"],
        description: "Queues a control flow transformation that changes the bullet's transformation index to %1, then immediately activates the transformation at that index. If the bullet has already executed a GOTO transformation %2 or more times, this transformation will not execute. The number of times a bullet has activated a GOTO transformation is shared across different GOTO transforms in the same queue. If %2 is set to -1, this transformation will always execute. If %2 is set to 0, this transformation will never execute.",
        documented: true
    },
    578: {
        number: 578,
        name: "insertGotoTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSS",
        argnames: ["index", "destinationIndex", "numLoops"],
        description: "Inserts a GOTO transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. If executed, the bullet will change its transformation index to %2, then immediately activates the transformation at that index. If the bullet has already executed a GOTO transformation %3 or more times, this transformation will not execute. The number of times a bullet has activated a GOTO transformation is shared across different GOTO transforms in the same queue. If %3 is set to -1, this transformation will always execute. If %3 is set to 0, this transformation will never execute.",
        documented: true
    },
    579: {
        number: 579,
        name: "queueAccelAngleVelTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "Sff",
        argnames: ["duration", "accel", "angleVel"],
        description: "Queues a velocity-affecting transformation. When executed, for %1 frames, the bullet's speed will be incremented by %2, and its angle will be incremented by %3. If %2 or %3 is set to 0, the bullet's speed or angle will not be affected.",
        documented: true
    },
    580: {
        number: 580,
        name: "insertAccelAngleVelTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSff",
        argnames: ["index", "duration", "accel", "angleVel"],
        description: "Inserts a velocity-affeccting transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. When executed, for %2 frames, the bullet's speed will be incremented by %3, and its angle will be incremented by %4. If %3 or %4 is set to 0, the bullet's speed or angle will not be affected.",
        documented: true
    },
    581: {
        number: 581,
        name: "queueAccelDirTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "Sff",
        argnames: ["duration", "accel", "angle"],
        description: "Queues a velocity-affecting transform. When executed, for %1 frames, the bullet will accelerate with magnitude %2 units/frame in direction %3.",
        documented: true
    },
    582: {
        number: 582,
        name: "insertAccelDirTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSff",
        argnames: ["index", "duration", "accel", "angle"],
        description: "Inserts a velocity-affecting transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. If executed, for %2 frames, the bullet will accelerate with magnitude %3 units/frame in direction %4.",
        documented: true
    },
    583: {
        number: 583,
        name: "queueOffscreenTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["time"],
        description: "Queues a transformation that allows the bullet to persist offscreen for %1 frames. The next transform in the queue will immediately execute, regardless of the duration of persistence granted to the bullet.",
        documented: true
    },
    584: {
        number: 584,
        name: "insertOffscreenTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SS",
        argnames: ["index", "time"],
        description: "Inserts an offscreen-persistence transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. When executed, the bullet will be able to persist offscreen for %2 frames. The next transform in the queue will immediately execute, regardless of the duration of persistence granted to the bullet.",
        documented: true
    },
    585: {
        number: 585,
        name: "queueDeleteTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Queues a transformation that causes the bullet to immediately delete itself when executed.",
        documented: true
    },
    586: {
        number: 585,
        name: "insertDeleteTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Inserts a delete transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. When executed, the bullet will immediately delete itself.",
        documented: true
    },
    587: {
        number: 587,
        name: "queueSoundTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "S",
        argnames: ["sound"],
        description: "Queues a transformation that causes the bullet to play the sound effect with ID %1 when executed.",
        documented: true
    },
    588: {
        number: 588,
        name: "insertSoundTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SS",
        argnames: ["index", "sound"],
        description: "Inserts a sound transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. When executed, the bullet will play the sound effect with ID %2.",
        documented: true
    },
    589: {
        number: 589,
        name: "queueShootPrepareTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSSSffff",
        argnames: ["transformIndex", "aim", "ways", "layers", "angle1", "angle2", "speed1", "speed2"],
        description: "Queues the first part of a two-part transform that allows bullets to shoot bullets. Sets properties related to the bullet spawner. Bullets shot via this transformation will use the same transformation queue as the bullet it was spawned from, but they will start from the index provided by %1. After executing this transform, the next transform will execute immediately.",
        documented: true
    },
    590: {
        number: 590,
        name: "insertShootPrepareTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSSSSffff",
        argnames: ["index", "transformIndex", "aim", "ways", "layers", "angle1", "angle2", "speed1", "speed2"],
        description: "Inserts the first part of the two-part bullet-spawning transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. Sets properties related to the bullet spawner. Bullets shot via this transformation will use the same transformation queue as the bullet it was spawned from, but they will start from the index provided by %2. After executing this transform, the next transform will execute immediately.",
        documented: true
    },
    591: {
        number: 591,
        name: "queueShootActivateTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSS",
        argnames: ["type", "color", "delete"],
        description: "Queues the second part of a two-part transform that allows bullets to shoot bullets. Upon executing this transform, the bullet will immediately shoot, with bullet spawner properties defined by the SHOOT\\\_PREPARE transform. If this bullet has not yet activated a SHOOT\\\_PREPARE transform, undefined behavior will occur. After executing this transform, if %3 is non-zero, the bullet will delete itself. Otherwise, the next transform will execute immediately.",
        documented: true
    },
    592: {
        number: 592,
        name: "insertShootActivateTransform",
        package: "bullet.BulletTransformation",
        version: "1_1_0",
        args: "SSSS",
        argnames: ["index", "type", "color", "delete"],
        description: "Inserts the second part of the two-part bullet-spawning transform at index %1, shifting transformations with indices %1 and higher backwards in the queue by 1. Upon executing this transform, the bullet will immediately shoot, with bullet spawner properties defined by the SHOOT\\\_PREPARE transform. If this bullet has not yet activated a SHOOT\\\_PREPARE transform, undefined behavior will occur. After executing this transform, if %3 is non-zero, the bullet will delete itself. Otherwise, the next transform will execute immediately.",
        documented: true
    },
    650: {
        number: 650,
        name: "EnemyManager",
        package: "",
        version: "1_1_0",
        args: "ShBpgs",
        argnames: ["size", "ss", "mgr", "p", "g", "smgr"],
        description: "Constructs, initializes, and returns the enemy manager struct.",
        documented: true
    },
    651: {
        number: 651,
        name: "updateEnemies",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Iteratively calls each active enemy's tickEnemy method, then cleans up references to inactive enemies.",
        documented: true
    },
    652: {
        number: 652,
        name: "updateEnemies",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Iteratively calls each active enemy's draw method. Returns `true` if any enemy has the `FLAG_BOSS` flag set; `false` otherwise.",
        documented: true
    },
    653: {
        number: 653,
        name: "updateEnemies",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Iteratively calls the `renderHPbar` method of all enemies that have their `FLAG_BOSS` flag set.",
        documented: true
    },
    654: {
        number: 654,
        name: "hitEnemies",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "SSSS",
        argnames: ["x", "y", "hitbox", "damage"],
        description: "Iteratively searches for any tangible enemy that would collide with an axis-aligned square, centered on (%1, %2) with side length %3. If a collision is found, immediately deal %4 damage to that enemy and then return `true`. If no collision is found, return `false`.",
        documented: true
    },
    655: {
        number: 655,
        name: "checkCollision",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "fff",
        argnames: ["x", "y", "rad"],
        description: "For each enemy, check if they should collide with the player, using the given parameters as the player's position and hitbox size.",
        documented: true
    },
    656: {
        number: 656,
        name: "addEnemy",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "effSc",
        argnames: ["e", "xpos", "ypos", "HP", "mirrored"],
        description: "Adds %1 to the list of enemies and initializes it to spawn at (%2, %3) with HP %4, and sets `FLAG_MIRROR` if %5 contains `true`.",
        documented: true
    },
    657: {
        number: 657,
        name: "addEnemy",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "effScS",
        argnames: ["e", "xpos", "ypos", "HP", "mirrored", "subtype"],
        description: "Same as [method=EnemyManager.addEnemy1,110], but takes an additional argument %6 that is then passed to %1 to allow for enemies sharing the same class to have slightly different behaviors.",
        documented: true
    },
    658: {
        number: 658,
        name: "clearEnemies",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Deletes all enemies, except for those with flags `FLAG_CONTROL_ENEMY` or `FLAG_DIALOGUE_IMMUNE` set.",
        documented: true
    },
    659: {
        number: 659,
        name: "reset",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Deletes all enemies, even enemies that are marked as immune to deletion. Also zeros out the `intVars` and `floatVars` arrays.",
        documented: true
    },
    660: {
        number: 660,
        name: "getIntVar",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Returns the value stored in the `intVars` array with index %1.",
        documented: true
    },
    661: {
        number: 661,
        name: "setIntVar",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "SS",
        argnames: ["index", "value"],
        description: "Sets the value at `intVars` index %1 to %2.",
        documented: true
    },
    662: {
        number: 662,
        name: "getFloatVar",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "S",
        argnames: ["index"],
        description: "Returns the value stored in the `floatVars` array with index %1.",
        documented: true
    },
    663: {
        number: 663,
        name: "setFloatVar",
        package: "enemy.EnemyManager",
        version: "1_1_0",
        args: "Sf",
        argnames: ["index", "value"],
        description: "Sets the value at `floatVars` index %1 to %2.",
        documented: true
    },
    670: {
        number: 670,
        name: "Enemy",
        package: "",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Constructs, initializes and returns an enemy. Since `Enemy` is an abstract class, you must create a subclass of it.",
        documented: true
    },
    671: {
        number: 671,
        name: "initEnemy",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "ffScBpgEs",
        argnames: ["x", "y", "health", "mirrored", "bmgr", "p", "g", "emgr", "smgr"],
        description: "Initializes the enemy's health, position, and pointers to manager structs. To properly initialize an enemy, use [methodF=EnemyManager.addEnemy1,110] instead.",
        documented: true
    },
    672: {
        number: 672,
        name: "initEnemyWithSubtype",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "ffScBpgEsS",
        argnames: ["x", "y", "health", "mirrored", "bmgr", "p", "g", "emgr", "smgr", "subtype"],
        description: "Calls [method=Enemy.initEnemy,110], then sets `subtype` to %10. To properly initialize an enemy with a subtype, use [methodF=EnemyManager.addEnemy2,110] instead.",
        documented: true
    },
    673: {
        number: 673,
        name: "initActions",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "An abstract method that contains all user-defined enemy actions to take while being initialized. Invoked after [method=Enemy.initEnemy,110].",
        documented: true
    },
    674: {
        number: 674,
        name: "setEnemySprite",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "S",
        argnames: ["spr"],
        description: "Sets this enemy's sprite. Valid values in version 1.1.0 are -1, 0, 1, or 2. -1 is invisible, values outside of this range will crash the game.",
        documented: true
    },
    675: {
        number: 675,
        name: "tickEnemy",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Calls a bunch of other methods relating to enemy logic.",
        documented: true
    },
    676: {
        number: 676,
        name: "doEnemyActions",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "An abstract method that contains all user-defined enemy logic.",
        documented: true
    },
    677: {
        number: 677,
        name: "processEnemyMovement",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Responsible for enemy movement. Called by [method=Enemy.tickEnemy,110].",
        documented: true
    },
    678: {
        number: 678,
        name: "returnEnemySprite",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Returns the enemy's sprite.",
        documented: true
    },
    679: {
        number: 679,
        name: "takeDamage",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "The enemy's HP is subtracted by the value stored in `damageToTake`; if `HP` is now lower than `hpCallbackThreshold` invoke [method=Enemy.doHPcallback,110]; if after this `HP` is below 0 call [method=Enemy.onDeath,110] then disable the enemy.",
        documented: true
    },
    680: {
        number: 680,
        name: "doHPcallback",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Invoked whenever the enemy's HP falls below `hpCallbackThreshold`. Behavior is defined by the user; does nothing by default.",
        documented: true
    },
    681: {
        number: 681,
        name: "addDamage",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "S",
        argnames: ["damage"],
        description: "Adds %1 to `damageToTake` unless `FLAG_DAMAGE_IMMUNE` is set.",
        documented: true
    },
    682: {
        number: 682,
        name: "renderEnemy",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "Gb",
        argnames: ["g", "b"],
        description: "Draws this enemy.",
        documented: true
    },
    683: {
        number: 683,
        name: "renderHPbar",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "G",
        argnames: ["g"],
        description: "Draws a red circular HP bar around this enemy.",
        documented: true
    },
    684: {
        number: 684,
        name: "onDeath",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Called whenever the enemy's HP drops to 0. Behavior must be user-defined; default behavior does nothing.",
        documented: true
    },
    685: {
        number: 685,
        name: "testFlag",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "S",
        argnames: ["flagNum"],
        description: "Returns the truthiness of the flag with index %1.",
        documented: true
    },
    686: {
        number: 686,
        name: "setFlag",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "S",
        argnames: ["flagNum"],
        description: "Enables the flag with index %1.",
        documented: true
    },
    687: {
        number: 687,
        name: "clearFlag",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "S",
        argnames: ["flagNum"],
        description: "Disables the flag with index %1.",
        documented: true
    },
    688: {
        number: 688,
        name: "resetFlags",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Turns all flags off.",
        documented: true
    },
    689: {
        number: 689,
        name: "setPosAbs",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "ff",
        argnames: ["x", "y"],
        description: "Sets this enemy's position to (%1, %2).",
        documented: true
    },
    690: {
        number: 690,
        name: "setPosRel",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "ff",
        argnames: ["x", "y"],
        description: "Changes this enemy's position by (%1, %2).",
        documented: true
    },
    691: {
        number: 691,
        name: "setPosAbsTime",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "SSff",
        argnames: ["t", "mode", "x", "y"],
        description: "Over a duration of %1 frames and using interpolation mode %2, this enemy will move to position (%3, %4).",
        documented: true
    },
    692: {
        number: 692,
        name: "setPosRelTime",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "SSff",
        argnames: ["t", "mode", "x", "y"],
        description: "Over a duration of %1 frames and using interpolation mode %2, this enemy's position will change by (%3, %4).",
        documented: true
    },
    693: {
        number: 693,
        name: "setMovementBounds",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "ffff",
        argnames: ["leftBound", "rightBound", "topBound", "bottomBound"],
        description: "Sets the enemy's movement boundaries for random movement.",
        documented: true
    },
    694: {
        number: 694,
        name: "moveRandomWithinBounds",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "SS",
        argnames: ["t", "mode"],
        description: "Over a duration of %1 frames and using interpolation mode %2, this enemy will move to a random point within its movement boundaries.",
        documented: true
    },
    695: {
        number: 695,
        name: "clearSpawners",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Clears the enemy's `spawners` list.",
        documented: true
    },
    696: {
        number: 696,
        name: "newSpawner",
        package: "enemy.Enemy",
        version: "1_1_0",
        args: "",
        argnames: [],
        description: "Initializes a new bullet spawner attached to this enemy, and returns the index of the newly-created spawner within the `spawners` list.",
        documented: true
    },

}


const ARGTYPES = {
    "S": "int",
    "f": "double",
    "c": "boolean",
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
    "h": "Spritesheet",
    "i": "BufferedImage",
    "T": "BulletTransformation",
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
        case "BulletManager": return 500;
        case "BulletManager.fillSpriteReference": return 501;
        case "BulletManager.updateBullets": return 502;
        case "BulletManager.drawBullets": return 503;
        case "BulletManager.checkCollision": return 504;
        case "BulletManager.checkGraze": return 505;
        case "BulletManager.deactivateAll": return 506;
        case "BulletManager.cancelInRadius": return 507;
        case "BulletManager.addBullet": return 508;
        case "Bullet": return 530;
        case "Bullet.respawnBullet": return 531;
        case "Bullet.draw": return 532;
        case "Bullet.deleteBullet": return 533;
        case "Bullet.disable": return 534;
        case "Bullet.update": return 535;
        case "Bullet.checkCollision": return 536;
        case "Bullet.collideWithPlayer": return 537;
        case "Bullet.grazedByPlayer": return 538;
        case "BulletSpawner": return 545;
        case "BulletSpawner.getSpawnerPos": return 546;
        case "BulletSpawner.setAngles": return 547;
        case "BulletSpawner.setSpeeds": return 548;
        case "BulletSpawner.setSpawnerPos": return 549;
        case "BulletSpawner.setRelativePos": return 550;
        case "BulletSpawner.setBulletCounts": return 551;
        case "BulletSpawner.setSpawnDistance": return 552;
        case "BulletSpawner.setMode": return 553;
        case "BulletSpawner.setTypeAndColor": return 554;
        case "BulletSpawner.setSound": return 555;
        case "BulletSpawner.setActivationFrequency": return 556;
        case "BulletSpawner.setTransformList": return 557;
        case "BulletSpawner.setTransformStartingIndex": return 558;
        case "BulletSpawner.setSpawnProtectionFrames": return 559;
        case "BulletSpawner.tickSpawner": return 560;
        case "BulletSpawner.activate": return 561;
        case "BulletSpawner.reInit": return 562;
        case "BulletTransformation": return 570;
        case "BulletTransformation.clone": return 571;
        case "BulletTransformation.removeTransformAtIndex": return 572;
        case "BulletTransformation.queueNoTransform": return 573;
        case "BulletTransformation.insertNoTransform": return 574;
        case "BulletTransformation.queueWaitTransform": return 575;
        case "BulletTransformation.insertWaitTransform": return 576;
        case "BulletTransformation.queueGotoTransform": return 577;
        case "BulletTransformation.insertGotoTransform": return 578;
        case "BulletTransformation.queueAccelAngleVelTransform": return 579;
        case "BulletTransformation.insertAccelAngleVelTransform": return 580;
        case "BulletTransformation.queueAccelDirTransform": return 581;
        case "BulletTransformation.insertAccelDirTransform": return 582;
        case "BulletTransformation.queueOffscreenTransform": return 583;
        case "BulletTransformation.insertOffscreenTransform": return 584;
        case "BulletTransformation.queueDeleteTransform": return 585;
        case "BulletTransformation.insertDeleteTransform": return 586;
        case "BulletTransformation.queueSoundTransform": return 587;
        case "BulletTransformation.insertSoundTransform": return 588;
        case "BulletTransformation.queueShootPrepareTransform": return 589;
        case "BulletTransformation.insertShootPrepareTransform": return 590;
        case "BulletTransformation.queueShootActivateTransform": return 591;
        case "BulletTransformation.insertShootActivateTransform": return 592;
        case "EnemyManager": return 650;
        case "EnemyManager.updateEnemies": return 651;
        case "EnemyManager.drawEnemies": return 652;
        case "EnemyManager.drawHPbars": return 653;
        case "EnemyManager.hitEnemies": return 654;
        case "EnemyManager.checkCollision": return 655;
        case "EnemyManager.addEnemy1": return 656;
        case "EnemyManager.addEnemy2": return 657;
        case "EnemyManager.clearEnemies": return 658;
        case "EnemyManager.reset": return 659;
        case "EnemyManager.getIntVar": return 660;
        case "EnemyManager.setIntVar": return 661;
        case "EnemyManager.getFloatVar": return 662;
        case "EnemyManager.setFloatVar": return 663;
        case "Enemy": return 670;
        case "Enemy.initEnemy": return 671;
        case "Enemy.initEnemyWithSubtype": return 672;
        case "Enemy.initActions": return 673;
        case "Enemy.setEnemySprite": return 674;
        case "Enemy.tickEnemy": return 675;
        case "Enemy.doEnemyActions": return 676;
        case "Enemy.processEnemyMovement": return 677;
        case "Enemy.returnEnemySprite": return 678;
        case "Enemy.takeDamage": return 679;
        case "Enemy.doHPcallback": return 680;
        case "Enemy.addDamage": return 681;
        case "Enemy.renderEnemy": return 682;
        case "Enemy.renderHPbar": return 683;
        case "Enemy.onDeath": return 684;
        case "Enemy.testFlag": return 685;
        case "Enemy.setFlag": return 686;
        case "Enemy.clearFlag": return 687;
        case "Enemy.resetFlags": return 688;
        case "Enemy.setPosAbs": return 689;
        case "Enemy.setPosRel": return 690;
        case "Enemy.setPosAbsTime": return 691;
        case "Enemy.setPosRelTime": return 692;
        case "Enemy.setMovementBounds": return 693;
        case "Enemy.moveRandomWithinBounds": return 694;
        case "Enemy.clearSpawners": return 695;
        case "Enemy.addSpawner": return 696;
    }
}