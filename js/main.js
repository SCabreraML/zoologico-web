// ===============================
// Zoológico Mundo Animal
// Archivo: main.js
// ===============================

// Mensaje de bienvenida
window.addEventListener("load", function () {
    alert("¡Bienvenido al Zoológico Mundo Animal! 🦁");
});

// Confirmación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("¡Gracias por contactarnos! Hemos recibido tu mensaje.");

            formulario.reset();

        });

    }

});

// Efecto al pasar el mouse sobre las tarjetas
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function (card) {

    card.addEventListener("mouseover", function () {
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
    });

    card.addEventListener("mouseout", function () {
        card.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    });

});

// Botón para volver al inicio de la página
const botonInicio = document.createElement("button");

botonInicio.innerHTML = "⬆";

botonInicio.style.position = "fixed";
botonInicio.style.bottom = "20px";
botonInicio.style.right = "20px";
botonInicio.style.padding = "12px 15px";
botonInicio.style.background = "#2E8B57";
botonInicio.style.color = "white";
botonInicio.style.border = "none";
botonInicio.style.borderRadius = "50%";
botonInicio.style.cursor = "pointer";
botonInicio.style.display = "none";
botonInicio.style.fontSize = "18px";

document.body.appendChild(botonInicio);

// Mostrar botón cuando se desplaza la página
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        botonInicio.style.display = "block";

    } else {

        botonInicio.style.display = "none";

    }

});

// Volver arriba
botonInicio.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});