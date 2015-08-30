$(document).ready(function() {

  $(window).scroll(function () {
    $('#nav_bar').addClass('navbar-fixed');
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
                duration = 600;
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

var url = "http://abhilashakonduru.azurewebsites.net/";
 function submitEmail () {
 	var firstName = $("#firstNameInput").val();
 	var lastName = $("#lastNameInput").val();
 	var email = $("#emailInput").val();
 	var message = $("#message").val();
 	if (firstName && lastName && isValidEmailAddress(email)){
 		$.ajax({
 			type:"POST",
 			url: url + "join",
 			data:{
 				firstName: firstName,
 				lastName: lastName,
 				message: message,
 				email: email 
 			},
 			success: function (data) { 
 				alert("Success");
 			},
 			error: function(error){
 				var code = error.status;
 				switch (code) {
 					case 500:
 						alert("Something went wrong!");
 						break;
 					case 400:
 						alert("Bad Input!");
 						break;
 					case 409:
 						alert("Email already on the list!");
 					break;
 					default:
 						break;
 				}
 			}
 		});
 		$("#lastNameInput").val("");
 		$("#firstNameInput").val("");
 		$("#emailInput").val("");
 		$("#message").val("");
 	} else {
 		alert("Please provide your first name, last name, and a valid e-mail address.");
 	}
 }
function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(emailAddress);
};


