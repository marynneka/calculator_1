window.addEventListener('DOMContentLoaded', () => {
   const inputValue = document.getElementById("user-input");
const keys = document.querySelectorAll('.calc-keys button');

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.classList.contains('numbers')) {
            inputValue.innerText += key.innerText;
        } else if (key.classList.contains('operations')) {
            if (key.innerText === 'AC') {
                inputValue.innerText = '0'; 
            } else if (key.innerText === 'DEL') {
                inputValue.innerText = inputValue.innerText.slice(0, -1);
            } else if (key.innerText === '=') {
                try {
                    inputValue.innerText = eval(inputValue.innerText);
                } catch {
                    inputValue.innerText = 'Error';
                }
            } else {
                inputValue.innerText += key.innerText;
            }
        }
    });
}); 
})

