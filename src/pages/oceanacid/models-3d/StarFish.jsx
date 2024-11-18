import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const StarFish = (props) => {
  const starfishRef = useRef();
  const rbStarfishRef = useRef(null);
  const { nodes, materials, animations } = useGLTF(
    "models-3d/acidification/starfish.glb"
  );
  const { actions } = useAnimations(animations, starfishRef);

  console.log(actions);

  useEffect(() => {
    actions["Walking"].play();
    return () => actions["Walking"].stop();
  }, [actions]);

  return (
    <RigidBody ref={rbStarfishRef}  name="rbStarFish" type="fixed" colliders={false}>
      <group ref={starfishRef} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.511}
          >
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Armature_9" position={[0, 0.067, 0]}>
                  <group name="GLTF_created_0">
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Starfish}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Underside}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <group name="Plane_8" />
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <CuboidCollider args={[1.5,1,1]} position={[1, 1, 9]}/>
    </RigidBody>
  );
};

export default StarFish;

useGLTF.preload("models-3d/acidification/starfish.glb");
