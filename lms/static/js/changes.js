var slideImgHeight=639;
$(window).on('resize', function() {
  $('#banner.home').height($(window).height());
});

$(document).on('ready', function() {
  $('#banner.home').height($(window).height());


  $('#scrollLink').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("html, body").animate({
      scrollTop: $('#mainContent').offset().top
    },600, 'swing');
  });


});

$(window).on('scroll', function() {
  var windowScroll=Math.max(0,$(window).scrollTop());
  var windowHeight=$(window).height();

  if($('.cycle-slide').length) {
    var slideHeight=$('.cycle-slide').height();
    var slideVisible=windowScroll-$('.cycle-slide').offset().top+windowHeight;
    if(slideVisible>0 && slideVisible<(windowHeight+slideHeight)) {
      var heightDifference=slideImgHeight-slideHeight;
      $('.cycle-slide').css('background-position', 'center '+(-heightDifference)*(1-(slideVisible/(windowHeight+slideHeight)))+'px');
    }
  }


  if(windowScroll<$('#banner').height()) {
    $('#banner').css('background-position','center '+windowScroll*2/3 +'px');
  }

  if(windowScroll>50) {
    $('#header').addClass('headerFixed');
  } else {
    $('#header.headerFixed').removeClass('headerFixed');
  }

});