const inputs = document.getElementsByTagName("input");
inputs[0].addEventListener("change", () => {
  console.log(inputs[0].value);
});
inputs[1].addEventListener("change", () => {
  console.log(inputs[1].value);
});

function submitForm(event) {
  event.preventDefault();
  alert(`welcome ${inputs[0].value}`);
}
