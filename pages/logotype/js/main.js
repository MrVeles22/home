$(function(){
	$('.slider__wrap, .news__slider-wrap').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,
	});

	$('select').styler();

	$('.header__burger').on('click', function(){
		$('.header__menu ul').slideToggle();
	});

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
	});
});