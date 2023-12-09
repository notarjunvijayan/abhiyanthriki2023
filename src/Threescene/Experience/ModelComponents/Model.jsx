import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Cloud({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF("/Models/Cloud/model.gltf");

  const materialRef = useRef();


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          envMapIntensity={1}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Models/Cloud/model.gltf");
