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

    const rect = container.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    let x, y;
    let attempts = 0;

    do {
        x = Math.random() * (rect.width - noBtn.offsetWidth);
        y = Math.random() * (rect.height - noBtn.offsetHeight);
        attempts++;
        // Make sure No button does not overlap Yes button
    } while (
        x < yesRect.width + 20 && y < yesRect.height + 20 && attempts < 100
    );

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});