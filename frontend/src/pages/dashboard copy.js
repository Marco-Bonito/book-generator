import cardLayout from "../components/card.js";
import GridLayout from "../components/grid.js";
import BasePage from "../scripts/internal_page_structure.js";

class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  
  async setHeaderContent() {
    const grid = new GridLayout({
    styleGrid: { background: "#fafafa" },
    styleElement: {background: "#f2f2f2", textAlign: "center", display: "flex", flexWrap: "nowrap", alignItems: "center",  justifyContent: "center", gap: "20px", width: "100%" },
    items: [
      { id: "custom1", content: "Elemento Personalizzato 1" },
      { content: "Elemento 2" },
      "Elemento 3"
    ]
  });
    return grid.render(); 
  }

  async setMainContent() {
      const card1 = new cardLayout({
      title: "Card 1",
      description: "Descrizione della Card 1",
      imageUrl: "https://via.placeholder.com/150",
      title_style: { color: "#333", fontSize: "20px" },
      description_style: { color: "#666", fontSize: "16px" },
      image_style: { width: "100px", height: "100px" }
    });
    const grid = new GridLayout({  
      styleGrid: { background: "#fafafa"},
      styleElement: { padding: "20px", background: "#f2f2f2", textAlign: "center" },
      items: [card1.render(), card1.render(), card1.render()],
    });

    return grid.render(); 
  }

  async render() {
    await super.render();
    await this.afterRender();
  }
}

export default DashboardPage;
