/*eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const AquaticSystem = (props) =>{
    const {nodes,materials} = useGLTF("models-3d/acuatic-system.glb");
    return(
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="high_poly"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={[100,100,100]}
          position={[1.946, 1.53, 3.993]}
        />
        <mesh name = "System" position={[0, 0.5, -2]} rotation-x = {Math.PI /2} castShadow>
        <boxGeometry args = {[2, 1, 0.2]}/>
        </mesh>
      </group>
    </group>
    );
};
export default AquaticSystem;
useGLTF.preload("models-3d/acuatic-system.glb");