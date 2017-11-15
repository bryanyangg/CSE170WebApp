function initUsers() {
    if (getUsers() == undefined) {
        localStorage.setItem("users", JSON.stringify({
            default: {
                pass: "",
                name: "Default User",
                email: "123@a.com",
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

function saveUser(user, pass) {
    var users = getUsers();
    users[user] = {};
    users[user]['pass'] = pass;
    users[user]['name'] = "Jane Doe";
    users[user]['profilepic'] = 'https://aiaa.nmsu.edu/files/2016/09/noprofile.gif';
    users[user]['loc'] = "San Diego, CA";
    users[user]['phone'] = "123-456-7890";
    users[user]['email'] = user;
    localStorage.setItem("users", JSON.stringify(users));
}

$(document).ready(function(){
    initUsers();
    $('#btnSignup').click(function (){
        var email = document.getElementById("defaultForm-email").value;
        var pass = document.getElementById("defaultForm-pass").value;
        var pass2 = document.getElementById("defaultForm-pass2").value;

        users = getUsers();
        if(!(email in users) && pass == pass2) {
            saveUser(email, pass);// todo: hella insecure...
            localStorage.setItem("user", email); // login automatically
            window.location.href = "index.html"
        } else {
            alert("Unable to sign up. Error in one or multiple fields.");
        }
    });

})

