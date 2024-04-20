//Esta función obtiene los valores ingresados por el usuario
function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    //Calculaa el IMC utilizando la fórmula: peso (kg) / altura (m)^2, usando Math.round(redondea el número al entero más cercano)
    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    var dietasuge;
    
    //Condicional. Según el rango de IMC, determina tu estado físico y sugiere una dieta con una imagen
    if (imc < 18.5) {
      clasificacion = 'estás muy delgado/a <br>';
      dietasuge='<IMG class="imageDieta1" SRC="img/asssa.jpeg">';
    } else if (imc < 25) {
      clasificacion = 'estás saludable <br>';
      dietasuge='<IMG class="imageDieta1" SRC="img/dtts.jpg">';
    } else {
      clasificacion = 'tienes sobrepeso <br>';
      dietasuge='<IMG class="imageDieta1" SRC="img/sver.jpg">';
    }
   
    resultado.innerHTML = '<br> Hola ' + nombre  + ' tu IMC es ' + imc + ' y '+clasificacion+ '<br>Dieta sugerida: <br>' +dietasuge;


  }