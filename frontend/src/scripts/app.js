import PageLayoutManager from './page_layout_manager.js';
import Navigator from './navigator.js';
import DashboardPage from '../pages/dev_dashboard.js'; // importa la pagina

document.addEventListener('DOMContentLoaded', () => {
    const layoutManager = new PageLayoutManager();
    const navigator = new Navigator();

    // Aggiorna le route ogni volta che cambia il layout
    window.addEventListener('resize', () => navigator.renderRoutes());

    // Funzione per gestire il routing
    function handleRoute() {
        const hash = window.location.hash;
        if (hash === '#/dashboard' || hash === '' || hash === '#/') {
            new DashboardPage();
        }
        // Qui puoi aggiungere altre route in futuro
    }

    // Ascolta i cambiamenti dell'hash
    window.addEventListener('hashchange', handleRoute);

    // Carica la pagina corretta al primo avvio
    handleRoute();
});