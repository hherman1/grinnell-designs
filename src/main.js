var $ = require("jquery");
window.jQuery = $;
var waypoint = require("imports?jQuery=jquery!../node_modules/waypoints/lib/jquery.waypoints.min.js");
require("./map.js");
require("./slider.js");

if(window.location.hash == "#home") {
        window.scroll(0,0);
        window.location.hash = "#";
}
function fadeIn(selector,offset) {
        var fadeIns = jQuery(selector);
        fadeIns.css("opacity","0");
        fadeIns.css("transition","opacity 0.5s");
        fadeIns.waypoint({
                handler: function(){
                        $(this.element).css("opacity","1");
                },
                offset: offset,
        });
}
fadeIn("#about>div,#contact,#map","90%");
$("#about>div,#contact,#map").css("opacity","0");
fadeIn("#feature-1,#feature-2,#contact,#map","90%");
$("#about").waypoint({
        handler: function() {
                $("#about-lead").css("opacity","1");
        },
        offset: '90%'
});
$(window).scroll(function() {
        if($(document).height() == $(document).scrollTop() + $(window).height()) {
                $("#scroll-arrow").css("opacity","0");
                $("#scroll-arrow").css("cursor","default");
                $("#scroll-arrow").css("pointer-events","none");
        }
        else {
                $("#scroll-arrow").css("opacity","1");
                $("#scroll-arrow").css("cursor","pointer");
                $("#scroll-arrow").css("pointer-events","initial");
        }
        if($(document).scrollTop() != 0) {
                $("#navbar").addClass("not-scrolled-to-top");
        } else { 
                $("#navbar").removeClass("not-scrolled-to-top");
        }
});


var scrollElements = ["#home","#about","#contact"]
var currentElement = scrollElements[0];
$(scrollElements.join(",")).waypoint({
        handler: function(direction){
                var thisID = '#' + this.element.id;
                var index = scrollElements.indexOf(thisID);
                if(direction == 'down') {
                        currentElement = thisID
                } else if(index <= 0) {
                        currentElement = scrollElements[0];
                } else {
                        currentElement = scrollElements[index-1];
                }
        }
});
$("#scroll-arrow").click(function() {
        var index = scrollElements.indexOf(currentElement);
        if(index == -1) {
                scrollTo(scrollElements[0],function(){
                        currentElement = scrollElements[0];
                        setHashIfNoScroll(currentElement);
                });
        } else if(index == scrollElements.length-1) {
                scrollTo("#footer",function(){
                        setHashIfNoScroll("#footer");
                });
        } else {
                scrollTo(scrollElements[index + 1],function(){
                        currentElement = scrollElements[index+1];
                        setHashIfNoScroll(currentElement);
                });
        }
});

var coreElements = jQuery("#about,#about>div,#contact,#map,#home");
coreElements.waypoint({
        handler: function(){
                setHashIfNoScroll('#' + this.element.id);
        }
});
function setHashIfNoScroll(hash) {
        if(history.replaceState) {
            history.replaceState(null, null, hash);
        }
}
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
                }else {
                        scrollTo(hash,setWindowHash);
                }
                if(hash == "#about") {
                        $("#about #about-lead,#about #feature-1").css("opacity","1");
                }

        }
});
centerHome();
$(window).bind("load",centerHome);
$(window).bind("resize",centerHome);
$(window).bind("orientationchange",centerHome);
});

//debugger;
