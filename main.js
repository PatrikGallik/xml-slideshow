
document.addEventListener('DOMContentLoaded', function() {

	// on init, hide all slides
	var slides = document.querySelectorAll('section')
	
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.zIndex = 1000 -i;
		// apply slide background
		if (slides[i].getAttribute('data-background')) {
			slides[i].style.backgroundImage = 'url('+slides[i].getAttribute('data-background')+')';	
		}
	}

	var currentSlide = 0,
		isSliding = false;

	function setSliding(value) {
		isSliding = value;
	}

	slides[currentSlide].classList.add('active');

	// go to the previus slide
	function prev() {
		if (!isSliding) {
			if (currentSlide > 0) {
				isSliding = true;
				slides[currentSlide].classList.add('moveToBottom');
				slides[currentSlide-1].classList.add('moveFromTop');
				slides[currentSlide-1].classList.add('active');
				setTimeout(function(){
					setSliding(false);
					slides[currentSlide].classList.remove('moveToBottom');
					slides[currentSlide-1].classList.remove('moveFromTop');
					slides[currentSlide].classList.remove('active');
					currentSlide--;
				},600);
			} else {
				isSliding = true;
				slides[currentSlide].classList.add('shakeTop');
				setTimeout(function() {
					slides[currentSlide].classList.remove('shakeTop');
					isSliding = false;
				},600)
			}
		}
	}

	// go to the next slide
	function next() {
		if (!isSliding) {
			if (currentSlide < slides.length-1) {
				isSliding = true;
				slides[currentSlide].classList.add('moveToTop');
				slides[currentSlide+1].classList.add('moveFromBottom');
				slides[currentSlide+1].classList.add('active');
				setTimeout(function() {
					setSliding(false);
					slides[currentSlide].classList.remove('moveToTop');
					slides[currentSlide+1].classList.remove('moveFromBottom');
					slides[currentSlide].classList.remove('active');
					currentSlide++;
				},600);
			} else {
				isSliding = true;
				slides[currentSlide].classList.add('shakeBottom');
				setTimeout(function() {
					slides[currentSlide].classList.remove('shakeBottom');
					isSliding = false;
				},600)
			}	
		}
	}

	// on 'down' or 'up', move slides
	document.addEventListener('keydown', function(e) {
		switch(e.keyCode) {
			case 38: {
				prev();
				break;
			}
			case 40: {
				next();
				break;
			}
		}
	})

	// on arrow click
	document.getElementById('goPrev').addEventListener('click', prev);
	document.getElementById('goNext').addEventListener('click', next);

	// zoom presentation to fit display height
	var slidesContent = document.querySelectorAll('section > .inner');

	function zoomContent() {
		var ratio = 4/3;
		var actualRatio = window.innerWidth / window.innerHeight;
	 	var zoomValue = 1;

	 	if (actualRatio < ratio) {
	 		var zoomValue = window.innerWidth / 1280;
	 	} else {
	 		var zoomValue = window.innerHeight / 800;
	 	}

	 	for (var i = 0; i < slidesContent.length; i++) {
	 		// set zoom
	 		slidesContent[i].style.zoom = zoomValue;
	 		// align to center
	 		slidesContent[i].style.position = 'relative';
	 		slidesContent[i].style.top = ((window.innerHeight - (slidesContent[i].offsetHeight * zoomValue)) / 2) * (1/zoomValue);
	 	}
	}

	window.onresize = zoomContent;
	// align zoom on init
	zoomContent();

});