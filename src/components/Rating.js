import BotonSubmit from './BotonSubmit.js';
import { numSeleccionado } from '../utils/funcionalidades.js';

export const Rating = () => {
    // Creamos los elementos del DOM
    const $cardRating = document.createElement('div'),
        $star = document.createElement('img'),
        $starContent = document.createElement('figure'),
        $h1 = document.createElement('h1'),
        $p = document.createElement('p'),
        $calificacion = document.createElement('div'),
        $divText = document.createElement('div');
    // Variable para guardar el numero seleccionado
    let nroSelect = 0;

    // Agrendo ruta y atributos a el icono star
    $star.setAttribute('src', './src/images/icon-star.svg');
    $star.setAttribute('alt', 'icon-star');

    // Agregando contenido y anidando elementos
    $starContent.appendChild($star);
    $divText.appendChild($h1);
    $divText.appendChild($p);
    $h1.textContent = 'How did we do?';
    $p.textContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';
    
    // Creando los números de calificación dinámicamente
    for (let i = 1; i <= 5; i++) {
        const $divN = document.createElement('div'),
            $span = document.createElement('span');
        
        $divN.setAttribute('id', `N-${i}`);
        $divN.classList.add('C-n');

        $span.textContent = `${i}`;
        $divN.appendChild($span);
        $calificacion.appendChild($divN);
    }

    // Agregando clases CSS
    $starContent.classList.add('stars-content');
    $cardRating.classList.add('card-rating');
    $star.classList.add('icon-star');
    $h1.classList.add('rating__question');
    $p.classList.add('rating__detalle');
    $calificacion.classList.add('rating__calificacion');

    // Agregando los elementos a la tarjeta Rating
    $cardRating.appendChild($starContent);
    $cardRating.appendChild($divText);
    $cardRating.appendChild($calificacion);

    // Se agrega el componente, el cual recibe una funcion como parametro; actualiza el numero seleccionado cuando se da click en el boton
    $cardRating.appendChild(BotonSubmit(() => nroSelect)); // Se agrega la constante que tiene el componentente

    // Función para la cantidad de estrellas que se agregaran (Opcional)
    const cantidadStar = (cantidad) => {
        nroSelect = cantidad; // En esta variable se guarda el numero seleccionado (cantidad)

        $starContent.innerHTML = ''; // Limpiar contenido previo
        for (let i = 0; i < cantidad; i++) {
            const $newStar = document.createElement('img');

            $newStar.setAttribute('src', './src/images/icon-star.svg');
            $newStar.setAttribute('alt', 'icon-star');
            $newStar.classList.add('icon-star');

            $starContent.appendChild($newStar);
        }
    };

    // Manejador de eventos 'CLICK'
    $calificacion.addEventListener('click', e => {
            numSeleccionado( // Esta es la funcion que importamos; para saber que numero se selecciono. Cuando ocurra el evento.
                e.target, // Propiedad 1; quien dispara el evento.
                document.querySelectorAll('.C-n'), // Propiedad 2; la NodeList de los numeros.
                cantidadStar //Propiedad 3; funcion que calcula la cantidad de estrellas.
            );
    });

    // Componente final
    return $cardRating;
};