/*Realiza una función que nos permita realizar 4 operaciones aritméticas, es decir,  
nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 paramtros,
es decir a y b y el nombre de la operación en minuscula. Si el parametro de la operación no es 
valido que mande un error personalizado a la crossOriginIsolated.  */


function calcular () {

let num1 = parseInt(document.getElementById("num1").value);

let num2 = parseInt(document.getElementById("num2").value);

let resultado;

// Para borrar los input si queremos reiniciar la calculadora
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");

let operaciones = document.getElementById('operaciones').value;

if (!isNaN(num1) && !isNaN(num2)) {

    switch (operaciones) {

        case "sumar":
            resultado = num1 + num2;
            break;

        case "restar":  
        resultado = num1 - num2;
        break;

        case "multiplicar":
            resultado = num1 * num2;
            break;

        case "dividir": 
        if (num2 === 0) {
            throw new Error("No se puede dividir por cero.");
        } else {
            resultado = (num1 / num2).toFixed(2);
        }
        break;
        
        case "selector": 
        resultado = "";
        num1Input.value = "";  // Limpiar Número 1
        num2Input.value = "";  // Limpiar Número 2
        break;
        
        default:
            alert("Operación inválida.");
    }
    document.getElementById("selector").value = resultado;

} else {
    alert("Debe ingresar valores numéricos en los dos campos.");
    operaciones.value = "selector"; // Volver a "Iniciar"
    
    if (isNaN(num1)) {
        num1Input.focus();
    } else {
        num2Input.focus();
    }
}
}

