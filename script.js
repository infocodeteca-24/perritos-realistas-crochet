/* ==========================================================
   CONFIGURACIÓN DE LOS BOTONES
   Completá estos datos y guardá el archivo. No hace falta tocar nada más.
   ========================================================== */
const CONFIG = {
  // Link de pago de Mercado Pago (Cobrar → Link de pago). Ej: "https://mpago.la/1AbCdEf"
  linkMercadoPago: "",

  // Precio que se muestra en toda la página.
  precio: "$12 USD",

  // Tu WhatsApp con código de país, solo números. Ej. Argentina: "5491122334455"
  // Si lo dejás vacío, no aparece el botón de WhatsApp.
  whatsapp: "",

  // Mensaje con el que se abre el chat de WhatsApp.
  mensajeWhatsapp: "Hola! Tengo una consulta sobre el ebook Perritos Realistas.",

  // Nombre de tu marca para el pie de página.
  marca: "Perritos Realistas"
};

/* ==========================================================
   No hace falta modificar nada de acá para abajo.
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Precio en todos los lugares donde aparece
  document.querySelectorAll("[data-precio]").forEach((el) => {
    el.textContent = CONFIG.precio;
  });

  // Marca y año en el pie
  document.querySelectorAll("[data-marca]").forEach((el) => {
    el.textContent = CONFIG.marca;
  });
  document.querySelectorAll("[data-anio]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Botón de pago de Mercado Pago
  const linkPago = CONFIG.linkMercadoPago.trim();
  document.querySelectorAll("[data-pago]").forEach((btn) => {
    if (linkPago) {
      btn.href = linkPago;
    } else {
      btn.classList.add("is-pending");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("El link de pago todavía no está configurado. Completá linkMercadoPago en script.js.");
      });
    }
  });

  // WhatsApp: botón flotante y link del pie
  const numero = CONFIG.whatsapp.replace(/\D/g, "");
  if (numero) {
    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(CONFIG.mensajeWhatsapp);
    const flotante = document.querySelector("[data-whatsapp-float]");
    if (flotante) {
      flotante.href = url;
      flotante.hidden = false;
    }
    document.querySelectorAll("[data-whatsapp-link]").forEach((a) => {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    });
    const contacto = document.querySelector("[data-contacto]");
    if (contacto) contacto.hidden = false;
  }

  // Preguntas frecuentes: abrir una cierra las demás
  const preguntas = document.querySelectorAll(".faq details");
  preguntas.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) preguntas.forEach((otra) => { if (otra !== d) otra.open = false; });
    });
  });
});
