/** @format */

import React, { useRef } from "react";
import Map from "../../assets/map.jpeg";
import DisMap from "../../assets/dis-map.jpeg";
import BumMap from "../../assets/bump-map.jpeg";
import Amap from "../../assets/cloud.jpeg";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export default function ThreeScene() {
  const ref = useRef();

  console.log("three");
  function Scene() {
    const [colorMap, disMap, bumMap, aMap] = useLoader(TextureLoader, [
      Map,
      DisMap,
      BumMap,
      Amap,
    ]);
    const [gltf] = useGLTF([
      "https://cdn.motolino.impaxis.io/configurator/glb/N0001.glb",
    ]);

    // useFrame((state, delta) => (ref.current.rotation.y += 0.002))

    return (
      <>
        <directionalLight color="white" position={[1000, 10, 50]} />
        {/* <ambientLight intensity={0} /> */}
        <primitive object={gltf.scene} />
        {/* <mesh ref={ref}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhongMaterial map={colorMap} bumpMap={bumMap} displacementMap={disMap} bumpScale={0.8} displacementScale={-0.02}
            emissiveMap={aMap}
            aoMapIntensity={0.5}
            emissive="white"
            emissiveIntensity={0.1}
          />
        </mesh> */}
      </>
    );
  }
  return (
    <Canvas>
      <OrbitControls makeDefault />
      <Scene />
      {/* <Environment preset="forest" background/> */}
    </Canvas>
  );
}
