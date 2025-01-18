//MaNEJADORES PARA LOS EVENTGOS

document.getElementById("appendNode").addEventListener("click", e => {
    //Creo un nuevo nodo.
    let element = document.createElement("li");
    let text = document.createTextNode("SECCIÓN D");

    //Construyo el nuevo nodo.
    element.append(text);

    //Lo añado al final de la lista.
    document.querySelector("ul").append(element);
    
});

document.getElementById("appendString").addEventListener("click", e => {
    //Añado texto, puedo comprobar que se añade un nodo texto.

    let li = document.createElement("li");
    li.textContent = "Sección Texto";
    document.querySelector("ul").append(li);
});

document.getElementById("prependNode").addEventListener("click", e => {
    //Creo un nuevo nodo.
    let element = document.createElement("li");
    let text = document.createTextNode("SECCIÓN Pre-A");

    //Construyo el nuevo nodo.
    element.append(text);

    //Lo añado al final de la lista.
    document.querySelector("ul").prepend(element);
    
});

document.getElementById("beforeNode").addEventListener("click", e => {
    //Creo un nuevo nodo.
    let element = document.createElement("p");
    let text = document.createTextNode("Párrafo a añadir antes de la lista");

    //Construyo el nuevo nodo.
    element.append(text);

    //Lo añado al final de la lista.
    document.querySelector("ul").before(element);
    
});

document.getElementById("beforeString").addEventListener("click", e => {
    //Añado texto, puedo comprobar que se añade un nodo texto.

    let li = document.createElement("p");
    li.textContent = "Párrafo a añadir antes de la lista";
    document.querySelector("ul").before(li);
});

document.getElementById("afterNode").addEventListener("click", e => {
    //Creo un nuevo nodo.
    let element = document.createElement("p");
    let text = document.createTextNode("Párrafo a añadir antes de la lista");

    //Construyo el nuevo nodo.
    element.append(text);

    //Lo añado al final de la lista.
    document.querySelector("ul").after(element);
    
});

document.getElementById("cloneNode").addEventListener("click", e => {
    //Clono la última fila de la tabla
    let element = document.querySelector("tbody").lastElementChild.cloneNode(true);

    //lo añado al final
    document.querySelector("tbody").append(element);
});

document.getElementById("replaceWidth").addEventListener("click", e => {
   
    //Creo un nuevo nodo.
    let fila = document.createElement("tr");
    let celda = document.createElement("th");
    celda.setAttribute("colspan", "4");
    let contenido = document.createTextNode("REEMPLAZO");

    //Construyo el nuevo nodo.
    celda.append(contenido);
    fila.append(celda);

    //construyo los elementos.
    celda.append(contenido);
    fila.append(celda);

    //Remplazo la primera fila por la fila creada
    document.querySelector("tbody").firstElementChild.replaceWith(fila);
    
});

document.getElementById("innerHTML").addEventListener("click", e => {
    //Elimino la última fila de la tabla
    document.querySelector("tbody").lastElementChild.innerHTML="<th colspan='4'>E</th>";
});

// Botones de Remover

// Variable para guardar el elemento cuando lo borro
let deletedRow;

// Borramos la primera fila usando removechild
// Necesitamos la refferencia al padre

let removeChild = document.getElementById("removeChild");
removeChild.addEventListener("click", e => {
    let tbody = document.querySelector("tbody");
    tbody.removeChild(document.querySelector ("tbody tr"));
});

// Borramos la última fila usando remove
// Solo necesito la referencia al elemento

let remove = document.getElementById("remove");
remove.addEventListener("click", e => {
    deletedRow = document.querySelector("tbody").lastElementChild;

    //Muestro el elemento que quiero borrar
    console.log("-----Elemento a borrar -------------");
    console.log(deletedRow);

    // Muestro el padre del elemento que quiero borrar
    console.log("-----Padre del elemento antes de borrar-------------");
    console.log(deletedRow.parentElement);

    // Borro el elemento
    deletedRow.remove();

    // El elemento sigue existiendo
    console.log("-----Compruebo que el elemento existe después de borrarlo-------------");
    console.log(deletedRow);

    // Muestro el padre del elemento tras borrarlo
    console.log("-----Padre del elemento después de borrarlo-------------");
    console.log(deletedRow.parentElement);
});

// Recupero la última fila para comprobar que el nodo sigue ahí tras el remove
let recover = document.getElementById("recover");
recover.addEventListener("click", e => {
if (deletedRow){
    document.getElementsByTagName("tbody")[0].append(deletedRow);
} else {
    alert("Aún no se ha borrado la fila")
}
});