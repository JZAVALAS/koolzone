0/**
 * KOOLZONE PAITA - E-commerce Script
 * Optimizado para rendimiento, UX y CRO.
 */

// ==========================================
// 1. CONFIGURACIÓN Y BASE DE DATOS
// ==========================================
const WA_NUMBER = "51964774354";
let categoriaActiva = "Todos";

// He conservado tu base de datos tal cual la proveíste.
var PRODUCTOS = [
  {
    nombre: "🛡️🎥 Kit de Protección para Insta360 X4/X5 (Lentes + Pantalla)",
    precio: "69.99",
    precioAntes: "69.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/74.Protectores-para--insta-360-X4-X5.jpg",
    ]
  },
  {
    nombre: "🔥Estabilizador Gimbal 3 Ejes con AI Tracking",
    precio: "349.99",
    precioAntes: "349.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/73.Estabiizado-con-3-ejes.jpg",
      "fotos/productos/73.2.Estabiizado-con-3-ejes.jpg",
      "fotos/productos/73.3.Estabiizado-con-3-ejes.jpg",
      "fotos/productos/73.4.Estabiizado-con-3-ejes.jpg",
      "fotos/productos/73.5.Estabiizado-con-3-ejes.jpg",
    ]
  },
  {
    nombre: "🎥Mini Cámara de Acción Magnética HD de Bolsillo + Kit de Accesorios✨",
    precio: "99.99",
    precioAntes: "119.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/71.Camara-de-mano-POV-ligera.jpg",
      "fotos/productos/71.2.Camara-de-mano-POV-ligera.jpg",
      "fotos/productos/71.3.Camara-de-mano-POV-ligera.jpg",
      "fotos/productos/71.4.Camara-de-mano-POV-ligera.jpg",
      "fotos/productos/71.5.Camara-de-mano-POV-ligera.jpg",
    ]
  },
  {
    nombre: "📸Brazo Mágico Articulado 360° Profesional para Cámaras y Accesorios💡✨",
    precio: "169.99",
    precioAntes: "189.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/70.Brazo-magico-ajustable-de-57cm.jpg",
      "fotos/productos/70.2.Brazo-magico-ajustable-de-57cm.jpg",
      "fotos/productos/70.3.Brazo-magico-ajustable-de-57cm.jpg",
      "fotos/productos/70.4.Brazo-magico-ajustable-de-57cm.jpg",
    ],
  },
  {
    nombre: "💡Mini Luz LED de Video Bicolor Recargable para Cámara y Celular📸✨",
    precio: "159.99",
    precioAntes: "189.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/69.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.2.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.3.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.4.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.5.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.6.Mini-Lámpara-LED-Portátil-de-40W.jpg",
      "fotos/productos/69.7.Mini-Lámpara-LED-Portátil-de-40W.jpg",
    ],
  },
  {
    nombre: "📸Soporte Pinza Cangrejo + Brazo Mágico Articulado 360° Multiuniversal💡",
    precio: "79.99",
    precioAntes: "99.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/68.Pinza de cangrejo de brazo mágico multifunción.jpg",
      "fotos/productos/68.2.Pinza de cangrejo de brazo mágico multifunción.jpg",
      "fotos/productos/68.3.Pinza de cangrejo de brazo mágico multifunción.jpg",
      "fotos/productos/68.4.Pinza de cangrejo de brazo mágico multifunción.jpg",
      "fotos/productos/68.5.Pinza de cangrejo de brazo mágico multifunción.jpg",
    ],
  },
  {
    nombre: "🎒Soporte de Correa de Mochila 360° para GoPro y Cámaras de Acción📸",
    precio: "39.99",
    precioAntes: "49.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/67.Soporte de sujeción antideslizante con pinza.jpg",
      "fotos/productos/67.2.Soporte de sujeción antideslizante con pinza.jpg",
      "fotos/productos/67.3.Soporte de sujeción antideslizante con pinza.jpg",
      "fotos/productos/67.4.Soporte de sujeción antideslizante con pinza.jpg",
    ],
  },
  {
    nombre: "🏍️Soporte de Barbilla 5 en 1 para Casco de Moto📸",
    precio: "44.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/66.Soporte-universal-para-casco.jpg",
      "fotos/productos/66.2.Soporte-universal-para-casco.jpg",
      "fotos/productos/66.3.Soporte-universal-para-casco.jpg",
      "fotos/productos/66.4.Soporte-universal-para-casco.jpg",
    ],
  },
  {
    nombre: "📸Parasol Tipo Tulipán para Lente de Cámara",
    precio: "24.99",
    precioAntes: "59.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/61.parasol-de-tulipan-55mm.jpg",
      "fotos/productos/61.2.parasol-de-tulipan-55mm.jpg",
      "fotos/productos/61.3.parasol-de-tulipan-55mm.jpg",
      "fotos/productos/61.4.parasol-de-tulipan-55mm.jpg",
    ],
  },
  //  {
  //   nombre: "📸Mini Softbox Octogonal PULUZ para Flash de Mano⚡",
  //   precio: "44.99",
  //   precioAntes: "69.99",
  //   categoria: "Cámara y Foto",
  //   imagenes: [
  //     "fotos/productos/60.difusor-oxagonal-de-flash.jpg",
  //     "fotos/productos/60.2.difusor-oxagonal-de-flash.jpg",
  //     "fotos/productos/60.3.difusor-oxagonal-de-flash.jpg",
  //     "fotos/productos/60.4.difusor-oxagonal-de-flash.jpg",
  //     "fotos/productos/60.5.difusor-oxagonal-de-flash.jpg",
  //   ],
  // },
   {
    nombre: "🧲Soporte Magnético de Pecho para Cámara de Acción📷",
    precio: "59.99",
    precioAntes: "89.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/59.soporte-magnetico-para-gopro.jpg",
      "fotos/productos/59.2.soporte-magnetico-para-gopro.jpg",
      "fotos/productos/59.3.soporte-magnetico-para-gopro.jpg",
      "fotos/productos/59.4.soporte-magnetico-para-gopro.jpg",
    ],
  },
