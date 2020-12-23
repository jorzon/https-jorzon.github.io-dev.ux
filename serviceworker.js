//asignar un nombre y versión al cache
const CACHE = "v1_cache",
  urlsToCache = [
    //landings
    "./",
    "./about.html",
    "./book-people.html",
    "./la-lena.html",
    "./la-tiendita.html",
    "./nt-futura.html",
    "./nt-grupo",
    "./rodas-romero.html",

    "./css/common.css",
    "./js/main.js",
    "./js/library/jQuery-2.1.3.min.js",
    "./js/library/slick.min.js",
    // imagenes inicio
    "./assets/aplicacion-la-lena.png",
    "./assets/aplicacion-la-tiendita.png",
    "./assets/web-ntgrupo.png",
    "./assets/web-book-people.png",
    "./assets/futura.png",
    "./assets/tributario.png",
    //iconos
    "./assets/proximo.svg",
    "./assets/proximo_v2.svg",
    "./assets/yt.png",
    "./assets/whatsapp_t.svg",
    "./assets/waze.png",
    "./assets/volver-w.svg",
    "./assets/volver.svg",
    "./assets/telefono-inteligente.svg",
    "./assets/rappi.png",
    "./assets/nexflit.png",
    "./assets/linea.svg",
    "./assets/jorzon.png",
    "./assets/instagram.svg",
    "./assets/flecha-hacia-arriba_r.svg",
    "./assets/flecha-hacia-arriba_b.svg",
    "./assets/flecha-hacia-arriba.svg",
    "./assets/flecha-hacia-abajo_v2.svg",
    "./assets/flecha-hacia-abajo_.svg",
    "./assets/flecha-hacia-abajo.svg",
    "./assets/facebook_fb_media_social.png",
    "./assets/facebook.svg",
    "./assets/cerrar_.svg",
    "./assets/celular.svg",
    "./assets/amazon.png",
    "./assets/bb750e9f9790d22abc5016df774373b8.png",
    "./assets/1384063.png",
    "./assets/_volver.svg",

    // footer
    "./assets/linkedin.svg",
    "./assets/whatsapp.svg",

    //favicon
    "./assets/jorzondelgado.png",
    "./assets/favicon.png",

    //bookpeople
    "./assets/book-people/buscalibre.png",
    "./assets/book-people/casa-del-libro.png",
    "./assets/book-people/crisol.png",
    "./assets/book-people/persona.png",
    "./assets/book-people/reading-2605540_1920.png",
    "./assets/book-people/sbs.png",
    "./assets/book-people/web-book-people-a.png",
    "./assets/book-people/web-book-people-b.png",
    "./assets/book-people/web-book-people-busqueda.png",
    "./assets/book-people/web-book-people-categoria.png",
    "./assets/book-people/web-book-people-consultas.png",
    "./assets/book-people/web-book-people-detalle.png",
    "./assets/book-people/web-book-people-inicio.png",
    "./assets/book-people/web-book-people-wireframes-busqueda.png",
    "./assets/book-people/web-book-people-wireframes-detalle.png",
    "./assets/book-people/web-book-people-wireframes-inicio.png",
    "./assets/book-people/web-book-people-wireframes-menu.png",

    //la lena
    "./assets/la-lena/kitchen-731351_1920.jpg",
    "./assets/la-lena/norkys.jpeg",
    "./assets/la-lena/pardos.jpeg",
    "./assets/la-lena/persona.jpg",
    "./assets/la-lena/primos.jpge",
    "./assets/la-lena/rokys.jpeg",
    "./assets/la-lena/web-la-lena.png",
    "./assets/la-lena/web-la-lena-a.png",
    "./assets/la-lena/web-la-lena-b.png",
    "./assets/la-lena/web-la-lena-carrito.png",
    "./assets/la-lena/web-la-lena-confirmacion.png",
    "./assets/la-lena/web-la-lena-detalle.png",
    "./assets/la-lena/web-la-lena-inicio.png",
    "./assets/la-lena/wiraframes-la-lena-carrito.png",
    "./assets/la-lena/wiraframes-la-lena-categoria.png",
    "./assets/la-lena/wiraframes-la-lena-compra.png",
    "./assets/la-lena/wiraframes-la-lena-inicio.png",

    //tiendita
    "./assets/la-tiendita/CTXZ3GLDRNHDDBNYUT4CSPWBAE.jpg",
    "./assets/la-tiendita/holacasero.jpeg",
    "./assets/la-tiendita/tumercado.jpeg",
    "./assets/la-tiendita/persona.png",
    "./assets/la-tiendita/tutiendita-a.png",
    "./assets/la-tiendita/tutiendita-b.png",
    "./assets/la-tiendita/app-tu-tiendita.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-resumen-compra.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-recorrido.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-nuevoproducto-wireframe.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-mapa-wireframe.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-home-wireframe.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-home.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-detalle.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-carrito-wireframe.png",
    "./assets/la-tiendita/aplicacion-la-tiendita-carrito.png",
    "./assets/la-tiendita/alobodega.png",
    "./assets/la-tiendita/wabi.jpeg",

    //futura
    "./assets/nt-futura/office-1209640_1920.jpg",
    "./assets/nt-futura/web-ntfutura-nosotros.png",
    "./assets/nt-futura/web-ntfutura.png",
    "./assets/nt-futura/web-ntfutura-proyectos.png",
    "./assets/nt-futura/web-ntfutura-formulario.png",
    "./assets/nt-futura/web-ntgrupo-servicios.png",

    //ntgrupo
    "./assets/nt-futura/startup-594127_1920.jpg",
    "./assets/nt-futura/web-ntgrupo.png",
    "./assets/nt-futura/web-ntgrupo-categoria.png",
    "./assets/nt-futura/web-ntgrupo-detalle.png",
    "./assets/nt-futura/web-ntgrupo-form.png",
    "./assets/nt-futura/web-ntgrupo-menu.png",

    //rodas
    "./assets/rosas-romero/right-4703933_1920.jpg",
    "./assets/rosas-romero/web-rodas.png",
    "./assets/rosas-romero/web-rodas-categoria.png",
    "./assets/rosas-romero/web-rodas-detalle.png",
    "./assets/rosas-romero/web-rodas-formulario.png",
    "./assets/rosas-romero/web-rodas-menu.png"
  ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", e => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then(cache => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch(err => console.log("Falló registro de cache", err))
  );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", e => {
  const cacheWhitelist = [CACHE];

  e.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

//cuando el navegador recupera una url
self.addEventListener("fetch", e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then(res => {
      if (res) {
        //recuperar del cache
        return res;
      }
      //recuperar de la petición a la url
      return fetch(e.request);
    })
  );
});
