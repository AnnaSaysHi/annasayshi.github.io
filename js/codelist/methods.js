const GROUPS_1_1_0 = 
[
    {
        min: 0,
        max: 14,
        title: "game.Game"
    },
    {
        min: 300,
        max: 304,
        title: "game.StageScript"
    },
    {
        min: 450,
        max: 521,
        title: "game.menu.MenuManager"
    },
    
    {
        min: 600,
        max: 671,
        title: "game.Menu.MenuNew"
    },
    {
        min: 700,
        max: 771,
        title: "game.Menu.MenuEntry"
    },
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
    }  
];

const INS_1_1_0 = {
    0: {
        number: 0,
        name: "tick",
        package: "Game",
        version: "1.1.0",
        args: "",
        argnames: [],
        description: "All the game logic is handled inside this instruction. Called automatically.",
        documented: true
    },
    1: {
        number: 1,
        name: "render",
        package: "Game",
        version: "1.1.0",
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
        version: "1.1.0",
        args: "ff",
        argnames: ["x", "y"],
        description: "Returns the angle from (%1, %2) to the player's position.",
        documented: true
    },
    11: {
        number: 11,
        name: "fetchRNG",
        package: "Game",
        version: "1.1.0",
        args: "",
        argnames: [],
        description: "Returns the RNG struct used to generate new random numbers.",
        documented: true
    },
    12: {
        number: 12,
        name: "randRad",
        package: "Game",
        version: "1.1.0",
        args: "",
        argnames: [],
        description: "Returns a random double from 0 to 2pi.",
        documented: true
    },
    13: {
        number: 13,
        name: "intDiff",
        package: "Game",
        version: "1.1.0",
        args: "SS",
        argnames: ["a", "b"],
        description: "Returns either $1 or $2 depending on the value stored in [var=1,110].",
        documented: true
    },
    14: {
        number: 14,
        name: "floatDiff",
        package: "Game",
        version: "1.1.0",
        args: "ff",
        argnames: ["a", "b"],
        description: "Returns either %1 or %2 depending on the value stored in [var=1,110].",
        documented: true
    },

    300: {
        number: 300,
        name: "StageScript",
        package: "",
        version: "1.1.0",
        args: "BgpEs",
        argnames: ["mgr", "g", "playerChar", "enmMgr", "smgr"],
        description: "Constructs and returns a new StageScript.",
        documented: true
    },
    301: {
        number: 301,
        name: "init",
        package: "StageScript",
        version: "1.1.0",
        args: "",
        argnames: [],
        description: "Resets some variables, then calls [method=\"StageScript.initActions1\",\"1.1.0\"](). Called whenever the stage is loaded or restarted.",
        documented: true
    },
    302: {
        number: 302,
        name: "init",
        package: "StageScript",
        version: "1.1.0",
        args: "S",
        argnames: ["argA"],
        description: "Resets some variables, then calls [method=\"StageScript.initActions2\",\"1.1.0\"]($1) Called whenever the stage is loaded or restarted.",
        documented: true
    },
    303: {
        number: 303,
        name: "initActions",
        package: "StageScript",
        version: "1.1.0",
        args: "",
        argnames: [],
        description: "An abstract method that is invoked whenever the stage is initialized.",
        documented: true
    },
    304: {
        number: 303,
        name: "initActions",
        package: "StageScript",
        version: "1.1.0",
        args: "S",
        argnames: ["argA"],
        description: "Same as [method=\"StageScript.initActions1\",\"1.1.0\"](), but takes an argument.",
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
    "g": "Game",
    "p": "Player",
    "S": "SoundManager",
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
    }
}