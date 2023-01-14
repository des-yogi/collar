(function(){
  const brands = new Swiper('.brands__slider', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}());
