window.addEventListener("load",function(){
	/*获取球*/
	var ball = document.getElementById('ball');
	var scene = document.getElementsByClassName('scene')[0];
	var balls = new drawBall();
	balls.draw();
	for(var i = 0; i < balls.length; i++){
		ball.appendChild(balls.all[i]);
	}
	var maths = new math();
	var step = 2;
	var timer = setInterval(move,60);
	function move(){
		if(step > 2){
			step *= 0.9;
		}else{
			step = 2;
		}
		maths.theta += step;
		maths.rotates();
		var arr = maths.arr;
		setCss3(ball,{transform:"matrix3d("+arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]+","+arr[5]+","+arr[6]+","+arr[7]+","+arr[8]+","+arr[9]+","+arr[10]+","+arr[11]+","+arr[12]+","+arr[13]+","+arr[14]+","+arr[15]+")"});
	}
	/*pc端动画*/
	scene.addEventListener("mousedown",function(e){
		var ev = e || window.event;
		var lx = ev.clientX - scene.offsetLeft - 200;
		var ly = ev.clientY - scene.offsetTop - 200;
		var end;
		clearInterval(timer);
		document.onmousemove = function(e){
			var ev = e || window.event;
			var cx = ev.clientX - scene.offsetLeft - 200;
			var cy = ev.clientY - scene.offsetTop - 200;
			end = Math.sqrt((cx - lx)*(cx - lx) + (cy - ly)*(cy - ly));
			step = end/5;
			maths.mouse = [cx,cy,0];
			maths.theta += step;
			maths.rotates();
			var arr = maths.arr;
			setCss3(ball,{transform:"matrix3d("+arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]+","+arr[5]+","+arr[6]+","+arr[7]+","+arr[8]+","+arr[9]+","+arr[10]+","+arr[11]+","+arr[12]+","+arr[13]+","+arr[14]+","+arr[15]+")"});
			lx = cx;
			ly = cy;
		};
		document.onmouseup = function(e){
			var ev = e || window.event;
			var ox = ev.clientX - scene.offsetLeft - 200;
			var oy = ev.clientY - scene.offsetTop - 200;
			document.onmousemove = null;
			document.onmouseup = null;
			maths.mouse = [ox,oy,0];
			step = end;
			maths.rotates();
			var arr = maths.arr;
			timer = setInterval(move,60);
		};
	});
	/*移动端动画*/
	var lx;
	var ly;
	var end;
	var cx;
	var cy;
	scene.addEventListener("touchstart",function(e){
		ev = e || window.event;
		lx = ev.targetTouches[0].clientX - scene.offsetLeft - 200;
		ly = ev.targetTouches[0].clientY - scene.offsetTop - 200;
		end;
		cx;
		cy;
		clearInterval(timer);
	});
	scene.addEventListener("touchmove",function(e){
		var ev = e || window.event;
		cx = ev.targetTouches[0].clientX - scene.offsetLeft - 200;
		cy = ev.targetTouches[0].clientY - scene.offsetTop - 200;
		end = Math.sqrt((cx - lx)*(cx - lx) + (cy - ly)*(cy - ly));
		step = end/5;
		maths.mouse = [cx,cy,0];
		maths.theta += step;
		maths.rotates();
		var arr = maths.arr;
		setCss3(ball,{transform:"matrix3d("+arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]+","+arr[5]+","+arr[6]+","+arr[7]+","+arr[8]+","+arr[9]+","+arr[10]+","+arr[11]+","+arr[12]+","+arr[13]+","+arr[14]+","+arr[15]+")"});
		lx = cx;
		ly = cy;
	});
	scene.addEventListener("touchend",function(){
		/*console.log(11);*/
		/*document.ontouchmove = null;
		document.ontouchend = null;*/
		maths.mouse = [cx,cy,0];
		step = end;
		maths.rotates();
		var arr = maths.arr;
		timer = setInterval(move,60);
	});
},false);

function setCss3(obj,attrObj){
	for(var i in attrObj){
		var newi = i;
		if(newi.indexOf("-")>0){
			var num = newi.indexOf("-");
			newi = newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
		}
		obj.style[newi] = attrObj[i];
		newi = newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
		obj.style["webkit" + newi] = attrObj[i];
		obj.style["moz" + newi] = attrObj[i];
		obj.style["0" + newi] = attrObj[i];
		obj.style["ms" + newi] = attrObj[i];
	}
}
function drawBall(){
	this.radius = 200;
	this.angles =  [];
	this.length = 25;
	this.all = [];
	this.text = ["HTML5","CSS3","JAVA","Js","ANL.JS","NODE.JS","CSS","GIT","GULP","HTML","PHP","BS","PS","CANVAS","JQUERY","DOM","BOM","CHROME","REACT","R.JS","CSDN","CNODE","OSCH","INFOQ","WEB","IE"];
}
drawBall.prototype = {
	angle:function(){
		var num = 0;
		for( var i = 0; i < this.length; i++){
			var obj = {};
			if(i == 0){
				obj.theta = 0;
				obj.phi = 0;
			}
			if(i > 0 && i < 4){
				obj.theta = Math.PI/6*1;
				obj.phi = Math.PI*2/3*num;
				num ++;
			}
			if(i > 3 && i < 9){
				obj.theta = Math.PI/6*2;
				obj.phi = Math.PI*2/5*num;
				num ++;
			}
			if(i > 8 && i < 16){
				obj.theta = Math.PI/6*3;
				obj.phi = Math.PI*2/7*num;
				num ++;
			}
			if(i > 15 && i < 21){
				obj.theta = Math.PI/6*4;
				obj.phi = Math.PI*2/5*num;
				num ++;
			}
			if(i > 20 && i < 24){
				obj.theta = Math.PI/6*5;
				obj.phi = Math.PI*2/3*num;
				num ++;
			}
			if(i > 23){
				obj.theta = Math.PI;
				obj.phi = 0;	
			}
			this.angles.push(obj);
		}
	},
	draw:function(){
		this.angle();
		var radius = this.radius;
		for(var i = 0; i < this.length; i++){
			var theta = this.angles[i].theta;
			var phi = this.angles[i].phi;
			var z =radius*Math.sin(theta)*Math.cos(phi);
			var x =radius*Math.sin(theta)*Math.sin(phi) + 160;
			var y = radius*Math.cos(theta) + 170;
			var li = document.createElement("li");
			li.innerHTML = this.text[i];
			li.style.cssText="left:"+x+"px; top:"+y+"px;";
			setCss3(li,{transform:"translateZ("+z+"px) rotateY("+phi+"rad) rotateX("+(theta-Math.PI/2)+"rad)"});
			
			/*ball.appendChild(li);*/
			this.all.push(li);
		}
		//alert(this.angles.length);
	}
}