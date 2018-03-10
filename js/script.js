// let geocoder = new google.maps.Geocoder();

// function getCoordinates( address, callback) {
//     var coordinates;
//     geocoder.geocode({ address: address}, function (results, status) {
//         coords_obj = results[0].geometry.location;
//         coordinates = [coords_obj.nb,coords_obj.ob];
//         callback(coordinates);
//     })
// }

// let map;

// function myMap() {
//     getCoordinates("Gdansk", function (coords) {
//         var mapOptions = {
//             center: {lat: coords[0], lng: coords[1]},
//             zoom: 10,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };

//         map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     });
// }

$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
  });

  

function myMap() {
    var mapOptions = {
        center: {lat: 18.638, lng: -54.372},
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}