/*   {
    nombre: "🌊Mango Flotante para Cámara de Acción📷",
    precio: "24.99",
    precioAntes: "49.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/58.Mango-flotante-para-GoPro.jpg",
      "fotos/productos/58.2.Mango-flotante-para-GoPro.jpg",
      "fotos/productos/58.3.Mango-flotante-para-GoPro.jpg",
    ],
  },*/
   {
    nombre: "🔋Pack Baterías TELESIN p/ GoPro 9/10/11/12",
    precio: "149.99",
    precioAntes: "179.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/57.bateria-gopro-hero-9-10-11-12.jpg",
      "fotos/productos/57.2.bateria-gopro-hero-9-10-11-12.jpg",
      "fotos/productos/57.3.bateria-gopro-hero-9-10-11-12.jpg",
      "fotos/productos/57.4.bateria-gopro-hero-9-10-11-12.jpg",
    ],
  },
   {
    nombre: "🎧Audífonos Inalámbricos con Pantalla LCD + Cancelación de ruido",
    precio: "59.99",
    precioAntes: "89.99",
    categoria: "Video y Audio",
    imagenes: [
      "fotos/productos/56.Audifonos.jpg",
      "fotos/productos/56.2.Audifonos.jpg",
      "fotos/productos/56.3.Audifonos.jpg",
      "fotos/productos/56.4.Audifonos.jpg",
      "fotos/productos/56.5.Audifonos.jpg",
    ],
  },
   {
    nombre: "🏍️SOPORTE DE CELULAR IMPERMEABLE REFORZADO PARA MOTO, BICI Y SCOOTER⛈️📱",
    precio: "49.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/55.sosporte-para-celular-en-moto.jpg",
      "fotos/productos/55.2.sosporte-para-celular-en-moto.jpg",
      "fotos/productos/55.3.sosporte-para-celular-en-moto.jpg",
      "fotos/productos/55.4.sosporte-para-celular-en-moto.jpg",
      "fotos/productos/55.5.sosporte-para-celular-en-moto.jpg",
    ],
  },
   {
    nombre: "🚗SOPORTE MAGNÉTICO PREMIUM PARA AUTO CON VENTOSA DE VACÍO ULTRA FUERTE📱⚡",
    precio: "39.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/54.Soporte-magnetico-para-celular.jpg",
      "fotos/productos/54.2.Soporte-magnetico-para-celular.jpg",
      "fotos/productos/54.3.Soporte-magnetico-para-celular.jpg",
    ],
  },
   {
    nombre: "🐕REPELENTE Y ENTRENADOR ULTRASÓNICO PARA PERROS - PREMIUM⚡",
    precio: "49.99",
    precioAntes: "69.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/52.repelente-para-perros.jpg",
      "fotos/productos/52.2.repelente-para-perros.jpg",
      "fotos/productos/52.3.repelente-para-perros.jpg",
      "fotos/productos/52.4.repelente-para-perros.jpg",
    ],
  },
   {
    nombre: "🛡️KIT DE PROTECTORES DE VIDRIO TEMPLADO PARA GOPRO 9/10/11/12/13🎬",
    precio: "24.99",
    precioAntes: "39.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/51.protector-de-pantallas-para-GoPro.jpg",
    ],
  },
/*   {
    nombre: "📸PINZA CANGREJO CON BRAZO MÁGICO MULTIFUNCIÓN PULUZ🎬",
    precio: "59.99",
    precioAntes: "79.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/50.pinza-de-cangrejo.jpg",
      "fotos/productos/50.2.pinza-de-cangrejo.jpg",
      "fotos/productos/50.3.pinza-de-cangrejo.jpg",
      "fotos/productos/50.4.pinza-de-cangrejo.jpg",
    ],
  }, */
   {
    nombre: "⚡ MINI CARGADOR PORTÁTIL TIPO C - 5000mAh PREMIUM 🔋",
    precio: "49.99",
    precioAntes: "79.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/49.mini-cargador-tipo-c.jpg",
      "fotos/productos/49.2.mini-cargador-tipo-c.jpg",
      "fotos/productos/49.3.mini-cargador-tipo-c.jpg",
      "fotos/productos/49.4.mini-cargador-tipo-c.jpg",
    ],
  },
   {
    nombre: "📲SOPORTE MAGNÉTICO PARA CELULAR (IDEAL PARA EL GYM Y ENTRENAMIENTOS)🏋️‍♂️🔥",
    precio: "39.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/48.soporte-magenitco.jpg",
      "fotos/productos/48.2.soporte-magenitco.jpg",
      "fotos/productos/48.3.soporte-magenitco.jpg",
      "fotos/productos/48.4.soporte-magenitco.jpg",
    ],
  },
