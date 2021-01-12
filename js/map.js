function myMap() {
    var mapProp= {
        center: { lat: -33.905474, lng: 151.213069 },
        zoom:13,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    const marker = new google.maps.Marker({
        position:mapProp.center,
        map:map,
    });
}