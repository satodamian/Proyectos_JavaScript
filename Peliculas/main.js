// Cargar por primera vez
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click',()=>{
    pagina++;
    cargarPeliculas();
});

btnAnterior.addEventListener('click',()=>{
    if(pagina>1){
      pagina--;
      cargarPeliculas();
    }
    
})


const cargarPeliculas = async () => {
  // Conectar a la API
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ba601ad8eb4c7cbabdaea70541eb76c2&page=${pagina}`
    );
    console.log({ Respuesta_Inicial: res });
    if (res.status === 200) {
      // Acceder a la informacion
      const datos = await res.json();
    //   console.log({ Datos: datos.results});
    let peliculas = '';
    datos.results.forEach((pelicula)=>{
       peliculas += `
            <div class='pelicula'>
                <img class='poster' src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt=''>
                <h3 class='titulo'>${pelicula.title}</h3>
                </div>
                `
    })

    document.querySelector('.contenedor').innerHTML = peliculas;


    }else if(res.status === 401){
      console.log("Mal llave");
    }else if(res.status === 404){
        console.log("No existe");
    }else{
        console.log('Error desconocido');
    }

  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
