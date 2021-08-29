# Proyecto Angular CRUD 
### Desarrollar una aplicación (frontend) utilizando el framework Angular que muestre un listado de usuarios, puedan crearse nuevos registros y editar existentes.
### Se les proporcionaron maquetas (mockups) de como debe visualizarse cada una de las pantallas, así mismo los assets (imágenes y fonts) a utilizar en el proyecto.

### https://drive.google.com/drive/folders/1c_co0rv6lZ77JuQ-VAjmmHqrVXE__L8R?usp=sharing

### Se utilizará una API alojada en el subdominio http://iacenter.victortalamantes.com
### les recomiendo que prueben los servicios en postman y procedan a implementar la conexión con ese backend en su proyecto.


### [GET] http://iacenter.victortalamantes.com
### Regresa un texto informativo indicando que se trata de la API del ejercicio, no tiene otro uso.


### A continuación se enlistan las rutas (del subdominio de la API) a las que hay que consultar o mandar información:

### [GET] /users
### Obtiene un listado de todos los usuarios en la base de datos del backend.

### [GET] /user/:id
### Obtiene la información de un usuario en específico, el envío de la id del usuario es necesario.

### Ejemplo de consulta del usuario 6
### http://iacenter.victortalamantes.com/user/6


### [POST] /user
### Creación de usuario (nuevo)

### Request params:
### firstName <- nombre, máx 45 caracteres, obligatorio*
### lastName <- apellido, máx 45 caracteres, obligatorio*
### location <- ubicación, máx 90 caracteres
### phone <- teléfono, máx 10 caracteres
### gender <- género, máx 1 caracter (m = hombre   O   f = mujer), obligatorio*

### [PUT] /user
### Actualización de usuario existente

### Request params:
### id <- id del usuario que se desea actualizar
### firstName <- nombre, máx 45 caracteres, obligatorio*
### lastName <- apellido, máx 45 caracteres, obligatorio*
### location <- ubicación, máx 90 caracteres
### phone <- teléfono, máx 10 caracteres
### gender <- género, máx 1 caracter (m = hombre   O   f = mujer), obligatorio*

### Para que funcionen los servicios apropiadamente hay que mandar los parámetros como x-www-form-urlencoded o directamente como application/json
### (En postman lo encuentran en la pestaña de body, para mandar directamente un json pueden probar en body/raw y seleccion en el selector json)