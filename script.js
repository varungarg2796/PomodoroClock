//Some javascript will come here
var mins, secs,countdown,pause,resume;


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