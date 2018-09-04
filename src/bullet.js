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
		ctx.lineWidth=4;
		ctx.rect(this.positionX+10,this.positionY+10, 25,25);
		ctx.stroke();
		ctx.restore();
			
	}
	
}