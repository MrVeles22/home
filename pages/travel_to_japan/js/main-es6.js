(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header--active');
		}
		else {
			header.classList.remove	('header--active');
		}
	};
}());

// Burger handler

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__menu');
	const menuCloseItem = document.querySelector('.menu__burger-close');
	const menuLinks = document.querySelectorAll('.menu__link')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__menu--active');
	});
	menuCloseItem.addEventListener('click', () => {
	menu.classList.remove('header__menu--active');
	});
	if (window.innerWidth < 768) {
		for (let i = 0; i < menuLinks.length; i += 1) {
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header__menu--active');
			});
		} 
	}
}());

// Scroll to anchors
(function () {
	const smoothScroll = function (targetEl, duration) {
			const headerElHeight =  document.querySelector('.header').clientHeight;
			let target = document.querySelector(targetEl);
			let targetPosition = target.getBoundingClientRect().top - headerElHeight;
			let startPosition = window.pageYOffset;
			let startTime = null;
	
			const ease = function(t,b,c,d) {
					t /= d / 2;
					if (t < 1) return c / 2 * t * t + b;
					t--;
					return -c / 2 * (t * (t - 2) - 1) + b;
			};
	
			const animation = function(currentTime){
					if (startTime === null) startTime = currentTime;
					const timeElapsed = currentTime - startTime;
					const run = ease(timeElapsed, startPosition, targetPosition, duration);
					window.scrollTo(0,run);
					if (timeElapsed < duration) requestAnimationFrame(animation);
			};

			requestAnimationFrame(animation);
	};

	const scrollTo = function () {
			const links = document.querySelectorAll('.js-scroll');
			links.forEach(each => {
					each.addEventListener('click', function () {
							const currentTarget = this.getAttribute('href');
							smoothScroll(currentTarget, 1000);
					});
			});
	};
	scrollTo();
}());

window.addEventListener('DOMContentLoaded', function (){

	var videos = document.querySelectorAll('.video__help-block');

	videos.forEach(function(video){

		video.addEventListener('click', function(){
			if (video.classList.contains('video--active')){
				return;
			};

			video.classList.add('video--active');

			var source = video.dataset.src;

			video.insertAdjacentHTML('afterbegin', '<iframe class="video__source"' + source + ' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
		});
	});
});