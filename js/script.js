$(document).ready(function() {
  (function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);
//ctrl+c crtl+v header 
var Header = $("header").clone();
Header.insertBefore(".section2,.section3");
$(".section3").prev("header").css({background:'linear-gradient(-68deg, #535564,#535564 37.75%, #e7e7e7 0)'});

//Вкл на <968
$(window).on('resize', function(){
	var win = $(this); //this = window
	if (win.width() <= 968) {

// text cutter  
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
      $(this).html(moretext);
 		} else {
      $(this).addClass("less");
      $(this).addClass("box-back");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
  });
  
  $(".morelink").click(function (e) { 
    $(".toggle").toggleClass("block-mobile");
    $(".toggle").toggleClass("block");
    $("#a").toggleClass("show");
    e.stopPropagation();
});


}
});


//document ready
});




