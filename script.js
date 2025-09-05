// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile hamburger menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("active"); // add this class in CSS for visibility
  });
}

// Mailto form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Build mailto link
    const subject = encodeURIComponent("New Inquiry from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:codejumama@gmail.com?subject=${subject}&body=${body}`;
  });
}
