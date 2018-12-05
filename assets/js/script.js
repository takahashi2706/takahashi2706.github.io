$(function() {
	// $(window).scroll(function(){
	// 	console.log($(this).scrollTop());
	// })
	$(".description1").css("position","static");

	// navのスムーススクロール
	$(".nav li").click(function () {
		var target = $(this).attr("class");
		var position = $("#"+target).offset().top;
		$('html,body').animate({ scrollTop: position }, 500);
		return false;
	});


	// topタイプライター
	$('.top-comment').children().andSelf().contents().each(function() {
		if (this.nodeType == 3) {
			$(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
		}
	})
	$('.top-comment').css({'opacity':1});
	for (var i = 0; i <= $('.top-comment').children().size(); i++) {
		$('.top-comment').children('span:eq('+i+')').delay(90*i).animate({'opacity':1},50);
	}


	// コメント入れ替え
	// 現状だとwindowサイズが変更された時コメントがずれてしまう
	var des1 = $(".description1").html();
	var des2 = $(".description2").html();
	var des3 = $(".description3").html();
	var des4 = $(".description4").html();
	var des5 = $(".description5").html();

	$(window).scroll(function(){
		var scr_count = $(this).scrollTop();
		if(scr_count < 1890) {
			$(".description1").css("position","static");
			$(".description1").css("width","60%");
		}
		if(scr_count >= 1890) {
			$(".description1").css("position","fixed");
			$(".description1").css("width","52%");

		}
		if(scr_count >= 3850) {
			$(".description1").css("position","static");
			$(".description1").css("width","60%");

		}
		if(scr_count < 2200) {
			$(".description1").html(des1);
		}
		if(scr_count >= 2200 && scr_count < 2530) {
			$(".description1").html(des2);
		}
		if(scr_count >= 2530 && scr_count < 2930) {
			$(".description1").html(des3);
		}
		if(scr_count >= 2930 && scr_count < 3300) {
			$(".description1").html(des4);
		}
		if(scr_count >= 3300) {
			$(".description1").html(des5);
		}
	})
})