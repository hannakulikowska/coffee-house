export function updateLoadMoreButton(filteredProducts) {
  const loadMoreButton = document.querySelector('.load-more');
  const cardsMenu = document.querySelector('.cards-menu');
  const screenWidth = window.innerWidth;

  if (filteredProducts.length > 4 && screenWidth <= 768 && !cardsMenu.classList.contains('all-products')) {
    loadMoreButton.style.display = 'flex';
  }
  if (filteredProducts.length > 4 && screenWidth > 768 && cardsMenu.classList.contains('all-products')) {
    loadMoreButton.style.display = 'none';
  }
  if (filteredProducts.length <= 4) {
    loadMoreButton.style.display = 'none';
  }
}