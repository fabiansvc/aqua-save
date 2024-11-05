import { Canvas } from '@react-three/fiber';
import React from 'react';
import Staging from '../staging/Staging';
import WaterShortText from './WaterShortText';
import AmbientModel from './AmbientModel';
import Lights from '../../lights/Lights';
import Video from './video';
import Video2 from './video2';
import ControlsWS from '../../controls/ControlsWS';




const Watershortages = () => {
  const cameraSettings ={
    position: [-18,5,12],
    fov: 60,
  };
  return (

    <Canvas camera={cameraSettings}>
      <ControlsWS/>
      <WaterShortText/>
      <Staging/>
      <AmbientModel/>
      <Lights/>
      <Video name="screen" position-y={1.8}position-x={1.4} scale={0.9}/>
      <Video2 name= "screen2" position-y={1.8}position-x={-1.7}scale={0.9}/>
    </Canvas>

  );
}

export default Watershortages;