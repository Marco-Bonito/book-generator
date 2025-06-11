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
      { content: `<button id="addBookButton">Add Book</button>` },
      { content: "Elemento 2" },
      "Elemento 3"
    ]
  });
  // Dopo il render, aggiungi il listener
  setTimeout(() => {
    const btn = document.getElementById("addBookButton");
    if (btn) btn.addEventListener("click", () => this.showDialog());
  }, 0);
    return grid.render(); 
  }

  async addBook(book={}) {
    const generalFunction = new Functions();
    try {
      const response = await generalFunction.httpPost(book, "/book/add");
      console.log(response);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  showDialog() { 
  const dialog = document.getElementById("generic-dialog");
  dialog.style = "border-radius: 10px; width: 600px; height: 800px; background-color: white; padding: 20px;";
  dialog.innerHTML = `<h2>Add Book</h2>
    <form id="addBookForm">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>
      <label for="author">Author:</label>
      <input type="text" id="author" name="author" required>
      <label for="creationDate">Creation Date:</label>
      <input type="date" id="creationDate" name="creationDate" required>
      <label for="genres">Genres:</label>
      <input type="text" id="genres" name="genres" required>
      <label for="plot">Plot:</label>
      <textarea id="plot" name="plot" required></textarea>
      <button type="submit">Add Book</button>
    </form>`;
  dialog.show(); 
} 

  closeDialog() { 
  const dialog = document.getElementById("generic-dialog");
  dialog.close(); 
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
