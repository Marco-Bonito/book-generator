import cardLayout from "../components/card.js";
import GridLayout from "../components/grid.js";
import Functions from "../scripts/functions.js";
import BasePage from "../scripts/internal_page_structure.js";


class DashboardPage extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  
  async setHeaderContent() {
    const grid = new GridLayout({
    styleGrid: { background: "#fafafa" },
    styleElement: { background: "#f2f2f2", textAlign: "center", display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%" },
    items: [
      { id: "addBookButton", content: `<input type="button" id="addBookButton" value="Click me">` },
      { content: "Elemento 2" },
      "Elemento 3"
    ]
  });
  // Dopo il render, aggiungi il listener
  setTimeout(() => {
    const btn = document.getElementById("addBookButton");
    if (btn) btn.addEventListener("click", () => this.addBook());
  }, 0);
    return grid.render(); 
  }

  async addBook() {
    const generalFunction = new Functions();
    try {
      const response = await generalFunction.httpPost({ title: "titolo", creationDate: "01/01/2000", genres: "genere", plot: "trama" }, "/book/add");
      console.log(response);
    } catch (error) {
      console.error("Error adding book:", error);
    }
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
