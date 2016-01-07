
$(function() {
	var options = { to: { width: 500, height: 200 } };
	$('#tabs-1').tabs({
	    hide: { effect: "scale",options, duration: 400 },
	    show: { effect: "scale",options, duration: 400 }
	});
});

