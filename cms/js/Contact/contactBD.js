function Load_Contact() {

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
                    <td>' + datos.Response[i].contact_name + ' ' + datos.Response[i].contact_lastname + '</td>\n\
                    <td>' + datos.Response[i].contact_email + '</td>\n\
                    <td>' + datos.Response[i].state_name + '</td>\n\
                    <td><center><a href="javascript: ShowModalEdit(' + datos.Response[i].contact_id + ')" class="btn btn-ss-normal btn-sm">Editar</a></center></td>\n\
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

    xhr.open("GET", baseurl + "contact");
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
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                document.getElementById('modalEdit_id').value = datos.Response[0].contact_id;
                document.getElementById('modalEdit_name').value = datos.Response[0].contact_name;
                document.getElementById('modalEdit_lastName').value = datos.Response[0].contact_lastname;
                document.getElementById('modalEdit_email').value = datos.Response[0].contact_email;
                document.getElementById('modalEdit_state').value = datos.Response[0].state_name;
                document.getElementById('modalEdit_message').value = datos.Response[0].contact_comments;
                
                if(datos.Response[0].state_id == 3){
                    UpdatecontactOpen(id)
                }
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

    xhr.open("GET", baseurl + "contact/id/" + id);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();
}

function Updatecontact() {

    var contactId = document.getElementById('modalEdit_id').value;
    var contactName = document.getElementById('modalEdit_name').value;
    var contactLastName = document.getElementById('modalEdit_lastName').value;
    var contactEmail = document.getElementById('modalEdit_email').value;
    var contactResponse = document.getElementById('modalEdit_response').value;
    var ContactState = 6;
    var check = document.getElementById('modalEdit_check');
    if (check.checked == true) {
        ContactState = 5
      } 

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("contact_id", contactId);
    formData.append("contact_name", contactName);
    formData.append("contact_lastname", contactLastName);
    formData.append("contact_email", contactEmail);
    formData.append("contact_response", contactResponse.replace(/\r?\n/g, "<br>"));
    formData.append("contact_state", ContactState);

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

    xhr.open("POST", baseurl + "contact/edit");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function UpdatecontactOpen(id) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("contact_id", id);
    formData.append("contact_response", "");
    formData.append("contact_state", 4);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
            } else {
                $('#modalEdit').hide();
                document.getElementById('SaveEdit').classList.remove("backText");
                document.getElementById('SavingEdit').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Error al cargar información.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", baseurl + "contact/edit");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}
