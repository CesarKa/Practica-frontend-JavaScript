export const buildAd = (ad) => {
    return `
        <img src="${ad.imagen}" style= "width:200px; height:200px ">  </img>
        <p> ${ad.name} </p>
        <p> ${ad.description} </p>
        <p> ${ad.price} </p>
        <p> ${ad.type} </p>
    `
};