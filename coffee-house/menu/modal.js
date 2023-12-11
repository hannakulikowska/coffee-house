export function handleCards(products) {
  
  // ! Click on the card

  const menuContainer = document.getElementById('menu-container');

  // Delegate the click event to the container
  menuContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.cards-menu__card');

    if (card) {
      const productId = card.dataset.id;
      const selectedProduct = products.find((product) => product.name === productId);

      createModal(selectedProduct);
    }
  });

  // ! Creating the modal

  function createModal(selectedProduct) {
    const modal = document.createElement('div');
    modal.classList.add('backdrop');

    const imageSrc = selectedProduct.image ? selectedProduct.image : '../assets/img/';

    modal.innerHTML = `
    <div class="modal">

      <div class="box">
        <div class="modal-image" style="background: url(${imageSrc}) center/cover no-repeat;"></div>
      </div>

      <div class="description">
        <div class="product">
          <h3 class="title">${selectedProduct.name}</h3>
          <p class="text">${selectedProduct.description}</p>
        </div>
        <div class="wrapper size">
          <p class="text">Size</p>
          <div class="tabs">
            <button class="tab size-tab active">
              <span class="circle">S</span>
              <span class="tab-text">${selectedProduct.sizes.s.size}</span>
            </button>
            <button class="tab size-tab">
              <span class="circle">M</span>
              <span class="tab-text">${selectedProduct.sizes.m.size}</span>
            </button>
            <button class="tab size-tab">
              <span class="circle">L</span>
              <span class="tab-text">${selectedProduct.sizes.l.size}</span>
            </button>
          </div>
        </div>

        <div class="wrapper additives">
          <p class="text">Additives</p>
          <div class="tabs additives-tabs-container">
            <button class="tab additive-tab">
              <span class="circle">1</span>
              <span class="tab-text">${selectedProduct.additives[0].name}</span>
            </button>
            <button class="tab additive-tab">
              <span class="circle">2</span>
              <span class="tab-text">${selectedProduct.additives[1].name}</span>
            </button>
            <button class="tab additive-tab">
              <span class="circle">3</span>
              <span class="tab-text">${selectedProduct.additives[2].name}</span>
            </button>
          </div>
        </div>

        <div class="total">
          <h3 class="title">Total:</h3>
          <h3 class="title" id="total-amount">$${selectedProduct.price}</h3>
        </div>

        <div class="alert">
          <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_268_10145)">
                <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_268_10145">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="alert-text">
            The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty
            points and enjoy your favorite coffee with up to 20% discount.
            </p>
          </div>
        </div>
        
        <button class="close tab-text">Close</button>
      
      </div>
    </div>`;
    

    // ! Opening the modal
    
    // Set the modal to the DOM
    document.body.appendChild(modal);

    modal.style.visibility = 'visible';
    document.body.style.overflow = 'hidden'


    // ! Close the modal

    const closeButton = modal.querySelector('.close');
    
    function closeModal() {
      if (modal) {
        modal.classList.add('closing');
        
        modal.addEventListener('animationend', function () {
          // Delete a modal from DOM after animation is ended
          document.body.removeChild(modal);
          document.body.style.overflow = 'auto';
        });
      }
    }

      
    // Event listener to close a modal by clicking close button
    closeButton.addEventListener('click', function () {
      closeModal();
    });
    
    
    // Close a modal by clicking out of the modal
    modal.addEventListener('click', function (event) {
      if (!event.target.closest('.modal')) {
        closeModal();
      }
    });

    
    // ! Size Tabs

    const sizeTabs = document.querySelectorAll('.size-tab');
    sizeTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        sizeTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        calculateTotalAmount(selectedProduct);
      })
    })


    // ! Additives Tabs


    // вариант 1
    // const additivesTabsContainer = document.querySelector('.additives-tabs-container');
    // additivesTabsContainer.addEventListener('click', function (event) {
    //   const clickedTab = event.target.closest('.additive-tab');
    //   if (!clickedTab) {
    //     return;
    //   }
    //   clickedTab.classList.toggle('active');
    // });


    // вариант 2
    // const additivesTabs = document.querySelectorAll('.additive-tab');
    // additivesTabs.forEach(tab => {
    //   tab.addEventListener('click', function () {
    //     this.classList.toggle('active');
    //   });
    // });


    // вариант 3
        var tabs = document
        .querySelector('.additives-tabs-container')
        .querySelectorAll(".tab");

    function wrapper (fn) {
      var tapped = false;
      return (event) => {
        // console.log("CALLED");
        fn(event, tapped);
        tapped = !tapped;
      }
    }

    var toggler = wrapper(handleTabClick);

    function handleTabClick (event, tapped) {
      const target = event.currentTarget;
      // console.log(tapped, "WORK");
      if (tapped) {
        target.classList.remove("active");
      } else {
        target.classList.add("active");
      }
      calculateTotalAmount(selectedProduct);
    }
    
    tabs.forEach((tab) => tab.addEventListener("click", wrapper(handleTabClick)));


    
    // ! Set attributes to tabs    

    // Set attributes data- for sizes tabs
    sizeTabs.forEach((sizeTab, index) => {
      sizeTab.dataset.size = Object.keys(selectedProduct.sizes)[index];
    });

    // Set attributes data- for additives tabs
    const additiveTabs = document.querySelectorAll('.additive-tab');
    additiveTabs.forEach((additiveTab, index) => {
      additiveTab.dataset.index = index;
    });


    // ! Calculate total amount

    function calculateTotalAmount(selectedProduct) {
      // Get the active size tab
      const activeSizeTab = document.querySelector('.size-tab.active');
      const sizeKey = activeSizeTab.dataset.size;
      const selectedSize = selectedProduct.sizes[sizeKey];

      // Get all active additive tabs
      const activeAdditiveTabs = document.querySelectorAll('.additive-tab.active');
      
      // Sum up the cost of size and additives
      let totalAmount = parseFloat(selectedProduct.price) + parseFloat(selectedSize['add-price']);

      activeAdditiveTabs.forEach(activeAdditiveTab => {
        const additiveIndex = activeAdditiveTab.dataset.index;
        const selectedAdditive = selectedProduct.additives[additiveIndex];
        totalAmount += parseFloat(selectedAdditive['add-price']);
      });

      // Display the result on the page
      const totalAmountElement = document.getElementById('total-amount');
      totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    }

    calculateTotalAmount(selectedProduct);


  }


}