# Practica-frontend-JavaScript

 📦 Proyecto Frontend con Sparrest API Mock

Este proyecto es una aplicación **frontend** que consume datos de una API simulada usando **Sparrest (json-server)**. Es ideal para prácticas de autenticación, gestión de productos y operaciones CRUD, sin depender de un backend real.

---

## 📑 Descripción

El proyecto incluye:

- Una interfaz frontend construida con **HTML**, **CSS** y **JavaScript**.
- Una API simulada mediante **json-server**, que utiliza el archivo `db.json` como base de datos local.

El archivo `db.json` contiene dos colecciones listas para utilizar:

```json
{
  "users": [],
  "advertisements": []
}

🚀 Cómo arrancar el proyecto
📥 1️⃣ Clonar este repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repo.git
📂 2️⃣ Entrar al directorio del proyecto
bash
Copiar
Editar
cd tu-repo
📦 3️⃣ Instalar las dependencias del proyecto (incluyendo Sparrest)
bash
Copiar
Editar
npm install
🖥️ Arrancar la API simulada (Sparrest)
La API se ejecutará en el puerto 8000.

📌 Si no tienes json-server instalado globalmente:
bash
Copiar
Editar
npm install -g json-server
📌 Arrancar la API:
Desde la raíz del proyecto:

bash
Copiar
Editar
npx json-server --watch db.json --port 8000
Esto levantará un servidor RESTful en:

arduino
Copiar
Editar
http://localhost:8000
Donde podrás hacer peticiones GET, POST, PUT y DELETE a las rutas:

/users

/products

🌐 Arrancar la aplicación frontend
El frontend se ejecutará en el puerto 1234 (por defecto con Parcel o similar).

📌 Arrancar el servidor de desarrollo:
En una nueva terminal (desde la raíz del proyecto):

bash
Copiar
Editar
npm start
Esto abrirá automáticamente la aplicación en:

arduino
Copiar
Editar
http://localhost:1234
⚙️ Configuración de la URL base de la API
Para que la aplicación se conecte correctamente con la API en el puerto 8000, asegúrate de que la URL base esté configurada así en el archivo:

arduino
Copiar
Editar
src/api/config.js
javascript
Copiar
Editar
export const API_URL = "http://localhost:8000";
Si decides cambiar el puerto o la dirección, actualiza este valor en consecuencia.

