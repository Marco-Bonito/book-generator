import GridLayout from "../components/grid.js";
import BasePage from "../scripts/internal_page_structure.js";

class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  
  async setHeaderContent() {
    const grid = new GridLayout({
    styleGrid: { background: "#fafafa" },
    styleElement: { padding: "20px", background: "#f2f2f2", textAlign: "center" },
    items: [
      { id: "custom1", content: "Elemento Personalizzato 1" },
      { content: "Elemento 2" },
      "Elemento 3"
    ]
  });
    return grid.render(); 
  }

  async setMainContent() {
    const grid = new GridLayout({
      styleGrid: { background: "#fafafa"},
      styleElement: { padding: "20px", background: "#f2f2f2", textAlign: "center" },
      items: ["Elemento 1", "Elemento 2", "Elemento 2", "Elemento 2", "Elemento 2", "Elemento 2"],
    });
    return grid.render(); 
  }

  async render() {
    await super.render();
    await this.afterRender();
  }
}

export default DashboardPage;
