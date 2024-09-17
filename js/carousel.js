document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const profiles = Array.from(track.children);
  
    let currentIndex = 0;
    const profilesToShow = 3;
    const profileWidth = profiles[0].getBoundingClientRect().width;
  
    const moveCarousel = (direction) => {
      currentIndex += direction;
      track.style.transform = `translateX(-${profileWidth * currentIndex}px)`;
    };
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < profiles.length - profilesToShow) {
        moveCarousel(1);
      }
    });
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        moveCarousel(-1);
      }
    });
  });