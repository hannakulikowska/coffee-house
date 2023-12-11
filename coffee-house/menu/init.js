import { displayProducts } from './menu.js';
import { updateLoadMoreButton } from './load.js';
import { handleCards } from './modal.js';


// 1. import (Chrome)
// import productsJSON from './data/products.json' assert { type: 'json'};
// console.log(productsJSON);

//! 2. fetch (Chrome, Mozilla)
fetch('./data/products.json')
  .then((res) => res.json())
  // .then(console.log)
  .then((data) => {
    const products = data;

    // coffee category displays by default
    displayProducts(products, 'coffee');

    // ! Category Tabs 

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

        document.querySelector('.cards-menu').classList.remove('all-products');
        updateLoadMoreButton();
      });
    });
    
    handleCards(products);
  })
  .catch((error) => {
    console.error('Error loading data:', error);
  });
  