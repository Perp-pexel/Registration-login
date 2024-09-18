
// Select form by id
const loginForm = document.querySelector('#login-form');
// console.log(loginForm)
//  Handle form submit event
loginForm.addEventListener('Submit', function (event) {
    console.log(event.target);
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    console.log(
        formData.get("username","email"),
        formData.get("password"),
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account login succesfully!';

});