import { showAdController  } from "./show-advertisements/showAdvertisementsController.js";


document.addEventListener("DOMContentLoaded", () => {
  const showAdButton = document.querySelector("#getAdvertisement");
  showAdButton.addEventListener("click", showAdController);
});
