var stripe = Stripe('pk_test_YWgCIeFFJkMPBXQwYiP55gyt');
var elements = stripe.elements();

function showEmailForm() {
  var form = document.getElementById("form");
  form.style.display = "block";
}

function hideEmialForm() {
  var form = document.getElementById("form");
  form.style.display = "none";
}
