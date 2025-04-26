import { notificationsController } from "./notifications/notificationsController.js";
import { showAdController  } from "./show-advertisements/showAdvertisementsController.js";
import { loaderController } from "./show-loader/showLoaderController.js";


document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".ad-conteiner")
  const loader = document.querySelector(".loader")
  const notifications = document.querySelector(".notifications")
  const { show, hide} = loaderController(loader)
  const { showNotification } = notificationsController(notifications)

  container.addEventListener('load-advertisement-started', () => {
    show()
  })
  container.addEventListener('load-advertisement-finished', () => {
    hide()
    showNotification('ya he terminado de cargar los anuncios')
  }) 
  container.addEventListener('load-advertisement-error', (event) => {
    const errorMessage = event.detail
    showNotification(errorMessage)
  })
  
  
  showAdController(container)
});






 /*const showAdButton = document.querySelector("#getAdvertisement");

  if (showAdButton) {
    showAdButton.addEventListener("click", showAdController);
  }*/

//const showAdButton = document.querySelector("#getAdvertisement");
//showAdButton.addEventListener("click", showAdController);