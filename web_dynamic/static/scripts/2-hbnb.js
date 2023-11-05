$(document).ready(function() {
  const apiStatusDiv = $('#api_status');
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    (status === 'success' && data.status === 'OK') ?
    apiStatusDiv.addClass('available') : apiStatusDiv.removeClass('available');
  }

  const checkedAmenities = {};
        
  $('input[type="checkbox"]').click(function() {
    $(this).prop('checked') ?
      checkedAmenities[$(this).data('id')] = $(this).data('name') :
      delete checkedAmenities[$(this).data('id')];
          
    $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
  });     
});
