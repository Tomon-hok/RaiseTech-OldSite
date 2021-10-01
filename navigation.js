$(window).on('load resize', function(){
  if($(window).innerWidth() < 1200 ){
    $('.header-right').hide();//非表示
  }else{
    $('.header-right').show();//表示
    $('.header-right-btn').removeClass('click');
  };
}); 

//ハンバーガボタンが押されたら、openクラス付与、メニュー下げる
$('.header-right-btn').on('click',function(){
  $('.header-right-btn').toggleClass('open');
  $('.header-right').slideToggle(230);
});


//ハンバーガーボタン
$(function () {
  $('.drop-down.close').hover(function () {
    //openクラスをつける
    $(this).toggleClass("open");
  });
});

//子メニューが出てくる。
$(function(){
  $(".drop-down").hover(function(){
      $(".drop-down-menu:not(:animated)", this).slideDown(230);
  }, function(){
      $(".drop-down-menu",this).hide(230);
  });
});





 