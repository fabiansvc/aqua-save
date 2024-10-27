import { Canvas } from '@react-three/fiber';
import React from 'react';
import PlasticBottle from './models-3d/PlasticBottle';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import AquaticSystem from './models-3d/AquaticSystem';
import LightsPlastic from '../../lights/LightsPlastic';


const Microplastics = () => {
  return (
    <>
    <div className="plastic">
      
      <Canvas shadows={true}camera = {{position: [0, 1, 5]}}>
        <OrbitControls makeDefault/>
        <LightsPlastic/>
        <ambientLight position={[15,15,15]} intensity={10}/>
        <SoftShadows size ={50} samples={20} focus={1} />
        <PlasticBottle /> 
        <AquaticSystem />
      </Canvas>
    </div>
    </>
    
  );
}

export default Microplastics;
