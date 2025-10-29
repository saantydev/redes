document.addEventListener("DOMContentLoaded", () => {
    refreshDatos();
    refreshId = setInterval(refreshDatos, 10000);
});

function refreshDatos() {
    let valorTemp = document.querySelector("#temp-int");
    valorTemp.innerHTML = (parseInt(valorTemp.innerHTML) + 1);

    let valorHumedad = document.querySelector("#humedad-int");
    valorHumedad.innerHTML = (parseInt(valorHumedad.innerHTML) + 1);

    let valorViento = document.querySelector("#viento-int");
    valorViento.innerHTML = (parseInt(valorViento.innerHTML) + 1);

    let valorIncendio = document.querySelector("#incendio-int");
    let statusIncendio = document.querySelector("#incendio-status");

    let incendioActual = parseInt(valorIncendio.innerHTML);
    if (incendioActual >= 1) {
        valorIncendio.innerHTML = 0;
        statusIncendio.innerHTML = "No Detectado";
    } else {
        valorIncendio.innerHTML = 1;
        statusIncendio.innerHTML = "Detectado";
    }
}
