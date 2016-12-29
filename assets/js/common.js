
$(document).ready(function () {
	$('.banner').unslider();
	//导航点击
	$(".navbar-nav li").click(function () {
		$(".navbar-nav li").removeClass('on');
		$(this).css({'height':'auto'});
		$(this).find('dl').css({'display':'block'});
	});
})
