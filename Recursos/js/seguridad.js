/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function verificacionI() {
    var login = sessionStorage.getItem("ses_estado");

    if (login != "CheilCms") {
        sessionStorage.clear();
        window.location = 'index.html';
    } else {
        $("body").show();
    }
}

function verificacionL() {
    var login = sessionStorage.getItem("ses_estado");

    if (login == "CheilCms") {
        window.location = 'inicio.html';
    } else {
        sessionStorage.clear();
    }
}

function LogOut() {
    sessionStorage.clear();
    window.location = 'index.html';
}

//-----------------------------------Token-------------------------------------//

function veificar_Token() {

    var token = sessionStorage.getItem('token');
    if (token == null) {
        Create_Token();
    }

}

function Create_Token() {

    var user = sessionStorage.getItem('user');
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Respuesta != 0) {
                sessionStorage.setItem('token', datos.Respuesta[0].token)
            } else {
                if (response.Respuesta == 28) {
                    window.location = '../admin/noauth.html';
                }
            }
        }
    });

    xhr.open("GET", 'api/Api/Tokens.php/token/' + user);
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
}

function Create_TokenUser(user) {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Respuesta != 0) {
                sessionStorage.setItem('token', datos.Respuesta[0].token)
            } else {
                if (response.Respuesta == 28) {
                    window.location = '../admin/noauth.html';
                }
            }
        }
    });

    xhr.open("GET", 'api/Api/Tokens.php/token/' + user);
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
}