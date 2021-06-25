import { FC, useEffect } from "react";
import Particles from "react-tsparticles";
import { ParticlesOptions } from "./ParticlesOptions";
const ParticlesBackground: FC = () => {
    function particlesLoaded  () : void {
        
    }
    useEffect(() => {
      
    }, [])

    return (
        <>
        <Particles
            id="background" 
            loaded={particlesLoaded()}
            options={ParticlesOptions}
            
        />

        
        </>
    )
}

export default ParticlesBackground;