const { Circle, Square, Triangle } = require("./shapes");
describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle(100, 150, 100);
    triangle.setWidth(250);
    triangle.setHeight(250);
    const expected = '<path d="M 0 -144.33756729740646 L -125 72.16878364870323 L 125 72.16878364870323 Z"/>' +
                     '<text x="0" y="64.33756729740646" text-anchor="middle" alignment-baseline="middle">Triangle</text>';
    expect(triangle.render()).toBe(expected);
  });
  test('Circle should render correctly', () => {
    const circle = new Circle(0, 0, 50);
    circle.setWidth(250);
    circle.setHeight(250);
    const expected = '<circle cx="0" cy="0" r="125"/>' +
                     '<text x="0" y="0" text-anchor="middle" alignment-baseline="middle">Circle</text>';
    expect(circle.render()).toBe(expected);
  });
  test('Square should render correctly', () => {
    const square = new Square(0, 0, 100);
    square.setWidth(250);
    square.setHeight(250);
    const expected = '<rect x="-125" y="-125" width="250" height="250"/>' +
                     '<text x="0" y="0" text-anchor="middle" alignment-baseline="middle">Square</text>';
    expect(square.render()).toBe(expected);
  });
});