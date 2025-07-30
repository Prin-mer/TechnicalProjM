// Typing animation
const nameText = "Nkem Moye";
let index = 0;
const typingElement = document.getElementById("name-type");

function typeWriter() {
  if (index < nameText.length) {
    typingElement.innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}
typeWriter();

// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000);
