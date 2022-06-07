var latitude=18.5204
var longtitude=73.8567
mapboxgl.accessToken="pk.eyJ1IjoiaGFya2lyYW43MjM3IiwiYSI6ImNrcGdwaWpoYzJqaGwzMW54ajdrbW0xZjUifQ.qXWqhm4BiHFwMh1UOi69uQ"
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longtitude,latitude],
    zoom:16
    
});
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),'top-left'
    
);
map.addControl(
     new mapboxgl.GeolocateControl({
            positionOptions:{
                enableHighAccuracy:true
            },
            trackUserLocation:true
        })
);
// let latitude=22.7868542, longitude=88.3643296;

// // Initializing Mapbox
// mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

// var map = new mapboxgl.Map({
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/streets-v11',
// 	center: [longitude, latitude],
// 	zoom: 16
// });   

// map.addControl(
// 	new mapboxgl.GeolocateControl({
// 		positionOptions: {
// 			enableHighAccuracy: true
// 		},
// 		trackUserLocation: true
// 	})
// );

// map.addControl(
// 	new MapboxDirections({
// 		accessToken: mapboxgl.accessToken
// 	}),
// 	'top-left'
// );

   