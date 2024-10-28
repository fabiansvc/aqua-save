
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Deathvalley = (props) => {
  const { nodes, materials } = useGLTF("/public/models-3d/death_valley_-_terrain.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.062, 0.062]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload("/public/models-3d/death_valley_-_terrain.glb"); 

export default Deathvalley; 