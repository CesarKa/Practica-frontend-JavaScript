import { showAdController  } from "./show-advertisements/showAdvertisementsController.js";
import { loaderController } from "./show-loader/showLoaderController.js";


document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".ad-conteiner")
  const loader = document.querySelector(".loader")
  const { show, hide} = loaderController(loader)

  container.addEventListener('load-advertisement-started', () => {
    show()
  })
  container.addEventListener('load-advertisement-finished', () => {
    hide()
  }) 
  
  showAdController(container)
});






 /*const showAdButton = document.querySelector("#getAdvertisement");

  if (showAdButton) {
    showAdButton.addEventListener("click", showAdController);
  }*/

//const showAdButton = document.querySelector("#getAdvertisement");
//showAdButton.addEventListener("click", showAdController);