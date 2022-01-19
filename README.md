[![typescript](https://camo.githubusercontent.com/56e4a1d9c38168bd7b1520246d6ee084ab9abbbb/68747470733a2f2f62616467656e2e6e65742f62616467652f69636f6e2f547970655363726970743f69636f6e3d74797065736372697074266c6162656c266c6162656c436f6c6f723d626c756526636f6c6f723d353535353535)](https://www.typescriptlang.org/)

# Fresenham

This Node.js library (support TypeScript) will calculate a variation of Bresenham's line algorithm for a given 2 end points that can have a float values. You need to pass extra `step` (pixel width) parameter in that case.

    npm install fresenham

This module covers all the possible scenarios of a line

- Vertical lines
- Horizontal lines
- Dioganal lines
- Lines where 1 > slope > 0
- Lines with slope > 1
- Lines with slope < 0

## Usage

Method require 5 float `(startX, startY, endX, endY, step)` as parameters. It returns an array of objects `{x, y}`. If you ommit the step parameter, it will be setted to the default value of `1`.

To get the coordinates of line from (1,3) to (7,11) with a step of 1 use below code

```js
let fresenham = require("fresenham");
let pointsList = fresenham.draw(0, 5.5, -1, 6, 0.25);
```

The above code snippet returns array of objects as below

```js
[
  { x: 0, y: 5.5 },
  { x: -0.25, y: 5.5 },
  { x: -0.5, y: 5.75 },
  { x: -0.75, y: 6 },
  { x: -1, y: 6 },
];
```

You can access points using below code

```js
for (const point of pointsList) {
  x = point.x;
  y = point.y;
  // ...
}
```

## References

This was inspired by (copied from) the excellent work from [Steve Johns](https://www.middle-engine.com/blog/posts/2020/07/28/bresenhams-line-algorithm)
