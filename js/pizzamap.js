var defaultCenter = [40.713435,-73.971291];
var defaultZoom = 12;

var map = L.map('map', {
  scrollWheelZoom: false,
}).setView(defaultCenter, defaultZoom);

L.tileLayer('https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var pizzaData = [
  {
    name: 'Chris',
    pizzaShop: "Ben's Pizza",
    lat: 40.730376,
    lon: -74.0008582,
    school: 'Wagner',
  },
  {
    name: 'Maxwell',
    pizzaShop: "Joe's",
    lat: 40.7305876,
    lon: -74.002141,
    school: 'Wagner',
  },
  {
    name: 'Paolo',
    pizzaShop: "John's of Bleeker",
    lat: 40.725717,
    lon: -73.991492,
    school: 'Wagner',
  },
  {
    name: 'Rigel',
    pizzaShop: "Di Fara",
    lat: 40.6250156,
    lon: -73.9659225,
    school: 'Life',
  },
  {
    name: 'Jack',
    pizzaShop: "Paulie Gee's",
    lat: 40.729662,
    lon: -73.958579,
    school: 'CUSP',
  },
  {
    name: 'Lisanne',
    pizzaShop: "ZuriLee",
    lat: 40.6545,
    lon: -73.9594,
    school: 'Life',
  },
  {
    name: 'Niki',
    pizzaShop: "Pizza Palace",
    lat: 40.77638,
    lon: -73.9112052,
    school: 'Life',
  },
  {
    name: 'Monica',
    pizzaShop: "Percy's Pizza",
    lat: 40.72915,
    lon: -74.001398,
    school: 'Wagner',
  },
];

// how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.name + ' likes to eat at ' +  chrisPizza.pizzaShop);


// create an empty markers array that we can fill with markers
var markersArray = [];

// how to add a marker for each object in the array

pizzaData.forEach(function(pizzaObject) {
  var latLon = [pizzaObject.lat, pizzaObject.lon];

  var schoolColor = '#FFF';

  if (pizzaObject.school === 'Wagner') schoolColor = 'purple';
  if (pizzaObject.school === 'CUSP') schoolColor = 'green';
  if (pizzaObject.school === 'Life') schoolColor = 'orange';

  var options = {
    radius: 6,
    opacity: 1,
    fillColor: schoolColor,
    fillOpacity: 0.9,
    color: '#FFF',
    weight: 2,
  };

  var marker = L.circleMarker(latLon, options)
      .bindPopup(pizzaObject.name + ' likes to eat at ' +  pizzaObject.pizzaShop, {offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});

// this is necessary to activate bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// open the modal on page load
$(window).on('load',function(){
  $('#myModal').modal('show');
});