/*   {
    nombre: "📲SOPORTE MAGNÉTICO PARA CELULAR (IDEAL PARA EL GYM Y ENTRENAMIENTOS)🏋️‍♂️🔥",
    precio: "39.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/47.soporte-magenitco.jpg",
      "fotos/productos/47.2.soporte-magenitco.jpg",
      "fotos/productos/47.3.soporte-magenitco.jpg",
      "fotos/productos/47.4.soporte-magenitco.jpg",
    ],
  }, */
   {
    nombre: "📸🔧 ADAPTADOR ZAPATA FRÍA/CALIENTE CON ROSCA 1/4”🔧📸",
    precio: "29.99",
    precioAntes: "34.99",
    categoria: "Accesorios",
    masVendido: true, // ◄── AGREGA ESTA LÍNEA en tus 3 productos elegidos
    imagenes: [
      "fotos/productos/4.ADAPTADOR-ZAPATA-FRIA-CALIENTE.jpg",
      "fotos/productos/4.2.ADAPTADOR-ZAPATA-FRIA-CALIENTE.jpg",
      "fotos/productos/4.3.ADAPTADOR-ZAPATA-FRIA-CALIENTE.jpg",
      "fotos/productos/4.4.ADAPTADOR-ZAPATA-FRIA-CALIENTE.jpg",
      "fotos/productos/4.5.ADAPTADOR-ZAPATA-FRIA-CALIENTE.jpg",
    ],
  },  
{
    nombre: "🌊📸Funda Impermeable para GoPro Hero 9/10/11/12/13🔥",
    precio: "79.99",
    precioAntes: "89.99",
    categoria: "Accesorios",
    masVendido: true, // ◄── AGREGA ESTA LÍNEA en tus 3 productos elegidos
    imagenes: [
      "fotos/productos/46.funda-impermeable-GPH-9-10-11-12-13.jpg",
      "fotos/productos/46.2.funda-impermeable-GPH-9-10-11-12-13.jpg",
      "fotos/productos/46.3.funda-impermeable-GPH-9-10-11-12-13.jpg",
    ],
  },
  {
    nombre: "🔋Pilas Recargables PUJIMAX AAA",
    precio: "59.99",
    precioAntes: "69.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/45.Pilas-Recargables-PUJIMAX-AAA.jpg",
      "fotos/productos/45.2.Pilas-Recargables-PUJIMAX-AAA.jpg",
      "fotos/productos/45.3.Pilas-Recargables-PUJIMAX-AAA.jpg",
      "fotos/productos/45.4.Pilas-Recargables-PUJIMAX-AAA.jpg",
    ],
  },
  {
    nombre: "⚡Baterías TELESIN para GoPro Hero 8 / 7 / 6 / 5 - ¡Nueva!",
    precio: "99.99",
    precioAntes: "119.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/44.Batería-TELESIN-de-1170mAh-para-GoPro-5-6-7-8.jpg",
      "fotos/productos/44.2.Batería-TELESIN-de-1170mAh-para-GoPro-5-6-7-8.jpg",
      "fotos/productos/44.3.Batería-TELESIN-de-1170mAh-para-GoPro-5-6-7-8.jpg",
      "fotos/productos/44.4.Batería-TELESIN-de-1170mAh-para-GoPro-5-6-7-8.jpg",
    ],
  },
  // {
  //   nombre: "📸Soporte para Manillar 360° para GoPro, DJI, Insta360 y más",
  //   precio: "54.99",
  //   precioAntes: "69.99",
  //   categoria: "Accesorios",
  //   imagenes: [
  //     "fotos/productos/43.Soporte-para-Manillar-360°-para-GoPro.jpg",
  //     "fotos/productos/43.2.Soporte-para-Manillar-360°-para-GoPro.jpg",
  //     "fotos/productos/43.3.Soporte-para-Manillar-360°-para-GoPro.jpg",
  //     "fotos/productos/43.4.Soporte-para-Manillar-360°-para-GoPro.jpg",
  //   ],
  // },
  // {
  //   nombre: "🔋Cargador Triple para GoPro + Caja de Almacenamiento",
  //   precio: "69.99",
  //   precioAntes: "89.99",
  //   categoria: "Cámara y Foto",
  //   imagenes: [
  //     "fotos/productos/42.Cargador-Triple-para-GoPro.jpg",
  //     "fotos/productos/42.2.Cargador-Triple-para-GoPro.jpg",
  //     "fotos/productos/42.3.Cargador-Triple-para-GoPro.jpg",
  //     "fotos/productos/42.4.Cargador-Triple-para-GoPro.jpg",
  //   ],
  // },
  {
    nombre: "🎤 DJI Mic Mini – Micrófono Inalámbrico Profesional",
    precio: "529.99",
    precioAntes: "559.99",
    categoria: "Video y Audio",
    masVendido: true, // ◄── AGREGA ESTA LÍNEA en tus 3 productos elegidos
    imagenes: [
      "fotos/productos/41.DJI-Mic-Mini.jpg",
      "fotos/productos/41.2.DJI-Mic-Mini.jpg",
      "fotos/productos/41.3.DJI-Mic-Mini.jpg",
    ],
  },
  {
    nombre:
      "⚙️🔥 MINI AMOLADORA ROTATIVA JANGKLIFE – KIT COMPLETO PARA DIY 🔥⚙️",
    precio: "129.99",
    precioAntes: "149.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/40.Mini-amoladora.jpg",
      "fotos/productos/40.2.Mini-amoladora.jpg",
      "fotos/productos/40.3.Mini-amoladora.jpg",
      "fotos/productos/40.4.Mini-amoladora.jpg",
      "fotos/productos/40.5.Mini-amoladora.jpg",
      "fotos/productos/40.6.Mini-amoladora.jpg",
    ],
  },
  // {
  //   nombre: "🎬Proyector 4K HY320 con Android y WiFi",
  //   precio: "279.99",
  //   precioAntes: "299.99",
  //   categoria: "Video y Audio",
  //   imagenes: [
  //     "fotos/productos/39.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.2.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.3.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.4.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.5.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.6.Proyector-4K-HY320.jpg",
  //     "fotos/productos/39.7.Proyector-4K-HY320.jpg",
  //   ],
  // },
