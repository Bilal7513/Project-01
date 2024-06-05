// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to update class and message for error
function showError(input, message) {
    // Get the parent element of the (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
}

// Function to update class for success
function showSucess(input){
    // Get the parent element of the (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
}

// Function to check is email is valid 
function isValidEmail(email){
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}

// Function to check if required field have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            console.log(input.id);
            showError(input,`${getFieldId(input)} is required`);
        } else{
            showSucess(input);
        }
    })
}

// Function to check lemght of input field
function checkLenght(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldId(input)} needs to be ${min} characters`);
    }
}

// Function to get id of the input field with proper case
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
//Create event listener from submit button
form.addEventListener('submit', function(e){
    // Stop page on reloading on submit
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLenght(username,3,10);
    checkLenght(password,6,30);
    checkLenght(password2,6,30);
})