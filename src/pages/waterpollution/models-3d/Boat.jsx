import React, { useEffect, useRef } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Boatmodel = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/boatwood.glb");
  const [sub, get] = useKeyboardControls();
  const BoatRef = useRef(null);

  useEffect(() => {
    const unsubscribe = sub((state) => {
      console.log(state);
    });
    return unsubscribe; 
  }, [sub]);
  const speed = {
    forward: 0.2,
    back: 0.1,
    left: 0.15,
    right: 0.15,
    jump: 0.3,
    down: 0.3,
  };

  useFrame((state, delta) => {
    const { forward, back, left, right } = get();

    // Movimiento
    if (forward) {
      BoatRef.current.position.x -= speed.forward*delta;
    }
    if (back) {
      BoatRef.current.position.x += speed.back*delta;
    }
    if (left) {
      BoatRef.current.position.z -= speed.left*delta;
    }
    if (right) {
      BoatRef.current.position.z += speed.right*delta;
    }
  });

  return (
    <group {...props} dispose={null} position={[0, 1, 9]} ref={BoatRef} castShadow receiveShadow>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 1.5]} scale={70}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Base_1_JFG_0.geometry}
            material={materials.M_Boat_Base_1_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.SM_Wooden_Boat_1_JFG_M_Boat_Supports_Vertical_JFG_0.geometry
            }
            material={materials.M_Boat_Supports_Vertical_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.SM_Wooden_Boat_1_JFG_M_Boat_Supports_Horizontal_JFG_0
                .geometry
            }
            material={materials.M_Boat_Supports_Horizontal_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Planks_JFG_0.geometry}
            material={materials.M_Boat_Planks_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.SM_Wooden_Boat_1_JFG_M_Boat_MiddlePlank_1_JFG_0.geometry
            }
            material={materials.M_Boat_MiddlePlank_1_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.SM_Wooden_Boat_1_JFG_M_Boat_MiddlePlank_2_JFG_0.geometry
            }
            material={materials.M_Boat_MiddlePlank_2_JFG}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/boatwood.glb");

export default Boatmodel;
