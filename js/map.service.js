var app = angular.module('myApp');

app.factory('mapservice', function() {
  function initMap() {
    var pointA = new google.maps.LatLng(42.344836, -83.034109),
        pointB = new google.maps.LatLng(42.358775, -82.999048),
        waypts = [
                    {
                      location: new google.maps.LatLng(42.339094, -83.030054),
                      stopover: false
                    },
                    {
                      location: new google.maps.LatLng(42.346977, -83.012180),
                      stopover: false
                    }
                ],
        myOptions = {
          zoom: 7,
          center: pointA
        },
        map = new google.maps.Map(document.getElementById('map'), myOptions),
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        }),
        markerA = new google.maps.Marker({
          position: pointA,
          title: "point A",
          label: "A",
          map: map
        }),
        markerB = new google.maps.Marker({
          position: pointB,
          title: "point B",
          label: "B",
          map: map
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypts);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypts) {
    directionsService.route({
      origin: pointA,
      destination: pointB,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  return initMap;
});