/*  {
    nombre: "🎥 Soporte de Cabeza para GoPro – Toma POV Real",
    precio: "79.99",
    precioAntes: "99.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/38.Soporte-de-Cabeza-para-GoPro.jpg",
      "fotos/productos/38.2.Soporte-de-Cabeza-para-GoPro.jpg",
      "fotos/productos/38.3.Soporte-de-Cabeza-para-GoPro.jpg",
      "fotos/productos/38.4.Soporte-de-Cabeza-para-GoPro.jpg",
    ],
  }, */
  {
    nombre: "📷Protectores de Pantalla y Lente para GoPro Hero 5 / 6 / 7",
    precio: "9.99",
    precioAntes: "29.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/37.Protectores-de-Pantalla-y-Lente-para-GoPro-Hero-5-6-7.jpg",
      "fotos/productos/37.2.Protectores-de-Pantalla-y-Lente-para-GoPro-Hero-5-6-7.jpg",
      "fotos/productos/37.3.Protectores-de-Pantalla-y-Lente-para-GoPro-Hero-5-6-7.jpg",
    ],
  },
  {
    nombre: "🚗 Cámara Dash Cam para Auto – Doble Lente",
    precio: "119.99",
    precioAntes: "159.99",
    categoria: "Video y Audio",
    imagenes: [
      "fotos/productos/36.Cámara-Dash-Cam-para-Auto.jpg",
      "fotos/productos/36.2.Cámara-Dash-Cam-para-Auto.jpg",
      "fotos/productos/36.3.Cámara-Dash-Cam-para-Auto.jpg",
      "fotos/productos/36.4.Cámara-Dash-Cam-para-Auto.jpg",
      "fotos/productos/36.5.Cámara-Dash-Cam-para-Auto.jpg",
    ],
  },
  {
    nombre:
      "💻✨ Soporte Plegable para Laptop con Enfriamiento y Puertos USB🔥",
    precio: "69.99",
    precioAntes: "89.99",
    categoria: "Computación",
    imagenes: [
      "fotos/productos/35.Soporte-Plegable-para-Laptop.jpg",
      "fotos/productos/35.2.Soporte-Plegable-para-Laptop.jpg",
      "fotos/productos/35.3.Soporte-Plegable-para-Laptop.jpg",
      "fotos/productos/35.4.Soporte-Plegable-para-Laptop.jpg",
      "fotos/productos/35.5.Soporte-Plegable-para-Laptop.jpg",
      "fotos/productos/35.6.Soporte-Plegable-para-Laptop.jpg",
    ],
  },
  {
    nombre: "✨ LUZ DE ANILLO PORTÁTIL PARA CELULAR",
    precio: "49.99",
    precioAntes: "59.99",
    categoria: "Video y Audio",
    imagenes: [
      "fotos/productos/34.Luz-de-anillo-portatil.jpg",
      "fotos/productos/34.2.Luz-de-anillo-portatil.jpg",
      "fotos/productos/34.3.Luz-de-anillo-portatil.jpg",
      "fotos/productos/34.4.Luz-de-anillo-portatil.jpg",
      "fotos/productos/34.5.Luz-de-anillo-portatil.jpg",
      "fotos/productos/34.6.Luz-de-anillo-portatil.jpg",
    ],
  },
  {
    nombre: "📸 Flash Godox TT600S",
    precio: "339.99",
    precioAntes: "369.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/33.Flash-Godox-TT600S.jpg",
      "fotos/productos/33.2.Flash-Godox-TT600S.jpg",
      "fotos/productos/33.3.Flash-Godox-TT600S.jpg",
      "fotos/productos/33.4.Flash-Godox-TT600S.jpg",
    ],
  },
  // {
  //   nombre: "📱Selfie Stick con Estabilizador Q31",
  //   precio: "129.99",
  //   precioAntes: "149.99",
  //   categoria: "Video y Audio",
  //   imagenes: [
  //     "fotos/productos/32.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.2.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.3.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.4.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.5.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.6.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //     "fotos/productos/32.7.Selfie-Stick-con-Estabilizador-Q31.jpg",
  //   ],
  // },
  // {
  //   nombre: "🔋Cargador de Pilas AA con Baterías Recargables",
  //   precio: "149.99",
  //   precioAntes: "179.99",
  //   categoria: "Almacenamiento",
  //   imagenes: [
  //     "fotos/productos/31.Cargador-de-Pilas-AA-con-Baterías-Recargables.jpg",
  //     "fotos/productos/31.2.Cargador-de-Pilas-AA-con-Baterías-Recargables.jpg",
  //     "fotos/productos/31.3.Cargador-de-Pilas-AA-con-Baterías-Recargables.jpg",
  //     "fotos/productos/31.4.Cargador-de-Pilas-AA-con-Baterías-Recargables.jpg",
  //   ],
  // },
  {
    nombre: "📷Protector de Pantalla para GoPro Hero 8",
    precio: "9.99",
    precioAntes: "19.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/30.Protector-de-Pantalla-para-GoPro-Hero-8.jpg",
      "fotos/productos/30.2.Protector-de-Pantalla-para-GoPro-Hero-8.jpg",
    ],
  },
  {
    nombre: "🎤Micrófono Lavalier Inalámbrico ZealSound",
    precio: "149.99",
    precioAntes: "199.99",
    categoria: "Video y Audio",
    imagenes: [
      "fotos/productos/29.Microfonos-Zealsound.jpg",
      "fotos/productos/29.2.Microfonos-Zealsound.jpg",
      "fotos/productos/29.3.Microfonos-Zealsound.jpg",
    ],
  },
  {
    nombre: "📷Tapa para Lente Nikon F Mount",
    precio: "19.99",
    precioAntes: "29.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/28.Tapa-de-cuerpo-nikon-monturaF.jpg",
      "fotos/productos/28.2.Tapa-de-cuerpo-nikon-monturaF.jpg",
      "fotos/productos/28.3.Tapa-de-cuerpo-nikon-monturaF.jpg",
    ],
  },
  {
    nombre: "📸Trípode Expandible de 3 Secciones – Compacto y Estable🔥",
    precio: "39.99",
    precioAntes: "59.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/26.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.2.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.3.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.4.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.5.Trípode-Expandible-de-3-Secciones.jpg",
      "fotos/productos/26.6.Trípode-Expandible-de-3-Secciones.jpg",
    ],
  },
  {
    nombre: "💾Memoria Micro SD PHILIPS 64GB – Alta Velocidad⚡",
    precio: "79.99",
    precioAntes: "89.99",
    categoria: "Almacenamiento",
    imagenes: [
      "fotos/productos/25.Memoria-Micro-SD-PHILIPS-64GB.jpg",
      "fotos/productos/25.2.Memoria-Micro-SD-PHILIPS-64GB.jpg",
      "fotos/productos/25.3.Memoria-Micro-SD-PHILIPS-64GB.jpg",
    ],
  },
  {
    nombre: "📱Soporte Giratorio para Celular con Doble Zapata Fría",
    precio: "39.99",
    precioAntes: "59.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/24.Soporte-Giratorio-para-Celular.jpg",
      "fotos/productos/24.2.Soporte-Giratorio-para-Celular.jpg",
      "fotos/productos/24.3.Soporte-Giratorio-para-Celular.jpg",
    ],
  },
