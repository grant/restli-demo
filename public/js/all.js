$(function () {
  // Show login area
  $('.button.login').click(function () {
    $('.overlay').css('display', 'inherit').hide().fadeIn();
    $('body').css('overflow', 'hidden');
  });

  // Hide login area
  $('.overlay .close').click(function () {
    $('.overlay').fadeOut('normal', function () {
      $(this).hide();
    });
    $('body').css('overflow', 'inherit');
  });

  // Upload photo button
  $('input[type=file]').change(function (data) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    var $img = $(this).parent().parent().find('.profilePhoto');
    $img.css('background-image', 'url("' + tmppath + '")');
  });
});