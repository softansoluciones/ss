function Load_Users() {

    ValidarMenu("modalEditUserOption", GlobalUserType);
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    document.getElementById('tabB_Registros').innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                var contid = 1;
                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<tr>\n\
                    <th scope="row">' + contid + '</th>\n\
                    <td>' + datos.Response[i].user_name + ' ' + datos.Response[i].user_lstname + '</td>\n\
                    <td>' + datos.Response[i].user_tel + '</td>\n\
                    <td>' + datos.Response[i].user_email + '</td>\n\
                    <td>' + datos.Response[i].type_name + '</td>\n\
                    <td>' + datos.Response[i].state_name + '</td>\n\
                    <td><center><a href="javascript: ShowModalEdit(' + datos.Response[i].user_id + ')" class="btn btn-ss-normal btn-sm">Editar</a></center></td>\n\
                    <td><center><a href="javascript: ValidateDelete(' + datos.Response[i].user_id + ')" class="btn btn-danger btn-sm">Eliminar</a></center></td>\n\
                  </tr>';
                    contid++;
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML = '<center>No existe información</center>';
            }
        }
    });

    xhr.open("GET", baseurl + "users");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();
}

function ShowModalEdit(id) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                document.getElementById('modalEdit_id').value = datos.Response[0].user_id;
                document.getElementById('modalEdit_name').value = datos.Response[0].user_name;
                document.getElementById('modalEdit_lastName').value = datos.Response[0].user_lstname;
                document.getElementById('modalEdit_phone').value = datos.Response[0].user_tel;
                document.getElementById('modalEdit_email').value = datos.Response[0].user_email;
                document.getElementById('modalEdit_password').value = datos.Response[0].user_password;
                document.getElementById('modalEdit_type').value = datos.Response[0].user_type;
                document.getElementById('modalEdit_state').value = datos.Response[0].user_state;
                $('#modalEdit').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            } else {
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>No existe información</center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("GET", baseurl + "users/id/" + id);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();
}

function UpdateUser() {

    var userId = document.getElementById('modalEdit_id').value;
    var userName = document.getElementById('modalEdit_name').value;
    var userLastName = document.getElementById('modalEdit_lastName').value;
    var userPhone = document.getElementById('modalEdit_phone').value;
    var userEmail = document.getElementById('modalEdit_email').value;
    var userPasswordCh = document.getElementById('modalEdit_passwordCheck');
    var userType = document.getElementById('modalEdit_type').value;
    var userState = document.getElementById('modalEdit_state').value;

    if(userPasswordCh.checked == true){
        var userPassword = document.getElementById('modalEdit_password2').value;
        var userPasswordVal = 1
    }else{
        var userPassword = document.getElementById('modalEdit_password').value;
        var userPasswordVal = 0
    }
    

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("user_id", userId);
    formData.append("user_name", userName);
    formData.append("user_lstname", userLastName);
    formData.append("user_tel", userPhone);
    formData.append("user_email", userEmail);
    formData.append("user_password", userPassword);
    formData.append("user_passwordval", userPasswordVal);
    formData.append("user_type", userType);
    formData.append("user_state", userState);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                $('#modalEdit').hide();
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<a href='javascript: ReloadPage();' class='btn btn-ss-normal'>Aceptar</a>";
                msg.innerHTML = "<center><p>Información actualizada con éxito</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            } else {
                $('#modalEdit').hide();
                document.getElementById('SaveEdit').classList.remove("backText");
                document.getElementById('SavingEdit').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Error al actualizar información.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", baseurl + "users/edit");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function DeleteUser(id) {

    var btns = document.getElementById('btns');
    btns.innerHTML = '<a class="btn btn-ss-normal disabled" href="#" role="button"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Eliminando...</a>';

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<a href='javascript: ReloadPage();' class='btn btn-ss-normal'>Aceptar</a>";
                msg.innerHTML = "<center><p>Información eliminada con éxito</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            } else {
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Error al eliminar la información</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", baseurl + "users/" + id);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();
}

function SaveUser() {

    var userName = document.getElementById('modalEdit_name').value;
    var userLastName = document.getElementById('modalEdit_lastName').value;
    var userPhone = document.getElementById('modalEdit_phone').value;
    var userEmail = document.getElementById('modalEdit_email').value;
    var userPassword = document.getElementById('modalEdit_password2').value;
    var userType = document.getElementById('modalEdit_type').value;
    var userState = document.getElementById('modalEdit_state').value;

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("user_name", userName);
    formData.append("user_lstname", userLastName);
    formData.append("user_tel", userPhone);
    formData.append("user_email", userEmail);
    formData.append("user_password", userPassword);
    formData.append("user_type", userType);
    formData.append("user_state", userState);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                $('#modalEdit').hide();
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<a href='javascript: ReloadPage();' class='btn btn-ss-normal'>Aceptar</a>";
                msg.innerHTML = "<center><p>Información registrada con éxito</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            } else {
                $('#modalEdit').hide();
                document.getElementById('SaveEdit').classList.remove("backText");
                document.getElementById('SavingEdit').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Error al registrar información.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", baseurl + "users");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function SaveAppUser(idapp, iduser, check) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("app_id", idapp);
    formData.append("user_id", iduser);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                check.disabled = false;
            } else {
                check.disabled = false;
                check.checked == false
            }
        }
    });

    xhr.open("POST", baseurl + "appuser");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function DeleteAppUser(idapp, iduser, check) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("app_id", idapp);
    formData.append("user_id", iduser);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                check.disabled = false;
            } else {
                check.disabled = false;
                check.checked == true
            }
        }
    });

    xhr.open("POST", baseurl + "appuser/" + idapp + "/" + iduser);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}