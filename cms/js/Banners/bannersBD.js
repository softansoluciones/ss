function Load_Banners() {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    document.getElementById('content_banners').innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            //console.log(this.responseText);
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                var html = document.getElementById('content_banners');
                html.innerHTML = '';
                var contid = 1;

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<div class="card mb-3">\n\
                    <img src="'+baseurlFiles+datos.Response[i].content_path + '" class="card-img-top" alt="...">\n\
                    <div class="card-body">\n\
                    <h5 class="card-title">' + datos.Response[i].content_title + '</h5>\n\
                    <div class="row">\n\
                    <p class="card-text col"><strong>Posición: </strong>' + datos.Response[i].content_hierarchy + '</p>\n\
                    </div>\n\
                    </div>\n\
                    <div class="card-footer footer-normal">\n\
                    <a href="javascript: ShowModalEdit(' + datos.Response[i].content_id + ')" class="btn btn-ss-normal btn-sm">Editar</a>\n\
                    <a href="javascript: ValidateDelete(' +"'"+ datos.Response[i].content_identifier +"'"+ ')" class="btn btn-danger btn-sm">Eliminar</a>\n\
                    </div>\n\
                    </div>';
                    contid++;
                }
            } else {
                var html = document.getElementById('content_banners');
                html.innerHTML = '';
                html.innerHTML = '<center>No existe información</center>';
            }
        }
    });

    xhr.open("GET", baseurl + "contents/type/1");
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
                document.getElementById('modalEdit_image').innerHTML = '<center><img src="'+baseurlFiles+datos.Response[0].content_path + '" class="card-img-top" alt="'+datos.Response[0].content_title+'"></center>';
                document.getElementById('modalEdit_spath').value = datos.Response[0].content_path;
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

