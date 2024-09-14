document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll(".nav-links a");
    const icon = themeToggle.querySelector("i");
  
    const toggleDarkMode = () => {
      body.classList.toggle("dark-mode");
      header.classList.toggle("dark-mode");
      navLinks.forEach((link) => link.classList.toggle("dark-mode"));
  
      const isDarkMode = body.classList.contains("dark-mode");
      icon.classList.replace(
        isDarkMode ? "bx-moon" : "bx-sun",
        isDarkMode ? "bx-sun" : "bx-moon"
      );
    };
  
    themeToggle.addEventListener("click", toggleDarkMode);
  });