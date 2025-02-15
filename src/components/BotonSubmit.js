import { ThankYou } from './ThankYou.js';

export default function BotonSubmit(getNroSelect) {
    // Creando elementos del DOM
    const $button = document.createElement('button');

    // Agregando clases y atributos
    $button.id = 'B-submit';
    $button.classList.add('btm-Sut');
    $button.textContent = 'SUBMIT';
    
    // Manejador de eventos 'CLICK'
    $button.addEventListener('click', () => {
        const $nodoPadre = document.getElementById('root');
        $nodoPadre.innerHTML = ''; // Limpiar contenido previo; el componente Rating
        $nodoPadre.appendChild(ThankYou(getNroSelect())); // Agrega el componete ThankYou, el cual llama la funcion que recibe como propiedad el boton, y lo que retorna (numero) lo pasa como propiedad al componente ThankYou
    });

    return $button;
}

