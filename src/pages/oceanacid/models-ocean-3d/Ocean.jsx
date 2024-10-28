import { useGLTF } from "@react-three/drei";

const Ocean = (props) => {
  const { nodes, materials } = useGLTF("models-3d/ocean.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Ocean">
          <mesh
            name="Ocean_1"
            geometry={nodes.Ocean_1.geometry}
            material={materials.RedFeelersMaterial}
          />
          <mesh
            name="Ocean_2"
            geometry={nodes.Ocean_2.geometry}
            material={materials.PurpleFeelersMaterial}
          />
          <mesh
            name="Ocean_3"
            geometry={nodes.Ocean_3.geometry}
            material={materials.SeaBottomMaterial}
          />
          <mesh
            name="Ocean_4"
            geometry={nodes.Ocean_4.geometry}
            material={materials.Clownfish2Material}
          />
          <mesh
            name="Ocean_5"
            geometry={nodes.Ocean_5.geometry}
            material={materials.ClownfishMaterial}
          />
          <mesh
            name="Ocean_6"
            geometry={nodes.Ocean_6.geometry}
            material={materials.wire_174186203Material}
          />
          <mesh
            name="Ocean_7"
            geometry={nodes.Ocean_7.geometry}
            material={materials.Coral_Rock1Material}
          />
          <mesh
            name="Ocean_8"
            geometry={nodes.Ocean_8.geometry}
            material={materials.Coral_Rock2Material}
          />
        </group>
        <mesh
          name="Coral"
          geometry={nodes.Coral.geometry}
          material={materials.UrchentBodyMaterial}
        />
      </group>
    </group>
  );
};

export default Ocean;

useGLTF.preload("models-3d/ocean.glb");
