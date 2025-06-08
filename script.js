
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado completamente.');

    // Ejemplo de un evento de clic para un botón (si tuvieras uno con id 'myButton')
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('¡Botón clickeado!');
        });
    }
});

