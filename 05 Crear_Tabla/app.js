
let boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    let inputFilas = document.getElementById("filas").value;
    let inputColumnas = document.getElementById("columnas").value;

    // Limpiar el contenido previo del div resultado para evitar duplicados
    document.getElementById("resultado").innerHTML = "";

    crearTabla(inputFilas, inputColumnas);
});

function crearTabla (inputFilas, inputColumnas) {
    let filas = inputFilas;
    let columnas = inputColumnas;
    // Crear el elemento tabla
    let tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");
            celda.textContent =(i + 1) + ","+ (j + 1);
            fila.append(celda);
        }
        tabla.append(fila);
    }

    // Insertar la tabla en el div con id="resultado"
    document.getElementById("resultado").appendChild(tabla);
}




