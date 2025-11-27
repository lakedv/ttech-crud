# Talento TECH API

API RESTful construida con **Node.js + Express**, estructurada
con capas de **Controllers, Services, Repositories,
DTOs y Middlewares**, utilizando **Firebase Firestore** como base de
datos y autenticación mediante **JWT**.

Incluye validación, manejo global de errores, health check avanzado y
excepciones personalizadas.

## Estructura del Proyecto

    source/
    │
    ├── Controllers/
    │     ├── healthController.js
    │     ├── ProductController.js
    │     └── UserController.js
    │
    ├── Data/
    │     └── DbContext.js
    │
    ├── DTOs/
    │     ├── ProductCreateRequest.js
    │     ├── ProductResponse.js
    │     ├── ProductUpdateRequest.js
    │     ├── UserLoginRequest.js
    │     ├── UserRegisterRequest.js
    │     └── UserResponse.js
    │
    ├── Exceptions/
    │     ├── BadRequestException.js
    │     ├── BaseException.js
    │     ├── ConflictException.js
    │     ├── FirestoreException.js
    │     ├── NotFoundException.js
    │     ├── UnauthorizedException.js
    │     └── ValidationException.js
    │
    ├── Middleware/
    │     ├── authMiddleware.js
    │     └── errorHandlerMiddleware.js
    │
    ├── Models/
    │     ├── Product.js
    │     └── User.js
    │
    ├── Repositories/
    │     ├── ProductRepository.js
    │     └── UserRepository.js
    │
    ├── Routes/
    │     ├── healthRoutes.js
    │     ├── ProductRoutes.js
    │     └── UserRoutes.js
    │
    ├── Services/
    │     ├── ProductService.js
    │     └── UserService.js
    │
    ├── Utility/
    │     └── healthCheck.js
    │
    └── Validators/
           └── ProductValidator.js

## Tecnologías Utilizadas

-   Node.js + Express
-   Firebase Firestore
-   Firebase Admin
-   JWT (jsonwebtoken)
-   bcrypt
-   Validación de DTOs
-   Middlewares personalizados
-   Excepciones personalizadas
-   dotenv
-   nodemon

## Instalación

    npm install

Crear archivo `.env`:

    PORT=3000
    JWT_SECRET=tu_clave_segura

    FIREBASE_PROJECT_ID=...
    FIREBASE_CLIENT_EMAIL=...
    FIREBASE_PRIVATE_KEY=...

##  Ejecutar la API

Modo desarrollo:

    npm run dev

Modo producción:

    npm start

# Autenticación (JWT)

Enviar en endpoints protegidos:

    Authorization: Bearer <token>

# Endpoints

## Usuarios --- `/users`

### POST `/users/register`

Body:

``` json
{
  "email": "user@example.com",
  "password": "123456"
}
```

### POST `/users/login`

Respuesta:

``` json
{
  "token": "..."
}
```

## Productos --- `/products`

(Requiere JWT)

### GET `/products`

### GET `/products/:id`

### POST `/products`

### PUT `/products/:id`

### DELETE `/products/:id`

# Health Check --- `/health`

Devuelve estado, memoria, uptime, conexión a Firestore, variables de
entorno críticas.

#  Arquitectura Interna

Controllers, Services, Repositories, DTOs, Validators, Middlewares,
Excepciones personalizadas.

#  Postman

1.  Registrar usuario\
2.  Login → copiar token\
3.  Usar header: `Authorization: Bearer <token>`\
4.  Consumir endpoints

#  Seguridad

-   Hash de contraseñas\
-   JWT seguro\
-   Validación\
-   Manejo global de errores\
-   Firestore abstraído\
-   Sin exponer info sensible

#  Licencia

MIT © G. Mirarchi
