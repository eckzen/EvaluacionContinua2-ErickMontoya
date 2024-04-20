// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];


// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block"; //el elemento es renderizado como un bloque
});


// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none"; //none: el elemento no se mostrará
});


// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


/*IMPORTANTE: Averiguar si el siguiente código puede introducirse arriba y ahorrar código*/
//Ventana modal 2
var modal2 = document.getElementById("ventanaModal2");
var boton2 = document.getElementById("abrirModal2");
var span2 = document.getElementsByClassName("cerrar2")[0];
boton2.addEventListener("click",function() {
  modal2.style.display = "block";
});
span2.addEventListener("click",function() {
  modal2.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

//Ventana modal 3
var modal3 = document.getElementById("ventanaModal3");
var boton3 = document.getElementById("abrirModal3");
var span3 = document.getElementsByClassName("cerrar3")[0];
boton3.addEventListener("click",function() {
  modal3.style.display = "block";
});
span3.addEventListener("click",function() {
  modal3.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});




/* Mismo código simplificado, se busca la manera de tomar el id de cada Modal, sólo funciona el primer modal
 function toggleModal(modalId,buttonId,spanId) {

   var modal = document.getElementById("ventanaModal");
   var boton = document.getElementById("abrirModal");
   var span = document.getElementsByClassName("cerrar")[0];

   boton.addEventListener("click", function() {
     modal.style.display = "block";
    
   });

   span.addEventListener("click", function() {
     modal.style.display = "none";
    
   });

   window.addEventListener("click", function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
      
     }
   });
 }

 toggleModal("Modal");
 toggleModal("Modal2");
 toggleModal("Modal3");
*/






//--------CALCULADORA REPS (Entrenamiento ENOM)

const totalRoundsInput = document.querySelector('.totalRounds');
const totalRepsOutput = document.querySelector('.totalReps');

totalRoundsInput.addEventListener('change', deathByCalc);

function deathByCalc() {
  const totalRounds = Number(totalRoundsInput.value);  //Number obtiene el valor del input de la variable totalRoundsInput, lo convierte a un número y lo almacena en la variable totalRounds
  const totalReps = (totalRounds * (totalRounds + 1)) / 2;
  totalRepsOutput.innerHTML = totalReps;
}


