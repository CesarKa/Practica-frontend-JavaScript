import { createAdvertisementController } from "./create-advertisement/createAdvertisementController.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location = '/login.html'
  }

  const createAdvertisementForm = document.querySelector('form')
  createAdvertisementController(createAdvertisementForm)
})
