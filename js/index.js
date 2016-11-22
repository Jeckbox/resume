window.addEventListener("load",function(){
	mouseScroll();
	mottoShow();
	qeustionClick();
	page_5();
	touchChange();
	navClick();
	textChange();
},false);

/*获取里面的盒子*/
var inBox = document.getElementById('inBox');
var sum = 0;

/*-------------------------------------------------第一页--------------------------------------------------*/
/*获取对象*/
var motto_1 = document.getElementsByClassName('motto_1')[0];
var motto_2 = document.getElementsByClassName('motto_2')[0];
var motto_3 = document.getElementsByClassName('motto_3')[0];
var motto_4 = document.getElementsByClassName('motto_4')[0];
function mottoShow(){
	if(sum == 0){
		motto_1.setAttribute("class","motto_1 m1Show");
		motto_1.style.display = "block";
		setTimeout(function(){
			motto_2.setAttribute("class","motto_2 m2Show");
			motto_2.style.display = "block";
		},300);
		setTimeout(function(){
			motto_3.setAttribute("class","motto_3 m3Show");
			motto_3.style.display = "block";
		},600);
		setTimeout(function(){
			motto_4.setAttribute("class","motto_4 m4Show");
			motto_4.style.display = "block";
		},900);
	}else{
		setTimeout(function(){
			motto_1.setAttribute("class","motto_1");
			motto_2.setAttribute("class","motto_2");
			motto_3.setAttribute("class","motto_3");
			motto_4.setAttribute("class","motto_4");
			motto_1.style.display = "none";
			motto_2.style.display = "none";
			motto_3.style.display = "none";
			motto_4.style.display = "none";
		},500);
		
	}
};
/*-------------------------------------------------第一页--------------------------------------------------*/
/*-------------------------------------------------第二页--------------------------------------------------*/
var page_2 = document.getElementById('page_2');
/*获取h2*/
var aboutMe = page_2.getElementsByTagName('h2')[0];
/*获取基本信息div*/
var detail = page_2.getElementsByClassName('detail')[0];
/*获取照片*/
var photo = page_2.getElementsByClassName('photo')[0];
/*第二页动画开始*/
/*detail出现*/
/*pc端*/
function detailShow(){
	detail.setAttribute('class','detail clearfix detail_move');
	detail.style.display = 'block';
}
function page2Move(){
	if(sum == 1){
		aboutMe.setAttribute('class','about_move');
		aboutMe.style.display = 'block';
		setTimeout(detailShow,500);
		
	}else{
		setTimeout(function(){
			aboutMe.removeAttribute('class');
			aboutMe.style.display = 'none';
			detail.setAttribute('class','detail clearfix');
			detail.style.display = 'none';
		},500);
		
	}
}

/*移动端*/
var times = true;
photo.addEventListener("click",function(){
	if(times){
		photo.style.transform = "scale(1.5)";
		times = false;
	}else{
		photo.style.transform = "scale(1)";
		times = true;
	}
},false);

/*-------------------------------------------------第二页--------------------------------------------------*/
/*-------------------------------------------------第三页--------------------------------------------------*/
var page_3 = document.getElementById("page_3");
/*获取问题框*/
var questionList = page_3.getElementsByClassName("question")[0];
/*获取问题*/
var question = questionList.getElementsByTagName("li");
/*获取答案框*/
var contentList = page_3.getElementsByClassName("content")[0];
/*获取答案*/
var content = contentList.getElementsByTagName("li");
/*问题依次出现*/
function questionMove(){
	if(sum == 2){
		setTimeout(function(){
			contentList.setAttribute("class","content show");
		},2000);
		question[0].setAttribute("class","show action");
		setTimeout(function(){
			question[1].setAttribute("class","show");
		},500);
		setTimeout(function(){
			question[2].setAttribute("class","show");
		},1000);
		setTimeout(function(){
			question[3].setAttribute("class","show");
		},1500);
		setTimeout(function(){
			question[4].setAttribute("class","show");
		},2000);
	}else{
		setTimeout(function(){
			contentList.setAttribute("class","content");
			question[0].removeAttribute("class");
			question[1].removeAttribute("class");
			question[2].removeAttribute("class");
			question[3].removeAttribute("class");
			question[4].removeAttribute("class");
		},1000);
	}
	
	
}
/*问题点击事件*/
var queNum = 0;
function qeustionClick(){
	for(var i = 0; i < question.length; i++){
		question[i].index = i;
		question[i].addEventListener("click",function(){
			question[queNum].setAttribute("class","show");
			question[this.index].setAttribute("class","action show");
			content[queNum].removeAttribute("class");
			content[this.index].setAttribute("class","action");
			queNum = this.index;


		},false);
	}
}

