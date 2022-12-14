// Apuntadores en DOM
const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');

// Listado de tareas
const listadoTareas = document.querySelector('.listado-tareas');

// Acceder a LocalStorage dentro de bd
const db = window.localStorage;

// Eventos
btnAgregarTarea.onclick = () =>{
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value
    }

    // console.log(contacto);
    guardarContacto(db, contacto);
}

cargarContactos(db, listadoTareas);