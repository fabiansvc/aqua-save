import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const LightsAcuaticSystem =() => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef);
    return (
        <>
        <ambientLight intensity={1}/>
        <directionalLight 
        ref={directionalLightRef}
        castShadow
        position={[90,200,100]} 
        intensity={5}
        shadow-mapSice={[100, 100]}
        shadow-camera-far={10}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
          />
        </>
    );
};

export default LightsAcuaticSystem;