import BasePage from '../scripts/internal_page_structure.js';

class DashboardPage extends BasePage {
    async setImportScripts() {
        return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
    }
    async setHeaderContent() {
        return `<h1>Dashboard</h1>`;
    }

    async setMainContent() {
        // Esempio di griglia 3x2 con colori alternati
        let grid = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">`;
        const colors = ["#f2f2f2", "#d1e7dd"];
        for (let i = 0; i < 6; i++) {
            grid += `<div style="padding: 20px; background: ${colors[i % 2]}; text-align: center;">Box ${i + 1}</div>`;
        }
        grid += `</div>`;
        return grid;
    }

    async setFooterContent() {
        return `
            <div style="padding: 10px; background: #eee;">
                <input type="text" placeholder="Scrivi qui..." style="width: 100%; padding: 8px;"/>
            </div>
        `;
    }

    async render() {
        await super.render();
        await this.afterRender();
    }
}

export default DashboardPage;