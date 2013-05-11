$(document).ready(function(){
	$("body").addClass("loaded");
	$("li a .caption, .maincaption").lettering();
	$("li a").hover(function(){
		$(".cover").addClass("fadeout");

	}, function(){
		$(".cover").removeClass("fadeout");
	});
});