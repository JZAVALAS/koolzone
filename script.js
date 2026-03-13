/* ══════════════════════════════════════════════════
   CONFIGURACIÓN — MODIFICA AQUÍ
══════════════════════════════════════════════════ */
var WA_NUMBER = "51964774354";

var PRODUCTOS = [
  {
    nombre: "📸Trípode Expandible de 3 Secciones – Compacto y Estable🔥",
    precio: "49.99",
    precioAntes: "79.99",
    imagenes: [
      "fotos/productos/26.Tripode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.2.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.3.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.4.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.5.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.6.Trípode-Expandible-de-3-Secciones.jpg",
    ]
  },
  {
    nombre: "💾Memoria Micro SD PHILIPS 64GB – Alta Velocidad⚡",
    precio: "89.99",
    precioAntes: "109.99",
    imagenes: [
      "/fotos/productos/25.Memoria-Micro-SD-PHILIPS-64GB.jpg",
      "/fotos/productos/25.2.Memoria-Micro-SD-PHILIPS-64GB.jpg",
      "/fotos/productos/25.3.Memoria-Micro-SD-PHILIPS-64GB.jpg",
    ]
  },
  {
    nombre: "📱Soporte Giratorio para Celular con Doble Zapata Fría",
    precio: "39.99",
    precioAntes: "59.99",
    imagenes: [
      "/fotos/productos/24.Soporte-Giratorio-para-Celular.jpg",
      "/fotos/productos/24.2.Soporte-Giratorio-para-Celular.jpg",
      "/fotos/productos/24.3.Soporte-Giratorio-para-Celular.jpg",
    ]
  },
  {
    nombre: "🎥📸Soporte Metálico en “L” para Cámara de Acción",
    precio: "49.99",
    precioAntes: "69.99",
    imagenes: [
      "/fotos/productos/23.Soporte-Metálico-en-L.jpg",
      "/fotos/productos/23.2.Soporte-Metálico-en-L.jpg",
      "/fotos/productos/23.3.Soporte-Metálico-en-L.jpg",
    ]
  },
  {
    nombre: "💾Adaptador USB-C OTG + Lector MicroSD (2 en 1)",
    precio: "19.99",
    precioAntes: "29.99",
    imagenes: [
      "/fotos/productos/22.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "/fotos/productos/22.2.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "/fotos/productos/22.3.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "/fotos/productos/22.4.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
    ]
  },
  {
    nombre: "📸Carcasa Impermeable para GoPro Hero 8 – Protección para Aventuras Extremas",
    precio: "69.99",
    precioAntes: "79.99",
    imagenes: [
      "/fotos/productos/21.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "/fotos/productos/21.2.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "/fotos/productos/21.3.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "/fotos/productos/21.4.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
    ]
  },
  {
    nombre: "✨HUB USB-C multipuerto 8 en 1 (USB 3.0)",
    precio: "49.99",
    precioAntes: "59.99",
    imagenes: [
      "/fotos/productos/20.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "/fotos/productos/20.2.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "/fotos/productos/20.3.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "/fotos/productos/20.4.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
    ]
  },
  {
    nombre: "🔧Kit de destornilladores de precisión",
    precio: "39.99",
    precioAntes: "59.99",
    imagenes: [
      "/fotos/productos/19.KIT-DE-DESTORNILLADORES-DE-PRESICION.jpg",
      "/fotos/productos/19.2.KIT-DE-DESTORNILLADORES-DE-PRESICION.jpg",
      "/fotos/productos/19.3.KIT-DE-DESTORNILLADORES-DE-PRESICION.jpg",
    ]
  },
  {
    nombre: "📸Barra Extensora Horizontal para Trípode",
    precio: "129.99",
    precioAntes: "179.99",
    imagenes: [
      "/fotos/productos/18.BARRA-EXTENSORA-HORIZONTAL.jpg",
      "/fotos/productos/18.2.BARRA-EXTENSORA-HORIZONTAL.jpg",
      "/fotos/productos/18.3.BARRA-EXTENSORA-HORIZONTAL.jpg",
    ]
  },
  {
    nombre: "📷Bolso para Cámara Fotográfica",
    precio: "59.99",
    precioAntes: "79.99",
    imagenes: [
      "/fotos/productos/17.BOLSO-PROTECTOR-PARA-CAMARAjpg.jpg",
      "/fotos/productos/17.2.BOLSO-PROTECTOR-PARA-CAMARAjpg.jpg",
    ]
  },
  {
    nombre: "📷Bolsa Protectora de Neopreno para Lentes de Cámara",
    precio: "69.99",
    precioAntes: "89.99",
    imagenes: [
      "/fotos/productos/16.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "/fotos/productos/16.2.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "/fotos/productos/16.3.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "/fotos/productos/16.4.BOLSA-PROTECTORA-PARA-LENTES.jpg",
    ]
  },
  {
    nombre: "📸Kit de Accesorios 10 en 1 para Cámara de Acción",
    precio: "94.99",
    precioAntes: "109.99",
    imagenes: [
      "/fotos/productos/15.KIT-DE-10-ACCESORIOS.jpg",
    ]
  },
  {
    nombre: "📸Correa Profesional para Cámara DSLR",
    precio: "69.99",
    precioAntes: "89.99",
    imagenes: [
      "/fotos/productos/14.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "/fotos/productos/14.2.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "/fotos/productos/14.3.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "/fotos/productos/14.4.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "/fotos/productos/14.5.CORREA-DE-PECHO-PARA-CAMARA.jpg",
    ]
  },
  {
    nombre: "📸Correa de Mano para Cámara",
    precio: "59.99",
    precioAntes: "79.99",
    imagenes: [
      "/fotos/productos/13.CORREA-DE-MANO.jpg",
      "/fotos/productos/13.2.CORREA-DE-MANO.jpg",
      "/fotos/productos/13.3.CORREA-DE-MANO.jpg",
      "/fotos/productos/13.4.CORREA-DE-MANO.jpg",
      "/fotos/productos/13.5.CORREA-DE-MANO.jpg",
    ]
  },
  {
    nombre: "📸 Soporte en L para Cámara – Placa de Liberación Rápida",
    precio: "49.99",
    precioAntes: "59.99",
    imagenes: [
      "/fotos/productos/12.SOPORTE-EN-L.jpg",
      "/fotos/productos/12.2.SOPORTE-EN-L.jpg",
      "/fotos/productos/12.3.SOPORTE-EN-L.jpg",
      "/fotos/productos/12.4.SOPORTE-EN-L.jpg",
      "/fotos/productos/12.5.SOPORTE-EN-L.jpg",
    ]
  },
  {
    nombre: "💻Memoria RAM 4GB DDR3L SK Hynix para Laptop – 1600 MHz",
    precio: "59.99",
    precioAntes: "69.99",
    imagenes: [
      "/fotos/productos/1.Memoria-RAM-4GB-DDR3L.jpg"
    ]
  },
  {
    nombre: "💻⚡Memoria RAM Crucial 4gb para laptop⚡💻",
    precio: "89.99",
    precioAntes: "99.99",
    imagenes: [ 
      "/fotos/productos/2.MEMORIA-RAM-CRUCIAL-4GB.JPG"
    ]
  },
  {
    nombre: "📸✨Mini trípode portátil - Estabildad en cualquier lugar✨📸",
    precio: "14.99",
    precioAntes: "19.99",
    imagenes: [ 
      "/fotos/productos/3.MINITRIPODE-PORTATIL.jpg",
      "/fotos/productos/3.2.MINITRIPODE-PORTATIL.jpg",
      "/fotos/productos/3.3.MINITRIPODE-PORTATIL.jpg",
      "/fotos/productos/3.4.MINITRIPODE-PORTATIL.jpg",
    ]
  },

  // {
  //   nombre: "📸🔧ADAPTADOR ZAPATA FRÍA / CALIENTE CON ROSCA 1/4”🔧📸",
  //   precio: "14.99",
  //   precioAntes: "19.99",
  //   imagenes: [ 
  //     "/fotos/productos/4.ADAPTADOR-ZAPATA-FRÍA.jpg",
  //     "/fotos/productos/4.2.ADAPTADOR-ZAPATA-FRÍA.jpg",
  //     "/fotos/productos/4.3.ADAPTADOR-ZAPATA-FRÍA.jpg",
  //     "/fotos/productos/4.4.ADAPTADOR-ZAPATA-FRÍA.jpg",
  //   ]
  // },
  
  {
    nombre: "📸🔌Adaptador de montaje con 3 zapatas frías🔌📸",
    precio: "14.99",
    precioAntes: "19.99",
    imagenes: [ 
      "/fotos/productos/5.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "/fotos/productos/5.2.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "/fotos/productos/5.3.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "/fotos/productos/5.4.ADAPTADOR-ZAPATA-FRÍA.jpg",
    ]
  },
  {
    nombre: "🔌✨Convertidor HDMI aVGA con audio✨🔌",
    precio: "19.99",
    precioAntes: "29.99",
    imagenes: [ 
      "/fotos/productos/6.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "/fotos/productos/6.2.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "/fotos/productos/6.3.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "/fotos/productos/6.4.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
    ]
  },
  {
    nombre: "🌈✨Barra led RGB 30cm - iluminación profesional en tus manos✨🌈",
    precio: "119.99",
    precioAntes: "149.99",
    imagenes: [ 
      "/fotos/productos/7.BARRA-LED-RGB.jpg",
      "/fotos/productos/7.2.BARRA-LED-RGB.jpg",
      "/fotos/productos/7.3.BARRA-LED-RGB.jpg",
      "/fotos/productos/7.4.BARRA-LED-RGB.jpg",
      "/fotos/productos/7.5.BARRA-LED-RGB.jpg",
    ]
  },
  {
    nombre: "📱✨Monitor Magnético para Selfies y Vlogging (Pantalla IPS 3.97”)✨📱",
    precio: "149.99",
    precioAntes: "179.99",
    imagenes: [ 
      "/fotos/productos/8.MONITOR-MAGNETICO.jpg",
      "/fotos/productos/8.2.MONITOR-MAGNETICO.jpg",
      "/fotos/productos/8.3.MONITOR-MAGNETICO.jpg",
      "/fotos/productos/8.4.MONITOR-MAGNETICO.jpg",
    ]
  },
  {
    nombre: "🔌✨Hub Usb 5 en 1 de aluminio - compacto y potente✨🔌",
    precio: "34.99",
    precioAntes: "44.99",
    imagenes: [ 
      "/fotos/productos/9.HUB-USB-5-EN-1.jpg",
      "/fotos/productos/9.2.HUB-USB-5-EN-1.jpg",
      "/fotos/productos/9.3.HUB-USB-5-EN-1.jpg",
      "/fotos/productos/9.4.HUB-USB-5-EN-1.jpg",
    ]
  },
  {
    nombre: "👕🔥Pack de 3 Shorts deportivos para Hombre - Talla L🔥👕",
    precio: "79.99",
    precioAntes: "99.99",
    imagenes: [ 
      "/fotos/productos/10.PACK-SHORES.jpg",
    ]
  },
];

