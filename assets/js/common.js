
$(document).ready(function () {
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:3000,
    autoplayDisableOnInteraction : false,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
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
})
