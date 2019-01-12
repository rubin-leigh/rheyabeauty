//const Mailchimp = require('mailchimp-api-js');

// or ES6 import
//import Mailchimp from 'mailchimp-api-js';



var captionLength = 0;
var caption = '';
var captions = ['Leigh.', 'Praneeth.', 'Junyi.', 'Sahar.'];


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    typeAndErase();
    setInterval ('typeAndErase()', 5000);
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

function subscribe()
{
  var email = document.getElementById("email_address").value;

  alert(email);

  const listid = '33a0b494c6';
  const apiKey = 'c2418aa7b58fd68bc4d37709cf9ef3c2-us7';
  const url = 'https://us7.api.mailchimp.com/3.0/lists/' + listid + '/members' + "?apikey=" + apiKey + "&email=" + email;
  //const mc = new Mailchimp('rheyabeauty', 'c2418aa7b58fd68bc4d37709cf9ef3c2-us7');
  const username = 'rheyabeauty';
  const body = {
    "email_address": '"${email}"',
    "status": "subscribed"
  };

  // const req =
  // request('POST', `${url}`)
  //   .set('content-type', 'application/json')
  //   .auth(username, apiKey);
  //
  // req.send(body);
  // $.post(url,body, function(body,status) {
  //   console.log('${data} and status is ${status}');
  // });

  var data = "{\n\t\"email_address\": \"${email}\",\n\t\"status\": \"subscribed\"\n}";

//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       console.log(this.responseText);
//     }
//   });
//   xhr.open('POST', 'https://us7.api.mailchimp.com/3.0/lists/' + listid + '/members?apikey=c2418aa7b58fd68bc4d37709cf9ef3c2-us7');
// xhr.setRequestHeader('Authorization', 'Basic ' + btoa('anystring' + ':' + 'c2418aa7b58fd68bc4d37709cf9ef3c2-us7'));
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('');
// xhr.send('{"email_address":"' + email + '", "status":"subscribed"}');
// var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://us7.api.mailchimp.com/3.0/lists/33a0b494c6/members");
xhr.setRequestHeader("x-sp-user-ip", "127.0.0.1");
xhr.setRequestHeader("x-sp-user", "oauth_321ciAQOPUZrC7DayoJexlL6vG50sVWFNdIkYjHz|e83cf6ddcf778e37bfe3d48fc78a6502062fc1030449628c699ef3c4ffa6f9a2000b8acc3c4c0addd8013285bb52c89e5267b628ca02fa84a6d71fe186b7cd5d");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("authorization", "Basic YW55c3RyaW5nOmMyNDE4YWE3YjU4ZmQ2OGJjNGQzNzcwOWNmOWVmM2MyLXVzNw==");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "dff42bfc-5c8a-9dfd-d630-85d62e5d630b");

xhr.send(data);
}

function print()
{
  console.log()
}
