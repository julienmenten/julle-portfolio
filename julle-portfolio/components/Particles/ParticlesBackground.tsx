import { FC, useEffect } from "react";
import Particles from "react-tsparticles";
import { ParticlesOptions } from "./ParticlesOptions";
import style from './ParticlesBackground.module.scss';

const ParticlesBackground: FC = () => {
    function particlesLoaded  () : void {
        
    }
    function particlesInit () : void {

    }
    useEffect(() => {
      
    }, [])

    return (
        <>
        <Particles
            className={style.particlesBackground}
            id="background" 
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesOptions}  
            
        />
        </>
    )
}

export default ParticlesBackground;