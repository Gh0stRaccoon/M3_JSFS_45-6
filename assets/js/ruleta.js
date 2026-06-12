const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

// Función base que genera un número al azar entre un mínimo y un máximo
function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random(); // Genera decimal entre 0 y <1
    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min;
    return resultado;
}

// ⚠️ PUNTO DE INEFICIENCIA: Esta función devuelve el TEXTO (nombre), no la posición.
function aleatorioDesdeArreglo(arreglo) {
    const index = lanzarRuleta(0, arreglo.length - 1);
    const elementoArreglo = arreglo[index]; // Obtenemos el nombre
    return elementoArreglo; // Perdemos el 'index', solo devolvemos el string
}

// Función para inyectar texto en el HTML
function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement);
    elementoARenderizar.textContent = texto;
}

// ⚠️ PUNTO DE INEFICIENCIA: Como perdimos la posición, tenemos que usar indexOf.
function eliminarDesdeArreglo(arreglo, contenido) {
    // indexOf obliga a JavaScript a recorrer el arreglo desde cero hasta encontrar el texto
    const indexParticipante = arreglo.indexOf(contenido);
    arreglo.splice(indexParticipante, 1);
}

// Función que revisa el estado del juego antes de renderizar
function validarYRenderizar(arreglo, resultado) {
    if (!arreglo.length) {
        renderizarResultado("resultado", "Ya todos participaron");
        setTimeout(() => window.location.reload(), 2000);
    } else {
        renderizarResultado("resultado", resultado);
    }
}

const getRandomButton = document.querySelector("#getRandom");

getRandomButton.addEventListener("click", () => {
    // 1. Obtenemos el nombre (y perdemos su posición original)
    const resultado = aleatorioDesdeArreglo(participantes);

    // 2. Mostramos el nombre en pantalla
    validarYRenderizar(participantes, resultado);

    // 3. Volvemos a buscar el nombre en la lista para eliminarlo
    eliminarDesdeArreglo(participantes, resultado);
});