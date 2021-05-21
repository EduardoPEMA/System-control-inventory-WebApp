# System-control-inventory
Aplicación web de control de inventarios utilizando React para el desarrollo del frontend y Strapi para el backend.
Inicialmente podemos encontrar una interfaz sencilla, pues lo que se ve por el momento son los productos en stock que se registraron previamente junto con los movimientos que se realizan (añadir y eliminar).

Para el desarrollo del sistema, fue necesario aplicar la programación por componentes, además de emplear los hooks de useState y useEffect, para el manejo de los datos dentro del frontend.
El registro de nuevos productos se encuentra de momento unicamente accediendo directamente al backend alojado en strapi, donde permite agregar, modificar, actualizar los productos y los eventos que se realizan en stock. Para la definición del modelo se creó una relacion de 1 : n entre las tablas products y stockEvents. Interpretando que un producto puede tener varios eventos.
La obtención de la información del backend se realiza por medio de axios, dentro del hook useEffect de manera asíncrona para que al momento de actualizar la página despliegue los datos en caso de registrar nuevos productos.

# Requerimientos:
  - Versión de node: 14.17.0

# Funcionamiento:

Para la creación y estilización de los componentes, se utiliza la librería de material-ui por medio de npm. Es necesario clonar el repositorio para su funcionamiento, para después ejecutar el comando:
- npm i

El cual se encargará de instalar todas las dependencias necesarias para la compilación del proyecto.

* Frontend:
Dentro de la carpeta /inventory-management ejecutar el siguiente comando:
- npm start

* Backend:
Dentro de la carpeta /backend-inventory ejecutar el siguiente comando:
- npm run develop

Con esto ya tendremos ejecutando de manera local lo requerido para visualizar la interfaz principal:
![image](https://user-images.githubusercontent.com/56621103/119205340-a6514180-ba5d-11eb-8db1-aa8dde384891.png)


Para la fácil visualización de productos registrados, se utiliza el componente Autocomplete de material-ui.
![image](https://user-images.githubusercontent.com/56621103/119205098-e19f4080-ba5c-11eb-97d3-bd900893ba42.png)

Para acceder a los movimientos que se han realizado en determinado producto disponible, basta con dar un solo click en el nombre para el despliegue de la información:
![image](https://user-images.githubusercontent.com/56621103/119205528-11027d00-ba5e-11eb-849c-8db2bb3e5338.png)


