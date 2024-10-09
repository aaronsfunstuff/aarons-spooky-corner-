const canvas = document.getElementById('hauntedRoom');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ghosts = [];
const ghostCount = 10;
const ghostImage = new Image();
const backgroundImage = new Image();

ghostImage.src = 'https://thumbs.dreamstime.com/b/cute-horrible-ghost-hand-drawn-isolated-transparent-png-background-element-halloween-silhouettes-vector-cute-293403475.jpg';
backgroundImage.src = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yMl9oYWxsb3dlZW5fdGhlbWVkX3dhbGxwYXBlcl9wdXJwbGVfYmFja2dyb3VuZF82Yjk4NWUyMC1lZmI5LTQxYTktYjlhOS0zYTZkMGNhNmRjMjJfMS5qcGc.jpg';

function createGhost() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: 0.3
    };
}

for (let i = 0; i < ghostCount; i++) {
    ghosts.push(createGhost());
}

function drawGhost(ghost) {
    ctx.globalAlpha = ghost.opacity;
    ctx.drawImage(ghostImage, ghost.x, ghost.y, ghost.size, ghost.size);
    ctx.globalAlpha = 1;
}

function updateGhost(ghost) {
    ghost.x += ghost.speedX;
    ghost.y += ghost.speedY;

    if (ghost.x < 0 || ghost.x > canvas.width) ghost.speedX *= -1;
    if (ghost.y < 0 || ghost.y > canvas.height) ghost.speedY *= -1;
}

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    
    ghosts.forEach(ghost => {
        updateGhost(ghost);
        drawGhost(ghost);
    });

    requestAnimationFrame(animate);
}

backgroundImage.onload = () => {
    animate();
};
