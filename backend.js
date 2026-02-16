// Secret password logic
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

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

// NO button hover: jump + scold
noBtn.addEventListener('mouseenter', () => {
    // Change text to scold him
    noBtn.textContent = "HOW DARE U CHOOSE NO 😡";

    // Random position within container
    const containerRect = messageContainer.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - noBtn.offsetWidth);
    const y = Math.random() * (containerRect.height - noBtn.offsetHeight - 100); // leave space for h1
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES button click: celebrate
yesBtn.addEventListener('click', () => {
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});