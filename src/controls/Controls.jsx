import React from 'react';
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
      minAzimuthAngle={-Math.PI / 4} 
      maxAzimuthAngle={Math.PI / 4}  

     
      minPolarAngle={0}        
      maxPolarAngle={Math.PI / 2.5} 

      enableZoom={true} 
    />
  );
};

export default Controls;
