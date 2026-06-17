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