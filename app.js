const form = document.querySelector('form');
const listaDeseos = document.querySelector('#lista-deseos');

let deseos = JSON.parse(sessionStorage.getItem('deseos')) || [];

// Función para guardar los deseos en el almacenamiento local
function guardarDeseos() {
  sessionStorage.setItem('deseos', JSON.stringify(deseos));
}

// Función para eliminar elemento de la lista de deseos
function eliminarDeseo(elemento) {
  elemento.remove();
  const index = deseos.indexOf(elemento.innerText.slice(0,-8));
  deseos.splice(index, 1);
  guardarDeseos();
}

// Agregar evento 'click' a la lista de deseos
listaDeseos.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    eliminarDeseo(event.target.parentNode);
  }
});

// Agregar evento 'submit' al formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.elements.deseo;
  const nuevoDeseo = document.createElement('li');
  const textoDeseo = document.createTextNode(input.value);
  nuevoDeseo.appendChild(textoDeseo);
  
  const botonEliminar = document.createElement('button');
  botonEliminar.innerText = 'Eliminar';
  nuevoDeseo.appendChild(botonEliminar);
  
  listaDeseos.appendChild(nuevoDeseo);
  deseos.push(input.value);
  guardarDeseos();
  input.value = '';
});

// Recuperar los deseos del almacenamiento local al cargar la página
window.onload = () => {
  deseos.forEach((deseo) => {
    const nuevoDeseo = document.createElement('li');
    const textoDeseo = document.createTextNode(deseo);
    nuevoDeseo.appendChild(textoDeseo);
  
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    nuevoDeseo.appendChild(botonEliminar);
  
    listaDeseos.appendChild(nuevoDeseo);
  });
};
