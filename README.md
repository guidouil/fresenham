[![typescript](https://camo.githubusercontent.com/56e4a1d9c38168bd7b1520246d6ee084ab9abbbb/68747470733a2f2f62616467656e2e6e65742f62616467652f69636f6e2f547970655363726970743f69636f6e3d74797065736372697074266c6162656c266c6162656c436f6c6f723d626c756526636f6c6f723d353535353535)](https://www.typescriptlang.org/)

# Fresenham

This Node.js library (support TypeScript) will calculate a variation of Bresenham's line algorithm for 2 points that can have float values for x and y. You have to pass the extra `step` (pixel width) parameter in this case. You can also set the step to a large integer like 25 to accommodate to a specific width of axes.

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

To get the coordinates of line from (0, 5.5) to (-1, 6) with a step of 0.25 use below code

```js
import { drawLine } from "fresenham";
const linePoints = drawLine(0, 5.5, -1, 6, 0.25);

// OR

const fresenham = require("fresenham");
const linePoints = fresenham.drawLine(0, 5.5, -1, 6, 0.25);
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

You can access each point using below code

```js
linePoints.forEach((point) => {
  const { x, y } = point;
  //...
});
```

## Testing

To run test, clone the repository and in project do the following commands

```sh
npm install
npm test
```

## References

This bresenham variation was inspired by (copied from) the excellent work from [Steve Johns](https://www.middle-engine.com/blog/posts/2020/07/28/bresenhams-line-algorithm).
