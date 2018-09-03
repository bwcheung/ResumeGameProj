import React from "react";
import ReactDom from "react-dom";
import Clouds from "./clouds";
import sprite from "./guy";
import enemy from "./enemy";

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
				context2: null,
				keys: {
					left: 0,
					right: 0,
					up: 0,
					down: 0,
					space:0,
				},
		};
		this.bullets = [];
		this.clouds = [];
		this.frameIndex = 0;
		this.guy = null;
		this.enemy =  null;
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
		 window.addEventListener('resize',  this.handleResize.bind(this, false));
		const ctx = this.refs.canvas.getContext("2d");
		const ctx2 = this.refs.canvas2.getContext("2d");
			
		this.setState({context2:ctx2});
		this.setState({context: ctx}, () => {
			this.gameLoop();
		});
		this.initialize();
	}
	
	
	componentDidUpdate() {
		this.guy.render(this.state);
	}
	

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handlekeys);
		window.removeEventListener('keydown', this.handlekeys);
		window.removeEventListener('resize', this.handleResize);
	}
	
	handleResize(value, e){
	    this.setState({
	      screen : {
	        width: window.innerWidth,
	        height: window.innerHeight,
	        ratio: window.devicePixelRatio || 1,
	      }
	    });
	  }
	
	initialize() {
		
		this.createSprite();
		this.createEnemy();
	}

	gameLoop() {
		requestAnimationFrame(() => {this.gameLoop()});
		const ctx = this.state.context;
		
		ctx.save();
		ctx.canvas.width = this.state.screen.width;
		ctx.canvas.height = this.state.screen.height;
		const my_gradient=ctx.createLinearGradient(150,0,150,this.state.screen.height);

		my_gradient.addColorStop(0.000, 'rgba(5, 121, 175, 1.000)');
		my_gradient.addColorStop(0.554, 'rgba(70, 207, 244, 1.000)');
		ctx.fillStyle = my_gradient;
		ctx.fillRect(0,0,this.state.screen.width,this.state.screen.height);
		
		if (this.clouds.length < 3) {
			this.createClouds();
		}
		
		if (this.enemy.position >= 400) {
			this.enemy.moveDown = false;
		} else if (this.enemy.position <= 0) {
			this.enemy.moveDown = true;
		}
		this.enemy.render(this.state);
		this.checkHit(this.bullets);
		this.updateBullets(this.bullets);
		this.updateClouds(this.clouds);
		ctx.restore();	
		  
	}
	
	checkHit(bullets) {
		for (let x of bullets) {
			if (x.positionX >= 1200 && x.positionY >= this.enemy.position) {
				x.delete = true;
			}
		}
	}
	
	
	createSprite() {
		
		// Create sprite
		this.guy = new sprite({
			positionX: 20,
			positionY: 100,
			frameIndex: 0,
			width: 520,
			height: 300,
			image: "https://raw.githubusercontent.com/bwcheung/ResumeGameProj/master/src/images/Piskel.png",
			numberOfFrames: 2,
			ticksPerFrame: 2,
			bullets: this.addBullet.bind(this),		
		});
		//this.setState({guy: guy});
	}
	
	createClouds() {
		
		const cloud = new Clouds({
			positionX: Math.random() * (this.state.screen.width - 1100) + 1100,
			positionY: Math.random() * (100 - 1) + 1,
			speed: Math.random() * (5 - 2) + 2,
		});
		this.clouds.push(cloud);
	}
	
	createEnemy() {
		this.enemy = new enemy({
			position: 10,
			moveDown: true,
		});
	}
	
	
	updateClouds(clouds) {
		let index = 0;
		for (let x of clouds) {
			if (x.delete) {
				this.clouds.splice(index,1);
			} else {
				x.render(this.state);
				x.positionX = x.positionX - x.speed;
			}
			index++;
		}
	}
	
	addBullet(bullet) {
		this.bullets.push(bullet);
		console.log(this.bullets);
	}
	
	updateBullets(bullets) {
		let index = 0;
		for (let x of bullets) {
			if (x.delete) {
				this.bullets.splice(index,1);
			} else {
				x.render(this.state);
				x.positionX = x.positionX + 5;
			}
			index++;
		}
	}
	
render (){
    return (
      <div>
     <canvas ref="canvas" id = "background"
    	 width = {this.state.screen.width * this.state.screen.ratio}
     	 height = {this.state.screen.height * this.state.screen.ratio} 	 
    	 />
     <canvas ref = "canvas2" id = "player"
	 width = {this.state.screen.width * this.state.screen.ratio}
 	 height = {this.state.screen.height * this.state.screen.ratio}
	 />
      </div>
    );
   
}
}
