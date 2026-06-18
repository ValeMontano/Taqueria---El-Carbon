/**
 * Cambia el mapa dinámicamente y gestiona el estado activo de las sucursales
 * @param {HTMLElement} card - El elemento HTML que recibió el click
 * @param {string} mapSrc - URL embebida de Google Maps
 */
function selectSucursal(card, mapSrc) {
  // Remover la clase active de todas las tarjetas
  document.querySelectorAll('.sucursal-card').forEach(c => c.classList.remove('active'));
  
  // Añadir la clase active a la tarjeta seleccionada
  card.classList.add('active');
  
  // Cambiar el src del iframe de manera fluida
  const iframe = document.getElementById('sucursalMap');
  iframe.src = '';
  setTimeout(() => { 
    iframe.src = mapSrc; 
  }, 50);
}
// ── MENÚ HAMBURGUESA ──
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', !isOpen);
  // Bloquear scroll cuando menú está abierto
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

// Cerrar al tocar un link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
