(function() {


    // Initialie Firebase
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBPJyMyLNVR2doHWKKimAkjlnbiDzvGCRk",
        authDomain: "cse170proj.firebaseapp.com",
        databaseURL: "https://cse170proj.firebaseio.com",
        projectId: "cse170proj",
        storageBucket: "cse170proj.appspot.com",
        messagingSenderId: "99353047767"
    };
    firebase.initializeApp(config);

    //Get elements
    const txtEmail = document.getElementById('defaultForm-email');
    const txtPassword = document.getElementById('defaultForm-pass');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');

    // ADD login event

    btnLogin.addEventListener('click', e =>{
        //get email and apss
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promist.catch(e => console.log(e.message));
    });






}());