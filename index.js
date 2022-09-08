const logInButton = document.getElementById('log-in');
const signUpLink = document.getElementById('sign-up-link');
const signUpSection = document.querySelector('.sign-ups');
const signUpButton = document.getElementById('sign-up');
const logInLink = document.getElementById('log-in-link');

const navLogIn = document.getElementById('navLogIn');
const navSignUp = document.getElementById('navSignUp');
const logInSection = document.querySelector('.log-ins');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');
const closeSignUpButton = document.querySelector('.close-sign-up-button');
const searchIcon = document.getElementById('searchbtn');
const formElement = document.getElementById('hide_form')
const lostElement = document.getElementById('lostbtn')
const elementForm = document.getElementById('l-hide_form')
const button = document.getElementById("finder");

button.addEventListener("click", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your browser does not support";
    }
});
 function onSuccess(position) {
    let {latitude, longitude} = position.coords;
    console.log(latitude, longitude)
    https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR-API-KEY 
    fetch()
 }
function onError(error) {
    if(error.code == 1) {
        button.innerText = 'You denied the request';
    }else if(error.code == 2){
        button.innerText = 'location not available ';

    }else {
        button.innerText = 'Something went wrong';
    }
    button.setAttribute("disabled", "true");
}
// the navigation login button will call the login section
navLogIn.addEventListener('click', function () {
    logInSection.style.display = 'block';
    container.style.opacity = '0.1';
});
 //the search document icon will call the descritption form
searchIcon. addEventListener('click', () => {
    if(formElement.style.display === 'none') {
        formElement.style.display = 'block';
        

    }else{
        formElement.style.display = 'none';
        
    }
    
});

lostElement. addEventListener('click', () => {
    if(elementForm.style.display === 'none') {
        elementForm.style.display = 'block';
        

    }else{
        elementForm.style.display = 'none';
        
    }
    
});

//the close button closes the login section .
closeButton.addEventListener('click', function () {
    logInSection.style.display = 'none';
    container.style.opacity = '1';
});
// call up sign up section
signUpLink.addEventListener('click', function () {
    logInSection.style.display = 'none';
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';
});
// nav sign up will call up sign up section
navSignUp.addEventListener('click', function () {
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';
});
//the close button closes the sign up section .
closeSignUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';
});

//the log in link will call the login section
logInLink.addEventListener('click', function () {
    logInSection.style.display = 'block';
    signUpSection.style.display = 'none';
});

// the sign up button will call the sign up section
signUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';
    // property.style.display = 'block';
});