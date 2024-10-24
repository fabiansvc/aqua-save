import { OrbitControls } from "@react-three/drei";

const Controls = () =>{
    returns (
        <OrbitControls
        maxPolarAngle={Math.PI * 0.45}
        minPolarAngle={Math.PI * 0.25} 
        target0={[-10, 3, 0]}
        />
    );
}; 

export default Controls; 