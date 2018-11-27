// $(window).on('scroll' , function(){
//   if ($("#portfolio").is(":hidden")) {
//     //見えてなかったら
//     $(this).css('position','static');
//   } else {
//     //見えてたら
//     $(this).css('pos

// portfolioのdescriptionを固定する
$(function(){
	$(window).scroll(function(){
		var scr_count = $(window).scrollTop();
		var obj_pos = $("#portfolio").offset().top;
		var obj_pos_3 = $(".work3").offset().top;
		// var topHeight = $("#top").outerHeight(true) + $("#profile").outerHeight(true);
		// var height = $("#portfolio").outerHeight(true);
		if(scr_count > obj_pos){
			$(".description").css("position","fixed");
		} else {
			$(".description").css("position","static");
		}
		if(scr_count > obj_pos_3){
			$(".description").css("position","static");
		}
	})
})	