export class Triangle {
    constructor(x, y, side) {
      this.x = x;
      this.y = y;
      this.side = side;
    }
    render(color) {
      const height = (Math.sqrt(3) / 2) * this.side;
      const path = `M ${this.x} ${this.y - height / 4} ` +
                   `L ${this.x - this.side / 2} ${this.y + height / 4} ` +
                   `L ${this.x + this.side / 2} ${this.y + height / 4} ` +
                   `Z`;
      const fill = color ? `fill="${color}"` : '';
      const centerX = this.x;
      const centerY = this.y + height / 12; // Adjust text center vertically
      return `<path d="${path}" ${fill}/>` + this.renderText(centerX, centerY);
    }
    renderText(x, y) {
      return `<text x="${x}" y="${y}" text-anchor="middle" alignment-baseline="middle">Triangle</text>`;
    }
    setWidth(width) {
      this.side = width;
    }
    setHeight(height) {
      this.side = height / (Math.sqrt(3) / 2);
    }
  }
  export class Circle {
    constructor(cx, cy, r) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
    }
    render(color) {
      const fill = color ? `fill="${color}"` : '';
      const centerX = this.cx;
      const centerY = this.cy;
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>` + this.renderText(centerX, centerY);
    }
    renderText(x, y) {
      return `<text x="${x}" y="${y}" text-anchor="middle" alignment-baseline="middle">Circle</text>`;
    }
    setWidth(width) {
      this.r = width / 2;
    }
    setHeight(height) {
      this.r = height / 2;
    }
  }
  export class Square {
    constructor(x, y, side) {
      this.x = x;
      this.y = y;
      this.side = side;
    }
    render(color) {
      const fill = color ? `fill="${color}"` : '';
      const centerX = this.x;
      const centerY = this.y;
      return `<rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" width="${this.side}" height="${this.side}" ${fill}/>` + this.renderText(centerX, centerY);
    }
    renderText(x, y) {
      return `<text x="${x}" y="${y}" text-anchor="middle" alignment-baseline="middle">Square</text>`;
    }
    setWidth(width) {
      this.side = width;
    }
    setHeight(height) {
      this.side = height;
    }
  }