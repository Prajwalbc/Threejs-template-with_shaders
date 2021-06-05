export const vertex = `
  varying vec3 vNormal;
  varying vec2 vUv;

  void main(){
    vNormal = normal;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragment = `
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  varying vec3 vNormal;
  varying vec2 vUv; 

  void main() {
    // vec2 coord = gl_FragCoord.xy/u_resolution.xy;
    // coord.x *= u_resolution.x/u_resolution.y;  //gets rid of the distortion

    vec3 color = vec3(0.);
    // color = vec3(vNormal);
    color = vec3(vUv,abs(sin(u_time* 0.8)));

    gl_FragColor = vec4(color,1.0);
  }
`;
