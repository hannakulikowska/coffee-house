export function displayProducts(products, category) {
  const menuContainer = document.getElementById('menu-container');
  // Clear the container before adding new products
  menuContainer.innerHTML = '';

  // Filter products by category
  const filteredProducts = products.filter(product => product.category === category);
  
  // Create product cards
  filteredProducts.forEach(product => {
    const card = document.createElement('li');
    card.classList.add('cards-menu__card');

    const imageSrc = product.image ? product.image : '../assets/img/';
    
    card.innerHTML = `
      <div class="card__image"><span class="${category}" style="background: url(${imageSrc}) center/cover no-repeat;"></span></div>
      <div class="card__description">
        <h3 class="card__description--title heading-3">${product.name}</h3>
        <p class="card__description--content medium">${product.description}</p>
        <p class="card__description--price heading-3">$${product.price}</p>
      </div>
    `;

    menuContainer.appendChild(card);
  });
}