window.onscroll = function () {
  scrollCheck();
};

const backToButton = document.getElementById("back-to-top");

const scrollCheck = () =>
  document.body.scrollTop > 200 ||
  (document.documentElement.scrollTop > 200 && !width.matches)
    ? (backToButton.style.display = "none")
    : (backToButton.style.display = "flex");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobileMenu = () =>
  document.querySelector("ul").classList.toggle("mobileMenu");
