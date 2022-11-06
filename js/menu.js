$(document).ready(function() {
	$('.menu-burger').click(function(){
        $('.menu-burger').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

$(document).ready(function() {
	$('.claim-link').click(function(){
        $('.form').toggleClass('form_active');
        $('.page').toggleClass('page__shadow');
	});
});
