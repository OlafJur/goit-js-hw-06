const rangeInput = document.getElementById("font-size-control");
const textMagic = document.getElementById("text");

rangeInput.addEventListener("input", () => {
  const rangeValue = rangeInput.value;
  textMagic.style.fontSize = rangeValue + "px";
});
