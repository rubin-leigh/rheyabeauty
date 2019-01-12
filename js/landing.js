//const Mailchimp = require('mailchimp-api-js');

// or ES6 import
//import Mailchimp from 'mailchimp-api-js';



var captionLength = 0;
var caption = '';
var captions = ['Student.', 'Mom.', 'Businesswoman.', 'Friend.', 'Traveler.', 'Doctor.', 'Artist.', 'Athlete.'];


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
