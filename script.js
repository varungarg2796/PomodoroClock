//Some javascript will come here
var mins, secs;


$(document).ready(function()
{
	init();
	set();
})


function init ()
{
	mins=25;
	secs=59; 
}

function set()
{
	$(".timer").text(mins);
}