/* ══════════════════════════════════════════════════
   SVGs
══════════════════════════════════════════════════ */
var WA_SVG = '<svg viewBox="0 0 32 32" fill="#fff"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.806A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10S21.523 25 16 25a10.94 10.94 0 0 1-5.51-1.487l-.39-.23-4.567 1.073 1.1-4.453-.254-.405A9.958 9.958 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.122 4.82c-.22-.003-.444.004-.637.012-.28.012-.696.105-1.063.504-.366.4-1.4 1.37-1.4 3.34s1.432 3.873 1.633 4.141c.2.267 2.79 4.44 6.888 6.045 3.41 1.343 4.104.876 4.845.82.74-.054 2.388-.977 2.727-1.92.34-.944.34-1.754.238-1.922-.1-.167-.367-.267-.768-.467s-2.372-1.17-2.74-1.303c-.367-.133-.634-.2-.9.2-.267.4-1.033 1.303-1.267 1.57-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.217-1.985-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.88-2.18-1.22-2.98-.3-.72-.608-.72-.835-.727z"/></svg>';
var IMG_SVG = '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

/* ══════════════════════════════════════════════════
   LIGHTBOX — variables globales
══════════════════════════════════════════════════ */
var lightbox   = null;
var lbImg      = null;
var lbContador = null;
var lbDots     = null;
var lbImagenes = [];
var lbActual   = 0;

