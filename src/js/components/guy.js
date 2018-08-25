import {drawCanvas} from "./animationFPS.js";



export default class sprite {
	
	constructor(args) {
		
		
		this.ticksPerFrame = args.ticksPerFrame || 0;
		this.numberOfFrames = args.numberOfFrames || 1;
		this.frameIndex = args.frameIndex;
		this.width = args.width;
		this.height = args.height;
		this.image = args.image;
		this.positionX = args.positionX;
		this.positionY = args.positionY;
	
	}
		
        
    render(state) {
    	
    	var frameIndex = this.frameIndex;
		var positionX = this.positionX;
		var positionY = this.positionY;
		var tf = this.ticksPerFrame;
		var nf = this.numberOfFrames;
		var width = this.width;
		var height = this.height;
		
		var newImage = new Image();
		const ctx = state.context;
		
		
    	if (state.keys.right) {
    		state.guy.positionX += 10;
    	}
    	
    	if (state.keys.up) {
    		state.guy.positionY -= 10;
    	}
    	
    	if (state.keys.down) {
    		state.guy.positionY += 10;   		
    	}
    	
    	if (state.keys.left && (state.guy.positionX > 0)) {
    		state.guy.positionX -= 10;
    	}
    	
    	if (state.keys.space) { 	
    		state.guy.frameIndex = 1;
    		console.log(positionX);
    	} else {
    		state.guy.frameIndex = 0;
    	}
    
    	ctx.clearRect(positionX ,positionY, width, height);
    	drawCanvas(ctx, state);
		newImage.src = this.image;
		newImage.position = this.position;
		newImage.onload = function () {
			  ctx.drawImage(
						newImage,
						frameIndex * width / nf,
					    0,
					    width / nf,
					    height,
					    positionX,
					    positionY,
					    width / nf,
					    height);
			  
		 };
	}      
}