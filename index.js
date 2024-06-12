//carrusel//
document.addEventListener("DOMContentLoaded", function() {
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    const tarjetas = document.querySelector(".tarjetas");
    let indice = 0;

    anteriorBtn.addEventListener("click", function() {
        indice = Math.max(indice - 1, 0);
        actualizarCarrusel();
    });

    siguienteBtn.addEventListener("click", function() {
        indice = Math.min(indice + 1, tarjetas.children.length - 1);
        actualizarCarrusel();
    });

    function actualizarCarrusel() {
        const tarjetaWidth = tarjetas.firstElementChild.offsetWidth;
        tarjetas.style.transform = `translateX(-${indice * tarjetaWidth}px)`;
    }
});
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