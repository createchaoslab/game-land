$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    /*$('.about__gallery').slick({
        prevArrow: false,
        arrows: true,
        dots: true,
        slidesToShow: 1
    });*/
  });