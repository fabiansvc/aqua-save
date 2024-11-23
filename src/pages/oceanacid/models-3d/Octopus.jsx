import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Ocean = (props) => {
  const rbOctopusRef = useRef();
  const octopusRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/acidification/octopus.glb"
  );
  const { actions } = useAnimations(animations, rbOctopusRef);
  console.log(actions);

  const handleOctopus = useCallback(() => {
    rbOctopusRef.current.applyImpulse({ x: 0, y: 20, z: -5 }, true);
  }, []);

  return (
    <RigidBody
      ref={rbOctopusRef}
      name="rbOctopus"
      type="fixed"
      colliders="ball"
    >
      <group ref={octopusRef} {...props} dispose={null} position={[12, 1, 8]}>
        <group name="Scene">
          <group name="Octopus">
            <mesh
              onClick={handleOctopus}
              name="Octopus_Body"
              geometry={nodes.Octopus_Cube002.geometry}
              material={materials.Body}
              rotation={[-Math.PI / 1, 7, 3]}
              castShadow
            />

            <mesh
              onClick={handleOctopus}
              name="Octopus_Eyes"
              geometry={nodes.Octopus_Cube002_1.geometry}
              material={materials.Eyes}
              rotation={[-Math.PI / 1, 7, 3]}
            />

            <mesh
              onClick={handleOctopus}
              name="Octopus_Cube002_2"
              geometry={nodes.Octopus_Cube002_2.geometry}
              material={materials["Material.001"]}
              rotation={[-Math.PI / 1, 7, 3]}
            />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Ocean;

useGLTF.preload("models-3d/acidification/octopus.glb");
