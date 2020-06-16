function Load_ContentTypes() {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    if (datos.Response == 228) {
                        window.location = "noauth.html";
                    }

                    var html = document.getElementById("subMod_3");
                    html.innerHTML = '';
                    for (var i = 0; i < datos.Response.length; i++) {
                        html.innerHTML += '<a id="mod_3_' + datos.Response[i].type_id + '" class="anav nav-item nav-link ml-3 my-1" name="menup" data-usertype="2" href="javascript: View_ContentType(' + datos.Response[i].type_id + ')">' + datos.Response[i].type_name + '</a>';
                    }
                    $('#mod_3_' + GlobalContentType).addClass('active_nav');
                } else {
                    var html = document.getElementById('subMod_3');
                    html.innerHTML = '';
                    html.innerHTML += 'No existe información';
                }
            } else {
                var html = document.getElementById('subMod_3');
                html.innerHTML = '';
                html.innerHTML += 'Error al cargar la información ' + xhr.status;
            }
        }
    });

    xhr.open("GET", baseurl + "contenttype");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("userid", GuserLogged);
    xhr.send();

}