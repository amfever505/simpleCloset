// faq switch
$('.faq_q').click(function () {
  console.log('click');
  $(this).next('.faq_a').stop(true, true).slideToggle();
  $(this).next('.faq_a').toggleClass('faq-open');
  if ($(this).children('.faq-off').hasClass('clicked')) {
    $(this).children('.faq-off').removeClass('clicked');
  } else {
    $(this).children('.faq-off').addClass('clicked');
  }
});
