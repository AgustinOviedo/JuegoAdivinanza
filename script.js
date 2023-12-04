// El juego selecciona un numero al azar

let numeroAlAzar = Math.floor(Math.random() * 100) + 1;

// Aca se almacena el numero que entra el jugador

let numeroDeEntrada = document.getElementById("numeroEntrada");

// Aca se va a almacenar el mensaje.

let mensaje = document.getElementById("mensaje")

// Esta accion se va a ejecutar cuando toquemos el boton chequear

function chequearResultado() {
    let numeroIngresado = parseInt(numeroDeEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = '¡Error! El numero debe ser entre 1 y 100'; // .textContent es una propiedad del elemento parrafo;
        mensaje.style.color = 'red'
        return                                                          // El return solo funciona parecido al break en switch
    } else if (numeroIngresado < numeroAlAzar) {
        mensaje.textContent = '¡Casi! El numero es mas alto que el ingresado';
        mensaje.style.color = 'red'
        return
    } else if (numeroIngresado > numeroAlAzar) {
        mensaje.textContent = '¡Casi! El numero es mas bajo que el ingresado';
        mensaje.style.color = 'red'
        return
    } else if (numeroIngresado === numeroAlAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Adivinaste el numero!';
        mensaje.style.color = 'green'
        numeroDeEntrada.disabled = true;                                // El disabled sirve para que no se pueda ingresar mas numeros una vez que ganaste
        return
    } else {
        mensaje.textContent = '¡Upa! ¿Que ingresaste?';
        mensaje.style.color = 'blue'
    }
}