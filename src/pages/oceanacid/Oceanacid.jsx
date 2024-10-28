import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import WelcomeText from './WelcomeText';
import Ocean from './models-3d/Ocean';
import Lights from '../../lights/Lights';

const acidification = () => {

  return (
    <>
        <Canvas className="ocean"shadows camera={{position:[0,1,5]}}>
          <OrbitControls/>
          <Ocean/>
          <Lights/>
          <WelcomeText/>
        </Canvas>
      </>
    
  );
}

export default acidification;

