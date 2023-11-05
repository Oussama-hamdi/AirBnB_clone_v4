$(document).ready(function() {
  const checkedAmenities = {};
        
  $('input[type="checkbox"]').click(function() {
    $(this).prop('checked') ?
      checkedAmenities[$(this).data('id')] = $(this).data('name') :
      delete checkedAmenities[$(this).data('id')];
          
    $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
  });     
}); 
