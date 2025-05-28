
// Definisci le route disponibili
const routes = [
    { path: "#/dashboard", label: "Dashboard" },
    { path: "#/profile", label: "Profilo" },
    { path: "#/settings", label: "Impostazioni" }
];

class Navigator {
    constructor() {
        this.sidebarContainer = document.getElementById('sidebar-container');
        this.headerContainer = document.getElementById('header-container');

        console.log('Sidebar:', this.sidebarContainer, 'Header:', this.headerContainer);
        // Render iniziale delle route
        this.renderRoutes();
    }

    renderRoutes() {
        console.log('renderRoutes chiamato');
        const isMobile = window.innerWidth <= 768;
        const navHtml = `
            <nav>
                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:${isMobile ? 'column' : 'row'}; gap:10px;">
                    ${routes.map(route => `<li><a href="${route.path}">${route.label}</a></li>`).join('')}
                </ul>
            </nav>
        `;

        if (isMobile) {
            this.sidebarContainer.innerHTML = navHtml;
            this.headerContainer.innerHTML = "";
        } else {
            this.headerContainer.innerHTML = navHtml;
            this.sidebarContainer.innerHTML = "";
        }
    }
}

export default Navigator;