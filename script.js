//Some javascript will come here
var mins, secs,countdown;

var breakMins, breakSecs;


$(document).ready(function()
{
	init();
	set();
	$(".dis").attr("disabled", true);	

})

$("#start").on("click", beginTimer);
$("#increment").on("click", increase);
$("#decrement").on("click", decrease);
$("#reset").on("click", reset);

function reset()
{
	init();
	set();
	$(".dis").attr("disabled", true);	
	$("#start").attr("disabled", false);	
	clearInterval(countdown);
}

function increase()
{
	mins++;
	$("#minutes").text(mins);
}

function decrease()
{
	if(mins>1)
	{
		mins--;
		$("#minutes").text(mins);
	}
	else
	{
		alert("Cannot be decreased further");
	}
}

function beginTimer()
{
	--mins;
	$("#start").attr("disabled", true);	
	$("#pause").attr("disabled", false);	
	$("#minutes").text(mins);
	$("#seperator").text(":");
	$("#seconds").text(secs);
	update(); //to start instantly
	countdown= setInterval(update, 1000);
}

$("#pause").click(function()
{
	stop();
	$("#resume").attr("disabled", false);
	$("#pause").attr("disabled", true);		
})

$("#resume").click(function()
{	
		$("#pause").attr("disabled", false);
		$("#resume").attr("disabled", true);		
		countdown= setInterval(update, 1000);	
})

function update()
{
	$("#minutes").text(mins);
	$("#seconds").text(secs);
	--secs;
	if(mins===0 && secs<0)
	{
		stop();
		console.log('Timer Finished');
	}
	else if(secs<0 && mins>0)
	{
		secs=59;
		--mins;
	}
	else if(secs==0 && mins==0)
	{
		stop();
		breaks();
	}

}

function stop()
{
	clearInterval(countdown);
}

function init ()
{
	mins=25;
	secs=59; 
}

function set()
{
	$("#minutes").text(mins);
	$("#seconds").text("");
	$("#seperator").text("");
}

function breaks()
{
	breakMins=4;
	breakSecs=59;
	updateBreak();
	countdown= setInterval(updateBreak, 1000);	

}

function updateBreak()
{
	$("#minutes").text(breakMins);
	$("#seconds").text(breakSecs);
	--breakSecs;
	if(breakMins===0 && breakSecs<0)
	{
		stop();
		console.log('Timer Finished');
	}
	else if(breakSecs<0 && breakMins>0)
	{
		breakSecs=59;
		--breakMins;
	}
	else if(breakSecs==0 && breakMins==0)
	{
		stop();
		breaks();
	}

}