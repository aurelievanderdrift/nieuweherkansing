// stap 1: zoekt de menu-button, de nav en de sluitknop op
let deButton = document.querySelector("header > button");
let deNav = document.querySelector("header nav:first-of-type");
let deSluitKnop = document.querySelector("nav ul li:last-child button");

// stap 2: toggle voor het openen en sluiten van het menu
deButton.onclick = function() {
  deNav.classList.toggle("toonMenu");
};

// stap 3: toggle voor het sluiten van het menu
deSluitKnop.onclick = function() {
  deNav.classList.remove("toonMenu");
};

// chatgpt gebruikt als hulp voor het kruisje en sluiten menu: https://chatgpt.com/share/672521a0-fe88-8005-975a-aeff3e305cd7