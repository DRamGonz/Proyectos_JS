// 2) Realizar una gunción que almacene en un arregle todos los números pares desde a hasta b

document.getElementById("button").addEventListener("click", e => {
    pares();
});

function pares() {
let a = parseInt(document.getElementById("a").value);
let b = parseInt(document.getElementById("b").value);
let resultado = document.getElementById("resultado");
let array = [];

if (a < b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    resultado.value = array.join(", ");  // Mostrar los números separados por coma;
} else {
    alert("El primer número debe ser menor que el segundo.");
}
}