/*-------------------------------------------------第三页--------------------------------------------------*/
/*-------------------------------------------------第四页--------------------------------------------------*/
var sk_box = document.getElementsByClassName("sk_box")[0];
/*技能标题下的ul数组*/
var sk_ul = sk_box.getElementsByTagName("ul");
/*获取要点击的技能标题*/
var sk_li = sk_box.getElementsByClassName("skLi");
/*用于记录每个ul原本的高*/
var ularr = [];
for( var i = 0; i < sk_ul.length; i++){
	var height = sk_ul[i].offsetHeight;
	ularr.push(height);
}
/*清除ul的高度*/
function clearHeight(){
	for( var i = 0; i < sk_ul.length; i++){
		sk_ul[i].style.height = 0;
	}
}
/*先后将ul的高度加上*/
function addHeight(){
	if(sum == 3){
		setTimeout(function(){
			sk_ul[0].style.height = ularr[0] + "px";
		},500);
		setTimeout(function(){
			sk_ul[1].style.height = ularr[1] + "px";
		},1000);
		setTimeout(function(){
			sk_ul[2].style.height = ularr[2] + "px";
		},1500);
		setTimeout(function(){
			sk_ul[3].style.height = ularr[3] + "px";
		},2000);
	}else{
		clearHeight();
	}
	
}
/*--------------------手机端---------------*/
var begin_X;
var begin_Y;
var end_X;
var end_Y;
var beginTime;
var endTime;
window.addEventListener("load",function(){
	for( var i = 0; i < sk_li.length; i++){
		sk_li[i].index = i;
		sk_li[i].addEventListener("touchstart",function(e){
			beginTime = new Date().getTime();
		},false);
		sk_li[i].addEventListener("touchend",function(e){
			endTime = new Date().getTime();
			var time = endTime - beginTime;
			if(time <=300){
				for( var j = 0; j < sk_ul.length; j++){
					sk_ul[j].removeAttribute("style");
					sk_ul[j].removeAttribute("class");
				}
				var target = this.getElementsByTagName("ul")[0];
				target.removeAttribute("style");
				target.setAttribute("class","action");
			}	
		},false);
	}
},false);
	



