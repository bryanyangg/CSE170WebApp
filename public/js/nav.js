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
        if(window.location.href.includes("index") || window.location.href.includes("about") || !window.location.href.includes(".html")) {
            $("#home").css("font-weight", "bold");
        } else if (window.location.href.includes("calendar")) {
            $("#navbarDropdownMenuLink").css("font-weight", "bold");
            $("#myschedule").css("font-weight", "bold");
        } else if (window.location.href.includes("guest")) {
            $("#navbarDropdownMenuLink").css("font-weight", "bold");
            $("#publicschedule").css("font-weight", "bold");
        }
        document.getElementById("nav-logout").onclick = function(){
            console.log('logout')
            delete localStorage.user;
            window.location.href = "login.html";
        }
        $("#navbarDropdownMenuLink").click(function(){
            console.log('click')
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewSchedule',
                transport: 'beacon'
            });
            
        });
        $("#myschedule").click(function(){
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewMySchedule',
                transport: 'beacon',
                hitCallback: function() {
                    window.location.href = "calendar.html";
                }
            });
        });
        $("#publicschedule").click(function(){
            ga('send', 'event', {
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: 'ViewPublicSchedule',
                transport: 'beacon',
                hitCallback: function() {
                    window.location.href = "guest.html";
                }
            });
        });


    });
})
