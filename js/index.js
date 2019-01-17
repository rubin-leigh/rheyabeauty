

var captionLength = 0;
var caption = '';
var captions = [' student.', ' mom.', ' businesswoman.', ' friend.', ' traveler.', ' doctor.', 'n artist.', 'n athlete.'];


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    typeAndErase();
    setInterval ('typeAndErase()', 5000);

    $( "#submit_email" ).click(function() {
      $( "#confirmation" ).fadeIn( "slow", function() {
        // Animation complete
      });
    });

    $( "#return_home" ).click(function() {
      $( "#confirmation" ).fadeOut( "slow", function() {
        // Animation complete
      });
    });

    if($(window).width() > 768)
    {
      $("#rheya_mascara").click(function(){
        $("#rheya_mascara").hide();
        $("#how_it_works").show();
      });

      $("#how_it_works").click(function(){
        $("#how_it_works").hide();
        $("#rheya_mascara").show();
      });

      $("#slide_1").click(function(){
        $("#rheya_mascara").hide();
        $("#how_it_works").show();
      });

      $("#slide_2").click(function(){
        $("#how_it_works").hide();
        $("#rheya_mascara").show();
      });

      activeItem = $('#accordion').children(':first');
      $('#accordion').on('click', '.list', function() {
        $(activeItem).animate({
          width: '5vw'
        }, {
          duration: 295,
          queue: false,
        }).children(':first')
        activeItem = this;
        $(activeItem).animate({
          width: '95vw'
        }, {
          duration: 295,
          queue: false
        }).children(':first').removeClass('blur-filter');
      });
    }


});


function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
        caption = captionEl.html();
        captionLength = caption.length;
    }
}
function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function typeAndErase() {
  caption = captions[Math.floor(Math.random()*captions.length)];
  type();
  setTimeout(erase, 3000);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
