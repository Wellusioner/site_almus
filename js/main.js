$(function() {
  
  $('.search-button a').on('click', function() {
    $('.search-button').toggleClass('opened');
  })
  
  $('.close').on('click', function() {
    $('.search-button').toggleClass('opened');
  })
  
  $('#quit-form').on('click', function(){
   $('#popup').toggleClass('opened');
  })
  
  $('.contacting .consultant').on('click', function(){
    $('#popup').toggleClass('opened');
  })
})