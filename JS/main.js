
//jQuery smooth scrolling
$('#nav-bar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      }, 800
    );
  }
});

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Chennai coordinates (replace with your exact location)
  const myLocation = [lat, lng];

  // Create the map
  const map = L.map('map').setView(myLocation, 20);

  // Add OpenStreetMap tiles (free, no watermarks)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add your location marker
  L.marker(myLocation).addTo(map)
    .bindPopup(
      `<b>AccPlay Consulting<br>Chennai</b><br>
                <a href="https://www.google.com/maps?q=${lat},${lng}" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Open in Google Maps
                </a>`
    )
    .openPopup();

  // Keep your existing jQuery smooth scrolling code
  $('#nav-bar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800);
    }
  });
});

const lat = 13.0313036;
const lng = 80.2097031;

function openGoogleMaps() {
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
}