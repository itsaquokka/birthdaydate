const button = document.getElementById('askButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.classList.remove('hidden');
    button.disabled = true;
    button.textContent = "💖";
});
