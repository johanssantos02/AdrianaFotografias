$(function(){
  $('.imagens').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.imagens'
  });
  $('.img-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.imagens',
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  });