/*-------------------------------------------------第四页--------------------------------------------------*/
/*-------------------------------------------------第五页--------------------------------------------------*/
function page_5(){
	/*获取要动的轮播图*/
	var moveUl = document.getElementsByClassName("move_ul")[0];
	/*获取控制轮播图的点点*/
	var dianUl = document.getElementsByClassName("diandian")[0];
	var dian = dianUl.getElementsByTagName("li");
	/*获取装动图的框*/
	var moving_box = document.getElementsByClassName("moving_box")[0];
	/*获取框的宽度*/
	var box_width = moving_box.offsetWidth;
	/*获取左右按钮*/
	var preBtn = moving_box.getElementsByClassName("pre")[0];
	var nextBtn = moving_box.getElementsByClassName("next")[0];
	/*获取所有图片*/
	var allImg = moving_box.getElementsByClassName("al_img");
	for(var i = 0; i < allImg.length; i++){
		allImg[i].onclick = null;
	}



	var moveNum = 1;
	var ponIndex = 0;
	var imgTimer;
	/*自动轮播*/
	imgTimer = setInterval(picChange,1000);
	/*添加过度*/
	var addTransition = function(){
		moveUl.style.transition = "all 0.5s ease 0s";
		moveUl.style.webkitTransition = "all 0.5s ease 0s";
	};
	/*去除过度*/
	var removeTransition = function(){
		moveUl.style.transition = "none";
		moveUl.style.webkitTransition = "none";
	};
	/*改变位置*/
	var setTransform = function(t){
		moveUl.style.transform = "translateX("+t+"px)";
		moveUl.style.webkitTransform = "translateX("+t+"px)";
	};
	/*改变点点的状态*/
	var pointChange = function(){
		for(var i = 0; i < dian.length; i++){
			dian[i].removeAttribute("class");
		}
		ponIndex = moveNum - 1;
		if(ponIndex < 0){
			ponIndex = 3;
		}else if(ponIndex > 3){
			ponIndex = 0;
		}
		dian[ponIndex].setAttribute("class","active");
	}
	/*初始化ul位置*/
	setTransform(-moveNum*box_width);
	
	var picChange = function(){
		moveNum++;
		addTransition();
		setTransform(-moveNum*box_width);
		pointChange();
	};
	

	/*动画结束后，判断位子，实现无缝轮播*/
	moveUl.addEventListener('transitionEnd',function(){
		if(moveNum >= 5){
			moveNum = 1;
		}else if(moveNum <= 0){
			moveNum= 4;
		}
		removeTransition();
		setTransform(-moveNum*box_width);
	},false);
	moveUl.addEventListener('webkitTransitionEnd',function(){
		if(moveNum >= 5){
			moveNum = 1;
		}else if(moveNum <= 0){
			moveNum= 4;
		}
		removeTransition();
		setTransform(-moveNum*box_width);
	},false);
	/*鼠标移入，关闭定时器，移出，打开定时器*/
	moving_box.addEventListener("mouseover",function(){
		clearInterval(imgTimer);
	},false);
	moving_box.addEventListener("mouseout",function(){
		imgTimer = setInterval(picChange,1000);
	},false);
	/*左右按钮控制轮播图变换*/
	preBtn.addEventListener("click",function(){
		moveNum--;
		addTransition();
		setTransform(-moveNum*box_width);
		pointChange();
	},false);
	nextBtn.addEventListener("click",function(){
		moveNum++;
		addTransition();
		setTransform(-moveNum*box_width);
		pointChange();
	},false);
	/*手指左右滑动事件*/
	var startX_img;
	var endX_img;
	var imgStart;
	var imgEnd;
	moving_box.addEventListener("touchstart",function(e){
		imgStart = new Date().getTime();
		startX_img = e.touches[0].clientX;
	},false);
	moving_box.addEventListener("touchmove",function(e){
		endX_img = e.touches[0].clientX;
	},false);
	moving_box.addEventListener("touchend",function(e){
		imgEnd = new Date().getTime();
		var imgTime = imgEnd - imgStart;
		var moveLength = endX_img - startX_img;
		if(Math.abs(moveLength) >=200 && imgTime >= 150){
			if(moveLength > 0){
				moveNum--;
				addTransition();
				setTransform(-moveNum*box_width);
				pointChange();
			}else{
				moveNum++;
				addTransition();
				setTransform(-moveNum*box_width);
				pointChange();
			}
		}

	},false);

};





/*-------------------------------------------------第五页--------------------------------------------------*/
/*鼠标滚轮事件*/
var timer_up;
var timer_down;

