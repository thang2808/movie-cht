const noBtn = document.getElementById('no-btn');
const yesBtn = document.querySelector('.btn-yes');
const buttonGroup = document.querySelector('.button-group');

function moveNoButton() {
    const yesRect = yesBtn.getBoundingClientRect();
    const groupRect = buttonGroup.getBoundingClientRect();

    const radius = 120; // khoảng cách quanh nút OK
    const angle = Math.random() * 2 * Math.PI;

    const x = yesRect.left - groupRect.left + Math.cos(angle) * radius;
    const y = yesRect.top - groupRect.top + Math.sin(angle) * 60;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Khi hover → chạy
noBtn.addEventListener('mouseover', moveNoButton);

// Khi click → cũng chạy tiếp
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
});
