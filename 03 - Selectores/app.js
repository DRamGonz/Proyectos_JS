let celdas = document.querySelectorAll('tbody td');

// Función a ejecutar cuando entramos en la celda
function entrada(e) {
    let parnt = e.target.parentElement; // La fila en la que me encuentro.


    // Obtengo la posición del elemento
    let position = Array.from(parnt.children).indexOf(e.target);


    // Modifico los estilos de los hermanos (misma fila)
    Array.from(parnt.children).forEach(item => {
        item.style.backgroundColor = "#F00";
        item.style.height = '90px';
    });

    // De las filas anteriores
    let filaAnterior = parnt.previousElementSibling;
    while (filaAnterior) {
        let celda = filaAnterior.children[position];
        celda.style.backgroundColor = "#F00";
        filaAnterior = filaAnterior.previousElementSibling;
    }

    // De las filas posteriores
    let filaPosterior = parnt.nextElementSibling;
    while (filaPosterior) {
        let celda = filaPosterior.children[position];
        celda.style.backgroundColor = "#F00";
        filaPosterior = filaPosterior.nextElementSibling;
    }
}

// Función a ejecutar cuando salimos de la celda
function salimos (e) {
    let parnt = e.target.parentElement; // La fila en la que me encuentro.


    // Obtengo la posición del elemento
    let position = Array.from(parnt.children).indexOf(e.target);


    // Ponemos los hermanos otra vez en blaco.
    Array.from(parnt.children).forEach(item => {
        item.style.backgroundColor = "#FFF";
        item.style.height = '90px';
    });

    // De las filas anteriores
    let filaAnterior = e.target.parentElement.previousElementSibling;
    while (filaAnterior) {
        let celda = filaAnterior.children[position];
        celda.style.backgroundColor = "#FFF";
        filaAnterior = filaAnterior.previousElementSibling;
    }

    // De las filas posteriores
    let filaPosterior = e.target.parentElement.nextElementSibling;
    while (filaPosterior) {
        let celda = filaPosterior.children[position];
        celda.style.backgroundColor = "#FFF";
        filaPosterior = filaPosterior.nextElementSibling;
    }
}

//Establecemos los ma

      celdas.forEach(celda => {
        celda.addEventListener('mouseenter', entrada);
        celda.addEventListener('mouseleave', salimos);
      });