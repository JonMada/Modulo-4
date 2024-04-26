//Ejemplo aplicado a objetos: creamos dos productos

const producto = {
    nombre : 'Teléfono',
    precio: 69
};

const productoDos = {
    nombre: 'Televisión',
}

//Creamos la función con el valor predeterminado en el argumento 'precio'
const mostrarInfoProducto = ({nombre, precio = 'Precio no disponible'}) => {
    console.log(`
    Nombre del producto : ${nombre}
    Precio del producto: ${precio}
    `);
}

//Llamamos a la función
mostrarInfoProducto(producto); 
/* Salida -->
    Nombre del producto : Teléfono
    Precio del producto: 69 */

mostrarInfoProducto(productoDos);
/* Salida --> 
    Nombre del producto : Televisión
    Precio del producto: Precio no disponible */