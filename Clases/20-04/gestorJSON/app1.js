let usuarios = [];//almacenar los usuarios registrados
const form = document.getElementById('userForm');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const tabla = document.getElementById('cuerpoTabla');
const inputArchivo = document.getElementById('importarJSON');
const btnDescargar = document.getElementById('descargar');

//generar funcion para id consecutivo
function generarId() {
    return usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
}

//agregar usuarios
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const email = correoInput.value.trim();

    usuarios.push({ 
        id: generarId(),
        nombre, 
        email });
    mostrarUsuarios();
    form.reset();
});

//mostrar usuarios en la tabla
function mostrarUsuarios() {
    tabla.innerHTML = '';
    usuarios.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td contenteditable="true" onblur="editarCampo(${index},'email',this.textContent)">${user.email}</td>
            <td><button class="btn-delete" onclick="eliminarUsuario(${index})">Eliminar</button></td>
    `;
        tabla.appendChild(row);
    });
}

//editar contenido editable
function editarCampo(index, campo, Valor) {
    usuarios[index][campo] = Valor.trim();
}

function eliminarUsuario(index) {
    if (confirm('¿Desea eliminar este usuario?')) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
    }
}

// Lógica para importar JSON
importarJSON.addEventListener('change', 
    function (e) {
        const archivo = e.target.files[0];
        const lector = new FileReader();
        lector.onload = function (event) {
            try {
                const datos = JSON.parse(event.target.result);
                if (Array.isArray(datos)) {
                    usuarios = datos;
                    mostrarUsuarios();
                } else {
                    alert('El archivo JSON no contiene un array válido.');
                }
            } catch (error) {
                alert('Error al leer el archivo JSON: ' + error.message);
            }
            
            }
});

//descargar JSON actual
btnDescargar.addEventListener('click', function () {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(usuarios));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "usuarios.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});
