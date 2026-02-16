// ---------- PASSWORD LOGIC ----------
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

const SECRET_CODE = "04052025"; // example date

submitPassword.addEventListener('click', () => {
    if(passwordInput.value === SECRET_CODE){
        passwordContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
});

passwordInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") submitPassword.click();
});

// ---------- YES / NO BUTTONS ----------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// scales
let yesScale = 1;
let noScale = 1;

noBtn.addEventListener('click', () => {
    // shrink No
    noScale *= 0.8;
    noBtn.style.transform = `scale(${noScale})`;

    // grow Yes
    yesScale *= 1.2;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener('click', () => {
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});
