
  var map = [] ;
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 24.782661, lng: 46.629109},
         zoom: 8
       });
     }
      var locations = [
    {title:'Danube Hypermarket Al Malqa' ,location: {lat: 24.807972, lng: 46.615403}},
    {title:'The Nail Corner ركن الأظافر' ,location: {lat: 24.807018, lng: 46.615768}},
    {title:'Tilal AlRiyadh' ,location: {lat: 24.800887, lng: 46.611532}}
  ];

var i  ;
var largeInfowindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();
   for (i = 0; i < locations.length; i++)
   {
     var position = locations[i].location;
       var title = locations[i].title;
       var marker = new google.maps.Marker({
               map: map ,
               position: position,
               title:title,
               animation:google.maps.Animation.DROP,
               id:i
             });
     var markers =[];
       markers.push(marker);
       bounds.extend(marker.position);
       marker.addListener('click',function() {
       populateInfoWindow(this,largeInfowindow);
                  });
}

function populateInfoWindow (marker,infowindow ){

if (infowindow.marker !=marker){
infowindow.marker = marker;
infowindow.setContent('<div>' + marker.title + '</div>');
infowindow.open(map , marker);
marker.addListener('closeclick',function(){
infowindow.setMarker(null);
          });
}
}
