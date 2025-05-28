class PageLayoutManager {
    constructor() {
        this.generalContainer = document.getElementById('general-container');
        this.sidebarContainer = document.getElementById('sidebar-container');
        this.headerContainer = document.getElementById('header-container');
        this.observer = new MutationObserver(() => {
            this.updateLayout();
        });

        // Avvia il Mutation Observer
        this.observeGeneralContainer();

        // Aggiorna il layout inizialmente
        this.updateLayout();

        // Aggiungi un listener per il resize della finestra
        window.addEventListener('resize', () => this.updateLayout());
    }

    /**
     * Metodo per aggiornare il layout in base alla larghezza dello schermo.
     */
    updateLayout() {
        const isMobile = window.innerWidth <= 768; // Definisce la modalità telefono
        if (isMobile) {
            this.showSidebar();
            this.hideHeader();
        } else {
            this.hideSidebar();
            this.showHeader();
        }

        console.log('Layout aggiornato:', isMobile ? 'Modalità telefono' : 'Modalità desktop');
    }

    /**
     * Mostra la sidebar.
     */
    showSidebar() {
        this.sidebarContainer.style.display = 'block';
    }

    /**
     * Nasconde la sidebar.
     */
    hideSidebar() {
        this.sidebarContainer.style.display = 'none';
    }

    /**
     * Mostra l'header.
     */
    showHeader() {
        this.headerContainer.style.display = 'flex';
    }

    /**
     * Nasconde l'header.
     */
    hideHeader() {
        this.headerContainer.style.display = 'none';
    }

    /**
     * Configura il Mutation Observer per osservare il general-container.
     */
    observeGeneralContainer() {
        this.observer.observe(this.generalContainer, { attributes: true, childList: true, subtree: true });
    }
}

export default PageLayoutManager;
