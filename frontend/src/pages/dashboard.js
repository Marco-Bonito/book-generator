import BasePage from "../scripts/internal_page_structure.js";

class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  async setHeaderContent() {
    let grid = `<a href="URL_DEL_TUO_LINK">
  <img src="../assets/icons/Icona_del_più.png" alt="Descrizione dell'immagine" style="width: 55px; height: 55px;">
</a>
<div style="display: flex;
                            flex-wrap: nowrap;
                            align-items: center;
                            justify-content: center;
                            gap: 20px;
                            width: 100%;">`; // <--- Added gap here

    const colors = ["#f2f2f2", "#d1e7dd"];
    for (let i = 0; i < 6; i++) {
      grid += `<div style="padding: 20px; background: ${
        colors[i % 2]
      }; text-align: center; min-height: 100px; flex-shrink: 0; min-width: 50px;">Box ${
        i + 1
      }</div>`;
    }
    grid += `</div>`;
    return grid;
  }

  async setMainContent() {
    let grid = `<div class="grid-container" style="display: grid;
                                                  gap: 20px; /* Add some spacing between grid items */
                                                  justify-items: center; /* Center items within their grid cells */
                                                  align-items: stretch;">`;

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
