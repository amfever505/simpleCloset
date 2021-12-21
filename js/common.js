new WOW().init();
let mvItems = $('.mv-item');
let mvUrl = 'url("./img/home/mv_';
$('.mv-item').each(function (index, elem) {
  $(elem).css('background-image', mvUrl + index + '.jpeg")');
});
// url("./img/home/mv_1.jpeg")
$(document).ready(function () {
  $('.mv-box').slick({
    autoplay: true,
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    prevArrow: '<span class="slide-arrow prev-arrow"><<span>',
    nextArrow: '<span class="slide-arrow next-arrow">><span>',
  });
});

//ハンバーガーメニュー

$('.burger-btn').on('click', function () {
  //.btn_triggerをクリックすると
  $('.burger-btn').toggleClass('close'); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  // $('.nav-wrapper').fadeToggle(500); //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
  $('#nav-menu').toggleClass('nav-wrapper-show');

  $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
});

// selectShop function
let h = $('.shop-info').outerHeight(true);
console.log(h);
$('.shop-info-li').css('padding-top', h + 'px');
const SHOPS = {
  1: 'chongyue',
  2: 'broz',
  3: 'labike',
  4: 'chongyue_ty',
  5: 'haruda',
};
let preShop = SHOPS[1];
let preNo = 1;
function selectShop(n) {
  const name = SHOPS[n];
  $('#' + preShop).toggleClass('show');
  $('#' + name).toggleClass('show');
  $('#no' + preNo).toggleClass('current');
  $('#no' + n).toggleClass('current');
  if (window.matchMedia('(max-width: 1024px)').matches) {
    // SM表示の時の処理
    $('.shop-li').toggleClass('drop');
  }
  $('#' + preNo).toggleClass('btn--up');
  $('#' + n).toggleClass('btn--up');
  preShop = name;
  preNo = n;
}

$('.select-btn').on('click', function () {
  $('.shop-li').toggleClass('drop');
  // $('.shop-li').toggleClass('dropdown');
});
