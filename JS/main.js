//Google maps API
function initMap() {
  const myLocation = {
    lat: 13.0836939,
    lng: 80.270186
  };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: myLocation,
    zoom: 18
  });

  const marker = new google.maps.Marker({
    position: myLocation,
    map: map
  });
}

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