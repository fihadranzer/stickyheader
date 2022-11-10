window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navigation-bar");

  if (window.pageYOffset >= 190) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
