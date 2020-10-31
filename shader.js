const canvasSketch = require('canvas-sketch');
const createShader = require('canvas-sketch-util/shader');
const glsl = require('glslify');

// Setup our sketch
const settings = {
  context: 'webgl',
  animate: true
};

// Your glsl code
const frag = glsl(`
  precision highp float;

  uniform float time;
  uniform float aspect;
  varying vec2 vUv;

  void main () {
    //vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
    //gl_FragColor = vec4(color, 1.0);

    //RGBA color, by setting the RGB equal to xyz coordinates, we get a gradient
    vec3 colorA = sin(time) + vec3(1.0,0.0,0.0);
    vec3 colorB = vec3(0.0,0.5,0.0);

    //coordinate at center of screen
    vec2 center = vUv - 0.5;
    center.x *= aspect;
    float dist = length(center);

    //step function aka threshold function, will return 1 if higher than threshold function else 0
    float alpha = step(dist,0.25);

    vec3 color= mix(colorA,colorB, vUv.x);
    gl_FragColor = vec4(color,dist > 0.5? 0.0 : 1.0);
  }
`);

// Your sketch, which simply returns the shader
const sketch = ({ gl }) => {
  // Create the shader and return it
  return createShader({
    clearColor: 'white',
    // Pass along WebGL context
    gl,
    // Specify fragment and/or vertex shader strings
    frag,
    // Specify additional uniforms to pass down to the shaders
    uniforms: {
      // Expose props from canvas-sketch
      time: ({ time }) => time,
      aspect: ({width, height}) => width/height
    }
  });
};

canvasSketch(sketch, settings);
