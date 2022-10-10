// Control menú hamburguesa
let menu = document.querySelector('ul.menu');
let botonAbrir = document.querySelector('#abrir-menu');
let botonCerrar = document.querySelector('#cerrar-menu');
let links = document.querySelectorAll('.link');

function abrirCerrarMenu() {  
  menu.classList.toggle('menuopen');
}

botonAbrir.addEventListener('click', abrirCerrarMenu);
botonCerrar.addEventListener('click', abrirCerrarMenu);

// Cierra menú al hacer click en enlace
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menuopen');
  });
});

// Animaciones + Intersection Observer
const observer = new IntersectionObserver((elementos) => {
  console.log(elementos);
  elementos.forEach((elemento) => {
    if (elemento.isIntersecting) {
      elemento.target.classList.add('mostrar');
    } else {
      elemento.target.classList.remove('mostrar');
    }
  });
}, { root: null, rootMargin: '-100px 0px', threshold: 0.25});

const secciones = document.querySelectorAll('.oculto');
secciones.forEach((seccion) => observer.observe(seccion));