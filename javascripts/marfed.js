$(document).ready(function() {
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.picture-item',
    sizer: $sizer
  });
})

// Home - Login animation
// ======================================================================

$(document).on('click', 'a[data-toggle=tab]', function () {

  var action = $(this).hasClass('login') ? 'removeClass' : 'addClass'
    $('.login-box')[action]('hide');

  var action = $(this).hasClass('contact') ? 'removeClass' : 'addClass'
    $('.contact-box')[action]('hide');
  
  var action = $(this).hasClass('register') ? 'removeClass' : 'addClass'
    $('.register-box')[action]('hide');

});


$(document).ready(function() {

  // Home - Main menú animation
  // ======================================================================

  $(".main-menu a").hover(function() {
    idItem = $(this).attr('id');
    $("#" + idItem + "-menu").toggle();
  }, function() {
    $("#" + idItem + "-menu").toggle();
  });
  
  // Product page - Products menu
  // ======================================================================

  $(".products-navbar").click(function() {
    $( ".products-navbar-box" ).toggle();
  });
  $(".products-navbar").blur(function() {
    $( ".products-navbar-box" ).toggle();
  });

});