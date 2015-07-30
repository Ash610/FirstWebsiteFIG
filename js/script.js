// Document Ready.
  function cycleBackgrounds() {
  var index = 0;

  $imageEls = $('.toggle-image'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < 
    $imageEls.length ? index + 1 : 0;
    // Show the next image.
    $imageEls.eq(index).addClass('show');
    // Hide the previous image.
    $imageEls.eq(index - 1).removeClass('show');

  }, 2000);
};

// Document Ready.
$(function () {
    cycleBackgrounds();
});

//$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

 //var height = $(window).height();
//$('.parallax').css('min-height', height);

function sendMail () {
  var email = $("#emailInput").val();
  if (email) {
    alert("your email is " + email +".");
  } else {
    alert("You didn't give me an email.");
  }
}
