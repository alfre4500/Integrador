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
