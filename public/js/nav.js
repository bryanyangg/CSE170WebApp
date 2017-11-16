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
    console.log('document ready in nav');
    $('#nav').load('nav.html', function(){
        console.log("loaded the nav");
        var curruser = getCurrentUser();
        if (curruser != undefined) { // logged in
            document.getElementById("nav-username").innerHTML = getCurrentUser()["name"];
            document.getElementById("nav-logout").click = function(){
                delete localStorage.user;
                window.location.href = "login.html";
            }
        } else { // not logged in
            document.getElementById("nav-username").innerHTML = "Login Sign Up"
        }
        
        // switch(window.location.href.split("/")[-1]) {
        //     case "index"
        // }
    });
})
