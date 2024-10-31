import { Html, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import WelcomeText from './WelcomeText';
import Ocean from './models-3d/Ocean';
import Lights from '../../lights/Lights';
import Slider from '../../components/slider/Slider';

const acidification = () => {

  return (
    <>
        <Slider/>
        <Canvas className="ocean"shadows camera={{position:[0,1,5]}}>
          <Lights/>
          <OrbitControls/>
          <Suspense>
            <Ocean/>
            <WelcomeText/>
          </Suspense>
        </Canvas>
        <Loader />
      </>
    
  );
}

export default acidification;

