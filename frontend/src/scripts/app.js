import PageLayoutManager from './page_layout_manager.js';

document.addEventListener('DOMContentLoaded', () => {
    const layoutManager = new PageLayoutManager();

    // Aggiorna le route ogni volta che cambia il layout
    window.addEventListener('resize', () => console.log('Window resized, updating routes...'));
});