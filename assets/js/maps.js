function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.3,
        center: {
            lat: 54.336316,
            lng: -3.943989
        }
    });
    
    //Setting the variables and locations for the different cities
                
    var inverness = {lat: 57.479619, lng: -4.224938};
    var belfast = {lat: 54.600836, lng: -5.932751};
    var glasgow = {lat: 55.865522, lng: -4.252412};
    var london = {lat: 51.506791, lng: -0.129040};
    var edinburgh = {lat: 55.952654, lng: -3.188794};
    var southampton = {lat: 50.908917, lng: -1.403317};
    var plymouth = {lat: 50.375636, lng: -4.146690};
    var bristol = {lat: 51.454462, lng: -2.588046};
    var swansea = {lat: 51.621268, lng: -3.943260};
    var aberystwyth = {lat: 52.415238, lng: -4.084461};
    var manchester = {lat: 53.480205, lng: -2.242433};
    var birmingham = {lat: 52.485861, lng: -1.889658};
    var newcastle = {lat: 54.978782, lng: -1.616143};
    var hull = {lat: 53.745660, lng: -0.335650};
    var norwich = {lat: 52.631332, lng: 1.297582};
    var northampton = {lat: 52.240603, lng: -0.903741};
      
    //Inverness  
    
    var markerInverness = new google.maps.Marker({
        position: inverness,
        map: map,
        title: 'Inverness',
        content: "Inverness"
    });
    
    var invernessInfoWindow = {
        content: "Inverness"
    };
    
    var invernessInfo = new google.maps.invernessInfoWindow(invernessInfoWindow);
    google.maps.event.addListener(markerInverness, 'click', function(e) {
        invernessInfoWindow.open(map, markerInverness);
    });
    
    //Belfast  
                
    var markerBelfast = new google.maps.Marker({
        position: belfast,
        map: map,
        title: 'Belfast'
    });
                
    var markerGlasgow = new google.maps.Marker({
        position: glasgow,
        map: map,
        title: 'Glasgow'
    });
                
    var markerLondon = new google.maps.Marker({
        position: london,
        map: map,
        title: 'London'
    });
                
    var markerEdinburgh = new google.maps.Marker({
        position: edinburgh,
        map: map,
        title: 'Edinburgh'
    });
                
    var markerSouthampton = new google.maps.Marker({
        position: southampton,
        map: map,
        title: 'Southampton'
    });
                
    var markerPlymouth = new google.maps.Marker({
        position: plymouth,
        map: map,
        title: 'Plymouth'
    });
                
    var markerBristol = new google.maps.Marker({
        position: bristol,
        map: map,
        title: 'Bristol'
    });
                
    var markerSwansea = new google.maps.Marker({
        position: swansea,
        map: map,
        title: 'Swansea'
    });
                
    var markerAberystwyth = new google.maps.Marker({
        position: aberystwyth,
        map: map,
        title: 'Aberystwyth'
    });
                
    var markerManchester = new google.maps.Marker({
        position: manchester,
        map: map,
        title: 'Manchester'
    });
                
    var markerBirmingham = new google.maps.Marker({
        position: birmingham,
        map: map,
        title: 'Birmingham'
    });
                
    var markerNewcastle = new google.maps.Marker({
        position: newcastle,
        map: map,
        title: 'Newcastle'
    });
                
    var markerHull = new google.maps.Marker({
        position: hull,
        map: map,
        title: 'Hull'
    });
                
    var markerNorwich = new google.maps.Marker({
        position: norwich,
        map: map,
        title: 'Norwich'
    });
                
    var markerNorthampton = new google.maps.Marker({
        position: northampton,
        map: map,
        title: 'Northampton'
    });
}
