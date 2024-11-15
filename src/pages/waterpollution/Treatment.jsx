import React from "react";
import "./Treatment.css";
import { Canvas } from "@react-three/fiber";
import Coral from "./models-3d/Coral";
import { OrbitControls } from "@react-three/drei";

const Treatment = () => {
  return (
    <main className="treatment-container">
      <h1 className="treatment-title">Tratamiento del agua</h1>

      <section className="treatment-introduction">
        <h2 className="treatment-introduction-title">Introducción</h2>
        <p className="treatment-description">
          La acidez del agua, medida por su pH, es un factor crucial que influye
          en la vida de los organismos acuáticos y en el equilibrio de los
          ecosistemas. Un nivel de acidez adecuado es esencial para la salud de
          especies como los peces y las plantas acuáticas, ya que un pH
          equilibrado permite procesos vitales como la fotosíntesis y la
          reproducción. Sin embargo, la contaminación y otras actividades
          humanas han incrementado la acidez del agua, lo que puede tener
          consecuencias perjudiciales, como la reducción de la biodiversidad y
          la alteración de las cadenas alimenticias. Por ello, es fundamental
          monitorear y gestionar los niveles de acidez para proteger la salud de
          los ecosistemas acuáticos.
        </p>
      </section>

      <section className="Scene1">
        <Canvas>
          <OrbitControls/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Coral />
        </Canvas>
      </section>

      <h2 className="Scene-title">Puesta en Escena</h2>

      <section className="Scene2">
        <Canvas></Canvas>
      </section>

      <section className="treatment-explanation">
        <h2 className="treatment-title-explanation">
          ¿Qué es la acidificación?
        </h2>
        <p className="treatment-description">
          La acidificación del agua se refiere al proceso mediante el cual el pH
          del agua disminuye, lo que hace que se vuelva más ácida. Este fenómeno
          puede ser causado por diversos factores, como la contaminación
          industrial, la quema de combustibles fósiles y las actividades
          agrícolas. Un pH bajo puede afectar negativamente la vida acuática y
          alterar los ecosistemas acuáticos.
        </p>
      </section>
    </main>
  );
};

export default Treatment;
