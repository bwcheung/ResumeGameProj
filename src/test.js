(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
        case 83:
            key = "S"; break;
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();




(function () {
			
	var coin,
		coinImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  coin.update();
	  coin.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		that.positionX = 0;
		that.positionY = 0;
		
		
		that.update = function () {
			
			
				that.positionX += 5;
			    that.positionY = 0;
			

            tickCount += 1;

        
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                	if (input.isDown("S")) {
                		frameIndex += 1
                	}
                
                } else {
                    frameIndex = 0;
                }
           
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, 1000, 1000);
		  console.log("clear");
		  that.context.canvas.width = 1000;
		  that.context.canvas.height = 1000;
			const my_gradient= that.context.createLinearGradient(150,0,150,1000);

			my_gradient.addColorStop(0.000, 'rgba(5, 121, 175, 1.000)');
			my_gradient.addColorStop(0.554, 'rgba(70, 207, 244, 1.000)');
			 that.context.fillStyle = my_gradient;
			 that.context.fillRect(0,0,1000,1000);	
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    that.positionX,
		    that.positionY,
		    that.width / numberOfFrames,
		    that.height);

 that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    500,
		    500,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas
	canvas = document.getElementById("coinAnimation");
	canvas.width = 1000;
	canvas.height = 1000;
	
	// Create sprite sheet
	coinImage = new Image();	
	
	// Create sprite
	coin = sprite({
		context: canvas.getContext("2d"),
		width: 520,
		height: 300,
		image: coinImage,
		numberOfFrames: 2,
		ticksPerFrame: 2
	});
	
	// Load sprite sheet
	coinImage.addEventListener("load", gameLoop);
	coinImage.src = "./images/Piskel.png";

} ());
