const carrito = document.getElementById("carrito");
const elementos3 = document.getElementById("lista-3"); 
const lista = document.querySelector("#lista-carrito3 tbody"); 
const vaciarCarritoBtn3 = document.getElementById("vaciar-carrito3"); 

cargarEventListeners();

function cargarEventListeners() {
  elementos3.addEventListener("click", comprarElemento);
  carrito.addEventListener("click", eliminarElemento);
  vaciarCarritoBtn3.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito3")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElementos(elemento);
  }
}

function leerDatosElementos(elemento) {
  const infoElemeneto = {
    imagen: elemento.querySelector("img").src,
    titulo: elemento.querySelector("h3").textContent,
    precio: elemento.querySelector(".precio3").textContent, 
    id: elemento.querySelector("a").getAttribute("data-id3"), 
  };
  insertarCarrito(infoElemeneto);
}

function insertarCarrito(elemento) {
  const row = document.createElement("tr");
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
            <a href="#" class="borrar" data-id3="${elemento.id}">x</a> 
        </td>
    `;
  lista.appendChild(row);
}

function eliminarElemento(e) {
  e.preventDefault();
  let elemento, elementoId;
  if (e.target.classList.contains("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector("a").getAttribute("data-id3");
  }
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  return false;
}
