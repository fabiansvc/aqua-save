import { Environment } from "@react-three/drei";

const Staging = () =>{
    return (
        <>
        
        <Environment 
        ground={{
            height: 20, 
            radius: 60,
            scale: 100,
        }}

        files={"/public/hdris/evening_road_01_puresky_2k.hdr"}
        background={true}
        
        
        />

        </>
    )
} 

export default Staging