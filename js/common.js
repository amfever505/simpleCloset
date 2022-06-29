// scroll header
const head = $('header')[0];
// console.log(document.getElementById('mv').clientHeight);
if (document.getElementById('mv')) {
  let mvHeight = document.getElementById('mv').clientHeight;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= mvHeight) {
      $('header').addClass('header-wt');
    } else {
      $('header').removeClass('header-wt');
    }
  });
}

// new WOW().init();
// let mvItems = $('.mv-item');
// let mvUrl = 'url("./img/home/mv_';
// $('.mv-item').each(function (index, elem) {
//   $(elem).css('background-image', mvUrl + index + '.jpeg")');
// });
// // url("./img/home/mv_1.jpeg")
// $(document).ready(function () {
//   $('.mv-box').slick({
//     autoplay: true,
//     dots: true,
//     dotsClass: 'slick-dots',
//     infinite: true,
//     speed: 500,
//     prevArrow: '<span class="slide-arrow prev-arrow"><<span>',
//     nextArrow: '<span class="slide-arrow next-arrow">><span>',
//   });
// });

//ハンバーガーメニュー

$('.burger-btn').on('click', function () {
  $('.burger-btn').toggleClass('close'); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  $('#gnav').toggleClass('gnav-show');
  console.log('burger');
  $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
  if ($('header')[0].style.backgroundColor !== '#fff') {
    $('header').addClass('header-wt'); //bodyにnoscrollクラスを付与(スクロールを固定)
  }
});

// select look
$('.start-women').on('click', () => {
  $('.start-women').toggleClass('show');
  $('.women-look').toggleClass('show');
  if ($('.start-men').hasClass('show')) {
    $('.start-men').toggleClass('show');
    $('.men-look').toggleClass('show');
  }
  window.scrollBy({
    top: 200,
    left: 0,
    behavior: 'smooth',
  });
});
$('.start-men').on('click', () => {
  $('.start-men').toggleClass('show');
  $('.men-look').toggleClass('show');
  if ($('.start-women').hasClass('show')) {
    $('.start-women').toggleClass('show');
    $('.women-look').toggleClass('show');
  }
  window.scrollBy({
    top: 200,
    left: 0,
    behavior: 'smooth',
  });
});
