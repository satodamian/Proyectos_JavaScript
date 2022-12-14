// Capturar evento de tipeo
const input = document.querySelector('#searchInput')
const userList = document.querySelector('#users')

// Llenar lista de usuarios
let users = []

// evento
window.addEventListener('DOMContentLoaded', async()=>{
    userList.innerHTML = '<h1>Cargando...</h1>'
    // console.log('Loaded...');
    const data = await loadUsers();
    // !Llenar a mi arreglo asignado
    users = data.data;
    // console.log(data.data);
    renderUsers(users);
    
})

// Cargar usuarios
async function loadUsers(){
    const resp = await fetch(`https://fakerapi.it/api/v1/users?_quantity=1000`);
   return await resp.json();
    
}

// Informacion de lo tipeado
input.addEventListener('keyup',(e)=>{
    const newUser = users.filter((user)=>`${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
    renderUsers(newUser)
    // clg(e.target.value)
    console.log(input.value)
})

// Funciones
// --------------------------
const createUserItems = (users) => users.map((user) => (`<li class='bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer'>${user.firstname} ${user.lastname}</li>`)).join('');

// --------------------------
function renderUsers(users){
    const itemsString = createUserItems(users)
    userList.innerHTML = itemsString
}