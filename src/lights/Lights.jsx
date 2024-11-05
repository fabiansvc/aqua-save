import React from "react";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const shadowCameraRef = useRef();
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);
  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[-8, 7, 4]}
        intensity={4}
        shadow-mapSize={[50, 50]}
        shadow-camera-far={10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={"red"}
      />
    </>
  );
};

export default Lights;