//  {
//     nombre: "🎥📸Soporte Metálico en L para Cámara de Acción",
//     precio: "49.99",
//     precioAntes: "69.99",
//     categoria: "Accesorios",
//     imagenes: [
//       "fotos/productos/23.Soporte-Metálico-en-L.jpg",
//       "fotos/productos/23.2.Soporte-Metálico-en-L.jpg",
//       "fotos/productos/23.3.Soporte-Metálico-en-L.jpg",
//     ],
//   },
  {
    nombre: "💾Adaptador USB-C OTG + Lector MicroSD (2 en 1)",
    precio: "24.99",
    precioAntes: "34.99",
    categoria: "Almacenamiento",
    imagenes: [
      "fotos/productos/22.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "fotos/productos/22.2.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "fotos/productos/22.3.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
      "fotos/productos/22.4.Adaptador-USB-C-OTG-+-Lector-MicroSD-(2-en-1).jpg",
    ],
  },
  {
    nombre: "📸Carcasa Impermeable para GoPro Hero 8",
    precio: "69.99",
    precioAntes: "79.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/21.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "fotos/productos/21.2.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "fotos/productos/21.3.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
      "fotos/productos/21.4.Carcasa-Impermeable-para-GoPro-Hero-8.jpg",
    ],
  },
  {
    nombre: "✨HUB USB-C multipuerto 8 en 1 (USB 3.0)",
    precio: "49.99",
    precioAntes: "59.99",
    categoria: "Computación",
    imagenes: [
      "fotos/productos/20.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "fotos/productos/20.2.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "fotos/productos/20.3.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
      "fotos/productos/20.4.HUB-USB-C-MULTIPUERTO-8-EN-1-(USB-3.0).jpg",
    ],
  },
  {
    nombre: "📸Barra Extensora Horizontal para Trípode",
    precio: "129.99",
    precioAntes: "179.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/18.BARRA-EXTENSORA-HORIZONTAL.jpg",
      "fotos/productos/18.2.BARRA-EXTENSORA-HORIZONTAL.jpg",
      "fotos/productos/18.3.BARRA-EXTENSORA-HORIZONTAL.jpg",
    ],
  },
  {
    nombre: "📷Bolso para Cámara Fotográfica",
    precio: "59.99",
    precioAntes: "79.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/17.BOLSO-PROTECTOR-PARA-CAMARAjpg.jpg",
      "fotos/productos/17.2.BOLSO-PROTECTOR-PARA-CAMARAjpg.jpg",
    ],
  },
  {
    nombre: "📷Bolsa Protectora de Neopreno para Lentes de Cámara",
    precio: "69.99",
    precioAntes: "89.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/16.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "fotos/productos/16.2.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "fotos/productos/16.3.BOLSA-PROTECTORA-PARA-LENTES.jpg",
      "fotos/productos/16.4.BOLSA-PROTECTORA-PARA-LENTES.jpg",
    ],
  },
  {
    nombre: "📸Kit de Accesorios 10 en 1 para Cámara de Acción",
    precio: "119.99",
    precioAntes: "149.99",
    categoria: "Accesorios",
    imagenes: ["fotos/productos/15.KIT-DE-10-ACCESORIOS.jpg"],
  },
{
    nombre: "📸Correa Profesional para Cámara DSLR",
    precio: "69.99",
    precioAntes: "89.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/14.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "fotos/productos/14.2.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "fotos/productos/14.3.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "fotos/productos/14.4.CORREA-DE-PECHO-PARA-CAMARA.jpg",
      "fotos/productos/14.5.CORREA-DE-PECHO-PARA-CAMARA.jpg",
    ],
  },
  {
    nombre: "📸Correa de Mano para Cámara",
    precio: "49.99",
    precioAntes: "79.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/13.CORREA-DE-MANO.jpg",
      "fotos/productos/13.2.CORREA-DE-MANO.jpg",
      "fotos/productos/13.3.CORREA-DE-MANO.jpg",
      "fotos/productos/13.4.CORREA-DE-MANO.jpg",
      "fotos/productos/13.5.CORREA-DE-MANO.jpg",
    ],
  },
 {
    nombre: "📸 Soporte en L para Cámara – Placa de Liberación Rápida",
    precio: "49.99",
    precioAntes: "59.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/12.SOPORTE-EN-L.jpg",
      "fotos/productos/12.2.SOPORTE-EN-L.jpg",
      "fotos/productos/12.3.SOPORTE-EN-L.jpg",
      "fotos/productos/12.4.SOPORTE-EN-L.jpg",
      "fotos/productos/12.5.SOPORTE-EN-L.jpg",
    ],
  },
  {
    nombre: "💻Memoria RAM 4GB DDR4 para Laptop – SK Hynix",
    precio: "69.99",
    precioAntes: "79.99",
    categoria: "Computación",
    imagenes: ["fotos/productos/27.Memoria-RAM-4GB-DDR4-para-Laptop.jpg"],
  },
  {
    nombre: "💻Memoria RAM 4GB DDR3L SK Hynix para Laptop – 1600 MHz",
    precio: "59.99",
    precioAntes: "69.99",
    categoria: "Computación",
    imagenes: ["fotos/productos/1.MEMORIA-RAM-4GB-DDR3L.jpg"],
  },
  {
    nombre: "💻⚡Memoria RAM Crucial 4gb para laptop⚡💻",
    precio: "89.99",
    precioAntes: "99.99",
    categoria: "Computación",
    imagenes: ["fotos/productos/2.MEMORIA-RAM-CRUCIAL-4GB.jpg"],
  },
  {
    nombre: "📸✨Mini trípode portátil - Estabilidad en cualquier lugar✨📸",
    precio: "14.99",
    precioAntes: "19.99",
    categoria: "Cámara y Foto",
    imagenes: [
      "fotos/productos/3.MINITRIPODE-PORTATIL.jpg",
      "fotos/productos/3.2.MINITRIPODE-PORTATIL.jpg",
      "fotos/productos/3.3.MINITRIPODE-PORTATIL.jpg",
      "fotos/productos/3.4.MINITRIPODE-PORTATIL.jpg",
    ],
  },
  {
    nombre: "📸🔌Adaptador de montaje con 3 zapatas frías🔌📸",
    precio: "19.99",
    precioAntes: "29.99",
    categoria: "Accesorios",
    imagenes: [
      "fotos/productos/5.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "fotos/productos/5.2.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "fotos/productos/5.3.ADAPTADOR-ZAPATA-FRÍA.jpg",
      "fotos/productos/5.4.ADAPTADOR-ZAPATA-FRÍA.jpg",
    ],
  },
  {
    nombre: "🔌✨Convertidor HDMI a VGA con audio✨🔌",
    precio: "19.99",
    precioAntes: "29.99",
    categoria: "Computación",
    imagenes: [
      "fotos/productos/6.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "fotos/productos/6.2.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "fotos/productos/6.3.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
      "fotos/productos/6.4.CONVERTIDOR-DE-HDMI-A-VGA.jpg",
    ],
  },
  {
    nombre: "🌈✨Barra led RGB 30cm - iluminación profesional✨🌈",
    precio: "119.99",
    precioAntes: "149.99",
    categoria: "Video y Audio",
    imagenes: [
      "fotos/productos/7.BARRA-LED-RGB.jpg",
      "fotos/productos/7.2.BARRA-LED-RGB.jpg",
      "fotos/productos/7.3.BARRA-LED-RGB.jpg",
      "fotos/productos/7.4.BARRA-LED-RGB.jpg",
      "fotos/productos/7.5.BARRA-LED-RGB.jpg",
    ],
  },
{
    nombre: "🔌✨Hub Usb 5 en 1 de aluminio - compacto y potente✨🔌",
    precio: "34.99",
    precioAntes: "44.99",
    categoria: "Computación",
    imagenes: [
      "fotos/productos/9.HUB-USB-5-EN-1.jpg",
      "fotos/productos/9.2.HUB-USB-5-EN-1.jpg",
      "fotos/productos/9.3.HUB-USB-5-EN-1.jpg",
      "fotos/productos/9.4.HUB-USB-5-EN-1.jpg",
    ],
  },
  {
    nombre: "👕🔥Pack de 3 Shorts deportivos para Hombre - Talla L🔥👕",
    precio: "79.99",
    precioAntes: "99.99",
    categoria: "Accesorios",
    imagenes: ["fotos/productos/10.PACK-SHORES.jpg"],
  },
];

