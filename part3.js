const hoverBox = document.getElementById('hover-box');
const originalBg = getComputedStyle(hoverBox).backgroundColor || '';
hoverBox.addEventListener('mouseover', () => {
hoverBox.style.backgroundColor = '#46ffcbff';
});
hoverBox.addEventListener('mouseout', () => {
hoverBox.style.backgroundColor = '';
});


const liveInput = document.getElementById('input');
const liveValue = document.getElementById('value');
liveInput.addEventListener('keyup', (e) => {
liveValue.textContent = e.target.value;
});


const form = document.getElementById('form');
const fName = document.getElementById('name');
const fEmail = document.getElementById('email');
const fPass = document.getElementById('password');
const formError = document.getElementById('error');

form.addEventListener('submit', (e) => {
formError.textContent = '';
if (!fName.value.trim() || !fEmail.value.trim() || !fPass.value.trim()) {
e.preventDefault();
formError.textContent = 'Please fill in all fields before submitting!!!!';
}
});