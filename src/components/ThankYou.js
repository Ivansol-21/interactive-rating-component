export const ThankYou = (nroSelect) => {
    // Creando elementos del DOM
    const $thankYouCard = document.createElement('div'),
        $textContent = document.createElement('div'),
        $figure = document.createElement('figure'),
        $img = document.createElement('img'),
        $figcaption = document.createElement('figcaption'),
        $h1 = document.createElement('h1'),
        $p = document.createElement('p');

    // Agregando contenido
    $img.setAttribute('src', './src/images/illustration-thank-you.svg');
    $img.setAttribute('alt', 'illustration-thank-you');
    $figcaption.textContent = `You selected ${nroSelect} out of 5`; // "nroSelect" es el numero que recibe como propiedad
    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $h1.textContent = 'Thank you!';
    $p.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    $textContent.appendChild($h1);
    $textContent.appendChild($p);

    // Agregando clases CSS
    $thankYouCard.classList.add('thank-you-card');
    $img.classList.add('thank-you__img');
    $figcaption.classList.add('thank-you__message-orange');
    $h1.classList.add('thank-you__title');
    $p.classList.add('thank-you__message');

    // Agregando los elementos a la tarjeta
    $thankYouCard.appendChild($figure);
    $thankYouCard.appendChild($textContent);

    // Componente final
    return $thankYouCard;
};