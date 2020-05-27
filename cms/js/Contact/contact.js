function validateSave() {
  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalEditContact')

  if (validator == true) {
    Updatecontact();
  } else {
    document.getElementById('modal_Alert').innerHTML = validator;
    document.getElementById('modal_Alert').classList.remove("backText");
    document.getElementById('modal_Alert').classList.add("animated", "fadeIn");
    document.getElementById('SaveEdit').classList.remove("backText");
    document.getElementById('SavingEdit').classList.add("backText");
  }

}

function inapropiateMessage(check) {

  if (check.checked == true) {

    var response = document.getElementById("modalEdit_response");
    response.value = "N/A";
    response.disabled = true;

  } else {

    var response = document.getElementById("modalEdit_response");
    response.value = "";
    response.disabled = false;

  }

}

function validateCheck(check) {

  if (check.checked == true) {
    document.getElementById('modalEdit_passwordBox').classList.remove("animated", "fadeOut");
    document.getElementById('modalEdit_passwordBox').classList.remove("backText");
    document.getElementById('modalEdit_passwordBox').classList.add("animated", "fadeIn");
    document.getElementById('modalEdit_password1').name = "modalEditUsers";
    document.getElementById('modalEdit_password2').name = "modalEditUsers";
  } else {
    document.getElementById('modalEdit_passwordBox').classList.remove("animated", "fadeIn");
    document.getElementById('modalEdit_passwordBox').classList.add("animated", "fadeOut");
    document.getElementById('modalEdit_passwordBox').classList.add("backText");
    document.getElementById('modalEdit_password1').name = "modalEditUsers0";
    document.getElementById('modalEdit_password2').name = "modalEditUsers0";

  }

}

function ReloadPage() {
  location.reload(true);
}