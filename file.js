// Listten for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // Get values
    var email = getInputVal('emailA');
    var phone = getInputVal('phone');

    
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
