import { getAdvertisements } from "./showAdvertisementsModel.js"
import { buildAd, buildNoAdvertisementAdvise } from "./showAdvertisementsView.js";


export async function showAdController() {

    try {
        const advertisements = await getAdvertisements();
        drawAdvertisements(advertisements)
    } catch (error) {
        alert(error.message)
    }   
}


function drawAdvertisements (advertisements) {
    const container = document.querySelector(".ad-conteiner")
    container.innerHTML = '';

    if (advertisements.length === 0 ) {
        container.innerHTML = buildNoAdvertisementAdvise()
    } else {
        advertisements.forEach((ad) => {
            const adHtml = document.createElement("div");
            adHtml.innerHTML = buildAd(ad)
    
            container.appendChild(adHtml)
        })
    }
}