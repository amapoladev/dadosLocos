
// Inicializar variables para contar los resultados

let resultadoGanaste = 0;
let resultadoPerdiste = 0;

// función aleatorio dados

function aleatorio(superior){
  return Math.floor(Math.random() * superior) + 1;
}

//llamar a la función aleatorio para generar un número entre 1 y 6
aleatorio(6);


// función para lanzar los dados

function lanzar(){
  //generar un numero aleatorio entre 1 y 6 para dado 1

let dado1=  aleatorio(6);
console.log(dado1);
  //generar un numero aleatorio entre 1 y 6 para dado 2

let dado2=  aleatorio(6);
console.log(dado2);

  // cambiar imagen dado 1

document.getElementById("dadosImagen1").src= "images/" + dado1 + ".svg";

  //cambiar imagen dado 2
  document.getElementById("dadosImagen2").src= "images/" + dado2 + ".svg";

  //cambiar el texto del resultado y contar los resultados
  
  if (dado1 == dado2){ 
    document.getElementById("resultado").innerHTML="GANASTE!!!";
    resultadoGanaste++;
    document.getElementById("resultadoGanaste").innerHTML = " " + resultadoGanaste;
} else{
    document.getElementById("resultado").innerHTML="PERDISTE!!!";
    resultadoPerdiste++;
    document.getElementById("resultadoPerdiste").innerHTML = " " + resultadoPerdiste;
  }

}

