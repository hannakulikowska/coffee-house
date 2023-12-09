import { displayProducts } from './menu.js';

// 1. Chrome
// import productsJSON from './data/products.json' assert { type: 'json'};
// console.log(productsJSON);

// 2. Chrome, Mozilla
fetch('./data/products.json')
  .then((res) => res.json())
  // .then(console.log)
  .then((data) => {
    const products = data;

    const menuTabs = document.querySelectorAll('.menu__tab');

    // console.log(menuTabs);
    menuTabs.forEach(tab => {
      // Handle Tab click event
      tab.addEventListener('click', function () {
        // Remove the active button class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        // Add a class to the active tab that was just clicked
        this.classList.add('active');
        // Get the category from the data-category attribute
        const category = this.getAttribute('data-category');
        // console.log('Category:', category);
        // Display products of the selected category
        displayProducts(products, category);
      });
    });

    // coffee category displays by default
    displayProducts(products, 'coffee');
  })
  .catch((error) => {
    console.error('Error loading data:', error);
  });