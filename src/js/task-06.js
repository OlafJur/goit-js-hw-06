const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  const dataLength = textInput.getAttribute("data-length");
  const textInputLength = textInput.value.length;

  if (textInputLength === parseInt(dataLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
