
$(document).ready(function () {
    //logear();
});

function logear() {
    bloquear();
    var action = $("#get_Login").val();
    var username = $("#username").val();
    var password = $("#password").val();

    var data = { "email": "" + username + "", "password": "" + password + "" }
    $.ajax({
        type: "POST",
        url: action,
        content: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        timeout: 1333000,
        data: data,
        success: function (data_) {
            try {
                data_ = data_.data;
                $("#resultado_login1").html("Login correcto.");
                $("#resultado_login2").html("Bienvenido: " + data_.Name + "");
                $("#resultado_login3").html("Su token es: " + data_.Token + "");
                desbloquear();
            }
            catch (err) {
                login_incorrecto();
            }
        },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        login_incorrecto();
        console.log(textStatus);

    }).always(function () {
        console.log("always");
    });

    function login_incorrecto() {
        $("#resultado_login1").html("Login incorrecto!.");
        $("#resultado_login2").html("");
        $("#resultado_login3").html("");
        desbloquear();
    }

    function bloquear() {
        $.blockUI({ message: '<br><h4>Cargando...</h4><br/><br/>' });
    }


    function desbloquear() {
        $.unblockUI();
    }

}