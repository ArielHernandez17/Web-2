// 1. Array global (se mantiene constante la referencia al array)
const listaUsuarios = []; 

const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // 2. Obtener valores
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // 3. Crear el objeto con un nombre distinto al array (ej: nuevoUsuario)
    const nuevoUsuario = {
        nombre: nombre,
        email: email
    };

    // 4. Agregar el objeto al array global
    listaUsuarios.push(nuevoUsuario);

    // 5. Mostrar el ARRAY completo en formato JSON
    // Usamos listaUsuarios para mostrar todos los acumulados
    salida.textContent = JSON.stringify(listaUsuarios, null, 2);

    // Opcional: Limpiar el formulario
    event.target.reset();
});