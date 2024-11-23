import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Bubble = () => {
  const rbBubbleRef = useRef();

  useFrame(() => {
    rbBubbleRef.current.addForce({ x: -0.00001, y: 0, z: 0 }, true);
  });

  return (
    <>
      <RigidBody ref={rbBubbleRef} type="dynamic" colliders="ball">
        <mesh
          onClick={rbBubbleRef}
          name="bubble1"
          position={[11, 2, -13]}
          castShadow
          scale={0.2}
        >
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Bubble;
