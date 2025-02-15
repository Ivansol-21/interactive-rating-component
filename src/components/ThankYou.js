export const ThankYou = (nroSelect) => {
    // Creando elementos del DOM
    const $thankYouCard = document.createElement('div'),
        $h1 = document.createElement('h1'),
        $span = document.createElement('span'),
        $p = document.createElement('p');

    // Agregando contenido
    $span.textContent = `You selected ${nroSelect} out of 5`; // "nroSelect" es el numero que recibe como propiedad
    $h1.textContent = 'Thank you!';
    $p.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

    // Agregando clases CSS
    $thankYouCard.classList.add('thank-you-card');
    $h1.classList.add('thank-you__title');
    $span.classList.add('thank-you__message');
    $p.classList.add('thank-you__message');

    // Agregando los elementos a la tarjeta
    $thankYouCard.appendChild($span);
    $thankYouCard.appendChild($h1);
    $thankYouCard.appendChild($p);

    // Componente final
    return $thankYouCard;
};