function validacion() {
    var error = 0;
    var name = $("#name").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();


    if (name.trim() == "") {
        alert("Ingrese un nombre");
        $("#name").focus();
        return false;
    }

    if (username.trim() == "") {
        alert("Ingrese un email");
        $("#username").focus();
        return false;
    }

    if (password.trim() == "") {
        alert("Ingrese un password");
        $("#password").focus();
        return false;
    }

    if (password != password2) {
        alert("los password deben ser iguales");
        $("#password2").focus();
        return false;
    }


    return true;
}

function crear_usuario() {
    if (validacion()) {
        bloquear();
        var action = $("#set_CrearUsuario").val();
        var name = $("#name").val();
        var username = $("#username").val();
        var password = $("#password").val();

        var data = { "name": "" + name + "", "email": "" + username + "", "password": "" + password + "" }

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
                    $("#resultado_login1").html("Usuario creado correctamente:");
                    $("#resultado_login2").html("Id: " + data_.Id + "");
                    $("#resultado_login3").html("Name: " + data_.Name + "");
                    $("#resultado_login4").html("Email: " + data_.Email + "");
                    $("#resultado_login5").html("Token: " + data_.Token + "");
                    desbloquear();
                }
                catch (err) {
                    error_al_crear();
                }
            },
        }).fail(function (jqXHR, textStatus, errorThrown) {
            error_al_crear();
            console.log(textStatus);

        }).always(function () {
            console.log("always");
        });
    }



}


function error_al_crear() {
    $("#resultado_login1").html("No se pudo crear el usuario...");
    $("#resultado_login2").html("");
    $("#resultado_login3").html("");
    $("#resultado_login4").html("");
    $("#resultado_login5").html("");
    desbloquear();
}

function bloquear() {
    $.blockUI({ message: '<br><h4>Cargando...</h4><br/><br/>' });
}


function desbloquear() {
    $.unblockUI();
}

