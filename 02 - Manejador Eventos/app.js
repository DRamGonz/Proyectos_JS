//Añadimos el click listenners a las imágenes
let sourceImages = document.querySelectorAll('#imagenes img');

sourceImages.forEach(image => {
    image.addEventListener('click', event => {
        let frameImagen = document.querySelector('#frame img');
        
        //Cambiamos la imagen del frame con la imagen clickeada. event.target se encarga de buscarla
        frameImagen.setAttribute("src", event.target.getAttribute('src'));
    });
});

//Añadimos el click listenners a los divs de colores.

let colorBlocks = document.querySelectorAll('#colors div');

colorBlocks.forEach(block => {
    block.addEventListener('click', event => {
        let color = window.getComputedStyle(event.target).backgroundColor;

        // document.getElementById('picture').style.backgroundColor = color;
        document.getElementById('picture').style.borderColor=color;
        });    
});

//Añadir los Zooms

document.querySelector('#zoom img:first-child').addEventListener('click', event => {
    let img = document.querySelector('#frame img');
    let dim = img.offsetWidth;
    img.style.width = (dim + 50) + 'px';
    img.style.height = (dim + 50) + 'px';
});

document.querySelector('#zoom img:nth-child(2)').addEventListener('click', event => {
    let img = document.querySelector('#frame img');
    let dim = img.offsetWidth;
    img.style.width = (dim - 50) + 'px';
    img.style.height = (dim - 50) + 'px';
});