import GridLayout from "../components/grid.js";
import BasePage from "../scripts/internal_page_structure.js";

class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  
  async setHeaderContent() {
    const grid = new GridLayout({
      style: { background: "#fafafa", padding: "20px" },
      items: ["Elemento 1", "Elemento 2"],
    });
    grid.addItem("Elemento 3");
    return grid.render(); // <-- usa il metodo render()
  }

  async setMainContent() {
    let grid = new GridLayout();
    return grid.render(); // <-- usa il metodo render()
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
