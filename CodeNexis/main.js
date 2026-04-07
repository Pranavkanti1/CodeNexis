// ================= TYPEWRITER EFFECT =================
console.log("JS Loaded");

// Names to display
const entries = [
  { name: "Pranav", color: "#00d4ff" },
  { name: "Kanti", color: "#ff6b00" }
];

// Variables
let index = 0;          // current name index
let charIndex = 0;      // current character index
let isDeleting = false; // typing or deleting
let isPaused = false;   // pause at full word

const textElement = document.getElementById("typing-name");

// Main function
function typeEffect() {

  if (isPaused) return;

  const current = entries[index];
  const fullText = current.name;

  // Apply color
  textElement.style.color = current.color;
  textElement.style.borderColor = current.color;

  if (!isDeleting) {
    // Typing
    textElement.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;

    // If word completed
    if (charIndex === fullText.length) {
      isPaused = true;

      setTimeout(() => {
        isDeleting = true;
        isPaused = false;
        typeEffect();
      }, 1800);

      return;
    }

  } else {
    // Deleting
    textElement.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;

    // If fully deleted → move to next word
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % entries.length;

      setTimeout(typeEffect, 300);
      return;
    }
  }

  // Speed control
  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

// Start animation
typeEffect();


// ================= THEME SWITCHER =================

function setTheme(className, label, button) {
  // Change body theme
  document.body.className = className;

  // Remove active from all buttons
  document.querySelectorAll(".tbtn").forEach(btn => {
    btn.classList.remove("active");
  });

  // Add active to clicked button
  button.classList.add("active");

  // Update label text
  document.getElementById("tlabel").textContent = label;
}

//scroll to course section
function goToCourses() {
  document.getElementById("courses3").scrollIntoView({
    behavior: "smooth"
  });
}

//back to home

function goToHome(){
  document.getElementById("hero").scrollIntoView({
    behavior:"smooth"
  });
}

//go to about

function goToAbout(){
document.getElementById("about").scrollIntoView({
  behavior:"smooth"
});

}

//go to contact

function goToContact(){
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}











// Make sure DOM is loaded first
// Ensure the script runs after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-box");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterCourses(e.target.value);
    });
  }
});

//With this (direct, no wrapper):
const searchInput = document.getElementById("search-box");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    filterCourses(e.target.value);
  });
}


function filterCourses(query) {
  const q = query.toLowerCase().trim();

  const cards = document.querySelectorAll(
    "#courses3 .pro-card, #courses .c-card"
  );

  console.log("Cards found:", cards.length); // DEBUG

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(q)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}