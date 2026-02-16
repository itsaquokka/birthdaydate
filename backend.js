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

    const containerRect = container.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    let x, y;
    let safeDistance = 80; // minimum distance from Yes button
    let attempts = 0;

    do {
        x = Math.random() * (containerRect.width - noBtn.offsetWidth);
        y = Math.random() * (containerRect.height - noBtn.offsetHeight);
        attempts++;
        // calculate distance between centers
        const dx = (x + noBtn.offsetWidth/2) - (yesBtn.offsetLeft + yesBtn.offsetWidth/2);
        const dy = (y + noBtn.offsetHeight/2) - (yesBtn.offsetTop + yesBtn.offsetHeight/2);
        var distance = Math.sqrt(dx*dx + dy*dy);
    } while (distance < safeDistance && attempts < 100);

        noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});