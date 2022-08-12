
$(document).ready(function () {
    //alert("github");
});





function get_github() {
    bloquear();
    var action = $("#get_github").val();
    $('#header ul').empty();

    $.ajax({
        type: "POST",
        url: action,
        content: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        timeout: 1333000,
        data: "",
        success: function (data_) {
            try {
                
                console.log(data_);
                var cantidad_archivos_repositorio_github = $("#cantidad_archivos_repositorio_github").val();
                for (let i = 0; i < cantidad_archivos_repositorio_github; i++) {
                    let numeracion = i + 1;
                    $("#header ul").append('<li><span class="message">' + numeracion+'. ' + data_[i].fullName + '</span></li>');
                }


                //$("#resultado_login1").html("Login correcto.");
                desbloquear();
            }
            catch (err) {
                fallo();
            }
        },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        fallo();
        console.log(textStatus);

    }).always(function () {
        console.log("always");
    });

    function fallo() {
        $("#resultado_login1").html("Error al cargar desde el api!.");
        desbloquear();
    }

    function bloquear() {
        $.blockUI({ message: '<br><h4>Cargando...</h4><br/><br/>' });
    }


    function desbloquear() {
        $.unblockUI();
    }

}