import React from 'react';
import Beachtown from './Beachtown';
import { Canvas } from '@react-three/fiber';
import Staging from '../staging/Staging';
import Controls from '../../controls/Controls';
import Lights from '../../lights/Lights';

const Water  = () => {
  return (
      <Canvas>
        <Staging />
        <Beachtown />
      </Canvas>
  );
}

export default Water;
