import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  return (
    <RigidBody name="rbFloor" friction={10}>
      <mesh {...props} rotation-x={-Math.PI * 0.5} position={[10,-10,7]}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;