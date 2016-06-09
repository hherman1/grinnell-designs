var $ = require("jquery");// require("../js/jquery-1.12.3.min.js");
var jssor = require("../js/jssor.slider.mini.js");
jQuery(document).ready(function ($) {
    
    var jssor_1_options = {
      $AutoPlay: true,
      $Idle: 5000,
      //$PauseOnHover: 3,
      $SlideWidth: 500,
      $SlideDuration: 1000,
      $SlideEasing: $JssorEasing$.$EaseInOutSine,
      $Cols: 2,
      $Align: 0,
      $FillMode: 1,
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
    
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refWidth = jssor_1_slider.$Elmt.parentNode.clientWidth;
        var refHeight = $("#about-lead .row").height();
        if (refWidth) {
            //refSize = Math.min(refSize, 800);
            jssor_1_slider.$ScaleWidth(refWidth);
            if(jssor_1_slider.$ScaleHeight() > 300) {
                    jssor_1_slider.$ScaleHeight(300);
            }
            var smWidth = 767;
            var mdWidth = 982;
            if($(window).width() > smWidth) {
                    $("#slideshow").css("top",refHeight/2 + "px");
            } else {
                    $("#slideshow").css("top",0);
            }

        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
