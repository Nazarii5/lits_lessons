var productsList = [
  // in future will be given from server
  { price: "600 uah",
    type: "Футболка",
    details: "Comfortable",
    size:"Розмір: S,M,L"
  },
  {price: "550 uah",
    type: "Футболка",
    details: "Looks good",
    size:"Розмір: M,L,XL"
  },
  {price: "800 uah",
    type: "Штани",
    details: "top of Fashion",
    size:"Розмір: L,XL,2XL"
  },
];

function showProducts(productsList) {

  const productsContainer = document.querySelector("#products");

  if (!productsContainer) {
    alert("wow, smth is wrong!!!");
    return

  }
  productsContainer.innerHTML = ``;
  
  for (let i = 0; i < productsList.length; i++) {
    const product = productsList[i];
    const productNode = document.createElement('article');
    productNode.innerHTML = `
    <section class="preview">
          <img class="preview-img" src="https://picsum.photos/100/100" width="100" height="100">
        </section>
        <section class="details">
          <p class="type">Тип</p>
          <p class="size">${product.size}</p>
          <p class="info">${product.details}
        </section>
        <section class="actoin">
          <button class="btn-primary">Замовити</button>
          <p class="price">${product.price}</p>
        </section>
`;

    
    
    productNode.classList.add('products');
    productNode.setAttribute('role', 'button');

    const typeNode = productNode.querySelector('.type')
    typeNode.textContent = productsList[i].type;
    
    
    
    productsContainer.appendChild(productNode);
    
  
  
}
};

showProducts(productsList);


function makeFiltersHandlers() {
  const filterNodes = document.querySelectorAll(".filter-item");
  for (let i = 0; i < filterNodes.length; i++) {
    filterNodes[i].addEventListener("click", function (event) {
      // event JSON
      const targetEle = event.target;
      const filterValue = targetEle.getAttribute("filter-value");
      showProducts(
        productsList.filter((product) => product.type === filterValue)
      );
    });
  }
}
makeFiltersHandlers();



const searchInput = document.querySelector("#main-search");
searchInput.addEventListener('input', function (event) {
  showProducts(
    productsList.filter((product) =>
    {
      return (
        product.type.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
  )
} )