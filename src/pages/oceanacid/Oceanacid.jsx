import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Ocean from './models-ocean-3d/Ocean';

const acidification = () => {
  return (
    <>
        <Canvas className="ocean"shadows camera={{position:[0,1,5]}}>
          <OrbitControls/>
          <Ocean/>
        </Canvas>
      </>
    
  );
}

export default acidification;

