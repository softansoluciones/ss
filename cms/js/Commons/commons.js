function get_CategoriesSel(select) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione categoría</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].id + '">' + datos.Response[i]._name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione categoría</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "contents/categories");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}

function get_TypesSel(select) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de contenido</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].id + '">' + datos.Response[i]._name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de contenido</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "contents/types");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}

function get_EnviromentsSel(select) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de entorno</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].id + '">' + datos.Response[i]._name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de entorno</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "common/enviroments");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}

function get_SectionsSel(select) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione sección</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].id + '">' + datos.Response[i]._name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione sección</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "common/sections");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}

function get_StatesSel(select, type) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione estado</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].state_id + '">' + datos.Response[i].state_name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione estado</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "common/statesByTypes/"+type);
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}

function get_UserTypesSel(select) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var datos = JSON.parse(this.responseText)
            if (datos.Response != 0) {
                if (datos.Response == 228) {
                    window.location = "noauth.html";
                }
                
                var html = document.getElementById(select);
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de usuario</option>';

                for (var i = 0; i < datos.Response.length; i++) {
                    html.innerHTML += '<option value="' + datos.Response[i].id + '">' + datos.Response[i]._name + '</option>';
                }
            } else {
                var html = document.getElementById('tabB_Registros');
                html.innerHTML = '';
                html.innerHTML += '<option value="" selected>Seleccione tipo de usuario</option>';
                html.innerHTML += '<option value="">No existe información</option>'
            }
        }
    });

    xhr.open("GET", baseurl + "common/userTypes");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}