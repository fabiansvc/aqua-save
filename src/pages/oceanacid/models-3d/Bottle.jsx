import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";


const Bottle = (props) => {
  const bottleRef = useRef(null);
  const rbBottleRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/acidification/bottle.glb");

  useFrame(() => {
    rbBottleRef.current.addForce({x: 0, y: -0.2, z: 0.1}, true);
  });

  const handleBottle = useCallback(() => {
    rbBottleRef.current.applyImpulse({ x: 0, y: 5, z: -5}, true);
  }, []);


  return (
    <RigidBody 
    gravityScale={0.5} 
    ref={rbBottleRef} 
    name="rbbottle" 
    type="dynamic" 
    colliders="cuboid"
    onCollisionEnter={({ manifold, target, other }) => {
      console.log(
        "Bottle collided at world position",
        manifold.solverContactPoint(0)
      );

      if(other.rigidBodyObject) {
        console.log(
          target.rigidBodyObject.name,
          "Bottle collided with Ocean",
          other.rigidBodyObject.name
        );
      }
    }}
    
    >
     <group ref={bottleRef} {...props} dispose={null}>
          <mesh
          onClick={handleBottle}
          castShadow
          receiveShadow
          position={[14,15,0]}
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          />
     </group>
    </RigidBody>
  );
};

export default Bottle;

useGLTF.preload("models-3d/acidification/bottle.glb");
