//Some javascript will come here
var mins, secs,countdown;


$(document).ready(function()
{
	init();
	set();
})

$("#start").on("click", beginTimer);

function beginTimer()
{
	init();
	$("#minutes").text(mins);
	$("#seperator").text(":");
	$("#seconds").text(secs);
	update(); //to start instantly
	countdown= setInterval(update, 1000);
}

function update()
{
	$("#seconds").text(secs);
	--secs;
	if(mins===0 && secs<0)
	{
		stop();
		console.log('Timer Finished');
	}
	else if(secs<=0 && mins>0)
	{
		secs=59;
		--mins;
		$("#minutes").text(mins);
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
}