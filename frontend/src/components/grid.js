class GridLayout {
    constructor({ styleGrid = {}, items = []  , styleElement = {}} = {}) {
        this.style = styleGrid;
        this.items = items;
        this.styleElement = styleElement;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    render() {
        const styleString = Object.entries({         
            ...this.style
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

        const styleElementString = Object.entries({         
            ...this.styleElement
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

        return `
            <div class="grid-layout" style="${styleString}">
                ${this.items.map(item => `<div class="grid-element" style="${styleElementString}">${item}</div>`).join('')}
            </div>
        `;
    }
}

export default GridLayout;
