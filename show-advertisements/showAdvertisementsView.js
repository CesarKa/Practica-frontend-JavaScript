export const buildAd = (ad) => {
    return `
        <img src="${ad.imagen}" style= "width:200px; height:200px ">  </img>
        <p> ${ad.name} </p>
        <p> ${ad.description} </p>
        <p> ${ad.price} </p>
        <p> ${ad.type} </p>
    `
};

export const buildNoAdvertisementAdvise = () => {
    return '<h3> Lo siento no hay anuncios disponibles!! :( </h3>';
};