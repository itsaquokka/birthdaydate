// PASSWORD LOGIC
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

const SECRET_CODE = "14032026"; // your date

submitPassword.addEventListener('click', () => {
    if(passwordInput.value === SECRET_CODE){
        passwordContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
});

// allow Enter key
passwordInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") submitPassword.click();
});

// YES / NO BUTTONS
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.button-container');

noBtn.addEventListener('mouseenter', () => {
    noBtn.textContent = "HOW DARE U CHOOSE NO 😡";

    // get container dimensions
    const rect = container.getBoundingClientRect();
    const x = Math.random() * (rect.width - noBtn.offsetWidth);
    const y = Math.random() * (rect.height - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});
