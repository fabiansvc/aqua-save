import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useSlider from "../../../stores/use-slider";
import { dataMSolution } from "../../../Locals/dataMSolution";

const PlasticBottle = (props) => {
  const { nodes, materials } = useGLTF("models-3d/plastic-bottle.glb");
  const [sub, get] = useKeyboardControls();
  const PlasticBottleRef = useRef(null);

  useEffect(() => {
    return sub(
      (state) => state,
      (pressed) => {
        console.log("forward", pressed);
        console.log("back", pressed);
        console.log("left", pressed);
        console.log("right", pressed);
        console.log("jump", pressed);
      }
    );
  }, [sub]);

  useFrame((state, delta) => {
    const { forward, back, left, right, jump, down } = get();
    //PlasticBottleRef.current.position.y += 0.01 * delta
    //PlasticBottleRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.1)

    if (forward) {
      PlasticBottleRef.current.position.z -= 0.1 * delta;
    }
    if (back) {
      PlasticBottleRef.current.position.z += 0.1 * delta;
    }

    if (left) {
      PlasticBottleRef.current.position.x -= 0.1 * delta;
    }
    if (right) {
      PlasticBottleRef.current.position.x += 0.1 * delta;
    }
    if (jump) {
      PlasticBottleRef.current.position.y += 0.1 * delta;
    }
    if (down) {
      PlasticBottleRef.current.position.y -= 0.1 * delta;
    }

    const pressed = get().back;
  });

  const { setSlider, slider, setData } = useSlider();

  const handleText = (data) => {
    setData(data);
    setSlider(true);
    console.log("click", slider);
  };

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="high_poly"
          ref={PlasticBottleRef}
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.3}
          castShadow
          receiveShadow
          position={[0, 0.01, 0.4]}
          onClick={() => handleText(dataMSolution)}
        />
      </group>
    </group>
  );
};
export default PlasticBottle;

useGLTF.preload("models-3d/plastic-bottle.glb");
