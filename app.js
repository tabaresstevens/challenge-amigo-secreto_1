// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Función para actualizar la lista visible en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Debes agregar al menos un nombre antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceSorteado];

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    itemResultado.className = "resultado-estilizado";
    resultado.appendChild(itemResultado);


    // 🔒 Deshabilita el botón después del sorteo
    document.getElementById("botonSortear").disabled = true;
    document.getElementById("botonSortear").style.opacity = "0.5"; // opcional: efecto visual
    document.getElementById("botonSortear").style.cursor = "not-allowed";
}

// Función para borrar lista
function borrarLista() {
    amigos = []; // vacía el array
    document.getElementById("listaAmigos").innerHTML = ""; // borra la lista visual
    document.getElementById("resultado").innerHTML = ""; // borra el resultado del sorteo

    // ✅ Habilita nuevamente el botón de sorteo
    const botonSortear = document.getElementById("botonSortear");
    botonSortear.disabled = false;
    botonSortear.style.opacity = "1";
    botonSortear.style.cursor = "pointer";
}


// Función para corregir nombres
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo, index) {
        const item = document.createElement("li");
        item.textContent = amigo + " ";

        const botonCorregir = document.createElement("button");
        botonCorregir.textContent = "✏️ Corregir";
        botonCorregir.className = "boton-corregir";
        botonCorregir.onclick = function () {
            corregirNombre(index);
        };

        item.appendChild(botonCorregir);
        lista.appendChild(item);
    });
}

function corregirNombre(index) {
    const nombre = amigos[index];
    document.getElementById("amigo").value = nombre;
    amigos.splice(index, 1); // elimina ese nombre del array
    actualizarLista(); // actualiza la lista sin el nombre seleccionado
}


// Permitir que Enter también agregue el nombre
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita que recargue la página
        agregarAmigo();
    }
});