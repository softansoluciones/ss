function validarLogin() {

  document.getElementById('btn_in').classList.add("backText");
  document.getElementById('btn_inLoading').classList.remove("backText");
  var vd = ValidarCampos('log');

  if (vd == true) {
    login();
  } else {
    $.notify(vd, {
      animate: {
        enter: 'animated fadeInRight',
        exit: 'animated fadeOutRight',
        position: 'absolute'
      }
    });
    document.getElementById('btn_in').classList.remove("backText");
  document.getElementById('btn_inLoading').classList.add("backText");
  }

}

function login() {
  var user = document.getElementById("user").value;
  var password = hex_md5(document.getElementById("pass").value);

  var formData = new FormData();

  formData.append("user_email", user);
  formData.append("user_password", password);

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var datos = JSON.parse(this.responseText)
      if (datos.Response != 0 && datos.Response[0].RESPONSEID != 0) {
        Create_TokenLogin(datos.Response[0].user_id, datos.Response[0].user_name, datos.Response[0].user_lstname, datos.Response[0].type_name, datos.Response[0].user_type)
      } else {
        debugger
        var btns = document.getElementById('btns');
        var msg = document.getElementById('msg');
        btns.innerHTML = "<input data-dismiss='modal' aria-label='Close' class='btn btn-ss-normal' value='Aceptar'/>";
        msg.innerHTML = "<center><p>" + datos.Response[0].RESPONSETXT + "</center>";
        $('#modal_msg').modal({
          backdrop: 'static',
          keyboard: true,
          show: true
        });
        document.getElementById('btn_in').classList.remove("backText");
        document.getElementById('btn_inLoading').classList.add("backText");
      }
    }
  });

  xhr.open("POST", baseurl + 'users/login');
  xhr.send(formData);

}

function Create_TokenLogin(user_id, user_name, user_lstname, type_name, user_type) {

  var data = null;
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var datos = JSON.parse(this.responseText)
      if (datos.Response != 0) {
        sessionStorage.setItem('token', datos.Response[0].token)
        sesionUs(user_id, user_name, user_lstname, type_name, user_type);
      } else {
        if (response.Response == 228) {
          window.location = 'noauth';
        }
      }
    }
  });

  xhr.open("GET", baseurl + 'tokens/' + user_id);
  xhr.send(data);
}

function sesionUs(user_id, user_name, user_lstname, type_name, user_type) {
  sessionStorage.setItem("ses_estado", "SsCms");
  sessionStorage.setItem("user_id", user_id);
  sessionStorage.setItem("user_name", user_name + " " + user_lstname);
  sessionStorage.setItem("type_name", type_name);
  sessionStorage.setItem("user_type", user_type);
  window.location = 'administrador';
}

function ReloadPage() {
  location.reload(true);
}