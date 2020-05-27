function home() {
  var section = 1;
  var device = navigator.userAgent
  if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {
    var enviroment = 2;
  } else {
    var enviroment = 1;
  }
  Load_Banners(section, enviroment);
  Load_Projects(section, enviroment);
}

function validateSaveContact() {
  document.getElementById('page_contact_send').classList.add("backText");
  document.getElementById('page_contact_sending').classList.remove("backText");
  var validator = ValidarCampos('page_contact')

  if (validator == true) {
    SaveContact();
  } else {
    document.getElementById('page_contact_send').classList.remove("backText");
    document.getElementById('page_contact_sending').classList.add("backText");
  }

}

function how_WeWork(item) {

  switch (item) {
    case 1:
      hideActive();
      $('#how_we_work-meet').removeClass('backText');
      break;
    case 2:
      hideActive();
      $('#how_we_work-proposal').removeClass('backText');
      break;
    case 3:
      hideActive();
      $('#how_we_work-dev').removeClass('backText');
      break;
    case 4:
      hideActive();
      $('#how_we_work-test').removeClass('backText');
      break;
    case 5:
      hideActive();
      $('#how_we_work-implementation').removeClass('backText');
      break;
    default:
      break;
  }

}

function hideActive() {

  var activo1 = document.getElementsByClassName('hww')
  for (var i = 0; i < activo1.length; i++) {
    activo1[i].classList.add("backText");
  }

  var activo1 = document.getElementsByClassName('hwwm')
  for (var i = 0; i < activo1.length; i++) {
    activo1[i].classList.add("backText");
  }

}

$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});