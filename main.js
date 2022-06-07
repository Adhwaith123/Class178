var latitude=18.5204
var longtitude=73.8567
mapboxgl.accessToken="pk.eyJ1IjoiaGFya2lyYW43MjM3IiwiYSI6ImNrcGdwaWpoYzJqaGwzMW54ajdrbW0xZjUifQ.qXWqhm4BiHFwMh1UOi69uQ"
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longtitude,latitude],
    zoom:16
    
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)