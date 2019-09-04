window.addEventListener('DOMContentLoaded', function () {


// fullpage

	$("#fullpage").fullpage({
		anchors: ['home', 'services', 'gallery', 'contacts', 'schedule', 'inClub'],
		menu: '#menu',
		// scrollOverflow: true,
		// scrollBar: false,
		fitToSection: false,
		autoScrolling: false,
		navigation: true,
		sectionSelector: '.vertical-scrolling',
		
		
		onLeave: function (link, index) {
			// console.log('index', index);
			if (index.anchor == 'services' || index.anchor == 'gallery' || index.anchor == 'contacts' || index.anchor == 'schedule') {
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


// Fotorama


$(function () {
	$('#fotorama').fotorama();
});


// services 	
	let link = document.querySelectorAll('.services-li'),
		itemWrapper = document.querySelectorAll('.a-item__wrapper'),
		servicesArrow = document.querySelectorAll('.a-team__arrow');
		// linkPower = document.querySelector('.services-li__power'),
		// linkFunc = document.querySelector('.services-li__func'),
		// linkCardio = document.querySelector('.services-li__cardio'),
		// linkDance = document.querySelector('.services-li__dance'),
		// linkYoga = document.querySelector('.services-li__yoga'),
		// linkTreners = document.querySelector('.services-li__treners'),
		// linkNews = document.querySelector('.services-li__news'),

		// itemWrapperPower = document.querySelector('.a-item__wrapper-power'),
		// itemWrapperFunc = document.querySelector('.a-item__wrapper-func'),
		// itemWrapperCardio = document.querySelector('.a-item__wrapper-cardio'),
		// itemWrapperDance = document.querySelector('.a-item__wrapper-dance'),
		// itemWrapperYoga = document.querySelector('.a-item__wrapper-yoga'),
		// itemWrapperTreners = document.querySelector('.a-item__wrapper-treners'),
		// itemWrapperNews = document.querySelector('.a-item__wrapper-news');


		
function showSlide(link, descr) {
	link.addEventListener('click', function () {
		for(i=0; i<itemWrapper.length; i++) {
			itemWrapper[i].classList.remove('slideLeft');
		}
		document.body.style.overflow = 'hidden';
		descr.classList.add('slideLeft');
	});	
}

showSlide(link[0], itemWrapper[0]);
showSlide(link[1], itemWrapper[1]);
showSlide(link[2], itemWrapper[2]);
showSlide(link[3], itemWrapper[3]);
showSlide(link[4], itemWrapper[4]);
showSlide(link[5], itemWrapper[5]);
showSlide(link[6], itemWrapper[6]);


// function closeSlide() {
// 	link.forEach(el => {
// 		el.addEventListener('click', function() {
// 			itemWrapper.forEach(item => {
// 				item.classList.remove('slideLeft');
// 				document.body.style.overflow = 'auto';
// 			})	
// 		})
// 	})
// }
// closeSlide()
	
function closeSlideArrow() {
	servicesArrow.forEach(elem => {
		elem.addEventListener('click', function () {
			itemWrapper.forEach(item => {
				item.classList.remove('slideLeft');
				document.body.style.overflow = 'auto';
			});

		});
	});
}

closeSlideArrow();
	
		
	




	$("#phone").each(function () {
		$(this).mask("+7(999) 999-9999");
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
	


// Mask

$(function () {
	//2. Получить элемент, к которому необходимо добавить маску
	$("#tel").mask("+7(999) 999-9999");
});

$(function () {
	//2. Получить элемент, к которому необходимо добавить маску
	$("#phone").mask("+7(999) 999-9999");
});

});




