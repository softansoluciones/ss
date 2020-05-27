 
  function validateSave() {

      document.getElementById('SaveEdit').classList.add("backText");
      document.getElementById('SavingEdit').classList.remove("backText");
      var validator = ValidarCampos('modalEditContents')

      if (validator == true) {
          SaveContent();
      } else {
          document.getElementById('modal_Alert').innerHTML = validator;
          document.getElementById('modal_Alert').classList.remove("backText");
          document.getElementById('SaveEdit').classList.remove("backText");
          document.getElementById('SavingEdit').classList.add("backText");
      }

  }

  function ReloadPage() {
      location.reload(true);
  }