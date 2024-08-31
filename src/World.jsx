/* eslint-disable react/no-unknown-property */
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
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshBasicMaterial color="purple"/>
            </mesh>
        </Canvas>
    )
}
export default World;