function validateSave() {
  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalEditUsers')

  if (validator == true) {
    UpdateUser();
  } else {
    document.getElementById('modal_Alert').innerHTML = validator;
    document.getElementById('modal_Alert').classList.remove("backText");
    document.getElementById('modal_Alert').classList.add("animated", "fadeIn");
    document.getElementById('SaveEdit').classList.remove("backText");
    document.getElementById('SavingEdit').classList.add("backText");
  }

}

function ValidateDelete(id) {

  document.getElementById('SaveEdit').classList.remove("backText");
  document.getElementById('SavingEdit').classList.add("backText");
  var btns = document.getElementById('btns');
  var msg = document.getElementById('msg');
  btns.innerHTML = '<a class="btn btn-danger" data-dismiss="modal" aria-label="Close" href="#" role="button">Cancelar</a>\n\
  <a class="btn btn-ss-normal" href="javascript: DeleteUser(' + id + ')" role="button">Aceptar</a>';
  msg.innerHTML = "<center><p>¿Realmente desea eliminar este usuario?</p></center>";
  $("#modal_msg").modal('show');

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