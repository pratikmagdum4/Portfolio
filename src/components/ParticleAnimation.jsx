import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Particles = () => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphere} stride={3} ref={ref}>
                <pointsMaterial
                    attach="material"
                    color="#00ADB5"
                    size={0.015}
                    sizeAttenuation
                    transparent
                    opacity={0.75}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const ParticleAnimation = () => {
    return (
        <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
            <Particles />
        </Canvas>
    );
};

export default ParticleAnimation;
