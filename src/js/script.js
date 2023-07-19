jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

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
});
