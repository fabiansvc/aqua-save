import React from 'react';
import { useGLTF } from '@react-three/drei';

const Board = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/chalk_board.glb"); // Corrige la ruta según sea necesario

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.MenuBoard_Blanck_0.geometry}
          material={materials.Blanck}
          position={[0, 68.411, 6.028]}
          rotation={[-1.519, 1.569, 1.504]}
          scale={[28.797, 30.303, 30.303]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/chalk_board.glb"); // Asegúrate de que esta sea la ruta correcta a tu archivo

export default Board;
