$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300,700,150,50, "#ff00eaff");
    createPlatform(500,600,150,50, "#dfa63cff");
    createPlatform(900,500,150,50, "#ffe609ff");
    createPlatform(800,700,150,50, "#7bff00ff");
    createPlatform(700,600,150,50, "#00eeffff");




    // TODO 3 - Create Collectables
  createCollectable("Peach", 500 ,300, 0.5,1);
  createCollectable("Apple", 700 ,300, 0.5,1);
   createCollectable("Plum", 300 ,600, 0.5,1);
   createCollectable("Pear", 900 ,600, 0.5,1);
   createCollectable("Banana", 900 ,300, 0.5,1);


    
    // TODO 4 - Create Cannons
  createCannon("top", 650, 1000);
  createCannon("bottom", 400, 1000);
  createCannon("bottom", 900, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
