
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
    // to get base url (localhost)
var pathparts = location.pathname.split('/signup.html');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/signup.html' + pathparts[i]
}
console.log(baseURL);

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

//for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {


    if (!isEmpty()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    if (isEmailExist(signupEmail.value)) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        return false;
    }

    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    };

    signUpArray.push(signUp);
    localStorage.setItem('users', JSON.stringify(signUpArray));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
}





// login
//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    
    if (!isLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    var password = signinPassword.value;
    var email = signinEmail.value;
    var foundUser = signUpArray.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

    if (foundUser) {
        localStorage.setItem('sessionUsername', foundUser.name);
        location.replace('/index.html');
    } else {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>';
    }
}

//  logout
function logout() {
    localStorage.removeItem('sessionUsername')
    location.replace(baseURL + '/login.html')


}