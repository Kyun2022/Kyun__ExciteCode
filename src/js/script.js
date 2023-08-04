jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  /*//////////////////////////////////////
Common
/////////////////////////////////////*/
  // ハンバーガーメニュー
  $(".js-header__hamburger").on("click", function () {
    $(".js-header__drawer-menu").toggleClass("panelActive"); //ナビゲーションにpanelActiveクラスを付与
    $(".js-header__bg").toggleClass("circleActive"); //丸背景にcircleActiveクラスを付与f
    if ($(".js-header__hamburger").hasClass("is-open")) {
      $(this).removeClass("is-open");
    } else {
      $(this).addClass("is-open");
    }
    $(".js-drawer-menu").click(function () {
      //ナビゲーションリンクがクリックされたら
      $(".js-header__drawer-menu").removeClass("panelActive"); //ナビゲーションにpanelActiveクラスを付与
      $(".js-header__bg").removeClass("circleActive"); //丸背景にcircleActiveクラスを付与
    });
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
