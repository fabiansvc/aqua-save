/*eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";


const RainDrop = (props) =>{
    const{nodes,materials} = useGLTF("models-3d/microplastic/rain-drop.glb");

    return(
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="RainDrop1"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.30}
          castShadow
          position={[-0.9, 0.24, 0.2]}
        />
        <mesh
          name="RainDrop2"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.30}
          castShadow
          position={[1, 0.3, 0.2]}>

        </mesh>            
      </group>
    </group>
    );
};

export default RainDrop;

useGLTF.preload("models-3d/microplastic/rain-drop.glb");