// Icono SVG para compartir
const SVG_SHARE = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>`;

// ==========================================
// 2. RENDERIZADO DE PRODUCTOS (GRID)
// ==========================================
// 👇 REEMPLAZA LAS PRIMERAS LÍNEAS DE TU FUNCIÓN POR ESTAS 👇
function renderProductos(lista = null, contenedor = "productosGrid") {
  const grid = document.getElementById(contenedor);
  if (!grid) return;
  grid.innerHTML = "";

  // 1. Decidimos qué lista usar: la personalizada o el catálogo completo
  let arrayAUsar = lista ? lista : PRODUCTOS;

  // 2. Aplicamos filtros de búsqueda y categoría SOLO si es el catálogo principal de abajo
  let filtrados = arrayAUsar;
  if (contenedor === "productosGrid") {
    const input = document.querySelector(".search-input");
    const termo = input ? input.value.toLowerCase() : "";
    
    filtrados = arrayAUsar.filter(p => {
      const cumpleCat = (categoriaActiva === "Todos" || p.categoria === categoriaActiva);
      const cumpleBuscador = p.nombre.toLowerCase().includes(termo);
      return cumpleCat && cumpleBuscador;
    });
  }

  if (filtrados.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No se encontraron productos coincidentes.</p>`;
    return;
  }

  // Creación dinámica de HTML
  grid.innerHTML = filtrados.map((p, index) => {
    const hasMultipleImgs = p.imagenes.length > 1;

      const indexReal = PRODUCTOS.indexOf(p);
    
    // Generación de Slides
    const slidesHTML = p.imagenes.map(img => 
      `<div class="card-slide"><img src="${img}" alt="${p.nombre}" loading="lazy" onclick="abrirLightbox(${indexReal}, this.src)"></div>`
    ).join('');

    // Controles de Carrusel (Solo si hay más de 1 imagen)
    const controlesHTML = hasMultipleImgs ? `
      <button class="card-arrow prev" data-dir="-1" aria-label="Anterior">&#8249;</button>
      <button class="card-arrow next" data-dir="1" aria-label="Siguiente">&#8250;</button>
      <div class="card-dots">
        ${p.imagenes.map((_, i) => `<div class="card-dot ${i === 0 ? 'activo' : ''}"></div>`).join('')}
      </div>
    ` : '';

    const ofertaHTML = p.precioAntes ? `<div class="badge-offer">OFERTA</div>` : '';
    const precioViejoHTML = p.precioAntes ? `<span class="price-old">S/ ${p.precioAntes}</span>` : '';

    // Armado de Tarjeta
    return `
      <article class="product-card" data-index="${index}">
        <div class="card-slider-wrap">
          ${ofertaHTML}
          <div class="card-track" data-current="0" data-total="${p.imagenes.length}">
            ${slidesHTML}
          </div>
          ${controlesHTML}
        </div>
        <div class="card-body">
          <span class="card-cat">${p.categoria}</span>
          <h4 class="card-title" title="${p.nombre}">${p.nombre}</h4>
          <div class="card-prices">
            ${precioViejoHTML}
            <span class="price-current">S/ ${p.precio}</span>
          </div>
          <div class="card-actions">
            <button class="btn-wa" onclick="pedirPorWhatsApp('${encodeURIComponent(p.nombre)}', '${p.precio}')">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
              Consultar
            </button>
            <button class="btn-share" onclick="compartirProducto('${encodeURIComponent(p.nombre)}', '${p.precio}')" aria-label="Compartir">
              ${SVG_SHARE}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 3. DELEGACIÓN DE EVENTOS (CARRUSELES)
// ==========================================
// Al delegar eventos, ahorramos memoria evitando miles de eventListeners en tarjetas.
document.getElementById('productosGrid')?.addEventListener('click', (e) => {
  const btnArrow = e.target.closest('.card-arrow');
  if (!btnArrow) return;
  
  const sliderWrap = btnArrow.closest('.card-slider-wrap');
  const track = sliderWrap.querySelector('.card-track');
  const dots = sliderWrap.querySelectorAll('.card-dot');
  
  const total = parseInt(track.dataset.total);
  let current = parseInt(track.dataset.current);
  const dir = parseInt(btnArrow.dataset.dir);
  
  current = (current + dir + total) % total;
  
  // Actualizar UI
  track.dataset.current = current;
  track.style.transform = `translateX(-${current * 100}%)`;
  
  dots.forEach(d => d.classList.remove('activo'));
  if (dots[current]) dots[current].classList.add('activo');
});

// ==========================================
// 4. FUNCIONES DE ACCIÓN (WHATSAPP Y COMPARTIR)
// ==========================================
function pedirPorWhatsApp(nombreCodificado, precio) {
  const nombre = decodeURIComponent(nombreCodificado);
  const mensaje = `Hola KOOLZONE! 🚀\nMe interesa este producto:\n\n*${nombre}*\n💰 Precio: S/ ${precio}\n\n¿Tienen disponibilidad?`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function compartirProducto(nombreCodificado, precio) {
  const nombre = decodeURIComponent(nombreCodificado);
  const texto = `${nombre} — S/ ${precio}`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "KOOLZONE Paita",
      text: texto,
      url: url
    }).catch(err => console.log("Compartir cancelado"));
  } else {
    // Fallback corregido sintácticamente
    navigator.clipboard.writeText(`${texto}\n${url}`).then(() => {
      alert("¡Enlace copiado al portapapeles!");
    });
  }
}

// ==========================================
// 5. HERO SLIDER AUTO-PLAY
// ==========================================
function initHeroSlider() {
  const track = document.getElementById('heroTrack');
  const dotsContainer = document.getElementById('heroDots');
  const bar = document.getElementById('heroProgress');
  
  if (!track || !dotsContainer || !bar) return;

  const slidesCount = track.children.length;
  let currentSlide = 0;
  const intervalTime = 4000;
  let slideTimer;

  // Crear dots
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('button');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll('.dot');

  function goToSlide(index) {
    currentSlide = (index + slidesCount) % slidesCount;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach(d => d.classList.remove('active'));
    if(dots[currentSlide]) dots[currentSlide].classList.add('active');
    
    // Reset ProgressBar
    bar.style.transition = 'none';
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${intervalTime}ms linear`;
        bar.style.width = '100%';
      });
    });
  }

  function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), intervalTime);
  }

  goToSlide(0);
  resetTimer();
}

