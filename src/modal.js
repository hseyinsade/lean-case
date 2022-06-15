

// Get the button that opens the modal
let btn = document.getElementById("campaign");

let campaignItem = document.getElementById("modalItem");
// Get the modal
let modal = document.getElementById("campaignModal");

let renderModal = () => {  
    let isSelect = basket.campain;
    return (campaignItem.innerHTML = modalItemsData
      .map((x) => {
        let { id, name, campaign,active} = x;
        return `
        <div onclick="${active?"campaignSelect('"+id+"')":null}" class="modal-detail ${active?"active":null}">
          <div class="modal-desc">
              <h4>${name}</h4>
              <p>${campaign}</p>
          </div>
          <div class="close">
              <div class="useCampaign">
                  <i  class="bi bi-check-circle ${isSelect.id==id?"selectCampain":null}"></i>
              </div>
          </div>
      </div>
      `;
      })
      .join(""));
  };

  // Campaign Select
  let campaignSelect = (id) => {
  
    let search = modalItemsData.find((x) => x.id === id);
    if(basket.campain.id==id)
      basket.campain={};
    else
      basket.campain = search;
    renderModal();
    campainUpdate();
    localStorage.setItem("data", JSON.stringify(basket));
  };
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }