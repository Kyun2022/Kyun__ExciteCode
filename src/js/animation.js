jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /*//////////////////////////////////////
アニメーション
/////////////////////////////////////*/

  // スクロールして表示領域に入ったらclass付与;
  $(function () {
    $(".js-slideTitle__left, .js-slideTitle__right").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

  $(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-show");
    });
  });

  $(function () {
    $(".js-fadeDown").on("inview", function () {
      $(this).addClass("is-down");
    });
  });

  /*//////////////////////////////////////
動かすきっかけを独自のアニメーションの名前で定義
/////////////////////////////////////*/
  function アニメーション名() {
    $(".トリガークラス名").each(function () {
      //トリガークラス名が
      const elemPos = $(this).offset().top - 50; //上の５０px要素より、
      const scroll = $(window).scrollTop();
      const windowHight = $(window).height();

      if (scroll >= elemPos - windowHight) {
        $(this).addClass("何をしたいかクラス"); //画面内に入ったら（）というクラス名を追記
      } else {
        $(this).removeClass("何をしたいかクラス"); //画面内に入ったら（）というクラス名を削除
      }
    });
    /*//////////////////////////////////////
画面が読み込まれた後に動く記述
/////////////////////////////////////*/
    $(window).on("load", function () {
      アニメーション関数名();
    });
    $(window).on("scroll", function () {
      アニメーション関数名();
    });
  }

  /*//////////////////////////////////////
クリックするとアニメーションするCSSのクラス名（）が付与され、アニメーションが終了したらクラス名を取り除く
/////////////////////////////////////*/
  $(".トリガークラス名").on("click", function () {
    $(this).addClass(".付与するクラス名");
    $(".付与するクラス名").on("animationend", function () {
      $(this).removeClass("付与するクラス名"); //アニメーションが終了したらクラス名を取り除く
    });
  });

  /*//////////////////////////////////////
マウスが乗った時にアニメ０ションするCSSのクラス名①をつけ、アニメーションするCSSのクラス名②を外す
/////////////////////////////////////*/
  $(".トリガークラス名").on("mouseenter", function () {
    $(this).addClass("クラス名①");
    $(this).removeClass("クラス名②"); //アニメーションが終了したらクラス名を取り除く
  });
  $(".トリガークラス名").on("mouseleave", function () {
    $(this).removeClass("クラス名②"); //アニメーションが終了したらクラス名を取り除く
    $(this).addClass("クラス名①");
  });

  /*//////////////////////////////////////
クリックされたら・・・
/////////////////////////////////////*/
  //要素やクラス名をクリックしたら動かしたい場合の記述
  $(".btn").click(function () {
    $(this).addClass("アニメーションクラス名"); //隠れていた要素に動かしたいクラス名を付与
    $(this).addClass(".all-none"); //動きのきっかけの起点となるクラス名に画面非表示のクラス名を付与
  });
  /*//////////////////////////////////////
スクロールされたらナビが追従する
/////////////////////////////////////*/
  // グローバルナビ
  $(function () {
    const offset = $(".js-globalNav").offset();
    $(window).scroll(function () {
      if ($(window).scrollTop() > offset.top) {
        $(".js-globalNav").addClass("fixedNav");
      } else {
        $(".js-globalNav").removeClass("fixedNav");
      }
    });
  });


  /*//////////////////////////////////////
終了
/////////////////////////////////////*/
});
