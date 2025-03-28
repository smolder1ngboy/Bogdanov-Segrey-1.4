document.addEventListener('DOMContentLoaded', function () {
  function initSwiper() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      slidesOffsetBefore: 0,
      spaceBetween: 16,
    });
  }

  if (window.matchMedia('(max-width: 512px)').matches) {
    initSwiper();
  }
});

const block1 = document.getElementById('slide-1');
const block2 = document.getElementById('slide-2');
const block3 = document.getElementById('slide-3');
const showButton = document.getElementById('show');
const hideButton = document.getElementById('hide');

showButton.addEventListener('click', function () {
  block1.style.display = 'flex';
  block2.style.display = 'flex';
  block3.style.display = 'flex';
  showButton.style.display = 'none';
  hideButton.style.display = 'flex';
});

hideButton.addEventListener('click', function () {
  block1.style.display = 'none';
  block2.style.display = 'none';
  block3.style.display = 'none';
  hideButton.style.display = 'none';
  showButton.style.display = 'flex';
});

