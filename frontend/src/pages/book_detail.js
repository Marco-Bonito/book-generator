import BasePage from "../scripts/internal_page_structure.js";
import NavbarLayout from "../components/navbar.js";

class BookEditor extends BasePage {
  async setImportScripts() {
    return '<link rel="stylesheet" href="styles/book_detail.css?v=1.0">';
  }

  async setHeaderContent() {
    const navbar = new NavbarLayout({
        styleNavbar: { background: "red", paddingRight: "100px" },
        styleElement: { background: "#f2f2f2", textAlign: "center", display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "space-between", padding: "10px", },
        items: [{}]
    })
    return navbar.render();
  }

  async setMainContent() {
  return `
    <div style="display: flex; gap: 10px; margin-bottom: 10px;">
      <button id="alignLeftBtn" type="button">Sinistra</button>
      <button id="alignCenterBtn" type="button">Centro</button>
      <button id="alignRightBtn" type="button">Destra</button>
    </div>
    <div style="display: flex; justify-content: center; align-items: flex-start; width: 100%; height: 100%;">
      <div
        id="editor"
        contenteditable="true"
        style="
          width: 40vw;
          height: 70vh;
          min-height: 400px;
          min-width: 300px;
          max-width: 100%;
          max-height: 80vh;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          font-size: 1.1rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          box-sizing: border-box;
          outline: none;
          resize: none;
          background: #fff;
          overflow: auto;
          text-align: left;
        "
        placeholder="Scrivi la tua storia..."
        autofocus
    ></div>
    <script>
      document.getElementById('alignLeftBtn').onclick = function() {
        document.execCommand('justifyLeft');
      };
      document.getElementById('alignCenterBtn').onclick = function() {
        document.execCommand('justifyCenter');
      };
      document.getElementById('alignRightBtn').onclick = function() {
        document.execCommand('justifyRight');
      };
    </script>
  `;
  }
  async afterRender() {
  // Aggiungi i listener dopo che il DOM è stato aggiornato
  const leftBtn = document.getElementById('alignLeftBtn');
  const centerBtn = document.getElementById('alignCenterBtn');
  const rightBtn = document.getElementById('alignRightBtn');
  leftBtn && (leftBtn.onclick = () => document.execCommand('justifyLeft'));
  centerBtn && (centerBtn.onclick = () => document.execCommand('justifyCenter'));
  rightBtn && (rightBtn.onclick = () => document.execCommand('justifyRight'));
}

  async render() {
    await super.render();
    await this.afterRender();
  }
}

export default BookEditor;

