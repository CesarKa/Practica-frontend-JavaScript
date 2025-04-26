


export async function getAdvertisements() {
    let advertisements = [];

    try {
        const response = await fetch('http://localhost:8000/api/advertisements')
        advertisements = await response.json();
        
    } catch (error) {
        throw new Error("Opss! No ha sido posible obtener anuncios. Inténtalo de nuevo mas tarde.")
    }
    return advertisements;
}

