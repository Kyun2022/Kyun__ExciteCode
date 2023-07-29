jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  /*//////////////////////////////////////
Common
/////////////////////////////////////*/
  // ハンバーガーメニュー
  $(".js-header__hamburger").on("click", function () {
    $(".drawer-menu__bg").toggleClass("is-active"); //丸背景にis-activeクラスを付与
    if ($(".js-header__hamburger").hasClass("is-open")) {
      $(".js-header__drawer-menu").fadeOut();
      $(".js-header__drawer-menu").addClass("is-open");

      $(this).removeClass("is-open");
      $("body").removeClass("active");
    } else {
      $(".js-header__drawer-menu").fadeIn();
      $(this).addClass("is-open");
      $(".js-header__drawer-menu").removeClass("is-open");

      $("body").addClass("active");
    }
  });
  /*//////////////////////////////////////
TOP
/////////////////////////////////////*/
  // スワイパー
  const swiper = new Swiper(".js-mv__slider", {
    direction: "vertical",
    loop: true,
    effect: "slide",
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
  });

  // スクロールするとロゴの色変更
  $(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-header").addClass("headerColorScroll");
      } else {
        $(".js-header").removeClass("headerColorScroll");
      }
    });
  });

  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-slideLeft, .js-slideRight").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

  /*//////////////////////////////////////
About
/////////////////////////////////////*/
  const subSwiper = new Swiper(".js-sub-about__slider", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    },
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3, // 一度に表示する枚数
    allowTouchMove: false, // スワイプ無効
    speed: 4500,
    // breakpoint: {
    //   375: {
    //   },
    //   500: {
    //   },
    //   785: {
    //   },
    // },
  });
  /*//////////////////////////////////////
終了
/////////////////////////////////////*/
});
