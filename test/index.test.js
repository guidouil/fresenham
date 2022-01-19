const expect = require("chai").expect;
const fresenham = require("../src/index");

describe("fresenham", () => {
  it("should return correct array - Vertical", () => {
    const res = [
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 2, y: 4 },
      { x: 2, y: 5 },
      { x: 2, y: 6 },
      { x: 2, y: 7 },
      { x: 2, y: 8 },
      { x: 2, y: 9 },
    ];

    expect(fresenham.drawLine(2, 2, 2, 9)).to.deep.equal(res);
  });
  it("should return correct array - Horizontal", () => {
    const res = [
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 7, y: 2 },
      { x: 8, y: 2 },
    ];

    expect(fresenham.drawLine(3, 2, 8, 2)).to.deep.equal(res);
  });
  it("should return correct array - Diagonal", () => {
    const res = [
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 5, y: 4 },
      { x: 6, y: 5 },
      { x: 7, y: 6 },
      { x: 8, y: 7 },
    ];

    expect(fresenham.drawLine(3, 2, 8, 7)).to.deep.equal(res);
  });
  it("should return correct array - slope > 1", () => {
    const res = [
      { x: 10, y: 3 },
      { x: 9, y: 4 },
      { x: 8, y: 5 },
      { x: 8, y: 6 },
      { x: 7, y: 7 },
      { x: 6, y: 8 },
    ];

    expect(fresenham.drawLine(10, 3, 6, 8)).to.deep.equal(res);
  });
  it("should return correct array - startX > endX", () => {
    const res = [
      { x: 3, y: 5 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
    ];

    expect(fresenham.drawLine(3, 5, 1, 4)).to.deep.equal(res);
  });
  it("should return correct array - slope < 0", () => {
    const res = [
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 0 },
      { x: 7, y: 0 },
      { x: 8, y: 0 },
      { x: 9, y: -1 },
      { x: 10, y: -1 },
      { x: 11, y: -2 },
      { x: 12, y: -2 },
    ];

    expect(fresenham.drawLine(2, 2, 12, -2)).to.deep.equal(res);
  });
  it("should return correct array - 1 > slope > 0", () => {
    const res = [
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 4 },
      { x: 6, y: 5 },
      { x: 7, y: 6 },
      { x: 8, y: 6 },
      { x: 9, y: 7 },
      { x: 10, y: 8 },
      { x: 11, y: 8 },
      { x: 12, y: 9 },
    ];

    expect(fresenham.drawLine(2, 2, 12, 9)).to.deep.equal(res);
  });
  it("should return correct array - Floats", () => {
    const res = [
      { x: 0, y: 5.5 },
      { x: -0.25, y: 5.5 },
      { x: -0.5, y: 5.75 },
      { x: -0.75, y: 6 },
      { x: -1, y: 6 },
    ];

    expect(fresenham.drawLine(0, 5.5, -1, 6, 0.25)).to.deep.equal(res);
  });
});
