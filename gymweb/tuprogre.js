//Variables que toman el valor id del form
const workoutForm = document.querySelector('#workout-form');
const workoutLog = document.querySelector('#workout-log');


workoutForm.addEventListener('submit', function(event) {
  event.preventDefault(); //// Evita que se envíe el formulario y recargue la página

//Obtiene los valores de los campos de entrada del form
  const exercise = document.querySelector('#exercise').value;
  const sets = document.querySelector('#sets').value;
  const reps = document.querySelector('#reps').value;
  const weight = document.querySelector('#weight').value;

  //crea nuevo <li>
  const workout = document.createElement('li');
  
  //crea contenido HTML en el <li>
  workout.innerHTML = `
    <div>${exercise}</div>
    <div>Sets: ${sets}</div>
    <div>Reps: ${reps}</div>
    <div>Peso: ${weight} kgs</div>
    <span class="cerrar">&times;</span>
  `;

  //agrega el nuevo registro al registro existente
  workoutLog.appendChild(workout);

  //Resetea el form para borrar los valores ingresados al enviar 
  workoutForm.reset();
});

/*Agrega un event al registro que se activa cuando se hace click, luego verifica que tenga la clase "cerrar", si al dar click tiene
la clase, obtiene el elemento padre y lo borra */
workoutLog.addEventListener('click', function(event) {
  if (event.target.classList.contains('cerrar')) { 
    const workout = event.target.parentElement;
    workoutLog.removeChild(workout);
  }
});


