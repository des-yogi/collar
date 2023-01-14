(function(){
  const topSelling = new Swiper('.top-selling__slider', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    preloadImages: false,
    lazy: true,
    //watchSlidesProgress: true,
    grabCursor: true,
    //centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}());
