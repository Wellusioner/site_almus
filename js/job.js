$(function(){
    var button = $('.job-item .toggler'),
        animateTime = 50;

    $(button).click(function () {
        reset(animateTime);
        $('.job-item .toggler').text("развернуть");
        var text = $(this).parent().find('div.resizer');
        if (text.height() === 50) {
            autoHeightAnimate(text, animateTime);
            $(this).text("свернуть");
        } else {
            text.stop().animate({ height: '50px' }, animateTime);
            $('.job-item .toggler').text("развернуть");
        }
    });
});

 /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
    function reset(time){
        $('.resizer').animate({'height':'50'}, time);
    }