// theme-toggle

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const header = document.querySelector("header")
  const navLinks = document.querySelectorAll(".nav-links a")
  const icon = themeToggle.querySelector("i")

  const toggleDarkMode = () => {
    body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")
    navLinks.forEach((link) => link.classList.toggle("dark-mode"))

    const isDarkMode = body.classList.contains("dark-mode")
    icon.classList.replace(
      isDarkMode ? "bx-moon" : "bx-sun",
      isDarkMode ? "bx-sun" : "bx-moon"
    )
  }

  themeToggle.addEventListener("click", toggleDarkMode)
})

// carousel

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track")
  const prevButton = document.querySelector(".prev")
  const nextButton = document.querySelector(".next")
  const profiles = Array.from(track.children)

  let currentIndex = 0
  const profilesToShow = 3
  const profileWidth = profiles[0].getBoundingClientRect().width

  const moveCarousel = (direction) => {
    currentIndex += direction
    track.style.transform = `translateX(-${profileWidth * currentIndex}px)`
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < profiles.length - profilesToShow) {
      moveCarousel(1)
    }
  })

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      moveCarousel(-1)
    }
  })
})

// faq

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item")

  const toggleFaqItem = (item) => {
    const isActive = item.classList.contains("active")
    faqItems.forEach((el) => el.classList.remove("active"))
    if (!isActive) {
      item.classList.add("active")
    }
  }

  faqItems.forEach((item) => {
    item.addEventListener("click", () => toggleFaqItem(item))
  })
})
