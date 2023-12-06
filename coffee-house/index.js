document.querySelector('.burger-menu').addEventListener('click', function() {
  if (this.classList.contains("burger-menu--clicked")) {
    this.classList.remove("burger-menu--clicked");
    this.classList.add("burger-menu--closing");
  } else {
    this.classList.add("burger-menu--clicked");
    this.classList.remove("burger-menu--closing");
  }
});