
$(document).ready(function () {
	
	//轮播
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:3000,
    autoplayDisableOnInteraction : false,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
  });        
	//导航点击
	$(".navbar-nav li").click(function () {
		var acitve = $(this).hasClass('active_nav');
		if(!acitve){
			$(".navbar-nav li").removeClass('active_nav');
			$(this).addClass('active_nav');
			$(".navbar-nav li").find('dl').css({'display':'none'});
			$(this).find('dl').css({'display':'block'});
		}
		else{
			$(this).removeClass('active_nav');
			$(this).find('dl').css({'display':'none'});
		}
		
	});
	
	//返回顶部
	$("#go_top,#go_top2").click(function () {
		$("body").animate({scrollTop:0},500)
	});
	
	//需求弹框
	$(".need_btn").click(function () {
		$(".need_box").show();
	});
	$(".need_box .close,.need_bg").click(function () {
		$(".need_box").hide();
	});
	
	//	产品页左侧分类
	$(".left_nav .pro ul li span").click(function  () {
		var hason = $(this).hasClass('on');
		if(!hason){
			$(this).siblings().show(200);
			$(this).addClass('on');
		}
		else{
			$(this).siblings().hide(200);
			$(this).removeClass('on');
		}
		
	})
})
