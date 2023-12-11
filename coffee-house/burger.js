const burgerMenu = document.querySelector('.burger-menu');
const headerWrapper = document.querySelector('.header .wrapper');
const body = document.querySelector('body');


/* 
! Burger menu functionality   
*/

/*
* The burger icon smoothly transforms into a cross and returns to its original state by clicking
*/

function animateBurgerIcon() {
  const clickedClass = "burger-menu--clicked";
  const closingClass = "burger-menu--closing";

  if (burgerMenu.classList.contains(clickedClass)) {
    burgerMenu.classList.remove(clickedClass);
    burgerMenu.classList.add(closingClass);
  } else {
    burgerMenu.classList.add(clickedClass);
    burgerMenu.classList.remove(closingClass);
  }
}


/*
* Toggle burger menu function - opening and closing
*/

function toggleBurgerMenu() {
  headerWrapper.classList.toggle('active');
  body.classList.toggle('lock');
}


/*
* Event click on burger icon
*/

burgerMenu.addEventListener('click', () => {
  animateBurgerIcon();
  toggleBurgerMenu();
});


/*
* Function for clicking on inactive link to close menu
*/

function handleInactiveLinkClick() {
  animateBurgerIcon();
  toggleBurgerMenu();
}


/*
* The burger menu hides by clicking on any link in the menu
*/

const burgerMenuLinks = document.querySelectorAll('.navigation');

if (burgerMenuLinks.length > 0) {
  burgerMenuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', handleMenuLinkClick);
  });
}

function handleMenuLinkClick() {
  if (headerWrapper.classList.contains('active')) {
    document.body.classList.remove('lock');
    headerWrapper.classList.remove('active');
    animateBurgerIcon.call(burgerMenu);
  }
}