$(window).scroll(function(){
	console.log($(this).scrollTop());
})
$(".description1").css("position","static");
var des1 = $(".description1").html();
var des2 = $(".description2").html();
var des3 = $(".description3").html();
var des4 = $(".description4").html();

$(window).scroll(function(){
	scr_count = $(this).scrollTop();
	if(scr_count < 740) {
		$(".description1").css("position","static");
		$(".description1").css("width","65%");
	}
	if(scr_count > 742) {
		$(".description1").css("position","fixed");
		$(".description1").css("width","52%");
	}
	if(scr_count < 1400 ) {
		$(".description1").html(des1);
	}
	if(scr_count > 1400 && scr_count < 1860) {
		$(".description1").html(des2);
	}
	if(scr_count > 1860 && scr_count < 2260) {
		$(".description1").html(des3);
	}
	if(scr_count > 2260 && scr_count < 2500) {
		$(".description1").html(des4);
	}
	if(scr_count > 2500) {
		$(".description1").css("position","static");
		$(".description1").css("width","65%");
	}
})