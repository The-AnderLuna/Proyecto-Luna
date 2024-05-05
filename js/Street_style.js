
const carrito = document.getElementById('carrito');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito2 tbody');
const vaciarCarritoBtn2 = document.getElementById('vaciar-carrito2');

cargarEventListeners();

function cargarEventListeners() {
    elementos2.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn2.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito2')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    }
}

function leerDatosElementos(elemento) {
    const infoElemeneto = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio2').textContent, 
        id: elemento.querySelector('a').getAttribute('data-id2')
    }
    insertarCarrito(infoElemeneto);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id2="${elemento.id}">x</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento, elementoId; 
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id2'); 
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}


