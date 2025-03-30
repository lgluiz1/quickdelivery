// Inicializa o mapa focado no Brasil
var mapa = L.map('mapa').setView([-14.235, -51.9253], 4);

// Adiciona camada de mapa estilo "dark" sem outros países
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CartoDB',
    subdomains: 'abcd',
    maxZoom: 10
}).addTo(mapa);

// Adiciona contorno do Brasil (GeoJSON)
fetch("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson")
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: "#FFD700",  // Cor da borda (Dourado)
                weight: 2,
                fillColor: "#000",
                fillOpacity: 0.5
            }
        }).addTo(mapa);
    });

// Pontos de entrega
var pontos = [
    { lat: -23.5505, lng: -46.6333, cidade: "São Paulo" },
    { lat: -22.9068, lng: -43.1729, cidade: "Rio de Janeiro" },
    { lat: -19.9167, lng: -43.9345, cidade: "Belo Horizonte" },
    { lat: -12.9777, lng: -38.5016, cidade: "Salvador" }
];

// Adiciona marcadores no Brasil
pontos.forEach(ponto => {
    L.marker([ponto.lat, ponto.lng]).addTo(mapa)
        .bindPopup(`<b>${ponto.cidade}</b>`);
});