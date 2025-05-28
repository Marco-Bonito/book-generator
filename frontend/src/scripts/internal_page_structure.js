class BasePage {
    /** @protected */
    headerContent;
    /** @protected */
    mainContent;
    /** @protected */
    footerContent;

    constructor() {
        this.headerContent = document.getElementById('header-content');
        this.mainContent = document.getElementById('main-content');
        this.footerContent = document.getElementById('footer-content');
    }

    async render() {
        if (this.headerContent) this.headerContent.innerHTML = await this.setHeaderContent();
        if (this.mainContent) this.mainContent.innerHTML = await this.setMainContent();
        if (this.footerContent) this.footerContent.innerHTML = await this.setFooterContent();
    }

    async afterRender() {
        await this.onAfterRender();
    }

    // Metodi "hook" da sovrascrivere nelle sottoclassi
    async setHeaderContent() { return ""; }
    async setMainContent() { return ""; }
    async setFooterContent() { return ""; }
    async onAfterRender() {}
}

export default BasePage;