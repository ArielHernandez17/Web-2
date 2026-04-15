const carrito = [];

// Clase en Mayúscula (Convención)
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Función para agregar productos
function agregarProducto(carrito, producto, cantidad) {
    // Buscamos si el producto ya existe para no duplicar filas
    const indice = carrito.findIndex(item => item.producto.nombre.toLowerCase() === producto.nombre.toLowerCase());

    if (indice !== -1) {
        carrito[indice].cantidad += cantidad;
    } else {
        carrito.push({ producto, cantidad });
    }

    mostrarCarrito(carrito);
}

// Función para renderizar el carrito y calcular el total
function mostrarCarrito(carrito) {
    const listaProductos = document.getElementById('listaProductos');
    const totalCompra = document.getElementById('total-compra');
    
    listaProductos.innerHTML = ''; 
    let sumaTotal = 0;

    carrito.forEach(item => {
        const subtotal = item.producto.precio * item.cantidad;
        sumaTotal += subtotal;

        const li = document.createElement('li');
        li.textContent = `${item.producto.nombre} - $${item.producto.precio.toFixed(2)} x ${item.cantidad} (Subtotal: $${subtotal.toFixed(2)})`;
        listaProductos.appendChild(li);
    });

    // Actualizamos el total en el HTML
    totalCompra.textContent = sumaTotal.toFixed(2);
}

// Manejador del evento Submit
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener y convertir valores
    const nombre = document.getElementById('nombre-producto').value.trim();
    const precio = parseFloat(document.getElementById('precio-producto').value);
    const cantidad = parseInt(document.getElementById('cantidad-producto').value);

    // Validación de seguridad
    if (nombre && precio >= 0 && cantidad > 0) {
        const nuevoProducto = new Producto(nombre, precio);
        
        agregarProducto(carrito, nuevoProducto, cantidad);

        // Limpia todos los inputs del formulario automáticamente
        event.target.reset();
    }

});