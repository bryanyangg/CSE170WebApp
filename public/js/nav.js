function getCurrentUser() {
    var users = localStorage.getItem("users");
    var curruser = localStorage.getItem("user");
    // check for undefined users
    if (users != undefined && curruser != undefined) {
        users = JSON.parse(users);
        return users[curruser];
    }
}
function getUsers() {
    var users = localStorage.getItem("users");
    // check for undefined notes
    if (users != undefined) 
        return JSON.parse(users);
}

$(document).ready(function(){
    $('#nav').load('nav.html', function(){
        var curruser = getCurrentUser();
        if (curruser != undefined) { // logged in
            document.getElementById("nav-username").innerHTML = getCurrentUser()["name"];
        } else { // not logged in
            $("#nav-signup").parent().css("display", "list-item");
            $("#nav-login").parent().css("display", "list-item");
            $("#nav-username").parent().css("display", "none");
            $(".qr").parent().css("display", "none");
            $("#navbarDropdownMenuLink").parent().css("display", "none");
        }
        $("#navbarDropdownMenuLink").click(function(){
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewSchedule'
            });
        });
        $("#myschedule").click(function(){
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewMySchedule'
            });
        });
        $("#publicschedule").click(function(){
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewPublicSchedule'
            });
        });
        document.getElementById("nav-logout").onclick = function(){
            console.log('logout')
            delete localStorage.user;
            window.location.href = "login.html";
        }
    });
})
