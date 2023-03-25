const form = document.querySelector('form');
const listaDeseos = document.querySelector('#lista-deseos');

// Función para eliminar elemento de la lista de deseos
function eliminarDeseo(elemento) {
  elemento.remove();
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
  nuevoDeseo.innerText = input.value;
  
  const botonEliminar = document.createElement('button');
  botonEliminar.innerText = 'Eliminar';
  nuevoDeseo.appendChild(botonEliminar);
  
  listaDeseos.appendChild(nuevoDeseo);
  input.value = '';
});
