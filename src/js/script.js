window.addEventListener('DOMContentLoaded', function () {


// fullpage

	$("#fullpage").fullpage({
		// sectionsColor: ['#C63D0F', 'red', 'red', 'red', '#C63D0F'],
		anchors: ['home', 'services', 'gallery', 'contacts', 'inClub'],
		// menu: '#menu',
		scrollBar: true,
		// scrollOverflow: true, 
		// autoScrolling: false,
		navigation: true,
		// loopBottom: true
	});

// modal

	let btn = document.querySelectorAll('.btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
		// descrBtn = document.querySelectorAll('.description-btn');

	btn.forEach(el => {
		el.addEventListener('click', function () {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		this.classList.remove('more-splash');
		document.body.style.overflow = '';
		});
	});

// menu 

// let scrolled;
// window.onscroll = function () {
// 	scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 	if (scrolled > 400) {
// 		$(".main-nav__ul").css({
// 			"color": "black"
// 		})
// 	}
// 	if (400 > scrolled) {
// 		$(".main-nav__ul").css({
// 			"color": "white"
// 		});
// 	}

// };

const navbar = document.querySelector('#menu'),
	  section1 = document.getElementById('section1'),
	  section2 = document.getElementById('section2'),
	  section3 = document.getElementById('section3'),
	  section4 = document.getElementById('section4'),
	  section5 = document.getElementById('section5'),
	  logo = document.querySelector('.logo'); 

window.addEventListener('scroll', function () {
	const lastPosition = window.scrollY
	if (lastPosition > 700) {
		navbar.classList.add('another');
		
		logo.classList.add('another-logo');


	} else if (navbar.classList.contains('another')) {
		navbar.classList.remove('another');
		
	} else {
		navbar.classList.remove('another');
		logo.classList.remove('another-logo');
	}

	if (window.pageYOffset > 2850) {
		navbar.classList.remove('another');
		logo.classList.remove('another-logo');
	}
});

logo.addEventListener('click', function () {
	logo.classList.remove('another-logo');
})


let $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 700);
	return false;
});


// services 

	let link = document.querySelectorAll('.services-li'),
		itemWrapper = document.querySelector('.a-item__wrapper'),
		servicesArrow = document.querySelector('.a-team__arrow');


	link.forEach(elem => {
		elem.addEventListener('click', function () {
			itemWrapper.style.display = 'block';
			itemWrapper.classList.add('slideLeft');
			});
		});
		servicesArrow.addEventListener('click', function () {
			itemWrapper.style.display = 'none';
			itemWrapper.classList.remove('slideLeft');
			
	});

// Fotorama
	$(function () {
		$('#fotorama').fotorama();
	});
});

// Mask
	$(function () {
		//2. Получить элемент, к которому необходимо добавить маску
		$("#phone").mask("+7(999) 999-9999");
	});

	// $("#phone").each(function () {
	// 	$(this).mask("+7(999) 999-9999");
	// });

	$(function () {
		//2. Получить элемент, к которому необходимо добавить маску
		$("#tel").mask("+7(999) 999-9999");
	});
