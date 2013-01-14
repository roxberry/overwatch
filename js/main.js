$(document).ready(function() {

 $('#filterspanel').hide();
 $('#actionspanel').hide();

// // shows the slickbox on clicking the noted link  
//  $('#slick-show').click(function() {
//    $('#slickbox').show('slow');
//    return false;
//  });
// // hides the slickbox on clicking the noted link  
//  $('#slick-hide').click(function() {
//    $('#slickbox').hide('fast');
//    return false;
//  });

 // toggles the slickbox on clicking the noted link  
  $('#filters').click(function() {
    $('#filterspanel').toggle(400);
    return false;
  });

   // toggles the slickbox on clicking the noted link  
  $('#actions').click(function() {
    $('#actionspanel').toggle(400);
    return false;
  });

});
