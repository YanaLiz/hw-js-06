
const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")



  inputRef.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    outputRef.disabled = !event.target.input;
    outputRef.textContent = `${inputValue}`;
  });


 inputRef.addEventListener("input",()=> {
    if (inputRef.value) {
      outputRef.textContent = input.value;
    } else {
      outputRef.textContent = "Anonymous";
    }
 });
console.log(inputRef);