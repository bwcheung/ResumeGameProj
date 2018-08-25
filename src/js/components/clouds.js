import {drawCanvas} from "./animationFPS.js";

export default class Clouds {
	constructor(args) {
		this.position = args.position;
		this.speed = args.speed;
	}
	
	render(state) {
		var newImage = new Image();
		const ctx = state.context;
		
		//ctx.clearRect(this.position,100, 50, 50);
		//drawCanvas(ctx, state);
		newImage.src = "./images/cloud2.png";
		newImage.position = this.position;
		
		newImage.onload = function () {
			  ctx.drawImage(newImage,this.position,100,50,50);
			  
		 };
	
	}
}