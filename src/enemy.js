import Text from "./text"


const strings = ["JAVASCRIPT 5/5", "JAVA 5/5", "PYTHON 5/5", "HTML 5/5", "CSS 5/5", "C 4/5", 
	"C++ 2/5", "C# 3/5", "SQL 4/5", "PHP 2/5", "REACT? JUST LOOK AT THIS APP!"];

const strings2 = ["MOTIVATED!!", "PASSIONATE!", "HANDSOME", "CONSIDERATE", "DEPENDABLE", "HARD WORKER"];

export default class enemy {
	constructor(args) {
		this.position = args.position;
		this.moveDown = args.moveDown;
		this.texts = args.texts;
		this.health = args.health;
		this.lastShot = 0;
		this.lastShot2 = 0;
	}
	
	render(state) {
		var x;
	
		if (this.moveDown) {
			this.position += 3;
		}
		
		if (!this.moveDown) {
			this.position -= 3;
		}
		if (state.gameStart && !state.endGame) {
			if (Date.now() - this.lastShot > 1000) {
				x = Math.floor((Math.random() * strings.length) + 0);
	    		const text = new Text({
	    			enemy:this, 
	    			positionX: state.screen.width-200, 
	    			string:strings[x],
	    			colour: "red"
	    		});
	    		this.texts(text);
	    		this.lastShot = Date.now();
	    	} 
			
			if (Date.now() - this.lastShot2 > 3245) {
				x = Math.floor((Math.random() * strings2.length) + 0);
	    		const text = new Text({
	    			enemy:this, 
	    			positionX: state.screen.width-200, 
	    			string:strings2[x],
	    			colour: "blue"
	    		});
	    		this.texts(text);
	    		this.lastShot2 = Date.now();
	    	} 
		}
		
		const context = state.context;
		
		context.save();
		context.translate(state.screen.width-700,this.position);
		context.font = "bold 12pt Calibri";
		context.fillStyle = "black";
		context.textAlign = "center";
		context.textBaseline = "middle";
		
		context.fillText("resume", 520, 90);
		context.fillText("HP" + this.health, 515, 200);
		context.beginPath();
		context.lineWidth=4;
		context.moveTo(492,71);
		context.lineTo(492,71);
		context.lineTo(491,72);
		context.lineTo(490,72);
		context.lineTo(488,73);
		context.lineTo(487,74);
		context.lineTo(485,75);
		context.lineTo(484,78);
		context.lineTo(482,81);
		context.lineTo(480,84);
		context.lineTo(479,86);
		context.lineTo(478,89);
		context.lineTo(475,94);
		context.lineTo(473,99);
		context.lineTo(471,104);
		context.lineTo(470,109);
		context.lineTo(470,113);
		context.lineTo(469,118);
		context.lineTo(469,122);
		context.lineTo(469,126);
		context.lineTo(469,132);
		context.lineTo(469,138);
		context.lineTo(470,143);
		context.lineTo(471,149);
		context.lineTo(472,155);
		context.lineTo(472,162);
		context.lineTo(472,168);
		context.lineTo(472,174);
		context.lineTo(472,180);
		context.lineTo(472,186);
		context.lineTo(471,191);
		context.lineTo(469,197);
		context.lineTo(467,201);
		context.lineTo(463,206);
		context.lineTo(457,211);
		context.lineTo(452,218);
		context.lineTo(448,223);
		context.lineTo(443,227);
		context.lineTo(439,230);
		context.lineTo(434,232);
		context.lineTo(432,233);
		context.lineTo(430,233);
		context.moveTo(566,78);
		context.lineTo(566,78);
		context.lineTo(565,78);
		context.lineTo(564,79);
		context.lineTo(562,79);
		context.lineTo(560,82);
		context.lineTo(558,86);
		context.lineTo(555,90);
		context.lineTo(553,96);
		context.lineTo(551,101);
		context.lineTo(550,107);
		context.lineTo(550,111);
		context.lineTo(550,115);
		context.lineTo(551,121);
		context.lineTo(552,128);
		context.lineTo(553,135);
		context.lineTo(553,142);
		context.lineTo(553,149);
		context.lineTo(554,156);
		context.lineTo(554,163);
		context.lineTo(554,170);
		context.lineTo(554,178);
		context.lineTo(554,186);
		context.lineTo(554,192);
		context.lineTo(554,198);
		context.lineTo(552,203);
		context.lineTo(550,211);
		context.lineTo(549,217);
		context.lineTo(548,220);
		context.lineTo(547,222);
		context.lineTo(547,224);
		context.lineTo(546,226);
		context.lineTo(546,227);
		context.lineTo(545,227);
		context.lineTo(545,228);
		context.lineTo(543,231);
		context.lineTo(541,235);
		context.lineTo(540,238);
		context.lineTo(540,240);
		context.lineTo(539,241);
		context.lineTo(538,243);
		context.lineTo(536,244);
		context.lineTo(536,245);
		context.lineTo(535,245);
		context.lineTo(534,246);
		context.lineTo(531,247);
		context.lineTo(527,248);
		context.lineTo(524,248);
		context.lineTo(522,248);
		context.lineTo(519,247);
		context.lineTo(509,246);
		context.lineTo(496,245);
		context.lineTo(480,243);
		context.lineTo(465,241);
		context.lineTo(450,239);
		context.lineTo(444,239);
		context.lineTo(443,239);
		context.lineTo(440,238);
		context.lineTo(437,237);
		context.lineTo(436,237);
		context.lineTo(435,237);
		context.lineTo(434,237);
		context.lineTo(432,237);
		context.lineTo(426,237);
		context.lineTo(423,237);
		context.lineTo(422,237);
		context.moveTo(491,72);
		context.lineTo(491,72);
		context.lineTo(492,72);
		context.lineTo(493,72);
		context.lineTo(495,72);
		context.lineTo(499,72);
		context.lineTo(502,73);
		context.lineTo(505,73);
		context.lineTo(508,73);
		context.lineTo(509,73);
		context.lineTo(511,74);
		context.lineTo(514,74);
		context.lineTo(515,74);
		context.lineTo(518,74);
		context.lineTo(523,74);
		context.lineTo(527,74);
		context.lineTo(531,73);
		context.lineTo(535,72);
		context.lineTo(537,72);
		context.lineTo(538,72);
		context.lineTo(541,72);
		context.lineTo(544,72);
		context.lineTo(546,71);
		context.lineTo(547,71);
		context.lineTo(548,71);
		context.lineTo(548,72);
		context.lineTo(549,72);
		context.lineTo(549,73);
		context.lineTo(550,73);
		context.lineTo(551,73);
		context.lineTo(552,74);
		context.lineTo(556,76);
		context.lineTo(558,77);
		context.lineTo(559,77);
		context.lineTo(560,77);
		context.lineTo(560,78);
		context.lineTo(561,78);
		context.stroke();
		context.closePath();
		
		context.beginPath();
		context.lineWidth=1;
		context.moveTo(484,117);
		context.lineTo(539,115);
		context.moveTo(487,162);
		context.lineTo(541,161);
		context.moveTo(476,206);
		context.lineTo(532,209);
		context.stroke();
		context.closePath();
		
		context.restore();
	}
}
