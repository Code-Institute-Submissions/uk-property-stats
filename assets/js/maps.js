var cities = [
    ['Inverness', 'Average Price: £187,049', 57.479619, -4.224938],
    ['Belfast', 'Average Price: £155,789', 54.600836, -5.932751],
    ['Glasgow', 'Average Price: £172,585', 55.865522, -4.252412],
    ['London', 'Average Price: £633,930', 51.506791, -0.129040],
    ['Edinburgh', 'Average Price: £288,238', 55.952654, -3.188794],
    ['Southampton', 'Average Price: £294,828', 50.908917, -1.403317],
    ['Plymouth', 'Average Price: £211,001', 50.375636, -4.146690],
    ['Bristol', 'Average Price: £326,055', 51.454462, -2.588046],
    ['Swansea', 'Average Price: £174,706', 51.621268, -3.943260],
    ['Aberystwyth', 'Average Price: £213,927', 52.415238, -4.084461],
    ['Manchester', 'Average Price: £187,913', 53.480205, -2.242433],
    ['Birmingham', 'Average Price: £193,029', 52.485861, -1.889658],
    ['Newcastle', 'Average Price: £198,463', 54.978782, -1.616143],
    ['Hull', 'Average Price: £139,144', 53.745660, -0.335650],
    ['Norwich', 'Average Price: £257,657', 52.631332, 1.297582],
    ['Northampton', 'Average Price: £260,809', 52.240603, -0.903741]
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.3, 
        center: {
            lat: 54.336316, 
            lng: -3.943989
        }
    });
    
    var newMarker, i
        for (i = 0; i < cities.length; i++) {
            var cityName = cities[i][0]
            var info = cities[i][1]
            var latitude = cities[i][2]
            var longitude = cities[i][3]
            
            setLatLong = new google.maps.LatLng(latitude, longitude);
            
            var marker = new google.maps.Marker({
                map: map, title: cityName, position: setLatLong 
            });
            
            var content = `<h5>${cityName}</h5><p>${info}<p>`;
                            
            var infoWindow = new google.maps.InfoWindow()

            google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){ 
                return function() {
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
            };
        })(marker,content,infoWindow));  
    }
}