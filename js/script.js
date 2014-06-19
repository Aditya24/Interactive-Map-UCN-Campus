var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
	Timer = document.getElementById(TimerID);
	TotalSeconds = Time;
	UpdateTimer();
	window.setTimeout("Tick()", 1000);
}

function Tick() {
	if (TotalSeconds>0) {
		if ($("#tasks ul li:nth-child(5)").hasClass('done')) {
			TotalSeconds = TotalSeconds;
			UpdateTimer();
			alert('Congrats!')
		} else {
			TotalSeconds -= 1;
			UpdateTimer();
			window.setTimeout("Tick()", 1000);
		}
	} else {
		timeEnd();
	}
}

function UpdateTimer() {
var minutes = (TotalSeconds - TotalSeconds%60)/60;
var seconds = TotalSeconds%60;
var time ='0'+minutes+':';
if (seconds<10) {
	time+='0'+seconds;
} else {
	time+=seconds;
}
Timer.innerHTML = time;
}

function startPlay(){
	$('.start').css({"display":"none"});
	document.getElementById("video").play();
	document.getElementById("video").currentTime =39;
	
	setTimeout(function(){
		document.getElementById("video").pause();
		$('#controlls2').css({"display":"block"});
		document.getElementById("up").innerHTML = '<a onclick="clip22()"><img width="100" height="100" src="images/uparrow.png" /></a>';
		document.getElementById("left").innerHTML = '<a onclick="clip1()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
		document.getElementById("down").innerHTML = '<img width="100" height="100" src="images/blackdownarrow.png" />';
		document.getElementById("right").innerHTML = '<a onclick="clip8()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		CreateTimer("timer", 240);
	}, 1000);
};

function clip1(){
	$('.administration').css({"display":"none"});
	$('#controlls2').css({"display":"none"});
	document.getElementById("video").currentTime = 382;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 125;
	var y = 172;
	var radius = 5;

	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		if (TotalSeconds>0) {
			reset();
			y = y - 5;
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'green';
			ctx.fill();
			ctx.stroke();	
		}
	}
	
	myVar = setInterval(redraw,1000);

	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"});
			document.getElementById("up").innerHTML = '<img width="100" height="100" src="images/blackuparrow.png" opacity="0.3"/>';
			document.getElementById("left").innerHTML = '<a onclick="clip19()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip7()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip2()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 19000);
}

function clip2(){
	$('#silence').css({"display":"none"});
	$('#controlls2').css({"display":"none"});
	document.getElementById("video").currentTime = 43;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 125;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x + 4.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"});
			document.getElementById("up").innerHTML = '<a onclick="clip3()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip20()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip12()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 10000);
}

function clip3(){
	$('#controlls2').css({"display":"none"});
	document.getElementById("video").currentTime = 54;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 170;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x + 5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"});
			document.getElementById("up").innerHTML = '<a onclick="clip4()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip17()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip11()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip21()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 13000);
}

function clip4(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 67; // when to start (start at second 67) 
	document.getElementById("video").play(); // start playing the video
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 235;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x + 8.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause(); //stop video
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip13()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip10()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip5()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 4000); //stop after 4 seconds and load controls
}

function clip5(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 330;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 269;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		y = y + 5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<img width="100" height="100" src="images/blackuparrow.png" />';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip9()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip6()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 19000);
}

function clip6(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 353;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 269;
	var y = 172;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x - 6.3;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<img width="100" height="100" src="images/blackuparrow.png" />';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip8()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip1()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 23000);
}

function clip7(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 266;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 125;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		y = y + 5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip8()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip22()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip8()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/rightarrow.png" />';
		}
	}, 18000);
}

function clip8(){
    $('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 283;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 125;
	var y = 172;
	var radius = 5;

	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x + 5.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<img width="100" height="100" src="images/blackuparrow.png" />';
			document.getElementById("left").innerHTML = '<a onclick="clip9()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip6()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 25000);
}

function clip9(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 308;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 269;
	var y = 172;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		y = y - 4.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<img width="100" height="100" src="images/blackuparrow.png" />';
			document.getElementById("left").innerHTML = '<a onclick="clip10()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip5()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip13()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 21000);
}

function clip10(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 88;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 269;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x - 11;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip11()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip21()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip4()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip17()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 3000);
}

function clip11(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 91;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 235;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x - 4.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip12()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip3()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip20()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 14000);
}

function clip12(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 105;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 170;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x - 3.5;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip19()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip7()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip2()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 10000);
}

function clip13(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 71;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 269;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x + 10;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip24()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip14()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 7000);
}

