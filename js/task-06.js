


let textInput = document.querySelector("#validation-input");
let lengthEl = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
    if (textInput.value.length === Number(lengthEl)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");   
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});


