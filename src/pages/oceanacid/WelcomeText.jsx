import { Center, Text3D } from "@react-three/drei";
import useSlider from "../../stores/use-slider";


const WelcomeText = () => {

  const { setSlider, slider } = useSlider()

  const handleText = () => {
    setSlider(!slider)
    console.log("click", slider);
    
  }

  return (
    <>
      <Center top position={[0,12.7,1]}>
        <Text3D
          font={"/fonts/Blue Ocean_Regular.json"}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          ACIDIFICACION DEL OCEANO
          <meshNormalMaterial/>
        </Text3D>

      <Text3D
        position={[-4, -2, 3]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'La acidificación de los océanos es el proceso por el cual el agua  del mar se vuelve más \n ácida debido al exceso de dióxido  de carbono (CO2) absorbido de la atmósfera.'}
        <meshStandardMaterial color="Withe"  />
      </Text3D>

      <Text3D
        position={[-6, -4, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'Definicion'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[0.2, -4, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'Causas'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[6, -4, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'Medicion'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[12, -4, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'Problemas'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[19, -4, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        onClick={handleText}
        >
        {'Soluciones'}
        <meshStandardMaterial color="purple"  />
      </Text3D>
      
    </Center>
    </>
  );
};

export default WelcomeText;
