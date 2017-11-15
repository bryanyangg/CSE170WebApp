function getCurrentUser() {
    var users = localStorage.getItem("users");
    var curruser = localStorage.getItem("user");
    // check for undefined users
    if (users != undefined) 
        users = JSON.parse(users);
        return users[curruser];
}
function getUsers() {
    var users = localStorage.getItem("users");
    // check for undefined notes
    if (users != undefined) 
        return JSON.parse(users);
}
$(document).ready(function(){
    var qrdialog = $( "#qr-dialog" ).dialog({
        dialogClass: "qrPopup",
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Ok:{
                text: "Close",
                class: "btn btn-primary btn-rounded waves-effect waves-light text-center",
                click: function() {
                    qrdialog.dialog( "close" );
                }
            }
        }
    });

    $(".qr").click(function() {
        var curruser = getCurrentUser();
        document.getElementById('qr-username').value = curruser['name'];
        document.getElementById('qr-phone').value = curruser['phone'];
        document.getElementById('qr-loc').value = curruser['loc'];
        qrdialog.dialog( "open" );
    });
})
