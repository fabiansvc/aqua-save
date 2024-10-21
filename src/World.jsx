/* eslint-disable react/no-unknown-property */
import { MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Rectangle from "./components/Rectangle";

const World = () =>{
    return(
        <Canvas
            camera={
                {
                    position:[2,0,5]
                }
            }
        >
            <ambientLight intensity={1.5}/>
            <directionalLight position={[0,10,10]} intensity={2} />
            <MapControls/> 
            <Rectangle />
        </Canvas>
    )
}
export default World;