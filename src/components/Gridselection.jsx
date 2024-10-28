import React from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import "./Gridselection.css";
import { OrbitControls } from "@react-three/drei";


const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); 

  return <primitive object={scene} scale={[1, 1, 1]} />;
};

const themes = [
  {
    title: "Contaminación del agua",
    modelPath: "/models-3d/fish_skeleton.glb",
    link: "/waterpollution",
  },
  {
    title: "Acidificación de los océanos",
    modelPath: "/models-3d/coral_in_salt.glb",
    link: "/oceanacid",
  },
  {
    title: "Microplásticos",
    modelPath: "/models-3d/microplastic_case.glb",
    link: "/microplastics",
  },
  {
    title: "Escasez del agua",
    modelPath: "/models-3d/valley.glb",
    link: "/watershortages",
  },
];

const Gridselection = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="grid">
      {themes.map((theme, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleClick(theme.link)}
        >
          <div className="modelContainer">
            <Canvas style={{ height: "100px", width: "100%" }}>
              <OrbitControls autoRotate />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Model modelPath={theme.modelPath} />
            </Canvas>
          </div>
          <h3>{theme.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gridselection;
