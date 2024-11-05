import { Canvas } from '@react-three/fiber';
import "./Microplastics.css"; 
import React from 'react';
import PlasticBottle from './models-3d/PlasticBottle';
import {OrbitControls} from '@react-three/drei';
import AquaticSystem from './models-3d/AquaticSystem';
import LightsAcuaticSystem from '../../lights/LightsAcuaticSystem';
import TextM from './TextM.jsx';


const Microplastics = () => {
  return (
    <>
      <Canvas shadows={true} camera = {{position: [0, 1, 2], fov: 75}}>
        <OrbitControls makeDefault/>
        <LightsAcuaticSystem/>
        <PlasticBottle /> 
        <AquaticSystem />
        <TextM/>
      </Canvas>
    </>
    
  );
};

export default Microplastics;
