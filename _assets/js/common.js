
$(function() {

  /*--------------------------------------------------------------------------
  // * 640px以下はrolloverを外す
  --------------------------------------------------------------------------*/
  var w = $(window).width();
  var x = 640;
  if (w <= x) {
    $('img').removeClass('rollover');
  }


  /*--------------------------------------------------------------------------
  // * ロールオーバーの切り替え用
  --------------------------------------------------------------------------*/
  $('a img.rollover').hover(function(){
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        }, function(){
           if (!$(this).hasClass('currentPage')) {
           $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
      }
  });


  /*--------------------------------------------------------------------------
  // * ページトップ処理
  --------------------------------------------------------------------------*/
  $(window).scroll(function(){

      var now = $(window).scrollTop();

      if(now > 500){
          $("#pageTop").fadeIn("slow");
        }else{
          $("#pageTop").fadeOut("slow");
      }
  });

  $("#pageTop").click(function(){
      $("html,body").animate({scrollTop:0},"slow");
  });


  /*--------------------------------------------------------------------------
  // * サイズによって画像切り替え(レシポンシブ限定)
  --------------------------------------------------------------------------*/
  $(function(){
		var $setElem = $('.switch'),
		pcName = '_pc',
		spName = '_sp',
		replaceWidth = 640;

		$setElem.each(function(){
			var $this = $(this);
			function imgSize(){
				var windowWidth = parseInt($(window).width());
				if(windowWidth >= replaceWidth) {
					$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
				} else if(windowWidth < replaceWidth) {
					$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
				}
			}
			$(window).resize(function(){imgSize();});
			imgSize();
		});
	});


  /*--------------------------------------------------------------------------
  // * スマホで見た場合のみ電話番号にリンクを付与
  --------------------------------------------------------------------------*/
  var ua = navigator.userAgent;
  if(ua.indexOf('iPhone') > 0 && ua.indexOf('iPod') == -1 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 && ua.indexOf('SC-01C') == -1 && ua.indexOf('A1_07') == -1 ){
      $('.tel-link img').each(function(){
          var alt = $(this).attr('alt');
          $(this).wrap($('<a>').attr('href', 'tel:' + alt.replace(/-/g, '')));
      });
  }

});
