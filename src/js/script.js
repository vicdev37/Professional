window.addEventListener('DOMContentLoaded', function () {
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



});