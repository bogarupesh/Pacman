// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Add your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoibWl0MTIxMiIsImEiOiJjbHZtdWR0MDcwNmI4MmlxaThhd3RndzF1In0.Iegl3rKkrPXLLzudQ1vAQA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// Add a marker to the map at the first coordinates in the array busStops
let marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map);

// Counter here represents the index of the current bus stop
let counter = 0;

function move() {
  if (counter < busStops.length - 1) {
    // Move the marker on the map every 1000ms
    setTimeout(() => {
      counter++;
      marker.setLngLat(busStops[counter]);
      move(); // Call move() recursively to continue moving the marker
    }, 1000);
  }
}

// Call move() to start the animation when the button is clicked
