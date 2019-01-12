var stripe = Stripe('pk_test_YWgCIeFFJkMPBXQwYiP55gyt');
var elements = stripe.elements();

function showEmailForm() {
  $("#form").fadeIn();
}

function hideEmailForm() {
  $('#form').fadeOut();
}

$(document).ready( function() {
  $( '#navbarSupportedContent .navbar-nav a' ).on( 'click', function () {
  	$( '#navbarSupportedContent .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  	$( this ).parent( 'li' ).addClass( 'active' );
  });
});
