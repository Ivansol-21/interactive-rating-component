export default function BotonSubmit () {

    // Creando elementos del DOM
    const $button = document.createElement('button');

    // Agregando clases y atributos
    $button.id = 'B-submit';
    $button.classList.add('btm-Sut');
    $button.textContent = 'SUBMIT';

    // Manejador de eventos 'CLICK'
    document.addEventListener('click', e => {
        const target = e.target;
        
        /* console.log(target) */
        if(target.id === 'B-submit'){ 
            console.log('Exito')
        }
    });

    return $button;
};

