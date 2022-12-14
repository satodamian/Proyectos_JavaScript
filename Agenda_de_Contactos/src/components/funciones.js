// Guardar Contacto
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto));
    // Refresh
    window.location.href="/";
}

// Cargar los contactos ya agregados
const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db);
    console.log(claves);

    for (clave of claves) {
        // Transformar el string en objeto
       let contacto = JSON.parse(db.getItem(clave));
        // Funcion para agregar al div
        crearContacto(parentNode, contacto, db);
        }
    }

    const crearContacto = (parentNode, contacto, db) => {
        let divContacto = document.createElement('div');
        let nombreContacto = document.createElement('h3');
        let numeroContacto = document.createElement('p');
        let direccionContacto = document.createElement('p');
        let iconoBorrar = document.createElement('span');

        // Rellenar los datos
        nombreContacto.innerHTML = contacto.nombre;
        numeroContacto.innerHTML = contacto.numero;
        direccionContacto.innerHTML = contacto.direccion;
        iconoBorrar.innerHTML = 'delete_forever';

        // Agregar clases
        divContacto.classList.add('tarea');
        iconoBorrar.classList.add('material-symbols-outlined', 'icono');

        // Borrar un contacto
        iconoBorrar.onclick = () => {
            db.removeItem(contacto.id);
            // Refresh
            window.location.href="/";
        }

        // Agregar al DOM
        divContacto.appendChild(nombreContacto);
        divContacto.appendChild(numeroContacto);
        divContacto.appendChild(direccionContacto);
        divContacto.appendChild(iconoBorrar);

        // ParentNode
        parentNode.appendChild(divContacto);
        
    }
    

