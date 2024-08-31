/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

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
            <OrbitControls/> 
            <mesh>
                <sphereGeometry args={[1,10,1]} />
                <meshToonMaterial color="Blue"/>
            </mesh>
        </Canvas>
    )
}
export default World;