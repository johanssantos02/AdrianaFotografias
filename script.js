$(function () {
  $('.imagens').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    asNavFor: '.imagens',
    infinite: true,
  });
  $('.img-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.imagens',
    centerMode: true,
    centerPadding: '100px',
    focusOnSelect: true,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]

  });
});

var botao = document.querySelector('input[type=button]');

botao.addEventListener('click', () => {
  alert('Mensagem enviada com sucesso!')
});
