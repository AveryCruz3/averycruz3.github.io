var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'lightBlue'); // draws a rectangele and stores it in the variable backgroundFill
            background.addChild(backgroundFill);//adds the backgroundFill to the background oject
            
            // TODO 2: - Add a moon and starfield
            
            for(var i = 0; i < 50; i++){
                var circle = draw.circle(2, "yellow", "lightyellow", 2); // creates a cirlce with a spasifice radius, border color, fill color, alpha and stoeres it in the varible circle
                circle.x = canvasWidth * Math.random(); // sets a random x position with in the canves width
                circle.y = groundY * Math.random(); // sets a ramdon y position withing groundY
                background.addChild(circle); // adds circle to the background container
            }
            
            var moon = draw.bitmap("img/moon.png"); // creates a bitmap object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 400; //sets the moons X position
            moon.y = groundY - 400; // sets the moos Y position
            moon.scaleX = 0.75; //scales the moons width
            moon.scaleY = 0.75;//scales th moons hight
            background.addChild(moon); //add the moon to the background cntainer


            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
           // creats a loop
            for (var i = 0; i < 5; ++i) {
                var buildingColors = ["Red", "orange", "pink", "black", "lightBlue"]
                var buildingHeight = 300 * Math.random(); // buildings hieght stores the vlause of it
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); // drawas a rectangle and uses 75 as the width, bildingHeight, light grey as the color, black as the outline
                building.x = 300 * i; // give it an X value
                building.y = groundY - buildingHeight; // Y valuse givien and it subacts so it gose up from the ground
                background.addChild(building); // take the bulding object and adds it to teh background so it is visible
                buildings.push(building); // take the bulding and pushes it to the bilidings array
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // creates a bitmap objact using the tree imageansd stores it in the varible tree
            tree.x = 600; // sets the X value of the tree
            tree.y = groundY - 230; // sets the Y vlaue of the tree
            background.addChild(tree); // adds the tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 1; // makes the tree move towards the left by subreactiong from its current X posistion

            // checks if the tree has gone off the left and resets it to the right
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            // pulls a bilding and asigns it to the buildings array and taks the x value and subtracta 1 to move it to the left
            for (var i = 0; i < buildings.length; i++) {
                 var building = buildings[i];
                building.x -= 1; 
                if(building.x < -200){
                    building.x = canvasWidth; // checks if it has moved off the leftand resets it to the right side of the screen
                }
            }





        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
