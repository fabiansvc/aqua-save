import { Canvas } from '@react-three/fiber';
import "./Microplastics.css"; 
import React from 'react';
import PlasticBottle from './models-3d/PlasticBottle';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import AquaticSystem from './models-3d/AquaticSystem';
import LightsPlastic from '../../lights/LightsPlastic';
import LightsAcuaticSystem from '../../lights/LightsAcuaticSystem';


const Microplastics = () => {
  return (
    <>
    <div className="plastic">
      <h1>Micro plásticos en el agua</h1>
      <p>Los microplásticos son pequeñas partículas de plástico de menos de 5 milímetros, se han convertido en una de las mayores amenazas para nuestros océanos y ríos. Estos diminutos fragmentos, provenientes de productos cotidianos como botellas, bolsas y microfibras de ropa, se descomponen en partículas cada vez más pequeñas que contaminan nuestros ecosistemas acuáticos y afectan a una gran variedad de especies marinas.</p>
      </div>
      <Canvas shadows={true} camera = {{position: [0, 5, 10], fov: 100}}>
        <OrbitControls makeDefault/>
        <LightsPlastic/>
        <LightsAcuaticSystem/>
        <ambientLight position={[2,5,0]} intensity={-0.9}/>
        <SoftShadows size ={50} samples={20} focus={1} />
        <PlasticBottle /> 
        <AquaticSystem />
      </Canvas>
    </>
    
  );
};

export default Microplastics;
