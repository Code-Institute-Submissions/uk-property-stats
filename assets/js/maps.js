//collection of data for each of the cities represented on the map

var cities = [
    ['Belfast', 'Average Price: £155,789', 'Number of homes sold: 1,517', 54.600836, -5.932751],
    ['Glasgow', 'Average Price: £172,585', 'Number of homes sold: 16,587', 55.865522, -4.252412],
    ['London', 'Average Price: £633,930', 'Number of homes sold: 49,697', 51.506791, -0.129040],
    ['Edinburgh', 'Average Price: £288,238', 'Number of homes sold: 8,844', 55.952654, -3.188794],
    ['Southampton', 'Average Price: £294,828', 'Number of homes sold: 5,187', 50.908917, -1.403317],
    ['Plymouth', 'Average Price: £211,001', 'Number of homes sold: 3,572', 50.375636, -4.146690],
    ['Bristol', 'Average Price: £326,055', 'Number of homes sold: 10,720', 51.454462, -2.588046],
    ['Swansea', 'Average Price: £174,706', 'Number of homes sold: 3,074', 51.621268, -3.943260],
    ['Manchester', 'Average Price: £187,913', 'Number of homes sold: 11,238', 53.480205, -2.242433],
    ['Birmingham', 'Average Price: £193,029', 'Number of homes sold: 9,830', 52.485861, -1.889658],
    ['Newcastle', 'Average Price: £198,463', 'Number of homes sold: 4,322', 54.978782, -1.616143],
    ['Hull', 'Average Price: £139,144', 'Number of homes sold: 3,592', 53.745660, -0.335650],
    ['Norwich', 'Average Price: £257,657', 'Number of homes sold: 5,180', 52.631332, 1.297582],
    ['Northampton', 'Average Price: £260,809', 'Number of homes sold: 4,066', 52.240603, -0.903741]
];

//initialising the map
    
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.3, 
        center: {
            lat: 54.336316, 
            lng: -3.943989
        },
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    
//Creation of the markers for each of the cities

// The variable currentWindow was created following a discussion with my mentor. It was created to enable the current open window to close when the next was opened. Before this was created the user would have to manually close the existing open window before opening up a new one.      
    var currentWindow = null;
    
    var newMarker, i
        for (i = 0; i < cities.length; i++) {
            var cityName = cities[i][0]
            var info = cities[i][1]
            var number = cities[i][2]
            var latitude = cities[i][3]
            var longitude = cities[i][4]
            
//Setting the longitude and latitude numbers for each of the variables. These figures are gained from the data above.
            
            setLatLong = new google.maps.LatLng(latitude, longitude);
            
            var marker = new google.maps.Marker({
                map: map, title: cityName, position: setLatLong 
            });
            
//Content of box
            
            var content = `<h5>${cityName}</h5><p>${info}<p><p>${number}<p>`;
                            
            var infoWindow = new google.maps.InfoWindow()
            
            google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){ 
                return function() {
                //currentWindow set to close on the close of a new icon. Created with helo from the mentor as mentioned above.
                if (currentWindow) {
                    currentWindow.close()
                };
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
                currentWindow = infoWindow;
            };
            
        })(marker,content,infoWindow));  
    }
}