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

  var action = $(this).hasClass('login') ? 'removeClass'
                       : 'addClass'

    $('.login-box')[action]('hide');

  var action = $(this).hasClass('contact') ? 'removeClass'
                       : 'addClass'

    $('.contact-box')[action]('hide');

});

// Home - Main menú animation
// ======================================================================

$(document).ready(function() {
  $(".main-menu a").hover(function(){
    idItem = $(this).attr('id');
    $("#" + idItem + "-menu").removeClass("hidden");
  }, function() {
    $("#" + idItem + "-menu").addClass("hidden");
  });
});

