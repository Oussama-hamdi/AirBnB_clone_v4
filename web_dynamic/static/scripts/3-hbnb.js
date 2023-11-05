$(document).ready(function() {
  const apiStatusDiv = $('#api_status');

  $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
    if (status === 'success' && data.status === 'OK') {
      apiStatusDiv.addClass('available');

      $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(response) {
          if (response) {
            const placesSection = $('.places');
            placesSection.empty();

            response.forEach(function(place) {
              const article = $('<article>');

              article.append($('<div>').text(place.name));
              article.append($('<div>').text('$' + place.price_by_night));
              article.append($('<div>').text(place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '')));
              article.append($('<div>').text(place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '')));
              article.append($('<div>').text(place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '')));
              article.append($('<div>').text('Owner: ' + place.user.first_name + ' ' + place.user.last_name));
              article.append($('<div>').text(place.description));

              placesSection.append(article);
            });
          }
        },
        error: function(err) {
          console.error('Error fetching places:', err);
        }
      });
    } else {
      apiStatusDiv.removeClass('available');
    }
  });
});
