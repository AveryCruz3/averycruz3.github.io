var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 350, damage: 10, rotation: 0, offsetX:-25, offsetY: 320, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 600, y: groundY - 520, damage: 20, rotation: 0, offsetX:-25, offsetY: 430, scaleX: -0.05, scaleY: -0.05},
          { type: "obstacle", x: 900, y: groundY - 470, damage: 30, rotation: 0, offsetX:-25, offsetY: 430, scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 400, y: groundY - 50},
          { type: "enemy", x: 600, y: groundY - 50},
          { type: "enemy", x: 800, y: groundY - 50},
          { type: "reward", x: 500, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 50},
          { type: "reward", x: 900, y: groundY - 50},
          { type: "levelMarker", x: 1000, y: groundY - 50},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 340, damage: 10, rotation: 0, offsetX:-25, offsetY: 320, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 600, y: groundY - 470, damage: 20, rotation: 0, offsetX:-25, offsetY: 430, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 900, y: groundY - 350, damage: 30, rotation: 0, offsetX:-25, offsetY: 300, scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 400, y: groundY - 50},
          { type: "enemy", x: 600, y: groundY - 50},
          { type: "enemy", x: 900, y: groundY - 50},
          { type: "reward", x: 500, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 50},
          { type: "reward", x: 800, y: groundY - 50},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
