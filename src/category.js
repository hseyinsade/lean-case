let shop = document.getElementById("shop");

let generateShop = (searchText) => {
    basket.items
      .map((product) => {
        modalItemsData.map((x) => {
          if (x.rule.shopItemId === product.id&&product.item>=x.rule.min) {
            x.active=true;
          }
      })});
    renderModal();
    return (shop.innerHTML = shopItemsData.filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase()) )
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.items.find((x) => x.id === id) || [];
        return `
      <div id=product-id-${id} class="item">
          <img width="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                ${search.item === undefined ? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join(""));
  };
  
  generateShop("");