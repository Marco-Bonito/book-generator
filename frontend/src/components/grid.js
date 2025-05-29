class GridLayout {
    constructor({ style = {}, items = [] } = {}) {
        this.style = style;
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    // Genera HTML per la grid come stringa
    render() {
        const styleString = Object.entries({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            ...this.style
        }).map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${v}`).join(';');

        return `
            <div style="${styleString}">
                ${this.items.map(item => `<div>${item}</div>`).join('')}
            </div>
        `;
    }
}

export default GridLayout;
