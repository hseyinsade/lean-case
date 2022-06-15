
let update = (id) => {
  let search = basket.items.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};


let campainUpdate = () => {
};


const log = document.getElementById('search');

log.addEventListener('input', updateValue);

function updateValue(e) {
  generateShop(e.target.value);
}
