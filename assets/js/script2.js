$(window).scroll(function(){
	console.log($(this).scrollTop());
})
$(".description1").css("position","static");

// topタイプライター
$(window).on('load',function(){
	$('.top-comment').children().andSelf().contents().each(function() {
		if (this.nodeType == 3) {
			$(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
		}
	})
	$('.top-comment').css({'opacity':1});
	for (var i = 0; i <= $('.top-comment').children().size(); i++) {
		$('.top-comment').children('span:eq('+i+')').delay(80*i).animate({'opacity':1},50);
	}
})


// コメント入れ替え
// 現状だとwindowサイズが変更された時コメントがずれてしまう
var des1 = $(".description1").html();
var des2 = $(".description2").html();
var des3 = $(".description3").html();

$(window).scroll(function(){
	var scr_count = $(this).scrollTop();
	if(scr_count < 1503) {
		$(".description1").css("position","static");
		$(".description1").css("width","65%");

	}
	if(scr_count >= 1503) {
		$(".description1").css("position","fixed");
		$(".description1").css("width","52%");

	}
	if(scr_count >= 2460) {
		$(".description1").css("position","static");
		$(".description1").css("width","65%");

	}
	if(scr_count < 1860) {
		$(".description1").html(des1);
	}
	if(scr_count >= 1860 && scr_count < 2310) {
		$(".description1").html(des2);
	}
	if(scr_count >= 2310) {
		$(".description1").html(des3);
	}
})