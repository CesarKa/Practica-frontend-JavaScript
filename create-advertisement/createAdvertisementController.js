import { createAdvertisement } from "./createAdvertisementModel.js";

export const createAdvertisementController = (form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const imagenElement = form.querySelector('#imagen');
    const imagen = imagenElement.value;

    const nameElement = form.querySelector('#name');
    const name = nameElement.value;

    const descriptionElement = form.querySelector('#description');
    const description = descriptionElement.value;

    const priceElement = form.querySelector('#price');
    const price = priceElement.value;


    const typeElement = form.querySelector('#type');
    const type = typeElement.value;


    try {
      await createAdvertisement(imagen, name, description, price, type)
      setTimeout(() => {
        window.location = '/';
      }, 2000)
    } catch (error) {
      alert(error.message)
    }
  })
}
