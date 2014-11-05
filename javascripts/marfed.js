$(document).ready(function() {
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.picture-item',
    sizer: $sizer
  });
});

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


// $(document).ready(function() {


  
//   // Product page - Products menu
//   // ======================================================================

//   $(".products-navbar").click(function() {
//     $( ".products-navbar-box" ).toggle();
//   });
//   $(".products-navbar").on("blur", function() {
//     $( ".products-navbar-box" ).toggle();
//   });

// });

// Home - Main menú animation
// ======================================================================

$(document).ready(function(){
    $(".main-menu .dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true );
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true );
            $(this).toggleClass('open');       
        }
    );
});
