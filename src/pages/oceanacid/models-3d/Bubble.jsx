import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Bubble = () => {

  const rbBubbleRef = useRef();

  const handleBubble = useCallback(() => {
    rbBubbleRef.current.applyImpulse({ x: 0, y: 20, z: -5}, true);
  }, []);


  return (
    <>
      <RigidBody ref={rbBubbleRef} type="dynamic" colliders="cuboid">
        <mesh  onClick={handleBubble} name="bubble1" position={[10, 2, 9]} castShadow scale={1}>
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Bubble;
