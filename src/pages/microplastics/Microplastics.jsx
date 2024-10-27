import { Canvas } from '@react-three/fiber';
import React from 'react';
import PlasticBottle from './models-3d/PlasticBottle';
import { OrbitControls } from '@react-three/drei';


const Microplastics = () => {
  return (
    <>
    <div className="plastic">
      <Canvas>
        <OrbitControls/>
        <ambientLight position={[15,15,15]} intensity={10}/>
        <PlasticBottle />
      </Canvas>
    </div>
    </>
    
  );
}

export default Microplastics;
