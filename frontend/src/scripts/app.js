import { PageLayoutManager } from './layoutManager.js';
import { Navigator } from './navigator.js';

document.addEventListener('DOMContentLoaded', () => {
    const layoutManager = new PageLayoutManager();
    const navigatorManager = new Navigator();

    // Aggiorna le route ogni volta che cambia il layout
    window.addEventListener('resize', () => navigatorManager.renderRoutes());
});