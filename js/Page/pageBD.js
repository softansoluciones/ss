function Load_Banners(section, enviroment) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    document.getElementById('carouselDivPage').innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    var html = document.getElementById('carouselDivPage');
                    html.innerHTML = '';
                    var contid = 1;

                    for (var i = 0; i < datos.Response.length; i++) {

                        if (datos.Response[i].content_aditionalinfo == "#") {
                            html.innerHTML += '<div class="' + (contid == 1 ? "carousel-item active" : "carousel-item") + '">\n\
                        <img src="'+ baseurlFiles + datos.Response[i].content_path + '" class="d-block w-100" alt="' + datos.Response[i].content_title + '">\n\
                        </div>';
                        } else {
                            html.innerHTML += '<div class="' + (contid == 1 ? "carousel-item active" : "carousel-item") + '">\n\
                        <a href="'+ datos.Response[i].content_aditionalinfo + '" target="_blank">\n\
                        <img src="'+ baseurlFiles + datos.Response[i].content_path + '" class="d-block w-100" alt="' + datos.Response[i].content_title + '">\n\
                        </a>\n\
                        </div>';
                        }
                        contid++;
                    }

                } else {
                    var html = document.getElementById('carouselDivPage');
                    html.innerHTML = '';
                    html.innerHTML = '<center>No existe información</center>';
                }
            } else {
                document.getElementById('page_requirements_customer_send').classList.remove("backText");
                document.getElementById('page_requirements_customer_sending').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Ha ocurrido un error al cargar la información, por favor intenta más tarde.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
                var html = document.getElementById('carouselDivPage');
                html.innerHTML = '';
                html.innerHTML = '<center>No existe información</center>';
            }
        }
    });

    xhr.open("GET", baseurl + "page/content/1/" + section + "/" + enviroment);
    xhr.setRequestHeader("authtoken", 'A2A7E240SOFTAN-33F7SOL-4DD2-9C34-49270B9F945E');
    xhr.setRequestHeader("user_id", 'webPage');
    xhr.send();
}

function Load_Projects(section, enviroment) {

    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    document.getElementById('projects_deck').innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    if (datos.Response == 228) {
                        window.location = "noauth.html";
                    }

                    var html = document.getElementById('projects_deck');
                    html.innerHTML = '';
                    var contid = 1;

                    for (var i = 0; i < 3; i++) {
                        html.innerHTML += '<div class="card shadow">\n\
                    <img src="'+ baseurlFiles + datos.Response[i].content_path + '" class="card-img-top" alt="...">\n\
                    <div class="card-body">\n\
                    <h5 class="card-title">'+ datos.Response[i].content_title + '</h5>\n\
                    <p style="font-size: 12px;" class="card-text">'+ datos.Response[i].content_text + '</p>\n\
                    </div>\n\
                    <div class="card-footer">\n\
                    <a href="'+ datos.Response[i].content_aditionalinfo + '" target="_blank">\n\
                    VER</a>\n\
                    </div>\n\
                    </div>\n\
                    </div>';
                        contid++;
                    }

                } else {
                    var html = document.getElementById('projects_deck');
                    html.innerHTML = '';
                    html.innerHTML = '<center>No existe información</center>';
                }
            } else {
                document.getElementById('page_requirements_customer_send').classList.remove("backText");
                document.getElementById('page_requirements_customer_sending').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>Ha ocurrido un error al cargar la información, por favor intenta más tarde.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
                var html = document.getElementById('projects_deck');
                html.innerHTML = '';
                html.innerHTML = '<center>No existe información</center>';
            }
        }
    });

    xhr.open("GET", baseurl + "page/content/2/" + section + "/" + enviroment);
    xhr.setRequestHeader("authtoken", 'A2A7E240SOFTAN-33F7SOL-4DD2-9C34-49270B9F945E');
    xhr.setRequestHeader("user_id", 'webPage');
    xhr.send();
}

function SaveContact() {

    var contactName = document.getElementById('page_contact_name').value;
    var contactLastName = document.getElementById('page_contact_lastName').value;
    var contactEmail = document.getElementById('page_contact_email').value;
    var contactPhone = document.getElementById('page_contact_phone').value;
    var contactComment = document.getElementById('page_contact_comments').value;
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("contact_name", contactName);
    formData.append("contact_lastname", contactLastName);
    formData.append("contact_email", contactEmail);
    formData.append("contact_phone", contactPhone);
    formData.append("contact_comment", contactComment);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (xhr.status == 200) {
                var datos = JSON.parse(this.responseText)
                if (datos.Response != 0) {
                    if (datos.Response == 228) {
                    }
                    var btns = document.getElementById('btns');
                    var msg = document.getElementById('msg');
                    btns.innerHTML = "<a href='javascript: ReloadPage();' class='btn btn-ss-normal' data-dismiss='modal'>Aceptar</a>";
                    msg.innerHTML = "<center><p>Hemos recibido tus comentarios, pronto nos comunicaremos contigo.</p></center>";
                    $('#modal_msg').modal({
                        backdrop: 'static',
                        keyboard: true,
                        show: true
                    });
                    document.getElementById('page_contact_name').value = "";
                    document.getElementById('page_contact_lastName').value = "";
                    document.getElementById('page_contact_email').value = "";
                    document.getElementById('page_contact_phone').value = "";
                    document.getElementById('page_contact_comments').value = "";
                    document.getElementById('page_contact_send').classList.remove("backText");
                    document.getElementById('page_contact_sending').classList.add("backText");
                } else {
                    document.getElementById('page_contact_send').classList.remove("backText");
                    document.getElementById('page_contact_sending').classList.add("backText");
                    var btns = document.getElementById('btns');
                    var msg = document.getElementById('msg');
                    btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                    msg.innerHTML = "<center><p>No hemos podido recibir tu comentario, por favor vuelve a intentarlo.</p></center>";
                    $('#modal_msg').modal({
                        backdrop: 'static',
                        keyboard: true,
                        show: true
                    });
                }
            } else {
                document.getElementById('page_contact_send').classList.remove("backText");
                document.getElementById('page_contact_sending').classList.add("backText");
                var btns = document.getElementById('btns');
                var msg = document.getElementById('msg');
                btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
                msg.innerHTML = "<center><p>No hemos podido recibir tu comentario, por favor vuelve a intentarlo.</p></center>";
                $('#modal_msg').modal({
                    backdrop: 'static',
                    keyboard: true,
                    show: true
                });
            }
        }
    });

    xhr.open("POST", baseurl + "contact");
    xhr.setRequestHeader("authtoken", Gustoken);
    xhr.setRequestHeader("user_id", GuserLogged);
    xhr.send(formData);
}