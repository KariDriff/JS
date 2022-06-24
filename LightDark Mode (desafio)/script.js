function changeMode() {
 changeClasses();
 changeText();
}

function changeClasses() {
 button.classList.toggle(darkModeClass);
 h1.classList.toggle(darkModeClass);
 body.classList.toggle(darkModeClass);
 footer.classList.toggle(darkModeClass);
}

function changeText() {
 const lightMode = "Dark Mode: ";
 const darkMode = "Dark Mode: ";

 if (button.classList.contains(darkModeClass)) {
  h1.innerHTML = darkMode + "ON";
  return;
 }
 h1.innerHTML = lightMode + "OFF";
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode);