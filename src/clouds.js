export default class Clouds {
	constructor(args) {
		this.positionX = args.positionX;
		this.positionY = args.positionY;
		this.speed = args.speed;
	}
	
	render(state) {
		
		if (this.positionX <= -500) {
			this.delete = true;
		}
		
		const ctx = state.context;
		ctx.save();
		ctx.translate(this.positionX,this.positionY);
		ctx.beginPath();
		ctx.moveTo(170, 80);
		ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
		ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
		ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
		ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
		ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
		ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
		ctx.closePath();
		ctx.lineWidth = 5;
		ctx.fillStyle = '#8ED6FF';
		ctx.fill();
		ctx.strokeStyle = '#0000ff';
		ctx.stroke();
		ctx.restore();
	}
}