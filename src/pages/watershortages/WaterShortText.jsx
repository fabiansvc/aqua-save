import { Html } from "@react-three/drei";

const WaterShortText = () => {
        return(
            <>
            <Html transform  distanceFactor={3} position={[0.3,3,-2]}>
                <div className="Title">
                <h1>ESCASEZ DEL AGUA</h1>
                
                </div>
                
            </Html>
            <Html transform  distanceFactor={2.3} position={[-2.1,2.7,-2]}>
                <h2>PREVENCION DE LA ESCASEZ DEL AGUA</h2>
            </Html>
            <Html transform  distanceFactor={2.3} position={[2.1,2.7,-2]}>
                <h2>CAUSAS Y CONSECUENCIAS</h2>
            </Html>
            </>
        );
};

export default WaterShortText;