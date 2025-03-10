$(function () {
  $('.imagens').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.imagens',
    button: false,
  });
  $('.img-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    asNavFor: '.imagens',
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 2000,
  });
});

var botao = document.querySelector('input[type=button]');

botao.addEventListener('click', ()=>{
  alert('Mensagem enviada com sucesso!')
})