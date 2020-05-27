function validateForm(select) {

  var type = select.value;
  var contentTitle = document.getElementById('modalEdit_title');
  var contentText = document.getElementById('modalEdit_text');
  var contentAInfo = document.getElementById('modalEdit_aditionalinfo');
  var contentEInfo = document.getElementById('modalEdit_extrainfo');
  var contentSEInfo = document.getElementById('modalEdit_sextrainfo');
  var contentType = document.getElementById('modalEdit_type');
  var contentSection = document.getElementById('modalEdit_section');
  var contentHierarchy = document.getElementById('modalEdit_hierarchy');
  var contentState = document.getElementById('modalEdit_state').value;
  var contentEnviroment = document.getElementById('modalEdit_enviroment');
  var contentCategory = document.getElementById('modalEdit_category');
  var contentPath = document.getElementById('modalEdit_path');
  var contentSPath = document.getElementById('modalEdit_spath');

  switch (type) {
    case "1":
      document.getElementById('modalEdit_image-form').classList.remove("backText");
      document.getElementById('modalEdit_text-group').classList.add("backText");
      contentText.value = "N/A";
      //document.getElementById('modalEdit_aditionalinfo-group').classList.add("backText");
      document.getElementById('modalEdit_aditionalinfo-label').innerHTML="Url"
      contentAInfo.value = "#";
      document.getElementById('modalEdit_extrainfo-group').classList.add("backText");
      contentEInfo.type = "text";
      contentEInfo.value = "N/A";
      contentSEInfo.value = "N/A"
      document.getElementById('modalEdit_path-group').classList.remove("backText");
      document.getElementById('modalEdit_type-group').classList.add("backText");
      contentType.value = type
      document.getElementById('modalEdit_section-group').classList.add("backText");
      contentSection.value = 1
      document.getElementById('modalEdit_category-group').classList.add("backText");
      contentCategory.value = 1
      contentSPath.classList.add("backText");
      contentSPath.value = "N/A"
      break;
    case "2":
      document.getElementById('modalEdit_image-form').classList.remove("backText");
      document.getElementById('modalEdit_text-group').classList.remove("backText");
      contentText.value = "";
      //document.getElementById('modalEdit_aditionalinfo-group').classList.add("backText");
      document.getElementById('modalEdit_aditionalinfo-label').innerHTML="Url"
      contentAInfo.value = "#";
      document.getElementById('modalEdit_extrainfo-group').classList.add("backText");
      contentEInfo.type = "text";
      contentEInfo.value = "N/A";
      contentSEInfo.value = "N/A"
      document.getElementById('modalEdit_path-group').classList.remove("backText");
      document.getElementById('modalEdit_type-group').classList.add("backText");
      contentType.value = type
      document.getElementById('modalEdit_section-group').classList.add("backText");
      contentSection.value = 1
      document.getElementById('modalEdit_category-group').classList.add("backText");
      contentCategory.value = 1
      contentSPath.classList.add("backText");
      contentSPath.value = "N/A"
      break;
    default:
      break;
  }


}

function validateSave() {

  document.getElementById('SaveEdit').classList.add("backText");
  document.getElementById('SavingEdit').classList.remove("backText");
  var validator = ValidarCampos('modalSaveContents')

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