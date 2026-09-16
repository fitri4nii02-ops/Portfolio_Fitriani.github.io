document.addEventListener("DOMContentLoaded", function () {
    highlightActiveNav();
    setupMobileMenu();
    setupScrollReveal();
    setupContactForm();
});


function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a, .nav-links a");

    navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("/").pop();
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburger.classList.remove("open");
    });
    });
}


function setupScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
        });
    },
    { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
}


function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid = true;

    clearErrors(form);

    if (!name.value.trim()) {
      showError(name, "Nama tidak boleh kosong");
      isValid = false;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, "Masukkan alamat email yang valid");
      isValid = false;
    }

    if (!message.value.trim()) {
      showError(message, "Pesan tidak boleh kosong");
      isValid = false;
    }

    if (isValid) {
      alert("Terima kasih! Pesan kamu berhasil dikirim.");
      form.reset();

    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(inputEl, message) {
  const error = document.createElement("small");
  error.className = "error-message";
  error.style.color = "red";
  error.textContent = message;
  inputEl.insertAdjacentElement("afterend", error);
  inputEl.style.borderColor = "red";
}

function clearErrors(form) {
  form.querySelectorAll(".error-message").forEach((el) => el.remove());
  form.querySelectorAll("input, textarea").forEach((el) => {
    el.style.borderColor = "";
  });
}