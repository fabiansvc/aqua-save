import { Html, Text, Text3D } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const TextM = () => {
  const handleBottle = () => {
    alert(
      "Para mover la botella\nArriba: W \nAbajo: S\nDerecha: D\nIzquierda: A\nAdelante: E\nAtrás: flecha abajo"
    );
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sitemap");
  };

  return (
    <>
      <Text
        position={[-0.01, 1.1, 0]}
        fontSize={0.1}
        color={"purple"}
        font="/fonts/Blue-Ocean.ttf"
      >
        {" "}
        Conocer sobre los
      </Text>
      <Text3D
        position={[-0.8, 0.9, 0]}
        anchorX="center"
        anchorY="middle"
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.01}
        height={0.1}
        lineHeight={0.8}
        letterSpacing={0.05}
        size={0.1}
      >
        {"MICROPLÁSTICOS\n   EN EL AGUA"}
        <meshNormalMaterial />
      </Text3D>

      <Html
        occlude
        center
        distanceFactor={1}
        transform
        position={[-1.2, 0.85, 0]}
      >
        <button className="ButtonA" onClick={handleClick}>
          volver al menú
        </button>
      </Html>

      <Html
        occlude
        center
        distanceFactor={1}
        transform
        position={[1.2, 0.85, 0]}
      >
        <button className="BM" onClick={handleBottle}>
          Tips para mover botella
        </button>
      </Html>

      <Html
        occlude
        center
        distanceFactor={1}
        transform
        position={[-0.01, 1.2, 0]}
      >
        <p className="tittle-text">
          {" "}
          Haga clic en una de las gotas de agua para
        </p>
      </Html>
      <Text
        position={[-0.01, 0.67, 0]}
        fontSize={0.1}
        color={"purple"}
        font="/fonts/Blue-Ocean.ttf"
      >
        {" "}
        Haga clic en la botella para ver las soluciones
      </Text>

      <Text3D
        position={[-1.2, 0.5, 0]}
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.08}
      >
        {"¿Qué son los\nmicroplásticos?"}
        <meshStandardMaterial color={"purple"} />
      </Text3D>
      <Text3D
        position={[0.5, 0.4, 0]}
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.1}
      >
        {"Recomendaciones"}
        <meshStandardMaterial color={"purple"} />
      </Text3D>
    </>
  );
};
export default TextM;
