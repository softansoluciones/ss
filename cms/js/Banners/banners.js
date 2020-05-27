function validateEdit() {

  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalEditContents')

  if (validator == true) {
    UpdateContent();
  } else {
    document.getElementById('modal_Alert').innerHTML = validator;
    document.getElementById('modal_Alert').classList.remove("backText");
    document.getElementById('SaveEdit').classList.remove("backText");
    document.getElementById('SavingEdit').classList.add("backText");
  }

}

function validateSave() {

  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalEditContents')

  if (validator == true) {
    UpdateContent();
  } else {
    document.getElementById('modal_Alert').innerHTML = validator;
    document.getElementById('modal_Alert').classList.remove("backText");
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
    <a class="btn btn-ss-normal" href="javascript: DeleteContent(' +"'"+ id +"'"+ ')" role="button">Aceptar</a>';
  msg.innerHTML = "<center><p>¿Realmente desea eliminar este contenido?</p></center>";
  $("#modal_msg").modal('show');

}

function ReloadPage() {
  location.reload(true);
}