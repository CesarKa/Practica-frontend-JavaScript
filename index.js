const advertisements = [
    {
      id: 1,
      imagen: "https://media.cecotec.cloud/07219/mountain-millor_mtwa5y_1.png:md",
      name: "Bicicleta de montaña",
      description: "Bicicleta en buen estado, poco uso, ideal para rutas.",
      price: 250,
      type: "venta"
    },
    {
      id: 2,
      imagen: "https://media.cecotec.cloud/07219/mountain-millor_mtwa5y_1.png:md",
      name: "Compra Nintendo Switch",
      description: "Busco consola Nintendo Switch de segunda mano.",
      price: 180,
      type: "compra"
    },
    {
      id: 3,
      imagen: "https://media.cecotec.cloud/07219/mountain-millor_mtwa5y_1.png:md",
      name: "iPhone 12",
      description: "Vendo iPhone 12 con caja y accesorios originales.",
      price: 600,
      type: "venta"
    },
    {
      id: 4,
      imagen: "https://media.cecotec.cloud/07219/mountain-millor_mtwa5y_1.png:md",
      name: "Compra de libros de segunda mano",
      description: "Interesado en novelas de fantasía o ciencia ficción.",
      price: 10,
      type: "compra"
    }
  ];


advertisements.forEach((ad) => {
    const conteiner = document.querySelector(".ad-conteiner")
    
    const adHtml = document.createElement("div");
    adHtml.innerHTML = `
        <img src="${ad.imagen}" style= "width:200px; height:200px ">  </img>
        <p> ${ad.name} </p>
        <p> ${ad.description} </p>
        <p> ${ad.price} </p>
        <p> ${ad.type} </p>
    `

    conteiner.appendChild(adHtml)
  });