function lbMostrar(imgs, index) {
  lbImagenes = imgs.filter(function(s) { return s && s !== ""; });
  if (lbImagenes.length === 0) return;
  lbActual = index < lbImagenes.length ? index : 0;
  lightbox.classList.add("activo");
  lbDots.innerHTML = lbImagenes.map(function(_, i) {
    return '<button class="lightbox-dot' + (i === lbActual ? " active" : "") + '" data-i="' + i + '"></button>';
  }).join("");
  lbDots.querySelectorAll(".lightbox-dot").forEach(function(d) {
    d.addEventListener("click", function() { lbIr(parseInt(this.getAttribute("data-i"))); });
  });
  lbActualizar();
}

function lbActualizar() {
  lbImg.src = lbImagenes[lbActual];
  lbContador.textContent = lbImagenes.length > 1 ? (lbActual + 1) + " / " + lbImagenes.length : "";
  lbDots.querySelectorAll(".lightbox-dot").forEach(function(d, i) {
    d.classList.toggle("active", i === lbActual);
  });
}

function lbIr(n) {
  lbActual = (n + lbImagenes.length) % lbImagenes.length;
  lbActualizar();
}

/* ══════════════════════════════════════════════════
   HELPERS DE PRODUCTOS
══════════════════════════════════════════════════ */
function buildSlide(src) {
  return src
    ? '<div class="pcard-slide"><img src="' + src + '" alt="producto" loading="lazy"></div>'
    : '<div class="pcard-slide"><div class="pcard-placeholder">' + IMG_SVG + '<span>IMAGEN</span></div></div>';
}

