import { Center, Html, Text, Text3D } from "@react-three/drei";

const TextM = () => {
  return (
    <>
      <Text
        position={[-0.01, 0.5, 0]}
        fontSize={0.1}
        color={"blue"}
        font="/fonts/Blue-Ocean.ttf"
      >
        {" "}
        MICROPLÁSTICOS EN EL AGUA 
      </Text>
      <Text3D
        position={[-0.9, 0.6, 0]}
        anchorX="center"
        anchorY="middle"
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.1}
        height={0.1}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={0.1}
      >
        CONOCE SOBRE LOS
        <meshNormalMaterial/>
      </Text3D>
      <Html
        occlude
        center
        distanceFactor={0.6}
        transform
        position={[-0.01, 0.35, 0]}
      >
        <p className="tittle-text">Los microplásticos son pequeñas partículas de menos de 5milímetros
            que se han convertido en una de las mayores amenazas para nuestros océanos y ríos. Estos diminutos
            fragmentos, provenientes de botellas de plástiocs como botellas, bolsas y microfibras de ropa,
            se descomponen en particulas pequeñas que contaminan nuestros ecosistemas acuáticos y afectan una gran variedad 
            de especies marinas.
        </p>
      </Html>
    </>
  );
};
export default TextM;
