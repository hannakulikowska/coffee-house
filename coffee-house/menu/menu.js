// 1. Chrome
// import productsJSON from './data/products.json' assert { type: 'json'};
// console.log(productsJSON);

// 2. Chrome, Mozilla
fetch('./data/products.json')
  .then((res) => res.json())
  .then(console.log);


