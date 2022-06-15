let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");


let generateCartItems = () => {

  if (basket.items.length !== 0) {
    basket.items
    .map((product) => {
      modalItemsData.map((x) => {
        if (x.rule.shopItemId === product.id&&product.item>=x.rule.min) {
          x.active=true;
        }
    })});
    return (ShoppingCart.innerHTML = basket.items
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p class="cart-item-name">${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="prod-Area">
          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

           <h3>$ ${item * search.price}</h3>
        </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();


let update = (id) => {
  let search = basket.items.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  generateCartItems()
  TotalAmount();
};

let campainUpdate = () => {
  TotalAmount();
};


let TotalAmount = () => {
  if (basket.items.length !== 0) {
    let amount = basket.items
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => {
        return x + y;
      },0);
      let cargo=0;
    
      if(amount <= 50){
        cargo=4.95;
      }else if(50 < amount&&amount <= 89){
        cargo=2.95;
      }
      amount+=cargo-(basket.campain.discount?basket.campain.discount:0);
    label.innerHTML = `
    
    ${basket.campain.discount?"<h3 class='info-Area'>Discount : $"+ basket.campain.discount+"</h3>":""}
    <h3 class="info-Area">Delivery : $ ${cargo}</h3>
    <h3 class="info-Area">Total Bill : $ ${amount}</h3>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  };
};

renderModal();
TotalAmount();
