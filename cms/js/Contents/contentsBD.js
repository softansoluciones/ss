function Load_Contents() {

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
                    <td>' + datos.Response[i].content_title + '</td>\n\
                    <td>' + datos.Response[i].content_path + '</td>\n\
                    <td>' + datos.Response[i].type_name + '</td>\n\
                    <td>' + datos.Response[i].section_name + '</td>\n\
                    <td>' + datos.Response[i].content_hierarchy + '</td>\n\
                    <td>' + datos.Response[i].category_name + '</td>\n\
                    <td>' + datos.Response[i].enviroment_name + '</td>\n\
                    <td>' + datos.Response[i].state_name + '</td>\n\
                    <td>' + datos.Response[i].content_date + '</td>\n\
                    <td><center><a href="javascript: ShowModalEdit(' + datos.Response[i].content_id + ')" class="btn btn-ss-normal btn-sm">Editar</a></center></td>\n\
                    <td><center><a href="javascript: ValidateDelete(' + "'" + datos.Response[i].content_identifier + "'" + ')" class="btn btn-danger btn-sm">Eliminar</a></center></td>\n\
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

    xhr.open("GET", baseurl + "contents");
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
                document.getElementById('modalEdit_id').value = datos.Response[0].content_id;
                document.getElementById('modalEdit_title').value = datos.Response[0].content_title;
                document.getElementById('modalEdit_text').value = datos.Response[0].content_text;
                document.getElementById('modalEdit_aditionalinfo').value = datos.Response[0].content_aditionalinfo;
                document.getElementById('modalEdit_extrainfo').value = datos.Response[0].content_extrainfo;
                document.getElementById('modalEdit_path').value = datos.Response[0].content_path;
                document.getElementById('modalEdit_type').value = datos.Response[0].type_id;
                document.getElementById('modalEdit_section').value = datos.Response[0].section_id;
                document.getElementById('modalEdit_hierarchy').value = datos.Response[0].content_hierarchy;
                document.getElementById('modalEdit_state').value = datos.Response[0].state_id;
                document.getElementById('modalEdit_enviroment').value = datos.Response[0].enviroment_id;
                document.getElementById('modalEdit_category').value = datos.Response[0].category_id;
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

    xhr.open("GET", baseurl + "contents/id/" + id);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();
}

function UpdateContent() {
    var contentId = document.getElementById('modalEdit_id').value;
    var contentTitle = document.getElementById('modalEdit_title').value;
    var contentText = document.getElementById('modalEdit_text').value;
    var contentAInfo = document.getElementById('modalEdit_aditionalinfo').value;
    var contentType = document.getElementById('modalEdit_type').value;
    var contentSection = document.getElementById('modalEdit_section').value;
    var contentHierarchy = document.getElementById('modalEdit_hierarchy').value;
    var contentState = document.getElementById('modalEdit_state').value;
    var contentEnviroment = document.getElementById('modalEdit_enviroment').value;
    var contentCategory = document.getElementById('modalEdit_category').value;
    var contentPath = document.getElementById('modalEdit_path');
    var contentEInfo = document.getElementById('modalEdit_extrainfo');

    if (contentPath.value.length == 0) {
        var contentPathF = document.getElementById('modalEdit_spath').value;
    } else {
        var contentPathF = contentPath.files[0];
    }
    if (contentEInfo.value.length == 0) {
        var contentEInfoF = document.getElementById('modalEdit_sextrainfo').value;
    } else {
        var contentEInfoF = document.getElementById('modalEdit_extrainfo').files[0];
    }

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("content_id", contentId);
    formData.append("content_title", contentTitle);
    formData.append("content_data", contentText.replace(/\r?\n/g, "<br>"));
    formData.append("content_aditional", contentAInfo);
    formData.append("content_extra", contentEInfoF);
    formData.append("content_path", contentPathF);
    formData.append("content_type", contentType);
    formData.append("content_section", contentSection);
    formData.append("content_hierarchy", contentHierarchy);
    formData.append("content_state", contentState);
    formData.append("content_environment", contentEnviroment);
    formData.append("content_category", contentCategory);

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

    xhr.open("POST", baseurl + "contents/edit");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function DeleteContent(id) {

    var btns = document.getElementById('btns');
    btns.innerHTML = '<a class="btn btn-ss-normal disabled" href="#" role="button"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Eliminando...</a>';

    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    formData.append("content_id", id);

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

    xhr.open("POST", baseurl + "contents/delete");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}

function SaveContent() {
    var contentTitle = document.getElementById('modalEdit_title').value;
    var contentText = document.getElementById('modalEdit_text').value;
    var contentAInfo = document.getElementById('modalEdit_aditionalinfo').value;
    var contentType = document.getElementById('modalEdit_type').value;
    var contentSection = document.getElementById('modalEdit_section').value;
    var contentHierarchy = document.getElementById('modalEdit_hierarchy').value;
    var contentState = document.getElementById('modalEdit_state').value;
    var contentEnviroment = document.getElementById('modalEdit_enviroment').value;
    var contentCategory = document.getElementById('modalEdit_category').value;
    var contentPath = document.getElementById('modalEdit_path');
    var contentEInfo = document.getElementById('modalEdit_extrainfo');
    if (contentPath.value.length == 0) {
        var contentPathF = document.getElementById('modalEdit_spath').value;
    } else {
        var contentPathF = contentPath.files[0];
    }
    if (contentEInfo.value.length == 0) {
        var contentEInfoF = document.getElementById('modalEdit_sextrainfo').value;
    } else {
        var contentEInfoF = document.getElementById('modalEdit_extrainfo').files[0];
    }


    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("content_title", contentTitle);
    formData.append("content_data", contentText.replace(/\r?\n/g, "<br>"));
    formData.append("content_aditional", contentAInfo);
    formData.append("content_extra", contentEInfoF);
    formData.append("content_path", contentPathF);
    formData.append("content_type", contentType);
    formData.append("content_section", contentSection);
    formData.append("content_hierarchy", contentHierarchy);
    formData.append("content_state", contentState);
    formData.append("content_environment", contentEnviroment);
    formData.append("content_category", contentCategory);

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

    xhr.open("POST", baseurl + "contents");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send(formData);
}
