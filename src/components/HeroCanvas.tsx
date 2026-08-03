import { useEffect, useRef } from "react";

interface HeroCanvasProps {
  theme: string;
}

export function HeroCanvas({ theme }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Shaders supporting dynamic theme colors & wireframe/glow visuals
    const vsSource = `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      attribute vec4 aColor;

      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      uniform vec3 uLightDirection;

      varying lowp vec4 vColor;
      varying lowp vec3 vNormal;

      void main() {
        vec4 pos = uModelViewMatrix * vec4(aPosition, 1.0);
        gl_Position = uProjectionMatrix * pos;
        vec3 normal = normalize(mat3(uModelViewMatrix) * aNormal);
        vNormal = normal;
        float diff = max(dot(normal, normalize(uLightDirection)), 0.35);
        vColor = vec4(aColor.rgb * diff, aColor.a);
      }
    `;

    const fsSource = `
      precision lowp float;
      varying lowp vec4 vColor;
      varying lowp vec3 vNormal;
      uniform float uGlow;

      void main() {
        float rim = 1.0 - max(dot(vec3(0.0, 0.0, 1.0), vNormal), 0.0);
        rim = pow(rim, 2.5) * uGlow;
        gl_FragColor = vec4(vColor.rgb + vec3(rim), vColor.a);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    const aNormal = gl.getAttribLocation(program, "aNormal");
    const aColor = gl.getAttribLocation(program, "aColor");

    const uModelViewMatrix = gl.getUniformLocation(program, "uModelViewMatrix");
    const uProjectionMatrix = gl.getUniformLocation(program, "uProjectionMatrix");
    const uLightDirection = gl.getUniformLocation(program, "uLightDirection");
    const uGlow = gl.getUniformLocation(program, "uGlow");

    // Polyhedron Vertices: Stuffed Stellated Torus / Gyro-Icosahedron Structure
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseIco = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len];
    });

    const icoIndices = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
    ];

    // Theme color palette definitions [R, G, B]
    const themePalettes: Record<string, { primary: number[]; secondary: number[]; glow: number }> = {
      cyberpunk: { primary: [0.0, 0.9, 1.0], secondary: [1.0, 0.18, 0.65], glow: 0.65 },
      retro: { primary: [0.91, 0.5, 0.25], secondary: [0.65, 0.7, 0.41], glow: 0.35 },
      minimal: { primary: [0.15, 0.34, 0.84], secondary: [0.6, 0.7, 0.95], glow: 0.25 },
      neubrutal: { primary: [1.0, 0.81, 0.18], secondary: [1.0, 0.36, 0.56], glow: 0.4 },
      terminal: { primary: [0.27, 0.88, 0.42], secondary: [0.15, 0.6, 0.25], glow: 0.75 }
    };

    const currentPalette = themePalettes[theme] || themePalettes.cyberpunk;

    const outerVertices: number[] = [];
    const outerNormals: number[] = [];
    const outerColors: number[] = [];

    // Build Complex Outer Stellated Icosahedron Structure
    icoIndices.forEach(([a, b, c], idx) => {
      const vA = baseIco[a];
      const vB = baseIco[b];
      const vC = baseIco[c];

      // Calculate centroid and elevate it for stellated spike effect
      const cX = (vA[0] + vB[0] + vC[0]) / 3;
      const cY = (vA[1] + vB[1] + vC[1]) / 3;
      const cZ = (vA[2] + vB[2] + vC[2]) / 3;
      const cLen = Math.sqrt(cX * cX + cY * cY + cZ * cZ);
      const spikeDist = 1.35;
      const vApex = [(cX / cLen) * spikeDist, (cY / cLen) * spikeDist, (cZ / cLen) * spikeDist];

      const faces = [
        [vA, vB, vApex],
        [vB, vC, vApex],
        [vC, vA, vApex]
      ];

      faces.forEach((face, fIdx) => {
        const [p1, p2, p3] = face;
        const cbX = p3[0] - p2[0], cbY = p3[1] - p2[1], cbZ = p3[2] - p2[2];
        const abX = p1[0] - p2[0], abY = p1[1] - p2[1], abZ = p1[2] - p2[2];

        let nX = cbY * abZ - cbZ * abY;
        let nY = cbZ * abX - cbX * abZ;
        let nZ = cbX * abY - cbY * abX;
        const nLen = Math.sqrt(nX * nX + nY * nY + nZ * nZ) || 1;
        nX /= nLen; nY /= nLen; nZ /= nLen;

        const mixRatio = (idx + fIdx) / (icoIndices.length * 3);
        const r = currentPalette.primary[0] * (1 - mixRatio) + currentPalette.secondary[0] * mixRatio;
        const g = currentPalette.primary[1] * (1 - mixRatio) + currentPalette.secondary[1] * mixRatio;
        const bVal = currentPalette.primary[2] * (1 - mixRatio) + currentPalette.secondary[2] * mixRatio;

        [p1, p2, p3].forEach((v) => {
          outerVertices.push(...v);
          outerNormals.push(nX, nY, nZ);
          outerColors.push(r, g, bVal, 0.85);
        });
      });
    });

    // Particle field around mesh
    const particleCount = 140;
    const particlePositions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phiAngle = Math.acos(2 * Math.random() - 1);
      particlePositions.push(
        radius * Math.sin(phiAngle) * Math.cos(theta),
        radius * Math.sin(phiAngle) * Math.sin(theta),
        radius * Math.cos(phiAngle)
      );
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(outerVertices), gl.STATIC_DRAW);

    const normBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(outerNormals), gl.STATIC_DRAW);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(outerColors), gl.STATIC_DRAW);

    const particleBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particlePositions), gl.STATIC_DRAW);

    const createPerspective = (fov: number, aspect: number, near: number, far: number) => {
      const f = 1.0 / Math.tan(fov / 2);
      const nf = 1 / (near - far);
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, 2 * far * near * nf, 0
      ];
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const startTime = performance.now();

    const render = (now: number) => {
      resize();
      const time = (now - startTime) * 0.001;

      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      targetRotY += (mouseX * 0.8 - targetRotY) * 0.05;
      targetRotX += (mouseY * 0.8 - targetRotX) * 0.05;

      const rotY = time * 0.35 + targetRotY;
      const rotX = Math.sin(time * 0.25) * 0.3 + targetRotX;
      const rotZ = Math.cos(time * 0.2) * 0.25;

      const aspect = width / height || 1;
      const projMat = createPerspective((45 * Math.PI) / 180, aspect, 0.1, 100);

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // Model view matrix with multi-axis rotation and floating wave
      const floatY = Math.sin(time * 1.2) * 0.1;
      const modelViewMat = [
        cosY * cosZ, sinX * sinY * cosZ + cosX * sinZ, -cosX * sinY * cosZ + sinX * sinZ, 0,
        -cosY * sinZ, -sinX * sinY * sinZ + cosX * cosZ, cosX * sinY * sinZ + sinX * cosZ, 0,
        sinY, -sinX * cosY, cosX * cosY, 0,
        0, floatY, -4.8, 1
      ];

      gl.uniformMatrix4fv(uProjectionMatrix, false, new Float32Array(projMat));
      gl.uniformMatrix4fv(uModelViewMatrix, false, new Float32Array(modelViewMat));
      gl.uniform3f(uLightDirection, Math.sin(time * 0.5), 1.5, Math.cos(time * 0.5));
      gl.uniform1f(uGlow, currentPalette.glow);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);

      gl.bindBuffer(gl.ARRAY_BUFFER, normBuffer);
      gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aNormal);

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aColor);

      // Draw Main Complex Mesh
      gl.drawArrays(gl.TRIANGLES, 0, outerVertices.length / 3);

      // Draw Particle Dust Field
      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.POINTS, 0, particleCount);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="hero-webgl-wrapper">
      <canvas ref={canvasRef} className="hero-webgl-canvas" />
    </div>
  );
}
