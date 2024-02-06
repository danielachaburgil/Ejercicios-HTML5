
// Cuando se haga click sobre el boton de guardar aparecera una alerta
document.getElementById('botonGuardar').addEventListener('click', function () {
    alert('Guardado');
});

//Cuando se haga foco sobre el input del nombre el fondo sera de un color y cuando se quite de otro
let inputNombre = document.getElementById('inputNombre');
inputNombre.addEventListener('focus', function () {
    inputNombre.style.backgroundColor = '200, 255, 0, 0.959';
});

inputNombre.addEventListener('blur', function () {
    inputNombre.style.backgroundColor = ''; 
});

