// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Navbar toggle
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
  
  // Dark mode toggle with localStorage
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
  }
  
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
  
  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTop");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
  
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const container = document.querySelector(".contact-page .container");
  
    if (!form) return; // Only run on contact page
  
    // Create message element for feedback
    const messageEl = document.createElement("p");
    messageEl.style.marginTop = "1rem";
    messageEl.style.fontWeight = "bold";
    container.appendChild(messageEl);
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      // Form data to send
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.ok) {
          messageEl.style.color = "limegreen";
          messageEl.textContent = "Thank you! Your message has been sent.";
          form.reset();
        } else {
          const data = await response.json();
          messageEl.style.color = "tomato";
          if (data.errors) {
            messageEl.textContent = data.errors
              .map((error) => error.message)
              .join(", ");
          } else {
            messageEl.textContent = "Oops! There was a problem submitting your form.";
          }
        }
      } catch (error) {
        messageEl.style.color = "tomato";
        messageEl.textContent = "Oops! There was a problem submitting your form.";
        console.error(error);
      }
    });
  });
  