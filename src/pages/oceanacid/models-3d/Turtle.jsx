import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const Turtle = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/turtle.glb");
  const [sub, get] = useKeyboardControls();
  const turtleRef = useRef(null);

  useEffect(() => {
    return sub(
      (state) => state.forward,
      (pressed) => {
        console.log("forward", pressed);
      }
    );
  });

  useFrame((state, delta) => {
    const { forward } = get();

    if (forward) {
      turtleRef.current.position.x = Math.cos(state.clock.elapsedTime * 2);
      turtleRef.current.position.y += 1 * delta;
    }

    const pressed = get().back;
  });

  return (
    <RigidBody name="rbturtle" type="fixed" colliders="cuboid">
      <group {...props} dispose={null} position={[-3, 2, 11]}>
        <group name="Scene">
            <mesh
              name="Turtle"
              ref={turtleRef}
              geometry={nodes.Turtle.geometry}
              material={materials.Material_0}
              rotation={[-Math.PI / 1, 6, 3]}
              castShadow
              scale={2}
            />
        
        </group>
      </group>
    </RigidBody>
  );
};

export default Turtle;

useGLTF.preload("models-3d/acidification/turtle.glb");
