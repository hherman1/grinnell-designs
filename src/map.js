var $ = require("jquery");// require("../js/jquery-1.12.3.min.js");
var $script = require("scriptjs");
$script(["https://maps.googleapis.com/maps/api/js?key=AIzaSyDYx0XtPbgDzxcoDSNX2yM1mqIJTdn-llA&libraries=places"],function() {
        var map;
      function initMap() {
        var grinnellCoord = new google.maps.LatLng(40.754999, -73.991219);
        map = new google.maps.Map(document.getElementById('map'), {
          center: grinnellCoord,
          zoom: 17,
          scrollwheel:false,
          streetViewControl:false,
          fullscreenControl:false,
          mapTypeControl:false,
          maxZoom:18,
          minZoom:13,
        });
        function centerMap() {
                map.panTo(grinnellCoord);
        }
        $(window).bind("load",centerMap);
        $(window).bind("resize",centerMap);
        $(window).bind("orientationchange",centerMap);
        /*var grinnell = new google.maps.MarkerPlace({
                        });
                        */
        var info = new google.maps.InfoWindow();

        var service = new google.maps.places.PlacesService(map);

        function openInfo(place,marker) {
                info.setContent('<div><strong>' + place.name + '</strong><br>' +
                  place.formatted_address + '</div><br>' + 
                  "<a target=_blank rel=external href='https://maps.google.com/maps?ll=40.754851,-73.991164&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Grinnell%20Design%20Ltd%20580%208th%20Ave%20%234%20New%20York%2C%20NY%2010018@40.7548505,-73.9911643'>Get Directions</a> " +
                  "&bull; <a target=_blank rel=external href='" + place.url + "'> Open In Google Maps </a>");
                info.open(map, marker);
        }

          service.getDetails({
            placeId: "ChIJgfYi6qxZwokRG_N82EHoxbI",
          }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });
              google.maps.event.addListener(marker, 'click', function() {
                      openInfo(place,this);
              });
              openInfo(place,marker);
            }
          });
      }
      initMap();
      //debugger;
});
