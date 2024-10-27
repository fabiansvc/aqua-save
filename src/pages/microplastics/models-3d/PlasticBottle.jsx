/*eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";

const PlasticBottle = (props) => {
    const {nodes, materials} = useGLTF("models-3d/plastic-bottle.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="high_poly"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={1.781}
        />
        <mesh position={[0, -0.5, 0]} rotation-x = {Math.PI /2}>
            <boxGeometry args = {[2, 2, 0.1]}/>
            <meshStandardMaterial color ={"blue"}
            />
        </mesh>
      </group>
    </group>
    );
  };
export default PlasticBottle;

useGLTF.preload("models-3d/plastic-bottle.glb");