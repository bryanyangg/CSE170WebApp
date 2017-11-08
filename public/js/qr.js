$(document).ready(function(){
    var qrdialog = $( "#qr-dialog" ).dialog({
        dialogClass: "qrPopup",
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Ok:{
                text: "Ok",
                class: "btn btn-primary btn-rounded waves-effect waves-light text-center",
                click: function() {
                    qrdialog.dialog( "close" );
                }
            }
        }
    });

    $(".qr").click(function() {
        qrdialog.dialog( "open" );
    });
})
