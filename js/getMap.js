var mymap = L.map('mapbox').setView([41.405838, -75.668555], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoianJvY2syMzk0IiwiYSI6ImNqbWN1cmZvazBqcTMza3IycXAxNmRtMm4ifQ.3i3w3RNH1mEQ8hHyLnLDog'
}).addTo(mymap);

const request = new XMLHttpRequest();
const requestURL = "js/markets.json";
request.open('GET', requestURL, true);

var destLat;
var destLong

request.onload = function () {
// Request data here
    const data = JSON.parse(this.response);

// Display map markers
    const marketIcon = L.divIcon({
        html: '<i class="fab fa-pagelines fa-2x"></i>',
        iconSize: [20, 20],
        className: "marketIcon"
    });

    const markets = data.markets.map(market => {
    console.log(market.name);
    var destLat = market.lat;
    var destLong = market.long;

    L.marker([market.lat, market.long], {
        icon: marketIcon
    }).bindPopup(`
        <h2>${market.name}</h2>
        <h3>${market.address}</h3>
        <p><span>Hours:</span><br /> ${market.hours}</p>
    `).openPopup().addTo(mymap);
  });
}

request.send();

