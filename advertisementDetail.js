import { advertisementDetailController} from "./advertisement-detail/advertisementDetailController.js"
import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from "./show-loader/showLoaderController.js";


document.addEventListener("DOMContentLoaded", () => {

  const searchParams = new URLSearchParams(window.location.search);
  const advertisementId = searchParams.get("id");
  const notifications = document.querySelector(".notifications");
  const loader = document.querySelector('.loader');


  const { show, hide} = loaderController(loader)
  const { showNotification } = notificationsController(notifications)

  if (advertisementId) {
    const advertisementContainer = document.querySelector(".advertisement-container")

    advertisementContainer.addEventListener('advertisement-start', show)
    advertisementContainer.addEventListener('advertisement-finished', hide)
    advertisementContainer.addEventListener('advertisement-error', (event) => {
      const errorMessage = event.detail.message
      showNotification(errorMessage)
    })
    
    advertisementContainer.addEventListener('advertisement-delete-start', show)
    advertisementContainer.addEventListener('advertisement-delete-finished', hide)
    advertisementContainer.addEventListener('advertisement-delete-success', (event) => {
      const message = event.detail.message
      const type = event.detail.type
      showNotification(message, type)
    })
    advertisementContainer.addEventListener('advertisement-delete-error', (event) => {
      const errorMessage = event.detail.message
      showNotification(errorMessage)
    })


  advertisementDetailController(advertisementContainer, advertisementId)
  } else {
    window.location = '/'
  }
  
  
})