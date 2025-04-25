import { advertisements } from "./showAdvertisementsModel.js";
import { buildAd } from "./showAdvertisementsView.js";


export function drawAd() {
    const conteiner = document.querySelector(".ad-conteiner")
    advertisements.forEach((ad) => {
      const adHtml = document.createElement("div");
      adHtml.innerHTML = buildAd(ad)
  
      conteiner.appendChild(adHtml)
    });
  }
  