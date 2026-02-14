import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';

const BuildingModel = () => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 4; // Gentle sway
        group.current.position.y = Math.sin(t / 2) / 8; // Gentle float
    });

    return (
        <group ref={group} dispose={null}>
            {/* Main Tower Body */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[3, 8, 3]} />
                <meshStandardMaterial color="#1A3C2F" roughness={0.1} metalness={0.8} />
            </mesh>

            {/* Glass Panels / Windows */}
            <mesh position={[0, 0, 1.51]} castShadow receiveShadow>
                <planeGeometry args={[2.8, 7.8]} />
                <meshStandardMaterial color="#88CCFF" roughness={0} metalness={0.9} opacity={0.3} transparent />
            </mesh>
            <mesh position={[0, 0, -1.51]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
                <planeGeometry args={[2.8, 7.8]} />
                <meshStandardMaterial color="#88CCFF" roughness={0} metalness={0.9} opacity={0.3} transparent />
            </mesh>
            <mesh position={[1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
                <planeGeometry args={[2.8, 7.8]} />
                <meshStandardMaterial color="#88CCFF" roughness={0} metalness={0.9} opacity={0.3} transparent />
            </mesh>
            <mesh position={[-1.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
                <planeGeometry args={[2.8, 7.8]} />
                <meshStandardMaterial color="#88CCFF" roughness={0} metalness={0.9} opacity={0.3} transparent />
            </mesh>

            {/* Top Details / Roof */}
            <mesh position={[0, 4.1, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.8, 0.2, 2.8]} />
                <meshStandardMaterial color="#C5A059" roughness={0.3} metalness={0.8} />
            </mesh>
            <mesh position={[0, 4.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.5, 0.4, 2.5]} />
                <meshStandardMaterial color="#1A3C2F" roughness={0.1} metalness={0.8} />
            </mesh>
            <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
                <meshStandardMaterial color="#C5A059" roughness={0.3} metalness={1} />
            </mesh>

            {/* Base / Podium */}
            <mesh position={[0, -4.2, 0]} castShadow receiveShadow>
                <boxGeometry args={[4, 0.4, 4]} />
                <meshStandardMaterial color="#222" roughness={0.8} />
            </mesh>
            <mesh position={[0, -4.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[4.5, 0.2, 4.5]} />
                <meshStandardMaterial color="#111" roughness={0.8} />
            </mesh>

            {/* Decorative Gold Accents */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3.05, 0.1, 3.05]} />
                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 2.5, 0]}>
                <boxGeometry args={[3.05, 0.1, 3.05]} />
                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, -2.5, 0]}>
                <boxGeometry args={[3.05, 0.1, 3.05]} />
                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.2} />
            </mesh>
        </group>
    );
};

const Building3D = () => {
    return (
        <div className="w-full h-[500px] lg:h-[600px] relative">
            <Canvas shadows dpr={1} gl={{ antialias: true, powerPreference: "high-performance" }}>
                <PerspectiveCamera makeDefault position={[9, 2, 9]} fov={45} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />

                {/* Enhanced Lighting since Environment is removed */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
                <pointLight position={[-10, -5, -10]} intensity={0.5} color="#C5A059" />
                <pointLight position={[10, 5, 10]} intensity={0.5} color="#1A3C2F" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <BuildingModel />
                </Float>
            </Canvas>
        </div>
    );
};

export default Building3D;
