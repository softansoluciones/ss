var Globalmodule = sessionStorage.getItem("modulo");
var GlobalContentType = parseInt(sessionStorage.getItem("contetType"));
var GlobalUserid = parseInt(sessionStorage.getItem("id_user"));
var GlobalUserType = parseInt(sessionStorage.getItem("user_type"));
var GlobalUserName = sessionStorage.getItem("user_name");

function get_module() {

    verificacionI();
    var module = Globalmodule

    switch (module) {
        case "1":
            View_ContentForm();
            break;
        case "1.1":
            View_ContentForm();
            break;
        case "2":
            View_Users();
            break;
        case "2.1":
            View_UsersForm();
            break;
        case "3":
            View_ContentType(GlobalContentType);
            break;
        default:
            View_ContentForm();
    }

}

function View_Content() {
    $("#L_contenido").load("contents.html");
    sessionStorage.setItem("modulo", 1);
    removeActive();
    hideSubmenu();
    $('#mod_1').addClass('active_nav');
    $('#mod_1_1').addClass('active_nav');
    $('#subMod_1').show('fast');
}

function View_ContentForm() {
    $("#L_contenido").load("contentsForm.html");
    sessionStorage.setItem("modulo", 1.1);
    removeActive();
    hideSubmenu();
    $('#mod_1').addClass('active_nav');
    $('#mod_1_2').addClass('active_nav');
    $('#subMod_1').show('fast');
}

function View_ContentType(type) {

    switch (type) {
        case 1:
            $("#L_contenido").load("banners.html");
            sessionStorage.setItem("modulo", 3);
            sessionStorage.setItem("contetType", type);
            removeActive();
            hideSubmenu();
            $('#mod_3').addClass('active_nav');
            $('#mod_3_' + type).addClass('active_nav');
            $('#subMod_3').show('fast');
            break;
        case 2:
            $("#L_contenido").load("projects.html");
            sessionStorage.setItem("modulo", 3);
            sessionStorage.setItem("contetType", type);
            removeActive();
            hideSubmenu();
            $('#mod_3').addClass('active_nav');
            $('#mod_3_' + type).addClass('active_nav');
            $('#subMod_3').show('fast');
            break;
        case 3:
            $("#L_contenido").load("contact.html");
            sessionStorage.setItem("modulo", 3);
            sessionStorage.setItem("contetType", type);
            removeActive();
            hideSubmenu();
            $('#mod_3').addClass('active_nav');
            $('#mod_3_' + type).addClass('active_nav');
            $('#subMod_3').show('fast');
            break;
        default:
            $("#L_contenido").load("banners.html");
            sessionStorage.setItem("modulo", 3);
            sessionStorage.setItem("contetType", 1);
            removeActive();
            hideSubmenu();
            $('#mod_3').addClass('active_nav');
            $('#mod_3_' + type).addClass('active_nav');
            $('#subMod_3').show('fast');
    }
}

function View_Users() {
    if (GlobalUserType != 1) {
        $('#mod_2_1').addClass('backText');
        View_UsersForm()
    } else {
        $("#L_contenido").load("users.html");
        sessionStorage.setItem("modulo", 2);
        removeActive();
        hideSubmenu();
        $('#mod_2').addClass('active_nav');
        $('#mod_2_1').addClass('active_nav');
        $('#subMod_2').show('fast');
    }
}

function View_UsersForm() {

    $("#L_contenido").load("usersForm.html");
    sessionStorage.setItem("modulo", 2.1);
    removeActive();
    hideSubmenu();
    $('#mod_2').addClass('active_nav');
    $('#mod_2_2').addClass('active_nav');
    $('#subMod_2').show('fast');
}

function ReloadPage() {
    location.reload(true);
}

function removeActive() {

    var activo1 = document.getElementsByClassName('anav')
    for (var i = 0; i < activo1.length; i++) {
        activo1[i].classList.remove("active_nav");
        activo1[i].classList.remove("active_nav2");
    }
}

function hideSubmenu() {

    $("div[name ='sub_menu']").each(function () {
        $(this).hide("fast");
    });

}

function user_data() {
    document.getElementById('user_name').innerHTML = GlobalUserName;
}