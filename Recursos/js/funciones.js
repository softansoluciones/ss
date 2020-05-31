var fecha = new Date();
var anio = fecha.getYear() - 100;
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var base = 'cms';
//var baseurl = "http://localhost/ss_cms_api/public/api/";
var baseurl = "https://softansol.com/ss_cms_api/public/api/";
//var baseurlFiles = "http://localhost/ss_cms_api/public/public/app/Contenidos/";
var baseurlFiles = "https://softansol.com/ss_cms_api/public/public/app/Contenidos/";
var Gustoken = sessionStorage.getItem('token');
var GuserLogged = sessionStorage.getItem('user_id');

function buscarData(tabla) {
    var tableReg = document.getElementById(tabla);
    var searchText = document.getElementById('filtrar').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";

    // Recorremos todas las filas con contenido de la tabla
    for (var i = 1; i < tableReg.rows.length; i++) {
        cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        found = false;
        // Recorremos todas las celdas
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                found = true;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }
}

function countCampos(name) {
    var cantidad = document.getElementsByName(name);

    return cantidad.length;
}

function ValidarCampos(name) {

    var tot = countCampos(name);
    var campos = document.getElementsByName(name);
    var cont = 0;
    var msg;

    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.length == 0) {
            var campo = campos[i].dataset.campo;
            msg = '<p>Es necesario que llene el campo ' + campo + '</p>';
            campos[i].classList.add("is-invalid");
            campos[i].focus();
            return msg;
            break;
        }
        cont++;
    }
    if (cont == tot) {
        return true;
    } else {
        return msg;
    }

}

function removec(d) {
    d.classList.remove("is-invalid");
    document.getElementById('modal_Alert').classList.remove("animated", "fadeIn");
    document.getElementById('modal_Alert').classList.add("animated", "fadeOud");
    document.getElementById('modal_Alert').classList.add("backText");
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function pc() {

    var device = navigator.userAgent

    if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {
        window.location = 'homemobile';
    } else {}

}

function mobile() {

    var device = navigator.userAgent

    if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {}
    else {
        window.location = 'home';
    }
}

function redireccionLogin() {

    var device = navigator.userAgent

    if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {
        window.location = './loginM';
    } else {
        window.location = './login';
    }

}

function redireccionInicio() {

    var device = navigator.userAgent

    if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {
        window.location = './inicioM';
    } else {
        window.location = './inicio';
    }

}

function redireccionHome() {

    var device = navigator.userAgent

    if (device.match(/Iphone/i) || device.match(/Ipod/i) || device.match(/Android/i) || device.match(/J2ME/i) || device.match(/BlackBerry/i) || device.match(/iPhone|iPad|iPod/i) || device.match(/Opera Mini/i) || device.match(/IEMobile/i) || device.match(/Mobile/i) || device.match(/Windows Phone/i) || device.match(/windows mobile/i) || device.match(/windows ce/i) || device.match(/webOS/i) || device.match(/palm/i) || device.match(/bada/i) || device.match(/series60/i) || device.match(/nokia/i) || device.match(/symbian/i) || device.match(/HTC/i)) {
        window.location = './homemobile';
    } else {
        window.location = './home';
    }

}

function inputfechaDate(input) {

    var valinput = input.value;

    if (valinput.length < 1) {
        input.type = "date";
    }
}

function inputfechaText(input) {

    var valinput = input.value;

    if (valinput.length < 1) {
        input.type = "text";
    }
}

function ValidarMenu(name, userType) {

    var menu = document.getElementsByName(name);

    for (var i = 0; i < menu.length; i++) {
        if (menu[i].dataset.usertype == 1 && userType == 3) {
            menu[i].classList.add("backText");
            break;
        }
        if (menu[i].dataset.usertype == 2 && userType == 3) {
            menu[i].classList.add("backText");
            break;
        }
        if (menu[i].dataset.usertype == 1 && userType == 2) {
            menu[i].classList.add("backText");
            break;
        }
    }
}

function menuPan() {

    //alert($("#menupan").position().left);
    //alert($(window).width());

    var panpos = $(window).width();
    if ($("#menupan").position().left >= panpos) {
        $("#menupan").animate({ left: '0%' });
        $("body").addClass('overbody');
    } else {
        $("#menupan").animate({ left: '100%' });
        $("body").removeClass('overbody');

    }

}