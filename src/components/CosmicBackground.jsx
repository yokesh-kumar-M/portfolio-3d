import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, PerspectiveCamera, MeshDistortMaterial, Float as Floating, useScroll as useThreeScroll } from "@react-three/drei";
import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { useTheme } from "../context/ThemeContext";
import * as THREE from "three";

// --- Shaders ---

const nebulaVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nebulaFragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float scroll;
  uniform vec3 color1;
  uniform vec3 color2;

  // Simple noise function
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 p = vUv * 3.0;
    float n = noise(p + time * 0.1 + scroll * 2.0);
    n += 0.5 * noise(p * 2.1 + time * 0.2 - scroll);
    
    float mask = smoothstep(1.0, 0.2, length(vUv * 2.0 - 1.0));
    vec3 color = mix(color1, color2, n);
    gl_FragColor = vec4(color, n * 0.12 * mask);
  }
`;

// --- Components ---

const HyperStars = ({ velocity }) => {
    const starsRef = useRef();

    useFrame((state, delta) => {
        const v = velocity.get();
        if (starsRef.current) {
            starsRef.current.rotation.y += delta * 0.05;
            // Warp stretch effect
            starsRef.current.scale.z = 1 + v * 8;
            starsRef.current.position.z = v * -5;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const AnomalyNucleus = ({ theme, scrollYProgress }) => {
    const meshRef = useRef();
    const isLight = theme === "light";

    useFrame((state, delta) => {
        const scroll = scrollYProgress.get();
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.3;
            meshRef.current.rotation.y += delta * 0.5;
            meshRef.current.rotation.z = scroll * Math.PI * 4;

            // Dynamic positioning
            const targetX = 5 - scroll * 12;
            const targetY = 2 - scroll * 6;
            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
        }
    });

    return (
        <Floating speed={3} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[5, 2, -5]}>
                <icosahedronGeometry args={[2, 15]} />
                <MeshDistortMaterial
                    color={isLight ? "#B8860B" : "#1a1a2e"}
                    emissive={isLight ? "#FFD700" : "#2244ff"}
                    emissiveIntensity={isLight ? 0.5 : 4}
                    distort={0.6}
                    speed={4}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
        </Floating>
    );
};

const ProceduralNebula = ({ theme, scrollYProgress }) => {
    const { viewport } = useThree();
    const uniforms = useMemo(() => ({
        time: { value: 0 },
        scroll: { value: 0 },
        color1: { value: new THREE.Color(theme === "light" ? "#fdfcf0" : "#050515") },
        color2: { value: new THREE.Color(theme === "light" ? "#FFD700" : "#4466ff") }
    }), [theme]);

    useFrame((state) => {
        uniforms.time.value = state.clock.getElapsedTime();
        uniforms.scroll.value = scrollYProgress.get();
    });

    return (
        <mesh position={[0, 0, -15]} scale={[viewport.width * 3, viewport.height * 3, 1]}>
            <planeGeometry />
            <shaderMaterial
                vertexShader={nebulaVertexShader}
                fragmentShader={nebulaFragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

const CosmicBackground = () => {
    const { theme } = useTheme();
    const { scrollYProgress } = useScroll();
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 200 });

    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000"
            style={{
                background: theme === "light"
                    ? "radial-gradient(circle at center, #ffffff 0%, #f4f4f5 100%)"
                    : "radial-gradient(circle at center, #020205 0%, #000000 100%)"
            }}
        >
            <Canvas
                gl={{ antialias: true, alpha: true, PowerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

                <ambientLight intensity={theme === "light" ? 0.8 : 0.1} />
                <pointLight position={[10, 10, 10]} intensity={2} color={theme === "light" ? "#fff" : "#4466ff"} />

                <HyperStars velocity={smoothVelocity} />
                <ProceduralNebula theme={theme} scrollYProgress={scrollYProgress} />
                <AnomalyNucleus theme={theme} scrollYProgress={scrollYProgress} />

                <EffectComposer disableNormalPass>
                    <Bloom
                        luminanceThreshold={theme === "dark" ? 0.2 : 0.8}
                        mipmapBlur
                        intensity={theme === "dark" ? 1.5 : 0.5}
                        radius={0.4}
                    />
                    <Noise opacity={0.02} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <ChromaticAberration offset={[0.002, 0.002]} />
                </EffectComposer>

            </Canvas>

            {/* Modern Overlay Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                        opacity: theme === "dark" ? 0.5 : 0.1,
                        background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)"
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                        opacity: 0.03,
                        mixBlendingMode: 'overlay'
                    }}
                />
            </div>
        </div>
    );
};

export default CosmicBackground;
