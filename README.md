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

### Files
- sketch.js (basics)
- sketch2.js (grid and randomness)
- sketch3color.js (random colors)