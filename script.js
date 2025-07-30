// Falling letters for "NKEM MOYE"
function dropName() {
  const intro = document.querySelector(".intro");
  const name = "NKEM MOYE";
  intro.innerHTML = "";

  name.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.position = "relative";
    span.style.top = "-100px";
    span.style.display = "inline-block";
    span.style.animation = `drop 0.5s ease forwards ${index * 0.15}s`;
    intro.appendChild(span);
  });
}

// Typing effect for "Tech Projects Manager"
function typeRole(callback) {
  const role = document.querySelector(".role");
  const text = "Tech Projects Manager";
  let index = 0;

  function type() {
    if (index < text.length) {
      role.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    } else {
      setTimeout(callback, 800); // Wait before showing main site
    }
  }

  type();
}

// Reveal full site
function showSite() {
  document.querySelector(".site").style.display = "block";
  document.querySelector(".intro-wrapper").style.display = "none";
}

// Smooth scrolling from navbar
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// See More buttons redirect to LinkedIn
document.querySelectorAll(".see-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/nkemmoye/", "_blank");
  });
});

// Floating skill bubbles
function floatSkills() {
  const skills = document.querySelectorAll(".skill-bubble");
  skills.forEach((bubble, i) => {
    bubble.animate([
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" }
    ], {
      duration: 3000 + i * 300,
      iterations: Infinity
    });
  });
}

// Auto-scroll testimonials
let testimonialIndex = 0;
function rotateTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((el, i) => {
    el.style.display = i === testimonialIndex ? "block" : "none";
  });

  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 3000);

// Run on load
window.onload = () => {
  dropName();
  typeRole(showSite);
  floatSkills();
  rotateTestimonials();
};
