const listaUsuarios = document.getElementById('listaUsuarios');

// Función para obtener datos de usuarios
async function obtenerUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    mostrarUsuarios(usuarios);
}

// Función para mostrar usuarios en el DOM
function mostrarUsuarios(usuarios) {
    usuarios.forEach(usuario => {
        // Generar edad aleatoria entre 18 y 60
        const edad = Math.floor(Math.random() * (60 - 18 + 1)) + 18;

        // Construir dirección en un formato más legible
        const direccion = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;

        // Asignar imagen por ID
        const imagenURL = `./assets/img/${usuario.id}.jpeg`;

        // Crear un nuevo elemento de usuario
        const li = document.createElement('li');
        li.classList.add('usuario');
        li.innerHTML = `
            <div class="usuario-detalles">
                <div class="usuario-info">
                    <span><strong>Nombre:</strong> ${usuario.name}</span>
                    <span><strong>Edad:</strong> ${edad}</span>
                    <span><strong>Username:</strong> ${usuario.username}</span>
                    <span><strong>Teléfono:</strong> ${usuario.phone}</span>
                    <span><strong>Email:</strong> ${usuario.email}</span>
                </div>
                <div class="usuario-extra">
                    <span><strong>Compañía:</strong> <span>${usuario.company.name}</span></span>
                    <span><strong>Dirección:</strong> <span>${direccion}</span></span>
                </div>
            </div>
            <img src="${imagenURL}" alt="Imagen de ${usuario.name}">
        `;
        listaUsuarios.appendChild(li);
    });
}

// Llamar la función para obtener y mostrar usuarios
obtenerUsuarios();
