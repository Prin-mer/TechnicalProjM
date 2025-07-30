window.onload = function () {
  const intro = document.getElementById('intro');
  const name = document.getElementById('introName');
  const role = document.getElementById('introRole');

  // Animate "NKEM MOYE"
  name.style.opacity = '1';
  name.style.transform = 'translateY(0)';

  setTimeout(() => {
    name.style.opacity = '0';
    name.style.transform = 'translateY(100px)';
  }, 2000);

  // Animate "Tech Projects Manager"
  setTimeout(() => {
    role.style.opacity = '1';
    role.style.transform = 'translateY(0)';
    typeText(role, "Tech Projects Manager");
  }, 2500);

  // Hide intro and show site
  setTimeout(() => {
    intro.classList.add('hide');
    document.querySelector(".site").style.display = "block";
  }, 5000);

  floatSkills();
  rotateTestimonials();
};

// Typing effect
function typeText(el, text) {
  let i = 0;
  el.innerText = '';
  let interval = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 100);
}

// Smooth scroll nav
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// LinkedIn buttons
document.querySelectorAll(".see-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/nkemmoye/", "_blank");
  });
});

// Floating skill placeholder function
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

// Rotate testimonials
let testimonialIndex = 0;
function rotateTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((el, i) => {
    el.style.display = i === testimonialIndex ? "block" : "none";
  });

  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 4000);

