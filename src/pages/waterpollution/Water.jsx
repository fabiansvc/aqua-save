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
