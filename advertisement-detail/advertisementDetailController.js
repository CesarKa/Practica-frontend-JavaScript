import { advertisementDetailModel, getLoggedInUserInfo, removeAdvertisement } from "./advertisementDetailModel.js"
import { buildAdvertisementDetailView, buildRemoveAdvertisementButton } from "./advertisementDetailView.js"

export const advertisementDetailController = async (advertisementContainer, advertisementId) => {


  const showRemoveAdvertisementButton = (advertisementId) => {
    const removeButton = buildRemoveAdvertisementButton()
    advertisementContainer.appendChild(removeButton)

    removeButton.addEventListener("click", () => {
      if (confirm("¿estás seguro de borrar el anuncio?")) {
        removeAdvertisement(advertisementId)
        window.location = '/'
      }
    })
  }

  try {
    const advertisementDetail = await advertisementDetailModel(advertisementId)
    advertisementContainer.innerHTML = buildAdvertisementDetailView(advertisementDetail)

    const user = await getLoggedInUserInfo();
    if (user.id === advertisementDetail.userId) {
      showRemoveAdvertisementButton(advertisementId)
    }
  } catch (error) {
    alert(error.message)
  }

}
