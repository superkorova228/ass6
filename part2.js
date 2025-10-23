const p = document.getElementById('my-paragraph');
const changeTextBtn = document.getElementById('change-text');
changeTextBtn.addEventListener('click', () => {
p.textContent = 'The paragraph text has been changed!!!!!!!!';
});


const styleBox = document.getElementById('style-box');
const changeBgBtn = document.getElementById('change-bg');
const changeFontBtn = document.getElementById('change-font');
let bgState = 0;
changeBgBtn.addEventListener('click', () => {
const colors = ['#ffb2b2ff', '#c4fedaff', '#e9bcfbff'];
styleBox.style.backgroundColor = colors[bgState % colors.length];
bgState++;
});

let fontBig = false;
changeFontBtn.addEventListener('click', () => {
const text = document.getElementById('box-text');
fontBig = !fontBig;
text.style.fontSize = fontBig ? '20px' : '14px';
});


const list = document.getElementById('item-list');
const addBtn = document.getElementById('add-item');
const removeBtn = document.getElementById('remove-item');
let counter = 1;
addBtn.addEventListener('click', () => {
const li = document.createElement('li');
li.textContent = 'Item ' + counter;
list.appendChild(li);
counter++;
});
removeBtn.addEventListener('click', () => {
if (list.lastElementChild) list.removeChild(list.lastElementChild);
});