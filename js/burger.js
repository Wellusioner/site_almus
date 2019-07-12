$(document).ready(function(){
  
  $('#hamburger').click(function(){
    $(this).toggleClass('buy');
    $('#navigate.header-wrapper').toggleClass('opened');
    $('.helper').toggleClass('shown');
  });
  
  $('.helper').click(function(){
    $(this).toggleClass('shown');
    $('#hamburger').toggleClass('buy');
    $('#navigate.header-wrapper').toggleClass('opened');
  })
});

