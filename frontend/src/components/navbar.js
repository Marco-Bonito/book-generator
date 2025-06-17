class NavbarLayout {
  constructor({ styleNavbar = {}, styleElement = {}, items = [{}] }) {
    this.styleNavbar = styleNavbar;
    this.styleElement = styleElement;
    this.items = items.map((item, index) => {
      if (typeof item === "object" && item !== null) {
        return {
          id: item.id || `navbar_${index}`,
          content: item.content !== undefined ? item.content : "",
        };
      } else {
        return {
          id: `navbar_${index}`,
          content: item,
        };
      }
    });
  }

  render() {
    const styleString = Object.entries({
      ...this.styleNavbar,
    })
      .map(
        ([k, v]) => `${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${v}`
      )
      .join(";");

    const styleElementString = Object.entries({
      ...this.styleElement,
    })
      .map(
        ([k, v]) => `${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${v}`
      )
      .join(";");

    return `
            <div class="navbar-layout" style="${styleString}">
                ${this.items
                  .map((item) => {
                    return `<div class="navbar-element" id="${item.id}" style="${styleElementString}">${item.content}</div>`;
                  })
                  .join("")}
            </div>
        `;
  }
}

export default NavbarLayout;
