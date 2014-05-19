function zoomImage(imgSrc){
  $.fancybox({
      'href': imgSrc,
    	'overlayColor': '#000',
    	'overlayOpacity': 0.8,
    	'padding':0,
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 250,
      'speedOut':250,
      'cyclic': true
    });
}



$(function(){
  $('img.zoomable').click(function(){
      var imgSrc = $(this).attr('src');
      zoomImage(imgSrc);
    });
  
});