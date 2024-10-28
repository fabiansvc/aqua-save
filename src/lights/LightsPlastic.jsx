import { useHelper } from "@react-three/drei";
import { useRef } from "react";


const LightsPlastic =() =>{
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
        </>
    );
};

export default LightsPlastic;