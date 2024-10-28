import { useGLTF } from '@react-three/drei'

const Fishskelton = (props) => {
  const { nodes, materials } = useGLTF("/public/models-3d/fish_skeleton.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.fish}
        position={[0, 0.014, 0.319]}
        rotation={[-1.659, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("/public/models-3d/fish_skeleton.glb"); 

export default Fishskelton; 