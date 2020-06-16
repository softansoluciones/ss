function validateSaveCustomer() {
  document.getElementById('page_requirements_customer_send').classList.add("backText");
  document.getElementById('page_requirements_customer_sending').classList.remove("backText");
  var validator = ValidarCampos('page_requirements_customer')

  if (validator == true) {
    SaveCustomer();
  } else {
    $.notify(validator, {
      animate: {
        enter: 'animated fadeInRight',
        exit: 'animated fadeOutRight',
        position: 'absolute'
      },
      offset: {
        x: 0,
        y: 0
      }
    });
    document.getElementById('page_requirements_customer_send').classList.remove("backText");
    document.getElementById('page_requirements_customer_sending').classList.add("backText");
  }

}

function validateSaveRequirement() {
  document.getElementById('page_requirements_requirement_send').classList.add("backText");
  document.getElementById('page_requirements_requirement_sending').classList.remove("backText");
  var validator = ValidarCampos('page_requirements_requirement')

  if (validator == true) {
    var requirementName = document.getElementById("page_requirements_requirement_name").value;
    var requirementDescription = document.getElementById("page_requirements_requirement_description").value;
    sessionStorage.setItem('requirementName', requirementName);
    sessionStorage.setItem('requirementDescription', requirementDescription);
    requirements(3);
  } else {
    $.notify(validator, {
      animate: {
        enter: 'animated fadeInRight',
        exit: 'animated fadeOutRight',
        position: 'absolute'
      },
      offset: {
        x: 0,
        y: 0
      }
    });
    document.getElementById('page_requirements_requirement_send').classList.remove("backText");
    document.getElementById('page_requirements_requirement_sending').classList.add("backText");
  }

}

function validateSaveDetails() {
  document.getElementById('page_requirements_details_send').classList.add("backText");
  document.getElementById('page_requirements_details_sending').classList.remove("backText");
  var validator = ValidarCampos('page_requirements_requirement_detail')

  if (validator == true) {
    objectDetails();
  } else {
    $.notify(validator, {
      animate: {
        enter: 'animated fadeInRight',
        exit: 'animated fadeOutRight',
        position: 'absolute'
      },
      offset: {
        x: 0,
        y: 0
      }
    });
    document.getElementById('page_requirements_details_send').classList.remove("backText");
    document.getElementById('page_requirements_details_sending').classList.add("backText");
  }

}

function detailsAdd() {
  var counter = document.getElementsByName("page_requirements_requirement_detail").length;
  var detailNumber = counter + 1;

  $("#page_requirements_requirement_details").append('<div class="form-group form-row animated fadeIn" id="div-detail-' + detailNumber + '">\n\
  <input type="text" class="form-control textbox col-11"\n\
  placeholder="Poder recibir mensajes de whatsapp, mostrar catálogo de productos, integrar pasarela de pagos, etc."\n\
  id="page_requirements_requirement_detail_' + detailNumber + '" name="page_requirements_requirement_detail"\n\
  onchange="removec(this)" data-campo="Detalle" required>\n\
  <a class="btn btn-ss-transparent col-1" href="javascript: detailRemove('+ "'div-detail-" + detailNumber + "'" + ');"><i class="fas fa-trash-alt"></i></a>\n\
  </div>');
}

function detailRemove(element) {

  document.getElementById(element).remove();

}

function objectDetails() {
  var inpuDetail = document.getElementsByName('page_requirements_requirement_detail');
  var details = [];
  
  for (var i = 0; i < inpuDetail.length; i++) {
    var detail = inpuDetail[i].value;
    var items = { "requirement_detail": detail };
    details.push(items);
  }
  SaveRequirement(details);
}

function requirements(step) {

  if (step > 2) {
    var requirementName = sessionStorage.getItem('requirementName');
    var requirementDescription = sessionStorage.getItem('requirementDescription');

    document.getElementById("page_requirements_requirement_name").value = requirementName;
    document.getElementById("page_requirements_requirement_description").value = requirementDescription;
  }

  switch (step) {
    case 1:
      hideActive();
      $('#page_requirements_' + step).removeClass('backText');
      sessionStorage.setItem('requirement_step', step);
      break;
    case 2:
      hideActive();
      $('#page_requirements_' + step).removeClass('backText');
      sessionStorage.setItem('requirement_step', step);
      break;
    case 3:
      hideActive();
      $('#page_requirements_' + step).removeClass('backText');
      sessionStorage.setItem('requirement_step', step);
      break;
    case 4:
      hideActive();
      $('#page_requirements_' + step).removeClass('backText');
      sessionStorage.setItem('requirement_step', 0);
      break;
    default:
      hideActive();
      $('#page_requirements_0').removeClass('backText');
      sessionStorage.setItem('requirement_step', 0);
      break;
  }

}

function hideActive() {

  var activo = document.getElementsByClassName('container')
  for (var i = 0; i < activo.length; i++) {
    activo[i].classList.add("backText");
  }

}

function validateStep() {

  var step = parseInt(sessionStorage.getItem('requirement_step'));
  requirements(step);

}
