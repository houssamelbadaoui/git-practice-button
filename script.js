const button = document.getElementById("myButton");

let isActive = false;

button.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    button.textContent = "Active";
    button.classList.add("active");
  } else {
    button.textContent = "Hover me";
    button.classList.remove("active");
  }
});
