import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Microplasticstrash = (props) => {
  const { nodes, materials } = useGLTF("/public/models-3d/microplastic_case.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[1.451, 0.172, 3.878]} rotation={[3.08, -0.635, -0.094]} scale={0.007}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material_0} />
      </group>
    </group>
  )
}

useGLTF.preload("/public/models-3d/microplastic_case.glb"); 

export default Microplasticstrash; 