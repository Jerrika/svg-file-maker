const filesystem = require('fs');
const inquirer = require("inquirer");

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

class Circle {
    constructor() {
        this._cx = 150;
        this._cy = 100;
        this._r = 50;
        this._color = '';
    }

    setColor(color) {
        this._color = color;
    }

    render() {
        return `<circle cx="${this._cx}" cy="${this._cy}" r="${this._r}" fill="${this._color}" />`;
    }
}

class Square {
    constructor() {
        this._x = 100;
        this._y = 50;
        this._size = 100;
        this._color = '';
    }

    setColor(color) {
        this._color = color;
    }

    render() {
        return `<rect x="${this._x}" y="${this._y}" width="${this._size}" height="${this._size}" fill="${this._color}" />`;
    }
}

class Triangle {
    constructor() {
        this._points = '100,0 200,200 0,200';
        this._color = '';
    }

    setColor(color) {
        this._color = color;
    }

    render() {
        return `<polygon points="${this._points}" fill="${this._color}" />`;
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

async function init() {
    console.log("Starting init");
    var svgString = "";
    var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    var user_text = answers.text;
    var user_font_color = answers["text-color"];
    var user_shape_color = answers.shape;
    var user_shape_type = answers["pixel-image"];

    let user_shape;
    if (user_shape_type.toLowerCase() === "square") {
        user_shape = new Square();
    } else if (user_shape_type.toLowerCase() === "circle") {
        user_shape = new Circle();
    } else if (user_shape_type.toLowerCase() === "triangle") {
        user_shape = new Triangle();
    } else {
        console.log("Invalid shape!");
        return;
    }

    user_shape.setColor(user_shape_color);

    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    console.log("Displaying shape:\n\n" + svgString);
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
}

init();