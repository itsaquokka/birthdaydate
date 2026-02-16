// --- PASSWORD LOGIC ---
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

// Set your secret code here
const SECRET_CODE = "14032026"; // Example: the important date

submitPassword.addEventListener('click', () => {
    if(passwordInput.value === SECRET_CODE){
        passwordContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
        errorMsg.classList.add('hidden'); // hide error if previously shown
    } else {
        errorMsg.classList.remove('hidden');
    }
});

// Optional: allow pressing Enter key to submit
passwordInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") submitPassword.click();
});

// --- YES/NO BUTTON LOGIC ---
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// YES hover: make slightly big and threatening
yesBtn.addEventListener('mouseenter', () => {
    yesBtn.style.transform = "scale(1.4) rotate(-5deg)";
    yesBtn.style.backgroundColor = "#ff4d6d";
    yesBtn.style.color = "white";
});
yesBtn.addEventListener('mouseleave', () => {
    yesBtn.style.transform = "scale(1) rotate(0deg)";
    yesBtn.style.backgroundColor = "";
    yesBtn.style.color = "";
});

// NO hover: jump and change text
noBtn.addEventListener('mouseenter', () => {
    noBtn.textContent = "HOW DARE U CHOOSE NO 😡";

    const containerRect = messageContainer.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - noBtn.offsetWidth);
    const y = Math.random() * (containerRect.height - noBtn.offsetHeight - 100); // leave space for h1

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES click: celebrate
yesBtn.addEventListener('click', () => {
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});
