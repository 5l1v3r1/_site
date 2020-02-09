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

$(document).ready(function () {   //Vid
  $("#500").on("click", function (e) {
    e.preventDefault();
    $("#k18mj6IACB").modal({
      backdrop: "static",       //remove ability to close modal with click
      keyboard: false,          //remove option to close with keyboard
      show: true                //Display loader!
    });
    setTimeout(function () {
      $("#k18mj6IACB").modal("hide");
      $('#cfSZPxbvup').modal();
    }, 500);
  });
});
