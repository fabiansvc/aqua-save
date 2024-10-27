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
          scale={[50, 50, 50]}
          position={[0,7.5,0]}
        />
        <mesh name = "bottle" position={[0, 2, -2]} rotation-x = {Math.PI /2} castShadow >
            <boxGeometry args = {[2, 1, 0.2]}/>
            <meshStandardMaterial color ={"blue"}
            />
        </mesh>
      </group>
    </group>
    );
  };
export default PlasticBottle;

useGLTF.preload("models-3d/plastic-bottle.glb");