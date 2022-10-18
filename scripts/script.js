let reviews = [
  {
    nombre: 'leonardo arab',
    comentario:
      'Una experiencia excelente. Desde el primer momento Guillermo es un profesional, muy predispuesto, y brinda una contencion para que la mudanza sea lo mas agradable posible. El equipo es sumamente responsable, hacen las cosas bien, con paciencia y de muy buena voluntad. He contratado el servicio de mudanza completo, incluido el embalaje de vajillas y ropa, y desembalaje. Me generaron mucha confianza. Excelente trabajo! Altamente recomendable!',
    estrellas: '5',
    link: 'https://g.co/kgs/zqvZtT',
  },
  {
    nombre: 'Judith Barengo',
    comentario:
      'Excelente servicio de mudanza! Muy buena onda y predisposición. Vivía en un segundo piso por escalera y se bancaron todo! Rápidos y seguros. Embalaron heladera, tele y muebles. Super recomendable',
    estrellas: '5',
    link: 'https://g.co/kgs/RZ5UfY',
  },
  {
    nombre: 'Carlos Dieciseis',
    comentario:
      'Excelente servicio. Guillermo fue muy amable y el equipo de Miguel realizó la mudanza (a tercer piso sin ascensor!) con mucho entusiasmo y energía. Hasta tuvieron el detalle de colocar las lamparitas.',
    estrellas: '5',
    link: 'https://g.co/kgs/zvCzXZ',
  },
  {
    nombre: 'Norma Solorza',
    comentario:
      'Excelente servicio, todos los chicos trabajan súper bien! Organizados y muy rápidos. Muy cuidadosos con las cosas delicadas, embalajes excelente. Muchísimas gracias GyG y especialmente a Guillermo por su excelente atención.',
    estrellas: '5',
    link: 'https://g.co/kgs/5PtvkG',
  },
  {
    nombre: 'Javier Gallerano',
    comentario:
      'Atentos con todo, encontramos la vuelta para hacer mí mudanza más accesible, puntuales, embalaron todo en 2 horas, salieron en el mismo día y una vez llegados, en 2 horitas dejaron todo listo en el otro depto (mudanza de Cba a San Luis). Guillermo siempre disponible para contestar cualquier duda o inconveniente. Sin dudas recomendable!',
    estrellas: '5',
    link: 'https://g.co/kgs/rzU2Dm',
  },
  {
    nombre: 'Fatima Quipildor',
    comentario:
      'Excelente servicio,muy responsables, buena atencion,puntuales y todo llego en perfecto estado,muchas gracias y bendiciones a todos los que forman parte de esta empresa,un gran equipo...',
    estrellas: '5',
    link: 'https://g.co/kgs/y9JFpR',
  },
];

let reviewCards = document.querySelectorAll('.review-card');

// Función generar estrellas
function generarEstrellas(numero) {
  let contenido = "";
  for (let i = 0; i < numero; i++) {
    contenido += `<span class="review-star">&#9733</span>`
  }
  return contenido;
}

reviews.forEach((review, index) => {
  let nombre = review.nombre;
  let comentario = review.comentario;
  let estrellas = Number(review.estrellas);
  let link = review.link;
  let reviewCard = reviewCards[index];    
  reviewCard.querySelector('.review-card-nombre').textContent = nombre;
  reviewCard.querySelector('.review-card-comentario').textContent = comentario;
  reviewCard.querySelector('a.review-card-link').href = link;

  let estrellasHtml = generarEstrellas(estrellas);
  reviewCard.querySelector('.review-card-estrellas').innerHTML = estrellasHtml;

});

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
// const observer = new IntersectionObserver((elementos) => {
//   elementos.forEach((elemento) => {
//     if (elemento.isIntersecting) {
//       elemento.target.classList.add('mostrar');
//     } else {
//       elemento.target.classList.remove('mostrar');
//     }
//   });
// }, { root: null, rootMargin: '-100px 0px', threshold: 0.25});

// const secciones = document.querySelectorAll('.oculto');
// secciones.forEach((seccion) => observer.observe(seccion));
