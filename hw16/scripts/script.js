var productsList = [
  // in future will be given from server
  { type: " Футболка" },
  { type: "Сорочка" },
  { type: "Штани" },
];

function showProducts() {

  const productsContainer = document.querySelector("#products");

  if (!productsContainer) {
    alert("wow, smth is wrong!!!");
    return

}
  
  for (let i = 0; i < productsList.length; i++) {
    //const productNode = document.createElement("article");
    const productNode = document.createElement('article');
    productNode.innerHTML = `
    <section class="preview">
          <img class="preview-img" src="https://picsum.photos/100/100" width="100" height="100">
        </section>
        <section class="details">
          <p class="type">Тип</p>
          <p class="size">Розмір</p>
          <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto debitis natus ipsam minima
            perferendis harum dolores alias provident pariatur aperiam ea necessitatibus obcaecati veniam impedit
            laborum ipsa sequi, aliquid nesciunt?
          </p>
        </section>
        <section class="actoin">
          <button class="btn-primary">Замовити</button>
          <p class="price">555 грн</p>
        </section>
`;

    
    
    productNode.classList.add('products');
    productNode.setAttribute('role', 'button');

    const typeNode = productNode.querySelector('.type')
    typeNode.textContent = productsList[i].type;
    
    
    
    productsContainer.appendChild(productNode);
    
  
  
}
};

showProducts();
