import { Text3D, Text } from "@react-three/drei";

const WelcomeText = () => {
  return (
    <>
      <Text3D
        position={[-8, 7, 0]}
        font={"/fonts/DRAGON HUNTER_Regular.json"}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={0.05}
        size={0.9}
      >
        Contaminacion del agua
        <meshStandardMaterial color="#1681e6" />
      </Text3D>

      <Text
        position={[0, 1.5, 9]}
        rotation={[0, 6, 0]}
        fontSize={0.2}
        color="black"
      >
        Volver a la página anterior
      </Text>
    </>
  );
};

export default WelcomeText;
