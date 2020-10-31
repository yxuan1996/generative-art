const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
//import this for color
const palettes = require('nice-color-palettes');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = ({ width, height }) => {
  const palette =random.pick(palettes);
  //option to limit the number of colors in palette
  //const palette =random.pick(palettes).slice(0,3);
  console.log(palette);

  const backgroundpalette = random.pick(palettes);
  const backgroundcolor = random.pick(backgroundpalette);

  const count = 30;
  const margin = width * 0.15;
  const padding = 20;
  const tileSize = (width - margin * 2) / count - padding;

  //function to generate a grid
  const createGrid = () => {
    const points=[];
    for (let x=0; x<count; x++){
      for (let y=0; y<count; y++){
        const u = count <= 1? 0.5: x/ (count-1);
        const v = count <= 1? 0.5: y/ (count-1);
        const radius = Math.abs(random.noise2D(u,v));
        points.push({
          color: random.pick(palette),
          radius, 
          position: [u,v], 
          rotation: 2
        });
      }
    }
    return points;
  };

  //we can set random seed to create pseudorandomness (reproducible)
  random.setSeed(64);
  //create randomness using filter
  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = backgroundcolor;
    context.fillRect(0, 0, width, height);

    points.forEach((data) => {
      const {
        color, position, radius, rotation
      } = data;
      const [u,v] = position;

      const x = lerp(margin,width-margin, u);
      const y = lerp(margin,height-margin, v);

      context.fillStyle = color;
      context.font = `${radius*width}px "Arial"`;
      //option to rotate at a specific point
      //context.translate(x,y)
      context.rotate(rotation);
      context.fillText("_", x,y);
    });
  };
};

canvasSketch(sketch, settings);
