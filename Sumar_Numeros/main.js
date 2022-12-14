//apuntadores de dos numeros
const num1 = document.getElementById("num1");
// const num1 = document.querySelector("#num1");
const num2 = document.getElementById("num2");
// const num1 = document.querySelector("#num2");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById('operar')
const btnSaludar = document.getElementById('saludar')

btnCalcular.addEventListener("click", sumarNumeros);
btnSaludar.addEventListener("click", saludar);


// funcion que suma dos numeros
function sumarNumeros() {
    const numero1 = parseInt(num1.value);
    const numero2 = parseInt(num2.value);
    const suma = numero1 + numero2;
    resultado.innerHTML = suma;

}

function saludar(){
   let user = prompt("Hola, como te llamas?")
   console.log(user)
   alert('Hola, ' + user + ' que tal?') 
}

