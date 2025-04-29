# Practica-frontend-JavaScript

Proyecto Frontend con Sparrest API Mock

Este proyecto es una aplicación **frontend** que consume datos de una API simulada usando **Sparrest (json-server)**. Es ideal para prácticas de autenticación, gestión de productos y operaciones CRUD, sin depender de un backend real.

---

##  Descripción

El proyecto incluye:

- Una interfaz frontend construida con **HTML**, **CSS** y **JavaScript**.
- Una API simulada mediante **json-server**, que utiliza el archivo `db.json` como base de datos local.

El archivo `db.json` contiene dos colecciones listas para utilizar:

```json
{
  "users": [],
  "advertisements": []
}
```

Cómo arrancar el proyecto
1️⃣ Clonar este repositorio

``git clone https://https://github.com/CesarKa/Practica-frontend-JavaScript.git.git``

2️⃣ Entrar al directorio del proyecto

`cd tu-repo`


3️⃣ Instalar las dependencias del proyecto (incluyendo Sparrest)

```npm install```

Arrancar la API simulada (Sparrest)
La API se ejecutará en el puerto 8000.

Si no tienes json-server instalado globalmente:


`npm install `

Arrancar la API:
Desde la raíz del proyecto:


`npx json-server --port 8000`

Esto levantará un servidor RESTful en:

http://localhost:8000
Donde podrás hacer peticiones GET, POST, PUT y DELETE a las rutas:

/users

/products

 Arrancar el servidor de desarrollo:
En una nueva terminal (desde la raíz del proyecto):


``npm start``






