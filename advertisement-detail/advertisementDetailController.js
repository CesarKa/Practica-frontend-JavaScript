import { advertisementDetailModel, getLoggedInUserInfo, removeAdvertisement } from "./advertisementDetailModel.js"
import { buildAdvertisementDetailView, buildRemoveAdvertisementButton } from "./advertisementDetailView.js"

export const advertisementDetailController = async (advertisementContainer, advertisementId) => {


  const showRemoveAdvertisementButton = (advertisementId) => {
    const removeButton = buildRemoveAdvertisementButton()
    advertisementContainer.appendChild(removeButton)

    removeButton.addEventListener("click", () => {
      try {
        if (confirm("¿estás seguro de borrar el anuncio?")) {
          removeAdvertisement(advertisementId)
          window.location = '/'
        }
        const event = new CustomEvent("advertisement-delete-start")
        container.dispatchEvent(event)
      } catch {
        const event = new CustomEvent('advertisement-delete-error', {
          detail: {
            message: 'No se ha podido borrar el anuncio'
          }  
        });
        form.dispatchEvent(event)
      } finally {
        const event = new CustomEvent("advertisement-delete-finished")
        container.dispatchEvent(event)
      }
      
    })
  }

  try {
    const event = new CustomEvent ('advertisement-start')
    advertisementContainer.dispatchEvent(event)
    const advertisementDetail = await advertisementDetailModel(advertisementId)
    advertisementContainer.innerHTML = buildAdvertisementDetailView(advertisementDetail)

    const user = await getLoggedInUserInfo();
    if (user.id === advertisementDetail.userId) {
      showRemoveAdvertisementButton(advertisementId)
    }
  } catch (error) {
    const event = new CustomEvent('advertisement-error', {
      detail: {
        message: 'No se ha podido cargar el anuncio'
      }
    })
    
    advertisementContainer.dispatchEvent(event)
    
  } finally {
    const event = new CustomEvent('advertisement-finished')
    advertisementContainer.dispatchEvent(event)
  }

}
