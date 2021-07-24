const loginButton = document.querySelector("#login-button");
const signInButton = document.querySelector("#sign-up-button");



function clearAllInputFields() {
    const inputs = document.querySelectorAll("input");
    
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].type === "submit") {
            continue;
        } else {
            inputs[i].value = "";
        }
    }
}


function setActiveButton(e) {
    // See is the button which called the event already active.
    // if it is do nothing.
        
    if (e.target.classList.contains("active")) {
        // this one is already live so no need to do anything.
        return;
    }
    
    clearAllInputFields();

    loginButton.classList.toggle("active");
    signInButton.classList.toggle("active");

    const formHeading = document.getElementById("form-heading");
    const submitButton = document.getElementById("submit-button");

    if (formHeading.textContent === "log in.") {
        formHeading.textContent = "sign up.";
        submitButton.value = "sign up";
    } else {
        formHeading.textContent = "log in.";
        submitButton.value = "log in";
    };  
}



module.exports = {setActiveButton, clearAllInputFields};