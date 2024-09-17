document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    const toggleFaqItem = (item) => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((el) => el.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    };
  
    faqItems.forEach((item) => {
      item.addEventListener("click", () => toggleFaqItem(item));
    });
  });