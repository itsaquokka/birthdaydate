// Secret password logic
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

// Set your secret code here
const SECRET_CODE = "04052025";

submitPassword.addEventListener('click', () => {
    if(passwordInput.value === SECRET_CODE){
        passwordContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
});

// Birthday message button
const button = document.getElementById('askButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.classList.remove('hidden');
    button.disabled = true;
    button.textContent = "💖";
});
