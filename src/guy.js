//Sprite animation reference from http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/


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
		this.gotHit = 0;
	}
		
        
   	render(state) {
    	
    		var frameIndex = this.frameIndex;
		var positionX = this.positionX;
		var positionY = this.positionY;
		var nf = this.numberOfFrames;
		var width = this.width;
		var height = this.height;
		
		var newImage = new Image();
		const ctx = state.context2;
		
		ctx.save();
		ctx.clearRect(positionX ,positionY, width, height);
		
		if (!state.endGame && state.gameStart) {
			if (state.keys.right && (this.positionX < state.screen.width / 2)) {
				this.positionX += 10;
			}

			if (state.keys.up && (this.positionY > 0)) {
				this.positionY -= 10;
			}

			if (state.keys.down && (this.positionY < state.screen.height)) {
				this.positionY += 10;   		
			}

			if (state.keys.left && (this.positionX > 0)) {
				this.positionX -= 10;
			}

			if ((state.keys.space) && (Date.now() - this.lastShot > 600)) { 	
				this.frameIndex = 1;
				const bullet = new Bullet({guy:this});
				this.bullets(bullet);
				this.lastShot = Date.now();
			} else {
				this.frameIndex = 0;
			}
    		}
		
		newImage.src = this.image;
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
		 ctx.restore();
	}      
}