function mouseScroll(){
	if(window.attachEvent){
		window.attachEvent("onmousewheel",scrollFn);
	}else if(window.addEventListener){
		window.addEventListener("mousewheel",scrollFn,false);
		window.addEventListener("DOMMouseScroll",scrollFn,false);
	}
	function scrollFn(e){
		var ev = e || window.event;
		var num = ev.detail || ev.wheelDelta;
		if(num == 120 || num == -3){
			clearTimeout(timer_up);
			timer_up = setTimeout(function(){
				sum--;
				if(sum <=0){
					sum = 0;
				}
				inBox.style.transform = "translateY(-"+(sum*100)+"%)";
				allChange();
				navOn();
			},200);
			
		}else if(num == -120 || num == 3){
			clearTimeout(timer_down);
			timer_down = setTimeout(function(){
				sum++;
				if(sum >= 5){
					sum = 5;
				}
				inBox.style.transform = "translateY(-"+(sum*100)+"%)";
				allChange();
				navOn();
			},200);
			
		}
		if(ev.preventDefault){
			ev.preventDefault();
		}else{
			ev.returnValue = false;
		}
	}
};
/*手指向上滑动事件*/
/*手指开始触碰时的y坐标*/
var startY;
/*手指离开时的y坐标*/
var endY;
/*手机触碰时的时间*/
var moveStart;
/*手指离开时的时间*/
var moveEnd;
function touchChange(){
	var bigBox = document.getElementById("bigBox");
	bigBox.addEventListener("touchstart",function(e){
		moveStart = new Date().getTime();
		startY = e.touches[0].clientY;
	},false);
	bigBox.addEventListener("touchmove",function(e){
		e = e || window.event;
		e.preventDefault();
		endY = e.touches[0].clientY;
	},false);
	bigBox.addEventListener("touchend",function(){
		moveEnd = new Date().getTime();
		var moveTime = moveEnd - moveStart;
		var touchHeight = endY - startY;
		/*如果手指在屏幕上的距离大于150，并且手指与屏幕的持续接触时间超过150ms，则判断为一次滑动*/
		if(Math.abs(touchHeight) >=150 && moveTime >= 150){
			if(touchHeight < 0){
				sum++;
				if(sum >= 5){
					sum = 5;
				};
				inBox.style.transform = "translateY(-"+(sum*100)+"%)";
				allChange();
			}else{
				sum--;
				if(sum <=0){
					sum = 0;
				};
				inBox.style.transform = "translateY(-"+(sum*100)+"%)";
				allChange();
			};
		};
	},false);
	
};
/*页面转换事件*/
function allChange(){
	page2Move();
	mottoShow();
	questionMove();
	addHeight();
}
/*---------------------------------导航点击事件---------------------------------------*/
/*获取页面头部*/
var header = document.getElementById("header");
/*获取名字部分*/
var nameObj = document.getElementById("head_left");
/*获取头像右边文字*/
var textArr = nameObj.getElementsByTagName("p");
/*获取导航盒子*/
var navBox = header.getElementsByClassName("head_nav")[0];
/*获取导航数组*/
var navArr = navBox.getElementsByTagName("li");
/*点击导航*/
function navClick(){
	for( var i = 0; i < navArr.length; i++){
		navArr[i].index = i;
		navArr[i].addEventListener("click",function(){
			for(var j = 0; j < navArr.length; j++){
				navArr[j].removeAttribute("class");
			}
			this.setAttribute("class","active");
			sum = this.index;
			inBox.style.transform = "translateY(-"+(sum*100)+"%)";
			allChange();
		},false);
	}
}
/*导航状态改变事件*/
function navOn(){
	for( var j = 0; j < navArr.length; j++){
		navArr[j].removeAttribute("class");
	}
	navArr[sum].setAttribute("class","active");
};
/*名字变化*/
function textChange(){

	nameObj.addEventListener("mouseover",function(){

		textArr[0].innerHTML = "Apply for";
		textArr[1].innerHTML = "前端工程师";
	},false);
	nameObj.addEventListener("mouseout",function(){
		textArr[0].innerHTML = "韦仕博";
		textArr[1].innerHTML = "个人简历";
	},false);
}