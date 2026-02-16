// ---------- PASSWORD LOGIC ----------
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

const SECRET_CODE = "04052025"; 

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

// ---------- YES / NO BUTTON LOGIC ----------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.getElementById('messageContainer');

noBtn.addEventListener('mouseenter', () => {
    noBtn.textContent = "HOW DARE U CHOOSE NO 😡";

    const containerRect = container.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - noBtn.offsetWidth);
    const y = Math.random() * (containerRect.height - noBtn.offsetHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    startConfetti();
    yesBtn.disabled = true;
    noBtn.disabled = true;
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});

// ---------- CONFETTI EFFECT ----------
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function random(min,max){ return Math.random()*(max-min)+min; }

function createConfetti() {
    for(let i=0;i<150;i++){
        confettiParticles.push({
            x: random(0,canvas.width),
            y: random(0,canvas.height),
            r: random(2,6),
            d: random(10,30),
            color: `hsl(${random(0,360)},100%,50%)`,
            tilt: random(-10,10),
            tiltAngleIncremental: random(0.05,0.12),
            tiltAngle: 0
        });
    }
}

function drawConfetti(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<confettiParticles.length;i++){
        let p = confettiParticles[i];
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
        ctx.stroke();
    }
    updateConfetti();
}

function updateConfetti(){
    for(let i=0;i<confettiParticles.length;i++){
        let p = confettiParticles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r/2)/2;
        p.x += Math.sin(0);
        p.tilt = Math.sin(p.tiltAngle) * 15;

        if(p.y > canvas.height){
            p.y = -10;
            p.x = random(0,canvas.width);
        }
    }
}

let confettiAnimation;

function startConfetti(){
    createConfetti();
    confettiAnimation = setInterval(drawConfetti, 20);
}
