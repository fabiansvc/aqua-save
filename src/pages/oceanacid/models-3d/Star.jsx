import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Star = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/star.glb");

  return (
     <RigidBody name="rbOcean" type="fixed" colliders="cuboid">
          <group {...props} dispose={null} >
               <group name="Scene">

               <mesh name="Star1" 
                    geometry={nodes.Star.geometry} 
                    material={materials['Material_0.001']}
                    rotation={[-Math.PI / 1, 1.5, 3]}
                    castShadow 
                    scale={1.5}
                    position={[-13, 12, 4]}
                    />

               <mesh name="Star2" 
                    geometry={nodes.Star.geometry} 
                    material={materials['Material_0.001']}
                    rotation={[-Math.PI / 1, 1.5, 3]}
                    castShadow 
                    scale={1.5}
                    position={[-7, 12, 4]}
               />

               <mesh name="Star3" 
                    geometry={nodes.Star.geometry} 
                    material={materials['Material_0.001']}
                    rotation={[-Math.PI / 1, 1.5, 3]}
                    castShadow 
                    scale={1.5}
                    position={[-1, 12, 4]}
               />

               <mesh name="Star4" 
                    geometry={nodes.Star.geometry} 
                    material={materials['Material_0.001']}
                    rotation={[-Math.PI / 1, 1.5, 3]}
                    castShadow 
                    scale={1.5}
                    position={[5, 12, 4]}
               />

               <mesh name="Star5" 
                    geometry={nodes.Star.geometry} 
                    material={materials['Material_0.001']}
                    rotation={[-Math.PI / 1, 1.5, 3]}
                    castShadow 
                    scale={1.5}
                    position={[12, 12, 4]}
               />

               </group>
          </group>
     </RigidBody>
  );
};

export default Star;

useGLTF.preload("models-3d/acidification/star.glb");
