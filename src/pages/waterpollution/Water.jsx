import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Beachtown from "./models-3d/Beachtown";
import Staging from "../staging/Staging";
import Controls from "../../controls/Controls";
import Lights from "../../lights/Lights";
import WelcomeText from "./WelcomeText";
import Oceanwaves from "./models-3d/Oceanwaves";
import Boardmodel from "./models-3d/Boardmodel";
import { useNavigate } from "react-router-dom";
import Boatmodel from "./models-3d/Boat";

const Water = () => {

  const navigate = useNavigate(); 

  useEffect(() => {
    alert(
      "Controles para interactuar con los modelos 3D:\n\n" +
      "- Click derecho en los carteles: Ir a la explicación del tema.\n" +
      "- Click derecho en el bote para volver a la página anterior.\n" +
      "- Rueda: Hacer zoom.\n" +
      "- Arrastra el mouse con click derecho para mover la vista del modelo.\n"
    );
  }, []); 


  return (
    <>
    <Canvas>
      <Controls />
      <Lights />
      <Physics debug={true}>
        <WelcomeText />
        <Staging />
        <Beachtown />
        <Oceanwaves />
        <Boardmodel/>
        <Boatmodel />
      </Physics>
    </Canvas>
    </>
  );
};

export default Water;
