import React from "react";
import ReactDom from "react-dom";
import Clouds from "./clouds";
import sprite from "./guy"

const KEY = {
		A: 65,
		D: 68,
		W: 87,
		S: 83,
		SPACE: 32
};


export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
				screen: {
					width: window.innerWidth,
					height: window.innerHeight,
					ratio: window.devicePixelRatio || 1
				},
				context: null,
				cloud: window.innerWidth,
				keys: {
					left: 0,
					right: 0,
					up: 0,
					down: 0,
					space:0,
				},
				guy: null			
		};
		this.clouds = [];	
		this.tickCount = 0;
		this.frameIndex = 0;
		
	}
	
	handlekeys(value, e) {
		let keys = this.state.keys;
		
        switch(e.keyCode) {
        	case KEY.A:
        		keys.left = value; break;
            
        	case KEY.D:
        		keys.right = value; break;
            
        	case KEY.W:
        		keys.up = value; break;
        	
        	case KEY.S:
        		keys.down = value; break;
            
        	case KEY.SPACE:
        		keys.space = value; break;
        }
        
        this.setState({ keys:keys });
	}
	
	componentDidMount() {
		window.addEventListener('keyup', this.handlekeys.bind(this, false));
		window.addEventListener('keydown', this.handlekeys.bind(this, true));
		const ctx = this.refs.canvas.getContext("2d");
		this.setState({context:ctx});
		this.createSprite();
		this.createClouds();
		requestAnimationFrame(() => {this.update()});
	}
	
	componentDidUpdate() {
		this.drawCanvas();
	}
	

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handlekeys);
		window.removeEventListener('keydown', this.handlekeys);
	}
	
	update() {
		requestAnimationFrame(() => {this.update()});
		this.state.guy.render(this.state);
	}

	drawCanvas() {
		
		const ctx = this.state.context;
		
		ctx.save();
		
		ctx.canvas.width = this.state.screen.width;
		ctx.canvas.height = this.state.screen.height;
		const my_gradient=ctx.createLinearGradient(150,0,150,this.state.screen.height);

		my_gradient.addColorStop(0.000, 'rgba(5, 121, 175, 1.000)');
		my_gradient.addColorStop(0.554, 'rgba(70, 207, 244, 1.000)');
		ctx.fillStyle = my_gradient;
		ctx.fillRect(0,0,this.state.screen.width,this.state.screen.height);	
		
		ctx.restore();	
		  
	}
	
	createSprite() {
		

		// Create sprite
		const guy = new sprite({
			positionX: 20,
			positionY: 100,
			frameIndex: 0,
			width: 520,
			height: 300,
			image: "./images/Piskel.png",
			numberOfFrames: 2,
			ticksPerFrame: 2
		});
		this.setState({guy: guy}, () => {
			console.log(this.state);
		});
	}
	
	createClouds() {
		const cloud = new Clouds({
			position: this.state.screen.width,
			speed: 5
		});
		this.clouds.push(cloud);
		//requestAnimationFrame(() => {this.updateClouds(this.clouds)});
		
	}
	
	
	updateClouds(clouds) {
		//requestAnimationFrame(() => {this.updateClouds(this.clouds)});
		//this.drawCanvas();
		for (let x of clouds) {
			x.render(this.state);
			x.position = x.position - x.speed;
		}
	}
	
render (){
    return (
      <div>
     <canvas ref="canvas" 
    	 width = {this.state.screen.width * this.state.screen.ratio}
     	 height = {this.state.screen.height * this.state.screen.ratio} 	 
    	 />
      </div>
    );
   
}
}
