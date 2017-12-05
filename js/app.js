$(function() {    

    var sizeTheOverlays = function() {
        $(".overlay").resize().each(function() {
        let h = $(".portfolio-image").outerHeight();
        let w = $(".portfolio-image").outerWidth();
        $(this).css("height", h);
        $(this).css("width", w);
      });
    };
    
    sizeTheOverlays();
    
    var width = $(window).width();
    $(window).resize(function(){
       if($(this).width() != width){
          width = $(this).width();
          sizeTheOverlays();
       }
    });
})