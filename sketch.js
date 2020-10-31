const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ],
  //orientation: 'landscape',
  units: 'cm',
  //set resolution
  pixelsPerInch: 300
  //we can use a paper preset
  //dimensions: 'A4'
};

const sketch = () => {
  return ({ context, width, height }) => {
    //create an orange background spanning the entire canvas
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    //create a circle
    context.beginPath();
    //to ensure that the shapes scale with resolution, use width-relative sizing instead of absolute numbers
    context.arc(width/2, height/2, width*0.2, 0, Math.PI * 2, false);
    context.fillStyle = 'red';
    context.fill();

    //create outline for the circle
    context.lineWidth = width*0.05;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
