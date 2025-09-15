jQuery(".js-header-nav-item").click(function(){
    jQuery(".js-header-nav-item-contents").slideToggle();
});

// TOPに戻るボタン
$(function() {
  var btn = $('#back-to-top');

  // スクロールが100pxを超えたらボタンを表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });

  // ボタンクリックでページトップへ移動
  btn.click(function() {
    $('html, body').animate({scrollTop: 0}, 500); // 0.5秒でトップへ
    return false;
  });
});


//  $(function() {
//       // メニュー画像をクリック → モーダル表示
//       $(".menu-list img").on("click", function() {
//         let src = $(this).attr("src");
//         $(".modal-content img").attr("src", src);
//         $(".modal-overlay").fadeIn(300);
//       });

//       // モーダル背景をクリック → モーダル非表示
//       $(".modal-overlay").on("click", function(e) {
//         // 画像自体をクリックした場合は閉じない
//         if (!$(e.target).closest(".modal-content").length) {
//           $(".modal-overlay").fadeOut(300);
//         }
//       });
//     });

    $(function() {
      // 画像クリック → モーダル表示
      $(".menu-list img").on("click", function() {
        let src = $(this).attr("src");
        $(".modal-content img").attr("src", src);

        $(".modal-overlay")
          .addClass("active")   // flexが効く
          .hide()               // 一旦非表示
          .fadeIn(300);         // フェードイン
      });

      // 背景クリック → モーダル非表示
      $(".modal-overlay").on("click", function(e) {
        if (!$(e.target).closest(".modal-content").length) {
          $(".modal-overlay").fadeOut(300, function() {
            $(this).removeClass("active"); // フェードアウト後にactive解除
          });
        }
      });
    });