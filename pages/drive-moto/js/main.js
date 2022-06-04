$(function(){
	$('.hero__slider').slick({
		prevArrow:'<button class="hero-slick__btn hero-slick__btn-prev"><img src="img/svg/slider-arrow-left.svg" alt=""></button>',
		nextArrow:'<button class="hero-slick__btn hero-slick__btn-next"><img src="img/svg/slider-arrow-right.svg" alt=""></button>',
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
				}
			},
		]
	});



	$('.tab').on('click', function(e){
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div, form')).removeClass('tab__content--active');
		$($(this).parent().parent().siblings().find('div, form')).removeClass('tab__content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tab__content--active');

		$(".popular__slider").slick("setPosition");
	});
	
	$('.product__item-favorite, .product-card__info-favorite').on('click', function(){
		$(this).toggleClass('product__item-favorite--active')
	});

	$('.popular__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:'<button class="popular-slick__btn popular-slick__btn-prev"><img src="img/svg/slider-black-arrow-left.svg" alt=""></button>',
		nextArrow:'<button class="popular-slick__btn popular-slick__btn-next"><img src="img/svg/slider-black-arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 920,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
				}
			},
		]
	});

	$('.input-style, .sorting-style, .select-style').styler();

	$('.title-drop, .aside-filter__more-filters').on('click', function(){
		$(this).toggleClass('title-drop--active');
		$(this).next().slideToggle(150);
	});
	
	$(".js-range-slider").ionRangeSlider({
		skin: "round",
		grid: false,
		hide_min_max:true,
		hide_from_to:true,

		onChange: function (obj) {     // callback, вызывается при каждом изменении состояния
			let element = document.querySelector('#range-slider-from');
			let element2 = document.querySelector('#range-slider-to');
			element = 
			element.innerHTML = obj.from_pretty;
			element2.innerHTML = obj.to_pretty;
		}
	});

	$('.catalog-top__filter-grid').on('click', function(){
		$(this).addClass('catalog-top__filter--active'),
		$('.catalog-top__filter-row').removeClass('catalog-top__filter--active')
		$('.catalog__products-wrap').removeClass('catalog__products-row--active')
	});

	$('.catalog-top__filter-row').on('click', function(){
		$(this).addClass('catalog-top__filter--active'),
		$('.catalog-top__filter-grid').removeClass('catalog-top__filter--active')
		$('.catalog__products-wrap').addClass('catalog__products-row--active')
	});

	$('.rateyo-stars').rateYo({
		normalFill: "#c4c4c4",
		spacing: "7px",
    ratedFill: "#1c62cd"
	});
	
	$('.header-mobile__burger').on('click', function(){
		$('.header-mobile__burger').toggleClass('header-mobile__burger--active'),
		$('.header-mobile__menu').toggleClass('header-mobile__menu--active')
	});
	
	$('.footer__info-title, .footer__shop-title').on('click', function(){
		if (window.matchMedia("(max-width: 576px)").matches) {
			$(this).toggleClass('title-drop--active');
			$(this).next().slideToggle(150);
		}
	})

	$('.catalog-aside__tabs').on('click', function(){
		$('.catalog-aside__tabs-contents').toggleClass('catalog-aside__tabs-contents--active')
	});

	$('.catalog__products-wrap').on('click', function(){
		$('.catalog-aside__tabs-contents').removeClass('catalog-aside__tabs-contents--active')
	});

});

