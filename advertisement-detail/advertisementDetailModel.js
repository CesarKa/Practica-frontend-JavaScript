export async function advertisementDetailModel(advertisementId) {

  const response = await fetch(`http://localhost:8000/api/advertisements/${advertisementId}?_expand=user`);

  if (!response.ok) {
    throw new Error("Anuncio no existe")
  }

  const advertisementDetail = await response.json();

  return advertisementDetail;
  }
  
  export async function removeAdvertisement(advertisementId) {
    const token = localStorage.getItem('token');
  
    const response = await fetch(`http://localhost:8000/api/advertisements/${advertisementId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error("Anuncio no existe")
    }
  }
  
  export async function getLoggedInUserInfo() {
    const token = localStorage.getItem('token');
   
    const response = await fetch(`http://localhost:8000/auth/me`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Usuario no existente");
    }
  
    const user = await response.json();
  
    return user;
  
   }
  