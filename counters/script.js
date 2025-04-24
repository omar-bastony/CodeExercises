document.querySelectorAll('.inc').forEach(btn => {btn.addEventListener('click', () => {
    btn.parentElement.querySelector('.count').innerText++;
})});

document.querySelectorAll('.dec').forEach(btn => {btn.addEventListener('click', () => {
    let count = btn.parentElement.querySelector('.count');
    if (count.innerText != 0) count.innerText--; 
})});