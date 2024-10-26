import React from 'react';
import Beachtown from './Beachtown';
import Board from './Board';
import { Canvas } from '@react-three/fiber';
import Staging from '../staging/Staging';
import Controls from '../../controls/Controls'; // Importa el componente Controls
import Lights from '../../lights/Lights';

const Water = () => {
  const boardPositions = [
    { position: [2, 0.5, -3]},
    { position: [5, 0.5, -1]},
    { position: [-3, 0.5, 2]},
    { position: [1, 0.5, 5]},
  ];

  return (
    <Canvas>
      <Controls /> 
      <Staging />
      <Beachtown />
      {boardPositions.map((props, index) => (
        <Board key={index} {...props} scale={0.02} />
      ))}
      <Lights />
    </Canvas>
  );
};

export default Water;