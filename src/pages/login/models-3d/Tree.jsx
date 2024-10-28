import { useGLTF } from "@react-three/drei"


const Tree = (props) => {
     const {nodes, materials}= useGLTF("models-3d/tree.glb");
     return (
        <group {...props} dispose={null}>
          <mesh 
            receiveShadow
            geometry={nodes.high_poly.geometry}
            material={materials.Material_0}    
            scale={7.000}
          />
        </group>
     )

};

export default Tree;

useGLTF.preload("models-3d/tree.glb");

