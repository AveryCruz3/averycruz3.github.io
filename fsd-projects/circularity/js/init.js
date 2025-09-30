var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // Holds a single circle when creationg the circles
        var circles = []; // Variable to hold all the circles in an array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
        //Code to draw circle
            circle = draw.randomCircleInArea(canvas ,true,true,'#999',2);// Uses existiong fuction to draw a cirlce of randome size,colro,and location on the cavas.It stores the output of the fuction
            physikz.addRandomVelocity(circle,canvas);// Uses physkiz libray to add random velocity and direction to the circle
            view.addChild(circle);//Adds the circle as a child to view so that the cirl appers on the screen
            circles.push(circle);//Saves the circle to the array of circles,pushing it to the end of the array
        }


        // TODO 3 : Call the drawCircle() function
        //drawCircle();//Crrating the first circle
       // drawCircle();//Creating the second circle
       // drawCircle();//Making the third cirlce
       // drawCircle();//Making the fourth cirlce
        //drawCircle();//Summoning the fifth circle

        // TODO 7 : Use a loop to create multiple circles
        for(var i =0; i < 100; i++){
            drawCircle(i)
        }//Creates a loop that will draw the circle fuction over and over again



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            //physikz.updatePosition(circles[0])//Moving the position of the first circle 
            //physikz.updatePosition(circles[1])//moving the position of the seccond circle 
            //physikz.updatePosition(circles[2])//moving the position of the thrid circle
            //physikz.updatePosition(circles[3])//moving the position of the fourth cirlce
            //physikz.updatePosition(circles[4])//moving the position of the fifth circle
            // TODO 5 : Call game.checkCirclePosition() on your circles
            //game.checkCirclePosition(circles[0])//Checks the position of the circles and uses bracket notation to accsess the frist cirlce 
            //game.checkCirclePosition(circles[1])//Checks the position of the circles and uses bracket notation to accsess the second cirlce
            //game.checkCirclePosition(circles[2])//Checks the position of the circles and uses bracket notation to accsess the third cirlce
            //game.checkCirclePosition(circles[3])//Checks the position of the circles and uses bracket notation to accsess the fourth cirlce
            //game.checkCirclePosition(circles[4])//Checks the position of the circles and uses bracket notation to accsess the fifth cirlce
            // TODO 8 / TODO 9 : Iterate over the array
            for(var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i])
                game.checkCirclePosition(circles[i])
            }//creates a loop that will update the positions and moves the circles over and over again
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if( circle.x < 0){
                circle.x = canvas.width;
            }
            if( circle.y < 0){
                circle.y = canvas.hight;
            }
            if( circle.y > canvas.hight){
                circle.y = 0;
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
