/**
 * Portafolio WebMapping - Lógica de Navegación Profesional
 */

// Usamos una función autoejecutable para no ensuciar el espacio global
(() => {
    const init = () => {
        const tabsContent = document.getElementById('tabsContent');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentTab = 0;
        const totalTabs = tabButtons.length;

        const updateUI = () => {
            tabButtons.forEach((btn, i) => {
                btn.classList.toggle('active', i === currentTab);
            });
            
            // Gestionar visibilidad de flechas
            prevBtn.style.visibility = currentTab === 0 ? "hidden" : "visible";
            nextBtn.style.visibility = currentTab === totalTabs - 1 ? "hidden" : "visible";
        };

        const goToTab = (index) => {
            if (index < 0 || index >= totalTabs) return;
            currentTab = index;

            // La clave: Pedir al navegador que haga el cambio en el próximo frame libre
            window.requestAnimationFrame(() => {
                const offset = -currentTab * 100;
                tabsContent.style.transform = `translateX(${offset}%)`;
                updateUI();
            });
        };

        // Listeners
        prevBtn.addEventListener('click', () => goToTab(currentTab - 1));
        nextBtn.addEventListener('click', () => goToTab(currentTab + 1));

        tabButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.tab);
                goToTab(index);
            });
        });

        // Soporte teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft") goToTab(currentTab - 1);
            if (e.key === "ArrowRight") goToTab(currentTab + 1);
        });

        // INICIALIZACIÓN SINSTRÉS: 
        // Esperamos a que el navegador esté realmente libre
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                goToTab(0);
                document.body.style.opacity = "1";
            });
        });
    };

    // Esperar a 'load' (CSS y recursos listos)
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();
