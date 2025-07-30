// Animate intro on page load
window.onload = function () {
  const intro = document.getElementById('intro');
  const name = document.getElementById('introName');
  const role = document.getElementById('introRole');

  // Show "NKEM MOYE" (falls down)
  name.style.opacity = '1';
  name.style.transform = 'translateY(0)';

  // Hide "NKEM MOYE"
  setTimeout(() => {
    name.style.opacity = '0';
    name.style.transform = 'translateY(100px)';
  }, 2000);

  // Show and type "Tech Projects Manager"
  setTimeout(() => {
    role.style.opacity = '1';
    role.style.transform = 'translateY(0)';
    typeText(role, "Tech Projects Manager", () => {
      // After typing, hide intro and show main site
      setTimeout(() => {
        intro.classList.add('hide');
        document.querySelector(".site").style.display = "block";
      }, 800);
    });
  }, 2500);

  floatSkills();
  rotateTestimonials();
};

// Typing effect for role
function typeText(el, text, callback) {
  let i = 0;
  el.innerText = '';
  let interval = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 100);
}

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

// Auto-rotate testimonials
let testimonialIndex = 0;
function rotateTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((el, i) => {
    el.style.display = i === testimonialIndex ? "block" : "none";
  });

  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 3000);

// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// "See more" buttons go to LinkedIn
document.querySelectorAll(".see-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/nkemmoye/", "_blank");
  });
});
