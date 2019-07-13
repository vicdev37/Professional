window.addEventListener('DOMContentLoaded', function () {


// fullpage

	$("#fullpage").fullpage({
		// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F']
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		// menu: '#menu',
		scrollBar: true,
		// scrollOverflow: true
		navigation: true,
		loopBottom: true
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
