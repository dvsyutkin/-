window.addEventListener('DOMContentLoaded', function () {
	let navServ = document.querySelector('.nav-serv');
	navServ.addEventListener('click', function () {
		document.querySelector('.menu__serv').classList.toggle('down');
	});



	let btnMenu = document.querySelector('.btn__menu');
	btnMenu.addEventListener('click', function () {
		let navMenu = document.querySelector('.nav__menu');
		navMenu.classList.toggle('hide');

		let line1 = this.querySelector('.line-1');
		line1.classList.toggle('line-3-transform');

		let line2 = this.querySelector('.line-2');
		line2.classList.toggle('line-2-none');

		let line3 = this.querySelector('.line-3');
		line3.classList.toggle('line-1-transform');


		this.classList.toggle('white');
	});

	let more = document.querySelector('.more');
	more.addEventListener('click', function () {
		let mobMenu = document.querySelector('.mob__menu-more');
		console.log(mobMenu.style.maxHeight);
		
		if (mobMenu.style.maxHeight) {
			mobMenu.style.maxHeight = null;
		} else {
			mobMenu.style.maxHeight = mobMenu.scrollHeight + "px";
		}
	});


		// owl carusel
		const sliderInfo = $('.owl-carousel');
		sliderInfo.owlCarousel($.extend({}, {
			// nav: true,
			items: 1

		}));
		
		const next = document.querySelector('.arrow-next');
		next.addEventListener('click', function() {
			sliderInfo.trigger('next.owl.carousel')
		});
		// $('.arrow arrow-next').click(console.log('sadsasd'));
		// $('.arrow-next').click(sliderInfo.trigger('next.owl.carousel'));

		//   Цифры в dot-ах owl-карусели вместо дисков
		  var i= 1; 
		  $('.owl-dot').each(function(){   
			   $(this).find('span').html(i);   
			   i++; 
		});
		


			
});