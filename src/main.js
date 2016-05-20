var $ = require("jquery");// require("../js/jquery-1.12.3.min.js");
var waypoint = require("../node_modules/waypoints/lib/jquery.waypoints.min.js");
require("./map.js");
require("./slider.js");

var fadeIns = jQuery("#about>div,#contact,#map");
fadeIns.css("opacity","0");
fadeIns.css("transition","opacity 0.5s");
fadeIns.waypoint({
        handler: function(){
                $(this.element).css("opacity","1");
        },
        offset: '70%',
});
function centerHome() {
    var height = $("#home").parent().height();
    $("#home").css("top",height/2 + "px");
}
function scrollTo(selector,callback) {
        $("html,body").animate({
                        scrollTop: $(selector).offset().top - $("#navbar").height()
                        },300,"swing",callback);
}
$(document).ready(function() {
$("a").click(function(e) {
        var hash = $(this).attr("href");
        if(/^#/.test(hash)) {
                e.preventDefault();
                function setWindowHash() {
                    window.location.hash = hash;
                }
                if(hash == "#") {
                    scrollTo("body",setWindowHash); 
                } else {
                        scrollTo(hash,setWindowHash);
                }
        }
});
centerHome();
$(window).bind("load",centerHome);
$(window).bind("resize",centerHome);
$(window).bind("orientationchange",centerHome);
});

//debugger;
