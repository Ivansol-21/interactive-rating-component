/* 
Esta funcion es para saber que numero se ha seleccionado.

PROPIEDADES O ARGUMENTOS QUE RECIBE

-target: El elemeto que dispara la accion o evento.
-$nums: Todos los numeros que se pueden seleccionar (NodeList)
-ftn: Esta es una funcion para agregar estrellas segun el numero (Opcional)
 */ 
export function numSeleccionado(target, $nums, ftn) {
    $nums.forEach((n, i) => { // Se recorre la NodeList.
        if (target.id === n.id) { // Este codigo se ejecura solo si el id del "target" es igual al numero (n) que se esta recorriendo en el momento.
            
            if (target.classList.contains('is-Active')) { // Si el "target", en su lista de clase ya tiene la clase "is-Active"...
                target.classList.remove('is-Active'); // Entonces, se eliminara.
            }else{
                $nums.forEach(N => N.classList.remove('is-Active')) // Si no, entonces, se recorre otra vez el NodeList y eliminara la clase "is-Active" de todos los numero (N).
                target.classList.add('is-Active') // Y agregara esa clase solo al "target"
            };

            ftn(i+1); // Esta funcion recibe el indice del primer bucle más 1; para saber la cartidad de estrella que se agregaran
        }; 
    });
};