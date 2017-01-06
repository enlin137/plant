(function($){
	$.fn.CheckBox =function  (call) {
		$(this).find('input').css({"position":"absolute","top":"-9999px"});
		$(this).each(function(){
			var hasOn = $(this).hasClass('on');				
			if(hasOn){
				$(this).find('input').prop("checked",true); 
			}
		})
		$(this).click(function (event) {
			var type = $(this).find('input').attr("type");
			var isCheck = $(this).find('input').prop("checked");
			if (type=="radio") {
				$(this).addClass('on').siblings().removeClass('on');
				$(this).find('input').prop("checked",true).siblings().prop("checked",false);
			} else{	
				if(!isCheck){
					$(this).addClass('on');
					$(this).find('input').prop("checked",true);
				}
				else{
					$(this).removeClass('on');
					$(this).find('input').prop("checked",false);
				}
			}
			if(typeof(call) === "function"){
				call($(this));
			}
			event.stopPropagation();
		});
		
		$(this).find("input").click(function(event){
			event.stopPropagation();
		})

	}
})(jQuery);
