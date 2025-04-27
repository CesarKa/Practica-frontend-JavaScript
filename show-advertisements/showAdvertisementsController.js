import { getAdvertisements } from "./showAdvertisementsModel.js"
import { buildAd, buildNoAdvertisementAdvise} from "./showAdvertisementsView.js";


export async function showAdController(container) {
    
    // const container = document.querySelector(".ad-conteiner")
    //const loader = document.querySelector(".loader")

    try {
        const event = new CustomEvent("load-advertisement-started")
        container.dispatchEvent(event)
        const advertisements = await getAdvertisements();
        drawAdvertisements(advertisements, container)
    } catch (error) {
        
        const event = new CustomEvent("load-advertisement-error", {
            detail: error.message
        })
        container.dispatchEvent(event)
    } finally {
        const event = new CustomEvent("load-advertisement-finished")
        container.dispatchEvent(event)
    }
}


function drawAdvertisements (advertisements, container) {
   
    container.innerHTML = '';

    if (advertisements.length === 0 ) {
        container.innerHTML = buildNoAdvertisementAdvise()
    } 

    advertisements.forEach((ad) => {
        const adHtml = document.createElement("a");
        adHtml.setAttribute("href", `./advertisement-detail.html?id=${ad.id}`)
        adHtml.innerHTML = buildAd(ad)

        container.appendChild(adHtml)
    })
    
} 