export function updateLoadMoreButton(filteredProducts) {
  const loadMoreButton = document.querySelector('.load-more');
  const cardsMenu = document.querySelector('.cards-menu');
  const screenWidth = window.innerWidth;

  if (filteredProducts.length > 4 && screenWidth <= 768) {
    loadMoreButton.style.display = 'flex';
    cardsMenu.classList.remove('all-products');
  }
  if (filteredProducts.length > 4 && screenWidth > 768) {
    loadMoreButton.style.display = 'none';
    cardsMenu.classList.add('all-products');
  }
  if (filteredProducts.length <= 4) {
    loadMoreButton.style.display = 'none';
  }
}