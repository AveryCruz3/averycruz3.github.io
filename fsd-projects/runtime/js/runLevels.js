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

   

    

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25); // crates enemy game items with a hitboxof 25 and stores it in the enem varitable
      var enemyImage = draw.rect(50, 50, "red"); // create the imgage of the enemy and stores it ot the varible enemyImage
      enemyImage.x = -25; // left to right offset for x for the image hit zone
      enemyImage.y = -25; // up and down offset for the image hit box
      enemy.addChild(enemyImage); // attaches the image to the enemy object
      enemy.x = x; // sets the enemy x positison
      enemy.y = y; // sets the enemy y position
      game.addGameItem(enemy); // adds the enemy to the game

      enemy.velocityX -= 3; // moving the enemy across the screen
      
      // handles when hally collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10); // reduces player health
      };
      
      // handles when hally shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100); // incresses the players score when halle shoots the enemy
        
        // on projectile collison, shrinks/fadeOut/flyOutTo enemy image
        enemy.fadeOut(); 
        //enemy.shrink();
        //enemy.flyTo(0, 0);
      };
    }
    createEnemy(400, groundY - 50);
    createEnemy(600, groundY - 50);
    createEnemy(800, groundY - 50);

    function createReward(x, y){
      var reward = game.createGameItem("reward", 25); // crates reward game items with a hitboxof 25 and stores it in the enem varitable
      var rewardImage = draw.rect(50, 50, "Blue"); // create the imgage of the reward and stores it ot the varible rewardImage
      rewardImage.x = -25; // left to right offset for x for the image hit zone
      rewardImage.y = -25; // up and down offset for the image hit box
      reward.addChild(rewardImage); // attaches the image to the reward object
      reward.x = x; // sets the reward x positison
      reward.y = y; // sets the reward y position
      game.addGameItem(reward); // adds the reward to the game

      reward.velocityX -= 3; // moving the reward across the screen
      
      // handles when hally collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10); // incresses player health
      };
      
      // handles when hally shoots the reward
      reward.onProjectileCollision = function(){
        game.increaseScore(100); // incresses the players score when halle shoots the reward
        
        
      };
    }

    createReward(500, groundY - 50);
    createReward(700, groundY - 50);
    createReward(900, groundY - 50);


    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25); // crates levelMarker game items with a hitboxof 25 and stores it in the enem varitable
      var levelImage = draw.rect(50, 50, "yellow"); // create the levelimgage of the reward and stores it ot the varible rewardImage
      levelImage.x = -25; // left to right offset for x for the image hit zone
      levelImage.y = -25; // up and down offset for the image hit box
      levelMarker.addChild(levelImage); // attaches the image to the reward object
      levelMarker.x = x; // sets the reward x positison
      levelMarker.y = y; // sets the reward y position
      game.addGameItem(levelMarker); // adds the reward to the game

      levelMarker.velocityX -= 3; // moving the reward across the screen
      
      // handles when hally collides with reward
      levelMarker.onPlayerCollision = function(){
       levelMarker.fadeOut();
       startLevel();
      };
      
      // handles when hally shoots the reward
      levelMarker.onProjectileCollision = function(){
        game.increaseScore(100); // incresses the players score when halle shoots the reward
        
        
      };
    }

    createLevelMarker(1000, groundY - 50);

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; // retrieves the curent level from the level data arrray and stores it inside the level variable
      var levelObjects = level.gameItems; // retrieves the array of game items and storess it in the levelObjects variable
      
      for(var i = 0; i < levelObjects.length; i ++){
        var element = levelObjects[i];


        if(element.type === "obstacle"){
            createObstacle(element.x, element.y, element.damage);
        }

        if(element.type === "enemy"){
            createEnemy(element.x, element.y, element.damage);
        }

        if(element.type === "reward"){
            createReward(element.x, element.y, element.damage);
        }

      }






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
