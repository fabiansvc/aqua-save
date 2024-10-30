import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Beachtown from "./models-3d/Beachtown";
import Staging from "../staging/Staging";
import Controls from "../../controls/Controls";
import Lights from "../../lights/Lights";
import WelcomeText from "./WelcomeText";
import Oceanwaves from "./models-3d/Oceanwaves";

const Water = () => {
  const boardPositions = [
    { position: [-6, 1, 6.8] },
    { position: [5.3, 2, 6.8] },
    { position: [-5, 2, 4.8] },
    { position: [2.8, 2, 6.8] },
  ];

  return (
    <Canvas>
      <Controls />
      <Lights />
      <Physics debug={true}>
        <WelcomeText />
        <Staging />
        <Beachtown />
        <Oceanwaves />
      </Physics>
    </Canvas>
  );
};

export default Water;
