const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    1024: {
      allowTouchMove: false,
    },
  },
});

const menuButton = document.getElementById("hamburger");
const closeButton = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileMenuOverlay");

const openMenu = () => {
  if (!mobileMenu || !mobileOverlay) return;
  mobileMenu.classList.remove("-translate-x-full");
  mobileOverlay.classList.remove("hidden");
  document.body.classList.add("menu-open");
};

const closeMenu = () => {
  if (!mobileMenu || !mobileOverlay) return;
  mobileMenu.classList.add("-translate-x-full");
  mobileOverlay.classList.add("hidden");
  document.body.classList.remove("menu-open");
};

if (menuButton) {
  menuButton.addEventListener("click", openMenu);
}

if (closeButton) {
  closeButton.addEventListener("click", closeMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMenu);
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});
