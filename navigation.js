//ハンバーガボタンが押されたら、openクラス付与、メニュー下げる
$('.header-right-btn').on('click',function(){
  $('.header-right-btn').toggleClass('open');
  $('.header-right').slideToggle(230);
});


//「＋」と「ー」
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

$(window).on('load resize', function(){
  if($(window).innerWidth() < 1200 ){
    $('.header-right').hide();//非表示
    $('.header-right-btn').removeClass('open');    
  }else{
    $('.header-right').show();//表示
    $('.header-right-btn').removeClass('open');    
  };
}); 



 