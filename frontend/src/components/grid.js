class GridLayout {
    constructor({ styleGrid = {}, styleElement = {}, items = [{}] }) {
        this.style = styleGrid;
        this.styleElement = styleElement;
        this.items = items.map((item, index) => {
            if (typeof item === "object" && item !== null) {
                return {
                    id: item.id || `grid_${index}`,
                    content: item.content !== undefined ? item.content : ""
                };
            } else {
                return {
                    id: `grid_${index}`,
                    content: item
                };
            }
        });
    }

    addItem(item) {
        const index = this.items.length;
        if (typeof item === "object" && item !== null) {
            this.items.push({
                id: item.id || `grid_${index}`,
                content: item.content !== undefined ? item.content : ""
            });
        } else {
            this.items.push({
                id: `grid_${index}`,
                content: item
            });
        }
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
                ${this.items.map((item) => {
                    return `<div class="grid-element" id="${item.id}" style="${styleElementString}">${item.content}</div>`;
                }).join('')}
            </div>
        `;
    }
}

export default GridLayout;
