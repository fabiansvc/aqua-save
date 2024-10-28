import { Center, Text3D } from "@react-three/drei";


const WelcomeText = () => {

  const handleText = (e) => {
    console.log(e);
  }

  return (
    <>
      <Center top position={[0,10,1]}>
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
        bevelThickness={0.}
        height={0.1}
        size={0.5}
        onClick={(e)=>handleText(e)}
        >
        {'La acidificación de los océanos es el proceso por el cual el agua  del mar se vuelve más \n ácida debido al exceso de dióxido  de carbono (CO2) absorbido de la atmósfera.'}
        <meshStandardMaterial color="a7b2b8"  />
      </Text3D>
    </Center>
    </>
  );
};

export default WelcomeText;
