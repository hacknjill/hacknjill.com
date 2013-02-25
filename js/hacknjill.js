var HNJ = {}

HNJ.img_strip = function($div) {
  $imgs = $div.find('img');
  var win_width = $(window).width()+25;
  var imgLen = $imgs.length;
  
  function calcStrip() {
    var img_widths = 0;    
    var imgs = [];
    var curr_img_idx = 0;

    while(img_widths < win_width) {
      var $img = $imgs.eq(curr_img_idx).css({left: img_widths-25+8*imgs.length});
      var img_width = parseInt($img.attr('width'));
      img_widths += img_width;
      imgs.push($img.clone());
      curr_img_idx++;
      if (curr_img_idx == imgLen) curr_img_idx = 0;
    }
    $div.html(imgs);    
  }

  calcStrip();
  
  $(window).resize(function(){
    var new_win_width = $(window).width()+25;
    if (new_win_width > win_width) {
      win_width = new_win_width;
      calcStrip();
    }
  });
}