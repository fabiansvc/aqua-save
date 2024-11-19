import React from "react";
import "./Implication.css";
import { Canvas } from "@react-three/fiber";
import Coral from "./models-3d/Coral";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const Implication = () => {
  const navigate = useNavigate();

  const handleCLickA = () => {
    navigate("/Sitemap");
  };

  const handleClickB = () => {
    navigate("/waterpollution");
  };

  return (
    <main className="-container">
      <button className="buttonBackWater" onClick={handleClickB}>Volver a la página anterior</button>
      <button className="buttonBackSite" onClick={handleCLickA}> Volver a la página principal</button>

      <h1 className="-title">Implicación de personas y empresas</h1>
      <section className="implication-introduction">
        <h2 className="implication-introduction-title">¿Que responsabilidad tienen?</h2>
        <p className="implication-description">

          Tanto las personas como las empresas tienen una responsabilidad fundamental en la protección del agua como recurso vital. Los individuos pueden contribuir mediante el uso consciente y eficiente del agua, evitando el desperdicio y reduciendo la contaminación al no arrojar productos químicos o basura a fuentes hídricas. Por su parte, las empresas tienen la obligación de adoptar prácticas sostenibles, como implementar sistemas de tratamiento de aguas residuales, minimizar el uso de productos químicos contaminantes y garantizar que sus procesos de producción respeten las normativas ambientales. Además, ambas partes pueden promover la educación y sensibilización sobre la importancia de preservar este recurso para garantizar su disponibilidad a largo plazo.

        </p>
      </section>

      <section className="Scene1">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Coral />
        </Canvas>
      </section>

      <h2 className="Scene-title">Representación</h2>

      <section className="Scene2">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Coral />
        </Canvas>
      </section>
      <section className="implication-explanation">
        <h2 className="implication-title-explanation">
          ¿Como pueden ayudar a su preservación?
        </h2>
        <p className="implication-description">
          Las personas y las empresas pueden contribuir significativamente a la preservación del agua adoptando prácticas responsables. A nivel individual, es fundamental ahorrar agua en actividades cotidianas, como cerrar el grifo mientras no se utiliza, reparar fugas y optar por tecnologías eficientes en el hogar. También pueden participar en iniciativas de limpieza de cuerpos de agua y fomentar la educación ambiental en sus comunidades. Las empresas, por su parte, pueden implementar sistemas de reciclaje de agua, reducir el consumo en sus procesos productivos y tratar adecuadamente sus aguas residuales antes de verterlas en el medio ambiente. La colaboración entre ambos sectores es clave para garantizar la sostenibilidad de este recurso esencial.
        </p>
      </section>
    </main >
  );
};

export default Implication;
