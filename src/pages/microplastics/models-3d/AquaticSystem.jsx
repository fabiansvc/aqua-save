/*eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";

const AquaticSystem = (props) =>{
    const {nodes,materials} = useGLTF("models-3d/acuatic-system.glb");
    const PATH = useMemo(() => "materials/floor/plaster_grey_04_", []);

    const floorTexture = useTexture({
      map: PATH + "diff_1k.jpg",
      displacementMap: PATH + "disp_1k.png",
      normalMap: PATH + "nor_gl_1k.jpg",
      roughnessMap: PATH + "rough_1k.jpg",
      aoMap: PATH + "ao_1k.jpg",
    });
    console.log(floorTexture);

    return(
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="high_poly"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={[150,150,100]}
          position={[1.946, 1.53, 3.993]}
        />
        <mesh name = "System" position={[1, -11, -10]} rotation-x = {Math.PI /2} castShadow>
        <boxGeometry args = {[100, 100, 0.2]}/>
        <meshStandardMaterial
        map={floorTexture.map}
        normalMap={floorTexture.normalMap}
        aoMap={floorTexture.aoMap}
        roughnessMap={floorTexture.roughnessMap}
        />        
        </mesh>
      </group>
    </group>
    );
};
export default AquaticSystem;
useGLTF.preload("models-3d/acuatic-system.glb");