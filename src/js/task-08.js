const form = document.querySelector(".login-form");
function handleSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("Wszystkie pola powinny zostać wypełnione");
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  form.reset();
}
form.addEventListener("submit", handleSubmit);
