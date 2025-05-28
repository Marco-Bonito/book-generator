class BasePage {
    /** @protected */
    headerContent;
    /** @protected */
    mainContent;
    /** @protected */
    footerContent;
    /** @protected */
    headContent;

    constructor() {
        this.headerContent = document.getElementById('header-content');
        this.mainContent = document.getElementById('main-content');
        this.footerContent = document.getElementById('footer-content');
        this.headContent = document.getElementsByTagName('head')[0];
        this.render();
        
    }

    async render() {
        if (this.headerContent) this.headerContent.innerHTML = await this.setHeaderContent();
        if (this.mainContent) this.mainContent.innerHTML = await this.setMainContent();
        if (this.footerContent) this.footerContent.innerHTML = await this.setFooterContent();

        if (this.headContent) {
            console.log("Head" , this.headContent);
            let existingScripts = this.headContent.innerHTML;
            let scripts = await this.setImportScripts();

            this.headContent.innerHTML = existingScripts + scripts;
        }
    }

    async afterRender() {
        await this.onAfterRender();
    }

    // Metodi "hook" da sovrascrivere nelle sottoclassi
    async setHeaderContent() { return ""; }
    async setMainContent() { return ""; }
    async setFooterContent() { return ""; }
    async setImportScripts() { return ""; }
    async onAfterRender() {}
}

export default BasePage;