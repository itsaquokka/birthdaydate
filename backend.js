// ---------- PASSWORD LOGIC ----------
const passwordContainer = document.getElementById('passwordContainer');
const messageContainer = document.getElementById('messageContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMsg = document.getElementById('errorMsg');

const SECRET_CODE = "04052025"; // example: important date

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

// scales
let yesScale = 1;
let noScale = 1;

noBtn.addEventListener('click', () => {
    noScale *= 0.8; // shrink 20%
    noBtn.style.transform = `scale(${noScale})`;

    yesScale *= 1.2; // grow 20%
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener('click', () => {
    startConfetti();
    yesBtn.disabled = true;
    noBtn.disabled = true;
    alert("Yay! 💖 Can’t wait for our celebration! 🎉");
});

// ---------- CONFETTI + HEARTS ----------
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min,max){ return Math.random()*(max-min)+min; }

function createParticles() {
    const colors = ['#ff4d6d','#ff6f91','#ffcc00','#ff99c8','#ff85a2'];
    for(let i=0;i<150;i++){
        particles.push({
            x: random(0,canvas.width),
            y: random(-canvas.height,0),
            r: random(5,12),
            color: colors[Math.floor(Math.random()*colors.length)],
            tilt: random(-10,10),
            type: Math.random() < 0.3 ? 'heart' : 'circle', // 30% hearts
            tiltAngleIncrement: random(0.05,0.12),
            tiltAngle: 0
        });
    }
}

function drawParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.fillStyle = p.color;
        if(p.type==='circle'){
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
        } else { // heart
            drawHeart(p.x,p.y,p.r);
        }
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += (Math.cos(p.tiltAngle)+3)/2;
        p.x += Math.sin(p.tiltAngle);

        if(p.y>canvas.height) p.y=-10;
        if(p.x>canvas.width) p.x=0;
    });
    requestAnimationFrame(drawParticles);
}

function drawHeart(x,y,size){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size/2, x, y + size*0.8, x, y + size);
    ctx.bezierCurveTo(x, y + size*0.8, x + size, y + size/2, x + size, y);
    ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
    ctx.fillStyle = 'red';
    ctx.fill();
}

function startConfetti(){
    createParticles();
    drawParticles();
}
