export const createAdvertisement = async (imagen, name, description, price, type) => {
  
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8000/api/advertisements", {
    method: "POST",
    body: JSON.stringify({
      imagen: imagen,
      name: name,
      description: description,
      price: price,
      type: type
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const data = response.json();
    throw new Error("No se ha podido crear el anuncio")
  }
}
