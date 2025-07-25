// Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dark Mode Toggle
const toggleSwitch = document.getElementById("darkModeToggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// Typing Effect
const phrases = [
  "Aspiring Full Stack Developer  ",
  "AI & ML Enthusiast  ",
  "Loves to Debug Codes  ",
  "Passionate about Developing Video Games  "
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typedText = document.getElementById("typed-text");
const delay = 100;

function typeLoop() {
  typedText.innerHTML = currentPhrase.join("");
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(typeLoop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? delay / 2 : delay);
}
typeLoop();
