let basket = JSON.parse(localStorage.getItem("data")) || {items:[],campain:{}};
let increment = (id) => {
    let selectedItem = id;
    let search = basket.items.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.items.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
      modalItemsData.map((x) => {
        if (x.rule.shopItemId === selectedItem.id&&search.item>=x.rule.min) {
          x.active=true;
        }
      });
      renderModal();
    }
    update(selectedItem.id);
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.items.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
      modalItemsData.map((x) => {
        if (x.rule.shopItemId === selectedItem.id&&search.item<x.rule.min) {
          x.active=false;
          if(basket.campain.id==x.id)
          {
            basket.campain={};
          }
        }
      });
      renderModal()
    }
    update(selectedItem.id);
    calculation();
    basket.items = basket.items.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.items.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
  
  let removeItem = (id) => {
    let selectedItem = id;
    basket.items = basket.items.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
let clearCart = () => {
  basket = { items: [], campain: {} };
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  location.reload();
};
  