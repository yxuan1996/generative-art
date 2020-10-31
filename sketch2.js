const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = ({ width, height }) => {
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
        points.push([u,v]);
      }
    }
    return points;
  };

  //we can set random seed to create pseudorandomness (reproducible)
  random.setSeed(128);
  //create randomness using filter
  const points = createGrid().filter(() => random.value() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = '#cc8080';
    context.fillRect(0, 0, width, height);

    points.forEach(([u,v]) => {
      const x = lerp(margin,width-margin, u);
      const y = lerp(margin,height-margin, v);

      context.beginPath();
      context.arc(x, y, tileSize * 0.5, 0, Math.PI * 2);
      context.fillStyle = '#fff';
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
