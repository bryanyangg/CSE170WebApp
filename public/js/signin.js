function initUsers() {
    if (getUsers() == undefined) {
        localStorage.setItem("users", JSON.stringify({
            "default": {
                pass: "",
                name: "Default User",
                profilepic: 'https://aiaa.nmsu.edu/files/2016/09/noprofile.gif',
                loc: "La Jolla, CA",
                phone: "123-456-7890"
            }
        }));
    }
}
function getUsers() {
    var users = localStorage.getItem("users");
    // check for undefined notes
    if (users != undefined) 
        return JSON.parse(users);
}

$(document).ready(function(){
    initUsers();
    console.log('ready');
    $('#btnLogin').click(function (){
        var email = document.getElementById("defaultForm-email").value;
        var pass = document.getElementById("defaultForm-pass").value;
        console.log('click');
        users = getUsers();
        if(email == "") {
            localStorage.setItem("user", "default");
            window.location.href = "index.html";
        }
        else if((email in users) && users[email]["pass"] == pass) {
            localStorage.setItem("user", email); // hella insecure
            window.location.href = "index.html";
        } else {
            alert("Unable to log in. Error in one or multiple fields.");
        }
    });

})

