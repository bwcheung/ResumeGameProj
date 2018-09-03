import Bullet from "./bullet"


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
		this.updateBullets = args.updateBullets;
		this.bullets = args.bullets;
		this.lastShot = 0;
	
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
		const ctx = state.context2;
		
		
		
    	if (state.keys.right && (this.positionX < 1000)) {
    		this.positionX += 10;
    	}
    	
    	if (state.keys.up) {
    		this.positionY -= 10;
    	}
    	
    	if (state.keys.down) {
    		this.positionY += 10;   		
    	}
    	
    	if (state.keys.left && (this.positionX > 0)) {
    		this.positionX -= 10;
    	}
    	
    	if (state.keys.space && Date.now() - this.lastShot > 300) { 	
    		this.frameIndex = 1;
    		const bullet = new Bullet({guy:this});
    		this.bullets(bullet);
    		this.lastShot = Date.now();
    	} else {
    		this.frameIndex = 0;
    	}
    
    	ctx.clearRect(positionX ,positionY, width, height);
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