export function drawCanvas(context, state) {
	const ctx = context;
	ctx.save();
	
	ctx.canvas.width = state.screen.width;
	ctx.canvas.height = state.screen.height;
	const my_gradient=ctx.createLinearGradient(150,0,150,state.screen.height);

	my_gradient.addColorStop(0.000, 'rgba(5, 121, 175, 1.000)');
	my_gradient.addColorStop(0.554, 'rgba(70, 207, 244, 1.000)');
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0,0,state.screen.width,state.screen.height);	
	
	ctx.restore();	
}




