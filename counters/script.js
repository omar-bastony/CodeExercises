document.querySelectorAll('.inc').forEach((btn, idx) => {btn.addEventListener('click', () => {
    btn.parentElement.querySelector('.count').innerText = setCounter[idx].increaseFunction();
})});

document.querySelectorAll('.dec').forEach((btn, idx) => {btn.addEventListener('click', () => {
    btn.parentElement.querySelector('.count').innerText = setCounter[idx].decreaseFunction();
})});

function changeCounter(num) {
    let counter = num;
    return {
        increaseFunction() { return ++counter },
        decreaseFunction() { return --counter },
    }
}

const setCounter = [changeCounter(0), changeCounter(10), changeCounter(100)];