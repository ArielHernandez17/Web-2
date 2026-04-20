//console.log("Hola");
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

//evento de envio del formulario y mostrar los datos en formato JSON
//inicializar el array de usuarios desde el localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

form.addEventListener('submit',
    function(event) {
        event.preventDefault(); //evitar el comportamiento por defecto del formulario
        //obtener los valores del formulario y almacenarlos en el array de usuarios
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('correo').value.trim();
        
        //crear un objeto con los datos del ususario
        const NuevoUsuario = { 
            nombre, email };
        //agregar el array de usuarios
        usuarios.push(NuevoUsuario);
        //guardar el array de usuarios en el localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        //mostrar los usuarios almacenados en el textarea
        mostrarUsuarios();

        //limpiar el formulario
        form.reset();

    });


//mostrar los usuarios almacenados al cargar la página (Si los hay)
mostrarUsuarios();
function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2);
}

//evento para descargar el JSON
descargarBtn.addEventListener('click', 
    function() {
        //convertir el array de objetos a texto JSON 
        const contenidoJSON = JSON.stringify(usuarios, null, 2);
        //crear un blob con el contenido JSON
        const blob = new Blob([contenidoJSON], { type: 'application/json' });
        //crear un enlace temporal para descargar el blob
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = 'usuarios.json';
        enlace.click();

        URL.revokeObjectURL(URL);
    });

