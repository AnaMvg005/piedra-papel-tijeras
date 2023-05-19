//capturamos elementos del DOM (en este caso los botones)
let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoComputador = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')


let eleccionUsuario= ""
let eleccionCompu = ""

let contadorUsuario = 0
let contadorComputador = 0

botonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_user.png";
  manoComputador.src = "./assets/piedra_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "./assets/piedra_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonPapel.onclick = () => {
  manoUsuario.src = "./assets/papel_user.png";
  manoComputador.src = "./assets/papel_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuario.src = "./assets/papel_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonTijera.onclick = () => {
  manoUsuario.src = "./assets/tijera_user.png";
  manoComputador.src = "./assets/tijera_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuario.src = "./assets/tijera_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

Swal.fire(
    'Bienvenido al juego!',
    'Gana el primero que tenga 3 puntos :)!',
    'success'
  )

  const eleccionComputadora = () =>{
    let opcionAlazar = Math.floor(Math.random()*3);
    //opcion piedra
    if(opcionAlazar == 0){
        manoComputador.src="./assets/piedra_computadora.png"
        eleccionCompu="piedra"
    }
    else if (opcionAlazar == 1){
        manoComputador.src="./assets/papel_computadora.png"
        eleccionCompu="papel"
    }
    else if (opcionAlazar == 2 ){
        manoComputador.src="./assets/tijera_computadora.png"
        eleccionCompu="tijera"
    }

  }
//resultado y limpiar marcador
const resultado = ()=>{
    if(eleccionUsuario=="piedra"){
        if(eleccionCompu=="piedra"){
            labelResultado.textContent="Empate!!😊"
        }

    if(eleccionCompu=="papel"){
        labelResultado.textContent="Perdiste!!😢"
        contadorComputador++;
        puntajeComputador.textContent=contadorComputador;
        ganador(contadorUsuario, contadorComputador);
    }
    if(eleccionCompu=="tijera"){
        labelResultado.textContent="Ganaste!!🤩"
        contadorUsuario++;
        puntajeUsuario.textContent=contadorUsuario;
        ganador(contadorUsuario, contadorComputador);
    }
 }
    if(eleccionUsuario=="papel"){
        if(eleccionCompu=="papel"){
            labelResultado.textContent="Empate!!😊"
        }

    if(eleccionCompu=="tijera"){
        labelResultado.textContent="Perdiste!!😢"
        contadorComputador++;
        puntajeComputador.textContent=contadorComputador;
        ganador(contadorUsuario, contadorComputador);
    }
    if(eleccionCompu=="piedra"){
        labelResultado.textContent="Ganaste!!🤩"
        contadorUsuario++;
        puntajeUsuario.textContent=contadorUsuario;
        ganador(contadorUsuario, contadorComputador);
    }
}
    if(eleccionUsuario=="tijera"){
        if(eleccionCompu=="tijera"){
            labelResultado.textContent="Empate!!😊"
        }

    if(eleccionCompu=="piedra"){
        labelResultado.textContent="Perdiste!!😢"
        contadorComputador++;
        puntajeComputador.textContent=contadorComputador;
        ganador(contadorUsuario, contadorComputador);
    }
    if(eleccionCompu=="papel"){
        labelResultado.textContent="Ganaste!!🤩"
        contadorUsuario++;
        puntajeUsuario.textContent=contadorUsuario;
        ganador(contadorUsuario, contadorComputador);
    }
}
    
}
const ganador = ()=>{
if(contadorComputador==3)
    {
        Swal.fire(
            'Perdiste!!😢',
            'La computadora gano!',
            'error'
        )
        contadorComputador=0
        contadorUsuario=0
        puntajeUsuario.textContent=0
        puntajeComputador.textContent=0
        labelResultado.textContent="Seleccione una opcion"
        manoUsuario.src = "./assets/piedra_user.png";
        manoComputador.src = "./assets/piedra_computadora.png";

    }else if(contadorUsuario==3){
        
        Swal.fire(
            'Ganaste!!🤩',
            'felicidades',
            'success'
        )
        contadorComputador=0
        contadorUsuario=0
        puntajeUsuario.textContent=0
        puntajeComputador.textContent=0
        labelResultado.textContent="Seleccione una opcion"
        manoUsuario.src = "./assets/piedra_user.png";
        manoComputador.src = "./assets/piedra_computadora.png";


    }
}
