var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
Timer = document.getElementById(TimerID);
TotalSeconds = Time;

UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function Tick() {
	if (TotalSeconds>0) { 
		TotalSeconds -= 1;
		UpdateTimer()
		window.setTimeout("Tick()", 1000);
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
