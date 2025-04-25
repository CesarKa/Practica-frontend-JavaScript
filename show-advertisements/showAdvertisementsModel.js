


export function getAdvertisements() {
    return fetch('http://localhost:8000/api/advertisements')
    .then(response => response.json())
    
}

