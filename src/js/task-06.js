
const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
        console.log(inputRef);
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
        console.log(inputRef);
    }
});

