var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    

    function createObstacle(x, y, damage){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      obstacleHitZone.x = x; // sets the x position
      obstacleHitZone.y = groundY - y; // sets the y position
      game.addGameItem(obstacleHitZone); // adds obstacles hitbox to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the saw blade image as a bitmap and storse it to obstableImage
      obstacleHitZone.addChild(obstacleImage); // takes the image and adds it to attaches to your hitzone
      obstacleImage.x = -25; // oofsets the sprite from the hitzone to make sure the hitzone is centered
      obstacleImage.y = -25; // oofsets the sprite from the hitzone to make sure the hitzone is centered
   
      obstacleHitZone.rotationalVelocity = 10;
   
    }

    createObstacle(400, groundY - 350, 10);
    createObstacle(600, groundY - 470, 20);
    createObstacle(800, groundY - 350, 30);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3;
    enemy.onPlayerCollision = function(){
      game.changeInterity(-10);
    }
    
    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
      //enemy.shrink();
      //enemy.flyTo(0, 0);
    }

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
