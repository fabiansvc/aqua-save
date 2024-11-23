import { useGLTF } from "@react-three/drei";

const TreeWelcome = (props) => {
  const { nodes, materials } = useGLTF("models-3d/tree.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.high_poly.geometry}
        material={materials.Material_0}
        scale={10.0}
      />
    </group>
  );
};

export default TreeWelcome;

useGLTF.preload("models-3d/tree.glb");
