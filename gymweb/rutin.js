function generateWorkout() {

    //definimos en la función una variable con un array con los ejercicios
    const exercises = ['flexiones', 'sentadillas', 'planchas', 'zancadas', 'burpees', 'jumping jacks', 'abdominales', 'mountain climbers', 'elevación de rodillas'];

    //definimos otra variable con un array con las repeticiones posibles
    const reps = [10, 15, 20, 25, 30];

    //variable con array con los sets posibles
    const sets = [2, 3, 4];

    //se obtiene el id donde se mostrará la rutina
    const workout = document.getElementById('workout');

    //se utiliza Math.randon() para selección aleatoria, lenght devuelve los elementos de su array
    const exercise1 = exercises[Math.floor(Math.random() * exercises.length)];

    const exercise2 = exercises[Math.floor(Math.random() * exercises.length)];

    const exercise3 = exercises[Math.floor(Math.random() * exercises.length)];

    const rep1 = reps[Math.floor(Math.random() * reps.length)];

    const rep2 = reps[Math.floor(Math.random() * reps.length)];

    const rep3 = reps[Math.floor(Math.random() * reps.length)];

    const set1 = sets[Math.floor(Math.random() * sets.length)];

    const set2 = sets[Math.floor(Math.random() * sets.length)];

    const set3 = sets[Math.floor(Math.random() * sets.length)];

    //crea el contenido en el html tomando los valores anteriores
    workout.innerHTML = '<h2>Rutina de hoy:</h2><ul><li>' + set1 + ' sets de ' + rep1 + ' ' + exercise1 + '</li><li>' + set2 + ' sets de ' + rep2 + ' ' + exercise2 + '</li><li>' + set3 + ' sets de ' + rep3 + ' ' + exercise3 + '</li></ul>';

  }