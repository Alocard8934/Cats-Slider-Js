// Elements per page
const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
  console.log(slide);


  if (index !== 0) slide.classList.add('hidden');

  // Add Index
  slide.dataset.index = index;

  // Add Activ
  sliderItems[0].setAttribute('data-active', '');
  

  // Click on slides
	slide.addEventListener('click', function () {
    showNextSlide('prev');
	});
});

btnNext.onclick = function () {
  console.log('Next Slide');
  showNextSlide('next');
}


btnPrev.onclick = function () {
  console.log('Prev Slide');
  showNextSlide('prev');
}

function showNextSlide (direction) {
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;
  if (direction === 'next') {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === 'prev') {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '');
}