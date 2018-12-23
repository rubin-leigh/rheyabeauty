var stripe = Stripe('pk_test_YWgCIeFFJkMPBXQwYiP55gyt');
var elements = stripe.elements();

function showEmailForm() {
  $("#form").fadeIn();
}

function hideEmailForm() {
  $('#form').fadeOut();
}