// ==========================================
// 6. LIGHTBOX VISOR DE IMÁGENES
// ==========================================
let lbIndex = 0;
let lbImgArray = [];

function abrirLightbox(productoIndex, currentImgSrc) {
  const lightbox = document.getElementById('lightbox');
  const imgEl = document.getElementById('lbImg');
  
  lbImgArray = PRODUCTOS[productoIndex].imagenes;
  lbIndex = lbImgArray.indexOf(currentImgSrc.replace(window.location.origin + '/', ''));
  if (lbIndex === -1) lbIndex = 0; // fallback
  
  imgEl.src = lbImgArray[lbIndex];
  lightbox.showModal();
}

document.getElementById('lbCerrar')?.addEventListener('click', () => {
  document.getElementById('lightbox').close();
});

document.getElementById('lbNext')?.addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % lbImgArray.length;
  document.getElementById('lbImg').src = lbImgArray[lbIndex];
});

document.getElementById('lbPrev')?.addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + lbImgArray.length) % lbImgArray.length;
  document.getElementById('lbImg').src = lbImgArray[lbIndex];
});

// ==========================================
// 7. INICIALIZACIÓN GLOBAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  
  renderProductos();

  // Filtramos solo los que tienen masVendido: true (máximo 3)
  const masVendidos = PRODUCTOS.filter(p => p.masVendido === true).slice(0, 3);
  
  // Los pintamos en el contenedor de arriba
  renderProductos(masVendidos, "masVendidosGrid");

  initHeroSlider();

  // Filtros de Categorías
  const btnCategorias = document.querySelectorAll(".cat-btn");
  btnCategorias.forEach(btn => {
    btn.addEventListener("click", function() {
      btnCategorias.forEach(b => b.classList.remove("activo"));
      this.classList.add("activo");
      categoriaActiva = this.dataset.cat;
      renderProductos();
    });
  });

  // Buscador en vivo
  document.querySelector(".search-input")?.addEventListener("input", renderProductos);

  // Botón Scroll Top
  const btnArriba = document.getElementById("btnArriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btnArriba.classList.add("visible");
    } else {
      btnArriba.classList.remove("visible");
    }
  });

  btnArriba?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
