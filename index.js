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
const inpFile = document.getElementById('inpFile');

inpFile.addEventListener("change", function () {
    console.log(myFile.files);
});

button.addEventListener("click", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your browser does not support";
    }
});
 function onSuccess(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude + ' ' + longitude)
    const geoApiUrl = `https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTg4U0JtcHdtQTJCNDhfZnI5dmlOa3FmSzM2Z3xBQ3Jtc0trWXdfQWNwbWtXY2FpZ1MtUW5lb1FTdk1iZjNBcENWYXV2aThwTkRHcVRqTGlNelJ6Z3VxRjc4MlNyYkMxS3dISXJOZjZVVTNYZWlBY1lVM3ZyaXhIUXZLQjItQWh5SDFHRlRycDREUUlzN1lnYl9QNA&q=https%3A%2F%2Fapi.bigdatacloud.net%2Fdata%2Freverse-geocode-client%3F${latitude}%3DXXXXXXXXXXXX%26${longitude}e%3DXXXXXXXXXXXX%26localityLanguage%3Den&v=VK9F8BWrOgY`
    fetch( geoApiUrl)
    .then(res => res.json)
    .then(data => {
        console.log(data)
    })
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