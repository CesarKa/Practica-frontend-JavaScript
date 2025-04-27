export const buildAdvertisementDetailView = (ad) => {
    
  let advertisementView =  `
    <img src="${ad.imagen}" style= "width:200px; height:200px ">  </img>
    <p> ${ad.name} </p>
    <p> ${ad.description} </p>
    <p> ${ad.price} </p>
    <p> ${ad.type} </p>
    `;

  
  return advertisementView
}
  
  export const  buildRemoveAdvertisementButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Borrar advertisement';
  
    return removeButton;
}
  