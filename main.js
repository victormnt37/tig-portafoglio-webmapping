// Estado del carrusel
let currentTab = 0;
const totalTabs = 8;

const tabsContent = document.getElementById('tabsContent');
const tabButtons = document.querySelectorAll('.tab-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

/**
 * Navega a una pestaña específica
 * @param {number} index - Índice de la pestaña (0-7)
 */
function goToTab(index) {
    // Validar índice
    if (index < 0 || index >= totalTabs) return;
    
    // Actualizar índice actual
    currentTab = index;
    
    // Desplazar el contenedor
    const offset = -index * 100;
    tabsContent.style.transform = `translateX(${offset}%)`;
    
    // Actualizar botones de navegación
    updateActiveButton();
}

/**
 * Ir a la pestaña anterior
 */
function prevTab() {
    if (currentTab > 0) {
        goToTab(currentTab - 1);
    }
}

/**
 * Ir a la siguiente pestaña
 */
function nextTab() {
    if (currentTab < totalTabs - 1) {
        goToTab(currentTab + 1);
    }
}

/**
 * Actualizar el estado visual del botón activo
 */
function updateActiveButton() {
    tabButtons.forEach((btn, index) => {
        if (index === currentTab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Event listeners para botones de navegación
prevBtn.addEventListener('click', prevTab);
nextBtn.addEventListener('click', nextTab);

// Event listeners para tabs de navegación superior
tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const tabIndex = parseInt(e.target.dataset.tab);
        goToTab(tabIndex);
    });
});

// Inicializar (primera pestaña activa) después de que la página cargue completamente para evitar bugs de clic inicial
window.addEventListener('load', () => {
    updateActiveButton();
    // Forzar un pequeño retraso para asegurar que todos los elementos estén listos
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto'; // Habilitar interacciones
    }, 500);
});

// Deshabilitar clics temporalmente al inicio para evitar bugs de carga
document.body.style.pointerEvents = 'none';

