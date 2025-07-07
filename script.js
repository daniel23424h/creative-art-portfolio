// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form - Show Thank You Message
const form = document.getElementById("contactForm");
const thankYouMsg = document.getElementById("thankYouMsg");

form.addEventListener("submit", function (e) {
  setTimeout(() => {
    thankYouMsg.style.display = "block";
    thankYouMsg.classList.add("show");
  }, 600);
});
