import BasePage from "../scripts/internal_page_structure.js";

class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  async setHeaderContent() {
    let grid = `<div style="display: flex;
                            flex-wrap: wrap;
                            align-items: stretch;
                            justify-content: justify-content;">`;
    const colors = ["#f2f2f2", "#d1e7dd"];
    for (let i = 0; i < 6; i++) {
      grid += `<div style="padding: 20px; background: ${
        colors[i % 2]
      }; text-align: center; min-height: 100px;">Box ${i + 1}</div>`;
    }
    grid += `</div>`;
    return grid;
  }

  async setMainContent() {
    // Esempio di griglia 5x2 con colori alternati
    let grid = `<div style="display: grid; gap: 20px;">`;
    const colors = ["#f2f2f2", "#d1e7dd"];
    for (let i = 0; i < 6; i++) {
      grid += `<div class="card_book" style="padding: 20px; background: ${
        colors[i % 2]
      }; text-align: center;">Box ${i + 1}</div>`;
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
