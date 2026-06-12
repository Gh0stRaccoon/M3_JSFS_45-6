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

// Función matemática base intacta
function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random();
    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min;
    return resultado;
}

// ✅ MEJORA: Ahora la función tiene una única responsabilidad: devolver la POSICIÓN.
function obtenerIndiceAleatorio(arreglo) {
    const index = lanzarRuleta(0, arreglo.length - 1);
    return index; // Devolvemos el número, no el texto
}

// Función de UI intacta
function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement);
    elementoARenderizar.textContent = texto;
}

// ✅ MEJORA: Eliminamos directamente pasando la posición. Ya no hay que buscar nada.
function eliminarPorIndice(arreglo, index) {
    arreglo.splice(index, 1);
}

// Función de UI que ahora solo se encarga de mostrar textos
function validarYRenderizar(arreglo, resultado) {
    if (!arreglo.length) {
        renderizarResultado("resultado", "Ya todos participaron");
    } else {
        renderizarResultado("resultado", resultado);
    }
}

const getRandomButton = document.querySelector("#getRandom");

getRandomButton.addEventListener("click", () => {
    // ✅ MEJORA (Guard Clause): Si ya no hay alumnos, cortamos el flujo aquí mismo.
    if (participantes.length === 0) {
        validarYRenderizar(participantes, "");
        setTimeout(() => window.location.reload(), 2000);
        return; // El 'return' evita que el código de abajo se ejecute y lance posibles errores
    }

    // 1. Obtenemos la posición ganadora (Ej: 4)
    const indice = obtenerIndiceAleatorio(participantes);

    // 2. Usamos esa posición para sacar el nombre (Ej: participantes[4])
    const nombreParticipante = participantes[indice];

    // 3. Mostramos al ganador en la pantalla
    validarYRenderizar(participantes, nombreParticipante);

    // 4. Eliminamos al ganador usando su posición directa (súper rápido)
    eliminarPorIndice(participantes, indice);
});