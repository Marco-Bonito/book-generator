class cardLayout {
    constructor({
        title = "",
        description = "",
        imageUrl = "",
        title_style = {},
        description_style = {},
        image_style = {},
    }) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.title_style = title_style;
        this.description_style = description_style;
        this.image_style = image_style;
    }

 render() {
        const styleTitleString = Object.entries({
            ...this.title_style
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

        const styleDescriptionString = Object.entries({
            ...this.description_style
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

        const styleImageString = Object.entries({
            ...this.image_style
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');


        return `
            <div class="card-layout">
                <h1 style="${styleTitleString}">${this.title}</h1>
                <p style="${styleDescriptionString}">${this.description}</p>
                <img src="${this.imageUrl}" style="${styleImageString}" alt="${this.title}">
            </div>
        `;
    }
    

}

export default cardLayout;