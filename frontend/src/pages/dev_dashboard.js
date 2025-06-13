import cardLayout from "../components/card.js";
import GridLayout from "../components/grid.js";
import Functions from "../scripts/functions.js";
import BasePage from "../scripts/internal_page_structure.js";


class DashboardPage extends BasePage {
  constructor() {
    super();
    this.function = new Functions();
    this.bookList = [];
  }
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/dashboard.css?v=1.0">';
  }
  
  async setHeaderContent() {
    const grid = new GridLayout({
    styleGrid: { background: "white" },
    styleElement: { background: "#f2f2f2", textAlign: "center", display: "flex", flexWrap: "no-wrap", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%", borderRadius: "20px" },
    items: [
      { content: `<img id="addBookButton" src="../assets/images/add_icon.png" style=" height:65px; width:65px; cursor: pointer;">` },
      { content: `<img id="showCover" src="../assets/images/Cover_test.jpg" style=" height:200px; width:270;">` },
      `<img id="showCover" src="../assets/images/Cover_test.jpg" style=" height:200px; width:270;">`
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
    try {
      const response = await this.function.httpPost(book, "/book/add");
      await this.getBook({ bookId: 11 }); // Assuming the response contains the book ID
      await this.getAllBooks();
      console.log(response);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  showDialog() {
    // Crea overlay se non esiste già
    let overlay = document.getElementById("popup-blur-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "popup-blur-overlay";
      overlay.style = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(6px); opacity: 0; transition: opacity 0.3s;";
      document.body.appendChild(overlay);
      setTimeout(() => { overlay.style.opacity = "1"; }, 10);
    } else {
      overlay.style.display = "block";
      setTimeout(() => { overlay.style.opacity = "1"; }, 10);
    }

    const dialog = document.getElementById("generic-dialog");
    dialog.style = "border-radius: 10px; width: 600px; max-width: 90vw; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 15px; height: fit-content; background-color: white; overflow: auto; position: fixed; top: 50%; left: 50%; transform: translate(-85%, -50%); z-index: 1000;";
    dialog.innerHTML = `
      <button style="align-item: right; border-radius: 50px; background-color: black; color: white; cursor: pointer;" type="button" id="closeDialogButton">X</button>
      <form id="addBookForm">
      <h1 style="text-align: center; font-family: Trebuchet MS, Times New Roman;" for="title">TITOLO</h1><br>
      <input style="width: 95%; padding: 10px; border-radius: 10px;" type="text" id="title" name="title" required><br>
      <h1 style="text-align: center; font-family: Trebuchet MS, Times New Roman;" for="genres">GENERI</h1><br>
      <input style="width: 95%; padding: 10px; border-radius: 10px;" type="text" id="genres" name="genres"><br>
      <h1 style="text-align: center; font-family: Trebuchet MS, Times New Roman;" for="plot">TRAMA</h1><br>
      <input style="width: 95%; padding: 10px; border-radius: 10px;" id="plot" name="plot"><br>
      <h1 style="text-align: center; font-family: Trebuchet MS, Times New Roman;" for="creationDate">DATA DI CREAZIONE</h1><br>
      <input style="width: 95%; padding: 10px; border-radius: 10px;" type="date" id="creationDate" name="creationDate"><br><br>
      <label for="imageUpload">Carica un'immagine:</label>
      <input type="file" id="imageUpload" name="image" accept="image/*"></>
      <button id="addBookButton" type="submit">Aggiungi Libro</button>
    </form>`;
  dialog.show();
  dialog.classList.remove("open");
  setTimeout(() => {
    dialog.classList.add("open");
    const addBookButton = document.getElementById("addBookButton");
    if (addBookButton) {
      addBookButton.addEventListener("click", (event) => {
        event.preventDefault(); // Previene il submit del form
        const book = {
          title: document.getElementById("title").value,
          genres: document.getElementById("genres").value,
          plot: document.getElementById("plot").value,
          creationDate: document.getElementById("creationDate").value,
          cover: document.getElementById("imageUpload").files[0] // Aggiungi un campo per la copertina
        };
        this.addBook(book);
        this.closeDialog();
      });
    }
    const closeBtn = document.getElementById("closeDialogButton");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeDialog());
    }
  }, 10);
} 


closeDialog() {
  const dialog = document.getElementById("generic-dialog");
  dialog.classList.remove("open");
  setTimeout(() => {
    dialog.innerHTML = "";
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.style.display = "none";
    }
    // Nascondi overlay
    const overlay = document.getElementById("popup-blur-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      setTimeout(() => { overlay.style.display = "none"; }, 300);
    }
  }, 300); // Deve corrispondere alla durata della transizione CSS
}

  async setMainContent() {
      const card1 = new cardLayout({
      title: "Titolo del libro",
      imageUrl: "../assets/images/Cover_test.jpg",
      description: "Trama del libro",
      title_style: { color: "#333", fontSize: "20px" },
      description_style: { color: "#666", fontSize: "16px" },
      image_style: { width: "250px", height: "408px", borderRadius: "5px" }
    });
    const grid = new GridLayout({  
      styleGrid: { background: "white", paddingTop: "100px" },
      styleElement: { padding: "20px", background: "#f2f2f2", textAlign: "center", borderRadius: "20px" },
      items: [card1.render(), card1.render(), card1.render()],
    });

    return grid.render(); 
  }

  async getBook(bookId) {
    try {
      const response = await this.function.httpPost(bookId, "/book/get");
      if (response) {
        this.bookList.push(response);
        console.log("Book fetched successfully:", this.bookList);
      } else {
        console.error("No book data found in response");
      }
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  }

    async getAllBooks() {
    try {
      const response = await this.function.httpPost({bookId: 10}, "/book/getAll");
      if (response) {
        this.bookList = response;
        console.log("Books fetched successfully:", this.bookList);
      } else {
        console.error("No book data found in response");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  async render() {
    await super.render();
    await this.afterRender();
  }
}



export default DashboardPage;
