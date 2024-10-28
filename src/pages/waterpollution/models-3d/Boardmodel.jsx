import React from 'react'
import { useGLTF } from '@react-three/drei'

const Boardmodel = (props) => {

  const { nodes, materials } = useGLTF("/models-3d/boardmodel.glb")

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cube__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 4.7]}
          scale={100}
        />
      </group>
    </group>
  ); 
}; 


useGLTF.preload("/models-3d/boardmodel.glb"); 

export default Boardmodel; 
 


