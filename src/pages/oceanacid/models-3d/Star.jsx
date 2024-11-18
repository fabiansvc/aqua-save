import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useSlider from "../../../stores/use-slider";
import { dataMeasurement } from "../../../Locals/dataMeasurement";
import { dataCauses } from "../../../Locals/dataCauses";
import { dataProblem } from "../../../Locals/dataProblem";
import { dataSolution } from "../../../Locals/dataSolution";
import { useRef } from "react";

const Star = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/star.glb");
  const rbStarRef = useRef(null);

  const { setSlider, slider, setData } = useSlider();

  const handleText = (data) => {
    setData(data);
    setSlider(true);
    console.log("click", slider);
  };

  return (
    <RigidBody ref={rbStarRef} name="rbOcean" type="fixed" colliders="ball">
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Star1"
            geometry={nodes.Star.geometry}
            color="blue"
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[-10, 9.5, 5]}
            onClick={() => handleText(dataCauses)}
          />

          <mesh
            name="Star2"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[-3.5, 9.5, 5]}
            onClick={() => handleText(dataMeasurement)}
          />

          <mesh
            name="Star3"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[3.5, 9.5, 5]}
            onClick={() => handleText(dataProblem)}
          />

          <mesh
            name="Star4"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[10, 9.5, 5]}
            onClick={() => handleText(dataSolution)}
          />
        </group>
      </group>
    </RigidBody>
  );
};

export default Star;

useGLTF.preload("models-3d/acidification/star.glb");
