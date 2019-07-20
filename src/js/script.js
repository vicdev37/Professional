window.addEventListener('DOMContentLoaded', function () {


// fullpage

	$("#fullpage").fullpage({
		// sectionsColor: ['#C63D0F', 'red', 'red', 'red', '#C63D0F'],
		anchors: ['home', 'services', 'gallery', 'contacts', 'inClub'],
		menu: '#menu',
		// scrollBar: true,
		// scrollOverflow: true,
		// scrollBar: false,
		autoScrolling: false,
		navigation: true,
		
		// loopBottom: true
		
		onLeave: function (link, index) {
			console.log('index', index)
			if (index.anchor == 'services' || index.anchor == 'gallery' || index.anchor == 'contacts') {
				$(".logo").addClass("another-logo");
				$("#menu, .main-nav__ul").addClass("another");
			} else {
				$(".logo").removeClass("another-logo").css({
					
				});
				$("#menu, .main-nav__ul").removeClass("another");
			}
		},
	});


// modal

	let btn = document.querySelectorAll('.btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
		

	btn.forEach(el => {
		el.addEventListener('click', function () {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		this.classList.remove('more-splash');
		document.body.style.overflow = 'auto';
		});
	});

// menu
	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.main-nav__ul').toggleClass('menu_active');
		

	});

	$(".main-nav__li").click(function () {
		$(".menu-btn").toggleClass('menu-btn_active');
		$(".main-nav__ul").toggleClass('menu_active');
	});

	
	
// плавный скролл

	// let $page = $('html, body');
	// 	$('a[href*="#"]').click(function () {
	// 		$page.animate({
	// 			scrollTop: $($.attr(this, 'href')).offset().top
	// 		}, 700);
	// 		return false;
	// });


// services 	
	let link = document.querySelectorAll('.services-li'),
		linkTrening = document.querySelector('.services-li__trening'),
		linkPower = document.querySelector('.services-li__power'),
		linkKardiozone = document.querySelector('.services-li__kardiozone'),
		linkKinesis = document.querySelector('.services-li__kinesis'),
		linkFlexability = document.querySelector('.services-li__flexability'),
		itemWrapperPower = document.querySelector('.a-item__wrapper-power'),
		itemWrapperTrening = document.querySelector('.a-item__wrapper-trening'),
		itemWrapperKardiozone = document.querySelector('.a-item__wrapper-kardiozone'),
		itemWrapperKinesis = document.querySelector('.a-item__wrapper-kinesis'),
		itemWrapperFlexability = document.querySelector('.a-item__wrapper-flexability'),
		itemWrapper = document.querySelectorAll('.a-item__wrapper'),
		servicesArrow = document.querySelectorAll('.a-team__arrow');


	// link.forEach(elem => {
	// 	elem.addEventListener('click', function () {
	// 		itemWrapperTening.classList.add('slideLeft');
	// 	});
	// });

	linkTrening.addEventListener('click', function () {
		itemWrapperTrening.classList.add('slideLeft');
	});

	linkPower.addEventListener('click', function () {
		itemWrapperPower.classList.add('slideLeft');
	});

	linkKardiozone.addEventListener('click', function () {
		itemWrapperKardiozone.classList.add('slideLeft');
	});

	linkKinesis.addEventListener('click', function () {
		itemWrapperKinesis.classList.add('slideLeft');
	});

	linkFlexability.addEventListener('click', function () {
		itemWrapperFlexability.classList.add('slideLeft');
	});

	


	servicesArrow.forEach(elem => {
		elem.addEventListener('click', function () {
			itemWrapper.forEach(item => {
				item.classList.remove('slideLeft');
			});
			
		});
	});
		
	

// Fotorama
	$(function () {
		$('#fotorama').fotorama();
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


// form
	$("form").submit(function () { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function () {
		alert("Спасибо за заявку! Мы с Вами свяжемся");
	setTimeout(function () {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
	});


// Panorama-init

	$('.panorama-main').cyclotron();
	$('.panorama-gyms').cyclotron();


// Panorama-show

	let excursionBtnMain = document.querySelector('.excursion-main'),
		excursionBtmGums = document.querySelector('.excursion-gyms'),
		panoramaOverlayMain = document.querySelector('.panorama-main'),
		panoramaOverlayGyms = document.querySelector('.panorama-gyms'),
		pano = document.querySelectorAll('.pano'),
		panoramaClose = document.querySelectorAll('.panorama-close');
	

		excursionBtnMain.addEventListener('click', function () {
			panoramaOverlayMain.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

		excursionBtmGums.addEventListener('click', function () {
			panoramaOverlayGyms.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

		panoramaClose.forEach(el => {
			el.addEventListener('click', function () {
				pano.forEach(it => {
						it.style.display = 'none';
						this.classList.remove('more-splash');
						document.body.style.overflow = 'auto';
					});
				
		});
	});

	



});




