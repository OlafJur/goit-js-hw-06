const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  const textInputValue = textInput.value;
  if (textInputValue === 6) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