function buildDots(n) {
  var h = "";
  for (var i = 0; i < n; i++) {
    h += '<button class="pcard-dot' + (i === 0 ? " active" : "") + '" data-i="' + i + '"></button>';
  }
  return h;
}

function buildPrecio(p, pAntes) {
  var pts = p.split(".");
  var actual = "S/ " + pts[0] + (pts[1] ? "<sup>." + pts[1] + "</sup>" : "");
  if (pAntes && pAntes !== "") {
    var ptsA = pAntes.split(".");
    var antes = "S/ " + ptsA[0] + (ptsA[1] ? "<sup>." + ptsA[1] + "</sup>" : "");
    return '<span class="precio-antes">' + antes + '</span> ' + actual;
  }
  return actual;
}

/* ══════════════════════════════════════════════════
   RENDER DE PRODUCTOS
══════════════════════════════════════════════════ */
function renderProductos(lista) {
  var grid = document.getElementById("productosGrid");

  if (lista.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px;color:#bbb;font-style:italic;">No se encontraron productos.</p>';
    return;
  }

  grid.innerHTML = lista.map(function(p) {
    var imgs  = p.imagenes || [""];
    var n     = imgs.length;
    var multi = n > 1;
    var msg   = encodeURIComponent("Hola! Me interesa: " + p.nombre + " — S/ " + p.precio);
    var waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + msg;

    return (
      '<div class="pcard">' +
        '<div class="pcard-slider-wrap">' +
          '<div class="pcard-track">' + imgs.map(buildSlide).join("") + '</div>' +
          (multi ? '<button class="pcard-arrow prev">&#8249;</button><button class="pcard-arrow next">&#8250;</button>' : "") +
          (multi ? '<div class="pcard-dots">' + buildDots(n) + '</div>' : "") +
          (multi ? '<span class="pcard-counter">1 / ' + n + '</span>' : "") +
        '</div>' +
        '<div class="pcard-body">' +
          '<p class="pcard-nombre">' + p.nombre + '</p>' +
          '<p class="pcard-precio">' + buildPrecio(p.precio, p.precioAntes) + '</p>' +
          '<a class="btn-wa" href="' + waUrl + '" target="_blank" rel="noopener">' + WA_SVG + ' Consultar</a>' +
        '</div>' +
      '</div>'
    );
  }).join("");

  // Activar slider + lightbox en cada card
  document.querySelectorAll(".pcard").forEach(function(card) {
    var track   = card.querySelector(".pcard-track");
    var dotBtns = card.querySelectorAll(".pcard-dot");
    var counter = card.querySelector(".pcard-counter");
    var slides  = card.querySelectorAll(".pcard-slide");
    var total   = slides.length;
    var cur     = 0;

    function goTo(n) {
      cur = (n + total) % total;
      track.style.transform = "translateX(-" + cur * 100 + "%)";
      dotBtns.forEach(function(d, i) { d.classList.toggle("active", i === cur); });
      if (counter) counter.textContent = (cur + 1) + " / " + total;
    }

    if (total > 1) {
      card.querySelector(".pcard-arrow.next").addEventListener("click", function(e) { e.preventDefault(); goTo(cur + 1); });
      card.querySelector(".pcard-arrow.prev").addEventListener("click", function(e) { e.preventDefault(); goTo(cur - 1); });
      dotBtns.forEach(function(d) {
        d.addEventListener("click", function(e) { e.preventDefault(); goTo(parseInt(this.getAttribute("data-i"))); });
      });

      var sx = 0;
      track.addEventListener("touchstart", function(e) { sx = e.touches[0].clientX; }, { passive: true });
      track.addEventListener("touchend", function(e) {
        var diff = sx - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 30) goTo(cur + (diff > 0 ? 1 : -1));
      });
    }

    // Lightbox al tocar imagen
    var todasLasImgs = card.querySelectorAll(".pcard-slide img");
    todasLasImgs.forEach(function(img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function() {
        var srcs = Array.from(todasLasImgs).map(function(i) { return i.src; });
        lbMostrar(srcs, cur);
      });
    });
  });
}

