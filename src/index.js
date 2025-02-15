import { Rating } from './components/Rating.js';

document.addEventListener('DOMContentLoaded', () => {
    // LLamando el elemento principal del DOM
    const $app = document.getElementById('root');
    // Creando el fragmento para los componentes
    const $fragment = document.createDocumentFragment();

    // Agregando componentes al fragmento
    $fragment.appendChild(Rating());

    // Renderizando el fragmento en el main de HTML
    $app.appendChild($fragment);
});

