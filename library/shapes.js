class Shape {
    constructor(color, text, backgroundColor) {
        this.color = color;
        this.text = text;
        this.backgroundColor = backgroundColor;

    }
}
class Circle extends Shape {

    constructor(color, text, backgroundColor) {
        super(color, text, backgroundColor);
    }
    getSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`
    }
}

class Triangle extends Shape{
    constructor(color, text, backgroundColor) {
        super(color, text, backgroundColor);
    }
    getSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`
    }
}

class Square extends Shape{
    constructor(color, text, backgroundColor) {
        super(color, text, backgroundColor);
    }
    getSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="10" y="10" width="120" height="120" fill="${this.backgroundColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`
    }
}


module.exports = {Circle, Triangle, Square}