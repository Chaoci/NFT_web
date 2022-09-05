$("#menu-bar").click(function(){
    $("#mobile-menu").slideToggle();
  });

// search bar
$('.header-mobile-search').click(function(){
    $('#menu-bar').hide();
    $('.header-logo').hide();
    $('.glass').hide();
    $('.search-form').show();
    $('.left-btn').show();
    $('.header-mobile-area').addClass('justify-between');
    $('.header-mobile-area').removeClass('justify-end');
    $('.header-mobile-area').addClass('items-center');
    $("#mobile-menu").hide();  //make sure that the menu can be hidden
});

$('.left-btn').click(function(){
    $('.search-form').hide();
    $('#menu-bar').show();
    $('.header-logo').show();
    $('.glass').show();
    $('.left-btn').hide();
    $('.header-mobile-area').removeClass('justify-between');
    $('.header-mobile-area').addClass('justify-end');
    $('.header-mobile-area').removeClass('items-center');
     //make sure that the menu can be show as the function on
});

//

$(".web").click(function(){
    $('.web-input-area').slideToggle();
    $('.up').toggle();
    $('.down').toggle();
});

$(".state").click(function(){
    $('.state-input-area').slideToggle();
    $('.state-up').toggle();
    $('.state-down').toggle();
});

$(".price").click(function(){
    $('.price-input-area').slideToggle();
    $('.price-up').toggle();
    $('.price-down').toggle();
});

$(".bird-kind").click(function(){
    $('.bird-input-area').slideToggle();
    $('.bird-up').toggle();
    $('.bird-down').toggle();
});

$(".flower-area").click(function(){
    $('.flower-input-area').slideToggle();
    $('.flower-up').toggle();
    $('.flower-down').toggle();
});

$(".birds-number").click(function(){
    $('.bird-number-input-area').slideToggle();
    $('.bird-number-up').toggle();
    $('.bird-number-down').toggle();
});

$(".birds-color").click(function(){
    $('.bird-color-input-area').slideToggle();
    $('.bird-color-up').toggle();
    $('.bird-color-down').toggle();
});

