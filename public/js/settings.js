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

function saveUser(user, name, profilepic, loc, phone, profilepic) {
    var users = getUsers();
    users[user]['name'] = name;
    users[user]['profilepic'] = profilepic;
    users[user]['loc'] = loc;
    users[user]['phone'] = phone;
    users[user]['profilepic'] = profilepic;
    localStorage.setItem("users", JSON.stringify(users));
}

function populateSettingsDialog() {
    var curruser = getCurrentUser();
    
    document.getElementById('settings-name').value = curruser['name'];
    document.getElementById('settings-phone').value = curruser['phone'];
    document.getElementById('settings-loc').value = curruser['loc'];
    document.getElementById('settings-email').value = curruser['email'];
    document.getElementById('settings-profilepic').value = curruser["profilepic"];

    $('#settings-profilepic').css("background-image", "url('" + curruser["profilepic"] + "')");

    $("#settings-profilepic").click(function(){
        var img_url = prompt("Url of image?");
        document.getElementById('settings-profilepic').value = img_url;
        $(this).css("background-image", "url('" + curruser["profilepic"] + "')");
    });
}

$(document).ready(function(){
    $('#settings').load('settings.html', function(){

        $('#settings-save').click(function() {
                var curruser = getCurrentUser();
                curruser['name'] = document.getElementById('settings-name').value;
                curruser['phone'] = document.getElementById('settings-phone').value;
                curruser['loc'] = document.getElementById('settings-loc').value;
                curruser['email'] = document.getElementById('settings-email').value;
                curruser['profilepic'] = document.getElementById('settings-profilepic').value;
                saveUser(localStorage.getItem("user"), curruser["name"], curruser["profilepic"], curruser["loc"], curruser["phone"])
                location.reload(); // update information visually
            }
        );
        $('#settings-cancel').click(function() {
            populateSettingsDialog(); // retrieve original info
        });
        
        $(".settings").click(function(){
            populateSettingsDialog();
            $( "#settings-dialog" ).modal('show');
        });
    });
});
