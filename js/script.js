$(document).ready(function() {

    // grab the initial top offset of the navigation 
    var nav_bar_offset_top = $('#nav_bar').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var nav_bar = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
        if (scroll_top > nav_bar_offset_top) { 
            $('#nav_bar').css({ 'position': 'fixed', 'top':0, 'left':0, 'marging':'0px','width': '100%' });
        } else {
            $('#nav_bar').css({ 'position': 'relative' }); 
        }   
    };
    
    // run our function on load
    nav_bar();
    
    // and run it again every time you scroll
    $(window).scroll(function() {
         nav_bar();
    });
    
});

 $(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();
        scroller.css('overflow-x', 'auto');

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 1000;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });
