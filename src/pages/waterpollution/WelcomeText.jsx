import { Text3D } from "@react-three/drei";

const WelcomeText = () => {
  return (
    <>
      <Text3D
        position={[-8, 7, 0]} font={"/fonts/DRAGON HUNTER_Regular.json"}
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

      <Text3D
        position={[-7, 2, 6.8]} font={"/fonts/DRAGON HUNTER_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.1}
        >
            Maneras de contaminacion
        <meshStandardMaterial color="#e6a316" />
      </Text3D>

      <Text3D
        position={[-6, 3, 4.7]} font={"/fonts/DRAGON HUNTER_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.1}
        >
            Tratamiento del agua
        <meshStandardMaterial color="#e6a316" />
      </Text3D>

      <Text3D
        position={[4.7, 3, 6.8]} font={"/fonts/DRAGON HUNTER_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.1}
        >
            Cuidados del agua
        <meshStandardMaterial color="#e6a316" />
      </Text3D>

      <Text3D
        position={[1.5, 3, 6.8]} font={"/fonts/DRAGON HUNTER_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.1}
        >
            Implicacion personas y empresas
        <meshStandardMaterial color="#e6a316" />
      </Text3D>
    </>
  );
};

export default WelcomeText;
