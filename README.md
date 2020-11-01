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

### Export
Export a gif/animation
- First we need to define the fps and duration in settings.
- In the return render function, we change the variable to `playhead` instead of `time`
- we set the output folder (usually relative to desktop or downloads)
```
canvas-sketch webgl-seamless.js --output=tmp/
```
- While the animation is running in the web browser, Ctrt + shift + s (This will export each individual frame as a png image)

After that we use this tool called giftool (https://giftool.surge.sh) 
- This tool allows us to drop a folder of images and it will create a gif for us. 

Export a mp4 file (requires ffmpeg to be installed)
```
canvas-sketch-mp4 tmp/
```

For more info about exports and conversions, read this: https://github.com/mattdesl/canvas-sketch/blob/master/docs/cli.md

### Noise function
```
v = noise2D(x,y)
v = noise3D(x,y,z)
v = noise4D(x,y,z,w)
```

Takes in a coordinate value, returns a value between -1 and 1. 

### 3D 
We use the ThreeJS library to render basic 3D shapes

To create a new 3D sketch, we can specify the template
```
canvas-sketch webgl.js --new --template=three
```

We can use the eases library for fast and slow transitions
```
npm install eases
```
```
const eases = require('eases');
```

##### Material
We draw a basic shape suing `MeshBasicMaterial`

To get a cool wireframe view, we use `MeshBasicMaterial [wireframe]`

Another cool material to use is `MeshNormalMaterial`

To take into account shading, shadows and light, use `MeshStandardMaterial`

### Shaders
To create a new shader
```
canvas-sketch shader.js --new --template=shader
```

RGBA color shader
```
gl_FragColor = vec4(1.0,1.0,1.0,1.0);
```

RGB color shader
```
vec3 colorA = vec3(1.0,0.0,0.0);
```

Mixing different colors
```
vec3 color= mix(colorA,colorB, vUv.x);
```

Installing the noise module
```
npm install glsl-noise
```

Using the noise module: include this line before the void main() function
```
#pragma glslify: noise = require('glsl-noise/simplex/3d');
```

Installing the color shader module
```
npm install glsl-hsl2rgb
```

Using the color shader module: include this line before the void main() function
```
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
```

