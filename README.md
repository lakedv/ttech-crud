# TALENTO TECH API

API RESTful desarrollada con **Node.js + Express**, desplegada en **Vercel**, siguiendo una arquitectura profesional basada en **Controllers, Services, Repositories, DTOs, Validators y Middlewares**, utilizando **Firebase Firestore** como base de datos.

Incluye autenticación con **JWT**, validación, manejo global de errores, arquitectura en capas y un health-check completo.

---

# Deploy en Producción

**Base URL:** https://ttech-crud.vercel.app  
Todos los endpoints se mantienen igual, solo cambia la base URL.

---

# 📁 Estructura del Proyecto

```
C:.
│   .env
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   vercel.json
│
├───api
│       index.js
│
└───source
    ├───controllers
    │       health.controller.js
    │       product.controller.js
    │       user.controller.js
    │
    ├───data
    │       db.context.js
    │
    ├───dtos
    │       product-create.request.js
    │       product-update.request.js
    │       product.response.js
    │       user-login.request.js
    │       user-register.request.js
    │       user.response.js
    │
    ├───exceptions
    │       bad-request.exception.js
    │       base.exception.js
    │       conflict.exception.js
    │       firestore.exception.js
    │       not-found.exception.js
    │       unauthorized.exception.js
    │       validation.exception.js
    │
    ├───middleware
    │       auth.middleware.js
    │       error-handler.middleware.js
    │
    ├───models
    │       product.js
    │       user.js
    │
    ├───repositories
    │       product.repository.js
    │       user.repository.js
    │
    ├───routes
    │       health-routes.js
    │       product-routes.js
    │       user-routes.js
    │
    ├───services
    │       product.service.js
    │       user.service.js
    │
    ├───utility
    │       health-check.js
    │
    └───validators
            product-validator.js
```

---

# Tecnologías Utilizadas

- Node.js + Express  
- Firebase Firestore  
- Firebase Admin  
- JWT (jsonwebtoken)  
- bcrypt  
- DTOs (Data Transfer Objects)  
- Validadores personalizados  
- Arquitectura basada en capas  
- dotenv  
- CORS  
- Manejo de errores centralizado  

---

# Instalación

### 1. Instalar dependencias
```
npm install
```

### 2. Crear archivo `.env`

```
PORT=3000
JWT_SECRET=tu_clave_segura

FIREBASE_PROJECT_ID=xxxxx
FIREBASE_CLIENT_EMAIL=xxxxx
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
TUBASE64OFORMATEADA
-----END PRIVATE KEY-----"
```

*(En Vercel no hace falta el formateo manual, ya que se reemplaza con `.replace(/\n/g, "\n")`)*

---

# Ejecutar el Proyecto

### Modo desarrollo:
```
npm run dev
```

### Modo producción:
```
npm start
```

---

# Autenticación

Los endpoints protegidos requieren:

```
Authorization: Bearer <token>
```

El token se obtiene desde `/api/users/login`.

---

#  Endpoints Principales

---

## Usuarios — `/api/users`

### **POST** `/register`
Body:
```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

### **POST** `/login`
Respuesta:
```json
{
  "token": "..."
}
```

---

## Productos — `/api/products` *(Requiere JWT)*

### GET `/`
### GET `/:id`
### POST `/`
### PUT `/:id`
### DELETE `/:id`

---

## Health — `/api/health`

Retorna:
- uptime  
- estado del servidor  
- estado Firestore  
- variables críticas  
- memoria utilizada  

---

# Arquitectura Interna

- **Controllers** → reciben request/response  
- **Services** → lógica de negocio  
- **Repositories** → acceso a Firestore  
- **DTOs** → entrada/salida tipada  
- **Middlewares** → auth + manejo de errores  
- **Validators** → validación de requests  
- **Exceptions** → errores personalizados centralizados  

---

# Seguridad

- JWT seguro  
- Hash con bcrypt  
- Validación estricta  
- Manejo global de errores  
- Sin exposición de datos sensibles  

---

# Licencia

MIT © 2025 — G. Mirarchi