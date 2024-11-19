import React, { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

const Nukebarrel = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/nuke.glb");
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 15);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return (
    <group {...props} dispose={null}>
      <group scale={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material001_0.geometry}
          material={materials['Material.001']}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/nuke.glb"); 

export default Nukebarrel; 