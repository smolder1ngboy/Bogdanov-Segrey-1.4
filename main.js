document.addEventListener('DOMContentLoaded', function () {
  let swiper;

  function initSwiper() {
    swiper = new Swiper('.swiper-container', {
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

  function destroySwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;

      const paginationContainer = document.querySelector('.swiper-pagination');
      if (paginationContainer) {
        paginationContainer.innerHTML = '';
      }
    }
  }

  function checkSwiper() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (!swiper) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  checkSwiper();
  window.addEventListener('resize', checkSwiper);
});

function buttonShow() {
  let element1 = document.getElementById('slide-1');
  let element2 = document.getElementById('slide-2');
  let element3 = document.getElementById('slide-3');
  let showButton = document.getElementById('show');
  let showIcon = document.getElementById('show-icon');
  if (element1.style.display === 'flex') {
    showButton.textContent = 'Показать все';
    showIcon.style.transform = "rotate(0deg)"
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
  } else {
    showButton.textContent = 'Скрыть';
    showIcon.style.transform = "rotate(180deg)"
    element1.style.display = 'flex';
    element2.style.display = 'flex';
    element3.style.display = 'flex';
  }
}

