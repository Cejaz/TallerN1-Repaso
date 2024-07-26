// Selecciona el contenedor del teclado
const keyboard = document.querySelector('.teclado');
keyboard.addEventListener('mouseenter', () => {
   keyboard.classList.add('hidden');
});
keyboard.addEventListener('mouseleave', () => {
   keyboard.classList.remove('hidden');
});
// Selecciona todos los elementos con la clase 'tecla'
const keys = document.querySelectorAll('.tecla');
keys.forEach(key => {
   key.addEventListener('click', () => {
       const value = key.getAttribute('data-value');
       const input = document.getElementById('clave');
       if (value === 'Borrar') {
           // Si la tecla es 'Borrar', elimina el último carácter del input
           input.value = input.value.slice(0, -1);
       } else if (value === 'Ingresar') {
           // Si la tecla es 'Ingresar', redirige a la URL deseada
           window.location.href = 'https://xacarana.com/cursos/aplicaciones_moviles/#/2/1';
       } else {
           // Si no, añade el valor de la tecla al input
           input.value += value;
       }
   });
});