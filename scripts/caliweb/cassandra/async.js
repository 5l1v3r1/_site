$(document).on('keypress', ':input:not(textarea):not([type=submit])', function (e) {
  if (e.which == 13) e.preventDefault();
});

function showPassword() {
  var x = document.getElementById("password-box");
  if (x.type === "password") { x.type = "text"; }
  else { x.type = "password"; }
}

function PasswordShowHide(button) {
  var password = document.getElementById("password-box");
  if (password.type == "password") { button.innerHTML = '<i id="fa-eye" class="fa fa-eye"></i>'; password.type = "text"; }
  else { button.innerHTML = '<i id="fa-eye" class="fa fa-eye-slash"></i>'; password.type = "password"; }
}