function clip14(){
	$('.bar').css({"display":"none"});
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 79;
	document.getElementById("video").play();
	
	var can2 = document.getElementById('icon');
	var ctx = can2.getContext('2d');
	
	var x = 340;
	var y = 77;
	var radius = 5;
	
	function reset(){
		ctx.clearRect(0,0,420,280);
	}
	
	function redraw(){
		reset();
		x = x - 8;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.stroke();	
	}
	
	myVar = setInterval(redraw,1000);
	
	var t = setTimeout(function(){
		clearInterval(myVar);
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip10()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip5()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip13()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 9000);
}

function clip15(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 116;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip16()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip23()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip18()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 63000);
}

function clip16(){
	$('.printing').css({"display":"none"});
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 180;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip15()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip17()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip11()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 10000);
}

function clip17(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 192;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip18()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<img width="100" height="100" src="images/blackleftarrow.png" />';
			document.getElementById("down").innerHTML = '<a onclick="clip16()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<a onclick="clip23()"><img width="100" height="100" src="images/rightarrow.png" /></a>';
		}
	}, 9000);
}

function clip18(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 201;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			$('#controlls2').css({"display":"block"}); //display the controls
			document.getElementById("up").innerHTML = '<a onclick="clip17()"><img width="100" height="100" src="images/uparrow.png" /></a>';
			document.getElementById("left").innerHTML = '<a onclick="clip11()"><img width="100" height="100" src="images/leftarrow.png" /></a>';
			document.getElementById("down").innerHTML = '<a onclick="clip15()"><img width="100" height="100" src="images/downarrow.png" /></a>';
			document.getElementById("right").innerHTML = '<img width="100" height="100" src="images/blackrightarrow.png" />';
		}
	}, 63000);
}

function clip19(){
	$('#silence').css({"display":"block"});
	$("#tasks ul li:nth-child(1)").css({"font-weight":"bold", "color":"red"});
	$("#tasks ul li:nth-child(1)").addClass('done');
	$('#controlls2').css({"display":"none"}); //hide the controls
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("controlls").innerHTML = '<button onclick="clip2()">Go Back</button>';
		}
	}, 7000);
}

function clip20(){
	$("#tasks ul li:nth-child(2)").css({"font-weight":"bold", "color":"red"});
	$("#tasks ul li:nth-child(2)").addClass('done');
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 418;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			document.getElementById("controlls").innerHTML = '<button onclick="clip3()">Go Back</button>';
		}
	}, 7000);
}

function clip21(){
	$("#tasks ul li:nth-child(3)").css({"font-weight":"bold", "color":"red"});
	$("#tasks ul li:nth-child(3)").addClass('done');
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 410;
	document.getElementById("video").play();
	var t = setTimeout(function(){
		if (TotalSeconds>0) {
			document.getElementById("video").pause();
			document.getElementById("controlls").innerHTML = '<button onclick="clip11()">Go Back</button>';
		}
	}, 7000);
}

function clip22(){
	document.getElementById("controlls").innerHTML='';
	$('#controlls2').css({"display":"none"});
	document.getElementById("video").currentTime = 402;		

	if ($("#tasks ul li:nth-child(4)").hasClass('done')) {
		$("#tasks ul li:nth-child(5)").css({"font-weight":"bold", "color":"red"});
		$("#tasks ul li:nth-child(5)").addClass('done');
		document.getElementById("video").play();
		var t = setTimeout(function(){
			if (TotalSeconds>0) {
				document.getElementById("video").pause();
				document.getElementById("controlls").innerHTML = '<button onclick="clip1()">Go Back</button>';
			}
		}, 7000);
	} else {
		$('.administration').css({"display":"block"});
	}
}

function clip23(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("video").currentTime = 426;

	if (($("#tasks ul li:nth-child(1)").hasClass('done')) && ($("#tasks ul li:nth-child(3)").hasClass('done'))) {
		$("#tasks ul li:nth-child(4)").css({"font-weight":"bold", "color":"red"});
		$("#tasks ul li:nth-child(4)").addClass('done');
		document.getElementById("video").play();
		var t = setTimeout(function(){
			if (TotalSeconds>0) {
				document.getElementById("video").pause();
				document.getElementById("controlls").innerHTML = '<button onclick="clip16()">Go Back</button>';
			}
		}, 7000);
	} else {
		$('.printing').css({"display":"block"});
	}
}

function clip24(){
	$('#controlls2').css({"display":"none"}); //hide the controls
	document.getElementById("controlls").innerHTML='';
	document.getElementById("video").currentTime = 434;

	if ($("#tasks ul li:nth-child(5)").hasClass('done')) {
		$("#tasks ul li:nth-child(6)").css({"font-weight":"bold", "color":"red"});
		$("#tasks ul li:nth-child(6)").addClass('done');
		document.getElementById("video").play();
		var t = setTimeout(function(){
			if (TotalSeconds>0) {
				document.getElementById("video").pause();
				document.getElementById("controlls").innerHTML = '<button onclick="clip16()">Go Back</button>';
			}
		}, 66000);
	} else {
		$('.bar').css({"display":"block"});				
	}
}

function timeEnd(){
	document.getElementById("video").pause();
	$('.end').css({"display":"block"});
}

function End(){
	$('.end').css({"display":"none"});
}
