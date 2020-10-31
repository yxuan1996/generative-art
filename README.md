# Generative Art

https://github.com/mattdesl/workshop-generative-art

Cheatsheet: https://github.com/mattdesl/workshop-generative-art/blob/master/docs/cheat-sheet.md

### Installation and Usage

Install canvas sketch
```
npm install canvas-sketch-cli --global
```

Create a new sketch
```
canvas-sketch [FILENAME].js --new --open
```

Opening a previous sketch
```
canvas-sketch [FILENAME].js --open
```

Building a sketch as a HTML file
```
canvas-sketch [FILENAME].js --build --inline
```

Note: If you press Ctrl + S on the browser display you can save the picture to the downloads folder

Additional libraries 
```
npm install canvas-sketch-util
```

Color Palettes
```
npm install nice-color-palettes
```
```
const palettes = require('nice-color-palettes');
```

To create a new 3D sketch, we can specify the template
```
canvas-sketch webgl.js --new --template=three
```

### Files
- sketch.js (basics)
- sketch2.js (grid and randomness)
- sketch3color.js (random colors)
- sketch4noise.js
- sketch5text.js
- webgl.js

### Noise function
```
v = noise2D(x,y)
v = noise3D(x,y,z)
v = noise4D(x,y,z,w)
```

Takes in a coordinate value, returns a value between -1 and 1. 

### 3D 
We use the ThreeJS library to render basic 3D shapes

##### Material
We draw a basic shape suing `MeshBasicMaterial`

To get a cool wireframe view, we use `MeshBasicMaterial [wireframe]`

Another cool material to use is `MeshNormalMaterial`

To take into account shading, shadows and light, use `MeshStandardMaterial`

