function validateSave() {

  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalEditUsers')

  if (validator == true) {
    SaveUser();
  } else {
    document.getElementById('modal_Alert').innerHTML = validator;
    document.getElementById('modal_Alert').classList.remove("backText");
    document.getElementById('modal_Alert').classList.add("animated", "fadeIn");
    document.getElementById('SaveEdit').classList.remove("backText");
    document.getElementById('SavingEdit').classList.add("backText");
  }

}

function validatePassword(){

  var userPassword1 = document.getElementById('modalEdit_password1');
  var userPassword2 = document.getElementById('modalEdit_password2');

  if(userPassword1.value != userPassword2.value){
    document.getElementById('modal_Alert').innerHTML = "Las contraseñas no coinciden";
    document.getElementById('modal_Alert').classList.remove("backText");
    document.getElementById('modal_Alert').classList.add("animated", "fadeIn");
    userPassword1.classList.add("is-invalid");
    userPassword2.classList.add("is-invalid");
    userPassword1.value = "";
    userPassword2.value = "";
    userPassword1.focus;
  }

}

function ReloadPage() {
  location.reload(true);
}