//reloj//
function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);

//barra de busqueda//
document.addEventListener("DOMContentLoaded", function() {
    const inputBusqueda = document.getElementById("busqueda");
    const lista = document.getElementById("lista").getElementsByTagName("li");

    inputBusqueda.addEventListener("keyup", function() {
        const filtro = inputBusqueda.value.toLowerCase();

        Array.from(lista).forEach(function(item) {
            const texto = item.textContent.toLowerCase();
            if (texto.includes(filtro)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});