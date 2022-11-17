// 厳密なエラーチェックをするために必要
 //'use strict';
/* 
コメント
 */
$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.line').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('.header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
		$('.header').removeClass('open');
	
    // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('.header').addClass('open');
      
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#content').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('.header').removeClass('open');
    
  });

// ページ内リンク
var headerHeight = $('.header').outerHeight();
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href*="#"]').click(function () {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);   
    return false;
});
/*
$('.nav a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-80;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});
*/
/*
ハンバーガーメニュー内の
ページ内リンクをクリックした時に、ハンバーガーメニューを閉じる
*/
 $('.nav a').on('click',function() {
         $('.header').removeClass('open');
   } );
     


  });