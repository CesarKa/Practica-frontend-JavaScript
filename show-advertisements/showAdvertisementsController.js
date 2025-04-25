import { getAdvertisements } from "./showAdvertisementsModel.js"
import { buildAd } from "./showAdvertisementsView.js";


export function drawAd() {

    getAdvertisements().then((advertisements) => {
        const container = document.querySelector(".ad-conteiner")
        container.innerHTML = '';

        advertisements.forEach((ad) => {
            const adHtml = document.createElement("div");
            adHtml.innerHTML = buildAd(ad)
        
            container.appendChild(adHtml)
        })
    })
  }
  