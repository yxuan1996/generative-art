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

  const count = 40;
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
        points.push({
          color: random.pick(palette),
          radius: Math.abs(0.01 + random.gaussian() * 0.01), 
          position: [u,v]
        });
      }
    }
    return points;
  };

  //we can set random seed to create pseudorandomness (reproducible)
  random.setSeed(128);
  //create randomness using filter
  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, width, height);

    points.forEach((data) => {
      const {
        color, position, radius
      } = data;
      const [u,v] = position;

      const x = lerp(margin,width-margin, u);
      const y = lerp(margin,height-margin, v);

      context.beginPath();
      context.arc(x, y, radius * width, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
