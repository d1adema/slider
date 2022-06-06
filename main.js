const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActive();
    slide.classList.add("active");
  });
});

function removeActive() {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
}