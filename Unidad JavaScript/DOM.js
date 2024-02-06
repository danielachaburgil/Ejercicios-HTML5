
// Número de enlaces de la página
let enlaces = document.getElementsByTagName('a');
let numeroEnlaces = enlaces.length;

// Dirección a la que enlaza el penúltimo enlace
let penultimoEnlace = enlaces[numeroEnlaces - 2].getAttribute('href');

// Número de enlaces del tercer párrafo
let tercerParrafo = document.getElementById('third-paragraph');
let enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
let numeroEnlacesTercerParrafo = enlacesTercerParrafo.length;

// Mostrar la información en la página
let resultadoHTML = "<p>Número de enlaces de la página: " + numeroEnlaces + "</p>";
resultadoHTML += "<p>Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace + "</p>";
resultadoHTML += "<p>Número de enlaces del tercer párrafo: " + numeroEnlacesTercerParrafo + "</p>";

// Pintar los resultados al final de la página
let Pintarresultados = document.createElement('p');
Pintarresultados.innerHTML = resultadoHTML;

// Crear un Nodo
document.body.appendChild(Pintarresultados);