/* ══════════════════════════════════════════════════
   INICIO — esperar que el DOM esté listo
══════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function() {

  /* ── Slider del banner ── */
  var bannerTrack = document.getElementById("slidesTrack");
  var dotsWrap    = document.getElementById("sliderDots");
  var bar         = document.getElementById("progressBar");
  var bannerTotal = bannerTrack.querySelectorAll(".slide").length;
  var bannerCur   = 0;
  var INTERVAL    = 3000;
  var bannerTimer;

  for (var i = 0; i < bannerTotal; i++) {
    var d = document.createElement("button");
    d.className = "dot" + (i === 0 ? " active" : "");
    d.setAttribute("data-i", i);
    d.addEventListener("click", function() {
      bannerGoTo(parseInt(this.getAttribute("data-i")));
      bannerReset();
    });
    dotsWrap.appendChild(d);
  }

  function bannerGoTo(n) {
    bannerCur = (n + bannerTotal) % bannerTotal;
    bannerTrack.style.transform = "translateX(-" + bannerCur * 100 + "%)";
    dotsWrap.querySelectorAll(".dot").forEach(function(d, idx) {
      d.classList.toggle("active", idx === bannerCur);
    });
    bar.style.transition = "none";
    bar.style.width = "0%";
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        bar.style.transition = "width " + INTERVAL + "ms linear";
        bar.style.width = "100%";
      });
    });
  }

  function bannerStart() { bannerTimer = setInterval(function() { bannerGoTo(bannerCur + 1); }, INTERVAL); }
  function bannerReset() { clearInterval(bannerTimer); bannerStart(); }

  var bx = 0;
  bannerTrack.addEventListener("touchstart", function(e) { bx = e.touches[0].clientX; }, { passive: true });
  bannerTrack.addEventListener("touchend", function(e) {
    var diff = bx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { bannerGoTo(bannerCur + (diff > 0 ? 1 : -1)); bannerReset(); }
  });

  document.getElementById("sliderSection").addEventListener("mouseenter", function() { clearInterval(bannerTimer); });
  document.getElementById("sliderSection").addEventListener("mouseleave", function() { bannerReset(); });

  bannerGoTo(0);
  bannerStart();

  /* ── Lightbox ── */
  lightbox   = document.getElementById("lightbox");
  lbImg      = document.getElementById("lbImg");
  lbContador = document.getElementById("lbContador");
  lbDots     = document.getElementById("lbDots");

  document.getElementById("lbCerrar").addEventListener("click", function() {
    lightbox.classList.remove("activo"); lbImg.src = "";
  });
  document.getElementById("lbPrev").addEventListener("click", function() { lbIr(lbActual - 1); });
  document.getElementById("lbNext").addEventListener("click", function() { lbIr(lbActual + 1); });
  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) { lightbox.classList.remove("activo"); lbImg.src = ""; }
  });

  var lbTouchX = 0;
  lightbox.addEventListener("touchstart", function(e) { lbTouchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", function(e) {
    var diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) lbIr(lbActual + (diff > 0 ? 1 : -1));
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape")     { lightbox.classList.remove("activo"); lbImg.src = ""; }
    if (e.key === "ArrowRight") lbIr(lbActual + 1);
    if (e.key === "ArrowLeft")  lbIr(lbActual - 1);
  });

  /* ── Render de productos ── */
  renderProductos(PRODUCTOS);

  /* ── Buscador ── */
  document.querySelector(".search-input").addEventListener("input", function() {
    var q = this.value.toLowerCase().trim();
    var filtrados = q
      ? PRODUCTOS.filter(function(p) { return p.nombre.toLowerCase().includes(q); })
      : PRODUCTOS;
    renderProductos(filtrados);
  });


});



