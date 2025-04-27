import { advertisementDetailController} from "./advertisement-detail/advertisementDetailController.js"



document.addEventListener("DOMContentLoaded", () => {

  const searchParams = new URLSearchParams(window.location.search);
  const advertisementId = searchParams.get("id");

  
  if (advertisementId) {
    const advertisementContainer = document.querySelector(".advertisement-container")
    
  advertisementDetailController(advertisementContainer, advertisementId)
  } else {
    window.location = '/'
  }
  
  
})