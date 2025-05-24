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
  