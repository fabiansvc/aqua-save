import { useHelper } from "@react-three/drei";
import { useRef } from "react";


const LightsPlastic =() =>{
  const pointLightRef = useRef();
  useHelper(pointLightRef);

  const spotLightRef = useRef();
  useHelper(spotLightRef);

  const directionalLightRef = useRef();
  useHelper(directionalLightRef);
    return (
        <>
        <ambientLight intensity={2}/>
        <directionalLight 
        ref={directionalLightRef}
        castShadow
        position={[0,6,5]} 
        intensity={5}
        shadow-mapSice={[10, 10]}
        shadow-camera-far={50}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
          />
        <pointLight
        ref={pointLightRef}
        castShadow
        position={[100,30,100]}
        intensity={4}
        shadow-camera-far={10}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        />
        <spotLight
        ref={spotLightRef}
        castShadow
        position={[100,30,100]}
        intensity={5}
        shadow-camera-far={7}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
        />
        </>
    );
};

export default LightsPlastic;