export default class Clouds {
	constructor(args) {
		this.position = args.position;
		this.speed = args.speed;
	}
	
	render(state) {
		var newImage = new Image();
		const ctx = state.context;
		ctx.save();
		//ctx.clearRect(0,0, state.screen.width, state.screen.height);
		newImage.src = "./images/cloud2.png";
		newImage.position = this.position;
		
		newImage.onload = function () {
			  ctx.drawImage(newImage,this.position,100,50,50);
			  
		 };
		ctx.restore();
	}
}