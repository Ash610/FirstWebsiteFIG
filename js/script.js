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
function submitEmail () {
   var email = $("#emailInput").val();
   $.ajax({
     type:"POST",
     url: "http://localhost:3000/join",
     data: { email: email },
     success: function (data) { console.log(data); alert('Success'); }
   });
 }