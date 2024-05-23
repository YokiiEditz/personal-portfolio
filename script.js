//navbar-responsive
const menubtn = document.querySelector("#nav-menu-btn");
const navTogglebtn = document.querySelector(".navbar");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("bx-x");
  navTogglebtn.classList.toggle("visible");
});

//back to top section
const backTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backTop.classList.add("arrow-on");
  } else {
    backTop.classList.remove("arrow-on");
  }
  console.log(window.scrollY);
});

// Scroll - Reveal;
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(" #top, .home-image ", {
  origin: "top",
});
ScrollReveal().reveal(
  " .home-content, .online-certify, .project-lists, .contact-main ",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  " .profile-text, .content-title, .academy-image, .exper-one, .exper-three ",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(" .section-title, .academy-content, .exper-two ", {
  origin: "right",
});

//displaying years
const displayYear = document.getElementById("this-year");
const year = new Date();

displayYear.textContent = "| " + year.getFullYear();
