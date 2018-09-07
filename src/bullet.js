export default class Bullet {
	constructor(args) {
		this.positionX = args.guy.positionX;
		this.positionY = args.guy.positionY;
		
	}
	
	render(state) {
		
		
		if (this.positionX >= state.screen.width) {
			this.delete = true;
		}
		
		
		const ctx = state.context;
		ctx.save();
		ctx.beginPath();
		ctx.arc(this.positionX + 150,this.positionY + 150, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.lineWidth=5;
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
			
	}
	
}