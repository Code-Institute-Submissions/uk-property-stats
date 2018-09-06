var cities = [
    ['Inverness', 57.479619, -4.224938, 'Average Price: £187,049'],
    ['Belfast', 54.600836, -5.932751, 'Average Price: £155,789'],
    ['Glasgow', 55.865522, -4.252412, 'Average Price: £172,585'],
    ['London', 51.506791, -0.129040, 'Average Price: £633,930'],
    ['Edinburgh', 55.952654, -3.188794, 'Average Price: £288,238'],
    ['Southampton', 50.908917, -1.403317, 'Average Price: £294,828'],
    ['Plymouth', 50.375636, -4.146690, 'Average Price: £211,001'],
    ['Bristol', 51.454462, -2.588046, 'Average Price: £326,055'],
    ['Swansea', 51.621268, -3.943260, 'Average Price: £174,706'],
    ['Aberystwyth', 52.415238, -4.084461, 'Average Price: £213,927'],
    ['Manchester', 53.480205, -2.242433, 'Average Price: £187,913'],
    ['Birmingham', 52.485861, -1.889658, 'Average Price: £193,029'],
    ['Newcastle', 54.978782, -1.616143, 'Average Price: £198,463'],
    ['Hull', 53.745660, -0.335650, 'Average Price: £139,144'],
    ['Norwich', 52.631332, 1.297582, 'Average Price: £257,657'],
    ['Northampton', 52.240603, -0.903741, 'Average Price: £260,809']
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
            var latitude = cities[i][1]
            var longitude = cities[i][2]
            var info = cities[i][3]
            
            setLatLong = new google.maps.LatLng(latitude, longitude);
            
            var marker = new google.maps.Marker({
                map: map, title: cityName, position: setLatLong 
            });
            
            var content = `<h5>${cityName}</h5><p>${info}<p>`;
                            
            var infoWindow = new google.maps.InfoWindow()

            google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){ 
                return function() {
                infoWindow.setContent(content);
                infoWindow.open(map,marker);
            };
        })(marker,content,infoWindow));  
    }
}