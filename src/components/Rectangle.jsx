import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Rectangle = () => {
  const groupRef = useRef(null);

  // Animar el modelo GLTF
  useFrame((state, delta) => {
    if (groupRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.cos(elapsedTime) * 3;
      groupRef.current.position.y= Math.sin(elapsedTime) * 3;
    }
  });
  return (
    <mesh ref={groupRef}>
      <sphereGeometry args={[1, 10, 1]} />
      <meshToonMaterial color="#33ecff" />
    </mesh>
  );
};

export default Rectangle;
