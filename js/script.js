// Document Ready.
//   function cycleBackgrounds() {
//   var index = 0;

//   $imageEls = $('.toggle-image'); // Get the images to be cycled.

//   setInterval(function () {
//     // Get the next index.  If at end, restart to the beginning.
//     index = index + 1 < 
//     $imageEls.length ? index + 1 : 0;
//     // Show the next image.
//     $imageEls.eq(index).addClass('show');
//     // Hide the previous image.
//     $imageEls.eq(index - 1).removeClass('show');

//   }, 2000);
// };

// // Document Ready.
// $(function () {
//     cycleBackgrounds();
// });


// function makeAjaxCall (){
//   //make the request!
//   $.ajax({
//     url:"http://347e6913.ngrok.com/test"
//   })
//   //what to do when you get an message!
//   .done(function (data) {
//     alert(data.message);
//   })
//   //what to do when you get an error!
//   .error(function (error) {
//     alert(error.message);
//   });
// }
// function makeAjaxCall () {
//   var data = $("#emailInput").val();
//   $.ajax({
//     url:"http://347e6913.ngrok.com/test",
//     method:"POST",
//     dataType: "json",
//     data: { message: data }
//   })
//   .done(function (data) {
//     alert(data.message);
//   })
//   .error(function (error) {
//     alert(error.message);
//   });
// }
// function submitEmail () {
//    var email = $("#emailInput").val();
//    $.ajax({
//      type:"POST",
//      url: "http://localhost:3000/join",
//      data: { 
//      	email: email 
//      },
//      success: function (data) {  
//      	alert('Success'); 
//      },
//    });
//    	$("#emailInput").val("");
//  	}else{
//  	alert("Please provide a name and valid email address!");
//  	}
//  }
var url = "http://abhilashakonduru.azurewebsites.net/";
 function submitEmail () {
 	var email = $("#emailInput").val();
 	var name = $("#nameInput").val();
 	if (name && isValidEmailAddress(email)){
 		$.ajax({
 			type:"POST",
 			url: url + "join",
 			data:{
 				name: name,
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
 						alert("Bad Email Address!");
 						break;
 					case 409:
 						alert("Email already on the list!");
 					break;
 					default:
 						break;
 				}
 			}
 		});
 		$("#emailInput").val("");
 		$("#nameInput").val("");
 	}else{
 		alert("That's not a valid email address!");
 	}
 }
function isValidEmailAddress(emailAddress) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(emailAddress);
};


