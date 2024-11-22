import { Canvas } from "@react-three/fiber";
import "./Microplastics.css";
import React, { useMemo } from "react";
import PlasticBottle from "./models-3d/PlasticBottle";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import AquaticSystem from "./models-3d/AquaticSystem";
import LightsAcuaticSystem from "../../lights/LightsAcuaticSystem";
import TextM from "./TextM.jsx";
import Staging from "../staging/Staging.jsx";
import RainDrop from "./models-3d/RainDrop.jsx";
import Slider from "../../components/slider/Slider.jsx";
import { Physics } from "@react-three/rapier";
import BeachBall from "./models-3d/BeachBall.jsx";
import HermitCrab from "./models-3d/HermitCrab.jsx";
import MicroVideo from "./MicroVideo.jsx";
import PostProcessing from "./postprocessing/PostProcessing";




const Microplastics = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["KeyE"] },
      { name: "back", keys: ["ArrowDown"] },
      { name: "left", keys: ["KeyA"] },
      { name: "right", keys: ["KeyD"] },
      { name: "jump", keys: ["KeyW"] },
      { name: "down", keys: ["KeyS"] },
    ],
    []
  );
  return (
    <>
      <Slider />
      <Canvas shadows={true} camera={{ position: [0, 1, 2], fov: 75 }}>
        <OrbitControls makeDefault />
        <LightsAcuaticSystem />
        <KeyboardControls map={map}>
          <PlasticBottle />
        </KeyboardControls>
        <Physics debug>
          <BeachBall />
          <AquaticSystem />
        </Physics>
        <HermitCrab position={[0.35, -0.1, 0.3]} scale={0.07} />
        <TextM />
        <Staging />
        <PostProcessing/>
        <RainDrop />
        <MicroVideo name="S" position={[2.6,0.5,-2.2]} scale={1}/>
      </Canvas>
    </>
  );
};

export default Microplastics;
